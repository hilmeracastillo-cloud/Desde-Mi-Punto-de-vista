import React, { useState, useEffect } from "react";
import { chapter8Header, chapter8Sections, chapter8Footnotes, chapter8References } from "../data/chapter8";
import { chapterInfographics, ChapterInfographicData } from "../data/infographics";
import { notebookInfographics, NotebookInfographicData } from "../data/notebookInfographics";
import { ChapterVisualSection } from "./ChapterVisualSection";
import { Footnote } from "../types";
import { BookOpen, ExternalLink, Hash, Bookmark, Sparkles, Layers, Image as ImageIcon, ArrowUpLeft } from "lucide-react";

interface Chapter8ViewProps {
  fontSizeClass: string;
  onSelectFootnote: (footnote: Footnote, citationId?: string) => void;
  onOpenInfographicModal?: (data: ChapterInfographicData) => void;
  onOpenNotebookInfographicModal?: (data: NotebookInfographicData) => void;
  targetSectionId?: string;
}

export const Chapter8View: React.FC<Chapter8ViewProps> = ({
  fontSizeClass,
  onSelectFootnote,
  onOpenInfographicModal,
  onOpenNotebookInfographicModal,
  targetSectionId,
}) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'notebook' | 'synthesis' | null>(null);
  const [returnScrollY, setReturnScrollY] = useState<number | null>(null);

  useEffect(() => {
    if (targetSectionId?.startsWith("infografia-visual")) {
      setActiveVisualTab("notebook");
    } else if (targetSectionId?.startsWith("sintesis-conceptos")) {
      setActiveVisualTab("synthesis");
    }
  }, [targetSectionId]);

  const handleOpenVisualResource = (type: 'notebook' | 'synthesis') => {
    setReturnScrollY(window.scrollY);
    setActiveVisualTab(type);
    setTimeout(() => {
      const targetId = type === 'notebook' ? 'infografia-visual-cap8' : 'sintesis-conceptos-cap8';
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleReturnToReading = () => {
    if (returnScrollY !== null) {
      window.scrollTo({ top: returnScrollY, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const renderParagraphWithFootnotes = (text: string, pIdx: number) => {
    if (text.includes("\n")) {
      const lines = text.split("\n");
      return (
        <div key={pIdx} className="space-y-1 my-3 pl-4 border-l-2 border-purple-500/30">
          {lines.map((line, lIdx) => (
            <div key={lIdx} className="text-slate-300 font-sans leading-relaxed">
              {renderInlineText(line)}
            </div>
          ))}
        </div>
      );
    }

    return (
      <p key={pIdx} className={`text-slate-300 font-sans leading-relaxed my-4 ${fontSizeClass}`}>
        {renderInlineText(text)}
      </p>
    );
  };

  const renderInlineText = (text: string) => {
    const regex = /(?:\[|\()(\d+)(?:\]|\))/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const num = parseInt(match[1], 10);
      const footnote = chapter8Footnotes.find((f) => f.id === num);

      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (footnote) {
        const citationId = `cita-nota-${num}`;
        parts.push(
          <button
            key={`fn-${match.index}`}
            id={citationId}
            onClick={(e) => {
              e.stopPropagation();
              onSelectFootnote(footnote, citationId);
            }}
            title={`Nota al pie [${num}]: ${footnote.title}`}
            className="inline-flex items-center justify-center mx-1 px-1.5 py-0.5 text-xs font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-500/40 rounded-md hover:bg-purple-700 hover:text-white transition-all transform hover:scale-105 shadow-sm scroll-mt-32 cursor-pointer"
          >
            [{num}]
          </button>
        );
      } else {
        parts.push(match[0]);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  const cap8Infographic = chapterInfographics["cap8"];
  const cap8Notebook = notebookInfographics["cap8"];

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Chapter Header */}
      <header className="space-y-6 text-center border-b border-[#262626] pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
          <Hash className="w-3.5 h-3.5" />
          {chapter8Header.chapterNumber} • {chapter8Header.pageRange}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          {chapter8Header.title}
        </h1>

        <p className="text-lg sm:text-xl text-purple-200/90 font-serif max-w-2xl mx-auto italic">
          {chapter8Header.subtitle}
        </p>

        {chapter8Header.epigraph && (
          <blockquote className="my-6 p-6 rounded-2xl bg-[#171717] border border-[#2a2a2a] max-w-2xl mx-auto text-left shadow-inner">
            <p className="text-sm sm:text-base text-slate-300 italic font-serif leading-relaxed">
              "{chapter8Header.epigraph.quote}"
            </p>
            <footer className="mt-3 text-xs font-mono text-slate-400 text-right">
              — {chapter8Header.epigraph.author}, <span className="text-slate-400">{chapter8Header.epigraph.source}</span>
            </footer>
          </blockquote>
        )}

        <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
          <span>{chapter8Header.readingTime}</span>
          <span>•</span>
          <span>{chapter8Sections.length} secciones</span>
          <span>•</span>
          <span>{chapter8Footnotes.length} notas al pie</span>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => handleOpenVisualResource('notebook')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Infografía Visual (NotebookLM)</span>
          </button>
          <button
            onClick={() => handleOpenVisualResource('synthesis')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/70 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-600/80 text-xs font-mono font-medium transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
          >
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Síntesis de Conceptos</span>
          </button>
          <a
            href="#notas-cap8"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#333] text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors"
          >
            <Bookmark className="w-3.5 h-3.5 text-slate-400" />
            <span>Notas (102 a 112)</span>
          </a>
        </div>
      </header>

      {/* Visual Infographic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {cap8Notebook && (
          <div className="relative overflow-hidden p-5 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-purple-500/30 hover:border-purple-500/60 transition-all group shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Infografía Visual de Síntesis
              </span>
              <span className="text-xs text-slate-400 font-mono">NotebookLM Style</span>
            </div>
            <h4 className="text-base font-serif font-bold text-white mb-1">
              Cartografía Visual del Capítulo 8
            </h4>
            <p className="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed">
              Diagnóstico tecnocéntrico, 5 decisiones arquitectónicas, pilares del núcleo instruccional y matriz comparativa.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleOpenVisualResource('notebook')}
                className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-mono flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-purple-950/50 cursor-pointer"
              >
                <ImageIcon className="w-4 h-4" /> Ver Infografía
              </button>
              {onOpenNotebookInfographicModal && (
                <button
                  onClick={() => onOpenNotebookInfographicModal(cap8Notebook)}
                  className="py-2 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 text-purple-200 text-xs font-bold font-mono transition-colors cursor-pointer"
                  title="Abrir en pantalla completa"
                >
                  Modal
                </button>
              )}
            </div>
          </div>
        )}

        {cap8Infographic && (
          <div className="relative overflow-hidden p-5 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#2d2d2d] hover:border-purple-500/40 transition-all group shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Panel Conceptual
              </span>
              <span className="text-xs text-slate-400 font-mono">3 Pilares & Cambio</span>
            </div>
            <h4 className="text-base font-serif font-bold text-white mb-1">
              Desplazamiento de Paradigma
            </h4>
            <p className="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed">
              De la automatización mecánica a la ampliación deliberada de capacidades y juicio ético.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleOpenVisualResource('synthesis')}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold font-mono flex items-center justify-center gap-1.5 transition-colors border border-slate-700 cursor-pointer"
              >
                <Layers className="w-4 h-4" /> Ver Síntesis
              </button>
              {onOpenInfographicModal && (
                <button
                  onClick={() => onOpenInfographicModal(cap8Infographic)}
                  className="py-2 px-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-slate-700 text-slate-300 text-xs font-bold font-mono transition-colors cursor-pointer"
                  title="Abrir en pantalla completa"
                >
                  Modal
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Chapter Content Sections */}
      <div className="space-y-12">
        {chapter8Sections.map((section, sIdx) => (
          <article
            key={section.id || sIdx}
            id={section.id}
            className="p-6 sm:p-10 rounded-3xl bg-[#141414] border border-[#242424] shadow-md hover:border-[#2f2f2f] transition-all scroll-mt-24 space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400/80 mb-2">
              <span>Sección {sIdx + 1}</span>
              <span>•</span>
              <span className="truncate">{section.id}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug border-b border-[#222222] pb-3">
              {section.title}
            </h2>

            <div className="space-y-2 pt-2">
              {section.paragraphs.map((p, pIdx) => renderParagraphWithFootnotes(p, pIdx))}
            </div>
          </article>
        ))}
      </div>

      {/* Chapter 8 Visual Resource Section (renders strictly one at a time, never sequentially) */}
      <ChapterVisualSection
        chapterId="cap8"
        chapterNumber="Capítulo 8"
        notebookData={cap8Notebook}
        synthesisData={cap8Infographic}
        activeTab={activeVisualTab}
        onTabChange={(tab) => {
          if (tab && activeVisualTab === null) {
            setReturnScrollY(window.scrollY);
          }
          setActiveVisualTab(tab);
        }}
        onReturnToReading={handleReturnToReading}
        onOpenNotebookModal={onOpenNotebookInfographicModal}
        onOpenSynthesisModal={onOpenInfographicModal}
      />

      {/* Footnotes Section */}
      <div id="notas-cap8" className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl scroll-mt-24">
        <div className="flex items-center justify-between border-b border-[#262626] pb-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Bookmark className="w-5 h-5 text-purple-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Notas del Capítulo 8 (102 a 112)</h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Haz clic en "Volver al texto" en cualquier nota para regresar al párrafo exacto de lectura
              </p>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-[#1c1c1c] border border-[#333] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowUpLeft className="w-3.5 h-3.5" />
            <span>Inicio del capítulo</span>
          </button>
        </div>

        <div className="space-y-6">
          {chapter8Footnotes.map((fn) => (
            <div
              key={fn.id}
              id={`nota-${fn.id}`}
              className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-5 space-y-3 scroll-mt-28 transition-all hover:border-purple-500/30"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono font-bold flex items-center justify-center text-xs">
                    [{fn.id}]
                  </span>
                  <h3 className="text-base font-bold font-serif text-white">{fn.title}</h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      const el = document.getElementById(`cita-nota-${fn.id}`);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                        el.classList.add("ring-4", "ring-purple-400", "ring-offset-2", "ring-offset-black");
                        setTimeout(() => {
                          el.classList.remove("ring-4", "ring-purple-400", "ring-offset-2", "ring-offset-black");
                        }, 2500);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-600 border border-purple-500/40 px-3 py-1.5 rounded-lg transition-all shadow-sm cursor-pointer"
                    title={`Regresar al texto donde se cita la nota [${fn.id}]`}
                  >
                    <ArrowUpLeft className="w-3.5 h-3.5" />
                    <span>Volver al texto</span>
                  </button>
                  <button
                    onClick={() => onSelectFootnote(fn, `cita-nota-${fn.id}`)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#222] transition-colors cursor-pointer"
                    title="Abrir nota ampliada"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">{fn.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* References Section */}
      <div id="referencias-cap8" className="bg-[#141414] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <BookOpen className="w-5 h-5 text-purple-400" />
          <h3 className="text-xl font-serif font-bold text-white">
            Referencias Bibliográficas — Capítulo 8
          </h3>
        </div>

        <ul className="space-y-4">
          {chapter8References.map((ref, idx) => (
            <li
              key={idx}
              className="p-4 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] text-xs sm:text-sm text-slate-300 leading-relaxed font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <span>{ref.citation}</span>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 hover:underline flex-shrink-0"
                >
                  DOI / Link <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
