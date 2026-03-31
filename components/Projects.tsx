"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--color-surface)]/30 border-y border-[var(--color-border)]">
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
              Selected Projects
              <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[var(--color-primary)] rounded-full" />
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={fadeIn}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-primary)]/40 transition-all flex flex-col group relative overflow-hidden"
              >
                {/* Subtle gradient hover effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className="px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-semibold rounded-full border border-[var(--color-secondary)]/20">
                    {project.badge}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)] font-mono">{project.year}</span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[var(--color-text-primary)] mb-2 relative z-10 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm font-medium text-[var(--color-primary)]/80 mb-4 relative z-10">
                  {project.role}
                </p>

                <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 flex-grow relative z-10">
                  {project.description}
                </p>

                <div className="mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:border-[var(--color-text-muted)]/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors group/btn"
                  >
                    <FaGithub size={18} className="group-hover/btn:scale-110 transition-transform" />
                    View on GitHub
                    <ExternalLink size={14} className="ml-1 opacity-50" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
