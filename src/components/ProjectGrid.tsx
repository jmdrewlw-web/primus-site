'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/projects';
import type { CaseStudy } from '@/data/case-studies';

type FilterCategory = 'All' | 'Healthcare' | 'Commercial' | 'Historic';

const FILTERS: FilterCategory[] = ['All', 'Healthcare', 'Commercial', 'Historic'];

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

interface ProjectGridProps {
  projects: Project[];
  caseStudies: CaseStudy[];
  onSelectProject?: (project: Project | null) => void;
  selectedSlug?: string | null;
}

export default function ProjectGrid({
  projects,
  caseStudies,
  onSelectProject,
  selectedSlug,
}: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects by category">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            role="tab"
            aria-selected={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-purple-700 text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => {
          const isSelected = selectedSlug === project.slug;
          const imageSrc = `${project.photoDir}/exterior.jpg`;

          return (
            <button
              key={project.slug}
              onClick={() =>
                onSelectProject?.(isSelected ? null : project)
              }
              className={`relative aspect-[4/3] rounded-xl overflow-hidden group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 ${
                isSelected ? 'ring-2 ring-purple-700' : ''
              }`}
              aria-pressed={isSelected}
              aria-label={`${project.name}${project.hasCaseStudy ? ', has case study' : ''}`}
            >
              {/* Image or placeholder */}
              <ProjectImage project={project} imageSrc={imageSrc} />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-xl leading-tight">
                  {project.name}
                </p>
                {project.location && (
                  <p className="text-white/80 text-sm mt-1">{project.location}</p>
                )}
                <span className="mt-2 inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded self-start">
                  {project.type}
                </span>
              </div>

              {/* Case Study badge */}
              {project.hasCaseStudy && (
                <div className="absolute top-3 right-3 bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Case Study
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectImage({
  project,
  imageSrc,
}: {
  project: Project;
  imageSrc: string;
}) {
  return (
    <>
      <Image
        src={imageSrc}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={undefined}
      />
      {/* Initials fallback rendered beneath the image */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 font-bold text-2xl -z-10"
      >
        {getInitials(project.name)}
      </span>
    </>
  );
}
