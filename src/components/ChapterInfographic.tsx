import React, { useState } from 'react';
import {
  Sparkles,
  Maximize2,
  Printer,
  Copy,
  Check,
  ArrowRight,
  ShieldAlert,
  Clock,
  Layers,
  Boxes,
  Split,
  Cpu,
  EyeOff,
  Zap,
  ShieldCheck,
  Timer,
  Compass,
  Scissors,
  HeartHandshake,
  Network,
  RotateCcw,
  Users,
  FileCode,
  ScanEye,
  MapPin,
  ClipboardCheck,
  BookOpen,
  Quote,
  CheckCircle2,
  Workflow,
  Scale,
  Brain,
  GraduationCap,
  Target,
  ArrowLeft
} from 'lucide-react';
import { ChapterInfographicData } from '../data/infographics';

interface ChapterInfographicProps {
  data: ChapterInfographicData;
  onOpenModal?: (data: ChapterInfographicData) => void;
  onReturnToReading?: () => void;
}

const renderIcon = (name: string, className: string = 'w-5 h-5') => {
  switch (name) {
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Boxes':
      return <Boxes className={className} />;
    case 'Split':
      return <Split className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'EyeOff':
      return <EyeOff className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Timer':
      return <Timer className={className} />;
    case 'Maximize2':
      return <Maximize2 className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Scissors':
      return <Scissors className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Network':
      return <Network className={className} />;
    case 'RotateCcw':
      return <RotateCcw className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'FileCode':
      return <FileCode className={className} />;
    case 'ScanEye':
      return <ScanEye className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'ClipboardCheck':
      return <ClipboardCheck className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Workflow':
      return <Workflow className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Target':
      return <Target className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export const ChapterInfographic: React.FC<ChapterInfographicProps> = ({
  data,
  onOpenModal,
  onReturnToReading,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const textToCopy = `SÍNTESIS DE CONCEPTOS: ${data.chapterNumber} — ${data.title}\n${data.subtitle}\n\nTESIS CENTRAL:\n${data.coreThesis.headline}\n${data.coreThesis.summary}\n\nPILARES CLAVE:\n${data.pillars.map((p) => `• ${p.title}: ${p.points.join(' ')}`).join('\n')}\n\nLEYES DE DISEÑO:\n${data.designLaws.map((l) => `- ${l}`).join('\n')}\n\n"${data.authorQuote.text}" — ${data.authorQuote.author}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id={`sintesis-conceptos-${data.chapterId}`}
      className="my-14 scroll-mt-24"
    >
      {/* Fallback anchor for existing links */}
      <span id={`infografia-${data.chapterId}`} className="sr-only"></span>

      {/* Container Bar: Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono font-medium text-slate-300 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>SÍNTESIS DE CONCEPTOS</span>
            <span className="text-slate-500">•</span>
            <span className="text-indigo-400 font-semibold">ESQUEMA ANALÍTICO</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
            Diagrama Estructurado de Ideas
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onReturnToReading && (
            <button
              onClick={onReturnToReading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
              title="Regresar al punto de donde estaba leyendo"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Regresar a donde estaba</span>
            </button>
          )}

          <button
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-mono transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
            title="Copiar texto de síntesis ejecutiva"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copiar</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-mono transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
            title="Imprimir o guardar como PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
          </button>

          {onOpenModal && (
            <button
              onClick={() => onOpenModal(data)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/50 hover:bg-indigo-600 hover:border-indigo-400 text-indigo-200 hover:text-white text-xs font-mono font-medium transition-all shadow-md cursor-pointer hover:scale-[1.02]"
              title="Ver en pantalla completa con zoom"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Pantalla Completa</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Infographic Poster Container: NotebookLM Professional Portrait Canvas */}
      <div
        className={`relative mx-auto max-w-4xl bg-[#090D16] border ${data.accentColor.border} rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden print:p-6 print:border-black print:bg-white print:text-black`}
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(99, 102, 241, 0.15)',
        }}
      >
        {/* Subtle Background Glow Accent */}
        <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br ${data.accentColor.glow} blur-3xl pointer-events-none`} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-900/10 to-transparent blur-3xl pointer-events-none" />

        {/* Poster Header */}
        <header className="relative z-10 border-b border-slate-800/80 pb-6 mb-8 print:border-slate-300">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md font-mono text-xs font-bold tracking-widest ${data.accentColor.badge}`}>
                {data.chapterNumber}
              </span>
              <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                {data.pages}
              </span>
            </div>

            <div className="text-[11px] font-mono tracking-wider uppercase text-slate-500 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              SÍNTESIS CONCEPTUAL • ESQUEMA ANALÍTICO
            </div>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight print:text-black">
            {data.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-sans mt-2 max-w-2xl print:text-slate-700">
            {data.subtitle}
          </p>
        </header>

        {/* Section 1: Core Thesis (Executive Highlight) */}
        <div className="relative z-10 mb-8">
          <div className={`rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${data.accentColor.gradient} border ${data.accentColor.border} backdrop-blur-sm print:bg-slate-100 print:text-black`}>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-indigo-300 print:text-indigo-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Tesis Central del Capítulo
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug mb-3 print:text-black">
              "{data.coreThesis.headline}"
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed font-sans print:text-slate-800">
              {data.coreThesis.summary}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-start gap-2.5 text-xs font-sans text-indigo-200/90 print:text-slate-700 print:border-slate-300">
              <span className="font-mono font-bold text-indigo-400 shrink-0">DIAGNÓSTICO:</span>
              <span>{data.coreThesis.keyFact}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Three Pillars of Architecture (Vertical Bento Grid) */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center justify-between gap-2 mb-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 print:text-slate-700">
              <Layers className="w-4 h-4 text-indigo-400" />
              Ejes Estructurales y Mecanismos Críticos
            </h4>
            <span className="text-[11px] font-mono text-slate-500">3 Vectores de Análisis</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-xl p-4 sm:p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between print:bg-white print:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-center text-indigo-400 print:bg-slate-100 print:text-black">
                      {renderIcon(pillar.iconName, 'w-4 h-4')}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 print:bg-slate-200 print:text-black">
                      {pillar.badge}
                    </span>
                  </div>

                  <h5 className="text-base font-serif font-bold text-white mb-2.5 print:text-black">
                    {pillar.title}
                  </h5>

                  <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed print:text-slate-700">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Paradigm Shift Matrix (Two Columns) */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center justify-between gap-2 mb-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 print:text-slate-700">
              <Scale className="w-4 h-4 text-indigo-400" />
              Matriz de Transformación de Paradigmas
            </h4>
            <span className="text-[11px] font-mono text-slate-500">Transición Requerida</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left Column: Traditional Model */}
            <div className="rounded-xl p-5 bg-rose-950/20 border border-rose-900/40 print:bg-rose-50 print:border-rose-300">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-rose-300 print:text-rose-800">
                  {data.paradigmShift.leftTitle}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-800/60 print:bg-rose-200 print:text-rose-900">
                  {data.paradigmShift.leftBadge}
                </span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans print:text-slate-800">
                {data.paradigmShift.leftItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Architectural Design Model */}
            <div className="rounded-xl p-5 bg-emerald-950/20 border border-emerald-900/40 print:bg-emerald-50 print:border-emerald-300">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-emerald-300 print:text-emerald-800">
                  {data.paradigmShift.rightTitle}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 print:bg-emerald-200 print:text-emerald-900">
                  {data.paradigmShift.rightBadge}
                </span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans print:text-slate-800">
                {data.paradigmShift.rightItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 print:text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Systemic Mechanism Flow */}
        <div className="relative z-10 mb-8 rounded-2xl p-5 sm:p-6 bg-slate-900/90 border border-slate-800 print:bg-slate-50 print:border-slate-300">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-indigo-400" />
              <h4 className="text-sm font-serif font-bold text-white print:text-black">
                {data.systemicMechanism.title}
              </h4>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Ciclo Sistémico
            </span>
          </div>
          <p className="text-xs text-slate-400 font-sans mb-4 print:text-slate-600">
            {data.systemicMechanism.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
            {data.systemicMechanism.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-lg p-3 bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between print:bg-white print:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-500/50 text-indigo-300 font-mono text-[10px] font-bold flex items-center justify-center print:bg-slate-200 print:text-black">
                      {step.step}
                    </span>
                    {idx < data.systemicMechanism.steps.length - 1 && (
                      <ArrowRight className="hidden sm:inline w-3 h-3 text-slate-600" />
                    )}
                  </div>
                  <h6 className="text-xs font-bold text-slate-200 font-serif mb-1 print:text-black">
                    {step.label}
                  </h6>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed print:text-slate-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-sans text-indigo-300 flex items-start gap-2 print:border-slate-300 print:text-slate-800">
            <span className="font-mono font-bold text-indigo-400 shrink-0">LEY CLAVE:</span>
            <span>{data.systemicMechanism.insight}</span>
          </div>
        </div>

        {/* Section 5: Design Laws */}
        <div className="relative z-10 mb-8 rounded-xl p-5 bg-slate-950/80 border border-slate-800/80 print:bg-white print:border-slate-300">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2 print:text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            Leyes de Diseño para la Práctica
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {data.designLaws.map((law, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 text-xs text-slate-300 font-sans flex items-start gap-2.5 print:bg-slate-50 print:text-slate-800 print:border-slate-200"
              >
                <span className="font-mono text-indigo-400 font-bold shrink-0">{idx + 1}.</span>
                <span>{law}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Author Quote Footer */}
        <footer className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs print:border-slate-300">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-9 h-9 rounded-full bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center shrink-0 text-indigo-300">
              <Quote className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif italic text-slate-300 text-xs leading-relaxed max-w-xl print:text-slate-800">
                "{data.authorQuote.text}"
              </p>
              <p className="font-mono text-[10px] text-slate-500 mt-0.5 print:text-slate-600">
                — {data.authorQuote.author}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-400 print:hidden">
              PORTRAIT INFOGRAPHIC
            </span>
          </div>
        </footer>

        {onReturnToReading && (
          <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-end">
            <button
              onClick={onReturnToReading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Regresar a donde estaba leyendo</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
