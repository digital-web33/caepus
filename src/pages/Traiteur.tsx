import traiteurSpread from "@/assets/traiteur-spread.jpg";
import traiteurLunchbox from "@/assets/traiteur-lunchbox.jpg";
import traiteurService from "@/assets/traiteur-service.jpg";

const Traiteur = () => {
  return (
    <div className="min-h-screen">

      {/* Hero – fond vert uni, titre blanc */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase mb-4 leading-tight">
            <span className="text-primary-foreground">Traiteur</span><br />
            <span className="italic font-normal text-primary-foreground/80">événementiel</span>
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Une offre sur-mesure pour vos événements professionnels et privés
          </p>
        </div>
      </section>

      {/* Section 1 — Intro + photo */}
      <section className="bg-background border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="overflow-hidden rounded-2xl shadow-md border border-primary/10 aspect-[4/3]">
              <img
                src={traiteurSpread}
                alt="Buffet traiteur Caepus"
                loading="lazy"
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texte */}
            <div className="space-y-5">
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">Notre expertise</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight uppercase">
                Une cuisine<br /><span className="italic font-normal text-primary">sur mesure</span>
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
                <p>
                  Depuis plus de 20 ans, nos équipes accompagnent particuliers et entreprises dans l'organisation de leurs événements, pour 10 à 300 convives.
                </p>
                <p>
                  Nous intervenons à tous les moments de la journée : petit-déjeuner, pause matinale, goûter, apéritif, déjeuner, dîner. Pour chaque occasion, des plats familiaux chauds ou froids préparés avec soin.
                </p>
                <p className="text-primary/80 font-medium">
                  Plateaux-repas, lunchbox, cocktail dinatoire, finger-food, buffet à partager — le tout adapté à votre image de marque et votre budget.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 — Lunchbox & Plateaux repas + photo */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Texte */}
            <div className="space-y-5">
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">Lunchbox & Plateaux repas</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight uppercase">
                Plateaux repas,<br /><span className="italic font-normal text-primary">lunchbox & livraison</span>
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
                <p>
                  Nos plateaux repas sont confectionnés le matin même, dans notre laboratoire de la rue Duphot. Produits frais, majoritairement de saison.
                </p>
                <p>
                  Nos lunchbox sont gourmandes et généreuses — idéales pour un event de dernière minute, un shooting ou un déjeuner groupé entre collaborateurs.
                </p>
                <p>
                  Du mardi au vendredi, livraison à domicile dans Paris et proche banlieue. Tous nos plateaux peuvent être adaptés <span className="uppercase tracking-wide">sans gluten</span>.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="overflow-hidden rounded-2xl shadow-md border border-primary/10 aspect-[4/3]">
              <img
                src={traiteurLunchbox}
                alt="Plateaux repas et lunchbox Caepus"
                loading="lazy"
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section 3 — Nos services + photo */}
      <section className="bg-background border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="overflow-hidden rounded-2xl shadow-md border border-primary/10 aspect-[4/3]">
              <img
                src={traiteurService}
                alt="Service traiteur événementiel Caepus"
                loading="lazy"
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texte */}
            <div className="space-y-5">
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">Services inclus</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight uppercase">
                Nos<br /><span className="italic font-normal text-primary">services</span>
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <ul className="space-y-3">
                {[
                  "Maîtres d'hôtel expérimentés, disponibles tout au long de votre événement",
                  "Location de matériel (vaisselle, verrerie, buffet, nappage, présentoirs)",
                  "Décoration florale pour vos buffets",
                  "Conseil personnalisé en amont de votre événement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-foreground/70 italic border-l-2 border-primary/30 pl-4 mt-4">
                Découvrez notre carte traiteur : buffets et cocktails clés en main, pour simplifier l'organisation de votre prochain événement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Carte traiteur – téléchargement */}
      <section className="bg-primary/5 border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20 text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Notre carte traiteur
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70 max-w-xl mx-auto mb-8">
            Vous y trouverez quelques idées de buffets, cocktails clé en main, tout pour vous faciliter la vie.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors rounded-sm cursor-not-allowed opacity-60"
            aria-disabled="true"
          >
            Télécharger la carte buffet – cocktail
          </a>
          <p className="text-xs text-muted-foreground mt-4 italic">Lien à venir</p>
        </div>
      </section>

    </div>
  );
};

export default Traiteur;
