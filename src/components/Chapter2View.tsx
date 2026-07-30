import React from "react";
import { chapter2Header, chapter2Sections, chapter2Footnotes, chapter2References } from "../data/chapter2";
import { Footnote } from "../types";
import { BookOpen, ExternalLink, Hash, Bookmark } from "lucide-react";

interface Chapter2ViewProps {
  fontSizeClass: string;
  onSelectFootnote: (footnote: Footnote) => void;
}

export const Chapter2View: React.FC<Chapter2ViewProps> = ({
  fontSizeClass,
  onSelectFootnote,
}) => {
  // Helper to render paragraph with clickable footnote numbers like (11), (24)...
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
      const footnote = chapter2Footnotes.find((f) => f.id === num);

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
            {chapter2Header.number}
          </span>
          <span className="text-xs font-mono text-slate-400">Páginas 27 - 58</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          {chapter2Header.title}
        </h1>

        {chapter2Header.subtitle && (
          <h2 className="text-lg sm:text-xl font-serif italic text-indigo-300">
            {chapter2Header.subtitle}
          </h2>
        )}

        {chapter2Header.epigraph && (
          <div className="pt-4 border-t border-[#262626]">
            <blockquote className="text-base sm:text-lg font-serif italic text-indigo-200 leading-relaxed pl-4 border-l-2 border-indigo-500">
              &ldquo;{chapter2Header.epigraph}&rdquo;
            </blockquote>
          </div>
        )}
      </div>

      {/* Sections Loop */}
      <div className="space-y-12">
        {chapter2Sections.map((sec) => (
          <article
            key={sec.id}
            id={sec.id}
            className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl scroll-mt-24"
          >
            <div className="flex items-center gap-3 border-b border-[#262626] pb-3">
              <Hash className="w-5 h-5 text-indigo-400 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                {sec.title}
              </h2>
            </div>

            <div className="space-y-3">
              {sec.paragraphs.map((p, pIdx) => renderParagraphWithFootnotes(p, pIdx))}
            </div>
          </article>
        ))}
      </div>

      {/* Chapter 2 Notes Section */}
      <section id="notas-cap2" className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <Bookmark className="w-5 h-5 text-indigo-400" />
          <h2 className="text-2xl font-serif font-bold text-white">Notas del Capítulo 2 (11 a 33)</h2>
        </div>

        <div className="space-y-6">
          {chapter2Footnotes.map((fn) => (
            <div key={fn.id} className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 font-mono font-bold flex items-center justify-center border border-indigo-500/30 text-xs">
                  ({fn.id})
                </span>
                <h3 className="text-base font-bold font-serif text-white">{fn.title}</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">{fn.description}</p>

              {fn.readings && fn.readings.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-mono text-indigo-400 font-semibold block mb-1">Referencia / Lectura principal:</span>
                  <ul className="list-disc pl-5 text-xs text-slate-300 font-serif italic space-y-0.5">
                    {fn.readings.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {fn.links && fn.links.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {fn.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 2 References Section */}
      <section id="referencias-cap2" className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <h2 className="text-2xl font-serif font-bold text-white">Referencias Bibliográficas</h2>
        </div>

        <ul className="space-y-3 font-mono text-xs text-slate-300">
          {chapter2References.map((ref, idx) => (
            <li key={idx} className="bg-[#0A0A0A] border border-[#262626] p-4 rounded-xl space-y-2 hover:border-indigo-500/30 transition-colors">
              <div className="font-sans text-sm text-slate-200">{ref.citation}</div>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 px-3 py-1.5 rounded-lg hover:border-indigo-500/60 transition-all font-mono group"
                >
                  <span className="truncate max-w-md">{ref.url}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};
