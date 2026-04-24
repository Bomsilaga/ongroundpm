"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site";

const { projects } = siteContent;

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-cream"
      aria-label="Selected Projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="mb-16 lg:mb-20">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
            {projects.eyebrow}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal max-w-xl text-balance">
              {projects.headline}
            </h2>
            <p className="font-sans text-base text-warm-muted max-w-sm leading-relaxed">
              {projects.subheadline}
            </p>
          </div>
        </Reveal>

        {/* Project grid — 3 col desktop / 2 col tablet / 1 col mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.items.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article
                className="group flex flex-col rounded-sm border border-border bg-cream-dark overflow-hidden hover:-translate-y-1 hover:shadow-md hover:border-sandstone/60 transition-all duration-300"
                aria-label={project.name}
              >
                {/* Image — 16:9 */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category pill overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="font-sans text-[10px] uppercase tracking-widest bg-charcoal/80 text-cream px-2.5 py-1 rounded-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-1">
                    {project.name}
                  </h3>
                  <p className="font-sans text-xs text-warm-muted mb-3 tabular-nums">
                    {project.suburb} &nbsp;·&nbsp; {project.valueBand}
                  </p>
                  <p className="font-sans text-sm text-warm-muted leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="font-sans text-xs text-warm-muted/60 italic text-center max-w-2xl mx-auto">
          {projects.disclaimer}
        </p>
      </div>
    </section>
  );
}
