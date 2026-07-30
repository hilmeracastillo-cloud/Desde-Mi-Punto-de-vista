import React from "react";
import { bookStructure, bookMetadata } from "../data/bookIntro";
import { Layers, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import { ViewTab } from "../types";

interface StructureViewProps {
  onSelectChapter: (view: ViewTab) => void;
}

export const StructureView: React.FC<StructureViewProps> = ({ onSelectChapter }) => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto animate-fade-in">
      
      {/* Header */}
      <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 relative overflow-hidden shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span className="text-xs font-mono uppercase text-indigo-400 font-bold tracking-wider">
            Plan Global de la Obra
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Estructura preliminar del libro
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          {bookMetadata.title} propone una arquitectura conceptual dividida en cuatro partes fundamentales y 12 capítulos que abarcan desde el diagnóstico histórico hasta las aplicaciones prácticas en escuelas, universidades y empresas.
        </p>
      </div>

      {/* Parts & Chapters List */}
      <div className="space-y-8">
        {bookStructure.map((part, pIdx) => (
          <div key={pIdx} className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <h2 className="text-lg font-mono uppercase text-indigo-400 font-bold tracking-wider border-b border-[#262626] pb-3">
              {part.part}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {part.chapters.map((ch, cIdx) => (
                <div
                  key={cIdx}
                  className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                    ch.available
                      ? "bg-[#0D0D0D] border-indigo-500/50 hover:border-indigo-400 text-white shadow-md"
                      : "bg-[#0A0A0A]/60 border-[#262626] text-slate-400"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-indigo-400 font-bold">{ch.number}</span>
                      {ch.available ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Borrador completo disponible
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-[#141414] border border-[#262626] px-2 py-0.5 rounded-full">
                          <Clock className="w-3 h-3" />
                          En desarrollo
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-serif font-bold text-white">{ch.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      {ch.description}
                    </p>
                  </div>

                  {ch.available && (
                    <button
                      onClick={() => {
                        if (ch.number === "Capítulo 1") onSelectChapter("cap1");
                        else if (ch.number === "Capítulo 2") onSelectChapter("cap2");
                      }}
                      className="shrink-0 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md group"
                    >
                      <span>Leer capítulo</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
