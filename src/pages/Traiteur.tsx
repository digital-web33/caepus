const Traiteur = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary uppercase mb-4">
            Traiteur
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            ÉVÉNEMENTS · ENTREPRISES · PARTICULIERS
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-16">
            — À compléter —
          </p>
          <div className="grid md:grid-cols-2 gap-12">
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
                <p className="text-foreground/75 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Traiteur;
