import heroPortrait from "@/assets/hero-portrait.jpg";
import tartsFlat from "@/assets/tarts-flatlay.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const Accueil = () => {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="min-h-[85vh] flex items-center bg-background">
        <div className="max-w-5xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-primary/60 uppercase font-medium mb-6">
              Fondé en 1989
            </p>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-primary leading-[1] mb-6 uppercase">
              Une<br />
              <span className="italic font-normal">maison de</span><br />
              famille
            </h1>
            <div className="w-12 h-0.5 bg-primary/40 my-6" />
            <p className="text-base leading-relaxed text-foreground/70 max-w-sm">
              Cuisine familiale, fraîche et faite maison — livrée partout à Paris.
            </p>
            <div className="mt-10 flex flex-col gap-1">
              <p className="text-xs tracking-[0.3em] text-primary/50 uppercase font-medium">De mère en fille</p>
              <p className="text-xs tracking-[0.3em] text-primary/50 uppercase font-medium">Neuilly-sur-Seine</p>
            </div>
          </div>
          <div className="relative">
            <div className="border border-primary/15 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={heroPortrait}
                alt="Les fondatrices de Caepus"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/8 rounded-sm -z-10" />
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary/5 rounded-sm -z-10" />
          </div>
        </div>
      </section>

      {/* SÉPARATEUR DÉCORATIF */}
      <div className="bg-primary py-5">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-center gap-8">
          {["Le bon", "Le frais", "Le fait maison"].map((val) => (
            <span key={val} className="text-xs tracking-[0.35em] uppercase text-primary-foreground/80 font-medium">
              {val}
            </span>
          ))}
        </div>
      </div>

      {/* NOTRE HISTOIRE */}
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={tartsFlat}
                alt="Tartes et pâtisseries maison Caepus"
                className="w-full object-cover rounded-2xl shadow-md border border-primary/10"
              />
            </div>
            <div className="space-y-5">
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">Notre histoire</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight uppercase">
                Un Héritage<br /><span className="italic font-normal">familial</span>
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
                <p>
                  Caepus, c'est avant tout une histoire de famille qui dure depuis plus de 30 ans. Certains tombent dans la marmite — Cécile, fondatrice de Caepus, est tombée, elle, dans la tarte : celle de sa maman, créatrice de la célèbre marque <em>«&nbsp;Tarte Julie&nbsp;»</em>.
                </p>
                <p>
                  Pâte fine, caramel croquant, fruits frais… autant de saveurs qui ont bercé son enfance. Une passion est née. Le fil conducteur de toute cette aventure ? Le bon, le frais, le fait maison.
                </p>
                <p className="font-medium text-primary/80">
                  Avec les années, ces valeurs n'ont pas changé. Chez Caepus, la cuisine est familiale, innovante, originale — et elle se renouvelle sans cesse depuis sa création.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="bg-primary/5 border-y border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">L'équipe</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight uppercase">
                Plus qu'une<br /><span className="italic font-normal">équipe, une famille</span>
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
                <p>
                  Plus qu'une équipe, une véritable famille ! Des collaborateurs passionnés, soudés et attachés au savoir-faire maison.
                </p>
                <p>
                  La famille s'agrandit ! En septembre, Cécile et sa fille Léa ouvrent un nouveau concept à Neuilly-sur-Seine. Retrouvez-y toutes nos tartes salées et sucrées — celles que vous aimez depuis les débuts de Tarte Julie.
                </p>
                <p className="font-medium text-primary/80">
                  À bientôt à Neuilly-sur-Seine et sur Instagram…
                </p>
              </div>
            </div>
            <div>
              <img
                src={chefPortrait}
                alt="Cécile, fondatrice de Caepus"
                className="w-full max-w-sm mx-auto object-cover rounded-2xl shadow-lg border border-primary/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LE RESTAURANT – CTA */}
      <section className="bg-primary">
        <div className="max-w-5xl mx-auto px-8 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/50 mb-4">Sur place ou à emporter</p>
          <h2 className="font-display text-5xl font-bold text-primary-foreground uppercase mb-6">
            Le Restaurant
          </h2>
          <div className="w-8 h-0.5 bg-primary-foreground/30 mx-auto mb-8" />
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "Chaque jour", text: "Sur place ou à emporter · Paris 1er — Chaque jour, une nouvelle sélection : plats chauds mijotés, salades fraîches, tartes salées et sucrées, desserts maison." },
              { title: "Fait maison", text: "Cuisine fraîche et de saison, préparée chaque matin à partir des produits du jour." },
              { title: "Les classiques", text: "Bien sûr, les incontournables sont toujours là ! Saumon teriyaki, bowls généreux, bo-bun, soupes chaudes ou froides, sandwichs chauds, banh-mi toasté, smoothies et jus de fruits frais pressés." },
            ].map((item) => (
              <div key={item.title} className="border border-primary-foreground/20 p-7 text-left hover:bg-primary-foreground/5 transition-colors rounded-sm">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
                <div className="w-6 h-0.5 bg-primary-foreground/30 mb-4" />
                <p className="text-primary-foreground/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mt-8">Ouvert du lundi au samedi, à partir de 11h</p>
        </div>
      </section>

      {/* L'ENGAGEMENT */}
      <section className="bg-background border-y border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <p className="text-xs tracking-[0.35em] text-primary/60 uppercase mb-3">L'engagement</p>
          <h2 className="font-display text-4xl font-bold text-primary leading-tight uppercase mb-12">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-primary uppercase">Une charte qualité exigeante</h3>
              <div className="w-8 h-0.5 bg-primary/30" />
              <p className="text-sm leading-relaxed text-foreground/70">
                Nos produits sont sélectionnés avec la plus grande attention. Nous recevons nos livraisons chaque matin pour vous garantir fraîcheur et qualité au quotidien.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-primary uppercase">Une entreprise responsable</h3>
              <div className="w-8 h-0.5 bg-primary/30" />
              <p className="text-sm leading-relaxed text-foreground/70">
                Conscients de l'impact environnemental de la vente à emporter, nous privilégions des emballages écologiques (fibres végétales, pulpe de canne, carton recyclé). Pour réduire notre empreinte carbone, toutes nos livraisons à Paris sont assurées à pied, à vélo ou en véhicule électrique.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Accueil;
