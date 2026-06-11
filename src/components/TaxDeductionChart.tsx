import React from "react";
import { DollarSign, FileText, Landmark, Users, Calendar, ArrowRight } from "lucide-react";

export function TaxDeductionChart() {
  const data = {
    tips: {
      declarations: 3.5, // millones
      avgSaving: 1300, // USD
      label: "No Tax on Tips",
      desc: "Exención de impuestos sobre propinas para trabajadores de servicios",
      colorClass: "bg-emerald-500",
      textClass: "text-emerald-400",
      borderClass: "border-emerald-500/20",
      glowClass: "shadow-emerald-500/10",
      gradient: "from-emerald-500/30 via-emerald-500/20 to-transparent"
    },
    overtime: {
      declarations: 15.5, // millones
      avgSaving: 3100, // USD
      label: "No Tax on Overtime",
      desc: "Exención de impuestos sobre horas extras para trabajadores elegibles",
      colorClass: "bg-[#60A5FA]",
      textClass: "text-[#60A5FA]",
      borderClass: "border-[#60A5FA]/20",
      glowClass: "shadow-[#60A5FA]/10",
      gradient: "from-[#60A5FA]/30 via-[#60A5FA]/20 to-transparent"
    }
  };

  // Percentages for bar scaling
  const maxDeclarations = 18; // cap of scale for visual balance
  const maxSaving = 3500; // cap of scale for visual balance

  return (
    <div id="tax-deduction-container" className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-6">
      {/* Header section with badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/25 uppercase">
              Impacto Fiscal 2025
            </span>
            <span className="text-[#94A3B8] text-xs font-mono">Est. Departamento de Tesorería</span>
          </div>
          <h4 className="text-xl font-bold text-[#F8FAFC] tracking-tight font-sans">
            Deducción en el Impuesto 2025: <span className="text-emerald-400 font-extrabold">No Tax on Tips</span> y <span className="text-[#60A5FA] font-extrabold font-sans">No Tax on Overtime</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Proyección del volumen de beneficiarios directos y el alivio tributario anual estimado por contribuyente.
          </p>
        </div>
        <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg hidden sm:flex items-center gap-2">
          <Landmark className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-mono text-neutral-300 font-medium">IRS Plan 2025</span>
        </div>
      </div>



      {/* Side-by-side comparison graphics with dual datasets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dataset 1: Número de declaraciones */}
        <div className="bg-[#0D0D0D] border border-[#222222] rounded-xl p-5 space-y-4 shadow-inner">
          <div className="flex items-center justify-between border-b border-[#222222] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-gradient-to-tr from-emerald-500 to-[#60A5FA]"></span>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                1. Volumen de Contribuyentes Beneficiados
              </h5>
            </div>
            <span className="bg-[#1A1A1A] text-[10px] font-mono px-2 py-0.5 rounded text-neutral-400 border border-neutral-800">
              Millones de Declaraciones
            </span>
          </div>

          <div className="space-y-6 pt-2">
            {/* Row 1: Tips */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 group-hover:text-[#F8FAFC] transition-colors">
                  {data.tips.label}
                </span>
                <span className="font-mono font-black text-emerald-400 text-sm">
                  {data.tips.declarations} Millones
                </span>
              </div>
              <div className="h-6 w-full bg-[#1A1A1A] rounded-md overflow-hidden p-0.5 border border-[#2A2A2A]">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-sm shadow-inner transition-all duration-500 relative flex items-center justify-end pr-2"
                  style={{ width: `${(data.tips.declarations / maxDeclarations) * 100}%` }}
                >
                  <span className="text-[10px] font-mono font-black text-slate-900 leading-none">
                    {Math.round((data.tips.declarations / maxDeclarations) * 100)}%
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-sans italic">
                {data.tips.desc}
              </p>
            </div>

            {/* Row 2: Overtime */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 group-hover:text-[#F8FAFC] transition-colors">
                  {data.overtime.label}
                </span>
                <span className="font-mono font-black text-[#60A5FA] text-sm">
                  {data.overtime.declarations} Millones
                </span>
              </div>
              <div className="h-6 w-full bg-[#1A1A1A] rounded-md overflow-hidden p-0.5 border border-[#2A2A2A]">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-sm shadow-inner transition-all duration-500 relative flex items-center justify-end pr-2"
                  style={{ width: `${(data.overtime.declarations / maxDeclarations) * 100}%` }}
                >
                  <span className="text-[10px] font-mono font-black text-[#0F172A] leading-none">
                    {Math.round((data.overtime.declarations / maxDeclarations) * 100)}%
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-sans italic">
                {data.overtime.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Dataset 2: Monto Promedio */}
        <div className="bg-[#0D0D0D] border border-[#222222] rounded-xl p-5 space-y-4 shadow-inner">
          <div className="flex items-center justify-between border-b border-[#222222] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-gradient-to-tr from-[#60A5FA] to-emerald-500"></span>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                2. Impacto Promedio Anual de Ahorro
              </h5>
            </div>
            <span className="bg-[#1A1A1A] text-[10px] font-mono px-2 py-0.5 rounded text-neutral-400 border border-neutral-800">
              USD por Contribuyente
            </span>
          </div>

          <div className="space-y-6 pt-2">
            {/* Row 1: Tips */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 group-hover:text-[#F8FAFC] transition-colors">
                  {data.tips.label}
                </span>
                <span className="font-mono font-black text-emerald-400 text-sm">
                  ${data.tips.avgSaving.toLocaleString()} USD
                </span>
              </div>
              <div className="h-6 w-full bg-[#1A1A1A] rounded-md overflow-hidden p-0.5 border border-[#2A2A2A]">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-sm shadow-inner transition-all duration-500 relative flex items-center justify-end pr-2"
                  style={{ width: `${(data.tips.avgSaving / maxSaving) * 100}%` }}
                >
                  <span className="text-[10px] font-mono font-black text-slate-900 leading-none">
                    ${data.tips.avgSaving}
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-sans italic">
                Estimado anual para los contribuyentes que declararon ingresos por propinas
              </p>
            </div>

            {/* Row 2: Overtime */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 group-hover:text-[#F8FAFC] transition-colors">
                  {data.overtime.label}
                </span>
                <span className="font-mono font-black text-[#60A5FA] text-sm">
                  ${data.overtime.avgSaving.toLocaleString()} USD
                </span>
              </div>
              <div className="h-6 w-full bg-[#1A1A1A] rounded-md overflow-hidden p-0.5 border border-[#2A2A2A]">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 rounded-sm shadow-inner transition-all duration-500 relative flex items-center justify-end pr-2"
                  style={{ width: `${(data.overtime.avgSaving / maxSaving) * 100}%` }}
                >
                  <span className="text-[10px] font-mono font-black text-slate-900 leading-none col shadow">
                    ${data.overtime.avgSaving}
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-sans italic">
                Ahorro anual estimado derivado de la exención impositiva sobre la remuneración de horas extras
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytical Reading Container */}
      <div className="bg-[#0D0D0D] border-l-4 border-l-cyan-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
        <div className="text-cyan-400 font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
          Lectura Analítica • Alivio Tributario 2025
        </div>
        <p className="text-slate-300">
          La inmensa mayoría de los beneficiados con esta deducción de taxes pertenecen a la población de empleados privados sin posición supervisoria mostrados anteriormente. La política de incentivos fiscales propone un contrapeso sumamente relevante frente a la fatiga del salario real. La iniciativa de eximir de impuestos las horas extras (<span className="text-[#60A5FA] font-bold">No Tax on Overtime</span>) beneficia de forma inmediata a un universo estimado de <span className="text-[#60A5FA] font-bold">15.5 millones</span> de trabajadores, inyectando un ahorro de bolsillo promedio de <span className="text-white font-bold">$3,100 anuales</span>. De manera paralela, la medida para el sector de servicios (<span className="text-emerald-400 font-bold">No Tax on Tips</span>) asiste a <span className="text-emerald-400 font-bold">3.5 millones</span> de empleados, liberando un promedio de <span className="text-white font-bold">$1,300 anuales</span> que antes se diluían en cargas impositivas federales.
        </p>
      </div>

      {/* Footer / Citation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 border-t border-[#262626] pt-4 font-mono">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          Actualizado: Junio 2026
        </span>
        <a
          href="https://home.treasury.gov/news/press-releases/sb0414"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 flex items-center gap-1 transition-colors mt-1 sm:mt-0"
        >
          Fuente oficial: Departamento del Tesoro (sb0414)
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
