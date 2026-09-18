import React, { useState } from 'react';
import {
  NotebookInfographicData,
  InfographicDiagnosisItem,
  InfographicImmediateAction,
  InfographicPillarStep,
} from '../data/notebookInfographics';
import { IsometricCubesSvg } from './IsometricCubesSvg';
import {
  TrendingDown,
  Link2Off,
  AlertTriangle,
  DollarSign,
  Zap,
  Factory,
  Truck,
  Wheat,
  Landmark,
  Scale,
  GraduationCap,
  Utensils,
  Shield,
  Flame,
  Sun,
  Globe,
  Coins,
  FileSpreadsheet,
  Maximize2,
  Printer,
  Copy,
  Check,
  Sparkles,
  BarChart3,
  Layers,
  Clock,
  Eye,
  Users,
  Scissors,
  RotateCcw,
  Brain,
  Compass,
  BookOpen
} from 'lucide-react';

interface NotebookLMInfographicProps {
  data: NotebookInfographicData;
  onOpenModal?: (data: NotebookInfographicData) => void;
}

export const NotebookLMInfographic: React.FC<NotebookLMInfographicProps> = ({
  data,
  onOpenModal,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `INFOGRAFÍA VISUAL NOTEBOOKLM: ${data.chapterNumber} — ${data.title}\n${data.subtitle}\n\n${data.diagnosisTitle}:\n${data.diagnosisItems
      .map((d) => `• ${d.metric} ${d.metricLabel}: ${d.description}`)
      .join('\n')}\n\n${data.immediateActionTitle} (${data.immediateActionCallout}):\n${data.immediateActions
      .map((a) => `${a.number}. ${a.title}: ${a.description}`)
      .join('\n')}\n\n${data.pillarsTitle}:\n${data.pillars
      .map((p) => `${p.number}. ${p.title} (${p.subtitle}): ${p.description}`)
      .join('\n')}\n\nPRESUPUESTO E INVERSIÓN REQUERIDA:\n- ${data.budgetData.initialInvestmentLabel}: ${data.budgetData.initialInvestmentAmount} (${data.budgetData.initialInvestmentSubtitle})\n- ${data.budgetData.threeYearRecoveryLabel}: ${data.budgetData.threeYearRecoveryAmount} (${data.budgetData.threeYearRecoverySubtitle})\n\nMETAS OPERATIVAS:\n${data.budgetData.tableRows
      .map((r) => `• ${r[0]} | Meta 100d: ${r[1]} | 3 Años: ${r[2]}`)
      .join('\n')}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper for rendering diagnosis icons
  const renderDiagnosisIcon = (name: InfographicDiagnosisItem['iconName']) => {
    switch (name) {
      case 'clock':
        return <Clock className="w-6 h-6 text-slate-900" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-slate-900" />;
      case 'eye':
        return <Eye className="w-6 h-6 text-slate-900" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-slate-900" />;
      case 'users':
        return <Users className="w-6 h-6 text-slate-900" />;
      case 'compass':
        return <Compass className="w-6 h-6 text-slate-900" />;
      case 'chain':
        return <Link2Off className="w-6 h-6 text-slate-900" />;
      case 'trending-down':
        return <TrendingDown className="w-6 h-6 text-slate-900" />;
      case 'alert':
        return <AlertTriangle className="w-6 h-6 text-slate-900" />;
      case 'dollar':
        return <DollarSign className="w-6 h-6 text-slate-900" />;
      case 'power':
        return <Zap className="w-6 h-6 text-slate-900" />;
      case 'factory':
        return <Factory className="w-6 h-6 text-slate-900" />;
      case 'truck':
        return <Truck className="w-6 h-6 text-slate-900" />;
      case 'grain':
        return <Wheat className="w-6 h-6 text-slate-900" />;
      case 'bank':
        return <Landmark className="w-6 h-6 text-slate-900" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-slate-900" />;
      case 'ship':
        return <Globe className="w-6 h-6 text-slate-900" />;
      case 'graduation':
        return <GraduationCap className="w-6 h-6 text-slate-900" />;
      case 'bar-chart':
        return <BarChart3 className="w-6 h-6 text-slate-900" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-slate-900" />;
    }
  };

  // Helper for immediate action icons
  const renderActionIcon = (name: InfographicImmediateAction['iconName']) => {
    switch (name) {
      case 'clock':
        return <Clock className="w-5 h-5 text-amber-600" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-slate-800" />;
      case 'scissors':
        return <Scissors className="w-5 h-5 text-rose-600" />;
      case 'rotate-ccw':
        return <RotateCcw className="w-5 h-5 text-indigo-600" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-purple-600" />;
      case 'users':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'eye':
        return <Eye className="w-5 h-5 text-amber-600" />;
      case 'book-open':
      case 'school':
      case 'book-ai':
        return <GraduationCap className="w-5 h-5 text-slate-800" />;
      case 'hand-money':
      case 'coins':
        return <Coins className="w-5 h-5 text-amber-600" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-slate-800" />;
      case 'law':
        return <Scale className="w-5 h-5 text-slate-800" />;
      case 'drill':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-slate-800" />;
      case 'plug':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'tractor':
        return <Wheat className="w-5 h-5 text-emerald-700" />;
      case 'ship':
        return <Globe className="w-5 h-5 text-blue-700" />;
      case 'handshake':
      case 'bank':
        return <Landmark className="w-5 h-5 text-slate-800" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-slate-800" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-800" />;
    }
  };

  // Helper for pillar step icons
  const renderPillarIcon = (name: InfographicPillarStep['iconName']) => {
    switch (name) {
      case 'clock':
        return <Clock className="w-6 h-6 text-amber-600" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-purple-600" />;
      case 'users':
        return <Users className="w-6 h-6 text-emerald-600" />;
      case 'compass':
        return <Compass className="w-6 h-6 text-cyan-600" />;
      case 'eye':
        return <Eye className="w-6 h-6 text-amber-600" />;
      case 'scissors':
        return <Scissors className="w-6 h-6 text-rose-600" />;
      case 'rotate-ccw':
        return <RotateCcw className="w-6 h-6 text-indigo-600" />;
      case 'scale':
      case 'law':
        return <Scale className="w-6 h-6 text-amber-600" />;
      case 'bar-chart':
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case 'heart-utensils':
        return <Utensils className="w-6 h-6 text-rose-600" />;
      case 'graduation':
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'voucher':
      case 'coins':
        return <Coins className="w-6 h-6 text-amber-600" />;
      case 'factory':
        return <Factory className="w-6 h-6 text-slate-700" />;
      case 'flame':
        return <Flame className="w-6 h-6 text-orange-600" />;
      case 'sun':
        return <Sun className="w-6 h-6 text-amber-500" />;
      case 'wheat':
        return <Wheat className="w-6 h-6 text-emerald-600" />;
      case 'globe':
      case 'ship':
        return <Globe className="w-6 h-6 text-cyan-600" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-indigo-600" />;
      case 'power':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'truck':
        return <Truck className="w-6 h-6 text-slate-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-slate-800" />;
    }
  };

  return (
    <div
      id={`infografia-visual-${data.id}`}
      className="my-10 rounded-2xl bg-[#F8FAFC] border-2 border-slate-300/80 shadow-2xl overflow-hidden font-sans text-slate-900 scroll-mt-24"
    >
      {/* Top Utility Bar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3 bg-slate-900 text-slate-100 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs">
            NLM
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
                Infografía Oficial • Estilo NotebookLM
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono hidden sm:inline-block">
                {data.chapterNumber}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Resumen visual con datos, diagramas, pilares y proyección financiera
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors cursor-pointer"
            title="Copiar contenido de la infografía"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{copied ? 'Copiado' : 'Copiar'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors cursor-pointer"
            title="Imprimir o guardar en PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Imprimir / PDF</span>
          </button>

          {onOpenModal && (
            <button
              onClick={() => onOpenModal(data)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all cursor-pointer shadow-sm"
              title="Expandir a pantalla completa con zoom"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Pantalla Completa</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Infographic Canvas (NotebookLM Editorial Poster Layout) */}
      <div className="p-5 sm:p-8 md:p-10 bg-white relative overflow-hidden">
        {/* Header Section */}
        <div className="relative pb-6 mb-8 border-b-2 border-slate-900">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-3xl z-10">
              <div className="inline-block mb-1 text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">
                {data.chapterNumber} • PLAN DE RECONSTRUCCIÓN NACIONAL
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 uppercase leading-none font-sans">
                {data.title}
              </h2>
              <p className="mt-2 text-base sm:text-xl font-medium text-slate-700 tracking-tight">
                {data.subtitle}
              </p>
              <div className="mt-2 text-xs font-mono text-slate-500">
                {data.tagline}
              </div>
            </div>

            {/* Floating 3D Isometric Faceted Cubes Decoration (NotebookLM Hallmark) */}
            <div className="w-48 sm:w-64 h-32 sm:h-40 self-end lg:self-start opacity-95 flex-shrink-0">
              <IsometricCubesSvg />
            </div>
          </div>
        </div>

        {/* 3-Column Core Grid Layout (Directly matching NotebookLM Infographic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN 1: EL DIAGNÓSTICO DEL COLAPSO (Width 3.5 / 12) */}
          <div className="lg:col-span-3 border-r-0 lg:border-r border-slate-300 lg:pr-6 space-y-6">
            <div className="border-b-2 border-slate-900 pb-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-950 font-sans">
                {data.diagnosisTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {data.diagnosisItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={`space-y-1.5 ${
                    idx !== data.diagnosisItems.length - 1 ? 'border-b border-slate-200 pb-5' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center flex-shrink-0">
                      {renderDiagnosisIcon(item.iconName)}
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-slate-950 leading-tight">
                        {item.metric}
                      </div>
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">
                        {item.metricLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: ACCIÓN INMEDIATA 100 DÍAS + 4 PILARES (Width 5.5 / 12) */}
          <div className="lg:col-span-5 border-r-0 lg:border-r border-slate-300 lg:pr-6 space-y-8">
            {/* Top: Acción Inmediata: Los Primeros 100 Días */}
            <div>
              <div className="border-b-2 border-slate-900 pb-2 mb-4 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-950 font-sans">
                  {data.immediateActionTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                {/* Massive typographic callout */}
                <div className="sm:col-span-4 bg-slate-950 text-white rounded-xl p-4 text-center flex flex-col justify-center items-center shadow-md">
                  <span className="text-3xl sm:text-4xl font-black tracking-tighter leading-none text-amber-400">
                    {data.immediateActionCalloutNumber || '100'}
                  </span>
                  <span className="text-sm font-black tracking-wider uppercase text-white mt-1">
                    {data.immediateActionCalloutUnit || 'DÍAS'}
                  </span>
                  <span className="text-[10px] text-slate-300 font-mono mt-1">
                    {data.immediateActionCalloutLabel || 'PLAN DE ACCIÓN'}
                  </span>
                </div>

                {/* 4 immediate action items in 2x2 grid */}
                <div className="sm:col-span-8 grid grid-cols-1 gap-3">
                  {data.immediateActions.map((action) => (
                    <div
                      key={action.number}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-400 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                        {renderActionIcon(action.iconName)}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-black text-slate-950 tracking-tight uppercase">
                          {action.number}. {action.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Los 4 Pilares de la Transformación */}
            <div className="pt-2">
              <div className="border-b-2 border-slate-900 pb-2 mb-4">
                <h3 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-950 font-sans">
                  {data.pillarsTitle}
                </h3>
              </div>

              {/* 4 Pillars with visual stepped cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="p-3.5 bg-slate-100/80 border border-slate-300 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-2xs"
                  >
                    {/* Top isometric badge */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-300 flex items-center justify-center shadow-xs">
                        {renderPillarIcon(pillar.iconName)}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-amber-400">
                        PILAR {pillar.number}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-slate-950 uppercase tracking-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wide mb-1">
                        {pillar.subtitle}
                      </p>
                      <p className="text-[11px] text-slate-600 leading-tight">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom subtle accent line */}
                    <div className="mt-2.5 h-1 w-full bg-slate-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-800"
                        style={{ width: `${pillar.number * 25}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: CONDICIONES E IMPACTO (Width 4 / 12) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border-b-2 border-slate-900 pb-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight uppercase text-slate-950 font-sans">
                {data.analyticsSectionTitle || 'CONDICIONES E IMPACTO DEL SISTEMA'}
              </h3>
            </div>

            {/* Financial Metrics with Donut & Bar Charts (Exact match to sample image) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Box 1: Inversión Inicial (100 Días) + Bar Chart */}
              <div className="p-4 bg-slate-50 border border-slate-300 rounded-xl flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase text-slate-600">
                    {data.budgetData.initialInvestmentLabel}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    {data.budgetData.initialInvestmentAmount}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {data.budgetData.initialInvestmentSubtitle}
                  </div>
                </div>

                {/* Mini SVG Bar Chart */}
                <div className="flex items-end gap-1.5 h-16 w-20 flex-shrink-0 pt-2 border-b border-slate-300">
                  {data.budgetData.initialChartBars.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        className="w-full bg-slate-800 rounded-t-sm transition-all"
                        style={{ height: `${bar.heightPercent}%` }}
                      />
                      <span className="text-[8px] font-mono text-slate-400 truncate w-full text-center">
                        {bar.label.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 2: Recuperación a 3 Años + Donut Chart */}
              <div className="p-4 bg-slate-50 border border-slate-300 rounded-xl flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase text-slate-600">
                    {data.budgetData.threeYearRecoveryLabel}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-700 tracking-tight">
                    {data.budgetData.threeYearRecoveryAmount}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {data.budgetData.threeYearRecoverySubtitle}
                  </div>
                </div>

                {/* SVG Donut Chart */}
                <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-200"
                      strokeWidth="4.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-slate-900"
                      strokeDasharray={`${data.budgetData.donutChartPercent}, 100`}
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[11px] font-mono font-bold text-slate-900">
                    {data.budgetData.donutChartPercent}%
                  </span>
                </div>
              </div>
            </div>

            {/* Data Comparison Table (Exact match to the bottom right of the reference image) */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-black text-slate-800 uppercase tracking-tight">
                {data.budgetData.tableTitle}
              </div>

              <div className="overflow-x-auto rounded-lg border border-slate-300">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-mono text-[10px] uppercase">
                      <th className="py-2 px-2.5 font-semibold border-r border-slate-700">
                        {data.budgetData.tableHeaders[0]}
                      </th>
                      <th className="py-2 px-2.5 font-semibold border-r border-slate-700 text-center">
                        {data.budgetData.tableHeaders[1]}
                      </th>
                      <th className="py-2 px-2.5 font-semibold text-right">
                        {data.budgetData.tableHeaders[2]}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans text-[11px]">
                    {data.budgetData.tableRows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}
                      >
                        <td className="py-2 px-2.5 font-medium text-slate-900 border-r border-slate-200">
                          {row[0]}
                        </td>
                        <td className="py-2 px-2.5 text-slate-700 border-r border-slate-200 text-center font-mono text-[10px]">
                          {row[1]}
                        </td>
                        <td className="py-2 px-2.5 font-bold text-slate-950 text-right font-mono text-[10px]">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Credit Line */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <div>
            Fuente: <span className="font-semibold text-slate-800">Hilmer Castillo Bescanza</span> — {data.sourceCitation || `Arquitectura del Aprendizaje (${data.chapterNumber})`}.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Formato Infografía NotebookLM • Alta Fidelidad Gráfica</span>
          </div>
        </div>
      </div>
    </div>
  );
};
