// Datasets for "Desde mi punto de vista, ¿cómo vamos? Parte 4"
// Sources: BEA (Regional Price Parity), BLS, U.S. Census Bureau, EIA, HUD, Tax Foundation, NCSL.

export interface StateRppItem {
  categoria: "Alto" | "Intermedio" | "Bajo";
  rango: number;
  estado: string;
  rpp2024: number;
  diferenciaPct: string;
}

export const STATES_RPP_2024: StateRppItem[] = [
  // Alto
  { categoria: "Alto", rango: 1, estado: "California", rpp2024: 110.7, diferenciaPct: "+10.7%" },
  { categoria: "Alto", rango: 2, estado: "Hawái", rpp2024: 110.0, diferenciaPct: "+10.0%" },
  { categoria: "Alto", rango: 3, estado: "Nueva Jersey", rpp2024: 108.8, diferenciaPct: "+8.8%" },
  { categoria: "Alto", rango: 4, estado: "Nueva York", rpp2024: 107.9, diferenciaPct: "+7.9%" },
  { categoria: "Alto", rango: 5, estado: "Washington", rpp2024: 107.0, diferenciaPct: "+7.0%" },
  // Intermedio
  { categoria: "Intermedio", rango: 23, estado: "Pennsylvania", rpp2024: 97.6, diferenciaPct: "-2.4%" },
  { categoria: "Intermedio", rango: 24, estado: "Texas", rpp2024: 97.1, diferenciaPct: "-2.9%" },
  { categoria: "Intermedio", rango: 25, estado: "Maine", rpp2024: 97.1, diferenciaPct: "-2.9%" },
  { categoria: "Intermedio", rango: 26, estado: "Georgia", rpp2024: 96.3, diferenciaPct: "-3.7%" },
  { categoria: "Intermedio", rango: 27, estado: "Michigan", rpp2024: 96.2, diferenciaPct: "-3.8%" },
  // Bajo
  { categoria: "Bajo", rango: 46, estado: "Luisiana", rpp2024: 88.2, diferenciaPct: "-11.8%" },
  { categoria: "Bajo", rango: 47, estado: "Oklahoma", rpp2024: 87.8, diferenciaPct: "-12.2%" },
  { categoria: "Bajo", rango: 48, estado: "Iowa", rpp2024: 87.8, diferenciaPct: "-12.2%" },
  { categoria: "Bajo", rango: 49, estado: "Mississippi", rpp2024: 87.0, diferenciaPct: "-13.0%" },
  { categoria: "Bajo", rango: 50, estado: "Arkansas", rpp2024: 86.9, diferenciaPct: "-13.1%" },
];

export interface StatePoliticsItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  estado: string;
  trayectoria: string;
}

export const STATES_POLITICS_2016_2026: StatePoliticsItem[] = [
  { grupo: "Alto", estado: "California", trayectoria: "Predominio D fuerte; trifecta demócrata durante prácticamente todo el período." },
  { grupo: "Alto", estado: "Hawái", trayectoria: "Predominio D fuerte; trifecta demócrata." },
  { grupo: "Alto", estado: "Nueva Jersey", trayectoria: "Dividido al inicio con gobernador R; predominio D y trifecta desde 2018." },
  { grupo: "Alto", estado: "Nueva York", trayectoria: "Gobierno dividido hasta 2018; trifecta D desde 2019." },
  { grupo: "Alto", estado: "Washington", trayectoria: "Gobernador D durante todo el período; trifecta D desde 2018." },
  { grupo: "Intermedio", estado: "Pennsylvania", trayectoria: "Gobierno dividido durante la mayor parte o totalidad del período." },
  { grupo: "Intermedio", estado: "Texas", trayectoria: "Trifecta R durante todo el período." },
  { grupo: "Intermedio", estado: "Maine", trayectoria: "Etapa mixta hasta 2018; predominio D desde 2019, con cambios legislativos recientes." },
  { grupo: "Intermedio", estado: "Georgia", trayectoria: "Trifecta R durante todo el período." },
  { grupo: "Intermedio", estado: "Michigan", trayectoria: "Trifecta R hasta 2018; gobierno dividido 2019–2022; trifecta D 2023–2024 y división posterior." },
  { grupo: "Bajo", estado: "Luisiana", trayectoria: "Gobernador D con legislatura R durante gran parte; trifecta R desde 2024." },
  { grupo: "Bajo", estado: "Oklahoma", trayectoria: "Trifecta R durante todo el período." },
  { grupo: "Bajo", estado: "Iowa", trayectoria: "Predominio R; trifecta R desde 2017." },
  { grupo: "Bajo", estado: "Mississippi", trayectoria: "Trifecta R durante todo el período." },
  { grupo: "Bajo", estado: "Arkansas", trayectoria: "Trifecta R durante todo el período." },
];

export interface MsaRppItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  rango: number;
  area: string;
  todos: number;
  bienes: number;
  alquileres: number;
  otrosServicios: number;
}

export const MSA_RPP_2024: MsaRppItem[] = [
  // RPP Mas Alto (1-5) - Grupo Alto
  { grupo: "Alto", rango: 1, area: "San Francisco–Oakland–Fremont, CA", todos: 115.6, bienes: 108.5, alquileres: 194.7, otrosServicios: 106.2 },
  { grupo: "Alto", rango: 2, area: "Miami–Fort Lauderdale–West Palm Beach, FL", todos: 114.2, bienes: 103.6, alquileres: 155.6, otrosServicios: 109.1 },
  { grupo: "Alto", rango: 3, area: "Los Angeles–Long Beach–Anaheim, CA", todos: 113.6, bienes: 106.6, alquileres: 170.4, otrosServicios: 104.4 },
  { grupo: "Alto", rango: 4, area: "New York–Newark–Jersey City, NY–NJ", todos: 112.6, bienes: 110.3, alquileres: 148.6, otrosServicios: 105.8 },
  { grupo: "Alto", rango: 5, area: "Napa, CA", todos: 112.6, bienes: 105.2, alquileres: 197.4, otrosServicios: 100.3 },
  // Mediana (192-196) - Grupo Intermedio
  { grupo: "Intermedio", rango: 192, area: "Roanoke, VA", todos: 93.6, bienes: 96.8, alquileres: 78.5, otrosServicios: 98.6 },
  { grupo: "Intermedio", rango: 193, area: "Scranton–Wilkes-Barre, PA", todos: 93.6, bienes: 100.7, alquileres: 67.0, otrosServicios: 97.7 },
  { grupo: "Intermedio", rango: 194, area: "Bloomington, IL", todos: 93.5, bienes: 93.6, alquileres: 74.7, otrosServicios: 99.6 },
  { grupo: "Intermedio", rango: 195, area: "Billings, MT", todos: 93.5, bienes: 96.0, alquileres: 77.4, otrosServicios: 98.7 },
  { grupo: "Intermedio", rango: 196, area: "Monroe, MI", todos: 93.5, bienes: 93.7, alquileres: 74.6, otrosServicios: 99.6 },
  // RPP Mas Bajo (383-387) - Grupo Bajo
  { grupo: "Bajo", rango: 383, area: "Enid, OK", todos: 84.3, bienes: 93.8, alquileres: 51.4, otrosServicios: 95.5 },
  { grupo: "Bajo", rango: 384, area: "Texarkana, TX–AR", todos: 84.0, bienes: 93.7, alquileres: 49.9, otrosServicios: 95.9 },
  { grupo: "Bajo", rango: 385, area: "Dothan, AL", todos: 83.8, bienes: 96.4, alquileres: 46.9, otrosServicios: 96.7 },
  { grupo: "Bajo", rango: 386, area: "Eagle Pass, TX", todos: 83.8, bienes: 93.8, alquileres: 53.7, otrosServicios: 96.2 },
  { grupo: "Bajo", rango: 387, area: "Monroe, LA", todos: 83.6, bienes: 93.7, alquileres: 42.8, otrosServicios: 95.7 },
];

export interface MsaPoliticsItem {
  area: string;
  codificacion: string;
  lectura: string;
}

export const MSA_POLITICS: MsaPoliticsItem[] = [
  { area: "San Francisco–Oakland–Fremont", codificacion: "Elecciones no partidistas; orientación centroizquierda/progresista predominante en las ciudades núcleo.", lectura: "Asociación con regulación alta, pero también con demanda, salarios y geografía." },
  { area: "Miami–Fort Lauderdale–West Palm Beach", codificacion: "Elecciones municipales mayormente no partidistas y afiliaciones mixtas.", lectura: "La etiqueta partidista explica poco sin analizar seguros, zonificación y construcción." },
  { area: "Los Angeles–Long Beach–Anaheim", codificacion: "Elecciones locales formalmente no partidistas; liderazgo generalmente centroizquierda en LA y Long Beach; Anaheim más mixto.", lectura: "No existe un único control metropolitano." },
  { area: "New York–Newark–Jersey City", codificacion: "Predominio demócrata verificable en las principales ciudades durante la mayor parte de la década.", lectura: "Caso de predominio D y alto costo, pero con múltiples gobiernos y mercados." },
  { area: "Napa, CA", codificacion: "Elecciones municipales no partidistas; no se asigna partido formal.", lectura: "No permite una correlación partidista precisa." },
  { area: "Roanoke, VA", codificacion: "Predominio demócrata en el gobierno de la ciudad durante buena parte del período.", lectura: "Costo moderado-bajo pese a predominio D." },
  { area: "Scranton–Wilkes-Barre, PA", codificacion: "Predominio demócrata en las ciudades núcleo.", lectura: "Costo moderado-bajo pese a predominio D; contradice una regla partidista simple." },
  { area: "Bloomington, IL", codificacion: "Elecciones municipales no partidistas.", lectura: "La carga estatal de Illinois no debe confundirse con control local formal." },
  { area: "Billings, MT", codificacion: "Elecciones municipales no partidistas.", lectura: "No asignable con rigor." },
  { area: "Monroe, MI", codificacion: "Gobierno municipal no partidista o sin codificación partidista comparable.", lectura: "No asignable con rigor." },
  { area: "Enid, OK", codificacion: "Elecciones municipales no partidistas.", lectura: "No asignable con rigor." },
  { area: "Texarkana, TX–AR", codificacion: "Dos ciudades y dos estados; gobiernos locales no comparables mediante una sola etiqueta.", lectura: "El diseño multiestatal impide una clasificación única." },
  { area: "Dothan, AL", codificacion: "Elecciones municipales no partidistas.", lectura: "No asignable con rigor." },
  { area: "Eagle Pass, TX", codificacion: "Elecciones locales no partidistas.", lectura: "El predominio estatal R no equivale a una afiliación municipal formal." },
  { area: "Monroe, LA", codificacion: "Cambio de alcalde demócrata a republicano alrededor de 2020.", lectura: "Período mixto; bajo costo antes y después del cambio." },
];

export interface GasolineTaxItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  estado: string;
  estatalLocal: number; // in cents
  federal: number; // 18.40 cents
  subtotal: number;
  regulacion: string;
  politica: string;
}

export const GASOLINE_TAX_DATA: GasolineTaxItem[] = [
  // Alto
  { grupo: "Alto", estado: "California", estatalLocal: 70.92, federal: 18.40, subtotal: 89.32, regulacion: "Muy alta", politica: "D fuerte" },
  { grupo: "Alto", estado: "Hawái", estatalLocal: 18.50, federal: 18.40, subtotal: 36.90, regulacion: "Logística alta", politica: "D fuerte" },
  { grupo: "Alto", estado: "Nueva Jersey", estatalLocal: 44.95, federal: 18.40, subtotal: 63.35, regulacion: "Alta regional", politica: "D desde 2018" },
  { grupo: "Alto", estado: "Nueva York", estatalLocal: 24.87, federal: 18.40, subtotal: 43.27, regulacion: "Alta regional", politica: "D desde 2019" },
  { grupo: "Alto", estado: "Washington", estatalLocal: 59.04, federal: 18.40, subtotal: 77.44, regulacion: "Media-alta", politica: "D desde 2018" },
  // Intermedio
  { grupo: "Intermedio", estado: "Pennsylvania", estatalLocal: 58.70, federal: 18.40, subtotal: 77.10, regulacion: "Media regional", politica: "Dividido" },
  { grupo: "Intermedio", estado: "Texas", estatalLocal: 20.00, federal: 18.40, subtotal: 38.40, regulacion: "Baja", politica: "R fuerte" },
  { grupo: "Intermedio", estado: "Maine", estatalLocal: 31.40, federal: 18.40, subtotal: 49.80, regulacion: "Media-baja", politica: "Mixto; D desde 2019" },
  { grupo: "Intermedio", estado: "Georgia", estatalLocal: 33.85, federal: 18.40, subtotal: 52.25, regulacion: "Baja-media", politica: "R fuerte" },
  { grupo: "Intermedio", estado: "Michigan", estatalLocal: 48.20, federal: 18.40, subtotal: 66.60, regulacion: "Media", politica: "Mixto" },
  // Bajo
  { grupo: "Bajo", estado: "Luisiana", estatalLocal: 20.93, federal: 18.40, subtotal: 39.33, regulacion: "Baja", politica: "Dividido; R desde 2024" },
  { grupo: "Bajo", estado: "Oklahoma", estatalLocal: 20.00, federal: 18.40, subtotal: 38.40, regulacion: "Baja", politica: "R fuerte" },
  { grupo: "Bajo", estado: "Iowa", estatalLocal: 30.00, federal: 18.40, subtotal: 48.40, regulacion: "Baja-media", politica: "R desde 2017" },
  { grupo: "Bajo", estado: "Mississippi", estatalLocal: 21.40, federal: 18.40, subtotal: 39.80, regulacion: "Baja", politica: "R fuerte" },
  { grupo: "Bajo", estado: "Arkansas", estatalLocal: 25.00, federal: 18.40, subtotal: 43.40, regulacion: "Baja", politica: "R fuerte" },
];

export const GASOLINE_GROUP_AVERAGES = [
  { grupo: "Alto", estatalLocal: 43.66, conFederal: 62.06 },
  { grupo: "Intermedio", estatalLocal: 38.43, conFederal: 56.83 },
  { grupo: "Bajo", estatalLocal: 23.47, conFederal: 41.87 },
];

export interface HousingTenureItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  estado: string;
  casaPropiaPct: number;
  alquilerPct: number;
}

export const HOUSING_TENURE_2025: HousingTenureItem[] = [
  // Alto
  { grupo: "Alto", estado: "California", casaPropiaPct: 55.3, alquilerPct: 44.7 },
  { grupo: "Alto", estado: "Hawái", casaPropiaPct: 60.9, alquilerPct: 39.1 },
  { grupo: "Alto", estado: "Nueva Jersey", casaPropiaPct: 63.7, alquilerPct: 36.3 },
  { grupo: "Alto", estado: "Nueva York", casaPropiaPct: 52.2, alquilerPct: 47.8 },
  { grupo: "Alto", estado: "Washington", casaPropiaPct: 63.4, alquilerPct: 36.6 },
  // Intermedio
  { grupo: "Intermedio", estado: "Pennsylvania", casaPropiaPct: 70.1, alquilerPct: 29.9 },
  { grupo: "Intermedio", estado: "Texas", casaPropiaPct: 63.6, alquilerPct: 36.4 },
  { grupo: "Intermedio", estado: "Maine", casaPropiaPct: 74.7, alquilerPct: 25.3 },
  { grupo: "Intermedio", estado: "Georgia", casaPropiaPct: 63.9, alquilerPct: 36.1 },
  { grupo: "Intermedio", estado: "Michigan", casaPropiaPct: 74.0, alquilerPct: 26.0 },
  // Bajo
  { grupo: "Bajo", estado: "Luisiana", casaPropiaPct: 69.3, alquilerPct: 30.7 },
  { grupo: "Bajo", estado: "Oklahoma", casaPropiaPct: 63.8, alquilerPct: 36.2 },
  { grupo: "Bajo", estado: "Iowa", casaPropiaPct: 70.2, alquilerPct: 29.8 },
  { grupo: "Bajo", estado: "Mississippi", casaPropiaPct: 74.9, alquilerPct: 25.1 },
  { grupo: "Bajo", estado: "Arkansas", casaPropiaPct: 58.2, alquilerPct: 41.8 },
];

export interface RentRppItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  estado: string;
  rppVivienda: number;
  presion: string;
  mecanismo: string;
}

export const RENT_RPP_BEA: RentRppItem[] = [
  // Alto
  { grupo: "Alto", estado: "California", rppVivienda: 154.3, presion: "Muy alta", mecanismo: "Tasa predial moderada, pero valores y facturas altas; restricciones de oferta, suelo y permisos." },
  { grupo: "Alto", estado: "Hawái", rppVivienda: 125.3, presion: "Muy alta", mecanismo: "Tasa predial efectiva baja, pero precios extremos por suelo insular, logística y oferta limitada." },
  { grupo: "Alto", estado: "Nueva Jersey", rppVivienda: 134.3, presion: "Alta", mecanismo: "Facturas prediales entre las más elevadas; fragmentación municipal y escolar." },
  { grupo: "Alto", estado: "Nueva York", rppVivienda: 122.2, presion: "Alta", mecanismo: "Fuertes diferencias entre NYC, Long Island y upstate; impuestos locales y oferta limitada en mercados demandados." },
  { grupo: "Alto", estado: "Washington", rppVivienda: 126.0, presion: "Alta", mecanismo: "Valores altos en Puget Sound; reformas recientes de middle housing, pero persistencia de restricciones locales." },
  // Intermedio
  { grupo: "Intermedio", estado: "Pennsylvania", rppVivienda: 85.1, presion: "Media", mecanismo: "Property tax escolar y local significativo y alta fragmentación municipal; gran variación regional." },
  { grupo: "Intermedio", estado: "Texas", rppVivienda: 96.5, presion: "Media", mecanismo: "Sin impuesto estatal sobre ingresos, pero property tax elevado; construcción relativamente flexible en varios mercados." },
  { grupo: "Intermedio", estado: "Maine", rppVivienda: 78.9, presion: "Media-alta", mecanismo: "Property tax y calefacción importantes; vivienda antigua, escasez estacional y oferta limitada en áreas costeras." },
  { grupo: "Intermedio", estado: "Georgia", rppVivienda: 88.7, presion: "Media", mecanismo: "Carga predial moderada; crecimiento rápido y restricciones suburbanas en Atlanta." },
  { grupo: "Intermedio", estado: "Michigan", rppVivienda: 82.3, presion: "Media", mecanismo: "Costos bajos fuera de mercados fuertes; sistema predial complejo y grandes diferencias entre ciudades." },
  // Bajo
  { grupo: "Bajo", estado: "Luisiana", rppVivienda: 63.1, presion: "Baja por precio; riesgo alto", mecanismo: "Valores y property tax bajos, pero seguros de vivienda y riesgo de huracanes pueden dominar." },
  { grupo: "Bajo", estado: "Oklahoma", rppVivienda: 62.8, presion: "Baja", mecanismo: "Suelo abundante y menor precio; seguros por tormentas pueden aumentar el costo total." },
  { grupo: "Bajo", estado: "Iowa", rppVivienda: 65.3, presion: "Baja-media", mecanismo: "Vivienda económica, aunque el property tax local puede ser relevante frente al ingreso." },
  { grupo: "Bajo", estado: "Mississippi", rppVivienda: 56.5, presion: "Baja", mecanismo: "Valores y facturas prediales bajos; seguros y calidad del parque habitacional varían." },
  { grupo: "Bajo", estado: "Arkansas", rppVivienda: 58.2, presion: "Baja", mecanismo: "Precios y facturas prediales bajos; presión creciente en mercados específicos del noroeste." },
];

export interface ConstructionPressureItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  estado: string;
  presionRegulatoria: string;
  lecturaPrincipal: string;
}

export const CONSTRUCTION_REGULATORY_PRESSURE: ConstructionPressureItem[] = [
  { grupo: "Alto", estado: "California", presionRegulatoria: "Muy alta", lecturaPrincipal: "Tasa predial moderada, pero valores y facturas altas; restricciones de oferta, suelo y permisos." },
  { grupo: "Alto", estado: "Hawái", presionRegulatoria: "Muy alta", lecturaPrincipal: "Tasa predial efectiva baja, pero precios extremos por suelo insular, logística y oferta limitada." },
  { grupo: "Alto", estado: "Nueva Jersey", presionRegulatoria: "Alta", lecturaPrincipal: "Facturas prediales entre las más elevadas; fragmentación municipal y escolar." },
  { grupo: "Alto", estado: "Nueva York", presionRegulatoria: "Alta", lecturaPrincipal: "Fuertes diferencias entre NYC, Long Island y upstate; impuestos locales y oferta limitada en mercados demandados." },
  { grupo: "Alto", estado: "Washington", presionRegulatoria: "Media-alta", lecturaPrincipal: "Valores altos en Puget Sound (Seattle, Bellevue, Tacoma); legislación reciente para incentivar densidad, pero persistencia de restricciones locales." },
  { grupo: "Intermedio", estado: "Pennsylvania", presionRegulatoria: "Media", lecturaPrincipal: "Property tax escolar/local significativo y alta fragmentación municipal; gran variación regional." },
  { grupo: "Intermedio", estado: "Texas", presionRegulatoria: "Baja-media", lecturaPrincipal: "Sin impuesto estatal sobre ingresos, pero property tax elevado; construcción relativamente flexible en varios mercados." },
  { grupo: "Intermedio", estado: "Maine", presionRegulatoria: "Media-alta", lecturaPrincipal: "Property tax y calefacción importantes; vivienda antigua, escasez estacional y oferta limitada en áreas costeras." },
  { grupo: "Intermedio", estado: "Georgia", presionRegulatoria: "Baja-media", lecturaPrincipal: "Carga predial moderada; crecimiento rápido y restricciones suburbanas en Atlanta." },
  { grupo: "Intermedio", estado: "Michigan", presionRegulatoria: "Media", lecturaPrincipal: "Costos bajos fuera de mercados fuertes; sistema predial complejo y grandes diferencias entre ciudades." },
  { grupo: "Bajo", estado: "Luisiana", presionRegulatoria: "Baja-media", lecturaPrincipal: "Valores y property tax bajos, pero seguros de vivienda y riesgo de huracanes pueden dominar." },
  { grupo: "Bajo", estado: "Oklahoma", presionRegulatoria: "Baja", lecturaPrincipal: "Suelo abundante y menor precio; seguros por tormentas pueden aumentar el costo total." },
  { grupo: "Bajo", estado: "Iowa", presionRegulatoria: "Baja-media", lecturaPrincipal: "Vivienda económica, aunque el property tax local puede ser relevante frente al ingreso." },
  { grupo: "Bajo", estado: "Mississippi", presionRegulatoria: "Baja", lecturaPrincipal: "Valores y facturas prediales bajos; seguros y calidad del parque varían." },
  { grupo: "Bajo", estado: "Arkansas", presionRegulatoria: "Baja", lecturaPrincipal: "Precios y facturas prediales bajos; presión creciente en mercados específicos del noroeste." },
];

export interface PropertyTaxItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  estado: string;
  tasaEfectivaPct: number;
  posicionNacional: number;
  impuesto400k: number;
}

export const PROPERTY_TAX_DATA: PropertyTaxItem[] = [
  // Alto
  { grupo: "Alto", estado: "California", tasaEfectivaPct: 0.70, posicionNacional: 32, impuesto400k: 2800 },
  { grupo: "Alto", estado: "Hawái", tasaEfectivaPct: 0.29, posicionNacional: 50, impuesto400k: 1160 },
  { grupo: "Alto", estado: "Nueva Jersey", tasaEfectivaPct: 1.88, posicionNacional: 1, impuesto400k: 7520 },
  { grupo: "Alto", estado: "Nueva York", tasaEfectivaPct: 1.30, posicionNacional: 11, impuesto400k: 5200 },
  { grupo: "Alto", estado: "Washington", tasaEfectivaPct: 0.75, posicionNacional: 30, impuesto400k: 3000 },
  // Intermedio
  { grupo: "Intermedio", estado: "Pennsylvania", tasaEfectivaPct: 1.26, posicionNacional: 12, impuesto400k: 5040 },
  { grupo: "Intermedio", estado: "Texas", tasaEfectivaPct: 1.40, posicionNacional: 7, impuesto400k: 5600 },
  { grupo: "Intermedio", estado: "Maine", tasaEfectivaPct: 0.98, posicionNacional: 19, impuesto400k: 3920 },
  { grupo: "Intermedio", estado: "Georgia", tasaEfectivaPct: 0.79, posicionNacional: 25, impuesto400k: 3160 },
  { grupo: "Intermedio", estado: "Michigan", tasaEfectivaPct: 1.19, posicionNacional: 14, impuesto400k: 4760 },
  // Bajo
  { grupo: "Bajo", estado: "Luisiana", tasaEfectivaPct: 0.55, posicionNacional: 38, impuesto400k: 2200 },
  { grupo: "Bajo", estado: "Oklahoma", tasaEfectivaPct: 0.79, posicionNacional: 26, impuesto400k: 3160 },
  { grupo: "Bajo", estado: "Iowa", tasaEfectivaPct: 1.33, posicionNacional: 9, impuesto400k: 5320 },
  { grupo: "Bajo", estado: "Mississippi", tasaEfectivaPct: 0.58, posicionNacional: 36, impuesto400k: 2320 },
  { grupo: "Bajo", estado: "Arkansas", tasaEfectivaPct: 0.56, posicionNacional: 37, impuesto400k: 2240 },
];

export const PROPERTY_TAX_GROUP_AVERAGES = [
  { grupo: "Alto", tasaEfectivaPct: 0.98, impuesto400k: 3936 },
  { grupo: "Intermedio", tasaEfectivaPct: 1.12, impuesto400k: 4496 },
  { grupo: "Bajo", tasaEfectivaPct: 0.76, impuesto400k: 3048 },
];

export interface SalesIncomeTaxItem {
  grupo: "Alto" | "Intermedio" | "Bajo";
  estado: string;
  ventasEstatalPct: number;
  ventasLocalPromedioPct: number;
  ventasCombinadaPct: number;
  ingresosIndividualesStr: string;
  ingresosMaxPct: number; // for charts/visual comparison
  estructura: string;
}

export const SALES_INCOME_TAX_2026: SalesIncomeTaxItem[] = [
  // Alto
  { grupo: "Alto", estado: "California", ventasEstatalPct: 7.25, ventasLocalPromedioPct: 1.78, ventasCombinadaPct: 9.03, ingresosIndividualesStr: "1.00%–13.30%", ingresosMaxPct: 13.30, estructura: "Progresivo" },
  { grupo: "Alto", estado: "Hawái", ventasEstatalPct: 4.00, ventasLocalPromedioPct: 0.50, ventasCombinadaPct: 4.50, ingresosIndividualesStr: "1.40%–11.00%", ingresosMaxPct: 11.00, estructura: "Progresivo" },
  { grupo: "Alto", estado: "Nueva Jersey", ventasEstatalPct: 6.63, ventasLocalPromedioPct: -0.02, ventasCombinadaPct: 6.60, ingresosIndividualesStr: "1.40%–10.75%", ingresosMaxPct: 10.75, estructura: "Progresivo" },
  { grupo: "Alto", estado: "Nueva York", ventasEstatalPct: 4.00, ventasLocalPromedioPct: 4.54, ventasCombinadaPct: 8.54, ingresosIndividualesStr: "3.90%–10.90%", ingresosMaxPct: 10.90, estructura: "Progresivo" },
  { grupo: "Alto", estado: "Washington", ventasEstatalPct: 6.50, ventasLocalPromedioPct: 3.07, ventasCombinadaPct: 9.57, ingresosIndividualesStr: "0% (sobre salarios)", ingresosMaxPct: 0.0, estructura: "Sin impuesto general salarios" },
  // Intermedio
  { grupo: "Intermedio", estado: "Pennsylvania", ventasEstatalPct: 6.00, ventasLocalPromedioPct: 0.34, ventasCombinadaPct: 6.34, ingresosIndividualesStr: "3.07%", ingresosMaxPct: 3.07, estructura: "Tasa única" },
  { grupo: "Intermedio", estado: "Texas", ventasEstatalPct: 6.25, ventasLocalPromedioPct: 1.95, ventasCombinadaPct: 8.20, ingresosIndividualesStr: "0%", ingresosMaxPct: 0.0, estructura: "Sin impuesto estatal individual" },
  { grupo: "Intermedio", estado: "Maine", ventasEstatalPct: 5.50, ventasLocalPromedioPct: 0.00, ventasCombinadaPct: 5.50, ingresosIndividualesStr: "5.80%–7.15%", ingresosMaxPct: 7.15, estructura: "Progresivo" },
  { grupo: "Intermedio", estado: "Georgia", ventasEstatalPct: 4.00, ventasLocalPromedioPct: 3.56, ventasCombinadaPct: 7.56, ingresosIndividualesStr: "5.19%", ingresosMaxPct: 5.19, estructura: "Tasa única" },
  { grupo: "Intermedio", estado: "Michigan", ventasEstatalPct: 6.00, ventasLocalPromedioPct: 0.00, ventasCombinadaPct: 6.00, ingresosIndividualesStr: "4.25%", ingresosMaxPct: 4.25, estructura: "Tasa única" },
  // Bajo
  { grupo: "Bajo", estado: "Luisiana", ventasEstatalPct: 5.00, ventasLocalPromedioPct: 5.13, ventasCombinadaPct: 10.13, ingresosIndividualesStr: "3.00%", ingresosMaxPct: 3.00, estructura: "Tasa única" },
  { grupo: "Bajo", estado: "Oklahoma", ventasEstatalPct: 4.50, ventasLocalPromedioPct: 4.56, ventasCombinadaPct: 9.06, ingresosIndividualesStr: "2.50%–4.50%", ingresosMaxPct: 4.50, estructura: "Progresivo" },
  { grupo: "Bajo", estado: "Iowa", ventasEstatalPct: 6.00, ventasLocalPromedioPct: 0.94, ventasCombinadaPct: 6.94, ingresosIndividualesStr: "3.80%", ingresosMaxPct: 3.80, estructura: "Tasa única" },
  { grupo: "Bajo", estado: "Mississippi", ventasEstatalPct: 7.00, ventasLocalPromedioPct: 0.06, ventasCombinadaPct: 7.06, ingresosIndividualesStr: "4.00%", ingresosMaxPct: 4.00, estructura: "Tasa única sobre imponible superior" },
  { grupo: "Bajo", estado: "Arkansas", ventasEstatalPct: 6.50, ventasLocalPromedioPct: 2.98, ventasCombinadaPct: 9.48, ingresosIndividualesStr: "2.00%–3.90%", ingresosMaxPct: 3.90, estructura: "Dos tasas principales" },
];

export const SALES_INCOME_GROUP_AVERAGES = [
  { grupo: "Alto", ventasCombinadaPct: 7.65, ingresosPromedioPct: 9.19 },
  { grupo: "Intermedio", ventasCombinadaPct: 6.72, ingresosPromedioPct: 3.93 },
  { grupo: "Bajo", ventasCombinadaPct: 8.53, ingresosPromedioPct: 3.84 },
];

// Net Migration Series 2017 - 2026 (In Thousands of People)
export const NET_MIGRATION_HIGH_COST = [
  { year: "2017", California: -120, NuevaYork: -138, NuevaJersey: -45, Washington: 42, Hawái: -15 },
  { year: "2018", California: -135, NuevaYork: -152, NuevaJersey: -48, Washington: 38, Hawái: -15 },
  { year: "2019", California: -155, NuevaYork: -170, NuevaJersey: -42, Washington: 36, Hawái: -14 },
  { year: "2020", California: -218, NuevaYork: -232, NuevaJersey: -35, Washington: 30, Hawái: -16 },
  { year: "2021", California: -345, NuevaYork: -312, NuevaJersey: -60, Washington: 20, Hawái: -18 },
  { year: "2022", California: -258, NuevaYork: -210, NuevaJersey: -22, Washington: 32, Hawái: -17 },
  { year: "2023", California: -142, NuevaYork: -102, NuevaJersey: 5, Washington: 25, Hawái: -14 },
  { year: "2024", California: -95, NuevaYork: -32, NuevaJersey: 28, Washington: 26, Hawái: -12 },
  { year: "2025", California: -48, NuevaYork: -42, NuevaJersey: 10, Washington: 28, Hawái: -10 },
  { year: "2026", California: -22, NuevaYork: -28, NuevaJersey: -8, Washington: 30, Hawái: -8 },
];

export const NET_MIGRATION_INTERMEDIATE_COST = [
  { year: "2017", Texas: 412, Georgia: 92, Maine: 8, Michigan: 2, Pennsylvania: -6 },
  { year: "2018", Texas: 395, Georgia: 95, Maine: 9, Michigan: 3, Pennsylvania: -4 },
  { year: "2019", Texas: 422, Georgia: 98, Maine: 11, Michigan: 5, Pennsylvania: -2 },
  { year: "2020", Texas: 450, Georgia: 100, Maine: 13, Michigan: 4, Pennsylvania: 0 },
  { year: "2021", Texas: 480, Georgia: 92, Maine: 16, Michigan: 6, Pennsylvania: -1 },
  { year: "2022", Texas: 520, Georgia: 102, Maine: 18, Michigan: 8, Pennsylvania: 2 },
  { year: "2023", Texas: 475, Georgia: 94, Maine: 14, Michigan: 12, Pennsylvania: 10 },
  { year: "2024", Texas: 442, Georgia: 91, Maine: 13, Michigan: 11, Pennsylvania: 8 },
  { year: "2025", Texas: 420, Georgia: 90, Maine: 12, Michigan: 10, Pennsylvania: 7 },
  { year: "2026", Texas: 410, Georgia: 92, Maine: 12, Michigan: 9, Pennsylvania: 6 },
];

export const NET_MIGRATION_LOW_COST = [
  { year: "2017", Oklahoma: 12, Iowa: 3, Mississippi: -8, Luisiana: -22 },
  { year: "2018", TexasRef: 24, Oklahoma: 14, Iowa: 3, Mississippi: -10, Luisiana: -25 },
  { year: "2019", Oklahoma: 17, Iowa: 4, Mississippi: -11, Luisiana: -29 },
  { year: "2020", Oklahoma: 20, Iowa: 2, Mississippi: -12, Luisiana: -38 },
  { year: "2021", Oklahoma: 32, Iowa: 7, Mississippi: -6, Luisiana: -52 },
  { year: "2022", Oklahoma: 36, Iowa: 9, Mississippi: -3, Luisiana: -41 },
  { year: "2023", Oklahoma: 30, Iowa: 10, Mississippi: 2, Luisiana: -32 },
  { year: "2024", Oklahoma: 28, Iowa: 9, Mississippi: 5, Luisiana: -26 },
  { year: "2025", Oklahoma: 25, Iowa: 8, Mississippi: 4, Luisiana: -22 },
  { year: "2026", Oklahoma: 22, Iowa: 7, Mississippi: 3, Luisiana: -19 },
];

export interface CumulativeMigrationState {
  grupo: "Positiva" | "Negativa";
  estado: string;
  acumulado: number;
  gobernacionDominante: string;
  distribucionGov: string;
  legislaturaDominante: string;
  distribucionLegis: string;
}

export const CUMULATIVE_MIGRATION_STATES: CumulativeMigrationState[] = [
  // Top Positiva
  { grupo: "Positiva", estado: "Florida", acumulado: 3401138, gobernacionDominante: "Republicano", distribucionGov: "R: 10; D: 0", legislaturaDominante: "Republicano", distribucionLegis: "R: 10; D: 0" },
  { grupo: "Positiva", estado: "Texas", acumulado: 2747423, gobernacionDominante: "Republicano", distribucionGov: "R: 10; D: 0", legislaturaDominante: "Republicano", distribucionLegis: "R: 10; D: 0" },
  { grupo: "Positiva", estado: "Carolina del Norte", acumulado: 1136906, gobernacionDominante: "Demócrata", distribucionGov: "D: 9; R: 1", legislaturaDominante: "Republicano", distribucionLegis: "R: 10; D: 0" },
  { grupo: "Positiva", estado: "Arizona", acumulado: 891713, gobernacionDominante: "Republicano", distribucionGov: "R: 7; D: 3", legislaturaDominante: "Republicano", distribucionLegis: "R: 10; D: 0" },
  { grupo: "Positiva", estado: "Georgia", acumulado: 769922, gobernacionDominante: "Republicano", distribucionGov: "R: 10; D: 0", legislaturaDominante: "Republicano", distribucionLegis: "R: 10; D: 0" },
  // Top Negativa
  { grupo: "Negativa", estado: "California", acumulado: -1148923, gobernacionDominante: "Demócrata", distribucionGov: "D: 10; R: 0", legislaturaDominante: "Demócrata", distribucionLegis: "D: 10; R: 0" },
  { grupo: "Negativa", estado: "Nueva York", acumulado: -954794, gobernacionDominante: "Demócrata", distribucionGov: "D: 10; R: 0", legislaturaDominante: "Demócrata", distribucionLegis: "D: 7; dividido/coalición: 3" },
  { grupo: "Negativa", estado: "Illinois", acumulado: -576974, gobernacionDominante: "Demócrata", distribucionGov: "D: 7; R: 3", legislaturaDominante: "Demócrata", distribucionLegis: "D: 10; R: 0" },
  { grupo: "Negativa", estado: "Luisiana", acumulado: -141349, gobernacionDominante: "Demócrata", distribucionGov: "D: 8; R: 2", legislaturaDominante: "Republicano", distribucionLegis: "R: 10; D: 0" },
  { grupo: "Negativa", estado: "Hawái", acumulado: -72679, gobernacionDominante: "Demócrata", distribucionGov: "D: 10; R: 0", legislaturaDominante: "Demócrata", distribucionLegis: "D: 10; R: 0" },
];

export interface FamilyBudgetWeight {
  variable: string;
  peso: string;
  interpretacion: string;
}

export const FAMILY_BUDGET_WEIGHTS: FamilyBudgetWeight[] = [
  {
    variable: "Costos de vivienda",
    peso: "33.4% del gasto familiar",
    interpretacion: "Es el componente directo más importante. En 2024 fueron, en promedio, US$26,266 de US$78,535 de gasto anual. En 2014 representaban 33.3%; su participación prácticamente no cambió: 33.4% − 33.3% = 0.1 punto porcentual. (Bureau of Labor Statistics)"
  },
  {
    variable: "Impuestos federales",
    peso: "20.6% del ingreso (promedio)",
    interpretacion: "Incluye impuesto sobre la renta individual, payroll taxes, impuesto corporativo atribuido y excise taxes. No representa lo que paga exactamente una familia mediana: la tasa varía fuertemente según ingreso, hijos, deducciones y fuentes de renta. Los créditos extraordinarios redujeron temporalmente las tasas en 2020 y 2021. (Congressional Budget Office)"
  },
  {
    variable: "Impuestos estatales y locales",
    peso: "10.5% del ingreso (familias medias)",
    interpretacion: "Estimación nacional de ITEP bajo las leyes de 2024. Incluye impuestos estatales y locales sobre renta, ventas, consumo y propiedad. El promedio estimado es 11.4% para el 20% de menores ingresos y 7.2% para el 1% superior. No es una estadística oficial del Census Bureau. (ITEP)"
  },
  {
    variable: "Estado donde se vive",
    peso: "Altera el nivel de precios en 27.4% entre extremos",
    interpretacion: "En 2024, el índice de precios regionales fue 110.7 en California y 86.9 en Arkansas: 110.7 ÷ 86.9 = 1.274, es decir, California resultaba aproximadamente 27.4% más cara en el nivel general de precios. (Bureau of Economic Analysis)"
  }
];

export interface PriorityReformItem {
  prioridad: number;
  reforma: string;
  impactoPotencial: string;
}

export const PRIORITY_REFORMS: PriorityReformItem[] = [
  { prioridad: 1, reforma: "Oferta de vivienda y zonificación", impactoPotencial: "Muy alto" },
  { prioridad: 2, reforma: "Permisos rápidos y predecibles", impactoPotencial: "Muy alto" },
  { prioridad: 3, reforma: "Property tax y seguros", impactoPotencial: "Alto" },
  { prioridad: 4, reforma: "Impact fees e infraestructura", impactoPotencial: "Alto" },
  { prioridad: 5, reforma: "Consolidación administrativa", impactoPotencial: "Medio-alto" },
  { prioridad: 6, reforma: "Códigos uniformes y construcción modular", impactoPotencial: "Medio-alto" },
  { prioridad: 7, reforma: "Sales tax sobre bienes esenciales", impactoPotencial: "Medio" },
  { prioridad: 8, reforma: "Gasolina y formulación regional", impactoPotencial: "Medio" },
  { prioridad: 9, reforma: "Registro y tarifas vehiculares", impactoPotencial: "Bajo-medio" },
  { prioridad: 10, reforma: "Digitalización", impactoPotencial: "Medio y acumulativo" },
];
