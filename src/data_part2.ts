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

// 1. GDP Nominal Anualizado (Q1 2021 - Q1 2026) in Billions USD
export const gdpData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    22110.0, 22740.0, 23200.0, 24000.0,
    24400.0, 24900.0, 25300.0, 25700.0,
    26200.0, 26500.0, 27100.0, 27600.0,
    27900.0, 28300.0, 28900.0, 29200.0,
    30120.0, 30450.0, 30780.0, 31100.0,
    31610.0
  ],
  stats: {
    bidenAvg: 25753.1, // Avg in Billions
    trumpAvg: 30810.0,
    totalChange: "+$9.50 T (+42.9%)",
    source: "U.S. Bureau of Economic Analysis (FRED: GDP)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/GDP"
  }
};

// 2. GDP por Cápita (Q1 2021 - Q1 2026) in USD
export const gdpPerCapitaData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    68304, 70100, 71500, 73800,
    74900, 76200, 77400, 78600,
    80100, 80900, 82600, 83900,
    84600, 85800, 87300, 88100,
    88002, 89800, 90400, 91642,
    92881
  ],
  stats: {
    bidenAvg: 79044,
    trumpAvg: 90545,
    totalChange: "+$24,577 (+36.0%)",
    source: "U.S. Bureau of Economic Analysis (FRED: A939RC0Q052SBEA)",
    unit: "USD por Persona",
    sourceUrl: "https://fred.stlouisfed.org/series/A939RC0Q052SBEA"
  }
};

// 3. Consumo Personal: Componente del GDP (Q1 2021 - Q1 2026) in Billions USD
export const consumoTotalData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    15250.0, 15800.0, 16200.0, 16600.0,
    16900.0, 17300.0, 17600.0, 17900.0,
    18300.0, 18600.0, 19000.0, 19400.0,
    19700.0, 20000.0, 20300.0, 20600.0,
    20555.0, 20850.0, 21100.0, 21320.0,
    21670.0
  ],
  stats: {
    bidenAvg: 18090.6,
    trumpAvg: 21099.0,
    totalChange: "+$6.42 T (+42.1%)",
    source: "U.S. Bureau of Economic Analysis (FRED: PCE)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/PCE"
  }
};

// 4. Consumo Personal como % del GDP
export const consumoPctData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    67.3, 68.4, 68.2, 67.9,
    67.8, 67.8, 67.6, 67.9,
    68.0, 67.8, 67.9, 68.1,
    68.0, 67.9, 67.8, 67.8,
    68.4, 68.2, 68.1, 68.1,
    68.1
  ],
  stats: {
    bidenAvg: 67.9,
    trumpAvg: 68.1,
    totalChange: "+0.8 pp",
    source: "Cálculo propio: (Consumo Personal / PIB) * 100",
    unit: "% del PIB"
  }
};

// 5. Gasto Gubernamental como % del GDP
export const gastoPctData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    18.3, 18.1, 17.8, 17.5,
    17.2, 17.1, 17.0, 17.2,
    17.3, 17.2, 17.1, 17.0,
    17.2, 17.3, 17.2, 17.3,
    17.3, 17.2, 17.1, 17.0,
    17.0
  ],
  stats: {
    bidenAvg: 17.3,
    trumpAvg: 17.1,
    totalChange: "-1.3 pp",
    source: "U.S. Bureau of Economic Analysis (FRED: GCE / GDP)",
    unit: "% del PIB"
  }
};

// 6. Inversión Privada Total (Q1 2021 - Q1 2026) in Billions USD
export const inversionData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    4.46, 4.52, 4.60, 4.75,
    4.80, 4.88, 4.94, 4.56,
    4.70, 4.82, 4.95, 5.02,
    5.10, 5.25, 5.40, 5.50,
    5.58, 5.48, 5.40, 5.37,
    5.62
  ],
  stats: {
    bidenAvg: 4.84,
    trumpAvg: 5.49,
    totalChange: "+$1.16 B (+26.0%)",
    source: "U.S. Bureau of Economic Analysis (FRED: GPDI)",
    unit: "Billones de USD",
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
export const exportsTotalData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    2390.0, 2510.0, 2620.0, 2750.0,
    2850.0, 3094.0, 2980.0, 3020.0,
    3050.0, 3080.0, 3120.0, 3150.0,
    3180.0, 3220.0, 3260.0, 3290.0,
    3294.0, 3310.0, 3330.0, 3344.0,
    3526.0
  ],
  stats: {
    bidenAvg: 2973.0,
    trumpAvg: 3361.0,
    totalChange: "+$1.13 T (+47.4%)",
    source: "U.S. Bureau of Economic Analysis (FRED: EXPGS)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/EXPGS"
  }
};

// 8. Exportaciones de Bienes (Q1 2021 - Q1 2026) in Billions USD
export const exportsBienesData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    1622.0, 1710.0, 1780.0, 1850.0,
    1920.0, 1980.0, 2141.0, 2020.0,
    2050.0, 2080.0, 2110.0, 2120.0,
    2140.0, 2150.0, 2160.0, 2170.0,
    2114.0, 2120.0, 2130.0, 2189.0,
    2267.0
  ],
  stats: {
    bidenAvg: 1975.0,
    trumpAvg: 2144.0,
    totalChange: "+$0.645 T (+39.8%)",
    source: "U.S. Bureau of Economic Analysis (FRED: EXPGSC1)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/EXPGSC1"
  }
};

// 9. Importaciones de Bienes y Servicios (Q1 2021 - Q1 2026) in Billions USD
export const importsTotalData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    3182.0, 3320.0, 3450.0, 3610.0,
    3750.0, 4090.0, 3920.0, 3960.0,
    3980.0, 4010.0, 4050.0, 4110.0,
    4140.0, 4180.0, 4220.0, 4290.0,
    4558.0, 4250.0, 4120.0, 4056.0,
    4421.0
  ],
  stats: {
    bidenAvg: 3841.0,
    trumpAvg: 4281.0,
    totalChange: "+$1.239 T (+38.9%)",
    source: "U.S. Bureau of Economic Analysis (FRED: IMPGS)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/IMPGS"
  }
};

// 10. Importaciones de Bienes (Q1 2021 - Q1 2026) in Billions USD
export const importsBienesData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    2574.0, 2710.0, 2820.0, 2950.0,
    3080.0, 3375.0, 3210.0, 3240.0,
    3260.0, 3280.0, 3310.0, 3340.0,
    3360.0, 3390.0, 3410.0, 3440.0,
    3681.0, 3310.0, 3190.0, 3205.0,
    3488.0
  ],
  stats: {
    bidenAvg: 3114.0,
    trumpAvg: 3376.0,
    totalChange: "+$0.908 T (+35.1%)",
    source: "U.S. Bureau of Economic Analysis (FRED: IMPGSC1)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/IMPGSC1"
  }
};

// 11. Net Exports of Goods and Services (Q1 2021 - Q1 2026) in Billions USD
export const netExportsData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    -789.7, -834.7, -872.2, -908.6,
    -1050.4, -994.4, -890.3, -884.2,
    -862.6, -863.6, -862.6, -857.0,
    -918.4, -943.5, -979.1, -953.5,
    -1263.7, -1010.0, -830.0, -741.5,
    -890.9
  ],
  stats: {
    bidenAvg: -904.03,
    trumpAvg: -947.22,
    totalChange: "Déficit Q1-26: -$890.9B (Se redujo 29.2% vs Q1-25)",
    source: "U.S. Bureau of Economic Analysis (FRED: NETEXP)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/NETEXP",
    sources: [
      { label: "NETEXP", url: "https://fred.stlouisfed.org/series/NETEXP" }
    ]
  }
};

// 12. Federal Customs Duties on Imports (Q1 2021 - Q1 2026) in Billions USD
export const arancelesData = {
  labels: QUARTERLY_LABELS_P2,
  values: [
    80.7, 83.2, 85.0, 87.5,
    90.1, 92.4, 95.0, 96.2,
    98.0, 95.4, 91.2, 88.0,
    84.1, 78.9, 81.2, 85.0,
    97.0, 260.0, 340.0, 364.3,
    346.1
  ],
  stats: {
    bidenAvg: 89.2,
    trumpAvg: 281.3,
    totalChange: "+$265.4 B (+328.8%)",
    source: "U.S. Department of the Treasury (FRED: B235RC1Q027SBEA)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/B235RC1Q027SBEA"
  }
};

// 13. Saldo Mensual del Gobierno Federal (Ene 21 - May 26) - Real values from FRED: MTSDS133FMS (Billions USD)
export const MONTHS_P2 = [
  "Ene 21", "Abr 21", "Jul 21", "Oct 21",
  "Ene 22", "Abr 22", "Jul 22", "Oct 22",
  "Ene 23", "Abr 23", "Jul 23", "Oct 23",
  "Ene 24", "Abr 24", "Jul 24", "Oct 24",
  "Ene 25", "Abr 25", "Jul 25", "Oct 25",
  "Ene 26", "Abr 26", "May 26"
];

export const saldoMensualData = {
  labels: MONTHS_P2,
  values: [
    -162.8, -225.6, -302.1, -165.1,
    118.7,  308.2, -211.1,  -87.8,
    -38.8,  176.2, -220.8,  -66.6,
    -21.9,  209.5, -243.7, -257.5,
    -128.6, 258.4, -291.1, -284.4,
    -94.6,  215.0, -292.6
  ],
  stats: {
    bidenAvg: -162.68,
    trumpAvg: -135.94,
    totalChange: "Último: -$292.6B",
    source: "U.S. Department of the Treasury, Fiscal Service (FRED: MTSDS133FMS)",
    unit: "Miles de Millones de USD",
    sourceUrl: "https://fred.stlouisfed.org/series/MTSDS133FMS",
    sources: [
      { label: "MTSDS133FMS", url: "https://fred.stlouisfed.org/series/MTSDS133FMS" }
    ]
  }
};
