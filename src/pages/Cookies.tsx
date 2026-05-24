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
            Dernière mise à jour : mai 2026
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

            <p className="mb-4">
              Le site <span className="font-semibold">caepus.fr</span> ne dépose <span className="font-semibold">aucun cookie de mesure d'audience, de publicité ou de traçage</span>. Aucune solution de type Google Analytics, Facebook Pixel ou Tag Manager n'est utilisée. Votre navigation n'est ni profilée, ni revendue, ni partagée à des fins commerciales.
            </p>

            <div>
              <h3 className="font-semibold text-foreground mb-2 text-base">Cookies tiers</h3>
              <p>
                Certaines pages du site intègrent des contenus hébergés par des tiers (lecteur vidéo Vimeo notamment). Ces services peuvent déposer leurs propres cookies au moment où vous visualisez le contenu, en application de leurs propres politiques de confidentialité :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Vimeo : <a href="https://vimeo.com/cookie_policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vimeo.com/cookie_policy</a>
                </li>
              </ul>
              <p className="mt-3">
                Pour éviter le dépôt de ces cookies tiers, vous pouvez configurer votre navigateur pour les bloquer (voir section suivante).
              </p>
            </div>
          </div>

          {/* Gestion */}
          <div className="border-b border-primary/10 pb-8">
            <h2 className="font-display text-2xl font-bold text-primary uppercase mb-4">Gérer vos préférences</h2>
            <p className="mb-3">Vous pouvez à tout moment configurer votre navigateur pour bloquer ou supprimer les cookies :</p>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
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
