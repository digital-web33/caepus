import heroPortrait from "@/assets/hero-portrait.jpg";
import tartsFlat from "@/assets/tarts-flatlay.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const NAV_LINKS = [
  { label: "ACCUEIL", href: "#" },
  { label: "RESTAURANT", href: "#restaurant" },
  { label: "TRAITEUR", href: "#traiteur" },
  { label: "GALERIE", href: "#galerie" },
  { label: "À PROPOS", href: "#apropos", active: true },
  { label: "CONTACT", href: "#contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-primary-foreground font-display text-xl font-bold tracking-widest uppercase">
            Caepus
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-xs tracking-[0.2em] font-medium transition-opacity hover:opacity-70 ${
                  l.active
                    ? "text-primary-foreground border-b border-primary-foreground pb-0.5"
                    : "text-primary-foreground/80"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO – UNE HISTOIRE DE FAMILLE */}
      <section id="apropos" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-6xl md:text-8xl font-black text-primary leading-[0.95] mb-8 uppercase">
              UNE HISTOIRE<br />
              <span className="italic font-normal text-5xl md:text-7xl">de famille</span>
            </h1>
            <div className="mt-12 space-y-1">
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-medium">
                DE MÈRE EN FILLE
              </p>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-medium">
                DEPUIS 1989
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="border-2 border-primary/20 overflow-hidden rounded-sm">
              <img
                src={heroPortrait}
                alt="Portrait des fondatrices de Caepus"
                className="w-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-sm -z-10" />
          </div>
        </div>
      </section>

      {/* UN HÉRITAGE FAMILIAL */}
      <section className="bg-primary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-primary mb-16 uppercase tracking-wide">
            Un Héritage Familial
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5 text-base leading-relaxed text-foreground/80 order-2 md:order-1">
              <p>
                Caepus, c'est une histoire de famille depuis plus de 30 ans.
              </p>
              <p>
                Certains tombent dans la marmite — Cécile, la fondatrice de Caepus, est tombée elle dans la tarte : celle de sa maman, fondatrice de la célèbre marque <em>« Tarte Julie »</em>.
              </p>
              <p>
                Une pâte fine, un caramel croquant, des fruits frais… autant de saveurs qui ont bercé son enfance. La passion est née.
              </p>
              <p>
                Le fil conducteur de toute cette aventure familiale : le bon, le frais et le fait maison. Avec les années, ces valeurs n'ont pas changé.
              </p>
              <p className="font-medium text-primary">
                Chez Caepus, la cuisine est familiale, innovante, originale et ne cesse de se renouveler depuis sa création.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={tartsFlat}
                alt="Tartes et pâtisseries maison Caepus"
                className="w-full object-cover rounded-sm shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ÉNERGIE & ÉQUIPE */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={chefPortrait}
                alt="Cécile, fondatrice de Caepus"
                className="w-full max-w-sm mx-auto object-cover rounded-sm shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary uppercase leading-tight">
                Plus qu'une<br />
                <span className="italic font-normal">équipe, une famille</span>
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  Des collaborateurs soudés et passionnés, impliqués et respectueux du savoir-faire maison.
                </p>
                <p>
                  La famille s'agrandit ! En septembre, ouverture du nouveau concept de Cécile et sa fille Léa.
                </p>
                <p>
                  Vous y retrouverez toutes nos tartes salées et sucrées que vous avez adorées depuis la création de Tarte Julie.
                </p>
                <p className="font-medium text-primary">
                  À bientôt à Neuilly-sur-Seine et sur Instagram…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LE RESTAURANT */}
      <section id="restaurant" className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-4">
            Le Restaurant
          </h2>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-12">
            SUR PLACE OU À EMPORTER
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Chaque jour",
                text: "Ses nouveautés, plats chauds mijotés, salades, tartes salées et sucrées, desserts…",
              },
              {
                title: "Fait maison",
                text: "Cuisine familiale, fraîche et majoritairement de saison, préparée chaque matin à partir des produits du jour.",
              },
              {
                title: "Les classiques",
                text: "Bien sûr, certains incontournables restent ! Nos recettes signature transmises de génération en génération.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-primary-foreground/20 p-8 hover:bg-primary-foreground/5 transition-colors">
                <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
                <div className="w-8 h-0.5 bg-primary-foreground/40 mb-4" />
                <p className="text-primary-foreground/75 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Index;
