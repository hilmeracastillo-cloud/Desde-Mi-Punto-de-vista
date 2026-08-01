import React from "react";
import { X, BookOpen, ChevronRight, CheckCircle2, Bookmark, FileText } from "lucide-react";
import { ViewTab } from "../types";
import { chapter1Sections } from "../data/chapter1";
import { chapter2Sections } from "../data/chapter2";
import { chapter3Sections } from "../data/chapter3";
import { chapter4Sections } from "../data/chapter4";
import { bookStructure } from "../data/bookIntro";

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeView: ViewTab;
  onSelectView: (view: ViewTab, sectionId?: string) => void;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  activeView,
  onSelectView,
}) => {
  if (!isOpen) return null;

  const handleNavigate = (view: ViewTab, sectionId?: string) => {
    onSelectView(view, sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xl h-full bg-[#0D0D0D] border-l border-[#262626] shadow-2xl flex flex-col z-10 overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#262626] bg-[#141414] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-indigo-400 font-semibold tracking-wider">Tabla de Contenidos</span>
              <h3 className="text-lg font-bold font-serif text-white">Índice del Libro</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#262626] transition-colors cursor-pointer"
            aria-label="Cerrar contenidos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 font-sans">
          
          {/* Section: Presentación */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider font-semibold border-b border-[#262626] pb-1">
              Premisa & Preliminares
            </div>
            <button
              onClick={() => handleNavigate("intro")}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                activeView === "intro"
                  ? "bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                  : "bg-[#141414] border-[#262626] text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Bookmark className={`w-4 h-4 ${activeView === "intro" ? "text-indigo-400" : "text-slate-500"}`} />
                <div>
                  <div className="text-sm font-bold font-serif">Invitación & Propósito del Libro</div>
                  <div className="text-xs text-slate-400 font-sans">Introducción, Alcance y Metodología de Revisión</div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeView === "intro" ? "text-indigo-400 translate-x-0.5" : "text-slate-500 group-hover:translate-x-0.5"}`} />
            </button>
          </div>

          {/* Section: Capítulo 1 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#262626] pb-1">
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">
                Capítulo 1
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Disponible
              </span>
            </div>

            <button
              onClick={() => handleNavigate("cap1")}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                activeView === "cap1"
                  ? "bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                  : "bg-[#141414] border-[#262626] text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              <div>
                <div className="text-sm font-bold font-serif">La arquitectura invisible</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">El origen de la investigación y el descubrimiento de una nueva forma de observar las organizaciones.</div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeView === "cap1" ? "text-indigo-400 translate-x-0.5" : "text-slate-500 group-hover:translate-x-0.5"}`} />
            </button>

            {/* Chapter 1 Sub-sections */}
            <div className="pl-3 border-l-2 border-[#262626] space-y-1.5 pt-1">
              {chapter1Sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNavigate("cap1", sec.id)}
                  className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-slate-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-2">• {sec.title}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-indigo-400 shrink-0 transition-opacity" />
                </button>
              ))}
              <button
                onClick={() => handleNavigate("cap1", "notas-cap1")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Notas del Capítulo 1 (1 al 10)</span>
              </button>
              <button
                onClick={() => handleNavigate("cap1", "referencias-cap1")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Referencias del Capítulo 1</span>
              </button>
            </div>
          </div>

          {/* Section: Capítulo 2 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#262626] pb-1">
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">
                Capítulo 2
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Disponible
              </span>
            </div>

            <button
              onClick={() => handleNavigate("cap2")}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                activeView === "cap2"
                  ? "bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                  : "bg-[#141414] border-[#262626] text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              <div>
                <div className="text-sm font-bold font-serif">Cuando el diseño deja de responder al propósito</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">La herencia invisible de la Revolución Industrial y la crisis del paradigma tradicional.</div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeView === "cap2" ? "text-indigo-400 translate-x-0.5" : "text-slate-500 group-hover:translate-x-0.5"}`} />
            </button>

            {/* Chapter 2 Sub-sections */}
            <div className="pl-3 border-l-2 border-[#262626] space-y-1.5 pt-1">
              {chapter2Sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNavigate("cap2", sec.id)}
                  className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-slate-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-2">• {sec.title}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-indigo-400 shrink-0 transition-opacity" />
                </button>
              ))}
              <button
                onClick={() => handleNavigate("cap2", "notas-cap2")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Notas del Capítulo 2 (11 al 33)</span>
              </button>
              <button
                onClick={() => handleNavigate("cap2", "referencias-cap2")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Referencias del Capítulo 2</span>
              </button>
            </div>
          </div>

          {/* Section: Capítulo 3 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#262626] pb-1">
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">
                Capítulo 3
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Disponible
              </span>
            </div>

            <button
              onClick={() => handleNavigate("cap3")}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                activeView === "cap3"
                  ? "bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                  : "bg-[#141414] border-[#262626] text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              <div>
                <div className="text-sm font-bold font-serif">El fracaso de las reformas aisladas</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">Por qué las innovaciones producen cambios visibles pero pocas transformaciones sostenibles.</div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeView === "cap3" ? "text-indigo-400 translate-x-0.5" : "text-slate-500 group-hover:translate-x-0.5"}`} />
            </button>

            {/* Chapter 3 Sub-sections */}
            <div className="pl-3 border-l-2 border-[#262626] space-y-1.5 pt-1">
              {chapter3Sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNavigate("cap3", sec.id)}
                  className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-slate-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-2">• {sec.title}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-indigo-400 shrink-0 transition-opacity" />
                </button>
              ))}
              <button
                onClick={() => handleNavigate("cap3", "notas-cap3")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Notas del Capítulo 3 (34 al 43)</span>
              </button>
              <button
                onClick={() => handleNavigate("cap3", "referencias-cap3")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Referencias del Capítulo 3</span>
              </button>
            </div>
          </div>

          {/* Section: Capítulo 4 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#262626] pb-1">
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">
                Capítulo 4
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Disponible
              </span>
            </div>

            <button
              onClick={() => handleNavigate("cap4")}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                activeView === "cap4"
                  ? "bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                  : "bg-[#141414] border-[#262626] text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              <div>
                <div className="text-sm font-bold font-serif">Arquitectura del Aprendizaje</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">Aprender a diseñar organizaciones que aprenden: fundamentos, definición y leyes.</div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeView === "cap4" ? "text-indigo-400 translate-x-0.5" : "text-slate-500 group-hover:translate-x-0.5"}`} />
            </button>

            {/* Chapter 4 Sub-sections */}
            <div className="pl-3 border-l-2 border-[#262626] space-y-1.5 pt-1">
              {chapter4Sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNavigate("cap4", sec.id)}
                  className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-slate-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-2">• {sec.title}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-indigo-400 shrink-0 transition-opacity" />
                </button>
              ))}
              <button
                onClick={() => handleNavigate("cap4", "notas-cap4")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Notas del Capítulo 4 (44 al 60)</span>
              </button>
              <button
                onClick={() => handleNavigate("cap4", "referencias-cap4")}
                className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 hover:bg-[#18181C] transition-all font-mono flex items-center justify-between cursor-pointer"
              >
                <span>• Referencias del Capítulo 4</span>
              </button>
            </div>
          </div>

          {/* Section: Estructura General del Libro (Partes I - IV) */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider font-semibold border-b border-[#262626] pb-1">
              Estructura Completa de la Obra
            </div>

            <button
              onClick={() => handleNavigate("estructura")}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                activeView === "estructura"
                  ? "bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                  : "bg-[#141414] border-[#262626] text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText className={`w-4 h-4 ${activeView === "estructura" ? "text-indigo-400" : "text-slate-500"}`} />
                <div>
                  <div className="text-sm font-bold font-serif">Plan de la Obra (Capítulos 1 al 12)</div>
                  <div className="text-xs text-slate-400 font-sans">Estructura general, partes y alcance teórico del libro</div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeView === "estructura" ? "text-indigo-400 translate-x-0.5" : "text-slate-500 group-hover:translate-x-0.5"}`} />
            </button>
          </div>

        </div>

        {/* Footer info inside menu */}
        <div className="p-4 border-t border-[#262626] bg-[#141414] text-center text-xs text-slate-500 font-mono shrink-0">
          Arquitectura del Aprendizaje • Hilmer Castillo Bescanza
        </div>
      </div>
    </div>
  );
};
