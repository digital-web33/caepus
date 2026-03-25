import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import personnageImg from "@/assets/personnage-pattern.png";

const NAV_LINKS = [
  { label: "Une maison de famille", href: "/" },
  { label: "Traiteur", href: "/traiteur" },
  { label: "Plateaux Repas et lunchbox", href: "/restaurant" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body relative overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
        <div className="w-full px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex flex-col items-start leading-none gap-1">
            <span className="font-display text-primary-foreground text-4xl tracking-[0.28em] uppercase font-extralight">Caepus</span>
            <span className="text-primary-foreground/60 text-[9px] tracking-[0.38em] uppercase font-extralight">Traiteur — Restaurant</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className={`relative text-[13px] tracking-[0.06em] font-light transition-colors duration-200
                    after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:transition-[width] after:duration-300 after:ease-out
                    ${isActive
                      ? "text-[hsl(var(--nav-active))] after:w-full after:bg-[hsl(var(--nav-active))]"
                      : "text-primary-foreground after:w-0 hover:text-primary-foreground/80 hover:after:w-full after:bg-primary-foreground/60"
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
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
                  className={`block px-6 py-3 text-xs tracking-[0.15em] font-semibold transition-opacity hover:opacity-70 ${
                    isActive
                      ? "text-[hsl(var(--nav-active))] border-l-2 border-[hsl(var(--nav-active))]"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-4 px-6 py-3 border-t border-primary-foreground/10">
              <span className="text-primary-foreground/70 cursor-default">
                <Facebook size={16} />
              </span>
              <span className="text-primary-foreground/70 cursor-default">
                <Instagram size={16} />
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Fond plein écran : illustration fixe derrière tout */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${personnageImg})`,
          backgroundSize: "1456px 816px",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Contenu qui glisse par-dessus le fond fixe */}
      {/* pt-[72px] = hauteur nav, puis mt-[120px] pour laisser les figurines visibles */}
      <main className="relative z-10 pt-[72px]">
          <div className="max-w-[1260px] mx-auto mt-[120px] mb-[120px] bg-background shadow-xl border-2 border-black">
            {children}
          </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground xl:mx-0 relative z-20">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center leading-none gap-1">
            <span className="font-display text-primary-foreground text-3xl tracking-[0.18em] uppercase">Caepus</span>
            <span className="text-primary-foreground/80 text-[8px] tracking-[0.3em] uppercase">Traiteur &amp; Restaurant</span>
          </div>
          <p className="text-xs tracking-[0.25em] uppercase text-primary-foreground/60">
            Traiteur · Restaurant · Paris · Neuilly-sur-Seine
          </p>
          <div className="flex items-center gap-5">
            <span className="text-primary-foreground/60 cursor-default" aria-label="Facebook">
              <Facebook size={18} />
            </span>
            <span className="text-primary-foreground/60 cursor-default" aria-label="Instagram">
              <Instagram size={18} />
            </span>
          </div>
          <div className="flex items-center gap-5 text-[10px] tracking-[0.15em] uppercase text-primary-foreground/40">
            <a href="/mentions-legales" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
            <span>·</span>
            <a href="/cgv" className="hover:text-primary-foreground transition-colors">CGV</a>
            <span>·</span>
            <a href="/cookies" className="hover:text-primary-foreground transition-colors">Cookies</a>
          </div>
          <p className="text-xs text-primary-foreground/40">© 2025 Caepus. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
