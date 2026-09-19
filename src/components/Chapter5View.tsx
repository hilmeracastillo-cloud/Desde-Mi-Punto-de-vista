import React, { useState, useEffect } from "react";
import { chapter5Header, chapter5Sections, chapter5Footnotes, chapter5References } from "../data/chapter5";
import { chapterInfographics, ChapterInfographicData } from "../data/infographics";
import { notebookInfographics, NotebookInfographicData } from "../data/notebookInfographics";
import { ChapterVisualSection } from "./ChapterVisualSection";
import { Footnote } from "../types";
import { BookOpen, ExternalLink, Hash, Bookmark, Sparkles, Layers, Image as ImageIcon, ArrowUpLeft } from "lucide-react";

interface Chapter5ViewProps {
  fontSizeClass: string;
  onSelectFootnote: (footnote: Footnote, citationId?: string) => void;
  onOpenInfographicModal?: (data: ChapterInfographicData) => void;
  onOpenNotebookInfographicModal?: (data: NotebookInfographicData) => void;
  targetSectionId?: string;
}

export const Chapter5View: React.FC<Chapter5ViewProps> = ({
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
      const targetId = type === 'notebook' ? 'infografia-visual-cap5' : 'sintesis-conceptos-cap5';
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
  // Helper to render paragraph with clickable footnote numbers like (52), (53)...
  const renderParagraphWithFootnotes = (text: string, pIdx: number) => {
    if (text.includes("\n")) {
      const lines = text.split("\n");
      return (
        <div key={pIdx} className="space-y-1 my-3 pl-4 border-l-2 border-indigo-500/30">
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
      const footnote = chapter5Footnotes.find((f) => f.id === num);

      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (footnote) {
        const citationId = `cita-nota-${num}`;
        parts.push(
          <button
            key={`fn-${match.index}`}
            id={citationId}
            onClick={() => onSelectFootnote(footnote, citationId)}
            className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 hover:text-white hover:bg-indigo-600 font-mono text-xs font-bold transition-all cursor-pointer shadow-sm hover:scale-105 scroll-mt-32"
            title={`Ver nota [${num}]: ${footnote.title}`}
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

  return (
    <div className="space-y-12 max-w-4xl mx-auto animate-fade-in">
      
      {/* Chapter Title & Header */}
      <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl space-y-4">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold tracking-wider">
            {chapter5Header.number}
          </span>
          <span className="text-xs font-mono text-slate-400">{chapter5Header.pages}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          {chapter5Header.title}
        </h1>

        {chapter5Header.subtitle && (
          <h2 className="text-lg sm:text-xl font-serif italic text-indigo-300">
            {chapter5Header.subtitle}
          </h2>
        )}

        {chapter5Header.epigraph && (
          <div className="pt-4 border-t border-[#262626]">
            <p className="text-slate-400 italic font-serif text-sm sm:text-base border-l-2 border-indigo-500/50 pl-4 py-1">
              "{chapter5Header.epigraph}"
            </p>
          </div>
        )}

        <div className="pt-2 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleOpenVisualResource('notebook')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Infografía Visual (NotebookLM)</span>
          </button>
          <button
            onClick={() => handleOpenVisualResource('synthesis')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-600/80 text-xs font-mono font-medium transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Síntesis de Conceptos</span>
          </button>
          <a
            href="#notas-cap5"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#333] text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors"
          >
            <Bookmark className="w-3.5 h-3.5 text-slate-400" />
            <span>Notas (61 a 76)</span>
          </a>
        </div>
      </div>

      {/* Chapter Sections */}
      <div className="space-y-10">
        {chapter5Sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg hover:border-[#333333] transition-all scroll-mt-24"
          >
            <div className="flex items-center gap-2 border-b border-[#222222] pb-3">
              <Hash className="w-4 h-4 text-indigo-400 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
                {sec.title}
              </h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 font-sans">
              {sec.paragraphs.map((p, pIdx) =>
                renderParagraphWithFootnotes(p, pIdx)
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Chapter 5 Visual Resource Section (renders strictly one at a time, never sequentially) */}
      <ChapterVisualSection
        chapterId="cap5"
        chapterNumber="Capítulo 5"
        notebookData={notebookInfographics.cap5}
        synthesisData={chapterInfographics.cap5}
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

      {/* Chapter Footnotes Section */}
      <div id="notas-cap5" className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl scroll-mt-24">
        <div className="flex items-center justify-between border-b border-[#262626] pb-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Bookmark className="w-5 h-5 text-indigo-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Notas del Capítulo 5 (61 a 76)</h2>
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
          {chapter5Footnotes.map((fn) => (
            <div
              key={fn.id}
              id={`nota-${fn.id}`}
              className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-5 space-y-3 scroll-mt-28 transition-all hover:border-indigo-500/30"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono font-bold flex items-center justify-center text-xs">
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
                        el.classList.add("ring-4", "ring-indigo-400", "ring-offset-2", "ring-offset-black");
                        setTimeout(() => {
                          el.classList.remove("ring-4", "ring-indigo-400", "ring-offset-2", "ring-offset-black");
                        }, 2500);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-600 border border-indigo-500/40 px-3 py-1.5 rounded-lg transition-all shadow-sm cursor-pointer"
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
      <div id="referencias-cap5" className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#222222] pb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold block">Bibliografía</span>
            <h2 className="text-2xl font-serif font-bold text-white">Referencias del Capítulo 5</h2>
          </div>
        </div>

        <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
          {chapter5References.map((ref, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#161616] border border-[#242424] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-700 transition-all"
            >
              <p className="leading-relaxed text-slate-300">{ref.citation}</p>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300 shrink-0 self-start sm:self-auto bg-indigo-950/50 px-2.5 py-1 rounded border border-indigo-500/30 hover:bg-indigo-900/50 transition-colors"
                >
                  <span>Enlace oficial / DOI</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
