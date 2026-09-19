import React from 'react';
import { Image as ImageIcon, Layers, ArrowLeft, X, Sparkles } from 'lucide-react';
import { NotebookInfographicData } from '../data/notebookInfographics';
import { ChapterInfographicData } from '../data/infographics';
import { NotebookLMInfographic } from './NotebookLMInfographic';
import { ChapterInfographic } from './ChapterInfographic';

interface ChapterVisualSectionProps {
  chapterId: string;
  chapterNumber: string;
  notebookData?: NotebookInfographicData;
  synthesisData?: ChapterInfographicData;
  activeTab: 'notebook' | 'synthesis' | null;
  onTabChange: (tab: 'notebook' | 'synthesis' | null) => void;
  onReturnToReading: () => void;
  onOpenNotebookModal?: (data: NotebookInfographicData) => void;
  onOpenSynthesisModal?: (data: ChapterInfographicData) => void;
}

export const ChapterVisualSection: React.FC<ChapterVisualSectionProps> = ({
  chapterId,
  chapterNumber,
  notebookData,
  synthesisData,
  activeTab,
  onTabChange,
  onReturnToReading,
  onOpenNotebookModal,
  onOpenSynthesisModal,
}) => {
  // If neither data is available, do not render
  if (!notebookData && !synthesisData) {
    return null;
  }

  // If activeTab is null (collapsed state), show an invitation banner
  if (activeTab === null) {
    return (
      <section
        id={`recursos-visuales-${chapterId}`}
        className="my-10 p-6 rounded-2xl bg-[#141414] border border-[#282828] text-center space-y-4 shadow-xl scroll-mt-24"
      >
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>SÍNTESIS VISUAL Y CONCEPTUAL DEL {chapterNumber.toUpperCase()}</span>
        </div>
        <p className="text-sm text-slate-300 max-w-lg mx-auto font-sans">
          Explora los mapas visuales de alta fidelidad o los esquemas analíticos de tesis y pilares.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {notebookData && (
            <button
              onClick={() => onTabChange('notebook')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Ver Infografía Visual (NotebookLM)</span>
            </button>
          )}
          {synthesisData && (
            <button
              onClick={() => onTabChange('synthesis')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Ver Síntesis de Conceptos</span>
            </button>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      id={activeTab === 'notebook' ? `infografia-visual-${chapterId}` : `sintesis-conceptos-${chapterId}`}
      className="my-10 scroll-mt-24"
    >
      {/* Fallback hidden anchors for scroll targets */}
      <span id={`infografia-visual-${chapterId}`} className="sr-only" />
      <span id={`sintesis-conceptos-${chapterId}`} className="sr-only" />
      <span id={`recursos-visuales-${chapterId}`} className="sr-only" />

      {/* Top Controls Bar: Tabs + Prominent Return Button */}
      <div className="sticky top-16 z-30 mb-6 p-2 sm:p-2.5 rounded-2xl bg-[#0F141F]/95 backdrop-blur-md border border-slate-700/80 shadow-2xl flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Resource Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-[#080C14] p-1 rounded-xl border border-slate-800">
          {notebookData && (
            <button
              onClick={() => onTabChange('notebook')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'notebook'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Infografía Visual</span>
            </button>
          )}

          {synthesisData && (
            <button
              onClick={() => onTabChange('synthesis')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'synthesis'
                  ? 'bg-indigo-600 text-white shadow-md scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Síntesis de Conceptos</span>
            </button>
          )}
        </div>

        {/* Return & Close Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onReturnToReading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all shadow-lg shadow-emerald-950/40 cursor-pointer hover:scale-[1.03]"
            title="Regresar al punto exacto donde estabas leyendo en el texto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Regresar a donde estaba</span>
          </button>

          <button
            onClick={() => onTabChange(null)}
            className="p-2 rounded-xl text-slate-400 hover:text-rose-300 hover:bg-rose-950/40 border border-transparent hover:border-rose-800/40 transition-colors cursor-pointer"
            title="Ocultar sección visual"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RENDER STRICTLY ONE AT A TIME: NEVER SEQUENTIALLY */}
      {activeTab === 'notebook' && notebookData && (
        <div className="animate-in fade-in duration-200">
          <NotebookLMInfographic
            data={notebookData}
            onOpenModal={onOpenNotebookModal}
            onReturnToReading={onReturnToReading}
          />
        </div>
      )}

      {activeTab === 'synthesis' && synthesisData && (
        <div className="animate-in fade-in duration-200">
          <ChapterInfographic
            data={synthesisData}
            onOpenModal={onOpenSynthesisModal}
            onReturnToReading={onReturnToReading}
          />
        </div>
      )}
    </section>
  );
};
