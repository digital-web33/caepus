import tartsFlat from "@/assets/tarts-flatlay.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const APropos = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary uppercase mb-4">
            À Propos
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            NOTRE HISTOIRE · NOS VALEURS
          </p>
        </div>
      </section>

      {/* UN HÉRITAGE FAMILIAL */}
      <section className="border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-primary mb-16 uppercase tracking-wide">
            Un Héritage Familial
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5 text-base leading-relaxed text-foreground/80 order-2 md:order-1">
              <p>
                Caepus, c'est une histoire de famille depuis plus de 30 ans.
              </p>
              <p>
                Certains tombent dans la marmite — Cécile, la fondatrice de Caepus, est tombée elle dans la tarte : celle de sa maman, fondatrice de la célèbre marque <em>« Tarte Julie »</em>.
              </p>
              <p>
                Une pâte fine, un caramel croquant, des fruits frais… autant de saveurs qui ont bercé son enfance. La passion est née.
              </p>
              <p>
                Le fil conducteur de toute cette aventure familiale : le bon, le frais et le fait maison. Avec les années, ces valeurs n'ont pas changé.
              </p>
              <p className="font-medium text-primary">
                Chez Caepus, la cuisine est familiale, innovante, originale et ne cesse de se renouveler depuis sa création.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={tartsFlat}
                alt="Tartes et pâtisseries maison Caepus"
                className="w-full object-cover rounded-sm shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ÉNERGIE & ÉQUIPE */}
      <section>
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={chefPortrait}
                alt="Cécile, fondatrice de Caepus"
                className="w-full max-w-sm mx-auto object-cover rounded-sm shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary uppercase leading-tight">
                Plus qu'une<br />
                <span className="italic font-normal">équipe, une famille</span>
              </h2>
              <div className="w-12 h-0.5 bg-primary" />
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  Des collaborateurs soudés et passionnés, impliqués et respectueux du savoir-faire maison.
                </p>
                <p>
                  La famille s'agrandit ! En septembre, ouverture du nouveau concept de Cécile et sa fille Léa.
                </p>
                <p>
                  Vous y retrouverez toutes nos tartes salées et sucrées que vous avez adorées depuis la création de Tarte Julie.
                </p>
                <p className="font-medium text-primary">
                  À bientôt à Neuilly-sur-Seine et sur Instagram…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;
