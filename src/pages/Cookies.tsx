const Cookies = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">
            Politique de cookies
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
            Dernière mise à jour : janvier 2025
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16 space-y-10 text-sm text-foreground/80 leading-relaxed">

          {/* Intro */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de votre visite sur un site internet. Il permet au site de mémoriser certaines informations vous concernant (préférences de navigation, statistiques de visite, etc.) pour améliorer votre expérience.
            </p>
          </div>

          {/* Cookies utilisés */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Les cookies utilisés sur ce site</h2>

            <div className="space-y-6">
              {/* Techniques */}
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base">🔧 Cookies strictement nécessaires</h3>
                <p>Ces cookies sont indispensables au bon fonctionnement du site. Ils ne collectent aucune donnée personnelle à des fins publicitaires et ne peuvent pas être désactivés.</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="border border-primary/10 px-3 py-2 text-left font-semibold text-foreground">Nom</th>
                        <th className="border border-primary/10 px-3 py-2 text-left font-semibold text-foreground">Finalité</th>
                        <th className="border border-primary/10 px-3 py-2 text-left font-semibold text-foreground">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-primary/10 px-3 py-2">cookie_consent</td>
                        <td className="border border-primary/10 px-3 py-2">Mémoriser votre choix concernant les cookies</td>
                        <td className="border border-primary/10 px-3 py-2">12 mois</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="border border-primary/10 px-3 py-2">session</td>
                        <td className="border border-primary/10 px-3 py-2">Maintien de la session de navigation</td>
                        <td className="border border-primary/10 px-3 py-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics */}
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base">📊 Cookies de mesure d'audience (Google Analytics)</h3>
                <p>Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site (pages les plus consultées, durée de visite, provenance…). Les données collectées sont anonymisées et agrégées.</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="border border-primary/10 px-3 py-2 text-left font-semibold text-foreground">Nom</th>
                        <th className="border border-primary/10 px-3 py-2 text-left font-semibold text-foreground">Finalité</th>
                        <th className="border border-primary/10 px-3 py-2 text-left font-semibold text-foreground">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-primary/10 px-3 py-2">_ga</td>
                        <td className="border border-primary/10 px-3 py-2">Distinguer les utilisateurs (statistiques anonymes)</td>
                        <td className="border border-primary/10 px-3 py-2">2 ans</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="border border-primary/10 px-3 py-2">_ga_XXXXXXXX</td>
                        <td className="border border-primary/10 px-3 py-2">Conserver l'état de session</td>
                        <td className="border border-primary/10 px-3 py-2">2 ans</td>
                      </tr>
                      <tr>
                        <td className="border border-primary/10 px-3 py-2">_gid</td>
                        <td className="border border-primary/10 px-3 py-2">Distinguer les utilisateurs (24h)</td>
                        <td className="border border-primary/10 px-3 py-2">24 heures</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  En savoir plus : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Politique de confidentialité Google</a>
                </p>
              </div>
            </div>
          </div>

          {/* Gestion */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Gérer vos préférences</h2>
            <p className="mb-3">Vous pouvez à tout moment choisir d'accepter ou de refuser les cookies non essentiels en modifiant les paramètres de votre navigateur :</p>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Vous pouvez également vous opposer au suivi Google Analytics via :{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </div>

          {/* Contact */}
          <div className="pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Contact</h2>
            <p>
              Pour toute question relative à notre politique de cookies ou à l'utilisation de vos données personnelles, contactez-nous à :{" "}
              <a href="mailto:contact@caepus.fr" className="text-primary hover:underline">contact@caepus.fr</a>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Cookies;
