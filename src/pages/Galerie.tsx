import galerieData from "@/content/galerie.json";

const Galerie = () => {
  const images: { src: string; alt: string }[] = galerieData.photos;

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
          {images.length === 0 && (
            <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-12">
              — Les photos apparaîtront ici —
            </p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl aspect-square border border-primary/10 shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
