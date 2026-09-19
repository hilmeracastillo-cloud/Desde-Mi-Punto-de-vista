import React, { useEffect, useRef } from "react";
import { X, ExternalLink, BookOpen, ArrowLeft, Bookmark } from "lucide-react";
import { Footnote } from "../types";

interface FootnoteModalProps {
  footnote: Footnote | null;
  onClose: () => void;
  returnCitationId?: string | null;
  onNavigateToNoteSection?: (footnoteId: number) => void;
}

export const FootnoteModal: React.FC<FootnoteModalProps> = ({
  footnote,
  onClose,
  returnCitationId,
  onNavigateToNoteSection,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  // Always reset scroll to the beginning when a new footnote opens
  useEffect(() => {
    if (footnote && bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [footnote]);

  // Handle ESC key to return to text
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && footnote) {
        handleReturnToText();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [footnote, returnCitationId]);

  if (!footnote) return null;

  const handleReturnToText = () => {
    onClose();
    if (returnCitationId) {
      setTimeout(() => {
        const el = document.getElementById(returnCitationId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-4", "ring-indigo-400", "ring-offset-2", "ring-offset-black");
          setTimeout(() => {
            el.classList.remove("ring-4", "ring-indigo-400", "ring-offset-2", "ring-offset-black");
          }, 2500);
        }
      }, 80);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Backdrop click to return */}
      <div className="absolute inset-0" onClick={handleReturnToText} />

      {/* Modal Container with guaranteed max height and internal scroll */}
      <div className="relative bg-[#141414] border border-[#262626] rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200 z-10">
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

        {/* Pinned Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#262626] bg-[#181818] shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-indigo-600/30 text-indigo-300 font-mono font-bold flex items-center justify-center border border-indigo-500/50 text-sm shadow-inner">
              [{footnote.id}]
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase text-indigo-400 font-semibold tracking-wider block">
                Nota al pie académica
              </span>
              <h4 className="text-base font-bold text-white font-serif leading-snug line-clamp-1">
                {footnote.title}
              </h4>
            </div>
          </div>
          <button
            onClick={handleReturnToText}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#262626] transition-colors cursor-pointer"
            aria-label="Cerrar y volver al texto"
            title="Cerrar y volver al texto (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body - Always starting at top */}
        <div ref={bodyRef} className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
              Contenido de la nota
            </span>
            <h3 className="text-lg font-bold font-serif text-white mb-2">{footnote.title}</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {footnote.description}
            </p>
          </div>

          {/* Recommended Readings */}
          {footnote.readings && footnote.readings.length > 0 && (
            <div className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-4 space-y-2">
              <span className="text-xs font-mono text-indigo-400 uppercase font-semibold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Lecturas y fuentes recomendadas:
              </span>
              <ul className="space-y-1.5">
                {footnote.readings.map((reading, index) => (
                  <li key={index} className="text-xs text-slate-300 font-serif italic pl-2.5 border-l-2 border-indigo-500/60">
                    {reading}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External Links */}
          {footnote.links && footnote.links.length > 0 && (
            <div className="pt-2 border-t border-[#222222] space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Fuentes y enlaces oficiales:
              </span>
              <div className="flex flex-col gap-2">
                {footnote.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs text-indigo-400 hover:text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 px-3 py-2 rounded-lg hover:border-indigo-500/60 transition-all font-mono"
                  >
                    <span className="truncate pr-2">{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pinned Sticky Footer with explicit Return to Text Action */}
        <div className="p-4 border-t border-[#262626] bg-[#181818] shrink-0 flex flex-wrap items-center justify-between gap-3">
          {onNavigateToNoteSection && (
            <button
              onClick={() => onNavigateToNoteSection(footnote.id)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-300 font-mono transition-colors cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ver en notas del capítulo ↓</span>
            </button>
          )}

          <button
            onClick={handleReturnToText}
            className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al texto donde estaba</span>
          </button>
        </div>
      </div>
    </div>
  );
};

