"use client";

import { HardHat, Home, User, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site";

const { whoWeHelp } = siteContent;

const icons = [HardHat, Home, User, Wrench];

export default function WhoWeHelp() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8" aria-label="Who we help">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
            {whoWeHelp.eyebrow}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal max-w-2xl text-balance">
            {whoWeHelp.headline}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {whoWeHelp.audiences.map((audience, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={audience.title} delay={index * 100}>
                <article className="bg-cream p-8 lg:p-10 flex flex-col gap-5 hover:bg-cream-dark transition-colors group h-full">
                  <div className="w-10 h-10 rounded-sm bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                    <Icon size={20} className="text-terracotta" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {audience.title}
                  </h3>
                  <p className="font-sans text-sm text-warm-muted leading-relaxed flex-1">
                    {audience.description}
                  </p>
                  <a
                    href="#contact"
                    className="font-sans text-xs uppercase tracking-wider text-terracotta hover:text-terracotta-dark transition-colors mt-auto pt-4 border-t border-border"
                  >
                    Get in touch →
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
