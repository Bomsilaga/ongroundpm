"use client";

import { siteContent } from "@/content/site";

const { hero } = siteContent;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 lg:px-8 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#1a1a1a 0px,#1a1a1a 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#1a1a1a 0px,#1a1a1a 1px,transparent 1px,transparent 60px)",
        }}
        aria-hidden="true"
      />

      {/* Hero image (shows when /public/hero.jpg is uploaded) */}
      {hero.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          aria-hidden="true"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}

      {/* Terracotta accent line */}
      <div className="absolute top-32 left-6 lg:left-8 w-16 h-0.5 bg-terracotta hero-line" aria-hidden="true" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="max-w-4xl">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-8 hero-fade hero-delay-1">
            {hero.eyebrow}
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-charcoal mb-8 text-balance hero-fade hero-delay-2">
            {hero.headlineLine1}{" "}
            <span className="text-terracotta italic">{hero.headlineEmphasis}</span>{" "}
            {hero.headlineLine2}
            <br />
            {hero.headlineLine3}
            <br />
            {hero.headlineLine4}
          </h1>

          <p className="font-sans text-lg lg:text-xl text-warm-muted max-w-2xl leading-relaxed mb-10 hero-fade hero-delay-3">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 hero-fade hero-delay-4">
            <a href={hero.primaryCtaHref} className="btn-primary">
              {hero.primaryCta}
            </a>
            <a href={hero.secondaryCtaHref} className="btn-outline-dark">
              {hero.secondaryCta}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 hero-fade hero-delay-5">
            {hero.trustLine.map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                <span className="font-sans text-sm text-warm-muted">{item}</span>
                {i < hero.trustLine.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-sandstone" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 hero-fade hero-delay-5" aria-hidden="true">
        <span className="font-sans text-xs uppercase tracking-widest text-warm-muted rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-sandstone to-transparent" />
      </div>
    </section>
  );
}
