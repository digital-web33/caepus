import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galerieData from "@/content/galerie.json";

type Photo = { src: string; alt: string; category: string };

const CATEGORIES = ["Tout", "Signature", "Lunchbox", "Offre traiteur", "Plats salés", "Desserts"];

// ── Floating Card ──────────────────────────────────────────────────────────────
const GalleryCard = ({
  photo,
  index,
  onClick,
}: {
  photo: Photo;
  index: number;
  onClick: () => void;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 60);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className={`group cursor-pointer transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      onClick={onClick}
    >
      <div
        className="overflow-hidden rounded-xl bg-card shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.12)] hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.22)] transition-shadow duration-500"
        style={{ borderRadius: "12px" }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
};

// ── Lightbox ───────────────────────────────────────────────────────────────────
const Lightbox = ({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const photo = photos[index];

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  // swipe support
  const touchStart = useCallback(
    (e: React.TouchEvent) => {
      const startX = e.touches[0].clientX;
      const handleEnd = (ev: TouchEvent) => {
        const diff = startX - ev.changedTouches[0].clientX;
        if (diff > 50) onNext();
        else if (diff < -50) onPrev();
        window.removeEventListener("touchend", handleEnd);
      };
      window.addEventListener("touchend", handleEnd);
    },
    [onNext, onPrev]
  );

  // prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      onTouchStart={touchStart}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={onClose}
        aria-label="Fermer"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      {index > 0 && (
        <button
          className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Précédent"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[88vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
          style={{ borderRadius: "12px" }}
        />
        <p className="absolute bottom-[-32px] left-0 right-0 text-center text-white/60 text-xs tracking-widest uppercase">
          {photo.alt}
        </p>
      </div>

      {/* Next */}
      {index < photos.length - 1 && (
        <button
          className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Suivant"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Counter */}
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em] uppercase">
        {index + 1} / {photos.length}
      </span>
    </div>
  );
};

// ── Main Page ──────────────────────────────────────────────────────────────────
const Galerie = () => {
  const allPhotos: Photo[] = galerieData.photos;
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tout"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeCategory);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextPhoto = () =>
    setLightboxIndex((i) =>
      i !== null && i < filtered.length - 1 ? i + 1 : i
    );

  return (
    <>
      {/* Meta description rendered as comment for SEO reference */}
      <div className="min-h-screen">
        {/* ── Hero ── */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-8 py-24">
            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase mb-4 leading-tight">
              <span className="text-primary-foreground text-5xl">Galerie photo</span><br />
              <span className="italic font-normal text-primary-foreground/80 text-xl">
                Découvrez l'univers gourmand de Caepus
              </span>
            </h1>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
              ​
            </p>
          </div>
        </section>

        {/* ── Filters ── */}
        <section className="border-b border-primary/10 bg-background sticky top-[72px] z-30 shadow-sm">
          <div className="max-w-5xl mx-auto px-8 py-4">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "Tout"
                    ? allPhotos.length
                    : allPhotos.filter((p) => p.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 py-2 text-xs tracking-[0.12em] font-semibold uppercase transition-all duration-300 rounded-full border
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                          : "bg-transparent text-muted-foreground border-primary/20 hover:border-primary/50 hover:text-foreground"
                      }`}
                  >
                    {cat}
                    {count > 0 && (
                      <span
                        className={`ml-1.5 text-[10px] ${
                          isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"
                        }`}
                      >
                        ({count})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Gallery Grid ── */}
        <section>
          <div className="max-w-5xl mx-auto px-8 py-16">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  — Photos à venir —
                </p>
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                {filtered.map((photo, i) => (
                  <div key={`${activeCategory}-${i}`} className="break-inside-avoid mb-6">
                    <GalleryCard
                      photo={photo}
                      index={i}
                      onClick={() => openLightbox(i)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
};

export default Galerie;
