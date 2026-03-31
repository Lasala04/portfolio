"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)] rounded-full mix-blend-screen filter blur-[128px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.2
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="flex flex-col items-start gap-6"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-[var(--color-secondary)] font-medium tracking-widest uppercase text-xs mb-3">
              Portfolio
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[var(--color-text-primary)] leading-[1.1]">
              {siteConfig.name}
            </h1>
            <h3 className="text-xl md:text-2xl text-[var(--color-primary)] mt-4 font-medium">
              {siteConfig.title}
            </h3>
          </motion.div>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-base md:text-lg text-[var(--color-text-muted)] max-w-lg leading-relaxed border-l-2 border-[var(--color-border)] pl-4"
          >
            {siteConfig.bio}
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] font-medium rounded hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-[0_0_15px_rgba(108,99,255,0.15)] hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium rounded hover:border-[var(--color-text-muted)] transition-all bg-[var(--color-surface)]/30 backdrop-blur-sm"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-[350px] md:w-80 md:h-[420px] rounded-xl p-[2px] bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-surface)] to-[var(--color-secondary)]">
            <div className="w-full h-full bg-[var(--color-surface)] rounded-[10px] overflow-hidden relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/profile.png" 
                alt="Dwyn Richie T. Lasala" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x500/111118/6c63ff?text=profile.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl blur-2xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
