"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ClipboardCheck, Calculator } from "lucide-react";
import { siteContent } from "@/content/site";

const { about } = siteContent;

const credentialIcons = [Award, ClipboardCheck, Calculator] as const;

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 px-6 lg:px-8"
      aria-label="About OnGroundPM"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — team image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <Image
                src={about.teamImage}
                alt={about.teamImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Decorative stat callout */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-terracotta p-6 rounded-sm">
              <p className="font-serif text-3xl font-bold text-cream">
                {about.statCallout.value}
              </p>
              <p className="font-sans text-xs text-cream/70 mt-1 uppercase tracking-wider whitespace-pre-line">
                {about.statCallout.label}
              </p>
            </div>
          </motion.div>

          {/* Right — narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-6">
              {about.eyebrow}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-8 text-balance">
              {about.headline}
            </h2>

            <div className="space-y-5 font-sans text-base text-warm-muted leading-relaxed mb-10">
              {about.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Credentials list */}
            <div className="space-y-4 pt-8 border-t border-border">
              {about.credentials.map((cred, i) => {
                const Icon = credentialIcons[i] ?? Award;
                return (
                  <div key={cred.abbr} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-sm bg-cream-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        size={15}
                        className="text-terracotta"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-charcoal">
                        {cred.label}
                      </p>
                      <p className="font-sans text-xs text-warm-muted mt-0.5">
                        {cred.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tool proficiency */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-sans text-xs text-warm-muted mb-2 uppercase tracking-widest">
                Tool proficiency
              </p>
              <p className="font-sans text-sm text-charcoal">
                {about.toolProficiency.join(" · ")}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-sans text-xs text-warm-muted">
                <span className="font-medium text-charcoal">
                  Jokjeth Services Pty Ltd
                </span>{" "}
                trading as OnGroundPM · ABN 47 828 511 857
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
