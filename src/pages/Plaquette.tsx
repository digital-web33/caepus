import { useParams } from "react-router-dom";
import { Download, Printer } from "lucide-react";
import NotFound from "./NotFound";

const PLAQUETTES: Record<string, { id: string; title: string }> = {
  "traiteur": {
    id: "1ND5LD3d7JR-yKnnX35uw3cUh9vSTb6FJ",
    title: "Carte Buffet — Cocktail",
  },
  "plateaux-repas": {
    id: "1q8fMIXt0as1qxQWp0vNgIv3zy3PKC6YR",
    title: "Carte Plateaux Repas",
  },
  "lunchbox": {
    id: "1OgHCR6rn2GqeTaYi682KkwmymGd1FgtX",
    title: "Carte Lunchbox",
  },
};

const Plaquette = () => {
  const { slug } = useParams();
  const data = slug ? PLAQUETTES[slug] : null;

  if (!data) return <NotFound />;

  const previewUrl = `https://drive.google.com/file/d/${data.id}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${data.id}`;
  const viewUrl = `https://drive.google.com/file/d/${data.id}/view`;

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="font-display text-2xl sm:text-3xl uppercase tracking-wide">
              {data.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary-foreground/90 transition-colors rounded-sm"
              >
                <Download size={14} />
                Télécharger
              </a>
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary-foreground/60 text-primary-foreground px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary-foreground/10 transition-colors rounded-sm"
              >
                <Printer size={14} />
                Imprimer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
          <iframe
            src={previewUrl}
            title={data.title}
            className="w-full h-[80vh] border-0 rounded-sm shadow-lg bg-background"
            allow="autoplay"
          />
        </div>
      </section>
    </div>
  );
};

export default Plaquette;
