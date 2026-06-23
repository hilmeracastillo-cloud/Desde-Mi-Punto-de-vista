import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { AdminStats } from "../data";
import { TrendingUp, TrendingDown, RefreshCw, FileText, BarChart2 } from "lucide-react";

// Register individual Chart.js components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  id: string;
  title: string;
  description: string;
  labels: string[];
  values: number[];
  stats: AdminStats;
  isQuarterly?: boolean;
  chartType?: "line" | "bar";
}

export const MacroeconomicChart: React.FC<ChartProps> = ({
  id,
  title,
  description,
  labels,
  values,
  stats,
  isQuarterly = false,
  chartType = "line"
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  const [showRawData, setShowRawData] = useState(false);

  // Split into Biden & Trump II datasets
  let transitionIdx = -1;
  if (isQuarterly) {
    transitionIdx = labels.indexOf("2025-Q1");
  } else {
    transitionIdx = labels.indexOf("Ene 25");
    if (transitionIdx === -1) {
      transitionIdx = labels.findIndex(lbl => lbl.includes("Ene 25") || lbl.includes("Jan 25") || lbl.includes("/01/25"));
    }
  }
  if (transitionIdx === -1) {
    transitionIdx = Math.floor(labels.length * 0.75);
  }

  const bidenValues = values.map((val, idx) => {
    return idx <= transitionIdx ? val : null;
  });

  const trumpValues = values.map((val, idx) => {
    return idx >= transitionIdx ? val : null;
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Safely retrieve and destroy any existing chart instance on this canvas node to prevent conflicts
    try {
      const existingChart = Chart.getChart(canvasRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
    } catch (err) {
      console.warn("Could not retrieve existing chart with Chart.getChart:", err);
    }

    if (chartRef.current) {
      try {
        chartRef.current.destroy();
      } catch (err) {
        console.warn("Could not destroy chartRef:", err);
      }
      chartRef.current = null;
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Calculate Y-axis scaling buffers with fallback values if empty
    const nonNullValues = values.filter((v) => v !== null && v !== undefined);
    let yMin = 0;
    let yMax = 100;
    if (nonNullValues.length > 0) {
      const minVal = Math.min(...nonNullValues);
      const maxVal = Math.max(...nonNullValues);
      const buffer = (maxVal - minVal) * 0.15 || 1;
      yMin = minVal >= 0 ? Math.max(0, minVal - buffer) : minVal - buffer;
      yMax = maxVal + buffer;
    }

    // Theme values matching Sleek Interface Theme
    const gridColor = "rgba(255, 255, 255, 0.03)";
    const tickColor = "#94A3B8";
    const tooltipBg = "#141414";
    const tooltipText = "#F8FAFC";

    // Shading plugin with full try-catch safety guard
    const adminShadingPlugin = {
      id: "adminShading",
      beforeDraw: (chart: any) => {
        try {
          const { ctx, chartArea, scales } = chart;
          if (!chartArea || !ctx) return;
          if (!scales || !scales.x) return;
          if (!labels || labels.length === 0 || transitionIdx < 0 || transitionIdx >= labels.length) return;

          const { top, bottom, left, right } = chartArea;
          const xScale = scales.x;
          
          let xOffset = left;
          if (xScale.getPixelForTick) {
            try {
              xOffset = xScale.getPixelForTick(transitionIdx);
            } catch (err) {
              xOffset = xScale.getPixelForValue(labels[transitionIdx]);
            }
          } else {
            xOffset = xScale.getPixelForValue(labels[transitionIdx]);
          }
          
          if (typeof xOffset !== "number" || isNaN(xOffset)) return;

          ctx.save();
          
          // Biden overlay (soft clear blue)
          ctx.fillStyle = "rgba(96, 165, 250, 0.08)";
          ctx.fillRect(left, top, xOffset - left, bottom - top);

          // Trump II overlay (soft clear rose)
          ctx.fillStyle = "rgba(251, 113, 133, 0.08)";
          ctx.fillRect(xOffset, top, right - xOffset, bottom - top);

          // Vertical Divider line between administrations
          ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(xOffset, top);
          ctx.lineTo(xOffset, bottom);
          ctx.stroke();

          // Shading Labels Watermark
          ctx.fillStyle = "rgba(148, 163, 184, 0.4)"; // soft slate-400
          ctx.font = "bold 9px 'JetBrains Mono', monospace";
          ctx.fillText("ERA BIDEN", left + 12, top + 18);
          ctx.fillText("ERA TRUMP II", xOffset + 12, top + 18);

          ctx.restore();
        } catch (pluginError) {
          console.warn("Error inside adminShadingPlugin beforeDraw hook:", pluginError);
        }
      }
    };

    const config: any = {
      type: "line", // Force line charts as requested
      data: {
        labels: labels,
        datasets: [
          {
            label: "Adm. Biden",
            data: bidenValues,
            borderColor: "#60A5FA",
            backgroundColor: "transparent",
            borderWidth: 2,
            pointRadius: 3.5, // Visible monthly points
            pointHoverRadius: 6,
            pointBackgroundColor: "#60A5FA",
            pointBorderColor: "#0A0A0A",
            pointBorderWidth: 1,
            fill: false, // Ensure transparent background so shading is clear
            tension: 0.15,
            spanGaps: false
          },
          {
            label: "Adm. Trump II",
            data: trumpValues,
            borderColor: "#FB7185",
            backgroundColor: "transparent",
            borderWidth: 2,
            pointRadius: 3.5, // Visible monthly points
            pointHoverRadius: 6,
            pointBackgroundColor: "#FB7185",
            pointBorderColor: "#0A0A0A",
            pointBorderWidth: 1,
            fill: false, // Ensure transparent background so shading is clear
            tension: 0.15,
            spanGaps: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // We render custom interactive legends in HTML
          },
          tooltip: {
            backgroundColor: tooltipBg,
            titleColor: tooltipText,
            bodyColor: tooltipText,
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
            cornerRadius: 6,
            padding: 10,
            displayColors: true,
            callbacks: {
              label: (context: any) => {
                let value = context.raw;
                if (value === null) return "";
                return ` ${context.dataset.label}: ${stats.unit === "USD por Semana" ? "$" : ""}${value} ${stats.unit !== "USD por Semana" ? stats.unit.split(" ")[0] : ""}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: tickColor,
              font: {
                family: "'JetBrains Mono', monospace",
                size: 9
              },
              maxRotation: 45,
              minRotation: 0,
              autoSkip: true,
              maxTicksLimit: isQuarterly ? 10 : 14
            }
          },
          y: {
            grid: {
              color: gridColor
            },
            min: chartType === "bar" ? 0 : yMin,
            max: yMax,
            ticks: {
              color: tickColor,
              font: {
                family: "'JetBrains Mono', monospace",
                size: 9
              },
              callback: (value: number) => {
                // Formatting values cleanly
                if (value >= 1000) return value.toLocaleString();
                return value;
              }
            }
          }
        }
      },
      plugins: [adminShadingPlugin]
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [labels, values, chartType, showRawData]);

  // Calculate change percentages or amounts with fallback values
  const lastVal = values && values.length > 0 ? values[values.length - 1] : 0;
  const firstVal = values && values.length > 0 ? values[0] : 0;
  const totalDifference = lastVal - firstVal;
  const percentageDiff = firstVal !== 0 ? ((totalDifference / firstVal) * 100).toFixed(1) : "0.0";
  const isPositiveTrend = totalDifference >= 0;

  return (
    <div className="transition-all w-full flex flex-col">
      {/* Chart Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262626] pb-4 mb-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#60A5FA] uppercase font-bold">Indicador {id}</span>
          <h3 className="text-lg font-semibold tracking-tight text-[#F8FAFC] font-sans mt-0.5">{title}</h3>
          <p className="text-xs text-[#94A3B8] mt-1 max-w-xl">{description}</p>
        </div>

        {/* Administrational Averages Badge Panel */}
        <div className="flex flex-wrap items-center gap-2.5">
          {id === "3" ? (
            <>
              {/* Biden Accumulated */}
              <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[125px] shadow-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">Acum. Biden</span>
                <span className="text-lg md:text-xl font-extrabold text-[#60A5FA] tracking-tight">
                  +21.40%
                </span>
              </div>

              {/* Trump II Accumulated */}
              <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[125px] shadow-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">Acum. Trump II</span>
                <span className="text-lg md:text-xl font-extrabold text-[#FB7185] tracking-tight">
                  +4.80%
                </span>
              </div>

              {/* Combined Change (Compounded Total) */}
              <div className="flex flex-col items-start rounded-lg px-3.5 py-1.5 min-w-[115px] border-l-4 border-l-rose-500 border-y border-r border-[#262626] bg-[#180a0b]/40 text-rose-400 shadow-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] opacity-80 font-bold">Acum. Total</span>
                <div className="flex items-center text-base md:text-lg font-black gap-1 tracking-tight">
                  <TrendingUp className="w-4 h-4 text-rose-400" />
                  <span>+27.20%</span>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Biden Avg */}
              <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[125px] shadow-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">Prom. Biden</span>
                <span className="text-lg md:text-xl font-extrabold text-[#60A5FA] tracking-tight">
                  {stats.unit === "USD por Semana" ? "$" : ""}
                  {stats.bidenAvg.toFixed(2)}
                  <span className="text-xs ml-0.5 font-normal text-slate-400"> {stats.unit.split(" ")[0]}</span>
                </span>
              </div>

              {/* Trump Avg */}
              <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[125px] shadow-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">Prom. Trump II</span>
                <span className="text-lg md:text-xl font-extrabold text-[#FB7185] tracking-tight">
                  {stats.unit === "USD por Semana" ? "$" : ""}
                  {stats.trumpAvg.toFixed(2)}
                  <span className="text-xs ml-0.5 font-normal text-slate-400"> {stats.unit.split(" ")[0]}</span>
                </span>
              </div>

              {/* Combined Change */}
              <div className={`flex flex-col items-start rounded-lg px-3.5 py-1.5 min-w-[115px] border-l-4 border-y border-r border-[#262626] shadow-lg ${
                isPositiveTrend 
                  ? "bg-[#0b1612]/40 border-l-emerald-500 text-emerald-400" 
                  : "bg-[#180a0b]/40 border-l-rose-500 text-rose-400"
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] opacity-80 font-bold">Var. Total</span>
                <div className="flex items-center text-base md:text-lg font-black gap-1 tracking-tight">
                  {isPositiveTrend ? <TrendingUp className="w-4 h-4 text-emerald-400" /> : <TrendingDown className="w-4 h-4 text-rose-400" />}
                  <span>{stats.totalChange.split(" ")[0]}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Embedded Chart Area or Raw Data List */}
      <div className="relative">
        {!showRawData ? (
          <div className="h-72 sm:h-80 xl:h-84 w-full">
            <canvas ref={canvasRef} id={`canvas-${id}`}></canvas>
          </div>
        ) : (
          <div className="h-72 sm:h-80 xl:h-84 overflow-y-auto bg-[#0A0A0A] border border-[#262626] rounded-xl p-3 font-mono text-xs text-[#94A3B8]">
            <div className="sticky top-0 bg-[#0A0A0A] pb-2 border-b border-[#262626] flex items-center justify-between text-[#94A3B8] font-bold mb-2 pr-2">
              <span>Período / Mes</span>
              <span>Valor ({stats.unit})</span>
            </div>
            {labels.map((lbl, idx) => {
              const val = values[idx];
              const isTrumpPeriod = idx >= transitionIdx;
              return (
                <div key={idx} className={`flex justify-between py-1 border-b border-[#141414] px-1 hover:bg-[#141414] rounded ${isTrumpPeriod ? "border-l-2 border-l-[#FB7185]" : "border-l-2 border-l-[#60A5FA]"}`}>
                  <span className={isTrumpPeriod ? "text-[#FB7185]" : "text-[#60A5FA]"}>{lbl}</span>
                  <span className="text-right text-[#F8FAFC] font-semibold">{val !== null ? val.toLocaleString() : "N/A"}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Chart Footer: Interactive Legend, Source, Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 border-t border-[#262626] pt-3 text-xs text-[#94A3B8] gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 font-mono">
            <div className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]"></div>
            <span>Adm. Biden (Ene 21 - Ene 25)</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FB7185]"></div>
            <span>Adm. Trump II (Ene 25 - Presente)</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-3 w-full sm:w-auto">
          <button
            onClick={() => setShowRawData(!showRawData)}
            className="flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8] hover:text-[#F8FAFC] bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] transition-colors rounded-md px-2.5 py-1 cursor-pointer"
          >
            {showRawData ? <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> : <FileText className="w-3.5 h-3.5" />}
            {showRawData ? "Ver Curva" : "Ver Datos"}
          </button>
          
          {stats.sources && stats.sources.length > 0 ? (
            <div className="text-[10px] font-mono text-slate-400 text-left sm:text-right flex flex-wrap items-center gap-1">
              <span>Fuente: </span>
              {stats.source.toLowerCase().includes("fórmula") && <span>Fórmula FRED </span>}
              {stats.source.toLowerCase().includes("fórmula") && <span className="text-slate-500">(</span>}
              {stats.sources.map((src, sIdx) => (
                <React.Fragment key={sIdx}>
                  {sIdx > 0 && <span className="text-slate-500">{stats.source.toLowerCase().includes("fórmula") ? " × " : ", "}</span>}
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 underline decoration-dotted transition-all font-semibold"
                    title={`Ver serie oficial: ${src.label}`}
                  >
                    {src.label}
                  </a>
                </React.Fragment>
              ))}
              {stats.source.toLowerCase().includes("fórmula") && <span className="text-slate-500">) / 100</span>}
            </div>
          ) : stats.sourceUrl ? (
            <a
              href={stats.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-slate-400 hover:text-emerald-400 transition-all text-left sm:text-right hover:underline"
              title={`Ver serie oficial en FRED: ${stats.source}`}
            >
              Fuente: <span className="underline decoration-dotted">{stats.source}</span>
            </a>
          ) : (
            <span className="text-[10px] font-mono text-slate-500 text-left sm:text-right" title={stats.source}>
              Fuente: {stats.source}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
