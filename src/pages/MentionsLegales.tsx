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
              <p><span className="font-semibold">Capital social :</span> 31 735,50 €</p>
              <p><span className="font-semibold">Siège social :</span> 17 Rue Duphot, 75001 Paris</p>
              <p><span className="font-semibold">SIRET :</span> 324 030 618 00031</p>
              <p><span className="font-semibold">N° RCS :</span> 324 030 618 R.C.S. Paris</p>
              <p><span className="font-semibold">N° TVA intracommunautaire :</span> FR7501.324030618</p>
              <p><span className="font-semibold">Téléphone :</span> 07 77 96 44 96</p>
              <p><span className="font-semibold">Email :</span> contact@caepus.fr</p>
            </div>
          </div>

          {/* Directeur de publication */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">2. Directeur de publication</h2>
            <p className="text-sm text-foreground/80">
              Le directeur de la publication est <span className="font-semibold">Yannick Garond</span>, en qualité de gérant de la société Caepus.
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
              Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité des données vous concernant, ainsi que du droit de définir des directives relatives au sort de vos données après votre décès.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Les données collectées via le formulaire de contact (nom, prénom, email, téléphone, message) sont utilisées uniquement pour répondre à votre demande et ne sont jamais transmises à des tiers à des fins commerciales. Elles sont conservées 3 ans à compter du dernier contact.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@caepus.fr" className="text-primary hover:underline">contact@caepus.fr</a>. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>).
            </p>
          </div>

          {/* Cookies */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">7. Cookies</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Ce site ne dépose aucun cookie de mesure d'audience, de publicité ou de traçage. Seuls quelques cookies tiers peuvent être déposés par les services intégrés (lecteur vidéo Vimeo). Pour en savoir plus, consultez notre{" "}
              <a href="/cookies" className="text-primary hover:underline">Politique de cookies</a>.
            </p>
          </div>

          {/* Médiateur */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">8. Médiateur de la consommation</h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Conformément aux articles L611-1 et suivants du Code de la consommation, tout client consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable de tout litige l'opposant à la société Caepus.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              <span className="font-semibold">Médiateur désigné :</span> [À COMPLÉTER — nom et coordonnées du médiateur agréé par la CECMC]
            </p>
          </div>

          {/* Limitation de responsabilité */}
          <div className="pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">9. Limitation de responsabilité</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Caepus s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, Caepus ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, Caepus décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tout dommage résultant d'une intrusion frauduleuse d'un tiers.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
