import React, { useState } from "react";
import { X, Search, ChevronRight, BookOpen } from "lucide-react";
import { ViewTab } from "../types";
import { chapter1Sections } from "../data/chapter1";
import { chapter2Sections } from "../data/chapter2";
import { chapter3Sections } from "../data/chapter3";
import { chapter4Sections } from "../data/chapter4";
import { invitationText, whyThisBookText, purposeText } from "../data/bookIntro";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewTab, sectionId?: string) => void;
}

interface SearchResult {
  view: ViewTab;
  sectionId?: string;
  sectionTitle: string;
  snippet: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const getResults = (): SearchResult[] => {
    if (!query.trim() || query.trim().length < 2) return [];
    const q = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search Intro
    [invitationText, whyThisBookText, purposeText].forEach((block) => {
      block.paragraphs.forEach((p) => {
        if (p.toLowerCase().includes(q)) {
          results.push({
            view: "intro",
            sectionTitle: block.title,
            snippet: p,
          });
        }
      });
    });

    // Search Chapter 1
    chapter1Sections.forEach((sec) => {
      sec.paragraphs.forEach((p) => {
        if (p.toLowerCase().includes(q)) {
          results.push({
            view: "cap1",
            sectionId: sec.id,
            sectionTitle: `Capítulo 1 • ${sec.title}`,
            snippet: p,
          });
        }
      });
    });

    // Search Chapter 2
    chapter2Sections.forEach((sec) => {
      sec.paragraphs.forEach((p) => {
        if (p.toLowerCase().includes(q)) {
          results.push({
            view: "cap2",
            sectionId: sec.id,
            sectionTitle: `Capítulo 2 • ${sec.title}`,
            snippet: p,
          });
        }
      });
    });

    // Search Chapter 3
    chapter3Sections.forEach((sec) => {
      sec.paragraphs.forEach((p) => {
        if (p.toLowerCase().includes(q)) {
          results.push({
            view: "cap3",
            sectionId: sec.id,
            sectionTitle: `Capítulo 3 • ${sec.title}`,
            snippet: p,
          });
        }
      });
    });

    // Search Chapter 4
    chapter4Sections.forEach((sec) => {
      sec.paragraphs.forEach((p) => {
        if (p.toLowerCase().includes(q)) {
          results.push({
            view: "cap4",
            sectionId: sec.id,
            sectionTitle: `Capítulo 4 • ${sec.title}`,
            snippet: p,
          });
        }
      });
    });

    return results.slice(0, 15);
  };

  const results = getResults();

  const handleSelect = (view: ViewTab, sectionId?: string) => {
    onNavigate(view, sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#141414] border border-[#262626] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[80vh] text-slate-200">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#262626] flex items-center gap-3 bg-[#0D0D0D]">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar conceptos, términos o autores (ej. Finlandia, Senge, Alexander)..."
            className="flex-1 bg-transparent border-none outline-none text-white text-sm font-sans placeholder-slate-500"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#262626] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans">
          {query.trim().length < 2 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              Escribe al menos 2 caracteres para buscar en el libro...
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              No se encontraron coincidencias para &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((res, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(res.view, res.sectionId)}
                className="w-full text-left p-3.5 rounded-xl bg-[#0A0A0A] hover:bg-[#1C1C20] border border-[#262626] hover:border-indigo-500/50 transition-all flex items-start justify-between gap-3 group cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{res.sectionTitle}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans line-clamp-2 leading-relaxed">
                    {res.snippet}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#262626] bg-[#0D0D0D] text-center text-xs text-slate-500 font-mono">
          {results.length} resultado(s) encontrado(s)
        </div>
      </div>
    </div>
  );
};
