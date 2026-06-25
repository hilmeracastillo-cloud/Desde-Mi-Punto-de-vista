// Datasets for "Desde mi punto de vista, ¿cómo vamos? Parte 2"
// All numbers correspond to official FRED, BEA, BLS, and Department of the Treasury sources.

export interface InvestmentItem {
  industry: string;
  company: string;
  amount: number; // Billions USD
  period: string;
  link: string;
}

export const QUARTERLY_LABELS_P2 = [
  "2021-Q1", "2021-Q2", "2021-Q3", "2021-Q4",
  "2022-Q1", "2022-Q2", "2022-Q3", "2022-Q4",
  "2023-Q1", "2023-Q2", "2023-Q3", "2023-Q4",
  "2024-Q1", "2024-Q2", "2024-Q3", "2024-Q4",
  "2025-Q1", "2025-Q2", "2025-Q3", "2025-Q4",
  "2026-Q1"
];

export const MONTHS_P2 = [
  "Ene 21", "Abr 21", "Jul 21", "Oct 21",
  "Ene 22", "Abr 22", "Jul 22", "Oct 22",
  "Ene 23", "Abr 23", "Jul 23", "Oct 23",
  "Ene 24", "Abr 24", "Jul 24", "Oct 24",
  "Ene 25", "Abr 25", "Jul 25", "Oct 25",
  "Ene 26", "Abr 26", "May 26"
];

// Helper functions for 100% precise math calculations
const getAvg = (values: number[], start: number, end: number): number => {
  const slice = values.slice(start, end + 1);
  const sum = slice.reduce((a, b) => a + b, 0);
  return parseFloat((sum / slice.length).toFixed(2));
};

// 1. GDP Nominal Anualizado (Q1 2021 - Q1 2026) in Billions USD
const gdpValues = [
  22680.7, 23425.9, 23982.4, 24813.6,
  25250.3, 25861.3, 26336.3, 26770.5,
  27216.4, 27530.1, 28074.8, 28424.7,
  28708.2, 29147.0, 29511.7, 29825.2,
  30042.1, 30485.7, 31098.0, 31422.5,
  31865.7
];
const gdpDiff = gdpValues[20] - gdpValues[0];
const gdpPct = (gdpDiff / gdpValues[0]) * 100;

export const gdpData = {
  labels: QUARTERLY_LABELS_P2,
  values: gdpValues,
  stats: {
    bidenAvg: getAvg(gdpValues, 0, 15),
    trumpAvg: getAvg(gdpValues, 16, 20),
    totalChange: `+$${(gdpDiff / 1000).toFixed(2)} T (+${gdpPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: GDP)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/GDP"
  }
};

// 2. GDP por Cápita (Q1 2021 - Q1 2026) in USD (Real, chained 2017 dollars)
const gdpPerCapitaValues = [
  68304, 70514, 72099, 74492,
  75722, 77438, 78703, 79829,
  81007, 81779, 83199, 84025,
  84676, 85770, 86669, 87463,
  88002, 89195, 90883, 91762,
  93016
];
const gdpCapitaDiff = gdpPerCapitaValues[20] - gdpPerCapitaValues[0];
const gdpCapitaPct = (gdpCapitaDiff / gdpPerCapitaValues[0]) * 100;

export const gdpPerCapitaData = {
  labels: QUARTERLY_LABELS_P2,
  values: gdpPerCapitaValues,
  stats: {
    bidenAvg: getAvg(gdpPerCapitaValues, 0, 15),
    trumpAvg: getAvg(gdpPerCapitaValues, 16, 20),
    totalChange: `+$${gdpCapitaDiff.toLocaleString(undefined, { maximumFractionDigits: 0 })} (+${gdpCapitaPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: A939RC0Q052SBEA)",
    unit: "USD por Persona (Dólares encadenados de 2017)",
    sourceUrl: "https://fred.stlouisfed.org/series/A939RC0Q052SBEA"
  }
};

// 3. Consumo Personal: Gasto de Consumo Personal Bruto (Mensual, Ene 21 - May 26) in Billions USD
const consumoTotalValues = [
  15073.0, 15917.5, 16239.7, 16704.2, // 2021
  16993.8, 17490.0, 17770.1, 18109.6, // 2022
  18449.1, 18641.8, 18884.2, 19109.4, // 2023
  19303.3, 19665.7, 19949.5, 20226.0, // 2024
  20462.2, 20746.4, 21007.3, 21288.1, // 2025
  21478.7, 21903.7, 22059.8           // 2026
];
const consumoTotalDiff = consumoTotalValues[22] - consumoTotalValues[0];
const consumoTotalPct = (consumoTotalDiff / consumoTotalValues[0]) * 100;

export const consumoTotalData = {
  labels: MONTHS_P2,
  values: consumoTotalValues,
  stats: {
    bidenAvg: 18182.21,
    trumpAvg: 21241.53,
    totalChange: `+$${(consumoTotalDiff / 1000).toFixed(2)} T (+${consumoTotalPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: PCE)",
    unit: "Miles de Millones de USD",
    sources: [
      { label: "PCE", url: "https://fred.stlouisfed.org/series/PCE" }
    ]
  }
};

// 4. Consumo Personal como % del GDP
const consumoPctValues = [
  67.3, 68.4, 68.3, 67.8,
  67.9, 68.1, 67.9, 67.7,
  67.9, 67.9, 67.5, 67.5,
  67.7, 67.8, 67.9, 68.2,
  68.4, 68.2, 67.9, 68.0,
  67.9
];
const consumoPctDiff = consumoPctValues[20] - consumoPctValues[0];

export const consumoPctData = {
  labels: QUARTERLY_LABELS_P2,
  values: consumoPctValues,
  stats: {
    bidenAvg: 67.86,
    trumpAvg: 68.08,
    totalChange: `${consumoPctDiff > 0 ? "+" : ""}${consumoPctDiff.toFixed(1)} pp`,
    source: "U.S. Bureau of Economic Analysis (FRED: DPCERE1Q156NBEA)",
    unit: "% del PIB",
    sources: [
      { label: "DPCERE1Q156NBEA", url: "https://fred.stlouisfed.org/series/DPCERE1Q156NBEA" }
    ]
  }
};

// 5. Gasto Gubernamental como % del GDP
const gceValues = [
  4155.4, 4174.3, 4219.9, 4285.1,
  4336.2, 4439.4, 4486.5, 4570.6,
  4640.5, 4673.4, 4789.7, 4861.0,
  4931.8, 4995.2, 5086.9, 5150.7,
  5195.5, 5237.0, 5324.4, 5343.5,
  5416.7
];
const gastoPctValues = gceValues.map((val, i) => parseFloat(((val / gdpValues[i]) * 100).toFixed(1)));
const gastoPctDiff = gastoPctValues[20] - gastoPctValues[0];

export const gastoPctData = {
  labels: QUARTERLY_LABELS_P2,
  values: gastoPctValues,
  stats: {
    bidenAvg: getAvg(gastoPctValues, 0, 15),
    trumpAvg: getAvg(gastoPctValues, 16, 20),
    totalChange: `${gastoPctDiff > 0 ? "+" : ""}${gastoPctDiff.toFixed(1)} pp`,
    source: "Fórmula FRED: (GCE / GDP) * 100",
    unit: "% del PIB",
    sources: [
      { label: "GCE", url: "https://fred.stlouisfed.org/series/GCE" },
      { label: "GDP", url: "https://fred.stlouisfed.org/series/GDP" }
    ]
  }
};

// 6. Inversión Privada Total (Q1 2021 - Q1 2026) in Billions USD
const inversionValues = [
  4058.9, 4049.7, 4255.3, 4622.3,
  4814.3, 4811.5, 4812.3, 4939.2,
  4883.8, 4961.1, 5088.8, 5161.2,
  5155.0, 5290.2, 5330.2, 5261.8,
  5556.2, 5358.6, 5419.0, 5500.6,
  5634.0
];
const inversionDiff = inversionValues[20] - inversionValues[0];
const inversionPct = (inversionDiff / inversionValues[0]) * 100;

export const inversionData = {
  labels: QUARTERLY_LABELS_P2,
  values: inversionValues,
  stats: {
    bidenAvg: getAvg(inversionValues, 0, 15),
    trumpAvg: getAvg(inversionValues, 16, 20),
    totalChange: `+$${(inversionDiff / 1000).toFixed(2)} T (+${inversionPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: GPDI)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/GPDI"
  }
};

// Major private investments in the reindustrialization of the USA
export const investmentsTable: InvestmentItem[] = [
  {
    industry: "Semiconductores y Hardware Avanzado",
    company: "Micron Technology",
    amount: 200.00,
    period: "Próximos 20 años (Inicio formal de obras en enero de 2026)",
    link: "https://www.governor.ny.gov/news/governor-hochul-announces-micron-commit-up-100-billion-build-largest-semiconductor-fabrication"
  },
  {
    industry: "Semiconductores y Hardware Avanzado",
    company: "TSMC",
    amount: 165.00,
    period: "Largo plazo (Fases extendiéndose hasta 2030 y más allá)",
    link: "https://www.nist.gov/news-events/news/2024/04/biden-harris-administration-announces-preliminary-agreement-tsmc-under-chips"
  },
  {
    industry: "Automotriz y Materiales Críticos",
    company: "Stellantis",
    amount: 13.00,
    period: "Próximos 4 años (Plan estratégico de expansión de capacidad)",
    link: "https://uaw.org/uaw-stellantis-tentative-agreement-reopens-belvidere-creates-thousands-of-jobs/"
  },
  {
    industry: "Farmacéutica y Ciencias de la Vida",
    company: "AbbVie",
    amount: 1.40,
    period: "Fase de construcción plurianual (Campus de Durham)",
    link: "https://governor.nc.gov/news/press-releases/2024/04/09/governor-cooper-announces-biomanufacturing-leader-abbvie-expand-operations-durham-county"
  },
  {
    industry: "Automotriz y Materiales Críticos",
    company: "MP Materials",
    amount: 1.25,
    period: "Fases consecutivas de desarrollo de capital (Phased Capital)",
    link: "https://mpmaterials.com/news/mp-materials-to-build-us-magnetics-facility-enters-long-term-supply-agreement-with-general-motors/"
  }
];

// 7. Exportaciones Totales de Bienes y Servicios (Q1 2021 - Q1 2026) in Billions USD
const exportsTotalValues = [
  2393.0, 2522.8, 2581.3, 2777.6,
  2865.2, 3093.7, 3129.1, 3057.7,
  3085.5, 3016.2, 3082.1, 3109.6,
  3164.1, 3192.6, 3256.5, 3248.3,
  3293.7, 3267.5, 3366.9, 3350.6,
  3526.2
];
const exportsTotalDiff = exportsTotalValues[20] - exportsTotalValues[0];
const exportsTotalPct = (exportsTotalDiff / exportsTotalValues[0]) * 100;

export const exportsTotalData = {
  labels: QUARTERLY_LABELS_P2,
  values: exportsTotalValues,
  stats: {
    bidenAvg: getAvg(exportsTotalValues, 0, 15),
    trumpAvg: getAvg(exportsTotalValues, 16, 20),
    totalChange: `+$${(exportsTotalDiff / 1000).toFixed(2)} T (+${exportsTotalPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: EXPGS)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/EXPGS"
  }
};

// 8. Exportaciones de Bienes (Q1 2021 - Q1 2026) in Billions USD (Real, Chained 2017 Dollars)
const exportsBienesValues = [
  2247.4, 2270.2, 2268.6, 2402.5,
  2377.5, 2451.7, 2538.9, 2520.1,
  2543.5, 2509.3, 2536.7, 2574.6,
  2603.6, 2608.0, 2664.3, 2658.5,
  2659.5, 2647.3, 2708.8, 2686.8,
  2770.9
];
const exportsBienesDiff = exportsBienesValues[20] - exportsBienesValues[0];
const exportsBienesPct = (exportsBienesDiff / exportsBienesValues[0]) * 100;

export const exportsBienesData = {
  labels: QUARTERLY_LABELS_P2,
  values: exportsBienesValues,
  stats: {
    bidenAvg: getAvg(exportsBienesValues, 0, 15),
    trumpAvg: getAvg(exportsBienesValues, 16, 20),
    totalChange: `+$${(exportsBienesDiff / 1000).toFixed(2)} T (+${exportsBienesPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: EXPGSC1)",
    unit: "Miles de Millones de USD (Dólares encadenados de 2017)",
    sourceUrl: "https://fred.stlouisfed.org/series/EXPGSC1"
  }
};

// 9. Importaciones de Bienes y Servicios (Q1 2021 - Q1 2026) in Billions USD
const importsTotalValues = [
  3182.1, 3348.4, 3454.8, 3686.4,
  3914.4, 4089.9, 3984.7, 3908.3,
  3880.4, 3813.7, 3847.6, 3897.7,
  3986.6, 4087.0, 4194.8, 4186.9,
  4558.3, 4167.3, 4123.4, 4135.6,
  4421.2
];
const importsTotalDiff = importsTotalValues[20] - importsTotalValues[0];
const importsTotalPct = (importsTotalDiff / importsTotalValues[0]) * 100;

export const importsTotalData = {
  labels: QUARTERLY_LABELS_P2,
  values: importsTotalValues,
  stats: {
    bidenAvg: getAvg(importsTotalValues, 0, 15),
    trumpAvg: getAvg(importsTotalValues, 16, 20),
    totalChange: `+$${(importsTotalDiff / 1000).toFixed(2)} T (+${importsTotalPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: IMPGS)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/IMPGS"
  }
};

// 10. Importaciones de Bienes (Q1 2021 - Q1 2026) in Billions USD (Real, Chained 2017 Dollars)
const importsBienesValues = [
  3107.1, 3174.4, 3225.5, 3387.1,
  3484.4, 3544.7, 3492.0, 3464.6,
  3455.7, 3437.4, 3462.9, 3508.8,
  3567.8, 3640.2, 3729.2, 3727.4,
  4040.2, 3705.3, 3664.3, 3655.4,
  3834.6
];
const importsBienesDiff = importsBienesValues[20] - importsBienesValues[0];
const importsBienesPct = (importsBienesDiff / importsBienesValues[0]) * 100;

export const importsBienesData = {
  labels: QUARTERLY_LABELS_P2,
  values: importsBienesValues,
  stats: {
    bidenAvg: getAvg(importsBienesValues, 0, 15),
    trumpAvg: getAvg(importsBienesValues, 16, 20),
    totalChange: `+$${(importsBienesDiff / 1000).toFixed(2)} T (+${importsBienesPct.toFixed(1)}%)`,
    source: "U.S. Bureau of Economic Analysis (FRED: IMPGSC1)",
    unit: "Miles de Millones de USD (Dólares encadenados de 2017)",
    sourceUrl: "https://fred.stlouisfed.org/series/IMPGSC1"
  }
};

// 11. Net Exports of Goods and Services (Q1 2021 - Q1 2026) in Billions USD
const netExportsValues = [
  -789.0, -825.6, -873.5, -908.8,
  -1049.2, -996.2, -855.6, -850.6,
  -794.9, -797.5, -765.5, -788.0,
  -822.5, -894.4, -938.3, -938.7,
  -1264.6, -899.8, -756.6, -785.0,
  -820.0
];
const netExpReduction = ((Math.abs(netExportsValues[16]) - Math.abs(netExportsValues[20])) / Math.abs(netExportsValues[16]) * 100);

export const netExportsData = {
  labels: QUARTERLY_LABELS_P2,
  values: netExportsValues,
  stats: {
    bidenAvg: getAvg(netExportsValues, 0, 15),
    trumpAvg: getAvg(netExportsValues, 16, 20),
    totalChange: `Déficit Q1-26: -$${Math.abs(netExportsValues[20]).toFixed(1)}B (Se redujo ${netExpReduction.toFixed(1)}% vs Q1-25)`,
    source: "U.S. Bureau of Economic Analysis (FRED: NETEXP)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/NETEXP",
    sources: [
      { label: "NETEXP", url: "https://fred.stlouisfed.org/series/NETEXP" }
    ]
  }
};

// 12. Federal Customs Duties on Imports (Q1 2021 - Q1 2026) in Billions USD
const arancelesValues = [
  80.7, 89.8, 89.2, 96.6,
  107.4, 110.2, 101.7, 90.1,
  84.4, 83.5, 79.5, 79.1,
  82.3, 78.9, 85.9, 87.2,
  97.0, 267.7, 331.4, 364.3,
  346.2
];
const arancelesDiff = arancelesValues[20] - arancelesValues[0];
const arancelesPct = (arancelesDiff / arancelesValues[0]) * 100;

export const arancelesData = {
  labels: QUARTERLY_LABELS_P2,
  values: arancelesValues,
  stats: {
    bidenAvg: getAvg(arancelesValues, 0, 15),
    trumpAvg: getAvg(arancelesValues, 16, 20),
    totalChange: `+$${arancelesDiff.toFixed(1)} B (+${arancelesPct.toFixed(1)}%)`,
    source: "U.S. Department of the Treasury (FRED: B235RC1Q027SBEA)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/B235RC1Q027SBEA"
  }
};

// 13. Saldo Mensual del Gobierno Federal (Ene 21 - May 26) - Real values from FRED: MTSDS133FMS (Billions USD)
const saldoMensualValues = [
  -162.8, -225.6, -302.1, -165.1,
  118.7,  308.2, -211.1,  -87.8,
  -38.8,  176.2, -220.8,  -66.6,
  -21.9,  209.5, -243.7, -257.5,
  -128.6, 258.4, -291.1, -284.4,
  -94.6,  215.0, -292.6
];

export const saldoMensualData = {
  labels: MONTHS_P2,
  values: saldoMensualValues,
  stats: {
    // Note: Official averages are from the FULL monthly dataset from FRED, not just the subset of months displayed here.
    bidenAvg: -162.68,
    trumpAvg: -135.94,
    totalChange: `Último: -$${Math.abs(saldoMensualValues[saldoMensualValues.length - 1]).toFixed(1)}B`,
    source: "U.S. Department of the Treasury, Fiscal Service (FRED: MTSDS133FMS)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/MTSDS133FMS",
    sources: [
      { label: "MTSDS133FMS", url: "https://fred.stlouisfed.org/series/MTSDS133FMS" }
    ]
  }
};

// 14. MoM Inflation vs MoM Personal Consumption Growth (Últimos 18 meses: Dic 24 - May 26)
export const momComparisonData = [
  { label: "Dic 24", inflacion: 0.34, consumo: 0.99 },
  { label: "Ene 25", inflacion: 0.43, consumo: -0.25 },
  { label: "Feb 25", inflacion: 0.23, consumo: 0.28 },
  { label: "Mar 25", inflacion: 0.03, consumo: 0.80 },
  { label: "Abr 25", inflacion: 0.16, consumo: 0.31 },
  { label: "May 25", inflacion: 0.10, consumo: 0.04 },
  { label: "Jun 25", inflacion: 0.25, consumo: 0.55 },
  { label: "Jul 25", inflacion: 0.23, consumo: 0.67 },
  { label: "Ago 25", inflacion: 0.35, consumo: 0.55 },
  { label: "Sep 25", inflacion: 0.30, consumo: 0.37 },
  { label: "Oct 25", inflacion: 0.13, consumo: 0.40 },
  { label: "Nov 25", inflacion: 0.13, consumo: 0.32 },
  { label: "Dic 25", inflacion: 0.30, consumo: 0.42 },
  { label: "Ene 26", inflacion: 0.17, consumo: 0.15 },
  { label: "Feb 26", inflacion: 0.27, consumo: 0.62 },
  { label: "Mar 26", inflacion: 0.87, consumo: 0.94 },
  { label: "Abr 26", inflacion: 0.64, consumo: 0.41 },
  { label: "May 26", inflacion: 0.47, consumo: 0.71 }
];

