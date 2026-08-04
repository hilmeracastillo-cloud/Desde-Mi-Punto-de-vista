import React from "react";
import { BookOpen, Type, BookmarkCheck, Search, Sun, Moon, Eye, FileText } from "lucide-react";
import { ViewTab } from "../types";

export type ReadingTheme = "dark" | "light" | "sepia";

interface HeaderProps {
  activeView: ViewTab;
  onOpenContents: () => void;
  fontSizeLevel: number; // 0: base, 1: medium, 2: large
  onChangeFontSize: (level: number) => void;
  theme: ReadingTheme;
  onChangeTheme: (theme: ReadingTheme) => void;
  onOpenSearch?: () => void;
  onOpenPdf?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onOpenContents,
  fontSizeLevel,
  onChangeFontSize,
  theme,
  onChangeTheme,
  onOpenSearch,
  onOpenPdf,
}) => {
  const getViewTitle = () => {
    switch (activeView) {
      case "intro":
        return "Presentación e Introducción";
      case "cap1":
        return "Capítulo 1 • La arquitectura invisible";
      case "cap2":
        return "Capítulo 2 • Cuando el diseño deja de responder al propósito";
      case "cap3":
        return "Capítulo 3 • El fracaso de las reformas aisladas";
      case "cap4":
        return "Capítulo 4 • Arquitectura del Aprendizaje";
      case "cap5":
        return "Capítulo 5 • El liderazgo como disciplina de diseño";
      case "estructura":
        return "Estructura Preliminar de la Obra";
      default:
        return "";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Book Title Branding */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-700/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-serif font-extrabold text-base sm:text-lg shadow-inner shrink-0">
            AA
          </div>
          <div className="min-w-0">
            <h1 className="text-sm sm:text-base md:text-lg font-bold font-serif text-white tracking-tight leading-snug truncate">
              Arquitectura del Aprendizaje
            </h1>
            <span className="text-[10px] sm:text-[11px] font-sans text-slate-400 block truncate">
              Hilmer Castillo Bescanza
            </span>
          </div>
        </div>

        {/* Current Chapter Indicator (Desktop & Tablet) */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-serif text-slate-300">
          <BookmarkCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="truncate max-w-xs">{getViewTitle()}</span>
        </div>

        {/* Right Controls: Font size toggle, Search button & Contenidos button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Font Size Selector */}
          <div className="flex items-center bg-[#141414] border border-[#262626] rounded-xl p-0.5 sm:p-1 gap-0.5">
            <button
              onClick={() => onChangeFontSize(0)}
              className={`px-2 py-1 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer min-w-[28px] ${
                fontSizeLevel === 0 ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
              }`}
              title="Tamaño de letra normal"
            >
              A
            </button>
            <button
              onClick={() => onChangeFontSize(1)}
              className={`px-2 py-1 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer min-w-[28px] ${
                fontSizeLevel === 1 ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
              }`}
              title="Tamaño de letra mediano"
            >
              A+
            </button>
            <button
              onClick={() => onChangeFontSize(2)}
              className={`px-2 py-1 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer min-w-[28px] ${
                fontSizeLevel === 2 ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
              }`}
              title="Tamaño de letra grande"
            >
              A++
            </button>
          </div>

          {/* Search Button if provided */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#141414] hover:bg-[#202020] text-slate-300 hover:text-white border border-[#262626] text-xs font-sans font-medium flex items-center gap-1.5 transition-all cursor-pointer min-h-[36px]"
              title="Buscar en el libro"
            >
              <Search className="w-4 h-4 text-indigo-400" />
              <span className="hidden md:inline">Buscar</span>
            </button>
          )}

          {/* PDF Export Button */}
          {onOpenPdf && (
            <button
              onClick={onOpenPdf}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#141414] hover:bg-[#202020] text-slate-300 hover:text-white border border-[#262626] text-xs font-sans font-medium flex items-center gap-1.5 transition-all cursor-pointer min-h-[36px]"
              title="Exportar o guardar como documento PDF"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="inline font-bold text-emerald-400">PDF</span>
            </button>
          )}

          {/* Theme Selector (Oscuro / Claro / Sepia) - Placed next to Contenidos */}
          <div className="flex items-center bg-[#141414] border border-[#262626] rounded-xl p-0.5 sm:p-1 gap-0.5" title="Cambiar color de fondo y texto">
            <button
              onClick={() => onChangeTheme("dark")}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-sans font-medium flex items-center gap-1 transition-all cursor-pointer ${
                theme === "dark"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Modo Oscuro (Fondo negro, letras blancas)"
            >
              <Moon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Oscuro</span>
            </button>
            <button
              onClick={() => onChangeTheme("light")}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-sans font-medium flex items-center gap-1 transition-all cursor-pointer ${
                theme === "light"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Modo Claro (Fondo blanco, letras oscuras)"
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Claro</span>
            </button>
            <button
              onClick={() => onChangeTheme("sepia")}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-sans font-medium flex items-center gap-1 transition-all cursor-pointer ${
                theme === "sepia"
                  ? "bg-amber-700 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Modo Sepia (Fondo cálido, lectura descansada)"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Sepia</span>
            </button>
          </div>

          {/* SINGLE CONTENIDOS BUTTON */}
          <button
            onClick={onOpenContents}
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all cursor-pointer shrink-0 min-h-[36px]"
          >
            <BookOpen className="w-4 h-4 text-indigo-200" />
            <span className="inline">Contenidos</span>
          </button>
        </div>

      </div>
    </header>
  );
};
