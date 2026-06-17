import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";
import { EASE_PREMIUM } from "@/lib/motion";

type LightboxProps = {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
};

export function Lightbox({ images, startIndex, title, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-night/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} screenshots`}
      >
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-line bg-card/60 text-muted transition-colors hover:text-ink"
        >
          <Icon name="close" className="size-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous screenshot"
          className="absolute left-4 z-10 grid size-12 place-items-center rounded-full border border-line bg-card/60 text-muted transition-colors hover:text-accent md:left-10"
        >
          <Icon name="chevron-left" className="size-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next screenshot"
          className="absolute right-4 z-10 grid size-12 place-items-center rounded-full border border-line bg-card/60 text-muted transition-colors hover:text-accent md:right-10"
        >
          <Icon name="chevron-right" className="size-6" />
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] w-auto max-w-[88vw] rounded-2xl border border-line object-contain shadow-2xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
          />
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-muted">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
