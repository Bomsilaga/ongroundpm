"use client";

import { Clock, TrendingDown, CalendarX, AlertTriangle, Moon, FileSearch } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site";

const { painPoints } = siteContent;

const icons = [Clock, TrendingDown, CalendarX, AlertTriangle, Moon, FileSearch];

export default function PainPoints() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8" aria-label="Pain points">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — headline */}
          <Reveal>
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-6">
              {painPoints.eyebrow}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-charcoal text-balance">
              {painPoints.headline}
            </h2>
            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-sans text-base text-warm-muted leading-relaxed">
                {painPoints.body}
              </p>
              <a
                href={painPoints.ctaHref}
                className="inline-flex items-center mt-6 font-sans text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors underline underline-offset-4"
              >
                {painPoints.cta}
              </a>
            </div>
          </Reveal>

          {/* Right — pain points list */}
          <ul className="flex flex-col gap-0" role="list">
            {painPoints.items.map((point, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Reveal key={point.text} as="li" delay={index * 80} direction="left">
                  <div className="flex items-start gap-5 py-6 border-b border-border group">
                    <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-sm bg-cream-dark flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                      <Icon size={16} className="text-terracotta" aria-hidden="true" />
                    </div>
                    <p className="font-sans text-base lg:text-lg text-charcoal leading-snug">
                      {point.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
