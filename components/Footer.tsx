export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-[var(--color-border)] bg-[var(--color-background)] text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm text-[var(--color-text-muted)]">
          © {currentYear} Dwyn Richie T. Lasala · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
