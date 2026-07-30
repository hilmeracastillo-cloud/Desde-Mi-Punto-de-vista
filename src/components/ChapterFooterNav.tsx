import React from "react";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import { ViewTab } from "../types";

interface ChapterFooterNavProps {
  currentView: ViewTab;
  onOpenContents: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  nextChapterLabel?: string;
  prevChapterLabel?: string;
}

export const ChapterFooterNav: React.FC<ChapterFooterNavProps> = ({
  currentView,
  onOpenContents,
  onNavigateNext,
  onNavigatePrev,
  nextChapterLabel,
  prevChapterLabel,
}) => {
  return (
    <div className="mt-16 pt-10 border-t border-[#262626] bg-[#0D0D0D] rounded-2xl p-6 sm:p-8 border shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl pointer-events-none"></div>

      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block mb-1">
          Fin de esta sección
        </span>
        <h4 className="text-lg sm:text-xl font-bold font-serif text-white">
          ¿Deseas continuar la lectura?
        </h4>
        <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
          Puedes consultar el índice general o avanzar directamente al siguiente capítulo.
        </p>
      </div>

      {/* Action Buttons: Contenidos and Próximo Capítulo */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
        {/* Previous button if available */}
        {onNavigatePrev && (
          <button
            onClick={onNavigatePrev}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-slate-300 hover:text-white border border-[#262626] font-sans font-semibold text-sm transition-all cursor-pointer group shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
            <span className="truncate">{prevChapterLabel || "Anterior"}</span>
          </button>
        )}

        {/* Button 1: Contenidos */}
        <button
          onClick={onOpenContents}
          className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-white border border-[#3F3F46] font-sans font-bold text-sm transition-all cursor-pointer shadow-lg hover:shadow-xl hover:border-indigo-500/50"
        >
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span>Contenidos</span>
        </button>

        {/* Button 2: Próximo Capítulo */}
        {onNavigateNext && (
          <button
            onClick={onNavigateNext}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-sans font-bold text-sm transition-all cursor-pointer shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 group"
          >
            <span>{nextChapterLabel || "Próximo Capítulo"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};
