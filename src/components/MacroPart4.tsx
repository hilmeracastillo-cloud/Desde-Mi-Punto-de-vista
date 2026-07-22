import React, { useState } from "react";
import {
  MapPin,
  Building,
  Home,
  Fuel,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  CheckCircle2,
  Shield,
  FileText,
  PieChart,
  Award,
  Sparkles,
  HelpCircle,
  Info,
  ChevronRight,
  ArrowRightLeft,
  Scale,
  Building2,
  Globe,
  Coins,
  Percent,
  Compass,
  Briefcase
} from "lucide-react";
import { MigrationLineChart, MigrationSeries } from "./MigrationLineChart";
import {
  STATES_RPP_2024,
  STATES_POLITICS_2016_2026,
  MSA_RPP_2024,
  MSA_POLITICS,
  GASOLINE_TAX_DATA,
  GASOLINE_GROUP_AVERAGES,
  HOUSING_TENURE_2025,
  RENT_RPP_BEA,
  CONSTRUCTION_REGULATORY_PRESSURE,
  PROPERTY_TAX_DATA,
  PROPERTY_TAX_GROUP_AVERAGES,
  SALES_INCOME_TAX_2026,
  SALES_INCOME_GROUP_AVERAGES,
  NET_MIGRATION_HIGH_COST,
  NET_MIGRATION_INTERMEDIATE_COST,
  NET_MIGRATION_LOW_COST,
  CUMULATIVE_MIGRATION_STATES,
  FAMILY_BUDGET_WEIGHTS,
  PRIORITY_REFORMS
} from "../data_part4";

interface MacroPart4Props {
  activeTab: string;
}

export function MacroPart4({ activeTab }: MacroPart4Props) {
  // State for interactive reform checklist in Tab 08
  const [reforms, setReforms] = useState(
    PRIORITY_REFORMS.map((ref) => ({ ...ref, checked: true }))
  );

  const toggleReform = (prioridad: number) => {
    setReforms((prev) =>
      prev.map((item) =>
        item.prioridad === prioridad ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const getBadgeStyle = (cat: "Alto" | "Intermedio" | "Bajo" | "Positiva" | "Negativa") => {
    switch (cat) {
      case "Alto":
      case "Negativa":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      case "Intermedio":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "Bajo":
      case "Positiva":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <div className="space-y-10">
      {/* ------------------ TAB 01: ESTADOS Y RPP ------------------ */}
      {activeTab === "01" && (
        <section className="space-y-8 animate-fadeIn">
          {/* Header */}
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4" />
              Sección 1.1 • Desglose Subnacional
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              USA no es un país, son 50 países: Los Estados
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              Una de las maravillas de los Estados Unidos es su organización federal. Tres niveles de gobierno
              (federal, estadal y local) gobiernan con independencia económica real. El galón de gasolina, el costo
              del pie cuadrado de construcción, las regulaciones, el impuesto predial, el impuesto al consumo y a los
              ingresos forman la carga que enfrentan las familias.
            </p>
          </div>

          {/* Explanation Box: What is RPP? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                Concepto Técnico: RPP (Regional Price Parity)
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                ¿Qué es el Regional Price Parity de la BEA?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                El <strong>Regional Price Parity (RPP)</strong>, calculado por la Oficina de Análisis Económico (BEA),
                compara el nivel relativo de precios entre estados y áreas metropolitanas para un mismo año.
                El promedio nacional se fija en <strong>100</strong>.
              </p>
              <ul className="text-xs text-slate-400 space-y-2 font-mono">
                <li className="flex items-center justify-between bg-[#0A0A0A] p-2 rounded border border-[#262626]">
                  <span>RPP = 100</span>
                  <span className="text-slate-200">Precios iguales al promedio nacional</span>
                </li>
                <li className="flex items-center justify-between bg-[#0A0A0A] p-2 rounded border border-[#262626]">
                  <span>RPP = 110</span>
                  <span className="text-rose-400">~10% más caro que el promedio</span>
                </li>
                <li className="flex items-center justify-between bg-[#0A0A0A] p-2 rounded border border-[#262626]">
                  <span>RPP = 88</span>
                  <span className="text-emerald-400">~12% más económico que el promedio</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  <Coins className="w-4 h-4" />
                  Efecto en el Poder Adquisitivo
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  Ajuste de Ingreso por Precios Regionales
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Un salario nominal de <strong>$100,000</strong> no rinde igual en todas las regiones:
                </p>
                <div className="mt-4 p-4 bg-[#0A0A0A] border border-[#262626] rounded-lg text-center space-y-2 font-mono text-xs">
                  <p className="text-slate-400">Fórmula de Ingreso Ajustado:</p>
                  <p className="text-amber-300 font-bold text-sm sm:text-base">
                    Ingreso Ajustado = Ingreso Nominal / (RPP / 100)
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                    <div className="p-2.5 bg-[#141414] rounded border border-rose-500/20">
                      <span className="text-slate-400 block text-[10px]">En RPP 115 (Alto costo)</span>
                      <span className="text-rose-400 font-bold">$86,957</span>
                    </div>
                    <div className="p-2.5 bg-[#141414] rounded border border-emerald-500/20">
                      <span className="text-slate-400 block text-[10px]">En RPP 90 (Bajo costo)</span>
                      <span className="text-emerald-400 font-bold">$111,111</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                Nota: BEA evalúa precios de alquiler de vivienda, bienes, servicios y utilities. California tenía RPP general de 110.7, pero RPP de alquiler de 154.3 (+54.3% sobre el promedio).
              </p>
            </div>
          </div>

          {/* Table 1: State Selection */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Tabla 1. Muestra de 15 Estados por RPP General 2024 (BEA)
              </h3>
              <span className="text-xs font-mono text-slate-400">Fuente: BEA (Julio 2026)</span>
            </div>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Categoría</th>
                    <th className="p-3">Rango RPP</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">RPP 2024</th>
                    <th className="p-3 text-right">Diferencia vs 100</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {STATES_RPP_2024.map((st) => (
                    <tr key={st.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(st.categoria)}`}>
                          {st.categoria}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-slate-400">#{st.rango}</td>
                      <td className="p-3 font-semibold text-white">{st.estado}</td>
                      <td className="p-3 text-right font-mono font-bold text-indigo-300">{st.rpp2024.toFixed(1)}</td>
                      <td className={`p-3 text-right font-mono font-bold ${st.diferenciaPct.startsWith("+") ? "text-rose-400" : "text-emerald-400"}`}>
                        {st.diferenciaPct}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Political Trajectory Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-400" />
              Predominio Político Estadal 2016–2026 (NCSL)
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo RPP</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3">Predominio o Trayectoria 2016–2026</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {STATES_POLITICS_2016_2026.map((sp) => (
                    <tr key={sp.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(sp.grupo)}`}>
                          {sp.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{sp.estado}</td>
                      <td className="p-3 text-slate-300 leading-relaxed">{sp.trayectoria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#141414] border border-[#262626] rounded-xl text-xs text-slate-300 leading-relaxed flex items-center gap-3">
              <Info className="w-5 h-5 text-indigo-400 shrink-0" />
              <p>
                <strong>Observación de correlación:</strong> Existe una marcada tendencia empírica entre costo de vida elevado (RPP alto) y gobiernos con predominio del Partido Demócrata, así como entre bajo costo de vida (RPP bajo) y gobiernos con predominio del Partido Republicano.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ------------------ TAB 02: AREAS METROPOLITANAS ------------------ */}
      {activeTab === "02" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Building className="w-4 h-4" />
              Subsección 1.2 • Análisis Urbano
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Las Áreas Metropolitanas (MSAs)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              El universo de áreas metropolitanas contiene <strong>387 Metropolitan Statistical Areas (MSA)</strong>.
              Aplicando el mismo criterio matemático que a los estados: seleccionamos las 5 posiciones superiores con mayor RPP (1 a 5),
              las 5 posiciones centradas alrededor del promedio de la mediana (192 a 196, mediana = 194), y las posiciones de menor RPP (383 a 387).
            </p>
          </div>

          {/* Table 12.1: MSA RPP Ranking */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-400" />
              Tabla 12.1. Ranking Metropolitano Estricto por RPP 2024 (Promedio Nacional = 100)
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo</th>
                    <th className="p-3">Rango</th>
                    <th className="p-3">Área Metropolitana</th>
                    <th className="p-3 text-right">Todos los Rubros</th>
                    <th className="p-3 text-right">Bienes</th>
                    <th className="p-3 text-right">Alquileres</th>
                    <th className="p-3 text-right">Otros Servicios</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {MSA_RPP_2024.map((m) => (
                    <tr key={m.area} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(m.grupo)}`}>
                          {m.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-slate-400">#{m.rango}</td>
                      <td className="p-3 font-semibold text-white">{m.area}</td>
                      <td className="p-3 text-right font-mono font-bold text-indigo-300">{m.todos.toFixed(1)}</td>
                      <td className="p-3 text-right font-mono text-slate-300">{m.bienes.toFixed(1)}</td>
                      <td className={`p-3 text-right font-mono font-bold ${m.alquileres > 120 ? "text-rose-400" : m.alquileres < 60 ? "text-emerald-400" : "text-amber-300"}`}>
                        {m.alquileres.toFixed(1)}
                      </td>
                      <td className="p-3 text-right font-mono text-slate-300">{m.otrosServicios.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 12.4: Municipal Political Codification */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-400" />
              Tabla 12.4. Codificación Política Municipal y Lectura de Correlación
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3 w-1/4">Área Metropolitana</th>
                    <th className="p-3 w-3/8">Codificación Política Jurisdicciones Núcleo</th>
                    <th className="p-3 w-3/8">Lectura para la Correlación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {MSA_POLITICS.map((mp) => (
                    <tr key={mp.area} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3 font-semibold text-white">{mp.area}</td>
                      <td className="p-3 text-slate-300 leading-relaxed">{mp.codificacion}</td>
                      <td className="p-3 text-slate-400 leading-relaxed">{mp.lectura}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-xl text-slate-300">
                <span className="text-rose-400 font-bold block mb-1">California Dominante</span>
                3 de las 5 áreas más costosas del país están en California (Napa, Los Angeles, San Francisco).
              </div>
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-xl text-slate-300">
                <span className="text-amber-400 font-bold block mb-1">Florida en Top Costo</span>
                Miami-Fort Lauderdale está entre las 5 más costosas, pese a pertenecer a Florida (impuesto estatal 0%).
              </div>
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-xl text-slate-300">
                <span className="text-emerald-400 font-bold block mb-1">Texas Económico</span>
                2 de las 5 áreas más económicas están en Texas (Eagle Pass, Texarkana).
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------ TAB 03: GASOLINA ------------------ */}
      {activeTab === "03" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Fuel className="w-4 h-4" />
              Sección 2 • Combustibles y Energía
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Gasolina: Impuestos y Regulaciones Regionales
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              La Guerra de Rusia con Ucrania y la tensión de EE. UU. con Irán han colocado el foco mediático en la gasolina.
              Su efecto cascada es considerable, aunque el impacto directo en el presupuesto familiar no iguala al costo de la vivienda.
            </p>
          </div>

          {/* EIA Formula Breakdown */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
              <Info className="w-4 h-4 text-indigo-400" />
              Descomposición Oficial del Precio de la Gasolina (EIA)
            </h3>
            <div className="p-4 bg-[#0A0A0A] border border-[#262626] rounded-lg text-center font-mono text-xs sm:text-sm text-indigo-300 font-bold overflow-x-auto">
              Precio Surtidor = Costo Petróleo Crudo + Refinación y Margen + Distribución y Comercialización + Impuestos
            </div>
          </div>

          {/* Group Averages Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GASOLINE_GROUP_AVERAGES.map((g) => (
              <div key={g.grupo} className="p-5 bg-[#141414] border border-[#262626] rounded-xl space-y-2">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(g.grupo as any)}`}>
                  Grupo {g.grupo} Costo
                </span>
                <div className="pt-2">
                  <span className="text-xs text-slate-400 block">Impuesto Estatal/Local Promedio</span>
                  <span className="text-xl font-bold font-mono text-white">{g.estatalLocal.toFixed(2)}¢ / gal</span>
                </div>
                <div className="pt-1 border-t border-[#262626]">
                  <span className="text-xs text-slate-400 block">Con Impuesto Federal (18.40¢)</span>
                  <span className="text-base font-bold font-mono text-indigo-400">{g.conFederal.toFixed(2)}¢ / gal</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table 3: Gasoline Taxes */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">
              Tabla 3. Carga de Gasolina de Referencia por Estado
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">Estatal/Local</th>
                    <th className="p-3 text-right">Federal</th>
                    <th className="p-3 text-right">Subtotal Carga</th>
                    <th className="p-3">Nivel Regulación</th>
                    <th className="p-3">Alineación Política</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {GASOLINE_TAX_DATA.map((gt) => (
                    <tr key={gt.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(gt.grupo)}`}>
                          {gt.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{gt.estado}</td>
                      <td className="p-3 text-right font-mono text-slate-300">{gt.estatalLocal.toFixed(2)}¢</td>
                      <td className="p-3 text-right font-mono text-slate-500">{gt.federal.toFixed(2)}¢</td>
                      <td className="p-3 text-right font-mono font-bold text-indigo-300">{gt.subtotal.toFixed(2)}¢</td>
                      <td className="p-3 text-slate-300">{gt.regulacion}</td>
                      <td className="p-3 text-slate-400 font-mono">{gt.politica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              Fuentes: Kiplinger, FTA, Tax Policy Center & Tax Foundation (2025/2026). No incluye necesariamente todos los impuestos porcentuales o locales adicionales.
            </p>
          </div>

          {/* Opportunities by State */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-serif font-bold text-white">
              Oportunidades de Reducción de Costos por Estado
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-4 bg-[#0A0A0A] border border-[#262626] rounded-lg space-y-2">
                <span className="text-rose-400 font-bold block font-mono">Estados de Alto Costo</span>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li><strong>California:</strong> impuestos, mezclas exclusivas, LCFS y capacidad de suministro.</li>
                  <li><strong>Washington:</strong> Clean Fuel Standard e impuestos.</li>
                  <li><strong>Hawái:</strong> logística, almacenamiento y competencia de importación.</li>
                  <li><strong>Nueva York y Nueva Jersey:</strong> impuestos, terminales y coordinación regional.</li>
                </ul>
              </div>
              <div className="p-4 bg-[#0A0A0A] border border-[#262626] rounded-lg space-y-2">
                <span className="text-amber-400 font-bold block font-mono">Estados Intermedios</span>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li><strong>Pennsylvania:</strong> carga fiscal y suministro de Filadelfia.</li>
                  <li><strong>Michigan:</strong> combustible boutique y vulnerabilidad de refinación.</li>
                  <li><strong>Georgia y Maine:</strong> logística, inventarios y tarifas.</li>
                  <li><strong>Texas:</strong> conservar sus ventajas de refinación sin fragmentación.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------ TAB 04: ALQUILERES Y VIVIENDA ------------------ */}
      {activeTab === "04" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Home className="w-4 h-4" />
              Sección 3 • Mercado Inmobiliario
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Alquileres y Tenencia de Vivienda
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              El costo de la vivienda es reportado como una de las cargas más pesadas para las familias. Las tasas de interés hipotecario
              afectan tanto a compradores como a arrendatarios. Los estados de alto costo muestran más de <strong>10 puntos porcentuales más de familias en alquiler</strong>.
            </p>
          </div>

          {/* Housing Tenure Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              Distribución de Tenencia de Vivienda (Finales de 2025)
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[550px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo RPP</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">% Casa Propia (Propietarios)</th>
                    <th className="p-3 text-right">% Alquiler (Inquilinos)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {HOUSING_TENURE_2025.map((ht) => (
                    <tr key={ht.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(ht.grupo)}`}>
                          {ht.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{ht.estado}</td>
                      <td className="p-3 text-right font-mono font-bold text-emerald-400">{ht.casaPropiaPct.toFixed(1)}%</td>
                      <td className="p-3 text-right font-mono font-bold text-rose-400">{ht.alquilerPct.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic">Fuente: USAFacts / Census Bureau Homeownership Rates.</p>
          </div>

          {/* BEA Rent RPP */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-indigo-400" />
              RPP de Alquileres de Vivienda y Mecanismos Principales (BEA)
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">RPP Vivienda</th>
                    <th className="p-3">Presión Habitacional</th>
                    <th className="p-3">Mecanismo Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {RENT_RPP_BEA.map((rr) => (
                    <tr key={rr.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(rr.grupo)}`}>
                          {rr.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{rr.estado}</td>
                      <td className="p-3 text-right font-mono font-bold text-indigo-300">{rr.rppVivienda.toFixed(1)}</td>
                      <td className="p-3 font-mono text-slate-300">{rr.presion}</td>
                      <td className="p-3 text-slate-300 leading-relaxed">{rr.mecanismo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5 Policy Proposals */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              5 Propuestas de Políticas para Aumentar la Asequibilidad en Alquileres
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-mono">
              <div className="p-3 bg-[#0A0A0A] border border-[#262626] rounded-lg">
                <span className="text-indigo-400 font-bold block mb-1">1. Zonificación</span>
                Permitir más unidades en el suelo residencial existente.
              </div>
              <div className="p-3 bg-[#0A0A0A] border border-[#262626] rounded-lg">
                <span className="text-indigo-400 font-bold block mb-1">2. Permisos</span>
                Aprobaciones automáticas y objetivas para proyectos conformes.
              </div>
              <div className="p-3 bg-[#0A0A0A] border border-[#262626] rounded-lg">
                <span className="text-indigo-400 font-bold block mb-1">3. Tiempos</span>
                Reducir el tiempo total hasta el certificado de ocupación.
              </div>
              <div className="p-3 bg-[#0A0A0A] border border-[#262626] rounded-lg">
                <span className="text-indigo-400 font-bold block mb-1">4. Infraestructura</span>
                Financiar obras en zonas donde se permita mayor densidad.
              </div>
              <div className="p-3 bg-[#0A0A0A] border border-[#262626] rounded-lg">
                <span className="text-indigo-400 font-bold block mb-1">5. Impuestos/Seguros</span>
                Reducir property tax, seguros y costos recurrentes de vivienda.
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------ TAB 05: CONSTRUCCION E IMPUESTO PREDIAL ------------------ */}
      {activeTab === "05" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Building2 className="w-4 h-4" />
              Secciones 4 y 5 • Construcción e Impuestos
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Construcción de Viviendas e Impuesto a la Propiedad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              Mientras más oferta de vivienda se construya, mayor es la posibilidad de disminuir el porcentaje de familias bajo la presión del alquiler.
              Asimismo, las tasas de impuesto predial y los valores evaluados determinan la factura final anual para los propietarios.
            </p>
          </div>

          {/* Construction Price Equation */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-3">
            <h3 className="text-base font-serif font-bold text-white">
              Ecuación del Precio de Vivienda Nueva
            </h3>
            <div className="p-4 bg-[#0A0A0A] border border-[#262626] rounded-lg text-center font-mono text-xs sm:text-sm text-indigo-300 font-bold">
              Precio Vivienda = Suelo + Materiales + Mano de Obra + Financiamiento + Impuestos + Tarifas + Retrasos + Riesgo + Margen
            </div>
          </div>

          {/* Construction Regulatory Pressure Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">
              Sección 4. Presión Regulatoria en Construcción (HUD Clearinghouse)
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3">Presión Regulatoria</th>
                    <th className="p-3">Lectura Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {CONSTRUCTION_REGULATORY_PRESSURE.map((cr) => (
                    <tr key={cr.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(cr.grupo)}`}>
                          {cr.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{cr.estado}</td>
                      <td className="p-3 font-mono text-amber-400">{cr.presionRegulatoria}</td>
                      <td className="p-3 text-slate-300 leading-relaxed">{cr.lecturaPrincipal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Property Tax Section */}
          <div className="space-y-4 pt-4 border-t border-[#262626]">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-indigo-400" />
              Sección 5. Impuesto a la Propiedad (Property Tax)
            </h3>

            {/* Property Tax Averages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROPERTY_TAX_GROUP_AVERAGES.map((pt) => (
                <div key={pt.grupo} className="p-5 bg-[#141414] border border-[#262626] rounded-xl space-y-2">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(pt.grupo as any)}`}>
                    Promedio Grupo {pt.grupo}
                  </span>
                  <div>
                    <span className="text-xs text-slate-400 block">Tasa Efectiva Promedio</span>
                    <span className="text-xl font-bold font-mono text-white">{pt.tasaEfectivaPct.toFixed(2)}%</span>
                  </div>
                  <div className="pt-1 border-t border-[#262626]">
                    <span className="text-xs text-slate-400 block">Impuesto Ilustrativo (Vivienda $400k)</span>
                    <span className="text-base font-bold font-mono text-indigo-400">${pt.impuesto400k.toLocaleString()}/año</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">Tasa Efectiva Property Tax</th>
                    <th className="p-3 text-right">Posición Nacional</th>
                    <th className="p-3 text-right">Impuesto sobre Vivienda de $400,000</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {PROPERTY_TAX_DATA.map((ptd) => (
                    <tr key={ptd.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(ptd.grupo)}`}>
                          {ptd.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{ptd.estado}</td>
                      <td className="p-3 text-right font-mono font-bold text-indigo-300">{ptd.tasaEfectivaPct.toFixed(2)}%</td>
                      <td className="p-3 text-right font-mono text-slate-400">#{ptd.posicionNacional}</td>
                      <td className="p-3 text-right font-mono font-bold text-amber-300">${ptd.impuesto400k.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic">Fuente: Tax Foundation.</p>
          </div>

          {/* Key Findings on Property Tax */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-indigo-400">
              Hallazgos Principales sobre Impuesto a la Propiedad
            </h4>
            <ol className="list-decimal list-inside text-xs text-slate-300 space-y-2 leading-relaxed font-sans">
              <li><strong>El grupo intermedio tiene la tasa promedio más alta (1.12%)</strong>, impulsado por Texas (1.40%), Pennsylvania (1.26%) y Michigan (1.19%).</li>
              <li><strong>Vivienda cara no equivale necesariamente a tasa predial alta:</strong> Hawái (0.29%) y California (0.70%) tienen tasas bajas, pero los altos precios de las propiedades generan facturas cuantiosas.</li>
              <li><strong>Nueva Jersey combina ambas presiones:</strong> tiene la tasa más alta del país (1.88%) y viviendas de valor elevado ($7,520/año para casa de $400k).</li>
              <li><strong>Bajo RPP no garantiza bajo property tax:</strong> Iowa tiene una tasa del 1.33%, superior a California o Washington.</li>
              <li><strong>Mecanismos de alivio:</strong> Los <em>circuit breakers</em> (interruptores de circuito fiscal) protegen a contribuyentes vulnerables o de ingresos fijos cuando el impuesto predial supera un límite sostenible.</li>
            </ol>
          </div>
        </section>
      )}

      {/* ------------------ TAB 06: IMPUESTOS VENTAS E INGRESOS ------------------ */}
      {activeTab === "06" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Percent className="w-4 h-4" />
              Sección 6 • Carga Tributaria Directa
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Impuesto a las Ventas y a los Ingresos
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              Las tasas de ventas corresponden a mediados de 2026 (promedio ponderado por población para el componente local).
              Las tasas sobre ingresos muestran los rangos marginales vigentes.
            </p>
          </div>

          {/* Group Averages for Taxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SALES_INCOME_GROUP_AVERAGES.map((s) => (
              <div key={s.grupo} className="p-5 bg-[#141414] border border-[#262626] rounded-xl space-y-2">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(s.grupo as any)}`}>
                  Promedio Grupo {s.grupo}
                </span>
                <div>
                  <span className="text-xs text-slate-400 block">Ventas Combinada Promedio</span>
                  <span className="text-xl font-bold font-mono text-white">{s.ventasCombinadaPct.toFixed(2)}%</span>
                </div>
                <div className="pt-1 border-t border-[#262626]">
                  <span className="text-xs text-slate-400 block">Impuesto Ingresos Marginal Max</span>
                  <span className="text-base font-bold font-mono text-rose-400">{s.ingresosPromedioPct.toFixed(2)}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table: Sales and Income Tax */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">
              Carga Fiscal Estadal sobre Ventas e Ingresos (2026)
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Grupo</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">Ventas Estatal</th>
                    <th className="p-3 text-right">Ventas Local Prom.</th>
                    <th className="p-3 text-right">Ventas Combinada</th>
                    <th className="p-3 text-right">Impuesto Estatal Ingresos</th>
                    <th className="p-3">Estructura</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {SALES_INCOME_TAX_2026.map((st) => (
                    <tr key={st.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(st.grupo)}`}>
                          {st.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{st.estado}</td>
                      <td className="p-3 text-right font-mono text-slate-300">{st.ventasEstatalPct.toFixed(2)}%</td>
                      <td className="p-3 text-right font-mono text-slate-400">{st.ventasLocalPromedioPct.toFixed(2)}%</td>
                      <td className="p-3 text-right font-mono font-bold text-indigo-300">{st.ventasCombinadaPct.toFixed(2)}%</td>
                      <td className="p-3 text-right font-mono font-bold text-rose-400">{st.ingresosIndividualesStr}</td>
                      <td className="p-3 text-slate-300">{st.estructura}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic">Fuente: Tax Foundation (Midyear Sales Tax Rates 2026).</p>
          </div>

          <div className="p-5 bg-[#141414] border border-[#262626] rounded-xl text-xs text-slate-300 leading-relaxed font-sans">
            <span className="text-amber-400 font-bold block mb-1 uppercase font-mono tracking-wider">Conclusión de Carga Impositiva</span>
            Los impuestos directos de los estados de alto costo de vida <strong>más que duplican la carga impositiva sobre los ingresos (9.19% vs 3.84%)</strong> en comparación con los estados de bajo costo. Esta brecha acentúa el sentimiento de crisis de asequibilidad entre sus residentes.
          </div>
        </section>
      )}

      {/* ------------------ TAB 07: MIGRACION NETA ------------------ */}
      {activeTab === "07" && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Users className="w-4 h-4" />
              Sección 7 • Dinámica Demográfica
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Migración Neta Poblacional
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              Los ciudadanos han comprendido desde hace años que en una Federación es posible mudarse entre estados para buscar mejores condiciones de vida y menores costos.
              Los estados de alto costo, con la excepción de Washington, han estado perdiendo población sostenidamente.
            </p>
          </div>

          {/* Time series visual cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase">Estados Alto Costo</span>
                <TrendingDown className="w-4 h-4 text-rose-400" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                California y Nueva York han registrado saldos de migración neta sumamente negativos, con picos de salida en 2020–2021 (-345k en CA, -312k en NY) y atenuación reciente.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Estados Intermedios</span>
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Texas encabeza la atracción continua (+400k a +520k anuales), seguido por Georgia (+90k/año) y estados del Noreste con ligeras mejoras.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Estados Bajo Costo</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Oklahoma, Iowa y Mississippi atraen familias buscando asequibilidad. Luisiana revierte parcialmente pérdidas históricas.
              </p>
            </div>
          </div>

          {/* Three Migration Time-Series Line Charts */}
          <div className="space-y-8">
            {/* Chart 1: Alto Costo */}
            <MigrationLineChart
              id="chart_migration_high_cost"
              title="Gráfico 1: Serie de Tiempo — Migración Neta Total (2017 – 2026) en Estados de Alto Costo"
              subtitle="Evolución anual de la migración doméstica e internacional neta (en miles de personas)."
              badgeText="Estados de Alto Costo"
              badgeColor="rose"
              data={NET_MIGRATION_HIGH_COST}
              series={[
                { key: "California", name: "California", color: "#F43F5E" },
                { key: "NuevaYork", name: "Nueva York", color: "#FB923C" },
                { key: "NuevaJersey", name: "Nueva Jersey", color: "#10B981" },
                { key: "Washington", name: "Washington", color: "#60A5FA" },
                { key: "Hawái", name: "Hawái", color: "#A855F7" }
              ]}
              yMin={-360}
              yMax={60}
            />

            {/* Chart 2: Intermedio */}
            <MigrationLineChart
              id="chart_migration_intermediate_cost"
              title="Gráfico 2: Serie de Tiempo — Migración Neta Total (2017 – 2026) en Estados Intermedios"
              subtitle="Evolución anual de la migración doméstica e internacional neta (en miles de personas)."
              badgeText="Estados Intermedios"
              badgeColor="amber"
              data={NET_MIGRATION_INTERMEDIATE_COST}
              series={[
                { key: "Texas", name: "Texas", color: "#60A5FA" },
                { key: "Georgia", name: "Georgia", color: "#F59E0B" },
                { key: "Maine", name: "Maine", color: "#10B981" },
                { key: "Michigan", name: "Michigan", color: "#F43F5E" },
                { key: "Pennsylvania", name: "Pennsylvania", color: "#A855F7" }
              ]}
              yMin={-20}
              yMax={540}
            />

            {/* Chart 3: Bajo Costo */}
            <MigrationLineChart
              id="chart_migration_low_cost"
              title="Gráfico 3: Serie de Tiempo — Migración Neta Total (2017 – 2026) en Estados de Bajo Costo"
              subtitle="Evolución anual de la migración doméstica e internacional neta (en miles de personas)."
              badgeText="Estados de Bajo Costo"
              badgeColor="emerald"
              data={NET_MIGRATION_LOW_COST}
              series={[
                { key: "Oklahoma", name: "Oklahoma", color: "#60A5FA" },
                { key: "Iowa", name: "Iowa", color: "#F59E0B" },
                { key: "Mississippi", name: "Mississippi", color: "#10B981" },
                { key: "Luisiana", name: "Luisiana", color: "#F43F5E" }
              ]}
              yMin={-60}
              yMax={45}
            />
          </div>

          {/* Cumulative Migration & Politics Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              Acumulado de Migración Neta (2016–2025) y Control Político de 10 Años
            </h3>

            <div className="overflow-x-auto border border-[#262626] rounded-xl">
              <table className="w-full text-left text-xs font-sans border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                    <th className="p-3">Saldo</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">Migración Acumulada</th>
                    <th className="p-3">Gobernación Dominante</th>
                    <th className="p-3">Distribución Gov (10A)</th>
                    <th className="p-3">Legislatura Dominante</th>
                    <th className="p-3">Distribución Legis (10A)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/60">
                  {CUMULATIVE_MIGRATION_STATES.map((cms) => (
                    <tr key={cms.estado} className="hover:bg-[#141414] transition-colors">
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getBadgeStyle(cms.grupo)}`}>
                          {cms.grupo}
                        </span>
                      </td>
                      <td className="p-3 font-semibold text-white">{cms.estado}</td>
                      <td className={`p-3 text-right font-mono font-bold ${cms.acumulado > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                        {cms.acumulado > 0 ? `+${cms.acumulado.toLocaleString()}` : cms.acumulado.toLocaleString()}
                      </td>
                      <td className="p-3 text-slate-300">{cms.gobernacionDominante}</td>
                      <td className="p-3 font-mono text-slate-400">{cms.distribucionGov}</td>
                      <td className="p-3 text-slate-300">{cms.legislaturaDominante}</td>
                      <td className="p-3 font-mono text-slate-400">{cms.distribucionLegis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              Fuentes: U.S. Census Bureau (Vintage Population Estimates), Brookings Institution & Cornell Program on Applied Demographics.
            </p>
          </div>

          {/* Detailed Sources Block */}
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider font-bold">
              <FileText className="w-4 h-4" />
              Fuentes Metodológicas y Documentales de los Gráficos de Migración (Sección 7)
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-white">U.S. Census Bureau (Oficina del Censo de EE. UU.):</strong>{" "}
                  <span className="italic text-slate-300">Components of Population Change under Vintage estimates</span>
                  <ul className="mt-1.5 ml-4 space-y-1 text-slate-400 font-mono text-xs">
                    <li className="flex items-center gap-1.5">
                      <span className="text-slate-500">–</span>
                      <span>Census Bureau: Comunicados sobre Crecimiento Poblacional y Componentes Migratorios</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-slate-500">–</span>
                      <span>Census Bureau: Tablas Históricas de Flujos Migratorios Estado a Estado</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-white">Brookings Institution:</strong>{" "}
                  <span className="italic text-slate-300">Análisis del Impacto Migratorio e Inmigración en los Estados</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-white">Cornell Program on Applied Demographics:</strong>{" "}
                  <span className="italic text-slate-300">Análisis Demográfico de los Datos Vintage del Censo</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#141414] border border-[#262626] rounded-2xl text-center space-y-2">
            <span className="font-serif italic text-lg text-indigo-300">
              &ldquo;Los ciudadanos y las familias están hablando. La bendición de una Federación.&rdquo;
            </span>
          </div>
        </section>
      )}

      {/* ------------------ TAB 08: BALANCE GENERAL & CONCLUSION ------------------ */}
      {activeTab === "08" && (
        <section className="space-y-10 animate-fadeIn">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Scale className="w-4 h-4" />
              Sección 8 • Sintesis Multidimensional
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Balance General de Factores de Costo
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-4xl">
              Evaluación del peso aproximado que tiene cada variable en el presupuesto de las familias estadounidenses y las prioridades de reforma.
            </p>
          </div>

          {/* Budget Weight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAMILY_BUDGET_WEIGHTS.map((fb) => (
              <div key={fb.variable} className="p-5 bg-[#141414] border border-[#262626] rounded-xl space-y-3">
                <div className="flex items-center justify-between border-b border-[#262626] pb-2">
                  <h4 className="font-serif font-bold text-white text-base">{fb.variable}</h4>
                  <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
                    {fb.peso}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{fb.interpretacion}</p>
              </div>
            ))}
          </div>

          {/* Reform Priorities Matrix */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              Matriz de Prioridades de Reforma Estadal y Local
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reforms.map((ref) => (
                <div
                  key={ref.prioridad}
                  onClick={() => toggleReform(ref.prioridad)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    ref.checked
                      ? "bg-[#141414] border-indigo-500/40 text-white"
                      : "bg-[#0A0A0A]/60 border-[#222] text-slate-500 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      #{ref.prioridad}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold font-sans">{ref.reforma}</h4>
                      <span className="text-[10px] font-mono text-slate-400">Impacto: {ref.impactoPotencial}</span>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${ref.checked ? "text-indigo-400" : "text-slate-600"}`} />
                </div>
              ))}
            </div>
          </div>

          {/* FINAL OVERALL CONCLUSION OF THE 4-PART SERIES */}
          <div className="bg-gradient-to-b from-[#141414] to-[#0D0D0D] border-2 border-indigo-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-5 h-5" />
              Cierre General de la Serie • ¿Cómo vamos?
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
              ¿Cómo vamos? Resumen Multidimensional
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Después de haber revisado:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              <li className="flex items-start gap-3 bg-[#0A0A0A]/80 p-3 rounded-lg border border-[#262626]">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                <span><strong>Parte 1 (Asequibilidad):</strong> Las áreas macroeconómicas que más afectan al ciudadano directo: mercado laboral, salarios, inflación y consumo;</span>
              </li>
              <li className="flex items-start gap-3 bg-[#0A0A0A]/80 p-3 rounded-lg border border-[#262626]">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                <span><strong>Parte 2 (Crecimiento Nacional):</strong> El desempeño del país como un todo: Producto Interno Bruto, consumo privado, gasto público, inversión privada y balanza comercial;</span>
              </li>
              <li className="flex items-start gap-3 bg-[#0A0A0A]/80 p-3 rounded-lg border border-[#262626]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span><strong>Parte 3 (Sectores Privados):</strong> Los 7 sectores económicos principales que contribuyen al 80% del PIB y al 80% de la generación del empleo;</span>
              </li>
              <li className="flex items-start gap-3 bg-[#0A0A0A]/80 p-3 rounded-lg border border-[#262626]">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                <span><strong>Parte 4 (Estadal y Local):</strong> Los factores Estadales y Locales que más impactan el costo de la vida en tres grupos de estados dependiendo del costo de vida.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#262626] text-center space-y-4">
              <p className="text-lg sm:text-2xl font-serif font-bold text-indigo-300 leading-relaxed max-w-3xl mx-auto">
                Podemos afirmar que VAMOS BIEN, no como todos quisiéramos pero sí en una dirección y velocidad que lucen prometedoras.
              </p>
              <p className="text-sm sm:text-base font-serif italic text-slate-300">
                Hay muchas cosas por mejorar, pero Roma no se construyó en 18 meses.
              </p>

              <div className="pt-6 flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-[#262626]"></div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Hilmer Castillo Bescanza
                </p>
                <div className="w-12 h-px bg-[#262626]"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
