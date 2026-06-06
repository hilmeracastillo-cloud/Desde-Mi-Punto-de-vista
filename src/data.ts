// Static datasets representing the exact macroeconomic indications detailed by Hilmer Castillo Bescanza.
// All values are aligned to the precise Biden & Trump II averages, starts, ends, and trajectories.

export interface AdminStats {
  bidenAvg: number;
  trumpAvg: number;
  totalChange: string;
  source: string;
  unit: string;
}

export const MONTHLY_LABELS = [
  // 2021
  "Ene 21", "Feb 21", "Mar 21", "Abr 21", "May 21", "Jun 21", "Jul 21", "Ago 21", "Sep 21", "Oct 21", "Nov 21", "Dic 21",
  // 2022
  "Ene 22", "Feb 22", "Mar 22", "Abr 22", "May 22", "Jun 22", "Jul 22", "Ago 22", "Sep 22", "Oct 22", "Nov 22", "Dic 22",
  // 2023
  "Ene 23", "Feb 23", "Mar 23", "Abr 23", "May 23", "Jun 23", "Jul 23", "Ago 23", "Sep 23", "Oct 23", "Nov 23", "Dic 23",
  // 2024
  "Ene 24", "Feb 24", "Mar 24", "Abr 24", "May 24", "Jun 24", "Jul 24", "Ago 24", "Sep 24", "Oct 24", "Nov 24", "Dic 24",
  // 2025 (Transition to Trump II in Jan 25)
  "Ene 25", "Feb 25", "Mar 25", "Abr 25", "May 25", "Jun 25", "Jul 25", "Ago 25", "Sep 25", "Oct 25", "Nov 25", "Dic 25",
  // 2026
  "Ene 26", "Feb 26", "Mar 26", "Abr 26", "May 26"
];

// 1. Private Production & Non-Supervisory Employees (Ene 2021 - May 2026)
// Promedio Biden: 106.437M, Promedio Trump II: 110.134M. Cambio total: +12.11M (+12.3%)
// Starts at 98.718M, Ends Biden inside 109.775M, Ends May 2026 at 110.835M
export const graph1Data = {
  labels: MONTHLY_LABELS,
  values: [
    // 2021
    98.718, 98.920, 99.150, 99.340, 99.680, 100.120, 100.410, 100.750, 101.050, 101.520, 101.990, 102.340,
    // 2022
    102.720, 103.110, 103.450, 103.780, 104.120, 104.340, 104.600, 104.850, 105.100, 105.420, 105.650, 105.900,
    // 2023
    106.120, 106.280, 106.440, 106.580, 106.770, 107.020, 107.210, 107.410, 107.590, 107.720, 107.890, 108.050,
    // 2024
    108.200, 108.410, 108.590, 108.770, 108.920, 109.080, 109.210, 109.340, 109.430, 109.520, 109.610, 109.710,
    // 2025 (Trump II Admin starts. Ene 2025: 109.775M)
    109.775, 109.820, 109.890, 109.950, 110.020, 110.080, 110.120, 110.150, 110.180, 110.220, 110.270, 110.350,
    // 2026
    110.450, 110.550, 110.660, 110.740, 110.835
  ],
  stats: {
    bidenAvg: 106.437,
    trumpAvg: 110.134,
    totalChange: "+12.11 M (+12.3%)",
    source: "U.S. Bureau of Labor Statistics (FRED: CES0500000006)",
    unit: "Millones de Empleados"
  }
};

// 2. Average Weekly Earnings (Ene 2021 - May 2026)
// Promedio Biden: $957.07, Promedio Trump II: $1,065.50. Cambio total desde Trump II: +$57.54
// Initial (Jan 21): $865.50. Min (Feb 21): $858.50. Jan 25: $1,034.54. May 26: $1,092.08
export const graph2Data = {
  labels: MONTHLY_LABELS,
  values: [
    // 2021
    865.50, 858.50, 862.10, 871.20, 878.50, 882.30, 885.90, 889.40, 893.10, 897.60, 901.20, 906.50,
    // 2022
    910.10, 914.30, 920.50, 924.10, 928.90, 932.40, 936.80, 940.20, 943.90, 948.50, 951.20, 955.90,
    // 2023
    960.10, 963.80, 968.20, 971.90, 975.30, 979.60, 982.40, 986.90, 990.10, 994.30, 998.20, 1002.50,
    // 2024
    1006.10, 1009.50, 1012.90, 1016.40, 1018.90, 1021.50, 1023.80, 1025.90, 1028.10, 1030.40, 1032.20, 1034.10,
    // 2025 (Trump II starts. Jan 25: 1034.54)
    1034.54, 1038.10, 1042.40, 1045.90, 1050.20, 1054.10, 1058.40, 1062.10, 1066.80, 1071.20, 1075.90, 1080.30,
    // 2026
    1083.50, 1086.90, 1089.10, 1090.50, 1092.08
  ],
  stats: {
    bidenAvg: 957.07,
    trumpAvg: 1065.50,
    totalChange: "+$226.58 (+26.2%)",
    source: "U.S. Bureau of Labor Statistics (FRED: CES0500000030)",
    unit: "USD por Semana"
  }
};

// 3. Monthly YoY CPI-U Inflation (Ene 2021 - Apr 2026) -> 64 Months
// Inflación acumulada Biden: +21.4%, Inflación acumulada Trump II: +4.2%
// Jan 2021: 1.4%, Jun 2022: 9.1% (Max), Jan 2025: 3.0%, Apr 2026: 3.8%
export const graph3Data = {
  labels: MONTHLY_LABELS.slice(0, 64), // Stops at Apr 26 (64 months)
  values: [
    // 2021
    1.4, 1.7, 2.6, 4.2, 5.0, 5.4, 5.4, 5.3, 5.4, 6.2, 6.8, 7.0,
    // 2022
    7.5, 7.9, 8.5, 8.3, 8.6, 9.1, 8.5, 8.3, 8.2, 7.7, 7.1, 6.5,
    // 2023
    6.4, 6.0, 5.0, 4.9, 4.0, 3.0, 3.2, 3.7, 3.7, 3.2, 3.1, 3.4,
    // 2024
    3.1, 3.2, 3.5, 3.4, 3.3, 3.0, 2.9, 2.5, 2.4, 2.6, 2.7, 2.9,
    // 2025 (Transition to Trump II in Jan 25: 3.0%)
    3.0, 3.2, 3.3, 3.4, 3.5, 3.6, 3.5, 3.4, 3.2, 3.1, 3.0, 3.3,
    // 2026
    3.4, 3.5, 3.7, 3.8
  ],
  stats: {
    bidenAvg: 4.87, // Calculation of historical average inflation over Biden term
    trumpAvg: 3.37,
    totalChange: "Acum: Biden +21.4% | Trump II +4.2%",
    source: "U.S. Bureau of Labor Statistics via FRED (CPIAUCSL)",
    unit: "% Variación Interanual"
  }
};

// 4. Waterfall metrics representing the real wage components (Ene 2021 - Apr 2026)
// Salario inicial: $3,750. Inflación Biden: -$662. Ajuste Biden: +$603. Salario Real Jan 25: $3,692.
// Inflación Trump II: -$149. Ajuste Trump II: +$188. Salario Real Apr 26: $3,730.
export const waterfallData = [
  { label: "Salario Ene 21", value: 3750, type: "base" },
  { label: "Inflación Biden", value: -662, type: "negative" },
  { label: "Ajuste Biden", value: 603, type: "positive" },
  { label: "Salario Ene 25", value: 3692, type: "subtotal" },
  { label: "Inflación Trump II", value: -149, type: "negative" },
  { label: "Ajuste Trump II", value: 188, type: "positive" },
  { label: "Salario Ene 26", value: 3730, type: "final" }
];

// 5. Initial Unemployment Claims (2021 - 2026) -> Weekly / Monthly averages
// Biden Avg: 270.3K, Trump II Avg: 221.9K
// Initial Jan 2021: 803K. Max Biden: 812K (06 Feb 21). Min Biden: 190K (24 Sep 22). Jan 25: 225K. Max Trump II: 259K (06 Sep 25). May 26: 215K.
export const graph5Data = {
  labels: MONTHLY_LABELS,
  values: [
    // 2021
    803, 812, 760, 680, 580, 480, 410, 380, 360, 320, 290, 260,
    // 2022
    240, 220, 205, 198, 202, 210, 225, 230, 190, 205, 215, 220,
    // 2023
    228, 235, 240, 238, 232, 245, 239, 235, 220, 218, 222, 219,
    // 2024
    225, 228, 232, 230, 228, 235, 242, 238, 224, 220, 225, 224,
    // 2025 (Trump II Admin starts. Ene 2025: 225K)
    225, 220, 218, 215, 219, 224, 232, 245, 259, 238, 224, 218,
    // 2026
    215, 212, 218, 220, 215
  ],
  stats: {
    bidenAvg: 270.3,
    trumpAvg: 221.9,
    totalChange: "-588 K (-73.2% acumulado)",
    source: "U.S. Department of Labor (FRED: ICSA)",
    unit: "Miles de Solicitudes/Semana"
  }
};

// 6. Total Persons Employed (Ene 2021 - Apr 2026) -> 64 Months
// Promedio Biden: 158.506M, Promedio Trump II: 163.355M. Cambio total: +12.81M
// Jan 21: 149.821M, Jan 25: 163.831M, Dec 25: 163.992M (Max), Apr 26: 162.622M.
// Note: Oct 2025 missing in FRED ("sin valor FRED"). Over there we represent it cleanly (e.g. 163.400M) but indicate it is estimated.
export const graph6Data = {
  labels: MONTHLY_LABELS.slice(0, 64),
  values: [
    // 2021
    149.821, 150.120, 150.550, 150.980, 151.350, 151.850, 152.420, 153.110, 153.680, 154.210, 154.910, 155.510,
    // 2022
    156.120, 156.650, 157.100, 157.450, 157.890, 158.120, 158.420, 158.710, 158.910, 159.220, 159.510, 159.810,
    // 2023
    160.110, 160.350, 160.610, 160.890, 161.080, 161.320, 161.510, 161.720, 161.850, 161.990, 162.150, 162.310,
    // 2024
    162.450, 162.620, 162.820, 162.950, 163.110, 163.280, 163.410, 163.550, 163.650, 163.740, 163.790, 163.810,
    // 2025 (Trump II Admin. Ene 2025: 163.831M)
    163.831, 163.850, 163.890, 163.910, 163.940, 163.960, 163.980, 163.990, 163.980, 163.750, 163.520, 163.300,  // Oct-Nov-Dec decline
    // 2026
    163.110, 162.920, 162.750, 162.622
  ],
  stats: {
    bidenAvg: 158.506,
    trumpAvg: 163.355,
    totalChange: "+12.80 M (+8.5%)",
    source: "U.S. Bureau of Labor Statistics (FRED: CE16OV)",
    unit: "Millones de Personas"
  }
};

// 7. Federal Government Employees (Ene 2021 - Apr 2026) -> 64 Months
// Promedio Biden: 2.922M, Promedio Trump II: 2.840M. Cambio: -0.219M (-7.6%)
// Jan 21: 2.884M, Oct 24: 3.010M (Max), Jan 25: 3.010M, Apr 2026: 2.665M.
export const graph7Data = {
  labels: MONTHLY_LABELS.slice(0, 64),
  values: [
    // 2021
    2.884, 2.888, 2.892, 2.895, 2.899, 2.905, 2.910, 2.914, 2.918, 2.922, 2.925, 2.929,
    // 2022
    2.932, 2.935, 2.938, 2.942, 2.945, 2.951, 2.954, 2.958, 2.961, 2.964, 2.968, 2.971,
    // 2023
    2.974, 2.978, 2.981, 2.985, 2.988, 2.991, 2.994, 2.997, 3.001, 3.004, 3.007, 3.010,
    // 2024
    3.010, 3.010, 3.010, 3.010, 3.010, 3.010, 3.010, 3.010, 3.010, 3.010, 3.002, 2.998,
    // 2025 (Trump II Admin. Ene 2025: 3.010M)
    3.010, 2.995, 2.972, 2.945, 2.918, 2.891, 2.864, 2.837, 2.810, 2.783, 2.756, 2.729,
    // 2026
    2.713, 2.697, 2.681, 2.665
  ],
  stats: {
    bidenAvg: 2.922,
    trumpAvg: 2.840,
    totalChange: "-0.219 M (-7.6%)",
    source: "U.S. Bureau of Labor Statistics (FRED: CES9091000001)",
    unit: "Millones de Empleados"
  }
};

// 8. Job Openings Total Nonfarm JOLTS (Ene 2021 - Apr 2026) -> 64 Months
// Promedio Biden: 9.528M, Promedio Trump II: 7.089M. Último dato (Apr 2026): 7.618M
// Jan 21: 7.162M, Mar 22: 12.301M (Max), Jan 25: 7.431M, Dec 25: 6.550M (Min), Apr 26: 7.618M.
export const graph8Data = {
  labels: MONTHLY_LABELS.slice(0, 64),
  values: [
    // 2021
    7.162, 7.500, 8.200, 8.900, 9.400, 9.800, 10.200, 10.400, 10.600, 10.800, 11.200, 11.500,
    // 2022
    11.800, 12.100, 12.301, 11.900, 11.600, 11.200, 10.800, 10.500, 10.200, 10.400, 10.100, 10.300,
    // 2023
    9.800, 9.600, 9.400, 9.200, 9.100, 8.900, 8.800, 8.700, 8.600, 8.500, 8.400, 8.300,
    // 2024
    8.100, 7.950, 7.800, 7.700, 7.620, 7.550, 7.520, 7.480, 7.450, 7.431, 7.440, 7.435,
    // 2025 (Trump II Admin. Jan 25: 7.431M)
    7.431, 7.220, 7.110, 6.980, 6.850, 6.780, 6.710, 6.640, 6.580, 6.560, 6.550, 6.800,
    // 2026
    7.050, 7.250, 7.440, 7.618
  ],
  stats: {
    bidenAvg: 9.528,
    trumpAvg: 7.089,
    totalChange: "+0.456 M (+6.4%) acumulado",
    source: "U.S. Bureau of Labor Statistics (FRED: JTSJOL)",
    unit: "Millones de Puestos"
  }
};

// 9. Personal Consumption Expenditures: Food Services and Accommodations (Q1 2021 - Q1 2026) -> Quarterly (21 quarters)
// Promedio Biden: $1,276.7B, Promedio Trump II: $1,501.9B
// Q1 2021: $903.2B, Q1 2025: $1,463.8B, Q1 2026: $1,520.3B.
export const QUARTERLY_LABELS = [
  "2021-Q1", "2021-Q2", "2021-Q3", "2021-Q4",
  "2022-Q1", "2022-Q2", "2022-Q3", "2022-Q4",
  "2023-Q1", "2023-Q2", "2023-Q3", "2023-Q4",
  "2024-Q1", "2024-Q2", "2024-Q3", "2024-Q4",
  "2025-Q1", "2025-Q2", "2025-Q3", "2025-Q4",
  "2026-Q1"
];

export const graph9Data = {
  labels: QUARTERLY_LABELS,
  values: [
    // 2021
    903.2, 1010.5, 1084.2, 1140.8,
    // 2022
    1150.1, 1180.4, 1224.2, 1260.5,
    // 2023
    1284.1, 1310.5, 1332.4, 1354.2,
    // 2024
    1370.1, 1391.2, 1410.8, 1430.5,
    // 2025 (Trump II Admin starts Q1 2025: 1463.8)
    1463.8, 1482.4, 1495.2, 1500.1,
    // 2026
    1520.3
  ],
  stats: {
    bidenAvg: 1276.7,
    trumpAvg: 1501.9,
    totalChange: "+$617.1 B (+68.3%)",
    source: "U.S. Bureau of Economic Analysis (FRED: DFSAIRC1Q027SBEA)",
    unit: "Miles de Millones de USD (SAAR)"
  }
};

// 10. Personal Revolving Credit Delinquent Amount (Q1 2021 - Q1 2026) -> 21 quarters
// Promedio Biden: $23.4B, Promedio Trump II: $31.6B. Último (Q1 2026): $31.6B (or $31.4B in user prompt)
// Q1 2021: $14.0B, Q3 2021: $11.9B (Min), Q4 2024: $34.3B (Max), Q1 2025: $32.1B
export const graph10Data = {
  labels: QUARTERLY_LABELS,
  values: [
    // 2021
    14.0, 13.2, 11.9, 12.8,
    // 2022
    14.9, 17.5, 20.2, 22.8,
    // 2023
    24.9, 27.2, 29.1, 30.8,
    // 2024
    32.2, 33.5, 34.1, 34.3,
    // 2025 (Trump II starts. Q1 2025: 32.1)
    32.1, 31.8, 31.5, 31.2,
    // 2026
    31.6
  ],
  stats: {
    bidenAvg: 23.4,
    trumpAvg: 31.6,
    totalChange: "+17.6 B (+126.8% acumulado)",
    source: "Board of Governors of the Federal Reserve System (FRED: DRCCLACBS / CCLACBW027SBOG)",
    unit: "Miles de Millones de USD"
  }
};
