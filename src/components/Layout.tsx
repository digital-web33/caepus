import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "ACCUEIL", href: "/" },
  { label: "RESTAURANT", href: "/restaurant" },
  { label: "TRAITEUR", href: "/traiteur" },
  { label: "GALERIE", href: "/galerie" },
  { label: "À PROPOS", href: "/a-propos" },
  { label: "CONTACT", href: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-primary-foreground font-display text-xl font-bold tracking-widest uppercase">
            Caepus
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className={`text-xs tracking-[0.2em] font-medium transition-opacity hover:opacity-70 ${
                    isActive
                      ? "text-primary-foreground border-b border-primary-foreground pb-0.5"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10">
            {NAV_LINKS.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 text-xs tracking-[0.2em] font-medium transition-opacity hover:opacity-70 ${
                    isActive
                      ? "text-primary-foreground border-l-2 border-primary-foreground"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Page content */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="bg-foreground text-primary-foreground/70 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-2xl font-bold text-primary-foreground tracking-widest uppercase">
            Caepus
          </p>
          <p className="text-xs tracking-[0.2em] uppercase">
            Traiteur · Restaurant · Neuilly-sur-Seine
          </p>
          <p className="text-xs">© 2025 Caepus. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
