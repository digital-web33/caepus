import heroPortrait from "@/assets/hero-portrait.jpg";

const Accueil = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-6xl md:text-8xl font-black text-primary leading-[0.95] mb-8 uppercase">
            UNE HISTOIRE<br />
            <span className="italic font-normal text-5xl md:text-7xl">de famille</span>
          </h1>
          <p className="text-base leading-relaxed text-foreground/75 max-w-md">
            Depuis 1989, Caepus perpétue une cuisine familiale, fraîche et passionnée. De mère en fille, la tradition se réinvente.
          </p>
          <div className="mt-12 space-y-1">
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-medium">
              DE MÈRE EN FILLE
            </p>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-medium">
              DEPUIS 1989
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="border-2 border-primary/20 overflow-hidden rounded-sm">
            <img
              src={heroPortrait}
              alt="Portrait des fondatrices de Caepus"
              className="w-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-sm -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Accueil;
