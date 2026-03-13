const CGV = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Applicables à compter du 1er janvier 2025
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16 space-y-10 text-sm text-foreground/80 leading-relaxed">

          {/* Article 1 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 1 — Objet & champ d'application</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations de service proposées par la société <span className="font-semibold">Caepus</span> (SARL au capital de [À COMPLÉTER] €, SIRET [À COMPLÉTER], dont le siège social est situé 17 Rue Duphot, 75001 Paris), ci-après dénommée « le Prestataire ».
            </p>
            <p className="mt-2">
              Ces CGV s'appliquent à toute commande de prestations traiteur, plateaux-repas, lunchbox ou toute autre prestation culinaire passée par le Client auprès du Prestataire, que la commande soit effectuée en ligne, par téléphone ou par email.
            </p>
          </div>

          {/* Article 2 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 2 — Commandes & devis</h2>
            <p>
              Toute commande fait l'objet d'un devis personnalisé transmis au Client par email ou remis en mains propres. La commande est considérée comme ferme et définitive dès réception du devis signé accompagné du versement de l'acompte visé à l'article 4.
            </p>
            <p className="mt-2">
              Le Prestataire se réserve le droit de refuser toute commande dont les délais ou les conditions ne permettraient pas une réalisation dans le respect de ses standards de qualité.
            </p>
          </div>

          {/* Article 3 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 3 — Délais de commande</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold">Plateaux-repas & lunchbox :</span> commande à passer la veille avant 17h pour une livraison le lendemain.</li>
              <li><span className="font-semibold">Prestations traiteur :</span> minimum 7 jours ouvrés avant la date de la prestation.</li>
              <li><span className="font-semibold">Événements de grande envergure :</span> minimum 15 jours ouvrés avant la date.</li>
            </ul>
            <p className="mt-3">Tout délai non respecté pourra entraîner le refus de la commande sans indemnité.</p>
          </div>

          {/* Article 4 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 4 — Tarifs & modalités de paiement</h2>
            <p>Les prix sont exprimés en euros toutes taxes comprises (TTC). Ils sont susceptibles d'être modifiés à tout moment ; le tarif applicable est celui en vigueur à la date de confirmation de commande.</p>
            <div className="mt-3 space-y-2">
              <p><span className="font-semibold">Acompte :</span> 30 % du montant total à la confirmation de la commande.</p>
              <p><span className="font-semibold">Solde :</span> payable au plus tard le jour de la prestation ou de la livraison.</p>
              <p><span className="font-semibold">Moyens de paiement acceptés :</span> virement bancaire, chèque, espèces (dans la limite légale), carte bancaire.</p>
            </div>
            <p className="mt-3">En cas de retard de paiement, des pénalités de retard au taux légal en vigueur seront appliquées, sans mise en demeure préalable.</p>
          </div>

          {/* Article 5 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 5 — Annulation & modification</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Annulation par le Client :</span></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Plus de 7 jours avant la prestation : remboursement de l'acompte versé, déduction faite des frais engagés.</li>
                <li>Entre 3 et 7 jours : l'acompte est conservé à titre d'indemnité.</li>
                <li>Moins de 48h avant la prestation : facturation du montant total de la commande.</li>
              </ul>
              <p className="mt-2">Toute modification de commande (quantité, menu, lieu) doit être signalée dès que possible et fera l'objet d'un avenant au devis initial.</p>
            </div>
          </div>

          {/* Article 6 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 6 — Livraison & prestations sur site</h2>
            <p>Les conditions et frais de livraison sont précisés dans le devis. Le Prestataire s'engage à respecter les délais convenus, sauf cas de force majeure. En cas de retard imputable au Prestataire, aucune indemnité ne pourra être réclamée si ce retard est inférieur à 30 minutes.</p>
            <p className="mt-2">Le Client s'assure de fournir toutes les informations nécessaires à la bonne réalisation de la prestation (accès, stationnement, équipements disponibles, etc.).</p>
          </div>

          {/* Article 7 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 7 — Allergènes & régimes spéciaux</h2>
            <p>Le Client est tenu d'informer le Prestataire de tout régime alimentaire particulier ou allergie lors de la commande. Bien que le Prestataire s'engage à prendre toutes les précautions nécessaires, il ne peut garantir l'absence totale de traces d'allergènes dans ses préparations du fait de la fabrication en cuisine partagée.</p>
          </div>

          {/* Article 8 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 8 — Responsabilité</h2>
            <p>La responsabilité du Prestataire est limitée au montant de la commande concernée. Caepus ne saurait être tenu responsable des dommages indirects (perte de profit, préjudice commercial, etc.) résultant d'une inexécution ou d'un retard de prestation.</p>
          </div>

          {/* Article 9 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 9 — Données personnelles</h2>
            <p>
              Les données collectées lors d'une commande sont nécessaires à son traitement. Elles ne sont pas transmises à des tiers. Conformément au RGPD, le Client dispose d'un droit d'accès, de rectification et de suppression en contactant : <a href="mailto:contact@caepus.fr" className="text-primary hover:underline">contact@caepus.fr</a>.
            </p>
          </div>

          {/* Article 10 */}
          <div className="pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Article 10 — Droit applicable & litiges</h2>
            <p>Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut de règlement amiable, les tribunaux compétents du ressort du siège social de Caepus seront seuls compétents.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CGV;
