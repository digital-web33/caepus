const Traiteur = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary uppercase mb-4 leading-tight">
            Traiteur événementiel à Paris
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Une offre sur-mesure pour vos événements professionnels et privés
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-16 space-y-6">
          <p className="text-base leading-relaxed text-foreground/75">
            Depuis plus de 20 ans, nos équipes accompagnent particuliers et entreprises dans l'organisation de leurs événements, pour 10 à 300 convives.
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            Nous intervenons à tous les moments de la journée : petit-déjeuner, pause matinale, goûter, apéritif, déjeuner, dîner. Pour chaque occasion, des plats familiaux chauds ou froids préparés avec soin.
          </p>
          <div className="border-l-2 border-primary/30 pl-6">
            <p className="text-sm leading-relaxed text-foreground/70 italic">
              Une offre entièrement personnalisée : plateaux-repas, lunchbox, cocktail dinatoire et finger-food, buffet à partager, plats et desserts individuels. Le tout adapté à vos envies, votre image de marque, le thème de votre événement et votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="bg-primary/5">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <p className="text-xs tracking-[0.35em] text-primary/60 uppercase mb-3">Nos prestations</p>
          <h2 className="font-display text-4xl font-bold text-primary uppercase mb-12">Ce que nous proposons</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Cocktails & Réceptions",
                text: "Des buffets raffinés pour vos événements professionnels et privés. Plateaux de tartes, salades composées, desserts maison.",
              },
              {
                title: "Plateaux repas",
                text: "Pour vos réunions d'entreprise, des formules équilibrées et gourmandes livrées directement sur votre lieu de travail.",
              },
              {
                title: "Mariages & Fêtes",
                text: "Faites de chaque moment une célébration avec nos menus personnalisés, créés sur mesure selon vos envies.",
              },
              {
                title: "Sur mesure",
                text: "Contactez-nous pour discuter de vos besoins spécifiques. Chaque commande est unique, comme vous.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-primary/30 pl-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-2">{item.title}</h3>
                <div className="w-6 h-0.5 bg-primary/30 mb-3" />
                <p className="text-foreground/75 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Nos services */}
      <section className="bg-background border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <p className="text-xs tracking-[0.35em] text-primary/60 uppercase mb-3">Services inclus</p>
          <h2 className="font-display text-4xl font-bold text-primary uppercase mb-10">Nos services</h2>
          <ul className="space-y-4 mb-10">
            {[
              "Maîtres d'hôtel expérimentés, disponibles tout au long de votre événement",
              "Location de matériel (vaisselle, verrerie, buffet, nappage, présentoirs)",
              "Décoration florale pour vos buffets",
              "Conseil personnalisé en amont de votre événement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/75">
                <span className="text-primary mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-foreground/70 italic border-l-2 border-primary/30 pl-6">
            Découvrez notre carte traiteur : buffets et cocktails clés en main, pour simplifier l'organisation de votre prochain événement.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Traiteur;
