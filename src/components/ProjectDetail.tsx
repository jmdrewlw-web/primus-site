import Image from 'next/image';
import type { Project } from '@/data/projects';
import type { CaseStudy } from '@/data/case-studies';

interface ProjectDetailProps {
  project: Project;
  caseStudy?: CaseStudy;
  onClose?: () => void;
}

export default function ProjectDetail({ project, caseStudy, onClose }: ProjectDetailProps) {
  if (caseStudy) {
    return (
      <div className="border border-gray-200 rounded-2xl p-8 md:p-10 bg-white shadow-sm">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="font-sans text-[clamp(1.5rem,3vw,2rem)] font-bold text-black leading-tight">
              {project.name}
            </h2>
            <p className="text-purple-700 font-semibold text-sm mt-1">{caseStudy.client}</p>
            {project.location && (
              <p className="text-gray-400 text-sm mt-0.5">{project.location}</p>
            )}
          </div>
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close project detail"
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
            >
              &times;
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={`${project.photoDir}/exterior.jpg`}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="space-y-6">
            {/* Description */}
            <p className="text-gray-600 text-[1rem] leading-relaxed">{caseStudy.description}</p>

            {/* Result card */}
            <div className="bg-purple-50 border border-purple-100 rounded-xl px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-1">
                Result
              </p>
              <p className="text-2xl font-bold text-purple-700 leading-snug">
                {caseStudy.result}
              </p>
            </div>

            {/* Quote */}
            {caseStudy.quote && (
              <blockquote className="border-l-4 border-[#C9A84C] pl-5">
                <p className="text-gray-700 text-[1.05rem] italic leading-relaxed">
                  &ldquo;{caseStudy.quote}&rdquo;
                </p>
                <footer className="mt-3">
                  <p className="text-gray-900 font-semibold text-sm">{caseStudy.quoteAuthor}</p>
                  <p className="text-gray-400 text-xs">{caseStudy.quoteTitle}</p>
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    );
  }

  // No case study — minimal view
  return (
    <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="font-sans text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-black leading-tight">
            {project.name}
          </h2>
          {project.location && (
            <p className="text-gray-400 text-sm mt-1">{project.location}</p>
          )}
          <span className="inline-block mt-2 bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close project detail"
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
          >
            &times;
          </button>
        )}
      </div>

      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 max-w-md">
        <Image
          src={`${project.photoDir}/exterior.jpg`}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
        {/* Initials fallback */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 font-bold text-3xl -z-10"
        >
          {project.name
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w[0])
            .join('')}
        </span>
      </div>
    </div>
  );
}
