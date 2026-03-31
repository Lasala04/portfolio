"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Mail, FileText, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-surface)]/30 border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-text-primary)] mb-6">
            Let&apos;s Connect
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-12 max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a project, collaboration, or just a hello — my inbox is open.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] group transition-all w-full md:w-auto hover:shadow-[0_0_20px_rgba(108,99,255,0.1)]"
            >
              <Mail className="text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
              <span className="text-[var(--color-text-primary)] font-medium truncate">
                {siteConfig.email}
              </span>
            </a>

            <a 
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-secondary)] group transition-all w-full md:w-auto hover:shadow-[0_0_20px_rgba(0,212,170,0.1)]"
            >
              <FaGithub className="text-[var(--color-secondary)] group-hover:scale-110 transition-transform" />
              <span className="text-[var(--color-text-primary)] font-medium">
                GitHub Profile
              </span>
              <ExternalLink size={16} className="text-[var(--color-text-muted)] ml-auto md:ml-2" />
            </a>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-[2px] shadow-[0_0_30px_rgba(108,99,255,0.3)]">
                <div className="w-full h-full bg-[var(--color-background)] rounded-[14px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <FileText className="text-[var(--color-text-primary)] group-hover:text-white transition-colors" size={32} />
                </div>
              </div>
              <span className="text-lg font-heading font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors inline-block pb-1 border-b-2 border-transparent group-hover:border-[var(--color-primary)]">
                Download Resume
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
