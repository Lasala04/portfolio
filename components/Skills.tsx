"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-text-primary)] relative inline-block">
              Skills & Tech Stack
              <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[var(--color-secondary)] rounded-full" />
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Technical Skills - Takes up 2 columns */}
            <div className="lg:col-span-2 space-y-10">
              {skillsData.categories.map((category, idx) => (
                <motion.div key={category.name} variants={fadeIn}>
                  <h3 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                     {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-[var(--color-surface)] border border-[var(--color-primary)]/30 text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_0_10px_rgba(108,99,255,0.2)] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills - Takes up 1 column */}
            <motion.div 
              variants={fadeIn}
              className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-2xl p-8 h-fit"
            >
              <h3 className="text-xl font-heading font-semibold text-[var(--color-text-primary)] mb-6 border-b border-[var(--color-border)] pb-4">
                Soft Skills
              </h3>
              <ul className="space-y-6">
                {skillsData.softSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] group-hover:border-[var(--color-secondary)]/50 transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="text-[var(--color-text-primary)] font-medium group-hover:text-[var(--color-secondary)] transition-colors">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
