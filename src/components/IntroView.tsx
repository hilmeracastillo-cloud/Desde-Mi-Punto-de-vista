import React from "react";
import {
  bookMetadata,
  invitationText,
  whyThisBookText,
  purposeText,
  scopeText,
  bookStructure,
  feedbackAreas,
} from "../data/bookIntro";
import { BookOpen, Sparkles, MessageSquare, Check, ChevronRight, Layers, Award, Compass } from "lucide-react";
import { ViewTab } from "../types";

interface IntroViewProps {
  fontSizeClass: string;
  onNavigateNext: () => void;
  onOpenContents: () => void;
}

export const IntroView: React.FC<IntroViewProps> = ({
  fontSizeClass,
  onNavigateNext,
  onOpenContents,
}) => {
  return (
    <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
      
      {/* Hero Book Cover & Metadata Banner */}
      <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
              {bookMetadata.type}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1F1F23] border border-[#262626] text-slate-400 font-mono text-xs">
              {bookMetadata.version}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              {bookMetadata.title}
            </h1>
            <p className="text-lg sm:text-xl text-indigo-300 font-serif italic max-w-3xl leading-relaxed">
              {bookMetadata.subtitle}
            </p>
          </div>

          <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-serif font-bold">
                HC
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">Autor</span>
                <span className="text-base font-bold font-serif text-white">{bookMetadata.author}</span>
              </div>
            </div>

            <button
              onClick={onNavigateNext}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer group"
            >
              <span>Comenzar lectura (Capítulo 1)</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Invitación a la revisión */}
      <section className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">{invitationText.title}</h2>
        </div>

        <div className={`space-y-4 text-slate-300 leading-relaxed font-sans ${fontSizeClass}`}>
          {invitationText.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* ¿Por qué este libro? */}
      <section className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
            <BookOpen className="w-4 h-4" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">{whyThisBookText.title}</h2>
        </div>

        <div className={`space-y-4 text-slate-300 leading-relaxed font-sans ${fontSizeClass}`}>
          {whyThisBookText.paragraphs.map((p, idx) => (
            <p key={idx} className={p.startsWith("¿Qué tienen") ? "font-serif italic text-lg text-indigo-200 border-l-2 border-indigo-500 pl-4 py-1 my-2 bg-indigo-950/20 rounded-r-lg" : ""}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Propósito de la obra */}
      <section className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
            <Award className="w-4 h-4" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">{purposeText.title}</h2>
        </div>

        <div className={`space-y-4 text-slate-300 leading-relaxed font-sans ${fontSizeClass}`}>
          {purposeText.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* Alcance del manuscrito */}
      <section className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
            <Compass className="w-4 h-4" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">{scopeText.title}</h2>
        </div>
        <div className={`space-y-4 text-slate-300 font-sans ${fontSizeClass}`}>
          {scopeText.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {scopeText.bullets && scopeText.bullets.length > 0 && (
            <ul className="space-y-2.5 my-3 pl-2">
              {scopeText.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[#0A0A0A] border border-[#262626] p-3 rounded-xl">
                  <Check className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {scopeText.footer && (
            <p className="text-sm italic text-slate-400">{scopeText.footer}</p>
          )}
        </div>
      </section>

      {/* Estructura preliminar del libro */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-2xl font-serif font-bold text-white">Estructura preliminar del libro</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {bookStructure.map((part, pIdx) => (
            <div key={pIdx} className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-mono uppercase text-indigo-400 font-bold tracking-wider border-b border-[#262626] pb-2">
                {part.part}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {part.chapters.map((ch, cIdx) => (
                  <div
                    key={cIdx}
                    className={`p-4 rounded-xl border flex flex-col justify-between ${
                      ch.available
                        ? "bg-[#0D0D0D] border-indigo-500/40 text-white"
                        : "bg-[#0A0A0A]/50 border-[#262626] text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-indigo-400 font-bold">{ch.number}</span>
                        {ch.available ? (
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                            Texto disponible
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-slate-500">Próximamente</span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold font-serif text-white">{ch.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{ch.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comentarios que agradecería especialmente */}
      <section className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <MessageSquare className="w-5 h-5 text-indigo-400" />
          <h2 className="text-2xl font-serif font-bold text-white">{feedbackAreas.title}</h2>
        </div>
        <p className={`text-slate-300 font-sans ${fontSizeClass}`}>{feedbackAreas.intro}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {feedbackAreas.bullets.map((b, idx) => (
            <li key={idx} className="bg-[#0A0A0A] border border-[#262626] p-3.5 rounded-xl text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 italic pt-2">{feedbackAreas.footer}</p>
      </section>
    </div>
  );
};
