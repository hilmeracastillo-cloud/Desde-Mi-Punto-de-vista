import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Building2,
  Globe,
  Percent,
  ArrowRightLeft,
  PieChart,
  HelpCircle,
  Info,
  Sparkles,
  ChevronRight,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import { MacroeconomicChart } from "./MacroeconomicChart";
import { MoMComparisonChart } from "./MoMComparisonChart";
import {
  gdpData,
  gdpPerCapitaData,
  consumoTotalData,
  consumoPctData,
  gastoPctData,
  inversionData,
  investmentsTable,
  exportsTotalData,
  exportsBienesData,
  importsTotalData,
  importsBienesData,
  netExportsData,
  arancelesData,
  saldoMensualData,
  momComparisonData
} from "../data_part2";

interface MacroPart2Props {
  activeTab: string;
}

export function MacroPart2({ activeTab }: MacroPart2Props) {
  // GDP Components local interactive selection
  const [selectedGdpComp, setSelectedGdpComp] = useState<"C" | "I" | "G" | "XM">("C");

  // Exterior sector local sub-tab selection
  const [activeExteriorTab, setActiveExteriorTab] = useState<"balance" | "exports" | "imports" | "customs">("balance");

  // State for the Part 2 Interactive Checklist (Section 7)
  const [p2Indicators, setP2Indicators] = useState([
    {
      id: "crecimiento-pib",
      title: "Crecimiento Económico (PIB)",
      desc: "La economía nacional está creciendo de manera indudable, aunque la velocidad y escala del crecimiento no alcanzan un umbral suficiente para notar cambios inmediatos en el día a día de la totalidad de la población americana.",
      status: "Favorable",
      metric: "El PIB nominal anualizado alcanzó un máximo histórico de $31,865.7 Mil Millones (+40.5% de cambio total acumulado)",
      checked: true,
    },
    {
      id: "consumo-privado",
      title: "Consumo Privado Sólido",
      desc: "El Consumo de las familias crece de manera constante, actuando como un colchón que mantiene activo el flujo de mercancías y servicios en todas las regiones del país.\n\nAsimismo, el crecimiento del consumo privado ha superado al crecimiento de la inflación, con lo cual es un crecimiento efectivo.",
      status: "Excelente",
      metric: "El Gasto de Consumo Personal superó los $22.06 Billones de dólares anualizados, un aumento de +46.4% de cambio total acumulado\n\nLa inflación ha crecido 5.54% mientras que el consumo ha crecido 8.60% en el mismo período.",
      checked: true,
    },
    {
      id: "gasto-publico",
      title: "Reducción del Gasto Público",
      desc: "El gasto federal medido como proporción del PIB continúa decreciendo gradualmente, facilitando la contracción de la brecha deficitaria. No obstante, la deuda nacional continúa su curso alcista, configurándose como un reto de escala demográfica e institucional de largo alcance.",
      status: "En Optimización",
      metric: "La proporción del Gasto Público sobre el PIB cayó del 18.3% al 17.0%, promediando 17.1% en Trump II contra 17.3% en Biden",
      checked: true,
    },
    {
      id: "inversion-privada",
      title: "Inversión y Capacidad Industrial",
      desc: "La Inversión Privada mantiene una senda de crecimiento ascendente. Las colosales asignaciones informadas por las corporaciones prometen acelerar el potencial manufacturero del país en las próximas etapas.\n\nAsimismo, diversas compañías privadas líderes han formalizado compromisos de inversión sumamente sustanciales ante sus juntas de accionistas para destinar masivos flujos de capital durante los próximos años, asegurando el desarrollo y la reindustrialización nacional.",
      status: "Excelente",
      metric: "La Inversión Privada Interna Bruta alcanzó los $5.63 Billones, con una media de $5.49 Billones bajo Trump II vs. $4.84 Billones con Biden.\n\nLos compromisos formales de inversión informados de forma oficial a los accionistas acumulan una suma total de $380.6 Mil Millones ($380.6B) de dólares.",
      checked: true,
    },
    {
      id: "sector-exterior",
      title: "Sector Exterior y Aranceles",
      desc: "Aunque la balanza comercial sigue arrojando saldos desfavorables crónicos, la combinación de una mayor penetración exportadora junto a los sustanciales aportes tributarios recaudados de los aranceles aduaneros configuran un panorama optimista.",
      status: "Positivo",
      metric: "Los ingresos arancelarios se dispararon hasta un promedio de $281.3 mil millones en Trump II (frente a $88.5 mil millones con Biden)",
      checked: true,
    },
    {
      id: "deficit-presupuestario",
      title: "Déficit Presupuestario Crónico",
      desc: "El gobierno federal incurre constantemente en gastos superiores a sus ingresos mensuales, resultando en un saldo deficitario recurrente que incrementa el pasivo soberano nacional.",
      status: "Deficitario",
      metric: "El saldo mensual promedio refleja un déficit de -$135.94 Mil Millones (Trump II) y -$162.68 Mil Millones (Biden)",
      checked: true,
    }
  ]);

  const toggleP2Indicator = (id: string) => {
    setP2Indicators(
      p2Indicators.map((ind) =>
        ind.id === id ? { ...ind, checked: !ind.checked } : ind
      )
    );
  };

  return (
    <div className="w-full">
      {/* --------------------- SECTION 2.01: CRECIMIENTO PIB --------------------- */}
      {activeTab === "01" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">01.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Crecimiento de la Economía Nacional (PIB)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Perspectiva de Estudio • El Progreso de la Nación
            </div>
            <p className="text-slate-300">
              El progreso de un país suele calibrarse con su <strong>Producto Interno Bruto (PIB)</strong>, y más precisamente con su <strong>PIB por persona</strong> (per cápita). Analizaremos la velocidad con la que crece la riqueza nacional global y cómo se traduce individualmente en los habitantes de los Estados Unidos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Card 1: GDP Total */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
              <MacroeconomicChart
                id="gdp_total_chart"
                title="Producto Interno Bruto (PIB) Nominal"
                description="Tasa anualizada trimestral en billones de dólares. Refleja el tamaño total y velocidad de la economía estadounidense."
                labels={gdpData.labels}
                values={gdpData.values}
                stats={gdpData.stats}
                isQuarterly={true}
              />
              <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                  Aceleración Global
                </div>
                <p className="text-slate-300 leading-relaxed">
                  La producción total ha subido de <span className="text-white font-bold">$22.68 Billones</span> en el primer trimestre de 2021 a <span className="text-white font-bold">$31.87 Billones</span> en el primer trimestre de 2026. La velocidad de crecimiento global registra un avance acumulado del <span className="text-emerald-400 font-bold">+40.5%</span> en esta ventana temporal.
                </p>
              </div>
            </div>

            {/* Card 2: GDP Per Capita */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
              <MacroeconomicChart
                id="gdp_per_capita_chart"
                title="PIB Nominal por Persona (Per Cápita)"
                description="Ingreso promedio teórico por habitante medido en dólares anualizados. Indicador indirecto de prosperidad nacional."
                labels={gdpPerCapitaData.labels}
                values={gdpPerCapitaData.values}
                stats={gdpPerCapitaData.stats}
                isQuarterly={true}
              />
              <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                  Apropiación Individual
                </div>
                <p className="text-slate-300 leading-relaxed">
                  El promedio teórico por ciudadano ascendió de <span className="text-white font-bold">$68,304</span> a <span className="text-white font-bold">$93,016</span>. Esta ganancia acumulada de <span className="text-emerald-400 font-bold">+$24,712 por habitante (+36.2%)</span> representa un ensanchamiento sustancial en el tamaño macroeconómico nacional.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 2.02: COMPONENTES PIB --------------------- */}
      {activeTab === "02" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">02.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              La Estructura y Componentes del PIB
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              La Ecuación Fundamental: PIB = C + I + G + (X - M)
            </div>
            <p className="text-slate-300">
              El Producto Interno Bruto se compone de cuatro grandes agregados macroeconómicos. Cada uno ejerce una influencia distinta sobre la vida de los ciudadanos. <strong>Haz clic en cualquiera de las siguientes tarjetas interactivas</strong> para profundizar en su rol y perspectivas:
            </p>
          </div>

          {/* Interactive Bento Card Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setSelectedGdpComp("C")}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedGdpComp === "C"
                  ? "bg-[#1A1113] border-[#FB7185] shadow-lg shadow-pink-500/5 ring-1 ring-[#FB7185]/20"
                  : "bg-[#111] border-[#222] hover:border-[#333] hover:bg-[#141414]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <PieChart className={`w-6 h-6 ${selectedGdpComp === "C" ? "text-[#FB7185]" : "text-slate-400"}`} />
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">~68% del PIB</span>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">Componente C</h4>
                <p className="text-sm font-bold text-[#F8FAFC] mt-0.5 font-sans">Consumo Privado</p>
              </div>
              <span className="text-[10px] text-slate-400 leading-none mt-2 font-mono flex items-center gap-1">
                Ver análisis <ChevronRight className="w-3 h-3" />
              </span>
            </button>

            <button
              onClick={() => setSelectedGdpComp("I")}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedGdpComp === "I"
                  ? "bg-[#11161A] border-[#60A5FA] shadow-lg shadow-blue-500/5 ring-1 ring-[#60A5FA]/20"
                  : "bg-[#111] border-[#222] hover:border-[#333] hover:bg-[#141414]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <Building2 className={`w-6 h-6 ${selectedGdpComp === "I" ? "text-[#60A5FA]" : "text-slate-400"}`} />
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">~17% del PIB</span>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">Componente I</h4>
                <p className="text-sm font-bold text-[#F8FAFC] mt-0.5 font-sans">Inversión Privada</p>
              </div>
              <span className="text-[10px] text-slate-400 leading-none mt-2 font-mono flex items-center gap-1">
                Ver análisis <ChevronRight className="w-3 h-3" />
              </span>
            </button>

            <button
              onClick={() => setSelectedGdpComp("G")}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedGdpComp === "G"
                  ? "bg-[#1A1611] border-amber-500 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/20"
                  : "bg-[#111] border-[#222] hover:border-[#333] hover:bg-[#141414]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <Activity className={`w-6 h-6 ${selectedGdpComp === "G" ? "text-amber-500" : "text-slate-400"}`} />
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">~17% del PIB</span>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">Componente G</h4>
                <p className="text-sm font-bold text-[#F8FAFC] mt-0.5 font-sans">Gasto Público</p>
              </div>
              <span className="text-[10px] text-slate-400 leading-none mt-2 font-mono flex items-center gap-1">
                Ver análisis <ChevronRight className="w-3 h-3" />
              </span>
            </button>

            <button
              onClick={() => setSelectedGdpComp("XM")}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-44 ${
                selectedGdpComp === "XM"
                  ? "bg-[#131A14] border-emerald-500 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                  : "bg-[#111] border-[#222] hover:border-[#333] hover:bg-[#141414]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <ArrowRightLeft className={`w-6 h-6 ${selectedGdpComp === "XM" ? "text-emerald-500" : "text-slate-400"}`} />
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">Saldo Neto Déficit</span>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">Componente X - M</h4>
                <p className="text-sm font-bold text-[#F8FAFC] mt-0.5 font-sans">Exportaciones Netas</p>
              </div>
              <span className="text-[10px] text-slate-400 leading-none mt-2 font-mono flex items-center gap-1">
                Ver análisis <ChevronRight className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Interactive Panel Display of the Selected GDP Component */}
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 blur-[100px] pointer-events-none"></div>

            {selectedGdpComp === "C" && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-[#FB7185] font-mono font-bold text-xs">
                  <PieChart className="w-4 h-4" />
                  <span>CONSUMO PRIVADO (C) • EL MOTOR PRINCIPAL</span>
                </div>
                <h4 className="text-xl font-bold font-sans text-white">
                  Indicador Directo del Bienestar Familiar
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  El Consumo Privado es el componente de mayor peso, representando aproximadamente el <strong className="text-white">68%</strong> de la actividad de los EE. UU. Si aumenta de forma sostenida, indica que los ciudadanos tienen mayores ingresos disponibles y certidumbre económica para adquirir bienes y servicios que satisfacen sus necesidades. Si disminuye o se contrae, es síntoma inequívoco de que las familias están recortando sus presupuestos por asfixia económica.
                </p>
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Relevancia Ciudadana:</span>
                  <span className="text-emerald-400 font-semibold">Muy Alta (Termómetro Directo)</span>
                </div>
              </div>
            )}

            {selectedGdpComp === "I" && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-[#60A5FA] font-mono font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                  <span>INVERSIÓN PRIVADA (I) • MULTIPLICADOR DE FUTURO</span>
                </div>
                <h4 className="text-xl font-bold font-sans text-white">
                  Semilla para Empleos e Infraestructura de Largo Plazo
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  La Inversión Realizada por las empresas privadas constituye el pilar productivo de la nación. Incluye la edificación de fábricas, adquisición de maquinaria industrial y desarrollo tecnológico. Este componente guarda una correlación directa con la creación de nuevos puestos laborales altamente remunerados en el mediano y largo plazo. Una inversión en expansión genera un círculo virtuoso de prosperidad general.
                </p>
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Relevancia Ciudadana:</span>
                  <span className="text-[#60A5FA] font-semibold">Alta (Sustento de Nuevos Puestos)</span>
                </div>
              </div>
            )}

            {selectedGdpComp === "G" && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-amber-500 font-mono font-bold text-xs">
                  <Activity className="w-4 h-4" />
                  <span>GASTO PÚBLICO (G) • FACTOR DE CARGA FISCAL</span>
                </div>
                <h4 className="text-xl font-bold font-sans text-white">
                  El Peso de la Administración Pública y la Deuda
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  El Gasto Público abarca las compras del gobierno y los salarios del personal público. Si bien provee servicios elementales, sus recursos proceden enteramente de los ciudadanos a través del pago de impuestos o el incremento de la deuda. Actualmente, el tamaño de la deuda gubernamental es monumental: alcanza los <strong className="text-white">39.2 Trillones de dólares</strong>, lo que representa el <strong className="text-white">123% del PIB</strong>. Esa inmensa carga la pagará la población tarde o temprano, restando flexibilidad al presupuesto familiar futuro.
                </p>
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Relevancia Ciudadana:</span>
                  <span className="text-amber-500 font-semibold">Carga Fiscal / Desvío de Riqueza</span>
                </div>
              </div>
            )}

            {selectedGdpComp === "XM" && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-emerald-500 font-mono font-bold text-xs">
                  <ArrowRightLeft className="w-4 h-4" />
                  <span>EXPORTACIONES NETAS (X - M) • BALANZA COMERCIAL</span>
                </div>
                <h4 className="text-xl font-bold font-sans text-white">
                  Flujo de Capital y Competitividad Internacional
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  El sector exterior mide la diferencia neta entre lo que vendemos al mundo (Exportaciones) y lo que compramos del mundo (Importaciones). Un déficit crónico persistente (cuando compramos más de lo que vendemos) significa que una porción importante de la riqueza de los ciudadanos fluye de manera permanente al exterior, disminuyendo el PIB contable y la acumulación de capital interno de la nación.
                </p>
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Relevancia Ciudadana:</span>
                  <span className="text-rose-400 font-semibold">Déficit Comercial (Salida de Divisas)</span>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* --------------------- SECTION 2.03: CONSUMO PRIVADO --------------------- */}
      {activeTab === "03" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">03.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Consumo Privado: Análisis del Gigante Comercial
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Perspectiva Analítica • El Consumo en los Últimos 15 Meses
            </div>
            <p className="text-slate-300">
              El consumo de los ciudadanos de los EE. UU. muestra una velocidad de crecimiento bastante acelerada en los últimos 15 meses de registro. Analizaremos su valor bruto y su porcentaje relativo sobre la riqueza global generada por la nación.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Card 1: Consumo Total */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
              <MacroeconomicChart
                id="pce_total_p2"
                title="Gasto de Consumo Personal (PCE) Bruto"
                description="Tasa anualizada en billones de dólares. Es el principal motor del crecimiento interno en EE. UU."
                labels={consumoTotalData.labels}
                values={consumoTotalData.values}
                stats={consumoTotalData.stats}
                isQuarterly={false}
              />
              <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                  Aceleración del Motor
                </div>
                <p className="text-slate-300 leading-relaxed">
                  El gasto total ha aumentado desde <span className="text-white font-bold">$15.07 Billones</span> al inicio de 2021 hasta alcanzar un máximo histórico de <span className="text-white font-bold">$22.06 Billones</span> en mayo de 2026. Este incremento refleja la solidez y resiliencia del consumidor promedio.
                </p>
              </div>
            </div>

            {/* Card 2: Consumo % GDP */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
              <MacroeconomicChart
                id="pce_pct_gdp_p2"
                title="Consumo Personal como Porcentaje del PIB"
                description="Proporción que representa el gasto familiar dentro del Producto Interno Bruto total."
                labels={consumoPctData.labels}
                values={consumoPctData.values}
                stats={consumoPctData.stats}
                isQuarterly={true}
              />
              <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                  Análisis del Porcentaje de Consumo
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Aunque el consumo bruto sube firmemente, su peso porcentual respecto al PIB sufrió leves bajas trimestrales (oscilando de un pico de <span className="text-white font-bold">68.4%</span> a <span className="text-white font-bold">68.1%</span>). Esta sutil reducción porcentual se explica fundamentalmente por el <strong>aumento de importaciones preventivas</strong> que hicieron las empresas ante los anuncios de aranceles, distorsionando temporalmente el balance del PIB.
                </p>
                <p className="text-slate-300 leading-relaxed mt-2.5">
                  Lo verdaderamente relevante es notar la asombrosa estabilidad del indicador en torno al <strong className="text-white">68%</strong>. Es este masivo volumen de gasto constante lo que otorga a EE. UU. el carácter de <strong className="text-white">&ldquo;gigante centro comercial del planeta&rdquo;</strong>, atrayendo la mirada comercial e industrial de todos los países exportadores del mundo.
                </p>
              </div>
            </div>

            {/* Card 3: MoM Comparison (Consumo vs Inflación) */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
              <MoMComparisonChart />
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 2.04: GASTO PUBLICO --------------------- */}
      {activeTab === "04" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">04.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Gasto Gubernamental: Contracción y Eficiencia Fiscal
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Reducción Sostenida de la Presencia del Estado
            </div>
            <p className="text-slate-300">
              El peso del aparato gubernamental sobre la riqueza global de los Estados Unidos ha experimentado una reducción constante y sostenida en los últimos 15 meses de la presente administración.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5 max-w-4xl mx-auto">
            <MacroeconomicChart
              id="gvt_pct_chart_p2"
              title="Gasto de Consumo e Inversión del Gobierno como % del PIB"
              description="Proporción del PIB consumido por las administraciones públicas federales y estatales."
              labels={gastoPctData.labels}
              values={gastoPctData.values}
              stats={gastoPctData.stats}
              isQuarterly={true}
            />
            <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
              <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                Participación del Consumo Público en el Producto Interno
              </div>
              <p className="text-slate-300">
                El gasto del estado disminuyó del pico inicial del <span className="text-white font-bold">18.3%</span> del PIB en 2021 a tan solo un <span className="text-emerald-400 font-bold">17.0%</span> en la actualidad.
              </p>
              <p className="text-slate-300 mt-2">
                Esta tendencia coincide y consolida la <strong>considerable reducción de puestos en la nómina gubernamental federal</strong> que identificamos en la Parte 1 de nuestro análisis (donde el número de burócratas activos bajó de 3.021 millones a 2.679 millones). Este reordenamiento fiscal representa una magnífica noticia para aliviar el déficit presupuestario crónico de la nación y morigerar de forma sana la escalada de la deuda pública.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 2.05: INVERSION PRIVADA --------------------- */}
      {activeTab === "05" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">05.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Inversión y Capacidad Industrial
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Sólida Expansión Productiva • Inversión Corporativa
            </div>
            <p className="text-slate-300">
              La inversión en el sector privado mantiene un ritmo ascendente robusto. Se consolidan promedios históricos que sientan las bases físicas de la reindustrialización nacional, complementados por masivos anuncios de gasto de capital reportados formalmente a las juntas de accionistas de las principales industrias.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* SUBSECTION 5.1: GPDI TREND */}
            <div className="space-y-5">
              <div className="border-b border-[#262626] pb-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded bg-[#FB7185]/10 border border-[#FB7185]/20 text-[#FB7185] font-mono text-xs font-bold">
                    Subsección 5.1
                  </span>
                  <h4 className="text-lg font-bold text-white font-sans">
                    Tendencia de la Inversión Privada Interna Bruta (GPDI)
                  </h4>
                </div>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Análisis trimestral de la inyección de capital en el engranaje productivo y la adquisición de activos fijos de la nación.
                </p>
              </div>

              {/* Chart Container */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="gpdi_chart_p2"
                  title="Inversión Privada Interna Bruta"
                  description="Tasa anualizada en billones de dólares. Muestra la inyección real de capital en el engranaje empresarial."
                  labels={inversionData.labels}
                  values={inversionData.values}
                  stats={inversionData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Comportamiento de la Inversión Privada y Formación de Capital
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La inversión privada interna bruta mantiene una sólida tendencia ascendente, alcanzando un récord de <strong className="text-white font-bold">$5.63 Billones</strong> en el primer trimestre de 2026. El promedio acumulado durante la actual gestión (<strong className="text-emerald-400 font-bold">$5.49 Billones</strong>) supera con creces el promedio de la administración anterior (<strong className="text-white font-semibold">$4.84 Billones</strong>), lo que refleja la confianza empresarial, el estímulo de la desregulación y la aceleración de proyectos industriales de gran calado.
                  </p>
                </div>
              </div>
            </div>

            {/* SUBSECTION 5.2: SHAREHOLDER COMMITMENTS ($380B+) */}
            <div className="space-y-5">
              <div className="border-b border-[#262626] pb-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                    Subsección 5.2
                  </span>
                  <h4 className="text-lg font-bold text-white font-sans">
                    Compromiso Corporativo de Inversión a Accionistas (Más de $380 Billones)
                  </h4>
                </div>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Compromisos de desembolsos masivos de capital informados de forma oficial a las juntas de accionistas para expandir la capacidad fabril en EE. UU.
                </p>
              </div>

              {/* Detailed Explanation / Warning box */}
              <div className="bg-[#111] border border-[#222] p-5 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold font-sans text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Garantía de Crecimiento a Mediano y Largo Plazo
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                  Diversas multinacionales líderes en semiconductores, energía limpia, minería estratégica de tierras raras y automoción avanzada han notificado de forma legal a sus accionistas e inversionistas planes estratégicos que consolidan un compromiso total acumulado superior a los <strong className="text-white font-semibold">$380 billones de dólares</strong> (específicamente <strong>$380.65 Mil Millones de USD</strong>). Estos fondos aseguran la creación de infraestructura pesada e industrial de primer nivel nacional.
                </p>
              </div>

              {/* Investments Table */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                  <div>
                    <h4 className="text-base font-bold text-white font-sans">Inversiones de Capital Informadas a Accionistas</h4>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">Grandes proyectos para la reindustrialización y el fomento de manufacturas de EE. UU.</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg text-xs font-mono font-bold text-emerald-400">
                    Total: $380.6B
                  </div>
                </div>

                {/* Responsive Styled Table Component */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-[#262626] text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                        <th className="py-3 px-2">Sector / Industria</th>
                        <th className="py-3 px-2">Corporación</th>
                        <th className="py-3 px-2 text-right">Inversión (USD)</th>
                        <th className="py-3 px-2">Horizonte / Fase</th>
                        <th className="py-3 px-2 text-center">Ficha</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222]">
                      {investmentsTable.map((item, idx) => (
                        <tr key={idx} className="hover:bg-[#1C1C1C] transition-colors">
                          <td className="py-3.5 px-2">
                            <span className="inline-block bg-[#1B1B1B] text-slate-300 border border-[#2C2C2C] px-2 py-0.5 rounded-md font-mono text-[10px]">
                              {item.industry}
                            </span>
                          </td>
                          <td className="py-3.5 px-2 font-bold text-white text-sm">
                            {item.company}
                          </td>
                          <td className="py-3.5 px-2 text-right font-mono font-extrabold text-emerald-400 text-sm">
                            ${item.amount.toFixed(2)} B
                          </td>
                          <td className="py-3.5 px-2 text-slate-400 text-xs">
                            {item.period}
                          </td>
                          <td className="py-3.5 px-2 text-center">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              referrerPolicy="no-referrer"
                              className="inline-flex items-center gap-1 text-[#FB7185] hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Impacto Industrial de Larga Duración
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Estos cuantiosos compromisos de capital por parte de líderes de semiconductores (Micron, TSMC) y manufacturas avanzadas prometen una aceleración de la infraestructura nacional y empleo calificado en el transcurso de los siguientes años.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* --------------------- SECTION 2.06: SECTOR EXTERIOR --------------------- */}
      {activeTab === "06" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">06.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Sector Exterior, Balanza Comercial y Aranceles
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Comercio Internacional • El Peso del Sector Exterior
            </div>
            <p className="text-slate-300">
              Analizaremos el flujo de bienes y servicios hacia y desde el extranjero. El sector exterior ha sido un factor de resta histórico para el PIB por décadas de déficit comercial crónico. <strong>Utiliza la sub-navegación para explorar las diferentes dimensiones del sector exterior:</strong>
            </p>
          </div>

          {/* Sub-navigation Menu for Section 06 */}
          <div className="flex flex-wrap gap-2.5 border-b border-[#262626] pb-3">
            <button
              onClick={() => setActiveExteriorTab("balance")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeExteriorTab === "balance"
                  ? "bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185]"
                  : "bg-transparent text-slate-400 hover:text-white"
              }`}
            >
              1. Balanza Comercial &amp; Déficit
            </button>
            <button
              onClick={() => setActiveExteriorTab("exports")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeExteriorTab === "exports"
                  ? "bg-[#60A5FA]/10 border border-[#60A5FA]/30 text-[#60A5FA]"
                  : "bg-transparent text-slate-400 hover:text-white"
              }`}
            >
              2. Exportaciones (Bienes y Servicios)
            </button>
            <button
              onClick={() => setActiveExteriorTab("imports")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeExteriorTab === "imports"
                  ? "bg-amber-500/10 border border-amber-500/30 text-amber-500"
                  : "bg-transparent text-slate-400 hover:text-white"
              }`}
            >
              3. Importaciones
            </button>
            <button
              onClick={() => setActiveExteriorTab("customs")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeExteriorTab === "customs"
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-500"
                  : "bg-transparent text-slate-400 hover:text-white"
              }`}
            >
              4. Aranceles e Impacto Presupuestal
            </button>
          </div>

          {/* Tab 1: Balance comercial y presupuesto mensual */}
          {activeExteriorTab === "balance" && (
            <div className="grid grid-cols-1 gap-8 animate-fade-in max-w-4xl mx-auto">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="net_exports_chart"
                  title="Exportaciones Netas de Bienes y Servicios (X - M)"
                  description="Diferencia consolidada anualizada en miles de millones. El signo negativo denota un déficit comercial estructural."
                  labels={netExportsData.labels}
                  values={netExportsData.values}
                  stats={netExportsData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Evaluación de la Balanza Comercial y Saldos Netos
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    El tremendo impacto negativo del déficit comercial drena riqueza del engranaje doméstico. No obstante, en el transcurso de la actual gestión se registra una reducción progresiva del déficit, bajando de un pico de <strong className="text-rose-400 font-extrabold">-$1,264.6 Billones</strong> en el primer trimestre de 2025 a <strong className="text-emerald-400 font-extrabold">-$820.0 Billones</strong> en el primer trimestre de 2026 (una mejoría de reducción de déficit del <strong className="text-emerald-400 font-bold">35.2%</strong>).
                  </p>
                </div>
              </div>

              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="federal_budget_chart"
                  title="Saldo Presupuestal Mensual del Gobierno Federal"
                  description="Superávit (+) o Déficit (-) neto medido en miles de millones de dólares mensuales. (Serie FRED: MTSDS133FMS)."
                  labels={saldoMensualData.labels}
                  values={saldoMensualData.values}
                  stats={saldoMensualData.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Impacto en el Déficit Público
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    El saldo mensual muestra alta volatilidad ordinaria. El superávit de abril de 2022 representó un hito singular de <strong className="text-emerald-400">+$308.2B</strong>. En la actual etapa, el promedio mensual se sitúa en <strong className="text-white">-$135.9B</strong>, resultando más favorable que el promedio mensual Biden de <strong className="text-white">-$162.7B</strong>, ayudado por la recaudación aduanera.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Exportaciones */}
          {activeExteriorTab === "exports" && (
            <div className="grid grid-cols-1 gap-8 animate-fade-in max-w-4xl mx-auto">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="exports_total_chart"
                  title="Exportaciones Totales (Bienes y Servicios)"
                  description="Volumen nominal anualizado de despachos comerciales en miles de millones de dólares. Expansión de mercados."
                  labels={exportsTotalData.labels}
                  values={exportsTotalData.values}
                  stats={exportsTotalData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Desempeño de las Exportaciones Globales
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Las exportaciones globales registraron un aumento constante, acelerándose en los últimos 18 meses bajo un marco comercial que fomenta la reciprocidad internacional y busca abrir de manera agresiva mercados para los productos estadounidenses.
                  </p>
                </div>
              </div>

              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="exports_bienes_chart"
                  title="Exportaciones de Bienes Solos (EXPGSC1)"
                  description="Volumen nominal anualizado de mercancías tangibles (excluyendo servicios) en miles de millones de dólares."
                  labels={exportsBienesData.labels}
                  values={exportsBienesData.values}
                  stats={exportsBienesData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Columna Vertebral Comercial
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La porción de mercancías y productos físicos representa la columna vertebral de las exportaciones, escalando a una tasa de <strong className="text-white">$2.26 Trillones</strong> anuales.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Importaciones */}
          {activeExteriorTab === "imports" && (
            <div className="grid grid-cols-1 gap-8 animate-fade-in max-w-4xl mx-auto">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="imports_total_chart"
                  title="Importaciones Totales (Bienes y Servicios)"
                  description="Volumen nominal anualizado de compras al extranjero en miles de millones de dólares."
                  labels={importsTotalData.labels}
                  values={importsTotalData.values}
                  stats={importsTotalData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Evolución de las Importaciones
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Las importaciones consolidadas experimentaron un declive progresivo desde mediados de 2025, beneficiando la ecuación comercial interna. Esto se vincula a inventarios previos de mercancías acumulados por anticipación empresarial.
                  </p>
                </div>
              </div>

              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="imports_bienes_chart"
                  title="Importación de Bienes Solos (IMPGSC1)"
                  description="Valor nominal de compras físicas (sin servicios) anualizado en miles de millones de dólares."
                  labels={importsBienesData.labels}
                  values={importsBienesData.values}
                  stats={importsBienesData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Análisis de Importaciones y Efecto Judicial
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Tras el declive de 2025, se percibe una reciente aceleración hacia <strong className="text-white">$3.48 Trillones</strong>. Este repunte fue provocado fundamentalmente por fallos de la Corte Suprema declarando temporalmente inválidos ciertos aranceles gubernamentales, lo que incentivó un alza momentánea de compras.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Aranceles aduaneros */}
          {activeExteriorTab === "customs" && (
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5 animate-fade-in max-w-4xl mx-auto">
              <MacroeconomicChart
                id="customs_duties_chart"
                title="Ingresos Federales por Aranceles Aduaneros"
                description="Recaudación consolidada trimestral en miles de millones de dólares. (Serie FRED: B235RC1Q027SBEA)."
                labels={arancelesData.labels}
                values={arancelesData.values}
                stats={arancelesData.stats}
                isQuarterly={true}
              />
              <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                  Análisis de Recaudación Arancelaria
                </div>
                <p className="text-slate-300">
                  La recaudación aduanera por la colocación de aranceles representa un cambio estructural histórico. El promedio del período Biden fue de <strong className="text-white">$89.2 mil millones</strong>. Tras el cambio de administración, se disparó hasta promediar <strong className="text-emerald-400 font-extrabold">$281.3 mil millones</strong>, alcanzando un máximo histórico en el cuarto trimestre de 2025 de <strong className="text-emerald-400 font-extrabold">$364.3 mil millones</strong>.
                </p>
                <p className="text-slate-300 mt-2.5">
                  Aunque el retroceso marginal del primer trimestre de 2026 (<strong className="text-white">$346.1B</strong>) se debe a los fallos de la Corte Suprema que invalidaron temporalmente ciertas tasas, existe la expectativa gubernamental de restaurar y consolidar firmemente estos ingresos aduaneros implementando vías jurídicas alternativas que ya se encuentran en curso, aliviando de forma permanente la carga deficitaria de la nación.
                </p>
              </div>
            </div>
          )}


        </section>
      )}

      {/* --------------------- SECTION 2.07: CONCLUCIONES EDITORIAL --------------------- */}
      {activeTab === "07" && (
        <section className="mb-14 animate-fade-in space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">07.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Balance Editorial: ¿Cómo Vamos?
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          {/* Bento Conclusions Checklist */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 shadow-2xl space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-400/5 blur-[90px] pointer-events-none"></div>
            <div className="border-b border-[#262626] pb-6 mb-6">
              <h4 className="text-xl font-bold text-[#F8FAFC] font-sans">
                Balance General de Indicadores Macroeconómicos
              </h4>
              <p className="text-xs text-slate-400 font-sans mt-1">Conclusiones integradas de la recopilación de datos de la Parte 2</p>
            </div>

            {/* List of interactive lines */}
            <div className="space-y-4">
              {p2Indicators.map((ind) => {
                const isGreen = ind.status === "Positivo" || ind.status === "Excelente" || ind.status === "Favorable";
                const isYellow = ind.status === "En Optimización" || ind.status === "Mejorando" || ind.status === "En Recuperación" || ind.status === "Estabilizado";

                // Map colors based on category
                let colorClass = "text-slate-400";
                let bgBorderClass = "bg-[#0A0A0A]/50 border-[#262626] hover:border-[#404040] opacity-50";
                let checkboxBg = "border-slate-600 bg-transparent text-transparent";
                let badgeClass = "bg-slate-900/80 text-slate-500 border-slate-800";
                let metricClass = "text-slate-500";

                if (ind.checked) {
                  if (isGreen) {
                    colorClass = "text-emerald-400";
                    bgBorderClass = "bg-[#0E0E0E] border-emerald-500/30 hover:border-emerald-500/50 shadow-inner";
                    checkboxBg = "bg-emerald-500 border-emerald-500 text-black shadow-lg shadow-emerald-500/20";
                    badgeClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
                    metricClass = "text-emerald-400";
                  } else if (isYellow) {
                    colorClass = "text-amber-400";
                    bgBorderClass = "bg-[#0E0E0E] border-amber-500/30 hover:border-amber-500/50 shadow-inner";
                    checkboxBg = "bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20";
                    badgeClass = "bg-amber-500/10 text-amber-400 border-amber-500/20";
                    metricClass = "text-amber-400";
                  } else {
                    // isRed
                    colorClass = "text-red-400";
                    bgBorderClass = "bg-[#0E0E0E] border-red-500/30 hover:border-red-500/50 shadow-inner";
                    checkboxBg = "bg-red-500 border-red-500 text-black shadow-lg shadow-red-500/20";
                    badgeClass = "bg-red-500/10 text-red-400 border-red-500/20";
                    metricClass = "text-red-400";
                  }
                }

                const descParagraphs = ind.desc.split('\n\n');
                const metricParagraphs = ind.metric.split('\n\n');

                return (
                  <div
                    key={ind.id}
                    onClick={() => toggleP2Indicator(ind.id)}
                    className={`flex flex-col p-5 md:p-6 rounded-xl border transition-all cursor-pointer ${bgBorderClass}`}
                  >
                    {/* Header Row: Checkbox + Title + Status Badge */}
                    <div className="w-full flex items-start gap-4">
                      <div className="mt-1 shrink-0">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all ${checkboxBg}`}>
                          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className={`text-base font-bold tracking-tight transition-colors font-sans ${colorClass}`}>
                            {ind.title}
                          </span>
                          <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                            {ind.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Pairs: Aligned Description and Supporting Metric */}
                    <div className="space-y-4 pl-10 mt-3.5">
                      {descParagraphs.map((para, idx) => {
                        const metricForPara = metricParagraphs[idx] || "";
                        return (
                          <div 
                            key={idx} 
                            className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start pt-3.5 ${
                              idx > 0 ? "border-t border-[#262626]/60 mt-3.5" : ""
                            }`}
                          >
                            {/* Description Paragraph */}
                            <div className="space-y-1">
                              {idx > 0 && (
                                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono font-bold block mb-1">
                                  Contexto Adicional
                                </span>
                              )}
                              <p className={`text-sm md:text-base text-slate-300 leading-relaxed font-sans transition-colors ${
                                ind.checked ? "" : "text-slate-500"
                              }`}>
                                {para}
                              </p>
                            </div>

                            {/* Aligned Metric of Support */}
                            <div className="space-y-1.5 md:pl-8 md:border-l border-[#262626]">
                              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block leading-none font-mono">
                                {idx === 0 ? "Métrica de Respaldo" : "Métrica de Respaldo Secundaria"}
                              </span>
                              <span className={`text-sm md:text-base font-medium tracking-normal block leading-relaxed ${metricClass}`}>
                                {metricForPara}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing Editorial Box */}
            <div className="mt-8 pt-6 border-t border-[#262626] text-center max-w-2xl mx-auto space-y-4">
              <p className="text-slate-300 font-serif italic text-base">
                &ldquo;Podemos decir que esta Parte 2 de nuestro análisis converge con lo que vimos en la Parte 1. En la Parte 3 haremos una profundización por industrias para determinar cómo las tendencias generales se reflejan y desglosan en los distintos sectores. En el próximo artículo, el 2 de Julio, seguiremos agregando dimensiones.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-[#262626]"></div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Hilmer Castillo Bescanza</p>
                <div className="w-8 h-px bg-[#262626]"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
