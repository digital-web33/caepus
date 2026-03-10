import { useMemo } from "react";
import { Link } from "react-router-dom";
import { parseFrontmatter } from "@/lib/parseFrontmatter";

// Chemin relatif obligatoire pour import.meta.glob (pas d'alias @/)
const rawFiles = import.meta.glob("../content/actualites/*.md", {
  as: "raw",
  eager: true,
});

interface Article {
  slug: string;
  titre: string;
  date: string;
  resume: string;
  image: string;
  publie: boolean;
}

function parseArticles(): Article[] {
  return Object.entries(rawFiles)
    .map(([filePath, raw]) => {
      const { data } = parseFrontmatter(raw as string);
      const filename = filePath.split("/").pop() ?? "";
      const slug = filename.replace(/\.md$/, "");
      return {
        slug,
        titre: (data.titre as string) ?? "Sans titre",
        date: (data.date as string) ?? "",
        resume: (data.resume as string) ?? "",
        image: (data.image as string) ?? "",
        publie: data.publie !== false,
      };
    })
    .filter((a) => a.publie)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

const Actualites = () => {
  const articles = useMemo(() => parseArticles(), []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary uppercase mb-4">
            Actualités
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            NOS DERNIÈRES NOUVELLES
          </p>
        </div>
      </section>

      {/* Liste des articles */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-20">
          {articles.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm tracking-widest uppercase py-20">
              — Aucune actualité pour le moment —
            </p>
          ) : (
            <div className="space-y-10">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/actualites/${article.slug}`}
                  className="group block border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors shadow-sm bg-background"
                >
                  <div className="flex flex-col md:flex-row">
                    {article.image && (
                      <div className="md:w-56 md:flex-shrink-0 aspect-video md:aspect-auto overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.titre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col justify-center gap-3">
                      <p className="text-xs tracking-[0.3em] uppercase text-primary/50">
                        {article.date
                          ? new Date(article.date).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              timeZone: "UTC",
                            })
                          : ""}
                      </p>
                      <h2 className="font-display text-2xl font-bold text-primary group-hover:opacity-80 transition-opacity">
                        {article.titre}
                      </h2>
                      {article.resume && (
                        <p className="text-sm text-foreground/60 leading-relaxed">
                          {article.resume}
                        </p>
                      )}
                      <span className="text-xs tracking-[0.2em] uppercase text-primary/50 mt-2">
                        Lire la suite →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Actualites;
