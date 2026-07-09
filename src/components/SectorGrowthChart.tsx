import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";
import { AdminStats } from "../data";
import { TrendingUp, TrendingDown, FileText } from "lucide-react";

// Register necessary Chart.js modules
Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

interface GrowthChartProps {
  id: string;
  title: string;
  description: string;
  labels: string[];
  values: number[];
  stats: AdminStats;
}

export const SectorGrowthChart: React.FC<GrowthChartProps> = ({
  id,
  title,
  description,
  labels,
  values,
  stats
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  const [showRawData, setShowRawData] = useState(false);

  // Split into Biden & Trump II datasets
  // Biden Era in growth labels is index 0 to 14 (Q2 2021 to Q4 2024)
  // Trump II Era is index 15 to 19 (Q1 2025 to Q1 2026)
  const transitionIdx = labels.indexOf("2025-Q1");

  const bidenValues = values.map((val, idx) => {
    return idx < transitionIdx && transitionIdx !== -1 ? val : (transitionIdx === -1 && idx < Math.floor(labels.length * 0.75) ? val : null);
  });

  const trumpValues = values.map((val, idx) => {
    return idx >= transitionIdx && transitionIdx !== -1 ? val : (transitionIdx === -1 && idx >= Math.floor(labels.length * 0.75) ? val : null);
  });

  useEffect(() => {
    if (!canvasRef.current) return;

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

    // Calculate Y-axis buffers
    const nonNullValues = values.filter((v) => v !== null && v !== undefined);
    let yMin = -2;
    let yMax = 5;
    if (nonNullValues.length > 0) {
      const minVal = Math.min(...nonNullValues);
      const maxVal = Math.max(...nonNullValues);
      const buffer = (maxVal - minVal) * 0.15 || 0.5;
      yMin = minVal < 0 ? minVal - buffer : -0.5;
      yMax = maxVal + buffer;
    }

    const gridColor = "rgba(255, 255, 255, 0.03)";
    const tickColor = "#94A3B8";

    const config: any = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Adm. Biden",
            data: bidenValues,
            backgroundColor: "rgba(96, 165, 250, 0.65)", // soft blue
            borderColor: "rgba(96, 165, 250, 0.95)",
            borderWidth: 1.5,
            borderRadius: 4,
            barPercentage: 0.8,
            categoryPercentage: 0.75
          },
          {
            label: "Adm. Trump II",
            data: trumpValues,
            backgroundColor: "rgba(251, 113, 133, 0.65)", // soft rose
            borderColor: "rgba(251, 113, 133, 0.95)",
            borderWidth: 1.5,
            borderRadius: 4,
            barPercentage: 0.8,
            categoryPercentage: 0.75
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
            backgroundColor: "#141414",
            titleColor: "#F8FAFC",
            bodyColor: "#F8FAFC",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
            cornerRadius: 6,
            padding: 10,
            displayColors: true,
            callbacks: {
              label: (context: any) => {
                let value = context.raw;
                if (value === null) return "";
                const formattedVal = (value >= 0 ? "+" : "") + value.toFixed(2) + "%";
                return ` ${context.dataset.label}: ${formattedVal}`;
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
              maxTicksLimit: 12
            }
          },
          y: {
            grid: {
              color: gridColor
            },
            min: yMin,
            max: yMax,
            ticks: {
              color: tickColor,
              font: {
                family: "'JetBrains Mono', monospace",
                size: 9
              },
              callback: (value: number) => {
                return (value >= 0 ? "+" : "") + value.toFixed(1) + "%";
              }
            }
          }
        }
      }
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [labels, values, showRawData]);

  const isPositiveTrend = stats.bidenAvg >= 0;

  return (
    <div className="transition-all w-full flex flex-col">
      {/* Chart Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262626] pb-4 mb-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase font-bold">Tasa de Crecimiento</span>
          <h3 className="text-lg font-semibold tracking-tight text-[#F8FAFC] font-sans mt-0.5">{title}</h3>
          <p className="text-xs text-[#94A3B8] mt-1 max-w-xl">{description}</p>
        </div>

        {/* Administrational Averages Badge Panel */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Biden Avg */}
          <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-[#60A5FA] border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[125px] shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">Crec. Prom. Biden</span>
            <span className="text-lg md:text-xl font-extrabold text-[#60A5FA] tracking-tight">
              +{stats.bidenAvg.toFixed(2)}%
            </span>
          </div>

          {/* Trump Avg */}
          <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-[#FB7185] border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[125px] shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">Crec. Prom. Trump II</span>
            <span className="text-lg md:text-xl font-extrabold text-[#FB7185] tracking-tight">
              +{stats.trumpAvg.toFixed(2)}%
            </span>
          </div>

          {/* Comparison */}
          <div className={`flex flex-col items-start rounded-lg px-3.5 py-1.5 min-w-[115px] border-l-4 border-y border-r border-[#262626] shadow-lg ${
            stats.trumpAvg < stats.bidenAvg
              ? "bg-[#180a0b]/40 border-l-rose-500 text-rose-400" 
              : "bg-[#0b1612]/40 border-l-emerald-500 text-emerald-400"
          }`}>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] opacity-80 font-bold">Diferencia</span>
            <div className="flex items-center text-base md:text-lg font-black gap-1 tracking-tight">
              {stats.trumpAvg >= stats.bidenAvg ? <TrendingUp className="w-4 h-4 text-emerald-400" /> : <TrendingDown className="w-4 h-4 text-rose-400" />}
              <span>{(stats.trumpAvg - stats.bidenAvg).toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Chart Area or Raw Data List */}
      <div className="relative">
        {!showRawData ? (
          <div className="h-72 sm:h-80 xl:h-84 w-full">
            <canvas ref={canvasRef} id={`growth-canvas-${id}`}></canvas>
          </div>
        ) : (
          <div className="h-72 sm:h-80 xl:h-84 overflow-y-auto bg-[#0A0A0A] border border-[#262626] rounded-xl p-3 font-mono text-xs text-[#94A3B8]">
            <div className="sticky top-0 bg-[#0A0A0A] pb-2 border-b border-[#262626] flex items-center justify-between text-[#94A3B8] font-bold mb-2 pr-2">
              <span>Período / Trimestre</span>
              <span>Crecimiento Intertrimestral</span>
            </div>
            {labels.map((lbl, idx) => {
              const val = values[idx];
              const isTrumpPeriod = idx >= transitionIdx && transitionIdx !== -1;
              return (
                <div key={idx} className={`flex justify-between py-1 border-b border-[#141414] px-1 hover:bg-[#141414] rounded ${isTrumpPeriod ? "border-l-2 border-l-[#FB7185]" : "border-l-2 border-l-[#60A5FA]"}`}>
                  <span className={isTrumpPeriod ? "text-[#FB7185]" : "text-[#60A5FA]"}>{lbl}</span>
                  <span className={`text-right font-semibold ${val >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                    {val !== null ? (val >= 0 ? "+" : "") + val.toFixed(2) + "%" : "N/A"}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Chart Footer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 border-t border-[#262626] pt-3 text-xs text-[#94A3B8] gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 font-mono">
            <div className="w-2.5 h-2.5 rounded bg-[#60A5FA]"></div>
            <span>Adm. Biden (Q2 21 - Q4 24)</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <div className="w-2.5 h-2.5 rounded bg-[#FB7185]"></div>
            <span>Adm. Trump II (Q1 25 - Q1 26)</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-3 w-full sm:w-auto">
          <button
            onClick={() => setShowRawData(!showRawData)}
            className="flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8] hover:text-[#F8FAFC] bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] transition-colors rounded-md px-2.5 py-1 cursor-pointer"
          >
            {showRawData ? <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> : <FileText className="w-3.5 h-3.5" />}
            {showRawData ? "Ver Columnas" : "Ver Datos"}
          </button>
          
          <span className="text-[10px] font-mono text-slate-500 text-left sm:text-right" title={stats.source}>
            Fuente: Cálculo sobre series oficiales BEA ({stats.source.replace("BEA (Serie ", "").replace(")", "")})
          </span>
        </div>
      </div>
    </div>
  );
};
