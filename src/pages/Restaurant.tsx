const Restaurant = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4 leading-tight">
            Plateaux repas à Paris
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Livrés rue Duphot et partout à Paris
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-16 space-y-5">
          <p className="text-base leading-relaxed text-foreground/75">
            Depuis 1989, Caepus vous propose des plateaux repas idéaux pour vos repas de travail. Trois formules au choix — Box Duo, Box Découverte et Box Caepus — avec des plats aux noms qui donnent envie : saumon teriyaki, poulet champagne, bo bun de canard, buddha bowl.
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            Produits frais, préparés le matin de la livraison. Livraison à Paris dans un rayon de 10 km autour de la rue Duphot (Paris 1er).
          </p>
        </div>
      </section>

      {/* Formules */}
      <section className="bg-primary/5">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <p className="text-xs tracking-[0.35em] text-primary/60 uppercase mb-3">Nos formules</p>
          <h2 className="font-display text-4xl font-bold text-primary uppercase mb-12">Trois box au choix</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Box Duo",
                text: "Idéale pour un repas à deux, avec une sélection de plats du moment et un dessert maison.",
              },
              {
                title: "Box Découverte",
                text: "Pour explorer toutes nos saveurs : entrée, plat, dessert — un vrai repas complet préparé avec soin.",
              },
              {
                title: "Box Caepus",
                text: "Notre formule signature : les meilleurs plats de la maison, sélectionnés par Cécile et son équipe.",
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
      {/* Livraison à domicile */}
      <section className="bg-background border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <p className="text-xs tracking-[0.35em] text-primary/60 uppercase mb-3">Livraison à domicile</p>
          <h2 className="font-display text-4xl font-bold text-primary uppercase mb-6 leading-tight">
            À Paris — Votre déjeuner<br /><span className="italic font-normal">livré à domicile</span>
          </h2>
          <div className="w-8 h-0.5 bg-primary/30 mb-6" />
          <p className="text-base leading-relaxed text-foreground/75 max-w-xl">
            Déguster nos plats chez vous ? C'est possible ! Du mardi au vendredi, recevez notre sélection de plats chauds ou froids directement à domicile, dans Paris et proche banlieue.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
