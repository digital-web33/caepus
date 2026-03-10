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

      {/* Contenu */}
      <section>
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Infos */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-primary uppercase mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-5 text-foreground/80">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Adresse</p>
                    <p className="text-sm">75001 Paris</p>
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
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Horaires</p>
                    <p className="text-sm">Lundi – Vendredi : 9h – 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="font-display text-3xl font-bold text-primary uppercase mb-6">
                Nous écrire
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">Nom</label>
                  <input
                    type="text"
                    className="w-full border border-primary/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-primary/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
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
    </div>
  );
};

export default Contact;
