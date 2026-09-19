import React, { useState, useEffect } from "react";
import { Header, ReadingTheme } from "./components/Header";
import { TableOfContentsModal } from "./components/TableOfContentsModal";
import { FootnoteModal } from "./components/FootnoteModal";
import { SearchModal } from "./components/SearchModal";
import { ExportPdfModal } from "./components/ExportPdfModal";
import { IntroView } from "./components/IntroView";
import { Chapter1View } from "./components/Chapter1View";
import { Chapter2View } from "./components/Chapter2View";
import { Chapter3View } from "./components/Chapter3View";
import { Chapter4View } from "./components/Chapter4View";
import { Chapter5View } from "./components/Chapter5View";
import { Chapter6View } from "./components/Chapter6View";
import { Chapter7View } from "./components/Chapter7View";
import { Chapter8View } from "./components/Chapter8View";
import { StructureView } from "./components/StructureView";
import { ChapterFooterNav } from "./components/ChapterFooterNav";
import { InfographicModal } from "./components/InfographicModal";
import { NotebookLMInfographicModal } from "./components/NotebookLMInfographicModal";
import { ChapterInfographicData } from "./data/infographics";
import { NotebookInfographicData } from "./data/notebookInfographics";
import { ViewTab, Footnote } from "./types";

export default function App() {
  const [activeView, setActiveView] = useState<ViewTab>("intro");
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [theme, setTheme] = useState<ReadingTheme>(() => {
    return (localStorage.getItem("reading_theme") as ReadingTheme) || "dark";
  });
  const [isContentsOpen, setIsContentsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isPdfOpen, setIsPdfOpen] = useState<boolean>(false);
  const [selectedFootnote, setSelectedFootnote] = useState<Footnote | null>(null);
  const [returnCitationId, setReturnCitationId] = useState<string | null>(null);
  const [selectedInfographic, setSelectedInfographic] = useState<ChapterInfographicData | null>(null);
  const [selectedNotebookInfographic, setSelectedNotebookInfographic] = useState<NotebookInfographicData | null>(null);
  const [targetSectionId, setTargetSectionId] = useState<string | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem("reading_theme", theme);
  }, [theme]);

  const handleSelectFootnote = (fn: Footnote, citationId?: string) => {
    setSelectedFootnote(fn);
    setReturnCitationId(citationId || null);
  };

  const handleNavigateToNoteSection = (footnoteId: number) => {
    setSelectedFootnote(null);
    setTimeout(() => {
      const el = document.getElementById(`nota-${footnoteId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-4", "ring-indigo-400", "ring-offset-2", "ring-offset-black");
        setTimeout(() => {
          el.classList.remove("ring-4", "ring-indigo-400", "ring-offset-2", "ring-offset-black");
        }, 2500);
      }
    }, 100);
  };

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
    setTargetSectionId(sectionId);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Navigation handlers for next / prev chapter
  const getNextView = (): ViewTab | null => {
    if (activeView === "intro") return "cap1";
    if (activeView === "cap1") return "cap2";
    if (activeView === "cap2") return "cap3";
    if (activeView === "cap3") return "cap4";
    if (activeView === "cap4") return "cap5";
    if (activeView === "cap5") return "cap6";
    if (activeView === "cap6") return "cap7";
    if (activeView === "cap7") return "cap8";
    if (activeView === "cap8") return "estructura";
    return null;
  };

  const getPrevView = (): ViewTab | null => {
    if (activeView === "cap1") return "intro";
    if (activeView === "cap2") return "cap1";
    if (activeView === "cap3") return "cap2";
    if (activeView === "cap4") return "cap3";
    if (activeView === "cap5") return "cap4";
    if (activeView === "cap6") return "cap5";
    if (activeView === "cap7") return "cap6";
    if (activeView === "cap8") return "cap7";
    if (activeView === "estructura") return "cap8";
    return null;
  };

  const getNextLabel = (): string => {
    if (activeView === "intro") return "Capítulo 1: La arquitectura invisible";
    if (activeView === "cap1") return "Capítulo 2: La crisis del paradigma industrial";
    if (activeView === "cap2") return "Capítulo 3: El fracaso de las reformas aisladas";
    if (activeView === "cap3") return "Capítulo 4: La anatomía del núcleo instruccional";
    if (activeView === "cap4") return "Capítulo 5: Las cinco dimensiones de la Arquitectura del Aprendizaje";
    if (activeView === "cap5") return "Capítulo 6: Patrones de diseño institucional";
    if (activeView === "cap6") return "Capítulo 7: La Matriz de Diagnóstico y los niveles de madurez";
    if (activeView === "cap7") return "Capítulo 8: La Arquitectura del Aprendizaje en la era de la Inteligencia Artificial";
    if (activeView === "cap8") return "Estructura general del libro";
    return "Próximo Capítulo";
  };

  const getPrevLabel = (): string => {
    if (activeView === "cap1") return "Presentación e Introducción";
    if (activeView === "cap2") return "Capítulo 1: La arquitectura invisible";
    if (activeView === "cap3") return "Capítulo 2: La crisis del paradigma industrial";
    if (activeView === "cap4") return "Capítulo 3: El fracaso de las reformas aisladas";
    if (activeView === "cap5") return "Capítulo 4: La anatomía del núcleo instruccional";
    if (activeView === "cap6") return "Capítulo 5: Las cinco dimensiones de la Arquitectura del Aprendizaje";
    if (activeView === "cap7") return "Capítulo 6: Patrones de diseño institucional";
    if (activeView === "cap8") return "Capítulo 7: La Matriz de Diagnóstico y los niveles de madurez";
    if (activeView === "estructura") return "Capítulo 8: La Arquitectura del Aprendizaje en la era de la Inteligencia Artificial";
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
        onOpenPdf={() => setIsPdfOpen(true)}
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
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
          />
        )}

        {activeView === "cap2" && (
          <Chapter2View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
          />
        )}

        {activeView === "cap3" && (
          <Chapter3View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
          />
        )}

        {activeView === "cap4" && (
          <Chapter4View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
          />
        )}

        {activeView === "cap5" && (
          <Chapter5View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
          />
        )}

        {activeView === "cap6" && (
          <Chapter6View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
          />
        )}

        {activeView === "cap7" && (
          <Chapter7View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
          />
        )}

        {activeView === "cap8" && (
          <Chapter8View
            fontSizeClass={getFontSizeClass()}
            onSelectFootnote={handleSelectFootnote}
            onOpenInfographicModal={(data) => setSelectedInfographic(data)}
            onOpenNotebookInfographicModal={(data) => setSelectedNotebookInfographic(data)}
            targetSectionId={targetSectionId}
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
        returnCitationId={returnCitationId}
        onNavigateToNoteSection={handleNavigateToNoteSection}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSelectView}
      />

      {/* PDF Export Modal */}
      <ExportPdfModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
        activeView={activeView}
      />

      {/* Fullscreen Interactive Visual Infographic Modal (NotebookLM Style) */}
      <NotebookLMInfographicModal
        data={selectedNotebookInfographic}
        onClose={() => setSelectedNotebookInfographic(null)}
      />

      {/* Fullscreen Interactive Concept Synthesis Modal */}
      <InfographicModal
        data={selectedInfographic}
        onClose={() => setSelectedInfographic(null)}
      />

    </div>
  );
}
