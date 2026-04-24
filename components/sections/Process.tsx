"use client";

import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site";

const { process } = siteContent;

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-charcoal"
      aria-label="How we work"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 lg:mb-20">
          <p className="font-sans text-sm uppercase tracking-widest text-sandstone mb-4">
            {process.eyebrow}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream max-w-xl text-balance">
            {process.headline}
          </h2>
        </Reveal>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid lg:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10 z-0"
            style={{ left: "calc(100% / 8)", right: "calc(100% / 8)" }}
            aria-hidden="true"
          />

          {process.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <div
                className={`relative flex flex-col gap-6 p-8 lg:p-10 ${
                  index < process.steps.length - 1
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="w-12 h-12 rounded-sm bg-terracotta/20 border border-terracotta/30 flex items-center justify-center flex-shrink-0 z-10 relative">
                    <span className="font-serif text-lg font-bold text-terracotta">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-xl font-bold text-cream leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16 pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-sans text-base text-white/60 max-w-md">
            {process.ctaBody}
          </p>
          <a
            href={process.ctaHref}
            className="inline-flex items-center px-8 py-4 bg-terracotta text-cream text-sm font-sans font-medium rounded-sm hover:bg-terracotta-dark transition-colors tracking-wide flex-shrink-0"
          >
            {process.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
