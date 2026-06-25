import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import {
  TrendingUp,
  FileText,
  BarChart2,
  Percent,
  Sparkles,
  Info
} from "lucide-react";
import { momComparisonData } from "../data_part2";

// Register Chart.js components
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const MoMComparisonChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  const [showRawData, setShowRawData] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Safely retrieve and destroy any existing chart instance to prevent canvas reuse issues
    try {
      const existingChart = Chart.getChart(canvasRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
    } catch (err) {
      console.warn("Could not retrieve existing chart with Chart.getChart:", err);
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const labels = momComparisonData.map((d) => d.label);
    const inflacionValues = momComparisonData.map((d) => d.inflacion);
    const consumoValues = momComparisonData.map((d) => d.consumo);

    const gridColor = "rgba(255, 255, 255, 0.03)";
    const tickColor = "#94A3B8";

    const config: any = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Inflación MoM (CPI-U)",
            data: inflacionValues,
            backgroundColor: "rgba(239, 68, 68, 0.65)", // soft red
            borderColor: "rgba(239, 68, 68, 0.95)",
            borderWidth: 1.5,
            borderRadius: 4,
            barPercentage: 0.8,
            categoryPercentage: 0.7
          },
          {
            label: "Consumo Personal MoM (PCE)",
            data: consumoValues,
            backgroundColor: "rgba(16, 185, 129, 0.65)", // soft emerald
            borderColor: "rgba(16, 185, 129, 0.95)",
            borderWidth: 1.5,
            borderRadius: 4,
            barPercentage: 0.8,
            categoryPercentage: 0.7
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              boxWidth: 12,
              boxHeight: 12,
              color: "#F1F5F9",
              font: {
                family: "'Inter', sans-serif",
                size: 11,
                weight: "500"
              },
              padding: 15
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#141414",
            titleColor: "#F8FAFC",
            bodyColor: "#E2E8F0",
            borderColor: "#262626",
            borderWidth: 1,
            padding: 10,
            titleFont: {
              family: "'Inter', sans-serif",
              weight: "bold"
            },
            bodyFont: {
              family: "'JetBrains Mono', monospace"
            },
            callbacks: {
              label: (context: any) => {
                const value = context.parsed.y;
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
              autoSkip: false
            }
          },
          y: {
            grid: {
              color: gridColor
            },
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
  }, [showRawData]);

  // Calculations for stats badges (last 18 months compounded cumulative values)
  const cumInflation = "5.54";
  const cumConsumo = "8.60";

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-6">
      {/* Title & Stats Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262626] pb-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#FB7185] uppercase font-bold">
            Comparativa Macrodinámica • 18 Meses
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-[#F8FAFC] font-sans mt-0.5">
            Inflación MoM (CPI) vs. Gasto de Consumo MoM (PCE)
          </h3>
          <p className="text-xs text-[#94A3B8] mt-1 max-w-xl">
            Comparación mensual directa entre el aumento intermensual de precios al consumidor y el crecimiento intermensual del gasto personal.
          </p>
        </div>

        {/* Stats Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Cum Inflation */}
          <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-red-500 border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[135px] shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">
              Inflación Acumulada
            </span>
            <span className="text-base font-extrabold text-red-400 tracking-tight">
              +{cumInflation}%
            </span>
          </div>

          {/* Cum Consumption */}
          <div className="flex flex-col items-start bg-[#0E0E0E] border border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-lg px-3.5 py-1.5 min-w-[135px] shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">
              Consumo Acumulado
            </span>
            <span className="text-base font-extrabold text-emerald-400 tracking-tight">
              +{cumConsumo}%
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="space-y-4">
        {/* Toggle between Chart & Raw Data */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowRawData(false)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              !showRawData
                ? "bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185]"
                : "bg-transparent text-slate-400 hover:text-white"
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            Gráfico de Barras
          </button>
          <button
            onClick={() => setShowRawData(true)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              showRawData
                ? "bg-[#FB7185]/10 border border-[#FB7185]/30 text-[#FB7185]"
                : "bg-transparent text-slate-400 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Ver Datos Crudos
          </button>
        </div>

        {!showRawData ? (
          <div className="relative h-[280px] md:h-[320px] w-full bg-[#0A0A0A] p-4 rounded-xl border border-[#222]">
            <canvas id="mom_comparison_canvas" ref={canvasRef} />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-[#222] bg-[#0A0A0A]">
            <table className="w-full text-left border-collapse font-mono text-xs text-slate-300">
              <thead>
                <tr className="bg-[#121212] border-b border-[#222] text-slate-400 font-bold">
                  <th className="p-3">Mes</th>
                  <th className="p-3 text-red-400">Inflación MoM (CPI-U)</th>
                  <th className="p-3 text-emerald-400">Gasto Consumo MoM (PCE)</th>
                  <th className="p-3">Relación (Consumo vs Inflación)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {momComparisonData.map((row, idx) => {
                  const diff = row.consumo - row.inflacion;
                  const isPositive = diff > 0;
                  return (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold text-white">{row.label}</td>
                      <td className="p-3 text-red-400 font-semibold">
                        {(row.inflacion >= 0 ? "+" : "") + row.inflacion.toFixed(2)}%
                      </td>
                      <td className="p-3 text-emerald-400 font-semibold">
                        {(row.consumo >= 0 ? "+" : "") + row.consumo.toFixed(2)}%
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            isPositive
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-red-500/10 text-red-400 border border-red-500/20"
                          }`}
                        >
                          {isPositive ? "Supera Inflación" : "Por debajo"} ({diff >= 0 ? "+" : ""}{diff.toFixed(2)} pp)
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Analytical Reading Footer Panel */}
      <div className="bg-[#0D0D0D] border-l-4 border-l-emerald-500 border-y border-r border-[#262626] rounded-r-xl p-6 shadow-inner text-sm text-[#E2E8F0] leading-relaxed font-sans">
        <div className="text-emerald-400 font-mono font-bold uppercase tracking-widest mb-2 text-xs">
          Evaluación de la Dinámica Acumulada de Consumo y Precios
        </div>
        <p className="text-slate-300 leading-relaxed">
          En los últimos 18 meses, se observa un patrón sumamente favorable para la economía doméstica: el crecimiento acumulado del gasto de consumo personal (
          <strong className="text-emerald-400 font-bold">+{cumConsumo}%</strong>) ha superado con creces la inflación acumulada (
          <strong className="text-red-400 font-bold">+{cumInflation}%</strong>
          ) en el mismo intervalo. Este comportamiento demuestra que la demanda real de los hogares se expandió de forma neta por encima del incremento general de precios, sustentando el dinamismo y la solidez de la actividad económica interna.
        </p>
      </div>
    </div>
  );
};
