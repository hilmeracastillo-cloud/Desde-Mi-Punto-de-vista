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
import { ChapterInfographicData } from '../data/infographics';
import { ChapterInfographic } from './ChapterInfographic';

interface InfographicModalProps {
  data: ChapterInfographicData | null;
  onClose: () => void;
}

export const InfographicModal: React.FC<InfographicModalProps> = ({
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
    const textToCopy = `SÍNTESIS DE CONCEPTOS: ${data.chapterNumber} — ${data.title}\n${data.subtitle}\n\nTESIS CENTRAL:\n${data.coreThesis.headline}\n${data.coreThesis.summary}\n\nPILARES CLAVE:\n${data.pillars.map((p) => `• ${p.title}: ${p.points.join(' ')}`).join('\n')}\n\nLEYES DE DISEÑO:\n${data.designLaws.map((l) => `- ${l}`).join('\n')}\n\n"${data.authorQuote.text}" — ${data.authorQuote.author}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[94vh] flex flex-col bg-[#080C14] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-900/95 z-20">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-none">
                  {data.chapterNumber} • Síntesis de Conceptos
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                  Esquema Analítico Estructurado
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-0.5 truncate max-w-md">
                {data.title}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden sm:flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-slate-300">
              <button
                onClick={handleZoomOut}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="Reducir zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono text-xs text-slate-400 min-w-[3rem] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="Aumentar zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded transition-colors text-xs font-mono"
                title="Restablecer zoom al 100%"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
              title="Copiar texto de síntesis"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden md:inline">{copied ? "Copiado" : "Copiar"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
              title="Imprimir póster"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold transition-all cursor-pointer shadow-md ml-1 hover:scale-[1.02]"
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
        <div className="flex-1 overflow-auto p-4 sm:p-8 bg-[#04070E] flex justify-center items-start">
          <div
            className="transition-transform duration-150 origin-top w-full max-w-4xl"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <ChapterInfographic data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
