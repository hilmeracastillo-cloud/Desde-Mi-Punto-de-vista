import React from "react";
import { chapter7Header, chapter7Sections, chapter7Footnotes, chapter7References } from "../data/chapter7";
import { Footnote } from "../types";
import { BookOpen, ExternalLink, Hash, Bookmark } from "lucide-react";

interface Chapter7ViewProps {
  fontSizeClass: string;
  onSelectFootnote: (footnote: Footnote) => void;
}

export const Chapter7View: React.FC<Chapter7ViewProps> = ({
  fontSizeClass,
  onSelectFootnote,
}) => {
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
    const regex = /\((\d+)\)/g;
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

      {/* Footnotes Section */}
      <div id="notas-cap7" className="bg-[#141414] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <Bookmark className="w-5 h-5 text-indigo-400" />
          <h3 className="text-xl font-serif font-bold text-white">
            Notas al Pie del Capítulo 7
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapter7Footnotes.map((fn) => (
            <div
              key={fn.id}
              onClick={() => onSelectFootnote(fn)}
              className="p-4 rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] hover:border-indigo-500/50 transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-bold">
                  ({fn.id})
                </span>
                <span className="text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-mono">
                  Ver detalle &rarr;
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                {fn.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {fn.description}
              </p>
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
