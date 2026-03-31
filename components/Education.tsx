"use client";

import { motion } from "framer-motion";
import { educationData, affiliationsData } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-text-primary)] relative inline-block">
              Education & Affiliations
              <div className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-[var(--color-secondary)] rounded-full" />
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Education Section */}
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-8 flex items-center gap-4">
                <span className="w-10 h-px bg-[var(--color-primary)]/50"></span>
                Academic Background
                <span className="flex-grow h-px bg-[var(--color-border)]"></span>
              </h3>
              
              <div className="space-y-8 pl-4 md:pl-0">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative border-l-2 border-[var(--color-primary)]/30 pl-8 pb-4">
                    <div className="absolute w-4 h-4 rounded-full bg-[var(--color-primary)] -left-[9px] top-1 shadow-[0_0_10px_rgba(108,99,255,0.6)]" />
                    <h4 className="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-[var(--color-secondary)] mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] font-mono mb-4">
                      {edu.period}
                    </p>
                    <div className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg p-5">
                      <p className="text-[var(--color-text-primary)] font-medium mb-1">
                        <span className="text-[var(--color-text-muted)] font-normal">Specialization:</span> {edu.specialization}
                      </p>
                      <p className="text-[var(--color-text-primary)] font-medium mb-1">
                        <span className="text-[var(--color-text-muted)] font-normal">Honors:</span> {edu.honors}
                      </p>
                      <p className="text-[var(--color-text-primary)] font-medium mt-3 text-sm leading-relaxed border-t border-[var(--color-border)] pt-3">
                        <span className="text-[var(--color-text-muted)] font-normal block mb-1">Relevant Coursework:</span> 
                        {edu.coursework}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Affiliations & Leadership Section */}
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-heading font-bold text-[var(--color-secondary)] mb-8 flex items-center gap-4">
                <span className="w-10 h-px bg-[var(--color-secondary)]/50"></span>
                Leadership & Ventures
                <span className="flex-grow h-px bg-[var(--color-border)]"></span>
              </h3>
              
              <div className="space-y-10 pl-4 md:pl-0">
                {affiliationsData.map((aff, idx) => (
                  <div key={idx} className="relative border-l-2 border-[var(--color-secondary)]/30 pl-8">
                    <div className="absolute w-4 h-4 rounded-full bg-[var(--color-secondary)] -left-[9px] top-1 shadow-[0_0_10px_rgba(0,212,170,0.6)]" />
                    
                    <h4 className="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-1">
                      {aff.title}
                    </h4>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <p className="text-sm font-medium text-[var(--color-primary)]">
                        {aff.role}
                      </p>
                      <span className="hidden md:block text-[var(--color-border)]">•</span>
                      <p className="text-sm text-[var(--color-text-muted)] font-mono">
                        {aff.period}
                      </p>
                    </div>

                    {aff.subtitle && (
                      <p className="text-sm text-[var(--color-text-muted)] italic mb-4">
                        {aff.subtitle}
                      </p>
                    )}

                    <ul className="space-y-2 mt-4 text-[var(--color-text-muted)]">
                      {aff.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <span className="text-[var(--color-secondary)] text-[10px] mt-1.5 flex-shrink-0">✦</span>
                          <span className="leading-relaxed text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
