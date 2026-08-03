import React, { useState } from "react";
import { X, FileText, Download, Printer, CheckCircle2, Loader2, BookOpen, Layers } from "lucide-react";
import { ViewTab } from "../types";
import { generateBookPdf } from "../utils/pdfGenerator";

interface ExportPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeView: ViewTab;
}

export const ExportPdfModal: React.FC<ExportPdfModalProps> = ({
  isOpen,
  onClose,
  activeView,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressStatus, setProgressStatus] = useState("");
  const [progressPercent, setProgressPercent] = useState(0);
  const [completedMessage, setCompletedMessage] = useState("");

  if (!isOpen) return null;

  const getChapterLabel = (view: ViewTab) => {
    switch (view) {
      case "intro":
        return "Presentación e Introducción";
      case "cap1":
        return "Capítulo 1: La arquitectura invisible";
      case "cap2":
        return "Capítulo 2: Cuando el diseño deja de responder al propósito";
      case "cap3":
        return "Capítulo 3: El fracaso de las reformas aisladas";
      case "cap4":
        return "Capítulo 4: Arquitectura del Aprendizaje";
      case "estructura":
        return "Estructura Preliminar de la Obra";
      default:
        return "Capítulo Actual";
    }
  };

  const handleExport = async (scope: "all" | ViewTab) => {
    setIsGenerating(true);
    setCompletedMessage("");
    setProgressPercent(0);

    try {
      await generateBookPdf(scope, (status, percent) => {
        setProgressStatus(status);
        setProgressPercent(percent);
      });
      setCompletedMessage("¡Documento PDF generado y descargado correctamente!");
    } catch (err) {
      console.error("Error al generar PDF:", err);
      setProgressStatus("Ocurrió un error al generar el PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#141414] border border-[#2A2A2A] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative text-slate-100 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#262626] bg-[#181818]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-white">Exportar a PDF</h2>
              <p className="text-xs text-slate-400 font-sans">Guarda el libro en tu dispositivo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#262626] transition-all cursor-pointer"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {isGenerating ? (
            <div className="py-8 space-y-4 text-center">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-base font-bold text-white">{progressStatus}</p>
                <p className="text-xs text-slate-400 font-mono">{progressPercent}% completado</p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#262626] h-2 rounded-full overflow-hidden max-w-xs mx-auto">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          ) : (
            <>
              {completedMessage && (
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-sans flex items-center gap-2.5 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{completedMessage}</span>
                </div>
              )}

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Elige qué contenido deseas exportar en formato PDF de alta calidad listo para lectura o impresión:
              </p>

              <div className="space-y-3">
                {/* Option 1: Full Book */}
                <button
                  onClick={() => handleExport("all")}
                  className="w-full p-4 rounded-xl bg-[#1A1A20] border border-indigo-500/30 hover:border-indigo-500 hover:bg-[#20202C] transition-all text-left group cursor-pointer shadow-md flex items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-serif text-white group-hover:text-indigo-300 transition-colors">
                        Descargar Libro Completo (PDF)
                      </div>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        Portada, Presentación, Capítulos 1 al 4, Notas al pie, Bibliografía y Estructura.
                      </p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-indigo-400 shrink-0 group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* Option 2: Current Chapter */}
                <button
                  onClick={() => handleExport(activeView)}
                  className="w-full p-4 rounded-xl bg-[#181818] border border-[#282828] hover:border-slate-500 hover:bg-[#202020] transition-all text-left group cursor-pointer flex items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-white transition-all shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-serif text-white group-hover:text-indigo-300 transition-colors">
                        Descargar Solo la Sección Actual
                      </div>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {getChapterLabel(activeView)}
                      </p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-slate-400 shrink-0 group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* Option 3: Browser Print Dialog */}
                <button
                  onClick={handlePrint}
                  className="w-full p-3.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-slate-600 hover:bg-[#181818] transition-all text-left cursor-pointer flex items-center justify-between text-xs text-slate-400 hover:text-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Printer className="w-4 h-4 text-slate-400" />
                    <span>Usar la opción de Impresión del Sistema (Guardar como PDF)</span>
                  </div>
                  <span className="font-mono text-[10px] bg-[#222] px-2 py-0.5 rounded text-slate-400">Ctrl+P</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#262626] bg-[#181818] flex items-center justify-end">
          <button
            onClick={onClose}
            disabled={isGenerating}
            className="px-4 py-2 rounded-xl bg-[#222] hover:bg-[#333] text-slate-300 text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
