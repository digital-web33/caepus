const Restaurant = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">
            Le Restaurant
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            SUR PLACE OU À EMPORTER
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-16">
            — À compléter —
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
              <div key={item.title} className="border border-primary/20 p-8 hover:bg-primary/5 transition-colors">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <div className="w-8 h-0.5 bg-primary/40 mb-4" />
                <p className="text-foreground/75 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
