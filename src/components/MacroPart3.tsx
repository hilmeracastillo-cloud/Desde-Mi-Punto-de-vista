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
  CheckCircle2,
  Users,
  Briefcase,
  Shield,
  Coins,
  Cpu,
  HeartPulse,
  ShoppingBag,
  Truck,
  Flame
} from "lucide-react";
import { MacroeconomicChart } from "./MacroeconomicChart";
import { SectorGrowthChart } from "./SectorGrowthChart";
import {
  privateIndustriesGdp,
  corporateProfits,
  gdpShareQ12026,
  employmentBySectorMarch2026,
  financeData,
  professionalServicesData,
  manufacturingData,
  educationHealthData,
  wholesaleData,
  retailData,
  informationData,
  artsEntertainmentData,
  constructionData
} from "../data_part3";

interface MacroPart3Props {
  activeTab: string;
}

export function MacroPart3({ activeTab }: MacroPart3Props) {
  // Local state for interactive indicator checklist in Section 11
  const [p3Indicators, setP3Indicators] = useState([
    {
      id: "economia-privada",
      title: "Crecimiento y Utilidades de la Economía Privada",
      desc: "El crecimiento del valor agregado de la economía privada al PIB ha sido relevante. Aún más han sido las utilidades después de impuestos.",
      status: "Verde",
      metric: "88.82% promedio del PIB comparado con 88.64% anterior. Utilidades promedio de más de $3.6B comparado con menos de $3.2B.",
      checked: true,
      icon: Building2,
      color: "text-emerald-400"
    },
    {
      id: "presencia-balanceada",
      title: "Presencia Sectorial Balanceada",
      desc: "El sector privado tiene una presencia balanceada en la economía.",
      status: "Verde",
      metric: "La mitad, 7 de 14 sectores económicos representan más del 80% de la contribución al PIB.",
      checked: true,
      icon: PieChart,
      color: "text-emerald-400"
    },
    {
      id: "correlacion-empleo-pib",
      title: "Alineación de Aporte y Empleo",
      desc: "La correlación de aporte económico con el empleo generado está bastante alineado.",
      status: "Verde",
      metric: "Solo dos sectores económicos no presentan alineación: Artes/Entretenimiento y Construcción.",
      checked: true,
      icon: Users,
      color: "text-emerald-400"
    },
    {
      id: "sector-fianzas",
      title: "Crecimiento del Sector Fianzas",
      desc: "El sector fianzas ha mantenido su crecimiento.",
      status: "Verde",
      metric: "Ritmo de crecimiento similar durante los últimos 3 años.",
      checked: true,
      icon: Shield,
      color: "text-emerald-400"
    },
    {
      id: "servicios-profesionales",
      title: "Desaceleración Suave en Servicios Profesionales",
      desc: "Los Servicios Profesionales y de Negocios han mostrado un suave debilitamiento en su crecimiento.",
      status: "Amarillo",
      metric: "Los últimos 18 meses presenta un crecimiento promedio de 1.26% mientras que en los previos 18 meses el promedio fue de 1.47%, es decir 0.2% de diferencia.",
      checked: true,
      icon: Cpu,
      color: "text-amber-400"
    },
    {
      id: "sector-manufacturero",
      title: "Desafío en el Sector Manufacturero",
      desc: "El sector manufacturero crece pero no con los valores deseados para la economía de USA.",
      status: "Amarillo",
      metric: "El crecimiento promedio de los últimos 18 meses ha sido de 0.78% mientras que el promedio de los previos 18 meses fue de 0.14%.",
      checked: true,
      icon: Flame,
      color: "text-amber-400"
    },
    {
      id: "servicios-salud-educacion",
      title: "Desaceleración en Salud y Educación",
      desc: "Los Servicios Educativos y de Salud han disminuido su velocidad de crecimiento.",
      status: "Amarillo",
      metric: "En los últimos 18 meses el crecimiento ha promediado 1.54% mientras que los previos 18 meses promediaron 1.86% (disminuyó un 0.3%).",
      checked: true,
      icon: HeartPulse,
      color: "text-amber-400"
    },
    {
      id: "sector-mayorista",
      title: "Expansión Récord en Sector Mayorista",
      desc: "El sector Mayorista ha tenido una expansión récord de los últimos 5 años.",
      status: "Verde",
      metric: "El crecimiento de los últimos 18 meses ha promediado 3.79% contra 1.62% durante los 4 años anteriores (2.17% de mayor crecimiento en casi ¼ del tiempo).",
      checked: true,
      icon: Truck,
      color: "text-emerald-400"
    },
    {
      id: "sector-detallista",
      title: "Aceleración en Sector Detallista",
      desc: "El sector detallista muestra una aceleración del crecimiento.",
      status: "Verde",
      metric: "En los últimos 18 meses ha crecido en promedio 1.32% mientras que en los previos 18 meses 0.66%, es decir, se ha más que duplicado el crecimiento.",
      checked: true,
      icon: ShoppingBag,
      color: "text-emerald-400"
    },
    {
      id: "sector-informacion",
      title: "Crecimiento Récord en Sector Información",
      desc: "La Industria de la Información ha tenido un crecimiento récord.",
      status: "Verde",
      metric: "En 18 meses ha crecido en promedio 2.27% comparado con solo 1.635% que tuvo en los 4 años previos (0.64% de diferencia en 1/4 del periodo).",
      checked: true,
      icon: Globe,
      color: "text-emerald-400"
    },
    {
      id: "ocio-recreacion",
      title: "Estabilidad en Ocio y Recreación",
      desc: "El sector del Ocio y la Recreación está básicamente estable en su crecimiento.",
      status: "Amarillo",
      metric: "En los últimos 18 meses ha crecido 1.96% mientras que en los 18 meses anteriores tuvo un promedio de 2.02%, una disminución del crecimiento del 0.06%.",
      checked: true,
      icon: Activity,
      color: "text-amber-400"
    },
    {
      id: "construccion",
      title: "Baja Sustancial en la Construcción",
      desc: "La construcción ha tenido una baja sustancial, que ya venía con esa tendencia. Aquí hay que recordar la sensibilidad a los intereses bancarios que tiene este sector que provee muchos puestos de trabajo.",
      status: "Rojo",
      metric: "En los últimos 18 meses solo ha promediado un crecimiento del 0.70% mientras que tuvo un promedio de crecimiento del 1.33% en los 18 meses anteriores, ha bajado casi la mitad en el mismo período de tiempo.",
      checked: true,
      icon: Building2,
      color: "text-rose-400"
    }
  ]);

  const toggleP3Indicator = (id: string) => {
    setP3Indicators(
      p3Indicators.map((ind) =>
        ind.id === id ? { ...ind, checked: !ind.checked } : ind
      )
    );
  };

  return (
    <div className="w-full">
      {/* --------------------- SECTION 3.01: RESUMEN SECTOR PRIVADO --------------------- */}
      {activeTab === "01" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#60A5FA] font-bold">01.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              El Núcleo Productivo de EE. UU.: El Sector Privado
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
              Soberanía de las Industrias Privadas
            </div>
            <p className="text-slate-300">
              La economía de los Estados Unidos es eminentemente privada. El sector privado representa aproximadamente el <strong>89.0% del PIB nacional</strong> ($28.35 Trillones de dólares anualizados en Q1 2026), dividiéndose en un <strong>15.8% para bienes privados</strong> y un masivo <strong>73.1% para servicios privados</strong>. Estudiar la salud de las distintas ramas del sector privado nos revela dónde radica la verdadera generación de riqueza y empleo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Line Chart 1: Sector privado como % PIB */}
            <div className="space-y-5">
              <div className="border-b border-[#262626] pb-3">
                <h4 className="text-lg font-bold text-white font-sans">
                  Contribución Global del Sector Privado al PIB de EE. UU.
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Mide el peso relativo de la industria y servicios privados frente a la actividad económica gubernamental (Serie VAPGDPPI).
                </p>
              </div>

              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl">
                <MacroeconomicChart
                  id="3_01_gdp_priv"
                  title="Sector Privado: Valor Agregado (% del PIB)"
                  description="Representa la proporción que el motor empresarial privado aporta al total del Producto Interno Bruto."
                  labels={privateIndustriesGdp.labels}
                  values={privateIndustriesGdp.values}
                  stats={privateIndustriesGdp.stats}
                  isQuarterly={true}
                />
              </div>
            </div>

            {/* Hegemonía del Dinamismo Privado */}
            <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
              <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                Hegemonía del Dinamismo Privado
              </div>
              <p className="text-slate-300 leading-relaxed">
                La contribución del sector privado se ha mantenido sumamente sólida durante todo el ciclo, oscilando entre un mínimo inicial de <strong className="text-white">87.8%</strong> en el primer trimestre de 2021 y alcanzando un máximo histórico absoluto del <strong className="text-white">89.0% del PIB</strong> en el primer trimestre de 2026. El promedio bajo la era Trump II (<strong className="text-emerald-400 font-bold">88.82%</strong>) se sitúa ligeramente por encima de la media de la era Biden (<strong className="text-white">88.64%</strong>), confirmando un entorno favorable para los negocios y una progresiva menor huella del sector estatal directo en la economía.
              </p>
            </div>

            {/* Line Chart 2: Utilidades corporativas (Serie CP) */}
            <div className="space-y-5">
              <div className="border-b border-[#262626] pb-3">
                <h4 className="text-lg font-bold text-white font-sans">
                  Utilidades Corporativas Después de Impuestos (Serie CP)
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Mide el volumen de las utilidades corporativas después de impuestos en dólares corrientes (sin ajuste de inventario y consumo de capital).
                </p>
              </div>

              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_01_corp_profits"
                  title="Utilidades Corporativas después de Impuestos (Miles de Millones USD)"
                  description="Indicador de rentabilidad y liquidez neta acumulada por el tejido corporativo nacional en valor nominal absoluto."
                  labels={corporateProfits.labels}
                  values={corporateProfits.values}
                  stats={corporateProfits.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Comportamiento del Excedente Operativo
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Las utilidades corporativas después de impuestos alcanzaron un récord histórico de <strong className="text-white">$3,950.7 Mil Millones</strong> en el primer trimestre de 2026, rebotando firmemente desde los mínimos de fines de 2022 (<strong className="text-white">$2,891.8 Mil Millones</strong>). El promedio consolidado bajo la administración Biden se ubicó en <strong className="text-[#60A5FA] font-semibold">$3,161.44 Mil Millones</strong>, marcando una trayectoria de crecimiento de mediano plazo que continuó acelerándose durante la presidencia de Trump II hasta promediar <strong className="text-emerald-400 font-bold">$3,605.18 Mil Millones</strong>.
                  </p>
                </div>

                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Análisis Detallado de Actividad
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Cuando el sector privado crece y sus utilidades también, impactan positivamente los puestos de trabajo y la expansión de la economía, cubriendo a los accionistas y a los consumidores. Sin embargo esta visión a nivel nacional no ayuda a contestar adecuadamente nuestra pregunta: ¿Cómo vamos?. Para mejorar esta visión debemos bajar a nivel sectorial.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Part: GDP & Employment Shares */}
            <div className="grid grid-cols-1 gap-8">
              {/* GDP share */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-[#60A5FA] font-mono font-bold text-xs">
                  <PieChart className="w-4 h-4" />
                  <span>PARTICIPACIÓN EN EL PIB (T1 2026)</span>
                </div>
                <h4 className="text-base font-bold text-white font-sans">Contribución al PIB por Sector Privado</h4>
                <p className="text-xs text-[#94A3B8]">
                  Las industrias privadas generan el 89.0% de la producción total nacional. Los servicios de finanzas y propiedades lideran la escala.
                </p>
                <div className="space-y-3 pt-2">
                  {gdpShareQ12026.map((sec, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-200 font-medium text-xs sm:text-sm leading-normal">{sec.name}</span>
                        <span className="font-mono font-semibold text-[#60A5FA] ml-2 shrink-0">{sec.value}%</span>
                      </div>
                      <div className="w-full bg-[#0E0E0E] rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#60A5FA] to-[#c084fc] h-1.5 rounded-full"
                          style={{ width: `${(sec.value / 25) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-[#262626] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono text-slate-400">
                    <div className="flex justify-between sm:justify-start gap-4">
                      <span>Total Sectores Privados:</span>
                      <span className="text-white font-bold">88.8% del PIB</span>
                    </div>
                    <a
                      href="https://www.bea.gov/data/gdp/gdp-industry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#60A5FA] hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-auto hover:underline"
                    >
                      Fuente Oficial: BEA (GDP by Industry) <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Explicación de focalización de sectores */}
              <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                  Concentración Sectorial y Focalización
                </div>
                <p className="text-slate-300">
                  Los primeros 7, de los 14 sectores del gráfico anterior, constituyen un poco más del 80% del total del aporte del Sector Privado. Eso indica una razonable distribución del aporte privado al PIB. Nos enfocaremos en ellos para atender a lo más relevante.
                </p>
              </div>

              {/* Explicación del aspecto humano / empleo */}
              <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  El Factor Humano y Laboral
                </div>
                <p className="text-slate-300">
                  Es muy importante considerar el aspecto humano en esta visión. El número de trabajadores que cada sector ocupa es muy importante.
                </p>
              </div>

              {/* Employment share */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs">
                  <Users className="w-4 h-4" />
                  <span>EMPLEO PRIVADO (MARZO DE 2026)</span>
                </div>
                <h4 className="text-base font-bold text-white font-sans">Nómina por Sectores Privados</h4>
                <p className="text-xs text-[#94A3B8]">
                  Distribución de los más de 137 millones de puestos de trabajo privados. El sector Salud y Educación representa el mayor empleador físico.
                </p>
                <div className="space-y-3 pt-2">
                  {employmentBySectorMarch2026.map((sec, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-200 font-medium text-xs sm:text-sm leading-normal">{sec.name}</span>
                        <span className="font-mono font-semibold text-emerald-400 ml-2 shrink-0">{sec.value}M</span>
                      </div>
                      <div className="w-full bg-[#0E0E0E] rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full"
                          style={{ width: `${(sec.value / 30) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-[#262626] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono text-slate-400">
                    <div className="flex justify-between sm:justify-start gap-4">
                      <span>Total Empleo Privado:</span>
                      <span className="text-white font-bold">137.6M de Empleos</span>
                    </div>
                    <a
                      href="https://www.bls.gov/ces/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 self-start sm:self-auto hover:underline"
                    >
                      Fuente Oficial: BLS (Payroll Employment) <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Explicación de focalización de empleo */}
              <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
                <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Análisis y Focalización Laboral
                </div>
                <p className="text-slate-300">
                  De manera similar como lo hicimos en el aporte al PIB, analizaremos los sectores que constituyen el 80% de los trabajadores ocupados. A los 7 sectores que constituyen el 80% del aporte privado le agregaremos otros dos sectores que son parte de la contribución del 80% de la contribución laboral: Artes/Entretenimiento y Construcción.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.02: FINANZAS Y PROPIEDADES --------------------- */}
      {activeTab === "02" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">02.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Finanzas, Seguros, Real Estate y Alquileres (VAFIRL)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              El Gigante de la Economía de Servicios • Participación de 21.7% del PIB
            </div>
            <p className="text-slate-300">
              Esta sección detalla el comportamiento del sector financiero, de seguros e inmobiliario. Al constituir el mayor bloque sectorial de la economía de los EE. UU., su marcha determina la solvencia crediticia nacional y la estabilidad habitacional de los ciudadanos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado de Finanzas, Seguros, Inmuebles & Alquiler (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_02_fin_abs"
                  title="Finanzas, Seguros, Real Estate & Alquiler: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR). Indica el volumen de producción bruta generada."
                  labels={financeData.labels}
                  values={financeData.values}
                  stats={financeData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Trayectoria del Bloque Financiero e Inmobiliario
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Este sector ha registrado una expansión ininterrumpida de su masa monetaria productiva, subiendo de <strong className="text-white">$4,829.5 Mil Millones</strong> en Q1 2021 a <strong className="text-white">$6,907.5 Mil Millones</strong> en Q1 2026. El incremento neto acumulado en este período es de un espectacular <strong className="text-emerald-400 font-bold">+$2,078.0 Mil Millones</strong> (un incremento relativo del <strong className="text-emerald-400 font-bold">+43.0%</strong>). El promedio en Trump II alcanzó los <strong className="text-emerald-400 font-bold">$6,725.82 Mil Millones</strong> anualizados, un volumen significativamente superior a la media de la administración Biden (<strong className="text-white">$5,658.70 Mil Millones</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_02_fin_gro"
                  title="Crecimiento Intertrimestral de Finanzas, Seguros & Real Estate"
                  description="Variación porcentual trimestral (%). Muestra el impulso incremental y ritmo de aceleración."
                  labels={financeData.growthLabels}
                  values={financeData.growthValues}
                  stats={financeData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Moderación de Tasas Incrementales
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    A pesar de la sólida marcha nominal, las tasas de crecimiento intertrimestral han experimentado una desaceleración gradual debida en gran parte a la política restrictiva de tasas de interés. El promedio de crecimiento trimestral bajo la administración Biden fue del <strong className="text-white">1.92%</strong> (alcanzando un máximo de <strong className="text-white">+3.29%</strong> en Q4 2021). En contraste, los últimos 5 trimestres de la administración actual registran una media de crecimiento trimestral del <strong className="text-rose-400 font-bold">1.47%</strong>, finalizando el último período de Q1 2026 en <strong className="text-rose-400 font-bold">1.07%</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.03: SERVICIOS PROFESIONALES --------------------- */}
      {activeTab === "03" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#60A5FA] font-bold">03.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Servicios Profesionales y de Negocios (VAPBS)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
              El Motor del Conocimiento de Alto Valor • 13.1% del PIB y 22.4M de Empleos
            </div>
            <p className="text-slate-300">
              Abarca la asesoría legal, servicios de contabilidad, diseño de sistemas de computación, consultoría científica y de ingeniería. Es un excelente barómetro de la sofisticación e inversión tecnológica de las empresas estadounidenses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado de Servicios Profesionales y de Negocios
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_03_prof_abs"
                  title="Servicios Profesionales y de Negocios: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={professionalServicesData.labels}
                  values={professionalServicesData.values}
                  stats={professionalServicesData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Crecimiento de la Industria de Consultoría y Tecnología
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Los servicios profesionales se expandieron de un valor de <strong className="text-white">$2,936.0 Mil Millones</strong> en Q1 2021 a un máximo de <strong className="text-white">$4,160.3 Mil Millones</strong> en Q1 2026, lo que representa un espectacular avance neto de <strong className="text-emerald-400 font-bold">+$1,224.3 Mil Millones</strong> (un incremento total acumulado del <strong className="text-emerald-400 font-bold">+41.7%</strong>). La media en Trump II de <strong className="text-emerald-400 font-bold">$4,050.76 Mil Millones</strong> supera sustancialmente el promedio bajo el mandato de Biden (<strong className="text-white">$3,466.60 Mil Millones</strong>), afianzando el rol de este sector en la estructura laboral nacional.
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_03_prof_gro"
                  title="Crecimiento Intertrimestral de Servicios Profesionales y de Negocios"
                  description="Variación porcentual trimestral (%)."
                  labels={professionalServicesData.growthLabels}
                  values={professionalServicesData.growthValues}
                  stats={professionalServicesData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Normalización del Ritmo Expansivo
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Las tasas intertrimestrales reflejan que, tras la formidable fase expansiva de 2021 y 2022 (con picos trimestrales superiores al <strong className="text-white">+3.5%</strong>), el sector se ha estabilizado en un cauce de crecimiento más moderado y maduro. El promedio intertrimestral bajo la era Biden se ubicó en <strong className="text-white">1.86%</strong>, mientras que en la actual gestión la media se sitúa en <strong className="text-rose-400 font-bold">1.26%</strong>, mostrando resiliencia en terreno positivo, cerrando el primer trimestre de 2026 en <strong className="text-emerald-400 font-bold">1.19%</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.04: MANUFACTURA --------------------- */}
      {activeTab === "04" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">04.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              La Industria Manufacturera (VAMA)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Pilar Industrial Nacional • 9.4% del PIB y 12.6M de Empleos
            </div>
            <p className="text-slate-300">
              Abarca la fabricación de bienes duraderos (automóviles, maquinaria, metalúrgicos, semiconductores) y no duraderos (químicos, alimentos, textiles). Es el foco central de los esfuerzos de relocalización de cadenas de suministro (reshoring) y fomento fabril doméstico.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado de la Manufactura (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_04_mfg_abs"
                  title="Manufactura: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={manufacturingData.labels}
                  values={manufacturingData.values}
                  stats={manufacturingData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Trayectoria de la Producción Industrial
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La manufactura estadounidense creció de un valor de <strong className="text-white">$2,303.9 Mil Millones</strong> en Q1 2021 a <strong className="text-white">$3,000.4 Mil Millones</strong> en Q1 2026, registrando un avance neto total de <strong className="text-emerald-400 font-bold">+$696.5 Mil Millones</strong> (<strong className="text-emerald-400 font-bold">+30.2%</strong>). El promedio bajo el período de Trump II (<strong className="text-emerald-400 font-bold">$2,917.26 Mil Millones</strong>) supera holgadamente al de la era Biden (<strong className="text-white">$2,695.44 Mil Millones</strong>), reflejando un robusto volumen general a pesar del estancamiento que sufrió el sector a lo largo de 2024.
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_04_mfg_gro"
                  title="Crecimiento Intertrimestral de la Manufactura"
                  description="Variación porcentual trimestral (%)."
                  labels={manufacturingData.growthLabels}
                  values={manufacturingData.growthValues}
                  stats={manufacturingData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Resiliencia y Rebote tras el Ajuste Fabril
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La manufactura muestra una alta sensibilidad cíclica. Bajo la era Biden, la tasa promedio de crecimiento trimestral fue del <strong className="text-white">1.53%</strong>, pero el sector sufrió una severa contracción e inicios de la actual gestión, marcando un mínimo de <strong className="text-rose-400 font-bold">-2.60%</strong> en Q1 2025. No obstante, las medidas de desregulación y la reactivación de cadenas de capital han impulsado un firme rebote, cerrando el primer trimestre de 2026 con una expansión positiva del <strong className="text-emerald-400 font-bold">+1.32%</strong>, consolidando una recuperación efectiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.05: SERVICIOS EDUCATIVOS Y DE SALUD --------------------- */}
      {activeTab === "05" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#60A5FA] font-bold">05.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Servicios Educativos, Salud y Asistencia Social (VAESHS)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
              El Cojín Estructural Defensivo de la Nación • 8.8% del PIB y el Mayor Empleador Físico (27.8M de Plazas)
            </div>
            <p className="text-slate-300">
              Comprende a hospitales, clínicas médicas, servicios de asistencia social e instituciones de educación técnica y superior. Al poseer una demanda inelástica, su volumen tiende a expandirse de manera sumamente predecible, actuando como un cojín que absorbe choques cíclicos en la economía familiar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado de Servicios Educativos y de Salud (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_05_edu_abs"
                  title="Servicios Educativos y de Salud: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={educationHealthData.labels}
                  values={educationHealthData.values}
                  stats={educationHealthData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Comportamiento del Bloque de Asistencia Social y Salud
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Este sector ha experimentado un crecimiento sumamente consistente, libre de contracciones de inventario, escalando desde <strong className="text-white">$1,961.2 Mil Millones</strong> en Q1 2021 a <strong className="text-white">$2,819.6 Mil Millones</strong> en Q1 2026. Este incremento representa un avance neto de <strong className="text-emerald-400 font-bold">+$858.4 Mil Millones</strong>, equivalente a una expansión acumulada del <strong className="text-emerald-400 font-bold">+43.8%</strong>. El promedio consolidado bajo Trump II se situó en <strong className="text-emerald-400 font-bold">$2,738.50 Mil Millones</strong> anualizados, superando notablemente el promedio de la administración anterior (<strong className="text-white">$2,266.88 Mil Millones</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_05_edu_gro"
                  title="Crecimiento Intertrimestral de Servicios Educativos y de Salud"
                  description="Variación porcentual trimestral (%)."
                  labels={educationHealthData.growthLabels}
                  values={educationHealthData.growthValues}
                  stats={educationHealthData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Estabilidad Expansiva Ininterrumpida
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Las tasas de crecimiento intertrimestral demuestran la naturaleza acíclica de este bloque. Su crecimiento se mantuvo en rangos positivos durante todos los trimestres registrados sin excepción. El crecimiento promedio trimestral bajo la administración Biden fue de un sólido <strong className="text-white">1.93%</strong>, mientras que con la administración Trump II promedia un constante <strong className="text-emerald-400 font-bold">1.54%</strong>, cerrando el último trimestre en <strong className="text-emerald-400 font-bold">1.31%</strong> de expansión trimestral efectiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.06: COMERCIO MAYORISTA --------------------- */}
      {activeTab === "06" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">06.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              El Comercio Mayorista (VAW)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Distribución y Logística de Masa • 6.4% del PIB y 6.1M de Empleos
            </div>
            <p className="text-slate-300">
              Registra el valor agregado de los intermediarios que distribuyen mercancías en grandes lotes a minoristas, industrias u otros intermediarios. Su desempeño refleja el reabastecimiento de inventarios y la solidez de la cadena logística nacional.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado del Comercio Mayorista (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_06_whl_abs"
                  title="Comercio Mayorista: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={wholesaleData.labels}
                  values={wholesaleData.values}
                  stats={wholesaleData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Robustez de los Canales de Distribución de Masa
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    El comercio mayorista pasó de un nivel de <strong className="text-white">$1,363.3 Mil Millones</strong> en Q1 2021 a <strong className="text-white">$2,041.8 Mil Millones</strong> en Q1 2026, lo que representa un masivo avance absoluto de <strong className="text-emerald-400 font-bold">+$678.5 Mil Millones</strong>, equivalente a una notable expansión acumulada del <strong className="text-emerald-400 font-bold">+49.8%</strong>. El promedio consolidado bajo la actual gestión alcanza los <strong className="text-emerald-400 font-bold">$1,975.40 Mil Millones</strong>, marcadamente por encima del promedio correspondiente a la administración Biden (<strong className="text-white">$1,602.07 Mil Millones</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_06_whl_gro"
                  title="Crecimiento Intertrimestral del Comercio Mayorista"
                  description="Variación porcentual trimestral (%)."
                  labels={wholesaleData.growthLabels}
                  values={wholesaleData.growthValues}
                  stats={wholesaleData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Estabilidad en la Rotación de Mercancías
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Las variaciones intertrimestrales confirman un ritmo de crecimiento constante que se ha acelerado y normalizado tras el boom de inventarios preventivos de 2021-2022 (con picos de <strong className="text-white">+4.75%</strong>). El promedio de crecimiento trimestral con Biden fue del <strong className="text-white">1.62%</strong>, mientras que la administración actual promedia un <strong className="text-emerald-400 font-bold">3.79%</strong>. El sector cerró el primer trimestre de 2026 con un sólido incremento intertrimestral positivo de <strong className="text-emerald-400 font-bold">+1.64%</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.07: COMERCIO MINORISTA --------------------- */}
      {activeTab === "07" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#60A5FA] font-bold">07.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              El Comercio Minorista o Detallista (VAR)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
              Termómetro Directo del Consumo Familiar • 6.2% del PIB y 15.4M de Empleos
            </div>
            <p className="text-slate-300">
              Registra las ventas directas al público en supermercados, tiendas de departamentos, comercio electrónico y concesionarias. Constituye la fase de contacto final de la cadena de consumo privado nacional.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado del Comercio Detallista (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_07_rtl_abs"
                  title="Comercio Detallista: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={retailData.labels}
                  values={retailData.values}
                  stats={retailData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Expansión de los Puntos de Venta al Consumidor
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    El comercio detallista ha escalado sostenidamente de <strong className="text-white">$1,478.6 Mil Millones</strong> en el primer trimestre de 2021 a <strong className="text-white">$1,989.6 Mil Millones</strong> en el primer trimestre de 2026. La expansión neta es de <strong className="text-emerald-400 font-bold">+$511.0 Mil Millones</strong>, equivalentes a un incremento relativo del <strong className="text-emerald-400 font-bold">+34.6%</strong>. El promedio consolidado trimestral bajo Trump II alcanzó un récord histórico de <strong className="text-emerald-400 font-bold">$1,935.34 Mil Millones</strong>, superando notablemente el promedio de la administración Biden (<strong className="text-white">$1,703.46 Mil Millones</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_07_rtl_gro"
                  title="Crecimiento Intertrimestral del Comercio Detallista"
                  description="Variación porcentual trimestral (%)."
                  labels={retailData.growthLabels}
                  values={retailData.growthValues}
                  stats={retailData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Dinamismo de Ventas y Normalización Post-Pandemia
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Las tasas intertrimestrales reflejan el retorno a patrones saludables de consumo. Tras las notables tasas de crecimiento de la era Biden en 2021 (con picos de hasta el <strong className="text-white">+5.09%</strong> intertrimestral), el sector experimentó una moderación que llegó a terreno negativo hacia fines de 2024 (registrando un <strong className="text-white">-0.13%</strong>). No obstante, la administración actual registra una reactivación constante, alcanzando una tasa promedio de crecimiento de <strong className="text-[#60A5FA] font-semibold">1.47%</strong> y cerrando el primer trimestre de 2026 en un robusto <strong className="text-emerald-400 font-bold">+1.52%</strong> de incremento trimestral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.08: SECTOR INFORMACIÓN --------------------- */}
      {activeTab === "08" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">08.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              La Industria de la Información (VAI)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Soberanía de Telecomunicaciones, Software y Medios • 5.6% del PIB y 2.8M de Empleos
            </div>
            <p className="text-slate-300">
              Engloba a las editoriales de software, industrias de telecomunicaciones, procesamiento de datos, transmisión de radio y televisión, servicios de hosting de internet y plataformas de streaming digital. Es uno de los focos de mayor aceleración tecnológica del país.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado de la Industria de la Información (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_08_inf_abs"
                  title="Industria de la Información: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={informationData.labels}
                  values={informationData.values}
                  stats={informationData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Expansión de la Economía Digital y la IA
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    El sector de información y tecnología ha avanzado sustancialmente, subiendo de <strong className="text-white">$1,262.4 Mil Millones</strong> en el primer trimestre de 2021 a <strong className="text-white">$1,787.0 Mil Millones</strong> en el primer trimestre de 2026. Esto representa una imponente expansión neta absoluta de <strong className="text-emerald-400 font-bold">+$524.6 Mil Millones</strong>, equivalente a un <strong className="text-emerald-400 font-bold">+41.6%</strong> de cambio total acumulado. El promedio trimestral bajo Trump II alcanzó los <strong className="text-emerald-400 font-bold">$1,713.44 Mil Millones</strong>, muy por encima de la media de la administración Biden (<strong className="text-white">$1,445.03 Mil Millones</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_08_inf_gro"
                  title="Crecimiento Intertrimestral de la Industria de la Información"
                  description="Variación porcentual trimestral (%)."
                  labels={informationData.growthLabels}
                  values={informationData.growthValues}
                  stats={informationData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Aceleración de la Tasa Promedio de Crecimiento
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La industria de la información es uno de los contados sectores que registran una **aceleración de su tasa de crecimiento promedio** bajo la gestión actual. Con Biden, el sector creció a un respetable promedio trimestral de <strong className="text-white">1.63%</strong> (sufriendo un bache de <strong className="text-rose-400 font-bold">-1.12%</strong> en Q1 2022). Sin embargo, bajo el actual mandato, impulsado por el auge de la Inteligencia Artificial y la expansión en infraestructura en la nube, el crecimiento promedio trimestral se aceleró hasta alcanzar el <strong className="text-emerald-400 font-bold">2.27%</strong>, con un pico de <strong className="text-emerald-400 font-bold">+3.15%</strong> en el segundo trimestre de 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.09: ARTE Y ENTRETENIMIENTO --------------------- */}
      {activeTab === "09" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#60A5FA] font-bold">09.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Artes, Entretenimiento, Recreación y Alimentos (VAAER)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#60A5FA] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
              La Economía del Disfrute y Turismo • 4.3% del PIB y 17.0M de Empleos (Tercer Mayor Empleador)
            </div>
            <p className="text-slate-300">
              Abarca cines, teatros, museos, parques temáticos, casinos, eventos deportivos, hoteles y restaurantes. Es el sector que mejor capta la disponibilidad de ingresos discrecionales de los ciudadanos para ocio y esparcimiento.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado de Recreación, Ocio y Alimentos (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_09_ent_abs"
                  title="Ocio, Recreación, Alojamiento & Alimentación: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={artsEntertainmentData.labels}
                  values={artsEntertainmentData.values}
                  stats={artsEntertainmentData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    El Formidable Auge de la Economía de Ocio
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Este sector ha experimentado un crecimiento explosivo en el lustro analizado, despegando desde <strong className="text-white">$191.8 Mil Millones</strong> en Q1 2021 (severamente deprimido por el impacto de los confinamientos de la pandemia) hasta alcanzar los <strong className="text-white">$369.5 Mil Millones</strong> en Q1 2026. Este incremento neto es de <strong className="text-emerald-400 font-bold">+$177.7 Mil Millones</strong> (una colosal expansión acumulada de <strong className="text-emerald-400 font-bold">+92.6%</strong>). El promedio bajo la era actual de Trump II promedia <strong className="text-emerald-400 font-bold">$358.58 Mil Millones</strong> anualizados, frente al promedio de <strong className="text-white">$277.51 Mil Millones</strong> en Biden.
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_09_ent_gro"
                  title="Crecimiento Intertrimestral de Recreación y Alimentación"
                  description="Variación porcentual trimestral (%)."
                  labels={artsEntertainmentData.growthLabels}
                  values={artsEntertainmentData.growthValues}
                  stats={artsEntertainmentData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    De un Rebote Vertiginoso a la Madurez y Estabilidad
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La dinámica del sector de esparcimiento refleja con claridad la reapertura nacional. Bajo la era Biden, el crecimiento promedio intertrimestral fue de un extraordinario <strong className="text-white">3.80%</strong> (con un pico inicial del <strong className="text-white">+8.84%</strong> en Q3 2021) debido al colosal rebote post-confinamientos. En los últimos trimestres registrados bajo la era actual, la tasa se ha normalizado en un cauce maduro, promediando un saludable <strong className="text-[#60A5FA] font-semibold">1.63%</strong> trimestral y cerrando en el primer trimestre de 2026 en <strong className="text-emerald-400 font-bold">+2.30%</strong> de expansión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.10: CONSTRUCCIÓN --------------------- */}
      {activeTab === "10" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-[#FB7185] font-bold">10.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              La Industria de la Construcción (VAC)
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185] animate-pulse"></span>
              Infraestructura Física y Edificación • 4.3% del PIB y 8.3M de Empleos
            </div>
            <p className="text-slate-300">
              Registra la edificación de viviendas familiares, complejos comerciales, fábricas industriales y obras públicas de infraestructura vial y energética. Muestra la respuesta de los desarrolladores inmobiliarios ante las condiciones de crédito y el crecimiento demográfico.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chart 1: Absolute Value */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Valor Agregado de la Construcción (Valores Absolutos)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <MacroeconomicChart
                  id="3_10_con_abs"
                  title="Construcción: Valor Agregado"
                  description="Miles de millones de dólares anualizados (SAAR)."
                  labels={constructionData.labels}
                  values={constructionData.values}
                  stats={constructionData.stats}
                  isQuarterly={true}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Trayectoria de la Formación de Infraestructura
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La construcción en los Estados Unidos creció de <strong className="text-white">$995.8 Mil Millones</strong> en Q1 2021 a <strong className="text-white">$1,358.6 Mil Millones</strong> en Q1 2026. El crecimiento total absoluto acumulado de esta rama productiva en el lustro asciende a <strong className="text-emerald-400 font-bold">+$362.8 Mil Millones</strong> (<strong className="text-emerald-400 font-bold">+36.4%</strong>). La media de producción sectorial bajo el actual mandato se ubica en <strong className="text-emerald-400 font-bold">$1,344.78 Mil Millones</strong> trimestrales anualizados, frente al promedio registrado con Biden (<strong className="text-white">$1,163.61 Mil Millones</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Chart 2: Q-o-Q Growth */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white font-sans border-b border-[#262626] pb-2">
                Tasa de Crecimiento Intertrimestral (%)
              </h4>
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-5">
                <SectorGrowthChart
                  id="3_10_con_gro"
                  title="Crecimiento Intertrimestral de la Construcción"
                  description="Variación porcentual trimestral (%)."
                  labels={constructionData.growthLabels}
                  values={constructionData.growthValues}
                  stats={constructionData.growthStats}
                />
                <div className="bg-[#0D0D0D] border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
                  <div className="text-[#FB7185] font-mono font-bold uppercase tracking-widest mb-2 text-xs">
                    Impacto del Costo de Capital en la Actividad de Construcción
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La construcción residencial y de infraestructura posee una altísima dependencia del costo del crédito. Durante los primeros trimestres de la era Biden, la construcción promedió un crecimiento trimestral del <strong className="text-white">1.86%</strong> (con un máximo del <strong className="text-white">+4.70%</strong> a fines de 2022). No obstante, la persistencia de elevadas tasas hipotecarias ha ralentizado el avance físico del sector, registrando una media trimestral de apenas <strong className="text-rose-400 font-bold">0.41%</strong> bajo Trump II, habiendo experimentado un crecimiento mínimo de <strong className="text-rose-400 font-bold">0.04%</strong> a fines de 2025, para luego rebotar en el primer trimestre de Q1 2026 en un <strong className="text-emerald-400 font-bold">+1.03%</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --------------------- SECTION 3.11: BALANCE Y CONCLUSIÓN --------------------- */}
      {activeTab === "11" && (
        <section className="mb-14 animate-fade-in space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-mono text-emerald-500 font-bold">11.</span>
            <h3 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight font-sans">
              Balance y Conclusión de la Actividad Sectorial Privada
            </h3>
            <div className="flex-1 border-b border-dashed border-[#262626]"></div>
          </div>

          {/* Context Card */}
          <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 mb-8 shadow-inner text-sm md:text-base text-[#E2E8F0] leading-relaxed font-sans">
            <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Síntesis de Desempeño • El Estado de las Industrias Privadas
            </div>
            <p className="text-slate-300 leading-relaxed">
              El análisis de la matriz de diagnóstico sectorial privado de 12 indicadores revela una dinámica asimétrica pero sumamente sólida: el núcleo productivo mayoritario (<strong>Verde</strong>) goza de una salud expansiva sobresaliente, sustentada por una presencia sectorial balanceada, la alineación general entre aporte al PIB y empleo, y expansiones récord en los sectores de Información, Comercio (Mayorista y Detallista) y Finanzas. En un plano intermedio, sectores clave como Servicios Profesionales, Manufactura, Salud/Educación y Ocio muestran un suave debilitamiento o desaceleración marginal (<strong>Amarillo</strong>) en sus tasas de crecimiento históricas. Finalmente, el sector de la Construcción experimenta una baja sustancial y persistente (<strong>Rojo</strong>), evidenciando su extrema sensibilidad al endurecimiento del costo del crédito y a los elevados intereses bancarios.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Matriz de Diagnóstico Sectorial Privado (Interactivo)</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {p3Indicators.map((ind) => {
                const IconComp = ind.icon;
                const isVerde = ind.status === "Verde";
                const isAmarillo = ind.status === "Amarillo";
                const isRojo = ind.status === "Rojo";

                const cardStyle = ind.checked
                  ? isVerde
                    ? "bg-[#0E0E0E] border-emerald-500/30 hover:border-emerald-500/50 shadow-inner"
                    : isAmarillo
                      ? "bg-[#0E0E0E] border-amber-500/30 hover:border-amber-500/50 shadow-inner"
                      : "bg-[#0E0E0E] border-rose-500/30 hover:border-rose-500/50 shadow-inner"
                  : "bg-[#0A0A0A]/50 border-[#262626] hover:border-[#404040] opacity-50";

                const checkboxStyle = ind.checked
                  ? isVerde
                    ? "bg-emerald-500 border-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : isAmarillo
                      ? "bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20"
                      : "bg-rose-500 border-rose-500 text-black shadow-lg shadow-rose-500/20"
                  : "border-slate-600 bg-transparent text-transparent";

                const badgeStyle = ind.checked
                  ? isVerde
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : isAmarillo
                      ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                  : "bg-slate-900/80 text-slate-500 border-slate-800";

                const metricStyle = ind.checked
                  ? isVerde
                    ? "text-emerald-400"
                    : isAmarillo
                      ? "text-amber-400"
                      : "text-rose-400"
                  : "text-slate-500";

                return (
                  <div
                    key={ind.id}
                    onClick={() => toggleP3Indicator(ind.id)}
                    className={`flex flex-col md:flex-row md:items-stretch justify-between p-5 md:p-6 rounded-xl border transition-all cursor-pointer ${cardStyle}`}
                  >
                    <div className="w-full md:w-1/2 flex items-start gap-4 pr-0 md:pr-6">
                      <div className="mt-1 shrink-0">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all ${checkboxStyle}`}>
                          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <IconComp className={`w-4 h-4 ${ind.color}`} />
                          <span className={`text-base font-bold tracking-tight transition-colors font-sans ${
                            ind.checked ? "text-white" : "text-slate-500"
                          }`}>
                            {ind.title}
                          </span>
                          <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${badgeStyle}`}>
                            {ind.status}
                          </span>
                        </div>
                        <p className={`text-sm text-slate-300 leading-relaxed font-sans transition-colors ${
                          ind.checked ? "" : "text-slate-500"
                        }`}>
                          {ind.desc}
                        </p>
                      </div>
                    </div>

                    {/* Supporting Metric */}
                    <div className="w-full md:w-1/2 mt-4 md:mt-0 pl-10 md:pl-8 border-t md:border-t-0 md:border-l border-[#262626] pt-4 md:pt-0 flex flex-col justify-start">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-2 leading-none font-mono">
                        Métrica de Respaldo Sectorial
                      </span>
                      <span className={`text-sm font-medium tracking-normal block leading-relaxed ${metricStyle}`}>
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
                &ldquo;Esto es una visión parcial de cómo vamos y luce positiva. ¿Tenemos una crisis de affordability? El próximo artículo será el final de la serie. Trataremos de responder la pregunta a nivel estadal y local tomando elementos como impuestos y regulaciones. El 25 de julio lo tendremos.&rdquo;
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
    </div>
  );
}
