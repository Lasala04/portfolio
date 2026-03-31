"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-surface)]/30 border-y border-[var(--color-border)] relative">
      <div className="container mx-auto px-6 md:px-12">
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
              About Me
              <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[var(--color-primary)] rounded-full" />
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Background Card */}
            <motion.div 
              variants={fadeIn}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-primary)]/50 transition-colors group"
            >
              <h3 className="text-xl font-heading font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">01</span>
                Background
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {aboutData.background}
              </p>
            </motion.div>

            {/* Mission & Vision Card */}
            <motion.div 
              variants={fadeIn}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-secondary)]/50 transition-colors group"
            >
              <h3 className="text-xl font-heading font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">02</span>
                Mission & Vision
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {aboutData.missionVision}
              </p>
            </motion.div>

            {/* Goals & Motivation Card */}
            <motion.div 
              variants={fadeIn}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-primary)]/50 transition-colors group"
            >
              <h3 className="text-xl font-heading font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">03</span>
                Goals & Motivation
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {aboutData.goals}
              </p>
            </motion.div>

            {/* Key Achievements Card */}
            <motion.div 
              variants={fadeIn}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-secondary)]/50 transition-colors group"
            >
              <h3 className="text-xl font-heading font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">04</span>
                Key Achievements
              </h3>
              <ul className="space-y-4 text-[var(--color-text-muted)]">
                {aboutData.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
