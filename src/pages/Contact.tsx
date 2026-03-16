import logoSamsonite from "@/assets/logo-samsonite.png";
import logoChanel from "@/assets/logo-chanel.png";
import logoBalmain from "@/assets/logo-balmain.png";
import logoLeroyMerlin from "@/assets/logo-leroy-merlin.png";
import logoDarphin from "@/assets/logo-darphin.png";
import logoEres from "@/assets/logo-eres.png";
import logoTomFord from "@/assets/logo-tomford.png";
import logoWhiteCase from "@/assets/logo-whitecase.png";
import logoShearman from "@/assets/logo-shearman.png";
import logoRacine from "@/assets/logo-racine.png";

const brands = [
  { src: logoSamsonite, alt: "Samsonite" },
  { src: logoChanel, alt: "Chanel" },
  { src: logoBalmain, alt: "Balmain" },
  { src: logoLeroyMerlin, alt: "Leroy Merlin" },
  { src: logoDarphin, alt: "Darphin Paris" },
  { src: logoEres, alt: "Eres" },
  { src: logoTomFord, alt: "Tom Ford" },
  { src: logoWhiteCase, alt: "White & Case" },
  { src: logoShearman, alt: "Shearman & Sterling" },
  { src: logoRacine, alt: "Racine Avocats" },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">
            Contact
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            NOUS SOMMES À VOTRE ÉCOUTE
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-10">
          <p className="text-base leading-relaxed text-foreground/75">
            Notre équipe est à votre écoute du lundi au vendredi de 9h à 18h.
          </p>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-10">
          <div className="flex flex-wrap gap-10 text-foreground/80">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Adresse</p>
              <p className="text-sm font-medium">17 Rue Duphot, 75001 Paris</p>
              <p className="text-xs text-muted-foreground mt-0.5">À emporter — Retrouvez-nous tous les jours</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Téléphones</p>
              <p className="text-sm">
                <a href="tel:+33777964496" className="hover:text-primary transition-colors">07 77 96 44 96</a>
              </p>
              <p className="text-sm">
                <a href="tel:+33787283859" className="hover:text-primary transition-colors">07 87 28 38 59</a>
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Email</p>
              <p className="text-sm">
                <a href="mailto:contact@caepus.fr" className="hover:text-primary transition-colors">contact@caepus.fr</a>
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Horaires</p>
              <p className="text-sm">Lundi – Vendredi : 9h – 18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carte + Formulaire */}
      <section>
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Google Maps */}
            <div className="w-full h-80 md:h-full min-h-[320px]">
              <iframe
                title="Caepus — 17 Rue Duphot, Paris"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.897534428756!2d2.328!3d48.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3de5f6e1f9%3A0x0!2s17+Rue+Duphot%2C+75001+Paris!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="font-display text-3xl font-bold text-primary uppercase mb-6">
                Nous écrire
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">Prénom</label>
                    <input
                      type="text"
                      className="w-full border border-primary/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Prénom"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">Nom</label>
                    <input
                      type="text"
                      className="w-full border border-primary/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-primary/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full border border-primary/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Téléphone"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border border-primary/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Votre message…"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section className="bg-primary/5 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <h2 className="font-display text-3xl font-bold text-primary italic font-normal mb-10">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-10 gap-y-8 items-center justify-items-center">
            {brands.map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
