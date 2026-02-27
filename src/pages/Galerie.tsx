import tartsFlat from "@/assets/tarts-flatlay.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const Galerie = () => {
  const images = [
    { src: tartsFlat, alt: "Tartes et pâtisseries Caepus" },
    { src: heroPortrait, alt: "Les fondatrices de Caepus" },
    { src: chefPortrait, alt: "Cécile, fondatrice" },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary uppercase mb-4">
            Galerie
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            NOS CRÉATIONS EN IMAGES
          </p>
        </div>
      </section>

      {/* Grille photos */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-12">
            — Ajoutez vos photos —
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-sm aspect-square border border-primary/10">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Placeholders pour futures photos */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`placeholder-${i}`}
                className="aspect-square border-2 border-dashed border-primary/20 rounded-sm flex items-center justify-center bg-primary/5"
              >
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Photo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
