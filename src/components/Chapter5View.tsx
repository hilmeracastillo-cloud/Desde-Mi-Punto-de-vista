import React from "react";
import { chapter5Header, chapter5Sections, chapter5Footnotes, chapter5References } from "../data/chapter5";
import { Footnote } from "../types";
import { BookOpen, ExternalLink, Hash, Bookmark } from "lucide-react";

interface Chapter5ViewProps {
  fontSizeClass: string;
  onSelectFootnote: (footnote: Footnote) => void;
}

export const Chapter5View: React.FC<Chapter5ViewProps> = ({
  fontSizeClass,
  onSelectFootnote,
}) => {
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
    const regex = /\((\d+)\)/g;
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
        parts.push(
          <button
            key={`fn-${match.index}`}
            onClick={() => onSelectFootnote(footnote)}
            className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 hover:text-white hover:bg-indigo-600 font-mono text-xs font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
            title={`Ver nota (${num}): ${footnote.title}`}
          >
            ({num})
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

      {/* Chapter Footnotes Section */}
      <div id="notas-cap5" className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#222222] pb-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Bookmark className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold block">Aparato Crítico</span>
            <h2 className="text-2xl font-serif font-bold text-white">Notas del Capítulo 5</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapter5Footnotes.map((fn) => (
            <div
              key={fn.id}
              onClick={() => onSelectFootnote(fn)}
              className="p-4 rounded-xl bg-[#161616] border border-[#262626] hover:border-indigo-500/50 hover:bg-[#1A1A20] transition-all cursor-pointer space-y-2 group"
            >
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-bold">
                  ({fn.id})
                </span>
                <h3 className="font-serif font-bold text-slate-200 text-sm group-hover:text-indigo-300 transition-colors">
                  {fn.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-sans">
                {fn.description}
              </p>
              <div className="text-[11px] text-indigo-400 font-mono pt-1 flex items-center gap-1">
                <span>Ver detalle de la nota</span>
                <span>→</span>
              </div>
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
