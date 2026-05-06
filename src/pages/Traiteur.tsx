import traiteurSpread from "@/assets/traiteur-spread.jpg";
import traiteurService from "@/assets/traiteur-service.jpg";

const Traiteur = () => {
  return (
    <div className="min-h-screen">

      {/* Hero – fond vert uni, titre blanc */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h1 className="font-display text-6xl md:text-7xl font-bold uppercase leading-[1] mb-6">
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
                  Depuis 40 ans, nos équipes accompagnent particuliers et entreprises dans l'organisation de leurs événements, pour 10 à 300 convives.
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

      {/* Section 2 — Nos services + photo */}
      <section className="bg-primary/5 border-b border-primary/10">
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
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">Services proposés</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight uppercase">
                Nos<br /><span className="italic font-normal text-primary">services</span>
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <ul className="space-y-3">
                {[
                  "Maîtres d'hôtel expérimentés, disponibles tout au long de votre événement",
                  "Location de matériel, vaisselle, verrerie, nappage, présentoirs, mobilier, décoration",
                  "Décoration florale et mise en scène",
                  "Conseil personnalisé en amont de votre événement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed italic border-l-2 border-primary/30 pl-4 mt-4 text-primary shadow-sm text-lg font-bold">
                Découvrez notre carte traiteur : buffets et cocktails clés en main, pour simplifier l'organisation de votre prochain événement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Carte traiteur – téléchargement */}
      <section className="bg-background border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20 text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Notre carte traiteur
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70 max-w-2xl mx-auto mb-8">
            Vous y trouverez quelques idées de buffets, cocktails clé en main, tout pour vous faciliter la vie.
          </p>
          <a
            href="https://drive.google.com/file/d/1ND5LD3d7JR-yKnnX35uw3cUh9vSTb6FJ/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors rounded-sm"
          >
            Télécharger la carte buffet – cocktail
          </a>
        </div>
      </section>

    </div>
  );
};

export default Traiteur;
