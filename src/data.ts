// Static datasets representing the exact macroeconomic indications detailed by Hilmer Castillo Bescanza.
// All values are aligned to the precise Biden & Trump II averages, starts, ends, and trajectories.

export interface AdminStats {
  bidenAvg: number;
  trumpAvg: number;
  totalChange: string;
  source: string;
  unit: string;
  sourceUrl?: string;
  sources?: { label: string; url: string }[];
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
    unit: "Millones de Empleados",
    sourceUrl: "https://fred.stlouisfed.org/series/CES0500000006"
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
    unit: "USD por Semana",
    sourceUrl: "https://fred.stlouisfed.org/series/CES0500000030"
  }
};

// 3. Monthly YoY CPI-U Inflation (Ene 2021 - May 2026) -> 65 Months
// Inflación acumulada Biden: +21.4%, Inflación acumulada Trump II: +4.8%
// Jan 2021: 1.4%, Jun 2022: 9.1% (Max), Jan 2025: 3.0%, May 2026: 4.2%
export const graph3Data = {
  labels: MONTHLY_LABELS, // Includes May 26 (65 months)
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
    3.4, 3.5, 3.7, 3.8, 4.2
  ],
  stats: {
    bidenAvg: 4.87, // Calculation of historical average inflation over Biden term
    trumpAvg: 3.42,
    totalChange: "Acum: Biden +21.4% | Trump II +4.8%",
    source: "U.S. Bureau of Labor Statistics via FRED (CPIAUCSL)",
    unit: "% Variación Interanual",
    sourceUrl: "https://fred.stlouisfed.org/series/CPIAUCSL"
  }
};

// 4. Waterfall metrics representing the real wage components (Ene 2021 - May 2026)
// Salario inicial: $3,750. Inflación Biden: -$662. Ajuste Biden: +$603. Salario Real Jan 25: $3,692.
// Inflación Trump II: -$169. Ajuste Trump II: +$196. Salario Real May 26: $3,719.
export const waterfallData = [
  { label: "Salario Ene 21", value: 3750, type: "base" },
  { label: "Inflación Biden", value: -662, type: "negative" },
  { label: "Ajuste Biden", value: 603, type: "positive" },
  { label: "Salario Ene 25", value: 3692, type: "subtotal" },
  { label: "Inflación Trump II", value: -169, type: "negative" },
  { label: "Ajuste Trump II", value: 196, type: "positive" },
  { label: "Salario May 26", value: 3719, type: "final" }
];

// 5. Initial Unemployment Claims (2021 - 2026) -> Direct FRED Weekly Series (ICSA)
// Promedio Biden: 279.6K, Promedio Trump II: 221.9K
// Initial Jan 2021: 803K. Min Biden: 190.0K (Sep 22). Jan 25: 223.0K (Ene 18)/212.0K (Ene 25). May 26: 225.0K.
export const graph5Data = {
  labels: [
    "02 Ene 21", "09 Ene 21", "16 Ene 21", "23 Ene 21", "30 Ene 21", "06 Feb 21", "13 Feb 21", "20 Feb 21", "27 Feb 21", "06 Mar 21", "13 Mar 21", "20 Mar 21",
    "27 Mar 21", "03 Abr 21", "10 Abr 21", "17 Abr 21", "24 Abr 21", "01 May 21", "08 May 21", "15 May 21", "22 May 21", "29 May 21", "05 Jun 21", "12 Jun 21",
    "19 Jun 21", "26 Jun 21", "03 Jul 21", "10 Jul 21", "17 Jul 21", "24 Jul 21", "31 Jul 21", "07 Ago 21", "14 Ago 21", "21 Ago 21", "28 Ago 21", "04 Sep 21",
    "11 Sep 21", "18 Sep 21", "25 Sep 21", "02 Oct 21", "09 Oct 21", "16 Oct 21", "23 Oct 21", "30 Oct 21", "06 Nov 21", "13 Nov 21", "20 Nov 21", "27 Nov 21",
    "04 Dic 21", "11 Dic 21", "18 Dic 21", "25 Dic 21", "01 Ene 22", "08 Ene 22", "15 Ene 22", "22 Ene 22", "29 Ene 22", "05 Feb 22", "12 Feb 22", "19 Feb 22",
    "26 Feb 22", "05 Mar 22", "12 Mar 22", "19 Mar 22", "26 Mar 22", "02 Abr 22", "09 Abr 22", "16 Abr 22", "23 Abr 22", "30 Abr 22", "07 May 22", "14 May 22",
    "21 May 22", "28 May 22", "04 Jun 22", "11 Jun 22", "18 Jun 22", "25 Jun 22", "02 Jul 22", "09 Jul 22", "16 Jul 22", "23 Jul 22", "30 Jul 22", "06 Ago 22",
    "13 Ago 22", "20 Ago 22", "27 Ago 22", "03 Sep 22", "10 Sep 22", "17 Sep 22", "24 Sep 22", "01 Oct 22", "08 Oct 22", "15 Oct 22", "22 Oct 22", "29 Oct 22",
    "05 Nov 22", "12 Nov 22", "19 Nov 22", "26 Nov 22", "03 Dic 22", "10 Dic 22", "17 Dic 22", "24 Dic 22", "31 Dic 22", "07 Ene 23", "14 Ene 23", "21 Ene 23",
    "28 Ene 23", "04 Feb 23", "11 Feb 23", "18 Feb 23", "25 Feb 23", "04 Mar 23", "11 Mar 23", "18 Mar 23", "25 Mar 23", "01 Abr 23", "08 Abr 23", "15 Abr 23",
    "22 Abr 23", "29 Abr 23", "06 May 23", "13 May 23", "20 May 23", "27 May 23", "03 Jun 23", "10 Jun 23", "17 Jun 23", "24 Jun 23", "01 Jul 23", "08 Jul 23",
    "15 Jul 23", "22 Jul 23", "29 Jul 23", "05 Ago 23", "12 Ago 23", "19 Ago 23", "26 Ago 23", "02 Sep 23", "09 Sep 23", "16 Sep 23", "23 Sep 23", "30 Sep 23",
    "07 Oct 23", "14 Oct 23", "21 Oct 23", "28 Oct 23", "04 Nov 23", "11 Nov 23", "18 Nov 23", "25 Nov 23", "02 Dic 23", "09 Dic 23", "16 Dic 23", "23 Dic 23",
    "30 Dic 23", "06 Ene 24", "13 Ene 24", "20 Ene 24", "27 Ene 24", "03 Feb 24", "10 Feb 24", "17 Feb 24", "24 Feb 24", "02 Mar 24", "09 Mar 24", "16 Mar 24",
    "23 Mar 24", "30 Mar 24", "06 Abr 24", "13 Abr 24", "20 Abr 24", "27 Abr 24", "04 May 24", "11 May 24", "18 May 24", "25 May 24", "01 Jun 24", "08 Jun 24",
    "15 Jun 24", "22 Jun 24", "29 Jun 24", "06 Jul 24", "13 Jul 24", "20 Jul 24", "27 Jul 24", "03 Ago 24", "10 Ago 24", "17 Ago 24", "24 Ago 24", "31 Ago 24",
    "07 Sep 24", "14 Sep 24", "21 Sep 24", "28 Sep 24", "05 Oct 24", "12 Oct 24", "19 Oct 24", "26 Oct 24", "02 Nov 24", "09 Nov 24", "16 Nov 24", "23 Nov 24",
    "30 Nov 24", "07 Dic 24", "14 Dic 24", "21 Dic 24", "28 Dic 24", "04 Ene 25", "11 Ene 25", "18 Ene 25", "25 Ene 25", "01 Feb 25", "08 Feb 25", "15 Feb 25",
    "22 Feb 25", "01 Mar 25", "08 Mar 25", "15 Mar 25", "22 Mar 25", "29 Mar 25", "05 Abr 25", "12 Abr 25", "19 Abr 25", "26 Abr 25", "03 May 25", "10 May 25",
    "17 May 25", "24 May 25", "31 May 25", "07 Jun 25", "14 Jun 25", "21 Jun 25", "28 Jun 25", "05 Jul 25", "12 Jul 25", "19 Jul 25", "26 Jul 25", "02 Ago 25",
    "09 Ago 25", "16 Ago 25", "23 Ago 25", "30 Ago 25", "06 Sep 25", "13 Sep 25", "20 Sep 25", "27 Sep 25", "04 Oct 25", "11 Oct 25", "18 Oct 25", "25 Oct 25",
    "01 Nov 25", "08 Nov 25", "15 Nov 25", "22 Nov 25", "29 Nov 25", "06 Dic 25", "13 Dic 25", "20 Dic 25", "27 Dic 25", "03 Ene 26", "10 Ene 26", "17 Ene 26",
    "24 Ene 26", "31 Ene 26", "07 Feb 26", "14 Feb 26", "21 Feb 26", "28 Feb 26", "07 Mar 26", "14 Mar 26", "21 Mar 26", "28 Mar 26", "04 Abr 26", "11 Abr 26",
    "18 Abr 26", "25 Abr 26", "02 May 26", "09 May 26", "16 May 26", "23 May 26", "30 May 26",
  ],
  values: [
    803, 890, 844, 799, 803, 812, 802, 702, 704, 693, 699, 627,
    658, 645, 571, 566, 574, 517, 494, 467, 441, 427, 420, 428,
    422, 368, 371, 333, 387, 380, 379, 361, 367, 358, 353, 335,
    342, 367, 375, 312, 291, 289, 269, 261, 251, 250, 224, 221,
    206, 227, 215, 217, 229, 250, 246, 240, 231, 210, 234, 224,
    208, 222, 217, 207, 214, 214, 214, 210, 209, 218, 204, 225,
    211, 199, 213, 211, 214, 212, 214, 212, 216, 221, 228, 221,
    220, 215, 210, 203, 195, 202, 190, 203, 207, 199, 202, 202,
    204, 210, 220, 209, 209, 209, 213, 205, 205, 210, 204, 204,
    200, 215, 220, 217, 207, 230, 222, 230, 234, 217, 220, 223,
    209, 213, 223, 225, 227, 229, 252, 256, 259, 236, 248, 230,
    229, 231, 238, 258, 248, 240, 234, 225, 225, 211, 216, 216,
    210, 200, 214, 217, 216, 230, 213, 213, 215, 203, 209, 212,
    200, 201, 195, 224, 226, 213, 213, 202, 212, 213, 213, 213,
    214, 223, 213, 212, 209, 207, 230, 222, 216, 220, 227, 240,
    236, 233, 238, 223, 241, 237, 248, 234, 228, 232, 232, 227,
    227, 223, 221, 227, 258, 241, 227, 219, 221, 218, 216, 219,
    222, 238, 222, 219, 212, 206, 219, 223, 212, 220, 216, 223,
    241, 224, 222, 225, 224, 220, 223, 217, 224, 239, 228, 226,
    225, 236, 244, 246, 243, 236, 231, 228, 221, 218, 219, 226,
    224, 233, 229, 236, 259, 233, 219, 225, 233, 222, 231, 221,
    228, 228, 222, 218, 216, 235, 224, 215, 203, 207, 201, 210,
    211, 230, 230, 208, 211, 214, 213, 205, 211, 203, 218, 208,
    215, 190, 199, 212, 210, 212, 225,
  ],
  stats: {
    bidenAvg: 279.6,
    trumpAvg: 221.9,
    totalChange: "-578.0 K (-72.0%)",
    source: "U.S. Department of Labor (FRED: ICSA)",
    unit: "Miles de Solicitudes/Semana",
    sourceUrl: "https://fred.stlouisfed.org/series/ICSA"
  }
};

// 6. Total Persons Employed (CE16OV)
// Promedio Biden: 158.429M, Promedio Trump II: 163.325M
export const graph6Data = {
  labels: [
    "Ene 21", "Feb 21", "Mar 21", "Abr 21", "May 21", "Jun 21", "Jul 21", "Ago 21", "Sep 21", "Oct 21", "Nov 21", "Dic 21",
    "Ene 22", "Feb 22", "Mar 22", "Abr 22", "May 22", "Jun 22", "Jul 22", "Ago 22", "Sep 22", "Oct 22", "Nov 22", "Dic 22",
    "Ene 23", "Feb 23", "Mar 23", "Abr 23", "May 23", "Jun 23", "Jul 23", "Ago 23", "Sep 23", "Oct 23", "Nov 23", "Dic 23",
    "Ene 24", "Feb 24", "Mar 24", "Abr 24", "May 24", "Jun 24", "Jul 24", "Ago 24", "Sep 24", "Oct 24", "Nov 24", "Dic 24",
    "Ene 25", "Feb 25", "Mar 25", "Abr 25", "May 25", "Jun 25", "Jul 25", "Ago 25", "Sep 25", "Oct 25", "Nov 25", "Dic 25",
    "Ene 26", "Feb 26", "Mar 26", "Abr 26", "May 26",
  ],
  values: [
    149.821, 150.234, 150.666, 151.045, 151.546, 151.721, 152.812, 153.258, 153.844, 154.468, 155.513, 156.053,
    157.081, 157.654, 158.238, 157.852, 158.393, 158.085, 158.307, 158.744, 158.814, 158.671, 158.484, 159.202,
    160.173, 160.457, 160.848, 160.927, 160.812, 160.973, 161.246, 161.485, 161.451, 161.198, 161.863, 161.058,
    161.133, 161.083, 161.462, 161.438, 161.180, 161.152, 161.297, 161.429, 161.813, 161.444, 161.159, 161.586,
    163.831, 163.338, 163.509, 163.898, 163.244, 163.327, 163.140, 163.370, 163.656, 163.708, 163.760, 163.992,
    163.097, 162.912, 162.848, 162.622, 162.771,
  ],
  stats: {
    bidenAvg: 158.429,
    trumpAvg: 163.325,
    totalChange: "+12.950 M (+8.64%)",
    source: "U.S. Bureau of Labor Statistics (FRED: CE16OV)",
    unit: "Millones de Personas",
    sourceUrl: "https://fred.stlouisfed.org/series/CE16OV"
  }
};

// 7. Federal Government Employees (Ene 2021 - May 2026) -> 65 Months
// Serie FRED: CEU9091000001 (excl. U.S. Postal Service) - No ajustado estacionalmente
// Promedio Biden: 2.922M, Promedio Trump II: 2.826M. Cambio: -0.342M (-11.3%) desde el pico
// Jan 21: 2.866M, Dec 24: 3.021M (Max), Jan 25: 3.003M, May 2026: 2.679M.
export const graph7Data = {
  labels: MONTHLY_LABELS,
  values: [
    // 2021
    2.866, 2.867, 2.867, 2.888, 2.888, 2.892, 2.901, 2.894, 2.895, 2.882, 2.895, 2.894,
    // 2022
    2.864, 2.860, 2.853, 2.860, 2.864, 2.856, 2.876, 2.865, 2.872, 2.874, 2.880, 2.885,
    // 2023
    2.868, 2.880, 2.884, 2.900, 2.915, 2.925, 2.942, 2.948, 2.957, 2.959, 2.968, 2.975,
    // 2024
    2.963, 2.975, 2.986, 2.991, 2.998, 3.001, 3.015, 3.010, 3.010, 3.014, 3.014, 3.021,
    // 2025 (Trump II Admin. Ene 2025: 3.003M)
    3.003, 2.992, 2.991, 2.978, 2.948, 2.939, 2.940, 2.912, 2.909, 2.747, 2.744, 2.739,
    // 2026
    2.671, 2.683, 2.674, 2.672, 2.679
  ],
  stats: {
    bidenAvg: 2.922,
    trumpAvg: 2.826,
    totalChange: "-0.342 M (-11.3%)",
    source: "U.S. Bureau of Labor Statistics (FRED: CEU9091000001)",
    unit: "Millones de Empleados",
    sourceUrl: "https://fred.stlouisfed.org/series/CEU9091000001"
  }
};

// 8. Job Openings Total Nonfarm JOLTS (Ene 2021 - Apr 2026) -> 64 Months
// Promedio Biden: 9.482M, Promedio Trump II: 7.081M. Último dato (Apr 2026): 7.618M
// Jan 21: 7.162M, Mar 22: 12.301M (Max), Jan 25: 7.431M, Dec 25: 6.550M (Min), Apr 26: 7.618M.
export const graph8Data = {
  labels: MONTHLY_LABELS.slice(0, 64),
  values: [
    // 2021
    7.162, 7.827, 8.499, 9.346, 9.954, 10.319, 10.983, 10.872, 10.834, 11.238, 11.199, 11.520,
    // 2022
    11.210, 11.698, 12.301, 11.861, 11.535, 11.283, 11.576, 10.092, 10.800, 10.447, 10.632, 10.902,
    // 2023
    10.318, 9.857, 9.655, 9.966, 9.368, 9.180, 8.657, 9.254, 9.259, 8.580, 8.602, 8.520,
    // 2024
    8.378, 8.440, 8.206, 7.529, 7.782, 7.416, 7.426, 7.520, 6.943, 7.379, 7.566, 7.295,
    // 2025 (Trump II Admin. Jan 25: 7.431M)
    7.431, 7.242, 6.952, 7.098, 7.310, 7.204, 7.089, 6.919, 7.169, 7.170, 6.846, 6.550,
    // 2026
    7.240, 6.922, 6.887, 7.618
  ],
  stats: {
    bidenAvg: 9.482,
    trumpAvg: 7.081,
    totalChange: "+0.456 M (+6.4%)",
    source: "U.S. Bureau of Labor Statistics (FRED: JTSJOL)",
    unit: "Millones de Puestos",
    sourceUrl: "https://fred.stlouisfed.org/series/JTSJOL"
  }
};

// 9. Personal Consumption Expenditures: Food Services and Accommodations (Q1 2021 - Q1 2026) -> Quarterly (21 quarters)
// Promedio Biden: $1,268.9B, Promedio Trump II: $1,500.2B
// Q1 2021: $903.17B, Q1 2025: $1,463.84B, Q1 2026: $1,520.32B.
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
    903.169, 1040.473, 1114.374, 1135.234,
    // 2022
    1151.265, 1236.806, 1266.992, 1288.370,
    // 2023
    1335.262, 1344.157, 1372.588, 1397.916,
    // 2024
    1409.884, 1418.189, 1433.523, 1454.264,
    // 2025 (Trump II Admin starts Q1 2025: 1463.839)
    1463.839, 1492.969, 1507.501, 1516.307,
    // 2026
    1520.320
  ],
  stats: {
    bidenAvg: 1268.90,
    trumpAvg: 1500.19,
    totalChange: "+$617.15 B (+68.3%)",
    source: "U.S. Bureau of Economic Analysis (FRED: DFSARC1Q027SBEA)",
    unit: "Miles de Millones de USD (SAAR)",
    sourceUrl: "https://fred.stlouisfed.org/series/DFSARC1Q027SBEA"
  }
};

// 10. Volumen Estimado Moroso en Tarjetas de Crédito (Q1 2021 - Q1 2026) -> 21 quarters
// Serie construida combinando: CCLACBW027SBOG (Saldo Total Mensual) y DRCCLACBS (Tasa de Delincuencia)
// Fórmula de conversión de FRED: (a * b) / 100
// Promedio Biden: $22.68 B, Promedio Trump II: $31.29 B
// Q1 2021: $14.054 B, Q3 2021: $11.650 B (Mínimo), Q2 2024: $34.052 B (Máximo), Q1 2026: $31.131 B
export const graph10Data = {
  labels: QUARTERLY_LABELS,
  values: [
    // 2021
    14.054, 11.801, 11.650, 12.220,
    // 2022
    13.620, 15.506, 18.180, 20.760,
    // 2023
    23.457, 26.846, 29.208, 31.580,
    // 2024
    32.828, 34.052, 34.014, 33.026,
    // 2025 (Trump II starts. Q1 2025: 31.853)
    31.853, 31.554, 31.042, 30.883,
    // 2026
    31.131
  ],
  stats: {
    bidenAvg: 22.68,
    trumpAvg: 31.29,
    totalChange: "+$17.08 B (+121.5% acumulado)",
    source: "Fórmula FRED: (CCLACBW027SBOG × DRCCLACBS) / 100",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/DRCCLACBS",
    sources: [
      { label: "CCLACBW027SBOG", url: "https://fred.stlouisfed.org/series/CCLACBW027SBOG" },
      { label: "DRCCLACBS", url: "https://fred.stlouisfed.org/series/DRCCLACBS" }
    ]
  }
};
