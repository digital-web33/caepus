import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function useAutoplayOnVisible() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Restaurant = () => {
  const refPlateaux = useAutoplayOnVisible();
  const refLunchbox = useAutoplayOnVisible();

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase mb-4 leading-tight">
            <span className="text-[hsl(var(--nav-active))]">Plateaux repas</span><br />
            <span className="italic font-normal text-primary-foreground/80">& lunchbox</span>
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Livrés rue Duphot et partout à Paris
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
                ref={refPlateaux}
                src="/uploads/hero-restaurant.mp4"
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
...
            {/* Vidéo */}
            <div className="overflow-hidden rounded-2xl shadow-md border border-primary/10 aspect-[4/3]">
              <video
                ref={refLunchbox}
                src="/uploads/hero-lunchbox.mp4"
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
