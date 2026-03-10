import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import logoImg from "@/assets/logo-caepus.jpg";
import personnageImg from "@/assets/personnage-pattern.jpg";

const NAV_LINKS = [
  { label: "Une maison de famille", href: "/" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Traiteur", href: "/traiteur" },
  { label: "Galerie", href: "/galerie" },
  { label: "Actualités", href: "/actualites" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body relative overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoImg}
              alt="Caepus — Traiteur Fondé en 1989"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className={`relative text-[13px] tracking-[0.18em] font-medium transition-colors duration-200 group
                    after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:transition-[width] after:duration-300 after:ease-out
                    ${isActive
                      ? "text-[hsl(var(--nav-active))] after:w-full after:bg-[hsl(var(--nav-active))]"
                      : "text-primary-foreground after:w-0 hover:after:w-full after:bg-primary-foreground"
                    }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Social + mobile */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
            <button
              className="md:hidden text-primary-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
                  className={`block px-6 py-3 text-xs tracking-[0.15em] font-medium transition-opacity hover:opacity-70 ${
                    isActive
                      ? "text-primary-foreground border-l-2 border-primary-foreground"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-4 px-6 py-3 border-t border-primary-foreground/10">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Fond plein écran : illustration fixe derrière tout */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${personnageImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Contenu qui glisse par-dessus le fond */}
      <main className="relative z-10 pt-[72px]">
        <div className="max-w-4xl mx-auto bg-background min-h-screen shadow-xl">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground xl:mx-0 relative z-20">
        <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col items-center gap-6">
          <img
            src={logoImg}
            alt="Caepus"
            className="h-16 w-auto object-contain"
          />
          <p className="text-xs tracking-[0.25em] uppercase text-primary-foreground/60">
            Traiteur · Restaurant · Neuilly-sur-Seine
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
          <p className="text-xs text-primary-foreground/40">© 2025 Caepus. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
