'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Project } from '@/data/projects';
import type { CaseStudy } from '@/data/case-studies';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectDetail from '@/components/ProjectDetail';

interface ProjectsClientProps {
  projects: Project[];
  caseStudies: CaseStudy[];
}

export default function ProjectsClient({ projects, caseStudies }: ProjectsClientProps) {
  const searchParams = useSearchParams();
  const requestedSlug = searchParams.get('project');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setSelectedProject(
      requestedSlug ? projects.find((project) => project.slug === requestedSlug) ?? null : null
    );
  }, [projects, requestedSlug]);

  useEffect(() => {
    if (!selectedProject) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById('project-detail')?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [selectedProject]);

  const caseStudy = selectedProject
    ? caseStudies.find((cs) => cs.slug === selectedProject.slug)
    : undefined;

  return (
    <div>
      <ProjectGrid
        projects={projects}
        caseStudies={caseStudies}
        selectedSlug={selectedProject?.slug ?? null}
        onSelectProject={setSelectedProject}
      />

      {selectedProject && (
        <div className="mt-10 scroll-mt-24" id="project-detail">
          <ProjectDetail
            project={selectedProject}
            caseStudy={caseStudy}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      )}
    </div>
  );
}
