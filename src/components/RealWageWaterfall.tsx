import React, { useState } from "react";
import { Info, TrendingDown, TrendingUp, HelpCircle } from "lucide-react";

export interface WaterfallItem {
  label: string;
  value: number;
  type: string;
}

export const waterfallData: WaterfallItem[] = [
  { label: "Salario Ene 21", value: 3750, type: "base" },
  { label: "Inflación Biden", value: -662, type: "negative" },
  { label: "Ajuste Biden", value: 603, type: "positive" },
  { label: "Salario Ene 25", value: 3692, type: "subtotal" },
  { label: "Inflación Trump II", value: -169, type: "negative" },
  { label: "Ajuste Trump II", value: 196, type: "positive" },
  { label: "Salario May 26", value: 3719, type: "final" }
];

export function RealWageWaterfall() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Maximum value for the scale
  const maxScaleVal = 4200;
  // Let's set a nice minimum baseline to focus on the change and preserve detail
  const minScaleVal = 0; // Let's start from 0 to show the full scale of salaries

  // Dimensions of the SVG workspace
  const width = 800;
  const height = 400;
  const paddingLeft = 60;
  const paddingRight = 30;
  const paddingTop = 40;
  const paddingBottom = 60;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Let's pre-calculate the start and end values for each step to render the bars correctly
  const bars = [
    { label: "Salario Ene 21", value: 3750, start: 0, end: 3750, type: "base", desc: "Salario base inicial de ponderación" },
    { label: "Inflación Biden", value: -662, start: 3750, end: 3088, type: "negative", desc: "Pérdida de poder de compra por inflación acumulada (+21.4%)" },
    { label: "Ajuste Biden", value: 603, start: 3088, end: 3692, type: "positive", desc: "Ajustes nominales acumulados en la remuneración semanal" },
    { label: "Salario Ene 25", value: 3692, start: 0, end: 3692, type: "subtotal", desc: "Salario real neto al cierre del periodo Biden" },
    { label: "Inflación Trump II", value: -169, start: 3692, end: 3523, type: "negative", desc: "Pérdida por inflación durante el periodo actual (+4.8%)" },
    { label: "Ajuste Trump II", value: 196, start: 3523, end: 3719, type: "positive", desc: "Ajustes salariales nominales en el periodo Trump II" },
    { label: "Salario May 26", value: 3719, start: 0, end: 3719, type: "final", desc: "Salario real promedio final de la serie" }
  ];

  // Helper to convert value to Y coordinate
  const getY = (val: number) => {
    const ratio = (val - minScaleVal) / (maxScaleVal - minScaleVal);
    return paddingTop + chartHeight * (1 - ratio);
  };

  const getX = (index: number) => {
    return paddingLeft + (chartWidth / bars.length) * index;
  };

  const barWidth = (chartWidth / bars.length) * 0.65;
  const barGapOffset = ((chartWidth / bars.length) - barWidth) / 2;

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 relative overflow-hidden transition-all shadow-xl">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-sky-500/5 blur-[80px] pointer-events-none"></div>

      {/* Header and metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-[#262626]">
        <div>
          <span className="text-[10px] bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
            Cálculo de Desglose de Poder Adquisitivo
          </span>
          <h4 id="waterfall-title" className="text-lg font-bold text-[#F8FAFC] font-sans mt-2">
            Gráfica de Cascada (Waterfall) del Salario Real Neto
          </h4>
          <p className="text-xs text-[#94A3B8] font-sans mt-0.5">
            Efecto acumulado de la inflación y los incrementos salariales ponderados. Coloca el cursor en las barras para explorar detalles.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono shrink-0">
          <HelpCircle className="w-3.5 h-3.5 text-[#60A5FA]" />
          <span>Fórmula: Salario Real = Base - Inflación + Ajuste</span>
        </div>
      </div>

      {/* Interactive Tooltip Card / Legend Area */}
      <div className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {hoveredIndex !== null ? (
          <div className="md:col-span-3 flex items-center gap-4 animate-fade-in">
            <div className={`p-2 rounded-lg shrink-0 ${
              bars[hoveredIndex].type === "positive" 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                : bars[hoveredIndex].type === "negative" 
                ? "bg-rose-500/10 text-rose-400 border border-rose-400/20" 
                : "bg-sky-500/10 text-[#60A5FA] border border-[#60A5FA]/20"
            }`}>
              {bars[hoveredIndex].type === "positive" ? (
                <TrendingUp className="w-5 h-5" />
              ) : bars[hoveredIndex].type === "negative" ? (
                <TrendingDown className="w-5 h-5" />
              ) : (
                <Info className="w-5 h-5" />
              )}
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Concepto Seleccionado</p>
              <p className="text-sm font-bold text-[#F8FAFC]">
                {bars[hoveredIndex].label}: <span className={
                  bars[hoveredIndex].type === "positive" ? "text-emerald-400" :
                  bars[hoveredIndex].type === "negative" ? "text-rose-400" : "text-[#60A5FA]"
                }>
                  {bars[hoveredIndex].value > 0 ? `+$${bars[hoveredIndex].value}` : `-$${Math.abs(bars[hoveredIndex].value)}`} USD
                </span>
              </p>
              <p className="text-xs text-[#94A3B8] font-sans mt-0.5">
                {bars[hoveredIndex].desc}
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Standard legend when no hover */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-500 inline-block"></span>
              <span className="text-xs text-[#94A3B8] font-mono">Salario Base / Subtotal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span>
              <span className="text-xs text-[#94A3B8] font-mono">Ajuste de Sueldo (+)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-rose-500 inline-block"></span>
              <span className="text-xs text-[#94A3B8] font-mono">Erosión por Inflación (-)</span>
            </div>
          </>
        )}
      </div>

      {/* SVG Container */}
      <div className="relative w-full overflow-x-auto">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full min-w-[700px] h-auto select-none"
        >
          {/* Grid lines (Y-axis grid) */}
          {[0, 1000, 2000, 3000, 4000].map((gridVal) => (
            <g key={gridVal}>
              <line 
                x1={paddingLeft} 
                y1={getY(gridVal)} 
                x2={width - paddingRight} 
                y2={getY(gridVal)} 
                stroke="#262626" 
                strokeWidth={1} 
                strokeDasharray="4,4"
              />
              <text 
                x={paddingLeft - 10} 
                y={getY(gridVal) + 4} 
                textAnchor="end" 
                className="fill-slate-500 font-mono text-[10px]"
              >
                ${gridVal}
              </text>
            </g>
          ))}

          {/* Left Y Axis line */}
          <line 
            x1={paddingLeft} 
            y1={paddingTop} 
            x2={paddingLeft} 
            y2={height - paddingBottom} 
            stroke="#262626" 
            strokeWidth={1.5}
          />

          {/* Bottom X Axis line */}
          <line 
            x1={paddingLeft} 
            y1={height - paddingBottom} 
            x2={width - paddingRight} 
            y2={height - paddingBottom} 
            stroke="#262626" 
            strokeWidth={1.5}
          />

          {/* Waterfall Connector Lines */}
          {bars.slice(0, -1).map((bar, i) => {
            const currentX = getX(i) + barGapOffset + barWidth;
            const nextX = getX(i + 1) + barGapOffset;
            const yPos = getY(bar.end);
            return (
              <line
                key={`conn-${i}`}
                x1={currentX}
                y1={yPos}
                x2={nextX}
                y2={yPos}
                stroke="#444444"
                strokeWidth={1.5}
                strokeDasharray="3,3"
              />
            );
          })}

          {/* Draw Bars */}
          {bars.map((bar, i) => {
            const barX = getX(i) + barGapOffset;
            
            // Waterfall Math: y coordinates are inversely related to value
            const yStart = getY(bar.start);
            const yEnd = getY(bar.end);
            
            const barY = Math.min(yStart, yEnd);
            const barHeight = Math.max(Math.abs(yStart - yEnd), 2); // default minimal 2 height

            // Color selection based on type
            let color = "#5c5c5c";
            let hoverColor = "#737373";
            let shadowColor = "rgba(0, 0, 0, 0)";
            
            if (bar.type === "base" || bar.type === "subtotal" || bar.type === "final") {
              color = "#3B82F6"; // Slate Blue
              hoverColor = "#60A5FA";
              shadowColor = "rgba(59, 130, 246, 0.15)";
            } else if (bar.type === "positive") {
              color = "#10B981"; // Emerald
              hoverColor = "#34D399";
              shadowColor = "rgba(16, 185, 129, 0.15)";
            } else if (bar.type === "negative") {
              color = "#F43F5E"; // Rose
              hoverColor = "#FB7185";
              shadowColor = "rgba(244, 63, 94, 0.15)";
            }

            const isHovered = hoveredIndex === i;

            return (
              <g 
                key={i}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background hover glow card */}
                {isHovered && (
                  <rect
                    x={getX(i)}
                    y={paddingTop - 10}
                    width={chartWidth / bars.length}
                    height={chartHeight + 20}
                    fill="rgba(255, 255, 255, 0.02)"
                    rx={8}
                  />
                )}

                {/* Main Waterfall Bar */}
                <rect
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={isHovered ? hoverColor : color}
                  rx={4}
                  style={{
                    filter: isHovered ? `drop-shadow(0px 0px 8px ${shadowColor})` : "none",
                    transition: "all 0.15s ease-out"
                  }}
                />

                {/* Value Text Above/Below the bar */}
                <text
                  x={barX + barWidth / 2}
                  y={barY - 8}
                  textAnchor="middle"
                  className={`font-mono text-[10px] font-bold ${
                    isHovered 
                      ? "fill-white text-[11px]" 
                      : bar.type === "positive" 
                      ? "fill-emerald-400" 
                      : bar.type === "negative" 
                      ? "fill-rose-400" 
                      : "fill-blue-400"
                  }`}
                  style={{ transition: "all 0.15s" }}
                >
                  {bar.type === "positive" ? `+$${bar.value}` : bar.type === "negative" ? `-$${Math.abs(bar.value)}` : `$${bar.value}`}
                </text>

                {/* X Axis Label */}
                <text
                  x={barX + barWidth / 2}
                  y={height - paddingBottom + 20}
                  textAnchor="middle"
                  className={`font-sans text-[10px] font-medium tracking-tight ${isHovered ? "fill-[#60A5FA] font-bold" : "fill-slate-400"}`}
                >
                  {bar.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-[#262626] pt-3">
        <a 
          href="https://www.bls.gov" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors"
        >
          Fuente: <span className="underline decoration-dotted hover:decoration-solid">Interpolado desde el documento original (BLS)</span>
        </a>
        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25 text-[10px]">Datos Reales</span>
      </div>
    </div>
  );
}
