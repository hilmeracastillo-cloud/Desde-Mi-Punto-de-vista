import React from "react";
import { X, ExternalLink, BookOpen } from "lucide-react";
import { Footnote } from "../types";

interface FootnoteModalProps {
  footnote: Footnote | null;
  onClose: () => void;
}

export const FootnoteModal: React.FC<FootnoteModalProps> = ({ footnote, onClose }) => {
  if (!footnote) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#141414] border border-[#262626] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative overflow-hidden text-slate-200">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#262626] mb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-mono font-bold flex items-center justify-center border border-indigo-500/30 text-xs">
              ({footnote.id})
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase text-indigo-400 font-semibold tracking-wider">Nota académica</span>
              <h4 className="text-base font-bold text-white font-serif leading-snug">{footnote.title}</h4>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-[#262626] transition-colors cursor-pointer"
            aria-label="Cerrar nota"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal mb-5">
          {footnote.description}
        </p>

        {/* Recommended Readings */}
        {footnote.readings && footnote.readings.length > 0 && (
          <div className="mb-4 bg-[#0A0A0A] border border-[#262626] rounded-xl p-3.5 space-y-2">
            <span className="text-[11px] font-mono text-indigo-400 uppercase font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Lecturas recomendadas:
            </span>
            <ul className="space-y-1">
              {footnote.readings.map((reading, index) => (
                <li key={index} className="text-xs text-slate-300 font-serif italic pl-2 border-l-2 border-indigo-500/50">
                  {reading}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* External Links */}
        {footnote.links && footnote.links.length > 0 && (
          <div className="pt-3 border-t border-[#262626] space-y-2">
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
                  className="flex items-center justify-between text-xs text-indigo-400 hover:text-indigo-300 bg-indigo-950/30 border border-indigo-500/20 px-3 py-2 rounded-lg hover:border-indigo-500/50 transition-all font-mono"
                >
                  <span className="truncate pr-2">{link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Close Action */}
        <div className="mt-6 pt-3 border-t border-[#262626] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#262626] hover:bg-[#333333] text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
