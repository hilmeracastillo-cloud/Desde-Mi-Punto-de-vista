import React, { useState } from "react";
import { Table, Eye, EyeOff, Info } from "lucide-react";

export interface MigrationSeries {
  key: string;
  name: string;
  color: string;
}

interface MigrationLineChartProps {
  id: string;
  title: string;
  subtitle: string;
  badgeText: string;
  badgeColor: string; // e.g., "rose", "amber", "emerald"
  data: Array<{ year: string; [key: string]: number | string }>;
  series: MigrationSeries[];
  yMin?: number;
  yMax?: number;
}

export const MigrationLineChart: React.FC<MigrationLineChartProps> = ({
  id,
  title,
  subtitle,
  badgeText,
  badgeColor,
  data,
  series,
  yMin: customYMin,
  yMax: customYMax,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);

  // Extract all numeric values to compute y range
  const allValues: number[] = [];
  data.forEach((d) => {
    series.forEach((s) => {
      const val = d[s.key];
      if (typeof val === "number") {
        allValues.push(val);
      }
    });
  });

  const rawMin = Math.min(...allValues, 0);
  const rawMax = Math.max(...allValues, 0);

  // Padding min/max for nice scale
  const minVal = customYMin !== undefined ? customYMin : Math.floor(rawMin / 50) * 50 - 20;
  const maxVal = customYMax !== undefined ? customYMax : Math.ceil(rawMax / 50) * 50 + 20;

  // SVG Dimensions
  const svgWidth = 720;
  const svgHeight = 320;
  const padding = { top: 35, right: 35, bottom: 45, left: 110 };
  const plotWidth = svgWidth - padding.left - padding.right;
  const plotHeight = svgHeight - padding.top - padding.bottom;

  const getX = (index: number) => {
    if (data.length <= 1) return padding.left;
    return padding.left + (index / (data.length - 1)) * plotWidth;
  };

  const getY = (val: number) => {
    if (maxVal === minVal) return padding.top + plotHeight / 2;
    const ratio = (val - minVal) / (maxVal - minVal);
    return padding.top + plotHeight - ratio * plotHeight;
  };

  // Generate grid ticks (5 ticks)
  const tickCount = 5;
  const yTicks = Array.from({ length: tickCount }, (_, i) => {
    return minVal + (i / (tickCount - 1)) * (maxVal - minVal);
  });

  const zeroY = getY(0);

  // Badge styling lookup
  const getBadgeClasses = (color: string) => {
    switch (color) {
      case "rose":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      case "amber":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "emerald":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "indigo":
      default:
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
    }
  };

  return (
    <div id={id} className="bg-[#141414] border border-[#262626] rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#262626] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${getBadgeClasses(badgeColor)}`}>
              {badgeText}
            </span>
            <span className="text-xs font-mono text-slate-400">Migración Neta (Doméstica + Internacional)</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-white tracking-tight">{title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
        </div>

        <button
          onClick={() => setShowTable(!showTable)}
          className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] text-xs font-mono text-slate-300 border border-[#333] rounded-lg transition-colors"
        >
          {showTable ? <EyeOff className="w-3.5 h-3.5 text-indigo-400" /> : <Table className="w-3.5 h-3.5 text-indigo-400" />}
          <span>{showTable ? "Ver Gráfico" : "Ver Tabla de Datos"}</span>
        </button>
      </div>

      {!showTable ? (
        <div className="space-y-4">
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1">
            {series.map((s) => (
              <div key={s.key} className="flex items-center gap-2 bg-[#0A0A0A] px-2.5 py-1 rounded-md border border-[#222]">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-slate-200 font-semibold">{s.name}</span>
              </div>
            ))}
          </div>

          {/* SVG Container */}
          <div className="relative w-full overflow-hidden bg-[#0A0A0A] border border-[#222] rounded-xl p-2 sm:p-4">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto overflow-visible select-none"
            >
              {/* Grid lines & Y axis labels */}
              {yTicks.map((tickVal, idx) => {
                const yPos = getY(tickVal);
                const isZero = Math.abs(tickVal) < 0.001;
                if (isZero) return null; // Rendered explicitly below
                return (
                  <g key={idx}>
                    <line
                      x1={padding.left}
                      y1={yPos}
                      x2={svgWidth - padding.right}
                      y2={yPos}
                      stroke="#1E293B"
                      strokeDasharray="3 3"
                      strokeWidth={1}
                    />
                    <text
                      x={padding.left - 10}
                      y={yPos + 4}
                      fill="#94A3B8"
                      fontSize="10"
                      fontFamily="monospace"
                      textAnchor="end"
                    >
                      {tickVal > 0 ? `+${Math.round(tickVal)}k` : `${Math.round(tickVal)}k`}
                    </text>
                  </g>
                );
              })}

              {/* Vertical Axis Line */}
              <line
                x1={padding.left}
                y1={padding.top}
                x2={padding.left}
                y2={svgHeight - padding.bottom}
                stroke="#475569"
                strokeWidth={1.5}
              />

              {/* Explicit & Prominent Zero Reference Line */}
              {minVal <= 0 && maxVal >= 0 && (
                <g>
                  <line
                    x1={padding.left}
                    y1={zeroY}
                    x2={svgWidth - padding.right}
                    y2={zeroY}
                    stroke="#38BDF8"
                    strokeWidth={2}
                  />
                  {/* Text 'Línea Base 0' positioned to the left of vertical axis */}
                  <text
                    x={padding.left - 10}
                    y={zeroY - 5}
                    fill="#38BDF8"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="end"
                  >
                    Línea Base 0
                  </text>
                  <text
                    x={padding.left - 10}
                    y={zeroY + 8}
                    fill="#38BDF8"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="end"
                  >
                    0k
                  </text>
                </g>
              )}

              {/* X Axis Labels */}
              {data.map((d, idx) => {
                const xPos = getX(idx);
                const isHovered = hoveredIndex === idx;
                return (
                  <g key={d.year}>
                    <line
                      x1={xPos}
                      y1={padding.top}
                      x2={xPos}
                      y2={svgHeight - padding.bottom}
                      stroke={isHovered ? "#60A5FA" : "transparent"}
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                    />
                    <text
                      x={xPos}
                      y={svgHeight - padding.bottom + 20}
                      fill={isHovered ? "#F8FAFC" : "#94A3B8"}
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight={isHovered ? "bold" : "normal"}
                      textAnchor="middle"
                    >
                      {d.year}
                    </text>
                  </g>
                );
              })}

              {/* Lines and Data Points */}
              {series.map((s) => {
                const points = data.map((d, i) => {
                  const val = Number(d[s.key] ?? 0);
                  return { x: getX(i), y: getY(val), val };
                });

                const pathD = points
                  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
                  .join(" ");

                return (
                  <g key={s.key}>
                    {/* Line glow effect */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={s.color}
                      strokeWidth={4}
                      strokeOpacity={0.15}
                    />
                    {/* Main Line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={s.color}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Data Points */}
                    {points.map((p, idx) => {
                      const isHovered = hoveredIndex === idx;
                      return (
                        <circle
                          key={idx}
                          cx={p.x}
                          cy={p.y}
                          r={isHovered ? 5.5 : 3.5}
                          fill={isHovered ? "#FFFFFF" : s.color}
                          stroke={s.color}
                          strokeWidth={isHovered ? 2.5 : 1}
                          className="transition-all duration-150"
                        />
                      );
                    })}
                  </g>
                );
              })}

              {/* Invisible touch/hover triggers for x columns */}
              {data.map((_, idx) => {
                const xPos = getX(idx);
                const colWidth = plotWidth / (data.length - 1);
                return (
                  <rect
                    key={idx}
                    x={xPos - colWidth / 2}
                    y={padding.top}
                    width={colWidth}
                    height={plotHeight}
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                );
              })}
            </svg>

            {/* Hover Tooltip Overlay */}
            {hoveredIndex !== null && (
              <div className="mt-3 p-3 bg-[#18181B] border border-[#333] rounded-lg shadow-2xl flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
                <span className="text-indigo-400 font-bold uppercase tracking-wider">
                  Año {data[hoveredIndex].year}:
                </span>
                {series.map((s) => {
                  const val = Number(data[hoveredIndex][s.key] ?? 0);
                  const isPositive = val >= 0;
                  return (
                    <div key={s.key} className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="text-slate-300">{s.name}:</span>
                      <span className={`font-bold ${isPositive ? "text-emerald-400" : "text-rose-400"}`}>
                        {isPositive ? `+${val}k` : `${val}k`}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Data Table View */
        <div className="overflow-x-auto border border-[#262626] rounded-xl">
          <table className="w-full text-left text-xs font-sans border-collapse">
            <thead>
              <tr className="bg-[#1A1A1A] text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-[#262626]">
                <th className="p-3">Año</th>
                {series.map((s) => (
                  <th key={s.key} className="p-3 text-right">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: s.color }} />
                      {s.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262626]/60 font-mono">
              {data.map((row) => (
                <tr key={row.year} className="hover:bg-[#141414] transition-colors">
                  <td className="p-3 font-bold text-white">{row.year}</td>
                  {series.map((s) => {
                    const val = Number(row[s.key] ?? 0);
                    return (
                      <td
                        key={s.key}
                        className={`p-3 text-right font-bold ${val >= 0 ? "text-emerald-400" : "text-rose-400"}`}
                      >
                        {val >= 0 ? `+${val}k` : `${val}k`}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
