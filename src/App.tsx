import React, { useState, useEffect } from "react";
import { Header, ReadingTheme } from "./components/Header";
import { TableOfContentsModal } from "./components/TableOfContentsModal";
import { FootnoteModal } from "./components/FootnoteModal";
import { SearchModal } from "./components/SearchModal";
import { IntroView } from "./components/IntroView";
import { Chapter1View } from "./components/Chapter1View";
import { Chapter2View } from "./components/Chapter2View";
import { Chapter3View } from "./components/Chapter3View";
import { StructureView } from "./components/StructureView";
import { ChapterFooterNav } from "./components/ChapterFooterNav";
import { ViewTab, Footnote } from "./types";

export default function App() {
  const [activeView, setActiveView] = useState<ViewTab>("intro");
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [theme, setTheme] = useState<ReadingTheme>(() => {
    return (localStorage.getItem("reading_theme") as ReadingTheme) || "dark";
  });
  const [isContentsOpen, setIsContentsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedFootnote, setSelectedFootnote] = useState<Footnote | null>(null);

  useEffect(() => {
    localStorage.setItem("reading_theme", theme);
  }, [theme]);

  // Font size classes
  const getFontSizeClass = () => {
    switch (fontSizeLevel) {
      case 1:
        return "text-base sm:text-lg";
      case 2:
        return "text-lg sm:text-xl";
      default:
        return "text-sm sm:text-base";
    }
  };

  // Scroll to section when requested
  const handleSelectView = (view: ViewTab, sectionId?: string) => {
    setActiveView(view);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Navigation handlers for next / prev chapter
  const getNextView = (): ViewTab | null => {
    if (activeView === "intro") return "cap1";
    if (activeView === "cap1") return "cap2";
    if (activeView === "cap2") return "cap3";
    if (activeView === "cap3") return "estructura";
    return null;
  };

  const getPrevView = (): ViewTab | null => {
    if (activeView === "cap1") return "intro";
    if (activeView === "cap2") return "cap1";
    if (activeView === "cap3") return "cap2";
    if (activeView === "estructura") return "cap3";
    return null;
  };

  const getNextLabel = (): string => {
    if (activeView === "intro") return "Capítulo 1: La arquitectura invisible";
    if (activeView === "cap1") return "Capítulo 2: Cuando el diseño deja...";
    if (activeView === "cap2") return "Capítulo 3: El fracaso de las reformas aisladas";
    if (activeView === "cap3") return "Estructura general del libro";
    return "Próximo Capítulo";
  };

  const getPrevLabel = (): string => {
    if (activeView === "cap1") return "Presentación e Introducción";
    if (activeView === "cap2") return "Capítulo 1: La arquitectura invisible";
    if (activeView === "cap3") return "Capítulo 2: Cuando el diseño deja...";
    if (activeView === "estructura") return "Capítulo 3: El fracaso de las reformas...";
    return "Capítulo Anterior";
  };

  const handleNavigateNext = () => {
    const next = getNextView();
    if (next) {
      handleSelectView(next);
    }
  };

  const handleNavigatePrev = () => {
    const prev = getPrevView();
    if (prev) {
      handleSelectView(prev);
    }
  };

  return (
    <div className={`min-h-screen theme-${theme} bg-[#0A0A0A] text-[#F8FAFC] font-sans selection:bg-indigo-500/30 selection:text-white transition-all overflow-x-hidden`}>
      
      {/* Header Bar with Theme Switcher & "Contenidos" Button */}
      <Header
        activeView={activeView}
        onOpenContents={() => setIsContentsOpen(true)}
        fontSizeLevel={fontSizeLevel}
        onChangeFontSize={(lvl) => setFontSizeLevel(lvl)}
        theme={theme}
        onChangeTheme={(t) => setTheme(t)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Reading Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {activeView === "intro" && (
          <IntroView
            fontSizeClass={getFontSizeClass()}
            onNavigateNext={handleNavigateNext}
            onOpenContents={() => setIsContentsOpen(true)}
          />
        )}

        {activeView === "cap1" && (
          <Chapter1View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={(fn) => setSelectedFootnote(fn)}
          />
        )}

        {activeView === "cap2" && (
          <Chapter2View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={(fn) => setSelectedFootnote(fn)}
          />
        )}

        {activeView === "cap3" && (
          <Chapter3View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={(fn) => setSelectedFootnote(fn)}
          />
        )}

        {activeView === "estructura" && (
          <StructureView
            onSelectChapter={(v) => handleSelectView(v)}
          />
        )}

        {/* Footer Navigation Bar at the end of each chapter with "Contenidos" and "Próximo Capítulo" */}
        <ChapterFooterNav
          currentView={activeView}
          onOpenContents={() => setIsContentsOpen(true)}
          onNavigateNext={getNextView() ? handleNavigateNext : undefined}
          onNavigatePrev={getPrevView() ? handleNavigatePrev : undefined}
          nextChapterLabel={getNextLabel()}
          prevChapterLabel={getPrevLabel()}
        />

      </main>

      {/* Footer Branding */}
      <footer className="border-t border-[#262626] bg-[#0A0A0A] py-10 text-center text-xs text-slate-500 font-mono space-y-2">
        <p className="font-serif text-sm text-slate-400">
          ARQUITECTURA DEL APRENDIZAJE — Hilmer Castillo Bescanza
        </p>
        <p>Borrador de trabajo para revisión académica • Versión 0.1</p>
      </footer>

      {/* Table of Contents Modal/Drawer */}
      <TableOfContentsModal
        isOpen={isContentsOpen}
        onClose={() => setIsContentsOpen(false)}
        activeView={activeView}
        onSelectView={handleSelectView}
      />

      {/* Footnote Note Detail Modal */}
      <FootnoteModal
        footnote={selectedFootnote}
        onClose={() => setSelectedFootnote(null)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSelectView}
      />

    </div>
  );
}
