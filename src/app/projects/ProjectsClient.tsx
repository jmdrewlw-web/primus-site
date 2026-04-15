'use client';
import { useState } from 'react';
import type { Project } from '@/data/projects';
import type { CaseStudy } from '@/data/case-studies';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectDetail from '@/components/ProjectDetail';

interface ProjectsClientProps {
  projects: Project[];
  caseStudies: CaseStudy[];
}

export default function ProjectsClient({ projects, caseStudies }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        <div className="mt-10" id="project-detail">
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
