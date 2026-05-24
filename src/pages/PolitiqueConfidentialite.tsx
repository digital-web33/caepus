const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Protection de vos données personnelles
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16 space-y-10 text-sm text-foreground/80 leading-relaxed">

          {/* Préambule */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Préambule</h2>
            <p>
              La société Caepus accorde la plus grande importance à la protection de vos données personnelles et au respect de votre vie privée. La présente politique de confidentialité détaille les engagements pris par Caepus en matière de collecte, d'utilisation et de protection de vos données conformément au Règlement (UE) 2016/679 du 27 avril 2016 (« RGPD ») et à la loi française n° 78-17 du 6 janvier 1978 modifiée (« Informatique et Libertés »).
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Dernière mise à jour : mai 2026
            </p>
          </div>

          {/* Article 1 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur le site <span className="font-semibold">caepus.fr</span> est :
            </p>
            <div className="mt-3 space-y-1">
              <p><span className="font-semibold">Caepus</span> — SARL au capital de 31 735,50 €</p>
              <p>17 Rue Duphot, 75001 Paris</p>
              <p>SIRET : 324 030 618 00031 — RCS Paris</p>
              <p>Représentée par son gérant, Yannick Garond</p>
              <p>Email : <a href="mailto:contact@caepus.fr" className="text-primary hover:underline">contact@caepus.fr</a></p>
              <p>Téléphone : 07 77 96 44 96</p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">2. Données collectées</h2>
            <p>
              Caepus collecte uniquement les données personnelles que vous nous communiquez volontairement, notamment via le formulaire de contact du site :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Contenu de votre message</li>
            </ul>
            <p className="mt-3">
              Aucune donnée sensible au sens de l'article 9 du RGPD (origine raciale, opinions politiques, convictions religieuses, état de santé, orientation sexuelle, etc.) n'est collectée.
            </p>
          </div>

          {/* Article 3 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">3. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées pour les finalités suivantes :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Répondre à vos demandes de renseignements</li>
              <li>Établir un devis personnalisé</li>
              <li>Assurer le suivi de votre commande ou de votre événement</li>
              <li>Gérer la relation commerciale et contractuelle</li>
            </ul>
            <p className="mt-3">
              Vos données ne sont en aucun cas utilisées à des fins de prospection commerciale, de profilage ou de revente à des tiers.
            </p>
          </div>

          {/* Article 4 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">4. Bases légales</h2>
            <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><span className="font-semibold">Consentement</span> (article 6.1.a du RGPD) pour l'envoi du formulaire de contact</li>
              <li><span className="font-semibold">Exécution d'un contrat ou de mesures précontractuelles</span> (article 6.1.b) pour le traitement de vos commandes et devis</li>
              <li><span className="font-semibold">Obligation légale</span> (article 6.1.c) pour la conservation des factures et données comptables</li>
            </ul>
          </div>

          {/* Article 5 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">5. Durée de conservation</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold">Données du formulaire de contact :</span> 3 ans à compter de notre dernier échange</li>
              <li><span className="font-semibold">Données clients (commandes, devis) :</span> 5 ans à compter de la fin de la relation commerciale</li>
              <li><span className="font-semibold">Données comptables (factures) :</span> 10 ans conformément à l'article L123-22 du Code de commerce</li>
            </ul>
          </div>

          {/* Article 6 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">6. Destinataires des données</h2>
            <p>Vos données sont destinées exclusivement aux personnes habilitées au sein de Caepus. Elles peuvent également être transmises à nos sous-traitants techniques, strictement nécessaires à l'exploitation du site et à la délivrance de nos services :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>
                <span className="font-semibold">Netlify, Inc.</span> (États-Unis) — hébergement du site internet
              </li>
              <li>
                <span className="font-semibold">Resend, Inc.</span> (États-Unis) — acheminement des emails issus du formulaire de contact
              </li>
            </ul>
            <p className="mt-3">
              Vos données ne sont jamais cédées, louées ou vendues à des tiers à des fins commerciales.
            </p>
          </div>

          {/* Article 7 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">7. Transferts hors Union européenne</h2>
            <p>
              Certains de nos sous-traitants techniques (Netlify, Resend) sont établis aux États-Unis. Les transferts de données vers ces prestataires sont encadrés par les clauses contractuelles types adoptées par la Commission européenne (décision 2021/914 du 4 juin 2021) ainsi que, le cas échéant, par leur adhésion au <span className="italic">Data Privacy Framework</span> UE — États-Unis.
            </p>
          </div>

          {/* Article 8 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">8. Sécurité des données</h2>
            <p>
              Caepus met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction : chiffrement des communications (HTTPS/TLS), accès restreint aux personnes habilitées, sauvegardes régulières, et choix de prestataires offrant des garanties de sécurité conformes au RGPD.
            </p>
          </div>

          {/* Article 9 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">9. Vos droits</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez à tout moment des droits suivants sur vos données personnelles :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><span className="font-semibold">Droit d'accès</span> — obtenir la confirmation que vos données sont traitées et en demander une copie</li>
              <li><span className="font-semibold">Droit de rectification</span> — corriger des données inexactes ou incomplètes</li>
              <li><span className="font-semibold">Droit à l'effacement</span> (« droit à l'oubli ») — demander la suppression de vos données</li>
              <li><span className="font-semibold">Droit à la limitation</span> du traitement</li>
              <li><span className="font-semibold">Droit d'opposition</span> au traitement de vos données</li>
              <li><span className="font-semibold">Droit à la portabilité</span> — recevoir vos données dans un format structuré et lisible</li>
              <li><span className="font-semibold">Droit de retirer votre consentement</span> à tout moment</li>
              <li><span className="font-semibold">Droit de définir des directives</span> relatives au sort de vos données après votre décès</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, adressez votre demande à : <a href="mailto:contact@caepus.fr" className="text-primary hover:underline">contact@caepus.fr</a> en précisant votre identité. Une réponse vous sera apportée dans un délai maximum d'un mois.
            </p>
          </div>

          {/* Article 10 */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">10. Cookies</h2>
            <p>
              Le site caepus.fr ne dépose aucun cookie de mesure d'audience, de publicité ou de traçage. Seuls quelques cookies tiers peuvent être déposés par les services intégrés (lecteur vidéo Vimeo). Pour plus d'informations, consultez notre{" "}
              <a href="/cookies" className="text-primary hover:underline">Politique de cookies</a>.
            </p>
          </div>

          {/* Article 11 */}
          <div className="pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">11. Réclamation auprès de la CNIL</h2>
            <p>
              Si, malgré nos efforts, vous estimez que vos droits ne sont pas respectés, vous disposez du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <div className="mt-3 space-y-1">
              <p>CNIL — 3 Place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07</p>
              <p>Téléphone : 01 53 73 22 22</p>
              <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
