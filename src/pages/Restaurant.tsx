import { useLocation } from "react-router-dom";

const Restaurant = () => {
  const location = useLocation();
  const videoKey = location.key;

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase mb-4 leading-tight">
            <span className="text-primary-foreground text-4xl">Plateaux repas</span><br />
            <span className="italic font-normal text-primary-foreground/80 text-4xl">& lunchbox</span>
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Livrés partout en Île-de-France
          </p>
        </div>
      </section>

      {/* Plateaux repas */}
      <section className="bg-background border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Vidéo */}
            <div className="overflow-hidden rounded-2xl shadow-md border border-primary/10 aspect-[4/3]">
              <video
                key={videoKey + "-plateaux"}
                src="/uploads/hero-restaurant.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texte */}
            <div className="space-y-5">
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">Plateaux repas</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight">
                Plateaux repas
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
                <p>
                  Nos plateaux repas sont confectionnés le matin même, dans notre laboratoire de la rue Duphot.
                  Nous sélectionnons avec soin nos produits, qui sont frais et majoritairement de saison.
                </p>
                <p>
                  Caepus, c'est aussi un traiteur engagé — tous nos emballages sont en fibres végétales, pulpe de canne, carton recyclé, nos couverts sont en bois & bambou.
                </p>
                <p className="text-primary/80 font-medium">
                  Bon à savoir 😉<br />
                  Vous pouvez composer vos plateaux selon vos envies… Contactez-nous !<br />
                  Tous nos plateaux peuvent être adaptés <span className="uppercase tracking-wide">sans gluten</span>.
                </p>
              </div>
              <a
                href="#"
                aria-disabled="true"
                className="inline-block mt-2 bg-primary text-primary-foreground px-7 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors rounded-sm opacity-60 cursor-not-allowed"
              >
                Télécharger la carte des plateaux repas
              </a>
              <p className="text-xs text-muted-foreground italic">Lien à venir</p>
            </div>

          </div>
        </div>
      </section>

      {/* Lunchbox */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Texte */}
            <div className="space-y-5">
              <p className="text-xs tracking-[0.35em] text-primary/60 uppercase">Lunchbox</p>
              <h2 className="font-display text-4xl font-bold text-primary leading-tight">
                Lunchbox
              </h2>
              <div className="w-8 h-0.5 bg-primary/30" />
              <p className="text-sm leading-relaxed text-foreground/70">
                Nos lunchbox sont gourmandes et généreuses. Idéales pour un event de dernière minute, un shooting, ou un déjeuner groupé entre collaborateurs…
              </p>
              <a
                href="#"
                aria-disabled="true"
                className="inline-block mt-2 bg-primary text-primary-foreground px-7 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors rounded-sm opacity-60 cursor-not-allowed"
              >
                Télécharger la carte des lunchbox
              </a>
              <p className="text-xs text-muted-foreground italic">Lien à venir</p>
            </div>

            {/* Vidéo */}
            <div className="overflow-hidden rounded-2xl shadow-md border border-primary/10 aspect-[4/3]">
              <video
                key={videoKey + "-lunchbox"}
                src="/uploads/hero-lunchbox.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Livraison */}
      <section className="bg-background border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-16">
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
