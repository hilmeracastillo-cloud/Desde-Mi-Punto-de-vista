import React, { useState } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Printer,
  Copy,
  Check,
  Sparkles,
  Maximize2,
  ArrowLeft
} from 'lucide-react';
import { NotebookInfographicData } from '../data/notebookInfographics';
import { NotebookLMInfographic } from './NotebookLMInfographic';

interface NotebookLMInfographicModalProps {
  data: NotebookInfographicData | null;
  onClose: () => void;
}

export const NotebookLMInfographicModal: React.FC<NotebookLMInfographicModalProps> = ({
  data,
  onClose,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.6));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  const handleCopy = () => {
    const textToCopy = `INFOGRAFÍA VISUAL NOTEBOOKLM: ${data.chapterNumber} — ${data.title}\n${data.subtitle}\n\n${data.diagnosisTitle}:\n${data.diagnosisItems
      .map((d) => `• ${d.metric} ${d.metricLabel}: ${d.description}`)
      .join('\n')}\n\n${data.immediateActionTitle} (${data.immediateActionCallout}):\n${data.immediateActions
      .map((a) => `${a.number}. ${a.title}: ${a.description}`)
      .join('\n')}\n\n${data.pillarsTitle}:\n${data.pillars
      .map((p) => `${p.number}. ${p.title} (${p.subtitle}): ${p.description}`)
      .join('\n')}\n\nPRESUPUESTO E INVERSIÓN REQUERIDA:\n- ${data.budgetData.initialInvestmentLabel}: ${data.budgetData.initialInvestmentAmount}\n- ${data.budgetData.threeYearRecoveryLabel}: ${data.budgetData.threeYearRecoveryAmount}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-7xl h-[95vh] flex flex-col bg-[#0A0E17] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-900/95 z-20">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs">
              NLM
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white leading-none">
                  {data.chapterNumber} • Infografía Visual Oficial
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Estilo NotebookLM Profesional
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-0.5 truncate max-w-md">
                {data.title}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-slate-300">
              <button
                onClick={handleZoomOut}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                title="Reducir zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono text-xs text-slate-400 min-w-[3rem] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                title="Aumentar zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors text-xs font-mono cursor-pointer"
                title="Restablecer zoom al 100%"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copiar texto de la infografía"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden md:inline">{copied ? 'Copiado' : 'Copiar'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Imprimir póster"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all cursor-pointer shadow-md ml-1 hover:scale-[1.02]"
              title="Regresar al punto de donde estaba leyendo"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Regresar a la lectura</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-950/80 hover:text-rose-400 text-slate-400 transition-colors ml-1 cursor-pointer"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Canvas for Infographic */}
        <div className="flex-1 overflow-auto p-3 sm:p-6 md:p-8 bg-[#04070E] flex justify-center items-start">
          <div
            className="transition-transform duration-150 origin-top w-full max-w-6xl"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <NotebookLMInfographic data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
