"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site";

const { services } = siteContent;

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-cream-dark"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="mb-16 lg:mb-20">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
            {services.eyebrow}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal max-w-xl text-balance">
              {services.headline}
            </h2>
            <p className="font-sans text-base text-warm-muted max-w-sm leading-relaxed">
              {services.subheadline}
            </p>
          </div>
        </Reveal>

        {/* Group A — Project Management tiers */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {services.tiers.map((service, index) => (
            <Reveal key={service.name} delay={index * 100}>
              <article
                className={`relative flex flex-col h-full p-8 lg:p-10 rounded-sm border ${
                  service.highlight
                    ? "bg-charcoal border-charcoal text-cream"
                    : "bg-cream border-border hover:border-sandstone/60 transition-colors"
                }`}
                aria-label={service.name}
              >
                {service.highlight && (
                  <div className="absolute top-6 right-6">
                    <span className="font-sans text-xs uppercase tracking-widest text-sandstone border border-sandstone/40 px-2 py-1 rounded-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <p
                    className={`font-sans text-xs uppercase tracking-widest mb-3 ${
                      service.highlight ? "text-sandstone" : "text-terracotta"
                    }`}
                  >
                    {service.tier}
                  </p>
                  <h3
                    className={`font-serif text-2xl lg:text-3xl font-bold mb-3 ${
                      service.highlight ? "text-cream" : "text-charcoal"
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`font-sans text-sm font-medium mb-4 ${
                      service.highlight ? "text-sandstone" : "text-terracotta"
                    }`}
                  >
                    {service.tagline}
                  </p>
                  <p
                    className={`font-sans text-sm leading-relaxed ${
                      service.highlight ? "text-cream/70" : "text-warm-muted"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                <ul
                  className="flex flex-col gap-3 mb-8 flex-1"
                  role="list"
                  aria-label="Inclusions"
                >
                  {service.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`flex-shrink-0 mt-0.5 ${
                          service.highlight ? "text-sandstone" : "text-terracotta"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`font-sans text-sm ${
                          service.highlight ? "text-cream/80" : "text-charcoal"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`pt-6 border-t ${
                    service.highlight ? "border-white/10" : "border-border"
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-6">
                    <p
                      className={`font-sans text-sm font-medium ${
                        service.highlight ? "text-cream" : "text-charcoal"
                      }`}
                    >
                      {service.pricing}
                    </p>
                    <p
                      className={`font-sans text-xs ${
                        service.highlight ? "text-cream/50" : "text-warm-muted"
                      }`}
                    >
                      {service.turnaround}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className={`inline-flex items-center font-sans text-sm font-medium transition-colors ${
                      service.highlight
                        ? "text-sandstone hover:text-cream underline underline-offset-4"
                        : "text-terracotta hover:text-terracotta-dark underline underline-offset-4"
                    }`}
                  >
                    Request this service →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Group B — Technical Drafting & Documentation */}
        <Reveal>
          <div className="rounded-sm border border-border bg-cream p-8 lg:p-12">
            <div className="mb-10">
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-3">
                {services.technicalHeadline}
              </h3>
              <p className="font-sans text-base text-warm-muted max-w-xl leading-relaxed">
                {services.technicalBody}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.technical.map((svc, index) => (
                <Reveal key={svc.name} delay={index * 80}>
                  <article
                    className="flex flex-col h-full p-8 rounded-sm border border-sandstone/30 bg-cream-dark hover:border-sandstone transition-colors"
                    aria-label={svc.name}
                  >
                    <div className="mb-6">
                      <h4 className="font-serif text-xl lg:text-2xl font-bold text-charcoal mb-2">
                        {svc.name}
                      </h4>
                      <p className="font-sans text-sm font-medium text-sandstone mb-4">
                        {svc.promise}
                      </p>
                      <p className="font-sans text-sm text-warm-muted leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <ul
                      className="flex flex-col gap-2 mb-6 flex-1"
                      role="list"
                      aria-label="Deliverables"
                    >
                      {svc.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            size={14}
                            className="flex-shrink-0 mt-0.5 text-sandstone"
                            aria-hidden="true"
                          />
                          <span className="font-sans text-sm text-charcoal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-border">
                      <div className="flex flex-col gap-1 mb-5">
                        <p className="font-sans text-sm font-medium text-charcoal">
                          {svc.pricing}
                        </p>
                        <p className="font-sans text-xs text-warm-muted">
                          {svc.turnaround}
                        </p>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center font-sans text-sm font-medium text-sandstone hover:text-terracotta transition-colors underline underline-offset-4"
                      >
                        {svc.ctaLabel}
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
