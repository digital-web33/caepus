import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { marked } from "marked";
import matter from "gray-matter";

const rawFiles = import.meta.glob("@/content/actualites/*.md", {
  as: "raw",
  eager: true,
});

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = useMemo(() => {
    const entry = Object.entries(rawFiles).find(([path]) =>
      path.endsWith(`/${slug}.md`)
    );
    if (!entry) return null;
    const { data, content } = matter(entry[1] as string);
    return {
      titre: data.titre ?? "Sans titre",
      date: data.date ?? "",
      image: data.image ?? "",
      html: marked(content) as string,
    };
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Article introuvable.</p>
          <Link to="/actualites" className="text-primary text-sm underline">
            ← Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link
            to="/actualites"
            className="text-xs tracking-[0.25em] uppercase text-primary/50 hover:text-primary transition-colors mb-8 inline-block"
          >
            ← Actualités
          </Link>
          <p className="text-xs tracking-[0.3em] uppercase text-primary/50 mb-4">
            {new Date(article.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary uppercase leading-tight">
            {article.titre}
          </h1>
        </div>
      </section>

      {/* Image de couverture */}
      {article.image && (
        <div className="max-w-3xl mx-auto px-6 py-10">
          <img
            src={article.image}
            alt={article.titre}
            className="w-full rounded-2xl object-cover shadow-md border border-primary/10"
          />
        </div>
      )}

      {/* Contenu markdown */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-10 pb-24">
          <div
            className="prose prose-stone max-w-none text-foreground/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
