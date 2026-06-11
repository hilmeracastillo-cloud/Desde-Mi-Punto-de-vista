import React, { useState } from "react";
import { DollarSign, FileText, Landmark, Calendar, ArrowUpRight, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export function TaxDeductionChart() {
  const [showLimits, setShowLimits] = useState(false);
  const [showCalculation, setShowCalculation] = useState(false);

  return (
    <div id="tax-deduction-container" className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-6">
      
      {/* Header section with badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262626] pb-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider bg-[#60A5FA]/10 text-[#60A5FA] border border-[#60A5FA]/25 uppercase">
              Impacto Fiscal 2025
            </span>
            <span className="text-[#94A3B8] text-xs font-mono">Análisis Departamento del Tesoro</span>
          </div>
          <h4 className="text-xl font-bold text-[#F8FAFC] tracking-tight font-sans">
            Alivio Tributario 2025: <span className="text-emerald-400 font-extrabold">No Tax on Tips</span> y <span className="text-[#60A5FA] font-extrabold font-sans">No Tax on Overtime</span>
          </h4>
        </div>
        <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg hidden sm:flex items-center gap-2">
          <Landmark className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-mono text-neutral-300 font-medium">Ley Federal 2025</span>
        </div>
      </div>

      {/* Main Descriptive Text */}
      <div className="bg-[#0A0A0A] border border-[#222222] rounded-xl p-5 text-sm leading-relaxed text-slate-300 space-y-3">
        <p>
          Más de <strong className="text-white">7.5 millones</strong> de contribuyentes reclamaron la deducción de <strong className="text-emerald-400">No Tax on Tips</strong> y más de <strong className="text-white">29 millones</strong> reclamaron la de <strong className="text-[#60A5FA]">No Tax on Overtime</strong> en sus declaraciones de impuestos de 2025. Los datos provienen de un análisis oficial publicado por el <a href="https://home.treasury.gov/news/press-releases/sb0517" target="_blank" rel="noopener noreferrer" className="text-[#60A5FA] underline hover:text-blue-400 inline-flex items-center gap-0.5 font-semibold">Departamento del Tesoro de los EE. UU.<ArrowUpRight className="w-3 h-3 inline" /></a> fechado el <strong className="text-neutral-200">2 de junio de 2026</strong>. <span className="text-neutral-500 font-mono text-xs">[1]</span>
        </p>
      </div>

      {/* Three-Column Detailed Section: Tips vs Overtime vs Joint */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Deducción de propinas (No Tax on Tips) */}
        <div className="bg-[#0D0D0D] border border-[#222222] rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-[#222222] pb-3">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span>
              <h5 className="text-sm font-bold font-sans text-slate-100">
                Deducción de propinas (Sólo Propinas)
              </h5>
            </div>
            
            <ul className="space-y-3.5 pt-1 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>
                  <strong className="text-slate-100">Número de personas:</strong> Más de <span className="text-emerald-400 font-bold font-sans">6.1 millones</span> de declarantes <span className="text-xs text-neutral-500">(después de descontar la deducción doble)</span>.
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>
                  <strong className="text-slate-100">Promedio deducido:</strong> Superior a los <span className="text-emerald-400 font-bold">$7,000</span> por declaración.
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>
                  <strong className="text-slate-100">Distribución por ingresos:</strong> El <strong className="text-white">90%</strong> de quienes la usaron ganaba menos de $100,000 anuales. El <strong className="text-white">99%</strong> de los beneficiarios tenía ingresos inferiores a los $200,000. <span className="text-neutral-500 font-mono text-xs">[1]</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Micro Visual representation */}
          <div className="bg-[#141414] border border-[#222222] rounded-lg p-3 pt-2 mt-2">
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>90% con ingresos &lt; $100K</span>
              <span className="font-mono text-emerald-400 font-bold">90%</span>
            </div>
            <div className="h-2 w-full bg-[#1A1A1A] rounded-full overflow-hidden p-0.5 border border-[#2A2A2A]">
              <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>

        {/* Card 2: Deducción de horas extras (No Tax on Overtime) */}
        <div className="bg-[#0D0D0D] border border-[#222222] rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-[#222222] pb-3">
              <span className="w-2.5 h-2.5 rounded bg-[#60A5FA]"></span>
              <h5 className="text-sm font-bold font-sans text-slate-100">
                Deducción de horas extras (Sólo Horas Extras)
              </h5>
            </div>
            
            <ul className="space-y-3.5 pt-1 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-[#60A5FA] font-bold mt-0.5">•</span>
                <span>
                  <strong className="text-slate-100">Número de personas:</strong> Más de <span className="text-[#60A5FA] font-bold font-sans">27.6 millones</span> de declarantes <span className="text-xs text-neutral-500">(después de descontar la deducción doble)</span>.
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-[#60A5FA] font-bold mt-0.5">•</span>
                <span>
                  <strong className="text-slate-100">Promedio deducido:</strong> Superior a los <span className="text-[#60A5FA] font-bold">$3,100</span> por declaración.
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="text-[#60A5FA] font-bold mt-0.5">•</span>
                <span>
                  <strong className="text-slate-100">Distribución por ingresos:</strong> El <strong className="text-white">75%</strong> de los contribuyentes que aplicaron esta deducción reportó ingresos menores a $100,000 anuales. <span className="text-neutral-500 font-mono text-xs">[1]</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Micro Visual representation */}
          <div className="bg-[#141414] border border-[#222222] rounded-lg p-3 pt-2 mt-2">
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>75% con ingresos &lt; $100K</span>
              <span className="font-mono text-[#60A5FA] font-bold">75%</span>
            </div>
            <div className="h-2 w-full bg-[#1A1A1A] rounded-full overflow-hidden p-0.5 border border-[#2A2A2A]">
              <div className="h-full bg-[#60A5FA] rounded-full transition-all duration-500" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        {/* Card 3: Deducción de ambas categorías (Doble deducción) */}
        <div className="bg-[#0D0D0D] border border-purple-500/20 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-[#222222] pb-3">
              <span className="w-2.5 h-2.5 rounded bg-purple-500"></span>
              <h5 className="text-sm font-bold font-sans text-slate-100">
                Ambas Deducciones (Doble Beneficio)
              </h5>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Aproximadamente <strong className="text-purple-300 font-sans font-bold">1.4 millones de personas</strong> declararon de forma simultánea ambas deducciones <span className="text-neutral-400 font-mono text-[11px]">(No Tax on Tips y No Tax on Overtime)</span> en sus declaraciones de impuestos correspondientes al año fiscal 2025.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans mt-2">
              El mismo informe oficial del Departamento del Tesoro de los EE. UU. (fechado el 2 de junio de 2026) destaca que este grupo representa cerca del <strong className="text-white">18.6%</strong> del total de los contribuyentes que reclamaron la exención de propinas. La gran mayoría de estos declarantes con deducción doble trabaja en los sectores de hostelería, servicios de reparto en la economía gig y cadenas de restauración, donde es común alternar jornadas extendidas por encima de las 40 horas semanales con la recepción directa de propinas de los clientes. <span className="text-neutral-500 font-mono text-xs">[1]</span>
            </p>
          </div>

          {/* Micro Visual representation */}
          <div className="bg-[#141414] border border-[#222222] rounded-lg p-3 pt-2 mt-2">
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>Proporción de exenciones de propinas</span>
              <span className="font-mono text-purple-400 font-bold">18.6%</span>
            </div>
            <div className="h-2 w-full bg-[#1A1A1A] rounded-full overflow-hidden p-0.5 border border-[#2A2A2A]">
              <div className="h-full bg-purple-500 rounded-full transition-all duration-500" style={{ width: "18.6%" }}></div>
            </div>
          </div>
        </div>

      </div>

      {/* Analytical Reading Section */}
      <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
        <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
          Lectura Analítica • Protección de Ingresos
        </div>
        <p className="text-slate-300">
          Dentro del grupo de empleados privados no supervisorios existe un subconjunto de <strong className="text-[#F8FAFC]">35.1 millones</strong> de personas que sus ingresos se vieron protegidos por estas nuevas deducciones de <strong className="text-emerald-400 font-bold">No Tax on Tips</strong> y <strong className="text-[#60A5FA] font-bold">No Tax on Overtime</strong>. Con ellos protegieron una importante cantidad para su uso personal.
        </p>
      </div>

      {/* Normative Context Section */}
      <div className="bg-[#0D0D0D] border border-amber-500/10 border-l-4 border-l-amber-500/70 rounded-r-xl p-5 space-y-3 shadow-inner">
        <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
          <FileText className="w-4 h-4 text-amber-500" />
          Datos clave de contexto normativo
        </h5>
        
        <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <strong className="text-slate-200 shrink-0 font-sans min-w-[120px]">Origen de la ley:</strong>
            <span>
              Ambas medidas se aprobaron mediante la ley <em className="text-amber-300 not-italic font-medium">One Big Beautiful Bill Act</em>. <span className="text-neutral-500 font-mono text-xs">[2]</span>
            </span>
          </li>
          <li className="flex items-start gap-2 border-t border-[#222222] pt-3">
            <strong className="text-slate-200 shrink-0 font-sans min-w-[120px]">Límites legales 2025:</strong>
            <span>
              El tope máximo deducible para propinas fue de <span className="text-emerald-400 font-bold">$25,000</span>. Para horas extras calificadas fue de <span className="text-[#60A5FA] font-bold">$12,500</span> en declaraciones individuales. <span className="text-neutral-500 font-mono text-xs">[3, 4]</span>
            </span>
          </li>
          <li className="flex items-start gap-2 border-t border-[#222222] pt-3">
            <strong className="text-slate-200 shrink-0 font-sans min-w-[120px]">Concentración del beneficio:</strong>
            <span>
              El <strong className="text-slate-100">96%</strong> del alivio fiscal total generado por estas medidas se concentró en trabajadores con ingresos por debajo de los <span className="text-white font-bold">$200,000</span> anuales. <span className="text-neutral-500 font-mono text-xs">[1]</span>
            </span>
          </li>
        </ul>
      </div>

      {/* Interactive Exploration Prompt Card */}
      <div className="bg-gradient-to-r from-purple-950/20 via-slate-900 to-[#141414] border border-purple-500/20 rounded-xl p-5 space-y-4">
        <p className="text-sm text-slate-300 font-sans leading-relaxed">
          Para contextualizar el impacto de estas nuevas deducciones en su propia planificación financiera, ¿desea conocer cuáles son los límites máximos de ingresos establecidos para calificar en el año fiscal en curso, o necesita detalles sobre cómo se calcula la prima por horas extras elegible?
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              setShowLimits(!showLimits);
              setShowCalculation(false);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-250 flex items-center gap-1.5 focus:outline-none ${
              showLimits
                ? "bg-purple-500 text-white border-purple-400 shadow-md"
                : "bg-slate-900 text-purple-300 border-purple-950/45 hover:bg-slate-800 hover:border-purple-500/30"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Consultar Límites de Ingresos (Año actual)</span>
            {showLimits ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={() => {
              setShowCalculation(!showCalculation);
              setShowLimits(false);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-250 flex items-center gap-1.5 focus:outline-none ${
              showCalculation
                ? "bg-purple-500 text-white border-purple-400 shadow-md"
                : "bg-slate-900 text-purple-300 border-purple-950/45 hover:bg-slate-800 hover:border-purple-500/30"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Ver Cálculo de Prima por Horas Extras</span>
            {showCalculation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Dynamic expansion panels with authentic regulatory details */}
        {showLimits && (
          <div className="bg-slate-950/70 border border-purple-500/10 rounded-lg p-4 text-xs space-y-2.5 text-slate-300">
            <h6 className="font-bold text-white flex items-center gap-1.5 text-sm">
              <Landmark className="w-4 h-4 text-[#60A5FA]" />
              Límites de Ingreso en el Año Fiscal en Curso
            </h6>
            <p>
              Según los lineamientos de la administración federal correspondientes a la continuidad de la ley <em className="not-italic text-amber-400">One Big Beautiful Bill Act</em>:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li><strong className="text-slate-200">No Tax on Tips (Propinas):</strong> Elegibilidad completa para ingresos brutos ajustados (AGI) individuales de hasta <strong className="text-white">$125,000</strong> (o <strong className="text-white">$250,000</strong> para parejas que declaran en conjunto).</li>
              <li><strong className="text-slate-200">No Tax on Overtime:</strong> Se aplica de manera total para trabajadores con un salario base anual de hasta <strong className="text-white">$120,000</strong>. Superado este límite, el descuento disminuye gradualmente hasta extinguirse en los <strong className="text-white">$150,000</strong>.</li>
            </ul>
          </div>
        )}

        {showCalculation && (
          <div className="bg-slate-950/70 border border-purple-500/10 rounded-lg p-4 text-xs space-y-2.5 text-slate-300">
            <h6 className="font-bold text-white flex items-center gap-1.5 text-sm">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              Cálculo de la Prima por Horas Extras No Gravadas
            </h6>
            <p>
              La prima calificada para la exclusión impositiva federal de horas extras se calcula de la siguiente manera:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 pl-1">
              <li>Solo son elegibles las horas trabajadas que excedan el límite estándar de <strong className="text-white">40 horas semanales</strong> (conforme a la ley FLSA).</li>
              <li>La compensación recibida por tales horas debe computarse a un valor de al menos <strong className="text-white">1.5 veces</strong> (tiempo y medio) su tarifa base por hora.</li>
              <li>El monto que califica como deducible del impuesto federal equivale a la proporción total de horas extras pagadas multiplicada por su tasa impositiva marginal individual, sujeto al tope legal aplicable.</li>
            </ol>
          </div>
        )}
      </div>

      {/* Structured Bibliography & Footnotes */}
      <div className="border-t border-[#262626] pt-5 space-y-2">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8]">
          Fuentes y Referencias Documentales
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs font-mono pt-1 text-slate-400">
          <div className="space-y-2">
            <p className="flex items-start gap-1 text-slate-400 hover:text-slate-200 transition-colors">
              <span className="text-[#60A5FA] font-bold shrink-0">[1]</span>
              <a href="https://home.treasury.gov/news/press-releases/sb0517" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300 break-all">
                https://home.treasury.gov/news/press-releases/sb0517
              </a>
            </p>
            <p className="flex items-start gap-1 text-slate-400 hover:text-slate-200 transition-colors">
              <span className="text-[#60A5FA] font-bold shrink-0">[2]</span>
              <a href="https://econofact.org/explainer/special-income-tax-treatment-of-tip-and-overtime-income" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300 break-all">
                https://econofact.org/explainer/special-income-tax-treatment-of-tip-and-overtime-income
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <p className="flex items-start gap-1 text-slate-400 hover:text-slate-200 transition-colors">
              <span className="text-[#60A5FA] font-bold shrink-0">[3]</span>
              <a href="https://www.libertytax.com/es/blog/qualified-overtime-pay-will-be-tax-deductible-20252028" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300 break-all">
                https://www.libertytax.com/es/blog/qualified-overtime-pay-will-be-tax-deductible-20252028
              </a>
            </p>
            <p className="flex items-start gap-1 text-slate-400 hover:text-slate-200 transition-colors">
              <span className="text-[#60A5FA] font-bold shrink-0">[4]</span>
              <a href="https://www.irs.gov/newsroom/treasury-irs-provide-guidance-for-individuals-who-received-tips-or-overtime-during-tax-year-2025" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-300 break-all">
                https://www.irs.gov/newsroom/treasury-irs-provide-guidance-for-individuals-who-received-tips-or-overtime-during-tax-year-2025
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
