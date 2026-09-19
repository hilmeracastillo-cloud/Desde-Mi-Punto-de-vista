import React, { useState, useEffect } from "react";
import { chapter7Header, chapter7Sections, chapter7Footnotes, chapter7References } from "../data/chapter7";
import { chapterInfographics, ChapterInfographicData } from "../data/infographics";
import { notebookInfographics, NotebookInfographicData } from "../data/notebookInfographics";
import { ChapterVisualSection } from "./ChapterVisualSection";
import { Footnote } from "../types";
import { BookOpen, ExternalLink, Hash, Bookmark, Sparkles, Layers, Image as ImageIcon, ArrowUpLeft } from "lucide-react";

interface Chapter7ViewProps {
  fontSizeClass: string;
  onSelectFootnote: (footnote: Footnote, citationId?: string) => void;
  onOpenInfographicModal?: (data: ChapterInfographicData) => void;
  onOpenNotebookInfographicModal?: (data: NotebookInfographicData) => void;
  targetSectionId?: string;
}

export const Chapter7View: React.FC<Chapter7ViewProps> = ({
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
      const targetId = type === 'notebook' ? 'infografia-visual-cap7' : 'sintesis-conceptos-cap7';
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
  // Helper to render paragraph with clickable footnote numbers like (104), (105)...
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
      const footnote = chapter7Footnotes.find((f) => f.id === num);

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
            {chapter7Header.number}
          </span>
          <span className="text-xs font-mono text-slate-400">{chapter7Header.pages}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          {chapter7Header.title}
        </h1>

        {chapter7Header.subtitle && (
          <h2 className="text-lg sm:text-xl font-serif italic text-indigo-300">
            {chapter7Header.subtitle}
          </h2>
        )}

        {chapter7Header.epigraph && (
          <div className="mt-6 pt-6 border-t border-[#262626] italic text-slate-300 text-sm sm:text-base font-serif leading-relaxed">
            "{chapter7Header.epigraph}"
          </div>
        )}

        <div className="pt-4 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleOpenVisualResource('notebook')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Infografía Visual (NotebookLM)</span>
          </button>
          <button
            onClick={() => handleOpenVisualResource('synthesis')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-950/70 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-600/80 text-xs font-mono font-medium transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Síntesis de Conceptos</span>
          </button>
          <a
            href="#notas-cap7"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#333] text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors"
          >
            <Bookmark className="w-3.5 h-3.5 text-slate-400" />
            <span>Notas al Pie</span>
          </a>
        </div>
      </div>

      {/* Chapter Sections */}
      <div className="space-y-12">
        {chapter7Sections.map((sec) => (
          <div
            key={sec.id}
            id={sec.id}
            className="bg-[#141414] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-lg relative scroll-mt-24 space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
              <Hash className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {sec.title}
              </h3>
            </div>

            <div className="text-slate-300">
              {sec.paragraphs.map((p, pIdx) => renderParagraphWithFootnotes(p, pIdx))}
            </div>
          </div>
        ))}
      </div>

      {/* Chapter 7 Visual Resource Section (renders strictly one at a time, never sequentially) */}
      <ChapterVisualSection
        chapterId="cap7"
        chapterNumber="Capítulo 7"
        notebookData={notebookInfographics.cap7}
        synthesisData={chapterInfographics.cap7}
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
      <div id="notas-cap7" className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl scroll-mt-24">
        <div className="flex items-center justify-between border-b border-[#262626] pb-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Bookmark className="w-5 h-5 text-indigo-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Notas del Capítulo 7 (91 a 101)</h2>
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
          {chapter7Footnotes.map((fn) => (
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
      <div id="referencias-cap7" className="bg-[#141414] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <h3 className="text-xl font-serif font-bold text-white">
            Referencias Bibliográficas — Capítulo 7
          </h3>
        </div>

        <ul className="space-y-4">
          {chapter7References.map((ref, idx) => (
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 hover:underline flex-shrink-0"
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
