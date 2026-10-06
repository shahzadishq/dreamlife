"use client";

import { useEffect } from "react";

export function VideoLightbox({
  videoId,
  title,
  onClose,
}: {
  videoId: string | null;
  title?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!videoId) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Video: ${title}` : "Video"}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-md motion-safe:animate-[fade-up_0.3s_ease]" />
      <div
        className="relative z-10 w-full max-w-4xl motion-safe:animate-[fade-up_0.4s_cubic-bezier(0.22,1,0.36,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Video schließen"
          className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title || "DreamLife Now Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
