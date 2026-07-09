// Datasets for "Desde mi punto de vista, ¿cómo vamos? Parte 3"
// All numbers correspond to official BEA, BLS, and FRED sources.

import { AdminStats } from "./data";

export const QUARTERLY_LABELS_P3 = [
  "2021-Q1", "2021-Q2", "2021-Q3", "2021-Q4",
  "2022-Q1", "2022-Q2", "2022-Q3", "2022-Q4",
  "2023-Q1", "2023-Q2", "2023-Q3", "2023-Q4",
  "2024-Q1", "2024-Q2", "2024-Q3", "2024-Q4",
  "2025-Q1", "2025-Q2", "2025-Q3", "2025-Q4",
  "2026-Q1"
];

export const GROWTH_LABELS_P3 = [
  "2021-Q2", "2021-Q3", "2021-Q4",
  "2022-Q1", "2022-Q2", "2022-Q3", "2022-Q4",
  "2023-Q1", "2023-Q2", "2023-Q3", "2023-Q4",
  "2024-Q1", "2024-Q2", "2024-Q3", "2024-Q4",
  "2025-Q1", "2025-Q2", "2025-Q3", "2025-Q4",
  "2026-Q1"
];

// SECTION 1: Sector Privado como % PIB data
export const privateIndustriesGdp = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    87.8, 88.1, 88.2, 88.5,
    88.6, 88.8, 88.8, 88.9,
    88.9, 88.9, 88.9, 88.8,
    88.7, 88.8, 88.8, 88.7,
    88.7, 88.7, 88.8, 88.9,
    89.0
  ],
  stats: {
    bidenAvg: 88.64,
    trumpAvg: 88.82,
    totalChange: "+1.20% (puntos %)",
    unit: "% del PIB",
    source: "BEA (Serie VAPGDPPI)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAPGDPPI"
  } as AdminStats
};

// SECTION 1: Utilidades corporativas después de impuestos (Serie CP)
export const corporateProfits = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    2683.4, 2984.5, 2972.6, 2951.2,
    2926.6, 3156.7, 3052.0, 2891.8,
    3147.6, 3175.8, 3291.1, 3354.4,
    3393.1, 3468.7, 3444.0, 3689.5,
    3335.8, 3355.9, 3591.3, 3792.2,
    3950.7
  ],
  stats: {
    bidenAvg: 3161.44,
    trumpAvg: 3605.18,
    totalChange: "+$1,267.3B (+47.2%)",
    unit: "Miles de Millones USD",
    source: "BEA (Serie CP)",
    sourceUrl: "https://fred.stlouisfed.org/series/CP"
  } as AdminStats
};

// GDP Share in Q1 2026 (All private sectors)
export const gdpShareQ12026 = [
  { name: "Finanzas, seguros, real estate, alquiler", value: 21.7, accumulated: 21.7, isTopSeven: true },
  { name: "Servicios profesionales y empresariales", value: 13.1, accumulated: 34.8, isTopSeven: true },
  { name: "Manufactura", value: 9.4, accumulated: 44.2, isTopSeven: true },
  { name: "Servicios educativos, salud y asistencia social", value: 8.8, accumulated: 53.0, isTopSeven: true },
  { name: "Comercio mayorista", value: 6.4, accumulated: 59.4, isTopSeven: true },
  { name: "Comercio minorista", value: 6.2, accumulated: 65.6, isTopSeven: true },
  { name: "Información", value: 5.6, accumulated: 71.2, isTopSeven: true },
  { name: "Artes, entretenimiento y recreación; comida", value: 4.3, accumulated: 75.5, isTopSeven: false },
  { name: "Construcción", value: 4.3, accumulated: 79.8, isTopSeven: false },
  { name: "Transporte y almacenamiento", value: 3.3, accumulated: 83.1, isTopSeven: false },
  { name: "Otros servicios, excepto gobierno", value: 2.1, accumulated: 85.2, isTopSeven: false },
  { name: "Servicios públicos", value: 1.5, accumulated: 86.7, isTopSeven: false },
  { name: "Minería", value: 1.4, accumulated: 88.1, isTopSeven: false },
  { name: "Agro, silvicultura, pesca y caza", value: 0.7, accumulated: 88.8, isTopSeven: false }
];

// Employment by Sector in March 2026
export const employmentBySectorMarch2026 = [
  { name: "Servicios educativos, salud y asistencia social", value: 27.8, accumulated: 27.8, pct: 20.2, isTopSevenEmp: true },
  { name: "Servicios profesionales y empresariales", value: 22.4, accumulated: 50.2, pct: 36.5, isTopSevenEmp: true },
  { name: "Artes, entretenimiento y recreación; comida", value: 17.0, accumulated: 67.2, pct: 48.9, isTopSevenEmp: true },
  { name: "Comercio minorista", value: 15.4, accumulated: 82.6, pct: 60.1, isTopSevenEmp: true },
  { name: "Manufactura", value: 12.6, accumulated: 95.2, pct: 69.3, isTopSevenEmp: true },
  { name: "Finanzas, seguros, real estate y alquiler", value: 9.1, accumulated: 104.4, pct: 75.9, isTopSevenEmp: true },
  { name: "Construcción", value: 8.3, accumulated: 112.7, pct: 81.9, isTopSevenEmp: true },
  { name: "Transporte y almacenamiento", value: 6.6, accumulated: 119.3, pct: 86.7, isTopSevenEmp: false },
  { name: "Comercio mayorista", value: 6.1, accumulated: 125.4, pct: 91.1, isTopSevenEmp: false },
  { name: "Otros servicios, excepto gobierno", value: 6.0, accumulated: 131.4, pct: 95.5, isTopSevenEmp: false },
  { name: "Información", value: 2.8, accumulated: 134.2, pct: 97.5, isTopSevenEmp: false },
  { name: "Agro, silvicultura, pesca y caza", value: 2.2, accumulated: 136.4, pct: 99.1, isTopSevenEmp: false },
  { name: "Minería", value: 0.6, accumulated: 137.0, pct: 99.5, isTopSevenEmp: false },
  { name: "Servicios públicos", value: 0.6, accumulated: 137.6, pct: 100.0, isTopSevenEmp: false }
];

// SECTION 2: Finanzas, seguros, real estate, alquiler (VAFIRL)
export const financeData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    4829.5, 4952.7, 5055.1, 5221.3,
    5314.8, 5399.2, 5512.3, 5594.1,
    5745.5, 5822.0, 5937.2, 6029.2,
    6124.9, 6248.5, 6330.7, 6422.2,
    6511.4, 6620.9, 6755.0, 6834.3,
    6907.5
  ],
  stats: {
    bidenAvg: 5658.70,
    trumpAvg: 6725.82,
    totalChange: "+2,078.0 Mil M (+43.0%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAFIRL)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAFIRL"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    2.55, 2.07, 3.29, 1.79,
    1.59, 2.09, 1.48, 2.71,
    1.33, 1.98, 1.55, 1.59,
    2.02, 1.32, 1.45, 1.39,
    1.68, 2.03, 1.17, 1.07
  ],
  growthStats: {
    bidenAvg: 1.92,
    trumpAvg: 1.47,
    totalChange: "-0.45% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAFIRL"
  } as AdminStats
};

// SECTION 3: Servicios Profesionales y de Negocios (VAPBS)
export const professionalServicesData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    2936.0, 3015.0, 3111.6, 3221.9,
    3293.0, 3333.8, 3406.3, 3464.2,
    3533.3, 3595.7, 3632.8, 3677.6,
    3716.3, 3776.2, 3844.5, 3907.4,
    3933.4, 3980.2, 4068.5, 4111.4,
    4160.3
  ],
  stats: {
    bidenAvg: 3466.60,
    trumpAvg: 4050.76,
    totalChange: "+1,224.3 Mil M (+41.7%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAPBS)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAPBS"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    2.69, 3.20, 3.54, 2.21,
    1.24, 2.17, 1.70, 1.99,
    1.77, 1.03, 1.23, 1.05,
    1.61, 1.81, 1.64, 0.67,
    1.19, 2.22, 1.05, 1.19
  ],
  growthStats: {
    bidenAvg: 1.86,
    trumpAvg: 1.26,
    totalChange: "-0.60% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAPBS"
  } as AdminStats
};

// SECTION 4: Manufactura (VAMA)
export const manufacturingData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    2303.9, 2377.3, 2423.1, 2561.0,
    2591.2, 2666.9, 2671.0, 2743.7,
    2742.0, 2766.4, 2868.3, 2889.3,
    2851.8, 2884.7, 2897.7, 2888.7,
    2813.7, 2859.7, 2951.1, 2961.4,
    3000.4
  ],
  stats: {
    bidenAvg: 2695.44,
    trumpAvg: 2917.26,
    totalChange: "+696.5 Mil M (+30.2%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAMA)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAMA"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    3.19, 1.93, 5.69, 1.18,
    2.92, 0.15, 2.72, -0.06,
    0.89, 3.68, 0.73, -1.30,
    1.15, 0.45, -0.31, -2.60,
    1.63, 3.20, 0.35, 1.32
  ],
  growthStats: {
    bidenAvg: 1.53,
    trumpAvg: 0.78,
    totalChange: "-0.75% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAMA"
  } as AdminStats
};

// SECTION 5: Servicios Educativos y de Salud (VAESHS)
export const educationHealthData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    1961.2, 1980.7, 2014.6, 2060.0,
    2104.8, 2125.2, 2180.6, 2226.0,
    2291.7, 2337.2, 2381.2, 2430.3,
    2476.9, 2520.8, 2567.3, 2611.6,
    2651.4, 2697.4, 2741.0, 2783.1,
    2819.6
  ],
  stats: {
    bidenAvg: 2266.88,
    trumpAvg: 2738.50,
    totalChange: "+858.4 Mil M (+43.8%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAESHS)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAESHS"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    0.99, 1.71, 2.25, 2.17,
    0.97, 2.61, 2.08, 2.95,
    1.99, 1.88, 2.06, 1.92,
    1.77, 1.84, 1.73, 1.52,
    1.73, 1.62, 1.54, 1.31
  ],
  growthStats: {
    bidenAvg: 1.93,
    trumpAvg: 1.54,
    totalChange: "-0.39% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAESHS"
  } as AdminStats
};

// SECTION 6: Comercio Mayorista (VAW)
export const wholesaleData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    1363.3, 1396.5, 1421.1, 1478.5,
    1548.7, 1586.8, 1610.5, 1631.8,
    1636.8, 1638.9, 1661.8, 1673.6,
    1681.0, 1689.8, 1717.5, 1736.9,
    1761.7, 1895.9, 1955.0, 2008.9,
    2041.8
  ],
  stats: {
    bidenAvg: 1602.07,
    trumpAvg: 1975.40,
    totalChange: "+678.5 Mil M (+49.8%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAW)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAW"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    2.44, 1.76, 4.04, 4.75,
    2.46, 1.49, 1.32, 0.31,
    0.13, 1.40, 0.71, 0.44,
    0.52, 1.64, 1.13, 1.43,
    7.62, 3.12, 2.76, 1.64
  ],
  growthStats: {
    bidenAvg: 1.62,
    trumpAvg: 3.79,
    totalChange: "+2.17% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAW"
  } as AdminStats
};

// SECTION 7: Comercio Detallista (VAR)
export const retailData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    1478.6, 1553.9, 1528.8, 1588.3,
    1596.2, 1626.5, 1659.3, 1709.3,
    1740.0, 1754.0, 1802.6, 1821.7,
    1828.7, 1838.9, 1865.5, 1863.1,
    1877.1, 1906.9, 1943.2, 1959.9,
    1989.6
  ],
  stats: {
    bidenAvg: 1703.46,
    trumpAvg: 1935.34,
    totalChange: "+511.0 Mil M (+34.6%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAR)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAR"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    5.09, -1.62, 3.89, 0.50,
    1.90, 2.02, 3.01, 1.80,
    0.80, 2.77, 1.06, 0.38,
    0.56, 1.45, -0.13, 0.75,
    1.59, 1.90, 0.86, 1.52
  ],
  growthStats: {
    bidenAvg: 1.51,
    trumpAvg: 1.47,
    totalChange: "-0.04% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAR"
  } as AdminStats
};

// SECTION 8: Industria Informática (VAI)
export const informationData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    1262.4, 1301.0, 1321.0, 1366.1,
    1350.8, 1370.7, 1394.0, 1418.5,
    1439.8, 1472.7, 1516.7, 1535.9,
    1553.3, 1580.9, 1610.2, 1626.4,
    1633.8, 1666.3, 1718.8, 1761.3,
    1787.0
  ],
  stats: {
    bidenAvg: 1445.03,
    trumpAvg: 1713.44,
    totalChange: "+524.6 Mil M (+41.6%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAI)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAI"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    3.06, 1.54, 3.41, -1.12,
    1.47, 1.70, 1.76, 1.50,
    2.29, 2.99, 1.27, 1.13,
    1.78, 1.85, 1.01, 0.45,
    1.99, 3.15, 2.47, 1.46
  ],
  growthStats: {
    bidenAvg: 1.63,
    trumpAvg: 2.27,
    totalChange: "+0.64% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAI"
  } as AdminStats
};

// SECTION 9: Arte, entretenimiento y recreación (VAAER)
export const artsEntertainmentData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    191.8, 207.0, 225.3, 238.2,
    242.5, 256.8, 274.1, 282.5,
    298.8, 302.3, 303.7, 310.1,
    315.0, 325.7, 330.9, 335.5,
    346.4, 355.7, 360.1, 361.2,
    369.5
  ],
  stats: {
    bidenAvg: 277.51,
    trumpAvg: 358.58,
    totalChange: "+177.7 Mil M (+92.6%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAAER)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAAER"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    7.92, 8.84, 5.73, 1.81,
    5.90, 6.74, 3.06, 5.77,
    1.17, 0.46, 2.11, 1.58,
    3.40, 1.60, 1.39, 3.25,
    2.68, 1.24, 0.31, 2.30
  ],
  growthStats: {
    bidenAvg: 3.80,
    trumpAvg: 1.63,
    totalChange: "-2.17% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAAER"
  } as AdminStats
};

// SECTION 10: Construcción (VAC)
export const constructionData = {
  labels: QUARTERLY_LABELS_P3,
  values: [
    995.8, 1000.8, 1008.3, 1043.5,
    1076.3, 1088.4, 1116.2, 1168.7,
    1186.0, 1205.7, 1237.4, 1269.1,
    1287.5, 1299.8, 1312.2, 1322.1,
    1336.3, 1340.2, 1344.1, 1344.7,
    1358.6
  ],
  stats: {
    bidenAvg: 1163.61,
    trumpAvg: 1344.78,
    totalChange: "+362.8 Mil M (+36.4%)",
    unit: "Miles de Millones USD SAAR",
    source: "BEA (Serie VAC)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAC"
  } as AdminStats,
  growthLabels: GROWTH_LABELS_P3,
  growthValues: [
    0.50, 0.75, 3.49, 3.14,
    1.12, 2.55, 4.70, 1.48,
    1.66, 2.63, 2.56, 1.45,
    0.96, 0.95, 0.75, 1.07,
    0.29, 0.29, 0.04, 1.03
  ],
  growthStats: {
    bidenAvg: 1.86,
    trumpAvg: 0.41,
    totalChange: "-1.45% de Promedio",
    unit: "% Crecimiento Intertrimestral",
    source: "BEA (Cálculo Trimestral)",
    sourceUrl: "https://fred.stlouisfed.org/series/VAC"
  } as AdminStats
};
