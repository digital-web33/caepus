import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { marked } from "marked";
import { parseFrontmatter } from "@/lib/parseFrontmatter";

// Chemin relatif obligatoire pour import.meta.glob (pas d'alias @/)
const rawFiles = import.meta.glob("../content/actualites/*.md", {
  as: "raw",
  eager: true,
});

// Configurer marked pour un rendu propre
marked.setOptions({ breaks: true });

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = useMemo(() => {
    const entry = Object.entries(rawFiles).find(([filePath]) =>
      filePath.endsWith(`/${slug}.md`)
    );
    if (!entry) return null;

    const { data, content } = parseFrontmatter(entry[1] as string);
    const html = marked.parse(content) as string;

    return {
      titre: (data.titre as string) ?? "Sans titre",
      date: (data.date as string) ?? "",
      image: (data.image as string) ?? "",
      html,
    };
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 px-6">
          <p className="text-muted-foreground text-sm">Article introuvable.</p>
          <Link
            to="/actualites"
            className="text-primary text-xs tracking-[0.2em] uppercase underline"
          >
            ← Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <Link
            to="/actualites"
            className="text-xs tracking-[0.25em] uppercase text-primary/50 hover:text-primary transition-colors mb-8 inline-block"
          >
            ← Actualités
          </Link>
          {article.date && (
            <p className="text-xs tracking-[0.3em] uppercase text-primary/50 mb-4">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary uppercase leading-tight">
            {article.titre}
          </h1>
        </div>
      </section>

      {/* Image de couverture */}
      {article.image && (
        <div className="max-w-5xl mx-auto px-8 pt-10">
          <img
            src={article.image}
            alt={article.titre}
            className="w-full rounded-2xl object-cover shadow-md border border-primary/10"
          />
        </div>
      )}

      {/* Contenu markdown rendu */}
      <section>
        <div className="max-w-5xl mx-auto px-8 py-10 pb-24">
          <div
            className="article-body text-foreground/80 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
