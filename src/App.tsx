import React, { useState } from "react";
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  User,
  Calendar,
  CheckCircle2,
  TrendingDown,
  Percent,
  Compass,
} from "lucide-react";
import {
  graph1Data,
  graph2Data,
  graph3Data,
  graph5Data,
  graph6Data,
  graph7Data,
  graph8Data,
  graph9Data,
  graph10Data,
} from "./data";
import { MacroeconomicChart } from "./components/MacroeconomicChart";
import { RealWageWaterfall } from "./components/RealWageWaterfall";
import { TaxDeductionChart } from "./components/TaxDeductionChart";

export default function App() {
  // Balanced indicator checklist state
  const [indicators, setIndicators] = useState([
    {
      id: "fuerza-laboral",
      title: "Fuerza Laboral No Supervisoria",
      desc: "Más gente tiene trabajo en posiciones no supervisoras.",
      status: "Positivo",
      metric: "Se han creado en el período más de 1 millón de nuevos trabajos no supervisorios",
      checked: true,
    },
    {
      id: "poder-adquisitivo",
      title: "Poder Adquisitivo Efectivo",
      desc: "El salario de esos trabajadores se está recuperando respecto al efecto de la inflación.",
      status: "En Recuperación",
      metric: "El salario real ha subido tan solo un 0.73%",
      checked: true,
    },
    {
      id: "estabilidad-empleo",
      title: "Estabilidad en el Empleo",
      desc: "El número de personas perdiendo su trabajo está disminuyendo.",
      status: "Favorable",
      metric: "Los reclamos de seguro de desempleo se han mantenido en el nivel mínimo promedio de los dos períodos",
      checked: true,
    },
    {
      id: "oportunidades",
      title: "Abundancia de Oportunidades",
      desc: "El número de posiciones de trabajo abiertas son considerables al comparar con el número de personas perdiendo el trabajo.",
      status: "Excelente",
      metric: "Más de 7.6M de puestos de trabajos abiertos contra 225 mil solicitudes de seguro de desempleo",
      checked: true,
    },
    {
      id: "entretenimiento",
      title: "Gasto en Entretenimiento",
      desc: "La gente va a restaurantes y viaja más.",
      status: "Expansionista",
      metric: "El consumo en restaurantes y alojamiento se ha incrementado 3.86%",
      checked: true,
    },
    {
      id: "morosidad",
      title: "Reducción de Morosidad",
      desc: "Los montos delincuenciales de las tarjetas de crédito han disminuido.",
      status: "Estabilizado",
      metric: "La cartera morosa ha descendido un 2.26% en este período. La gente está pagando para disminuir su deuda",
      checked: true,
    },
  ]);

  const toggleIndicator = (id: string) => {
    setIndicators(
      indicators.map((ind) =>
        ind.id === id ? { ...ind, checked: !ind.checked } : ind
      )
    );
  };

  const completedCount = indicators.filter((i) => i.checked).length;
  const healthPercent = Math.round((completedCount / indicators.length) * 100);

  // Active section/tab state. Restructured sequentially (01 to 06)
  const [activeTab, setActiveTab] = useState("01");

  const tabs = [
    { id: "01", label: "01. Concepto de Asequibilidad", desc: "Término rector y bases de estudio" },
    { id: "02", label: "02. Mercado Laboral & Salarios", desc: "Trabajadores y sueldos privados" },
    { id: "03", label: "03. Inflación & Salario Real", desc: "Erosión y recuperación del poder adquisitivo" },
    { id: "04", label: "04. Estructura Laboral", desc: "Desempleo, plazas vacantes y nómina pública" },
    { id: "05", label: "05. Gasto & Consumo", desc: "Viajes, restaurantes y delincuencia de crédito" },
    { id: "06", label: "06. Balance y Conclusión", desc: "Matriz interactiva y cierre analítico" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] font-sans selection:bg-[#60A5FA]/30 selection:text-white transition-all overflow-x-hidden">
      
      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        {/* Author / Editorial Introduction Hero Section */}
        <section className="mb-14">
          <div className="border-l-2 border-gradient-y border-[#60A5FA] pl-6 md:pl-8 max-w-4xl relative">
            <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#60A5FA] via-[#c084fc] to-[#FB7185]"></div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-[#F8FAFC] leading-tight">
              Desde mi punto de vista, ¿cómo vamos?
            </h2>
            <p className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#F8FAFC] mt-2">
              Parte&nbsp;&nbsp;<span className="text-4xl sm:text-5xl font-extrabold text-[#F8FAFC]">1</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#94A3B8] mt-4 font-mono">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Por: <span className="text-[#F8FAFC]">Hilmer Castillo Bescanza</span></span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Última Actualización: <span className="text-[#F8FAFC]">Junio 2026</span></span>
              </div>
            </div>
          </div>

          {/* Philosophy Quotes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 p-6 bg-[#141414] border border-[#262626] rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="lg:col-span-2 flex flex-col justify-between">
              <p className="text-base text-slate-300 leading-relaxed font-sans italic">
                &ldquo;La sobreabundancia de información nos entierra diariamente. Nuestras fuentes de información tienden a alinearse a lo que queremos oír. Pero la realidad es mucho más compleja de lo que parece. La simplificación de que la realidad es lo que yo vivo muchas veces no nos deja valorarla. En mi caso, los números me ayudan a filtrar sentimientos y expandir visiones.&rdquo;
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">Visión Global del Análisis</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Este informe visualiza mediciones compiladas de fuentes oficiales de los Estados Unidos (BLS, BEA, FED) para configurar una visión templada de la coyuntura contemporánea.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-mono pt-2 border-t border-[#262626]">
                <span className="text-slate-500">Fuentes combinadas</span>
                <span className="text-emerald-400 font-bold">8 Gráficas Oficiales</span>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------- TAB NAVIGATION SYSTEM --------------------- */}
        <div id="navigation-tabs-section" className="mb-8">
          {/* Helper Note for Reading & Mobile Orientation */}
          <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-5 mb-6 shadow-inner text-sm text-slate-300 leading-relaxed font-sans max-w-4xl">
            <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-2 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
              Nota de Lectura Interactiva
            </div>
            <p>
              <strong>Si estás leyendo en tu teléfono, hazlo de forma horizontal.</strong> Cuando veas una gráfica con puntos, puedes <strong>tocar cualquier punto</strong> para conocer su valor exacto y detalles. Gracias por tu atención.
            </p>
          </div>

          <p className="text-xs text-[#94A3B8] font-mono uppercase tracking-widest mb-3 text-center sm:text-left">
            Secuencia de Lectura: Selecciona una Sección
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#141414] border-[#60A5FA] text-[#60A5FA] shadow-lg shadow-blue-500/5 ring-1 ring-[#60A5FA]/30"
                      : "bg-[#0A0A0A]/40 border-[#262626] text-[#94A3B8] hover:border-[#404040] hover:text-[#F8FAFC]"
                  }`}
                >
                  <span className="text-xs font-mono font-extrabold tracking-wider opacity-80">{tab.id}.</span>
                  <span className="text-xs font-bold tracking-tight mt-1 line-clamp-1">{tab.label.split(". ")[1]}</span>
                  <span className="text-[10px] text-slate-500 font-sans tracking-tight mt-auto pt-0.5 line-clamp-1 truncate block w-full">
                    {tab.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --------------------- SECTION CONTAINERS (TAB-FILTERED) --------------------- */}

        {/* Section 1: Concepto de Asequibilidad */}
        {activeTab === "01" && (
          <section className="mb-14 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono text-[#60A5FA] font-bold">01.</span>
              <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
                El Concepto de Asequibilidad (Affordability)
              </h3>
              <div className="flex-1 border-b border-dashed border-[#262626]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Box definition */}
              <div className="md:col-span-2 bg-[#141414] border border-[#262626] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#60A5FA] tracking-wider font-semibold">Término Rector</span>
                  <h4 className="text-lg font-bold text-[#F8FAFC] font-sans mt-1">Asequibilidad: Precio Razonable sin asfixiarse económicamente</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mt-3 font-sans">
                    Lo &ldquo;razonable&rdquo; de un precio lo determina cada persona y está relacionado a la prioridad que le da cada individuo al bien o servicio por el que va a pagar. Por otra parte, el &ldquo;puede pagar sin asfixiarse&rdquo; está referido al poder de compra de cada individuo, el cual depende directamente de la relación entre dos variables constitutivas:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#262626]">
                  <div className="bg-[#0A0A0A] border border-[#262626] rounded-lg p-3.5">
                    <div className="flex items-center gap-2 text-[#60A5FA] font-bold text-xs mb-1">
                      <DollarSign className="w-4 h-4 text-[#60A5FA]" />
                      <span className="font-sans">Los Ingresos Disponibles</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                      El dinero neto que realmente te queda para gastar o ahorrar después de pagar impuestos y obligaciones fijas.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#262626] rounded-lg p-3.5">
                    <div className="flex items-center gap-2 text-[#FB7185] font-bold text-xs mb-1">
                      <Percent className="w-4 h-4 text-[#FB7185]" />
                      <span className="font-sans">Nivel de Precios (Costo de Vida)</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                      El valor consolidado de las cosas elementales que necesitas o deseas comprar (vivienda, alimentación, energía, transporte).
                    </p>
                  </div>
                </div>
              </div>

              {/* Prompt Box */}
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 flex flex-col justify-between text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-400/5 blur-[80px] pointer-events-none"></div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#60A5FA] tracking-widest font-semibold block mb-4">Interrogante Crítica</span>
                  <h4 className="text-xl font-medium text-[#F8FAFC] italic leading-relaxed font-serif pt-2">
                    &ldquo;¿Estamos realmente, <br />como país, en una crisis de asequibilidad?&rdquo;
                  </h4>
                </div>
                <div className="mt-8">
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 font-sans">
                    Para contestar esta cuestión objetivamente, desplegamos las métricas fundamentales del mercado laboral y de consumo en las siguientes secciones.
                  </p>
                  <div className="w-10 h-1 bg-gradient-to-r from-[#60A5FA] to-[#FB7185] rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: Mercado Laboral y Salarios */}
        {activeTab === "02" && (
          <section className="mb-14 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono text-[#60A5FA] font-bold">02.</span>
              <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
                Análisis del Mercado Laboral y Salarios
              </h3>
              <div className="flex-1 border-b border-dashed border-[#262626]"></div>
            </div>

            <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
              <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                Perspectiva de Estudio • Mercado y Salarios
              </div>
              <p className="text-slate-300">
                Comenzamos estudiando los <strong>ingresos disponibles</strong>. Los ingresos de los trabajadores del sector privado que no tienen una posición de supervisión (Personal de producción o no jerárquico) son un excelente punto de partida. Representan un volumen masivo y estructural dentro de la población económicamente activa de la nación.
              </p>
              <div className="mt-4 pt-3 border-t border-[#262626] flex items-center gap-2 text-xs font-mono text-slate-500">
                <span>Segmentación Temporal:</span>
                <span className="text-[#60A5FA] font-semibold">Biden</span> (Ene 2021 - Ene 2025)
                <span className="text-slate-600">|</span>
                <span className="text-[#FB7185] font-semibold">Trump II</span> (Ene 2025 - Mayo 2026)
              </div>
            </div>

            <div className="space-y-8">
              {/* Card 1: Trabajadores Privados */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="1"
                  title="Trabajadores Privados No Supervisores (Producción)"
                  description="Evolución en millones de los puestos privados no supervisorios. Muestra la expansión de la capacidad laboral real."
                  labels={graph1Data.labels}
                  values={graph1Data.values}
                  stats={graph1Data.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                    Lectura Analítica • Fuerza Laboral No Supervisora
                  </div>
                  <p className="text-slate-300">
                    Los números oficiales indican un crecimiento robusto. Existen más de <span className="text-[#F8FAFC] font-bold">110 millones</span> de trabajadores activos en puestos no supervisorios, lo que demuestra la resiliencia y la asombrosa expansión de la capacidad laboral real en la economía nacional. En los últimos 18 meses bajo la presente administración, se ha mantenido un nivel alto y estable, asimilando de forma continua la inserción de nuevos trabajadores.
                  </p>
                </div>
              </div>

              {/* Card 2: Ingresos Semanales */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="2"
                  title="Ingresos Semanales Promedio Obtenidos"
                  description="Sueldos generados semanalmente por el personal no supervisorio del sector privado. El incremento nominal acumulado es del 26.2%."
                  labels={graph2Data.labels}
                  values={graph2Data.values}
                  stats={graph2Data.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                    Lectura Analítica • Ingresos Semanales
                  </div>
                  <p className="text-slate-300">
                    Los salarios nominales continúan su avance firme. En los últimos 18 meses bajo la presente administración, se ha experimentado un incremento promedio de <span className="text-[#F8FAFC] font-bold">$57.54/semana</span> (un equivalente directo a <span className="text-emerald-400 font-bold">+$249.34 por mes</span> de incremento nominal), consolidando un alza del <span className="text-emerald-400 font-bold">5.6%</span> en esta etapa y acumulando un sólido avance del <span className="text-emerald-400 font-bold">26.2%</span> global.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Impacto de la Inflación y Salario Real */}
        {activeTab === "03" && (
          <section className="mb-14 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono text-[#60A5FA] font-bold">03.</span>
              <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
                El Impacto de la Inflación y el Salario Real
              </h3>
              <div className="flex-1 border-b border-dashed border-[#262626]"></div>
            </div>

            <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
              <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
                Análisis de Rendimiento • Inflación y Salario Real
              </div>
              <p className="text-slate-300">
                Para discernir objetivamente lo que le ha ocurrido en promedio al salario real de estos más de 110 millones de hogares trabajadores, debemos <strong>contrastar los ingresos con la inflación de bienes y servicios</strong> que experimentan en su vida diaria:
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Card 1: Inflación */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3"
                  title="Inflación Interanual Mensual (CPI-U)"
                  description="Nivel porcentual histórico de inflación interanual medida de manera mensual. El impacto acumulado anterior se situó en +21.4%."
                  labels={graph3Data.labels}
                  values={graph3Data.values}
                  stats={graph3Data.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
                    Lectura Analítica • Erosión por Inflación
                  </div>
                  <p className="text-slate-300">
                    La inflación acumulada durante el período Biden fue extraordinaria (<span className="text-[#FB7185] font-bold">+21.4%</span>), erosionando profundamente el poder adquisitivo del sueldo efectivo de los trabajadores. No obstante, en la etapa Trump II, se registra un nivel que acumula un <span className="text-[#FB7185] font-bold">+4.8%</span> hasta la fecha actual.
                  </p>
                </div>
              </div>

              {/* Card 2: Salario Real Cascada */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <RealWageWaterfall />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Lectura Analítica • Retorno del Poder Adquisitivo
                  </div>
                  <p className="text-slate-300">
                    La gráfica de cascada ilustra la anatomía exacta de cómo el salario real de los trabajadores comenzó a recuperarse del duro desajuste de años anteriores. Al netear los incrementos nominales frente a la inflación acumulada, se observa que en la etapa actual el salario real o poder de compra efectivo ha comenzado a recuperarse de forma modesta pero persistente. Las tendencias reflejan que vamos mejorando en este grupo fundamental.
                  </p>
                </div>
              </div>

              {/* Card 3: Deducción de Impuestos (No Tax on Tips & No Tax on Overtime) */}
              <TaxDeductionChart />
            </div>
          </section>
        )}

        {/* Section 4: Dinámica del Empleo y Estructura Laboral */}
        {activeTab === "04" && (
          <section className="mb-14 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono text-[#60A5FA] font-bold">04.</span>
              <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
                Dinámica del Empleo y Estructura Laboral
              </h3>
              <div className="flex-1 border-b border-dashed border-[#262626]"></div>
            </div>

            <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
              <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Dinámica Sectorial • Empleo y Estructura Laboral
              </div>
              <p className="text-slate-300">
                Aunque la situación de los empleados es favorable, hay personas que carecen de trabajo. Veamos la trayectoria estructural de la tasa de despidos y la creación de oportunidades del mercado oficial:
              </p>
            </div>

            <div className="space-y-8">
              {/* Card 1: Solicitudes de Desempleo */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="4"
                  title="Solicitudes Iniciales de Seguro de Desempleo (ICSA)"
                  description="Nivel semanal promedio medido en miles de solicitudes iniciales. Muestra una senda descendente sostenida y estabilizada."
                  labels={graph5Data.labels}
                  values={graph5Data.values}
                  stats={graph5Data.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                    Lectura Analítica • Despidos y Solicitudes de Desempleo
                  </div>
                  <p className="text-slate-300">
                    Existe una sólida tendencia a la baja en reclamos de desocupación involuntaria, estabilizado en torno a un óptimo de <span className="text-[#F8FAFC] font-bold">~215K</span> a <span className="text-[#F8FAFC] font-bold">221.9K</span> solicitudes en promedio móvil. El egreso global de personas se asocia más a transiciones demográficas ordinarias (como jubilaciones) que a despidos corporativos masivos, indicando alta seguridad en el puesto laboral actual.
                  </p>
                </div>
              </div>

              {/* Card 2: Total de Personas Empleadas (CE16OV) */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="employment_level_chart"
                  title="Total de Personas Empleadas (CE16OV)"
                  description="Volumen acumulado en millones de habitantes con empleo en EE. UU. (Serie CE16OV de la BLS)."
                  labels={graph6Data.labels}
                  values={graph6Data.values}
                  stats={graph6Data.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Lectura Analítica • Nivel de Empleo Total (CE16OV)
                  </div>
                  <p className="text-slate-300">
                    El empleo total en los Estados Unidos (Serie FRED: CE16OV) refleja un mercado laboral extraordinariamente robusto. Durante el período Biden, ascendió de un mínimo inicial de <span className="text-[#F8FAFC] font-bold">149.8M</span> en enero de 2021 hasta culminar estable en <span className="text-[#F8FAFC] font-bold">163.83M</span>. En la presente administración, se ha estabilizado en niveles históricamente elevados con un promedio consolidado de <span className="text-[#F8FAFC] font-bold">163.35M</span>, registrando un pico máximo de <span className="text-[#F8FAFC] font-bold">163.99M</span>. Esta ocupación extendida ratifica que la capacidad de empleo total del país conserva una fortaleza estructural formidable de largo plazo.
                  </p>
                </div>
              </div>

              {/* Card 3: Empleados del Gobierno Federal */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="5"
                  title="Empleados del Gobierno Federal"
                  description="Volumen acumulado en millones de burócratas federales. Refleja un recorte sustancial del gasto estatal."
                  labels={graph7Data.labels}
                  values={graph7Data.values}
                  stats={graph7Data.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
                    Lectura Analítica • Reducción del Gasto Público
                  </div>
                  <p className="text-slate-300">
                    La nómina del gobierno federal muestra una compresión drástica y sin precedentes, disminuyendo de 3.021 millones (pico) a <span className="text-[#FB7185] font-bold">2.679 millones</span> de posiciones públicas activas. Esta reestructuración incide de forma favorable y directo en la reducción del déficit estatal, liberando presiones sobre el mercado laboral privado y mitigando raíces de inflación fiscal.
                  </p>
                </div>
              </div>

              {/* Card 4: Trabajos Disponibles */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="6"
                  title="Trabajos Disponibles en EE. UU. (JOLTS)"
                  description="Métrica total en millones de puestos laborales libres y no cubiertos en todos los sectores productivos no agrícolas."
                  labels={graph8Data.labels}
                  values={graph8Data.values}
                  stats={graph8Data.stats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Lectura Analítica • Oferta y Vacantes Disponibles
                  </div>
                  <p className="text-slate-300">
                    La demanda de fuerza de trabajo se mantiene sumamente saludable y robusta, consolidando más de <span className="text-emerald-400 font-bold">7.6 millones</span> de puestos de trabajo vacantes y listos para contratar. Esta sobreabundancia de vacantes pendientes actúa como un colchón o amortiguador macroeconómico contra la desocupación involuntaria, garantizando un margen de reempleo extraordinariamente ágil.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Consumo y Comportamiento Financiero */}
        {activeTab === "05" && (
          <section className="mb-14 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono text-[#60A5FA] font-bold">05.</span>
              <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
                Consumo y Comportamiento Financiero de los Hogares
              </h3>
              <div className="flex-1 border-b border-dashed border-[#262626]"></div>
            </div>

            <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
              <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                Fundamento de Estudio • Consumo y Finanzas
              </div>
              <p className="text-slate-300">
                Cuando la coyuntura financiera aprieta de manera sofocante, el reacomodo presupuestario se nota primero en recortes en áreas de ocio discrecional: el gasto en restaurantes y viajes de vacaciones suelen ser los primeros objetivos a prescindir. Contrastemos el estado de estos rubros cruciales:
              </p>
            </div>

            <div className="space-y-8">
              {/* Card 1: Gasto en Restaurantes y Viajes */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="7"
                  title="PCE: Servicios de Alimentación y Alojamiento"
                  description="Gasto acumulado trimestral medido en miles de millones. Récords en turismo y gastronomía sugieren liquidez latente."
                  labels={graph9Data.labels}
                  values={graph9Data.values}
                  stats={graph9Data.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Lectura Analítica • Consumo en Ocio Discrecional
                  </div>
                  <p className="text-slate-300">
                    La resiliencia y el deseo de consumo del hogar norteamericano continúan escalando firmemente. En lugar de experimentar recortes, la actividad de ocio en gastronomía y turismo ha registrado un hito histórico de <span className="text-emerald-400 font-bold">$1.52 billones (USD)</span> en tasa anual. Esto denota solidez presupuestaria y una holgura latente que aleja la hipótesis de un consumidor estrangulado financieramente.
                  </p>
                </div>
              </div>

              {/* Card 2: Deuda y Morosidad Tarjetas */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="8"
                  title="Volumen Estimado Moroso en Tarjetas Personales"
                  description="Monto en mora estimado en miles de millones de dólares. Obtenido cruzando el saldo total (CCLACBW027SBOG) con la tasa de morosidad (DRCCLACBS)."
                  labels={graph10Data.labels}
                  values={graph10Data.values}
                  stats={graph10Data.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-2.5 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                    Lectura Analítica • Sostenibilidad de Deuda Personal
                  </div>
                  <p className="text-slate-300">
                    El volumen delincuencial estimado de tarjetas de crédito comerciales (fórmula personalizada cruzando saldo y tasa de impago) acumuló un incremento constante desde el mínimo de <span className="text-[#60A5FA] font-bold">$11.65 mil millones</span> en el tercer trimestre de 2021 hasta alcanzar un máximo de <span className="text-[#60A5FA] font-bold">$34.05 mil millones</span> a mediados de 2024. No obstante, bajo la gestión Trump II, se ha consolidado un cambio de tendencia con una reducción hacia los <span className="text-[#60A5FA] font-bold">$31.13 mil millones</span> en el primer trimestre de 2026. Esta trayectoria decreciente ratifica un reordenamiento o saneamiento proactivo de los pasivos por parte de los hogares.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Balance y Conclusión */}
        {activeTab === "06" && (
          <section className="mb-14 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-mono text-[#60A5FA] font-bold">06.</span>
              <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
                Resumen de Hallazgos y Tabla de Balance
              </h3>
              <div className="flex-1 border-b border-dashed border-[#262626]"></div>
            </div>

            {/* Interactive Checklist Balance Dashboard */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="border-b border-[#262626] pb-6 mb-6">
                <h4 className="text-xl font-bold text-[#F8FAFC] font-sans">
                  Balance General de Indicadores
                </h4>
              </div>

              {/* List of interactive lines */}
              <div className="space-y-4">
                {indicators.map((ind) => {
                  const isGreen = ind.status === "Positivo" || ind.status === "Excelente" || ind.status === "Favorable";
                  return (
                    <div
                      key={ind.id}
                      onClick={() => toggleIndicator(ind.id)}
                      className={`flex flex-col md:flex-row md:items-stretch justify-between p-5 md:p-6 rounded-xl border transition-all cursor-pointer ${
                        ind.checked
                          ? isGreen
                            ? "bg-[#0E0E0E] border-emerald-500/30 hover:border-emerald-500/50 shadow-inner"
                            : "bg-[#0E0E0E] border-amber-500/30 hover:border-amber-500/50 shadow-inner"
                          : "bg-[#0A0A0A]/50 border-[#262626] hover:border-[#404040] opacity-50"
                      }`}
                    >
                      <div className="w-full md:w-1/2 flex items-start gap-4 pr-0 md:pr-6">
                        <div className="mt-1 shrink-0">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all ${
                            ind.checked 
                              ? isGreen
                                ? "bg-emerald-500 border-emerald-500 text-black shadow-lg shadow-emerald-500/20" 
                                : "bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20"
                              : "border-slate-600 bg-transparent text-transparent"
                          }`}>
                            <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap mb-2">
                            <span className={`text-base font-bold tracking-tight transition-colors font-sans ${
                              ind.checked 
                                ? isGreen 
                                  ? "text-emerald-400" 
                                  : "text-amber-400" 
                                : "text-slate-400"
                            }`}>
                              {ind.title}
                            </span>
                            <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                              ind.checked 
                                ? isGreen 
                                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                                  : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                : "bg-slate-900/80 text-slate-500 border-slate-800"
                            }`}>
                              {ind.status}
                            </span>
                          </div>
                          <p className={`text-sm md:text-base text-slate-300 leading-relaxed font-sans transition-colors ${
                            ind.checked ? "" : "text-slate-500"
                          }`}>
                            {ind.desc}
                          </p>
                        </div>
                      </div>

                      {/* Secondary Metrics display */}
                      <div className="w-full md:w-1/2 mt-4 md:mt-0 pl-10 md:pl-8 border-t md:border-t-0 md:border-l border-[#262626] pt-4 md:pt-0 flex flex-col justify-start">
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-2 leading-none font-mono">
                          Métrica de Respaldo
                        </span>
                        <span className={`text-sm md:text-base font-medium tracking-normal block leading-relaxed ${
                          ind.checked 
                            ? isGreen 
                              ? "text-emerald-400" 
                              : "text-amber-400" 
                            : "text-slate-500"
                        }`}>
                          {ind.metric}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Ending editorial note */}
              <div className="mt-8 pt-6 border-t border-[#262626] text-center max-w-2xl mx-auto">
                <span className="font-serif italic text-base text-slate-300">
                  &ldquo;Esto es una visión parcial de cómo vamos y luce positiva. ¿Tenemos una crisis de affordability? En el próximo artículo seguiremos agregando dimensiones.&rdquo;
                </span>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <div className="w-8 h-px bg-[#262626]"></div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Hilmer Castillo Bescanza</p>
                  <div className="w-8 h-px bg-[#262626]"></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --------------------- SEQUENTIAL READING NAVIGATION FOR TABS --------------------- */}
        <div className="mt-12 pt-6 border-t border-[#262626] flex items-center justify-between gap-4">
          {activeTab !== "01" ? (
            <button
              onClick={() => {
                const prevId = String(Number(activeTab) - 1).padStart(2, "0");
                setActiveTab(prevId);
                // Scroll beautifully up to the tab focus element
                const scrollTarget = document.getElementById("navigation-tabs-section");
                if (scrollTarget) {
                  scrollTarget.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 text-xs font-mono font-semibold text-[#94A3B8] hover:text-[#F8FAFC] py-2 px-4 rounded-xl border border-[#262626] bg-[#0A0A0A]/50 hover:bg-[#141414] transition-all cursor-pointer"
            >
              &larr; Volver a la Sección {String(Number(activeTab) - 1).padStart(2, "0")}
            </button>
          ) : (
            <div />
          )}

          {activeTab !== "06" ? (
            <button
              onClick={() => {
                const nextId = String(Number(activeTab) + 1).padStart(2, "0");
                setActiveTab(nextId);
                // Scroll beautifully up to the tab focus element
                const scrollTarget = document.getElementById("navigation-tabs-section");
                if (scrollTarget) {
                  scrollTarget.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 text-xs font-mono font-semibold text-[#60A5FA] hover:text-[#F8FAFC] py-2 px-5 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/30 hover:border-[#60A5FA] transition-all cursor-pointer ml-auto"
            >
              Avanzar a la Sección {String(Number(activeTab) + 1).padStart(2, "0")} &rarr;
            </button>
          ) : (
            <div />
          )}
        </div>

      </main>

      {/* Corporate footer */}
      <footer className="border-t border-[#262626] bg-[#0A0A0A] py-8 px-4 text-center text-xs text-slate-500 font-mono">
        <p>© 2026 Hilmer Castillo Bescanza. Todos los derechos reservados.</p>
        <p className="mt-1.5 opacity-65 leading-relaxed font-mono">
          Diseñado cumpliendo estrictos criterios de refinamiento Japandi-Slate. <br />
          Datos obtenidos e interpolados fielmente desde la base de datos de la Reserva Federal de San Luis (FRED) y la Oficina de Estadísticas Laborales (BLS).
        </p>
      </footer>

    </div>
  );
}
