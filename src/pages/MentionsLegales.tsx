const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">
            Mentions légales
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Informations légales obligatoires
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16 space-y-10">

          {/* Éditeur */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">1. Éditeur du site</h2>
            <div className="space-y-1 text-sm text-foreground/80 leading-relaxed">
              <p><span className="font-semibold">Dénomination sociale :</span> Caepus</p>
              <p><span className="font-semibold">Forme juridique :</span> SARL</p>
              <p><span className="font-semibold">Capital social :</span> [À COMPLÉTER] €</p>
              <p><span className="font-semibold">Siège social :</span> 17 Rue Duphot, 75001 Paris</p>
              <p><span className="font-semibold">SIRET :</span> [À COMPLÉTER]</p>
              <p><span className="font-semibold">N° RCS :</span> [À COMPLÉTER]</p>
              <p><span className="font-semibold">Téléphone :</span> 07 77 96 44 96</p>
              <p><span className="font-semibold">Email :</span> contact@caepus.fr</p>
            </div>
          </div>

          {/* Directeur de publication */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">2. Directeur de publication</h2>
            <p className="text-sm text-foreground/80">
              Le directeur de la publication est <span className="font-semibold">[À COMPLÉTER — Nom du gérant]</span>, en qualité de gérant de la société Caepus.
            </p>
          </div>

          {/* Hébergeur */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">3. Hébergeur</h2>
            <div className="space-y-1 text-sm text-foreground/80 leading-relaxed">
              <p><span className="font-semibold">Société :</span> Netlify, Inc.</p>
              <p><span className="font-semibold">Adresse :</span> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis</p>
              <p><span className="font-semibold">Site web :</span> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.netlify.com</a></p>
            </div>
          </div>

          {/* Conception */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">4. Conception & développement</h2>
            <div className="space-y-1 text-sm text-foreground/80 leading-relaxed">
              <p><span className="font-semibold">Agence :</span> Digital-Web33</p>
              <p>Conception, design et développement du site internet.</p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">5. Propriété intellectuelle</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Caepus ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès écrit de Caepus.
            </p>
          </div>

          {/* Données personnelles */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">6. Données personnelles (RGPD)</h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@caepus.fr" className="text-primary hover:underline">contact@caepus.fr</a>
            </p>
          </div>

          {/* Cookies */}
          <div className="pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">7. Cookies</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Ce site utilise des cookies afin d'améliorer votre expérience de navigation et de réaliser des statistiques de visites. Pour en savoir plus, consultez notre{" "}
              <a href="/cookies" className="text-primary hover:underline">Politique de cookies</a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
