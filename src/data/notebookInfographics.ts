export type InfographicIconName =
  | 'chain'
  | 'clock'
  | 'alert'
  | 'dollar'
  | 'power'
  | 'factory'
  | 'truck'
  | 'grain'
  | 'bank'
  | 'trending-down'
  | 'school'
  | 'book-ai'
  | 'hand-money'
  | 'chart'
  | 'law'
  | 'drill'
  | 'shield'
  | 'plug'
  | 'tractor'
  | 'ship'
  | 'handshake'
  | 'bar-chart'
  | 'heart-utensils'
  | 'graduation'
  | 'voucher'
  | 'scale'
  | 'flame'
  | 'sun'
  | 'wheat'
  | 'globe'
  | 'coins'
  | 'eye'
  | 'users'
  | 'scissors'
  | 'rotate-ccw'
  | 'brain'
  | 'compass'
  | 'book-open'
  | 'layers'
  | 'zap';

export interface InfographicDiagnosisItem {
  id: string;
  iconName: InfographicIconName;
  metric: string;
  metricLabel: string;
  description: string;
}

export interface InfographicImmediateAction {
  number: number;
  title: string;
  description: string;
  iconName: InfographicIconName;
}

export interface InfographicPillarStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: InfographicIconName;
}

export interface InfographicBudgetData {
  initialInvestmentLabel: string;
  initialInvestmentAmount: string;
  initialInvestmentSubtitle: string;
  initialChartBars: { label: string; heightPercent: number; color?: string }[];
  threeYearRecoveryLabel: string;
  threeYearRecoveryAmount: string;
  threeYearRecoverySubtitle: string;
  donutChartPercent: number; // e.g. 78
  tableTitle: string;
  tableHeaders: [string, string, string];
  tableRows: [string, string, string][];
}

export interface NotebookInfographicData {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  diagnosisTitle: string;
  diagnosisItems: InfographicDiagnosisItem[];
  immediateActionTitle: string;
  immediateActionCallout?: string;
  immediateActionCalloutNumber?: string;
  immediateActionCalloutUnit?: string;
  immediateActionCalloutLabel?: string;
  immediateActions: InfographicImmediateAction[];
  pillarsTitle: string;
  pillars: InfographicPillarStep[];
  analyticsSectionTitle?: string;
  budgetData: InfographicBudgetData;
  sourceCitation?: string;
}

export const notebookInfographics: Record<string, NotebookInfographicData> = {
  cap1: {
    id: 'cap1',
    chapterNumber: 'CAPÍTULO 1',
    title: 'LA ARQUITECTURA INVISIBLE',
    subtitle: 'POR QUÉ LAS ORGANIZACIONES EDUCATIVAS FUNCIONAN CON PASMOSA FIDELIDAD SEGÚN SU DISEÑO',
    tagline: 'Hilmer Castillo Bescanza • Principios de Diseño Sistémico, Fricción Oculta y Reglas Tácitas',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LA FRICCIÓN INVISIBLE',
    diagnosisItems: [
      {
        id: 'c1_d1',
        iconName: 'alert',
        metric: '300+ FOTOS',
        metricLabel: 'Y MILLONES EN MOBILIARIO',
        description: 'Universidades que remodelan aulas y compran tecnología copiando a Finlandia o Minerva, pero 3 años después siguen reproduciendo exactamente los mismos resultados.',
      },
      {
        id: 'c1_d2',
        iconName: 'clock',
        metric: '45 MINUTOS',
        metricLabel: 'TIRANÍA DE LA FRAGMENTACIÓN',
        description: 'La campana escolar que reinicia artificialmente la atención, castiga la indagación profunda y normaliza la prisa superficial del temario.',
      },
      {
        id: 'c1_d3',
        iconName: 'shield',
        metric: '100% REGLAS',
        metricLabel: 'TÁCITAS SOBRE EL DISCURSO',
        description: 'Lo que una institución evalúa, sanciona y premia dicta la práctica real mucho más que su ideario o misión oficial.',
      },
      {
        id: 'c1_d4',
        iconName: 'trending-down',
        metric: '85% DESGASTE',
        metricLabel: 'POR HEROÍSMO INDIVIDUAL',
        description: 'Docentes exhaustos supliendo con sacrificio personal y vocación las carencias que un diseño organizacional desfasado hace inevitables.',
      },
    ],
    immediateActionTitle: 'TRANSICIÓN Y REDISEÑO: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'PLAN MAESTRO',
    immediateActions: [
      {
        number: 1,
        title: 'AUDITORÍA DE REGLAS TÁCITAS',
        description: 'Mapear la contradicción entre lo que la institución declara en su misión y lo que premia en las evaluaciones diarias.',
        iconName: 'eye',
      },
      {
        number: 2,
        title: 'MORATORIA DE COMPRAS COSMÉTICAS',
        description: 'Frenar la adquisición impulsiva de pantallas y mobiliario que carezcan de un modelo de rediseño arquitectónico.',
        iconName: 'scissors',
      },
      {
        number: 3,
        title: 'CARTOGRAFÍA DE FRICCIÓN TEMPORAL',
        description: 'Cronometrar las interrupciones del timbre y la saturación de 8 asignaturas desconectadas en la jornada escolar.',
        iconName: 'clock',
      },
      {
        number: 4,
        title: 'PROTOTIPO DE INMERSIÓN PROTEGIDA',
        description: 'Habilitar un entorno experimental continuo de 2 a 3 horas de indagación activa basada en desafíos auténticos.',
        iconName: 'layers',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DEL ENFOQUE ARQUITECTÓNICO',
    pillars: [
      {
        number: 1,
        title: '1. CULTURA REAL Y REGLAS TÁCITAS',
        subtitle: 'Diseño de Incentivos',
        description: 'Rediseñar las estructuras e incentivos invisibles para que el aprendizaje surja como resultado natural y no impuesto.',
        iconName: 'shield',
      },
      {
        number: 2,
        title: '2. METÁFORA DEL INVERNADERO',
        subtitle: 'Pensamiento Sistémico',
        description: 'Comprender a la escuela como un ecosistema vivo y adaptativo, nunca como un reloj de engranajes reemplazables.',
        iconName: 'wheat',
      },
      {
        number: 3,
        title: '3. SOBERANÍA TEMPORAL',
        subtitle: 'Ritmo Cognitivo Biológico',
        description: 'Sustituir la fragmentación de 45 minutos por bloques fluidos de inmersión, reflexión y concentración sostenida.',
        iconName: 'clock',
      },
      {
        number: 4,
        title: '4. APRENDIZAJE SIN CULPA',
        subtitle: 'El Error como Dato de Diseño',
        description: 'Comprender que las organizaciones no sufren fallos morales individuales, sino desajustes estructurales de diseño.',
        iconName: 'scale',
      },
    ],
    analyticsSectionTitle: 'CONDICIONES DEL TIEMPO Y AGENCIA COGNITIVA',
    budgetData: {
      initialInvestmentLabel: 'TIEMPO CAUTIVO EN FRICCIÓN',
      initialInvestmentAmount: '65% JORNADA',
      initialInvestmentSubtitle: 'Horas consumidas en cambios de timbre, burocracia punitiva y disciplina reactiva.',
      initialChartBars: [
        { label: 'Tradicional', heightPercent: 28 },
        { label: 'Cosmético', heightPercent: 42 },
        { label: 'Arquitectura', heightPercent: 88 },
      ],
      threeYearRecoveryLabel: 'GANANCIA DE AGENCIA COGNITIVA',
      threeYearRecoveryAmount: '+78%',
      threeYearRecoverySubtitle: 'Incremento en autonomía estudiantil y capacidad de resolver problemas sin supervisión.',
      donutChartPercent: 78,
      tableTitle: 'MATRIZ COMPARATIVA: MODELO CONVENCIONAL VS. ARQUITECTURA DEL APRENDIZAJE',
      tableHeaders: ['Dimensión del Sistema', 'Modelo Convencional', 'Arquitectura del Aprendizaje'],
      tableRows: [
        ['Estructura del Tiempo', 'Timbres rígidos de 45 min', 'Bloques inmersivos de 90 a 180 min'],
        ['Incentivos y Evaluación', 'Nota numérica y obediencia', 'Evidencias de comprensión y criterio'],
        ['Rol Docente', 'Transmisión aislada en aula cerrada', 'Comunidad de diseño colegiado'],
        ['Foco Presupuestario', 'Hardware y reformas cosméticas', 'Capacidad institucional y andamiaje'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 1: La Arquitectura Invisible',
  },

  cap2: {
    id: 'cap2',
    chapterNumber: 'CAPÍTULO 2',
    title: 'LA CRISIS DEL PARADIGMA INDUSTRIAL',
    subtitle: 'CUANDO EL DISEÑO DEJA DE RESPONDER AL PROPÓSITO: LA HERENCIA INVISIBLE DE 1908',
    tagline: 'Hilmer Castillo Bescanza • De la Escuela de Ensamblaje Masivo a la Era de la Inteligencia Artificial',
    diagnosisTitle: 'EL DIAGNÓSTICO DEL DESFASE HISTÓRICO',
    diagnosisItems: [
      {
        id: 'c2_d1',
        iconName: 'clock',
        metric: '1908 - 2026',
        metricLabel: 'MATRIZ FABRIL INTACTA',
        description: 'Un maestro de 1908 en una escuela de 2026 reconoce casi todo: timbres, filas, notas numéricas y materias compartimentadas.',
      },
      {
        id: 'c2_d2',
        iconName: 'layers',
        metric: 'LOTES X EDAD',
        metricLabel: 'LÍNEA DE MONTAJE MECÁNICA',
        description: 'Agrupar por fecha de nacimiento como criterio logístico de producción fabril, ignorando los ritmos singulares del aprendizaje.',
      },
      {
        id: 'c2_d3',
        iconName: 'compass',
        metric: '8 CASILLEROS',
        metricLabel: 'PARCELACIÓN DEL SABER',
        description: 'División artificial del conocimiento en asignaturas aisladas que impiden comprender la complejidad del mundo real.',
      },
      {
        id: 'c2_d4',
        iconName: 'brain',
        metric: '100% IA',
        metricLabel: 'OBSOLESCENCIA DE LA MEMORIA',
        description: 'La inteligencia artificial automatiza la retención pasiva de datos; la escuela tradicional sigue evaluando tareas mecánicas.',
      },
    ],
    immediateActionTitle: 'DESACOPLE INDUSTRIAL: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'RUPTURA FABRIL',
    immediateActions: [
      {
        number: 1,
        title: 'DESMANTELAR LA CLASE EXPOSITIVA PURA',
        description: 'Reducir la instrucción magistral a micro-cápsulas de 15 min y activar de inmediato la indagación guiada.',
        iconName: 'scissors',
      },
      {
        number: 2,
        title: 'PILOTO DE AGRUPACIÓN MULTINIVEL',
        description: 'Permitir que estudiantes de distintas edades colaboren en proyectos según su nivel real de dominio y reto.',
        iconName: 'users',
      },
      {
        number: 3,
        title: 'NÚCLEOS DE SABER INTEGRADO',
        description: 'Fusionar materias afines en retos interdisciplinarios que vinculen ciencia, humanidades y ética.',
        iconName: 'layers',
      },
      {
        number: 4,
        title: 'EVALUAR CRITERIO, NO RETENCIÓN',
        description: 'Eliminar cuestionarios memorísticos cuyas respuestas se obtienen en segundos mediante un buscador o IA.',
        iconName: 'brain',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DEL REDISEÑO POSINDUSTRIAL',
    pillars: [
      {
        number: 1,
        title: '1. ITINERARIOS ADAPTATIVOS',
        subtitle: 'Fin de la Línea de Montaje',
        description: 'Transitar hacia progresiones flexibles donde el dominio conceptual sustituye al calendario rígido de fábrica.',
        iconName: 'compass',
      },
      {
        number: 2,
        title: '2. PENSAMIENTO COMPLEJO',
        subtitle: 'Interdisciplinariedad Real',
        description: 'Conectar disciplinas para resolver desafíos auténticos del entorno comunitario, tecnológico y global.',
        iconName: 'layers',
      },
      {
        number: 3,
        title: '3. AGENCIA Y CRITERIO PROPIO',
        subtitle: 'Valor Humano en la Era IA',
        description: 'Cultivar la formulación de preguntas provocadoras, el juicio ético y el pensamiento crítico profundo.',
        iconName: 'brain',
      },
      {
        number: 4,
        title: '4. DOCENTE ARQUITECTO',
        subtitle: 'De Capataz a Diseñador',
        description: 'Superar el rol de inspector de contenidos para transformarse en arquitecto de experiencias de alto reto.',
        iconName: 'users',
      },
    ],
    analyticsSectionTitle: 'DESACOPLE DE TAREAS MECÁNICAS E IMPACTO',
    budgetData: {
      initialInvestmentLabel: 'TAREAS MECÁNICAS OBSOLETAS',
      initialInvestmentAmount: '80% CURRÍCULO',
      initialInvestmentSubtitle: 'Contenidos de repetición y memoria que hoy son resueltos instantáneamente por IA.',
      initialChartBars: [
        { label: 'Memoria', heightPercent: 85 },
        { label: 'Híbrido', heightPercent: 45 },
        { label: 'Criterio', heightPercent: 90 },
      ],
      threeYearRecoveryLabel: 'CAPACIDAD DE JUICIO CRÍTICO',
      threeYearRecoveryAmount: '+85%',
      threeYearRecoverySubtitle: 'Estudiantes capacitados para formular preguntas, contrastar fuentes y argumentar posturas.',
      donutChartPercent: 85,
      tableTitle: 'TRANSICIÓN HISTÓRICA: MATRIZ FABRIL VS. COMUNIDAD DE APRENDIZAJE',
      tableHeaders: ['Eje Estructural', 'Escuela Fabril Siglo XIX', 'Arquitectura del Aprendizaje'],
      tableRows: [
        ['Criterio de Agrupación', 'Lotes estrictos por año de nacimiento', 'Comunidades multinivel por retos y dominio'],
        ['Organización Curricular', 'Casilleros disciplinares aislados', 'Desafíos auténticos interdisciplinarios'],
        ['Demanda Cognitiva', 'Memorización y reproducción pasiva', 'Criterio analítico, formulación y juicio ético'],
        ['Relación con la IA', 'Amenaza de trampa o prohibición', 'Socio cognitivo de indagación y andamiaje'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 2: La Crisis del Paradigma Industrial',
  },

  cap3: {
    id: 'cap3',
    chapterNumber: 'CAPÍTULO 3',
    title: 'EL FRACASO DE LAS REFORMAS AISLADAS',
    subtitle: 'LA ILUSIÓN DE LA TECNOLOGÍA, LOS TALLERES DOCENTES Y EL CAMBIO FRAGMENTARIO',
    tagline: 'Hilmer Castillo Bescanza • Por qué la Tecnología sin Arquitectura solo Digitaliza la Mediocridad',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LA REFORMA ILUSORIA',
    diagnosisItems: [
      {
        id: 'c3_d1',
        iconName: 'alert',
        metric: '$0 IMPACTO',
        metricLabel: 'PANTALLAS EN VIEJAS RUTINAS',
        description: 'Tabletas y pizarras interactivas de millones de dólares utilizadas simplemente como fotocopiadoras o proyectores de PDFs estáticos.',
      },
      {
        id: 'c3_d2',
        iconName: 'shield',
        metric: 'HOMEOSTASIS',
        metricLabel: 'INMUNIDAD ORGANIZACIONAL',
        description: 'El sistema escolar metaboliza y desactiva cualquier innovación cosmética para blindar y mantener intacto su núcleo tradicional.',
      },
      {
        id: 'c3_d3',
        iconName: 'clock',
        metric: '2 DÍAS',
        metricLabel: 'TALLERES DOCENTES EFÍMEROS',
        description: 'Capacitaciones motivacionales de fin de semana sin tiempo protegido dentro de la jornada laboral para rediseñar la práctica diaria.',
      },
      {
        id: 'c3_d4',
        iconName: 'trending-down',
        metric: '90% CINISMO',
        metricLabel: 'FATIGA POR REFORMAS HUECAS',
        description: 'Profesorado exhausto ante cambios cosméticos de membrete que se desvanecen al poco tiempo sin alterar la realidad del aula.',
      },
    ],
    immediateActionTitle: 'ALINEACIÓN SISTÉMICA: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'COHERENCIA REAL',
    immediateActions: [
      {
        number: 1,
        title: 'FRENAR LA COMPRA TECNOLÓGICA HUÉRFANA',
        description: 'Exigir que toda adquisición digital responda a un cambio explícito y demostrable en la autonomía del alumno.',
        iconName: 'scissors',
      },
      {
        number: 2,
        title: 'INSTITUCIONALIZAR TIEMPO COLECTIVO',
        description: 'Proteger un mínimo de 4 horas semanales de la jornada docente para planificar, co-diseñar e investigar en equipo.',
        iconName: 'clock',
      },
      {
        number: 3,
        title: 'REDiseñar EL RÉGIMEN EVALUATIVO',
        description: 'Eliminar los exámenes estandarizados internos que penalizan y desincentivan las metodologías activas ensayadas.',
        iconName: 'scale',
      },
      {
        number: 4,
        title: 'ELIMINAR LA BUROCRACIA ESTÉRIL',
        description: 'Suprimir formularios e informes duplicados que consumen la energía pedagógica de docentes y directivos.',
        iconName: 'layers',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DE LA REFORMA ESTRUCTURAL',
    pillars: [
      {
        number: 1,
        title: '1. TECNOLOGÍA AMPLIFICADORA',
        subtitle: 'Multiplicador de Pedagogía',
        description: 'Entender que el software amplifica la pedagogía existente: si esta es pobre y pasiva, digitaliza la mediocridad.',
        iconName: 'zap',
      },
      {
        number: 2,
        title: '2. ARQUITECTURA DE EVALUACIÓN',
        subtitle: 'La Verdadera Ancla',
        description: 'Cualquier reforma que no altere los criterios y formatos de calificación terminará irremediablemente absorbida por ellos.',
        iconName: 'scale',
      },
      {
        number: 3,
        title: '3. DESARROLLO DE CAPACIDADES',
        subtitle: 'Tiempo Institucionalizado',
        description: 'Sustituir los cursos esporádicos por comunidades de práctica estables integradas en la jornada de trabajo habitual.',
        iconName: 'users',
      },
      {
        number: 4,
        title: '4. COHERENCIA ECOLÓGICA',
        subtitle: 'Intervención Multidimensional',
        description: 'Alinear simultáneamente espacio, tiempo, incentivos y evaluación para evitar el rechazo homeostático del sistema.',
        iconName: 'layers',
      },
    ],
    analyticsSectionTitle: 'INVERSIÓN EFICAZ VS. DESPERDICIO COSMÉTICO',
    budgetData: {
      initialInvestmentLabel: 'DESPERDICIO EN HARDWARE AISLADO',
      initialInvestmentAmount: '70% GASTO TECH',
      initialInvestmentSubtitle: 'Inversión sin impacto pedagógico en pantallas y licencias que no alteraron la dinámica de clase.',
      initialChartBars: [
        { label: 'Gadgets', heightPercent: 85 },
        { label: 'Talleres', heightPercent: 65 },
        { label: 'Arquitectura', heightPercent: 20 },
      ],
      threeYearRecoveryLabel: 'SOSTENIBILIDAD DEL CAMBIO',
      threeYearRecoveryAmount: '+80%',
      threeYearRecoverySubtitle: 'Porcentaje de innovaciones que perduran en el tiempo gracias al blindaje de tiempo y evaluación.',
      donutChartPercent: 80,
      tableTitle: 'CONTRASTE ESTRATÉGICO: REFORMA FRAGMENTARIA VS. REDISEÑO ARQUITECTÓNICO',
      tableHeaders: ['Palanca de Cambio', 'Reforma Fragmentaria', 'Rediseño Arquitectónico'],
      tableRows: [
        ['Inversión Digital', 'Compra masiva de dispositivos y apps', 'Herramientas al servicio de la indagación'],
        ['Formación del Profesorado', 'Talleres externos de fin de semana', 'Comunidades de práctica en tiempo protegido'],
        ['Régimen Evaluativo', 'Mantiene la nota sumativa tradicional', 'Evaluación formativa y portafolios de dominio'],
        ['Sostenibilidad Temporal', 'Se apaga a los 18 meses por desgaste', 'Instala capacidad institucional permanente'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 3: El Fracaso de las Reformas Aisladas',
  },

  cap4: {
    id: 'cap4',
    chapterNumber: 'CAPÍTULO 4',
    title: 'ARQUITECTURA DEL APRENDIZAJE',
    subtitle: 'CUANDO EL PROBLEMA DEJA DE ESTAR EN LAS RESPUESTAS Y SE TRASLADA A LAS CONDICIONES',
    tagline: 'Hilmer Castillo Bescanza • Las 4 Dimensiones del Diseño: Temporal, Espacial, Relacional y Epistémica',
    diagnosisTitle: 'EL DIAGNÓSTICO DEL MOLDE CONVENCIONAL',
    diagnosisItems: [
      {
        id: 'c4_d1',
        iconName: 'layers',
        metric: '4 DIMENSIONES',
        metricLabel: 'FRACTURADAS Y RÍGIDAS',
        description: 'Tiempo cronometrado, aulas tipo celda, relaciones jerárquicas punitivas y epistemología de respuestas cerradas.',
      },
      {
        id: 'c4_d2',
        iconName: 'brain',
        metric: 'CERO INDAGACIÓN',
        metricLabel: 'PREGUNTAS ARTIFICIALES',
        description: 'Aulas donde el único reto intelectual consiste en adivinar lo que el docente quiere escuchar para obtener una calificación aprobatoria.',
      },
      {
        id: 'c4_d3',
        iconName: 'compass',
        metric: 'FILAS Y NUCAS',
        metricLabel: 'ESPACIOS DE VIGILANCIA',
        description: 'Mobiliario orientado exclusivamente a la nuca del compañero y a la tarima del profesor, anulando la co-creación.',
      },
      {
        id: 'c4_d4',
        iconName: 'clock',
        metric: '70% PASIVIDAD',
        metricLabel: 'ALUMNOS ESPECTADORES',
        description: 'Estudiantes condenados a escuchar pasivamente durante horas contenidos descontextualizados sin reto cognitivo.',
      },
    ],
    immediateActionTitle: 'DESPLIEGUE ARQUITECTÓNICO: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '4 DIMENSIONES',
    immediateActionCalloutNumber: '4D',
    immediateActionCalloutUnit: 'DIMENSIONES',
    immediateActionCalloutLabel: 'NUEVO ECOSISTEMA',
    immediateActions: [
      {
        number: 1,
        title: 'RECONFIGURAR EL ESPACIO FÍSICO Y DIGITAL',
        description: 'Crear zonas modulares para indagación en parejas, estaciones de trabajo autónomo y rincones de reflexión.',
        iconName: 'compass',
      },
      {
        number: 2,
        title: 'LANZAR DESAFÍOS DE ALTA COMPLEJIDAD',
        description: 'Plantear problemas auténticos sin respuesta unívoca que exijan contrastar fuentes y sintetizar posturas.',
        iconName: 'brain',
      },
      {
        number: 3,
        title: 'ESTABLECER RETROALIMENTACIÓN FORMATIVA',
        description: 'Sustituir la nota numérica estéril por rondas iterativas de retroalimentación constructiva entre pares.',
        iconName: 'users',
      },
      {
        number: 4,
        title: 'DISEÑAR EL RETIRO DEL ANDAMIAJE',
        description: 'Planificar el desvanecimiento progresivo del apoyo docente a medida que el estudiante conquista su autonomía.',
        iconName: 'layers',
      },
    ],
    pillarsTitle: 'LAS 4 DIMENSIONES DE LA ARQUITECTURA DEL APRENDIZAJE',
    pillars: [
      {
        number: 1,
        title: '1. DIMENSIÓN TEMPORAL',
        subtitle: 'Inmersión y Fluidez',
        description: 'Organizar el tiempo en función de la profundidad cognitiva requerida por el reto, no de la campana horaria.',
        iconName: 'clock',
      },
      {
        number: 2,
        title: '2. DIMENSIÓN ESPACIAL',
        subtitle: 'Entornos de Agencia',
        description: 'Espacios física y digitalmente flexibles que comunican confianza y estimulan el pensamiento autónomo.',
        iconName: 'compass',
      },
      {
        number: 3,
        title: '3. DIMENSIÓN RELACIONAL',
        subtitle: 'Comunidad y Vínculo',
        description: 'Superar la verticalidad opresiva para forjar redes interdependientes con seguridad psicológica absoluta.',
        iconName: 'users',
      },
      {
        number: 4,
        title: '4. DIMENSIÓN EPISTÉMICA',
        subtitle: 'Rigor y Criterio',
        description: 'Construcción activa del conocimiento, validación con evidencias, argumentación sólida y transferencia a contextos nuevos.',
        iconName: 'brain',
      },
    ],
    analyticsSectionTitle: 'CONDICIONES DE TRANSFERENCIA Y COMPRENSIÓN',
    budgetData: {
      initialInvestmentLabel: 'PÉRDIDA DE ATENCIÓN EN AULA',
      initialInvestmentAmount: '12 MINUTOS',
      initialInvestmentSubtitle: 'Límite promedio de concentración activa en clases expositivas tradicionales unidireccionales.',
      initialChartBars: [
        { label: 'Expositivo', heightPercent: 20 },
        { label: 'Actividades', heightPercent: 48 },
        { label: 'Arquitectura', heightPercent: 92 },
      ],
      threeYearRecoveryLabel: 'TRANSFERENCIA A SITUACIONES INÉDITAS',
      threeYearRecoveryAmount: '+88%',
      threeYearRecoverySubtitle: 'Capacidad demostrada de aplicar conceptos y habilidades a problemas del mundo real no ensayados.',
      donutChartPercent: 88,
      tableTitle: 'MATRIZ DE LAS 4 DIMENSIONES: DISEÑO DE ACTIVIDADES VS. DISEÑO DE CAPACIDADES',
      tableHeaders: ['Dimensión Arquitectónica', 'Planificación de Actividades', 'Diseño de Capacidades (Arquitectura)'],
      tableRows: [
        ['Dimensión Temporal', 'Rellenar bloques de 45 min con tareas', 'Inmersión prolongada y ritmo fluido adaptativo'],
        ['Dimensión Espacial', 'Pupitres en fila orientados a la pizarra', 'Estaciones dinámicas de co-creación y silencio'],
        ['Dimensión Relacional', 'Docente como juez y emisor exclusivo', 'Comunidad de indagadores con roles rotativos'],
        ['Dimensión Epistémica', 'Memorizar respuestas para el examen', 'Formular hipótesis, contrastar y crear soluciones'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 4: Arquitectura del Aprendizaje',
  },

  cap5: {
    id: 'cap5',
    chapterNumber: 'CAPÍTULO 5',
    title: 'EL LIDERAZGO COMO DISCIPLINA DE DISEÑO',
    subtitle: 'ARQUITECTOS ANTES QUE ADMINISTRADORES DE INERCIAS Y APAGAFUEGOS',
    tagline: 'Hilmer Castillo Bescanza • La Valentía de Podar, la Seguridad Psicológica y el Liderazgo Distribuido',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LA ASFIXIA DIRECTIVA',
    diagnosisItems: [
      {
        id: 'c5_d1',
        iconName: 'clock',
        metric: '90% TIEMPO',
        metricLabel: 'APAGANDO INCENDIOS',
        description: 'Equipos directivos absorbidos por urgencias operativas, quejas disciplinarias y cumplimiento burocrático estéril.',
      },
      {
        id: 'c5_d2',
        iconName: 'shield',
        metric: 'CERO RIESGO',
        metricLabel: 'MIEDO AL ERROR Y CONTROL',
        description: 'Docentes que evitan ensayar metodologías innovadoras por temor a la censura o amonestaciones de la dirección.',
      },
      {
        id: 'c5_d3',
        iconName: 'layers',
        metric: 'SOBRECARGA',
        metricLabel: 'ACUMULACIÓN DE PROGRAMAS',
        description: 'La tentación directiva de añadir anualmente nuevos proyectos sin tener nunca la valentía de podar lo obsoleto.',
      },
      {
        id: 'c5_d4',
        iconName: 'users',
        metric: 'UNIPERSONAL',
        metricLabel: 'EL MITO DEL LÍDER HEROICO',
        description: 'Instituciones que dependen exclusivamente del carisma de una persona y colapsan tan pronto el director se marcha.',
      },
    ],
    immediateActionTitle: 'PODA Y HABILITACIÓN: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'PODA RADICAL',
    immediateActions: [
      {
        number: 1,
        title: 'PODA BUROCRÁTICA DEL 40%',
        description: 'Eliminar comisiones inútiles, reuniones de mero trámite e informes duplicados que agotan al cuerpo docente.',
        iconName: 'scissors',
      },
      {
        number: 2,
        title: 'DECLARAR LA SEGURIDAD PSICOLÓGICA',
        description: 'Institucionalizar el error como dato de aprendizaje y blindar al profesorado frente a sanciones por innovar.',
        iconName: 'shield',
      },
      {
        number: 3,
        title: 'TRANSFERIR PODER DECISORIO Y FONDOS',
        description: 'Otorgar autonomía real y presupuesto directo a los equipos de ciclo para que diseñen y ejecuten proyectos.',
        iconName: 'users',
      },
      {
        number: 4,
        title: 'CONVERSACIONES ESTRATÉGICAS SEMANALES',
        description: 'Sustituir los avisos administrativos por debates colegiados sobre evidencias reales de aprendizaje en el aula.',
        iconName: 'brain',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DEL LÍDER ARQUITECTO',
    pillars: [
      {
        number: 1,
        title: '1. LA VALENTÍA DE PODAR',
        subtitle: 'Higiene Organizacional',
        description: 'Comprender que innovar no es exigir más tareas a docentes agotados, sino despejar el terreno de lo superfluo.',
        iconName: 'scissors',
      },
      {
        number: 2,
        title: '2. SEGURIDAD PSICOLÓGICA',
        subtitle: 'Cultura de Confianza',
        description: 'Nadie crea bajo vigilancia; la seguridad psicológica es el suelo fértil indispensable de la experimentación pedagógica.',
        iconName: 'shield',
      },
      {
        number: 3,
        title: '3. LIDERAZGO DISTRIBUIDO',
        subtitle: 'Capilaridad Decisoria',
        description: 'Superar el liderazgo vertical y construir una red de nodos autónomos capaces de sostener la excelencia colectiva.',
        iconName: 'users',
      },
      {
        number: 4,
        title: '4. DISEÑAR CONDICIONES',
        subtitle: 'Ecosistema vs. Vigilancia',
        description: 'El directivo deja de perseguir conductas aisladas para modelar las condiciones estructurales donde florece el talento.',
        iconName: 'layers',
      },
    ],
    analyticsSectionTitle: 'HORAS RECUPERADAS Y AUTONOMÍA DE EQUIPOS',
    budgetData: {
      initialInvestmentLabel: 'HORAS PERDIDAS EN BUROCRACIA',
      initialInvestmentAmount: '45% JORNADA',
      initialInvestmentSubtitle: 'Tiempo de docentes y directivos secuestrado por trámites de control que no educan a nadie.',
      initialChartBars: [
        { label: 'Papeleo', heightPercent: 80 },
        { label: 'Reuniones', heightPercent: 60 },
        { label: 'Diseño', heightPercent: 15 },
      ],
      threeYearRecoveryLabel: 'AUTONOMÍA COLECTIVA INSTALADA',
      threeYearRecoveryAmount: '+82%',
      threeYearRecoverySubtitle: 'Equipos capaces de diagnosticar, rediseñar y evaluar proyectos con plena autonomía colegiada.',
      donutChartPercent: 82,
      tableTitle: 'TRANSICIÓN DIRECTIVA: DE CAPATAZ BUROCRÁTICO A LÍDER ARQUITECTO',
      tableHeaders: ['Aspecto Directivo', 'Liderazgo Tradicional (Capataz)', 'Liderazgo como Diseño (Arquitecto)'],
      tableRows: [
        ['Foco de Atención', 'Apagar crisis cotidianas y vigilar faltas', 'Diseñar condiciones para que el talento florezca'],
        ['Gestión de Iniciativas', 'Acumular nuevos programas y exigencias', 'Podar con valentía lo redundante y obsoleto'],
        ['Clima Organizacional', 'Vigilancia jerárquica y temor al error', 'Seguridad psicológica y experimentación rigurosa'],
        ['Distribución del Poder', 'Centralización en la cúpula directiva', 'Red de liderazgo distribuido y autonomía en equipos'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 5: El Liderazgo como Disciplina de Diseño',
  },

  cap6: {
    id: 'cap6',
    chapterNumber: 'CAPÍTULO 6',
    title: 'LA ORGANIZACIÓN QUE APRENDE DE SÍ MISMA',
    subtitle: 'MECANISMOS DE REFLEXIÓN, REDISEÑO Y DESARROLLO PERMANENTE DE CAPACIDADES',
    tagline: 'Hilmer Castillo Bescanza • Aprendizaje de Bucle Doble, Intervisión Docente y Memoria Institucional',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LA INERCIA INSTITUCIONAL',
    diagnosisItems: [
      {
        id: 'c6_d1',
        iconName: 'rotate-ccw',
        metric: 'BUCLE SIMPLE',
        metricLabel: 'CORRECCIÓN DE SÍNTOMAS',
        description: 'Reaccionar ante el bajo rendimiento bajando el nivel o modificando el examen, sin cuestionar jamás qué concepción del saber se premia.',
      },
      {
        id: 'c6_d2',
        iconName: 'users',
        metric: 'AULA CERRADA',
        metricLabel: 'AISLAMIENTO DOCENTE',
        description: 'Profesores trabajando aislados tras puertas blindadas sin recibir jamás retroalimentación formativa de sus propios colegas.',
      },
      {
        id: 'c6_d3',
        iconName: 'layers',
        metric: 'AMNESIA',
        metricLabel: 'PÉRDIDA DE CAPITAL COGNITIVO',
        description: 'El conocimiento se evapora cuando un docente sobresaliente se marcha; la institución reinicia de cero cada año escolar.',
      },
      {
        id: 'c6_d4',
        iconName: 'clock',
        metric: '30 AÑOS',
        metricLabel: 'EL MISMO AÑO REPETIDO',
        description: 'Confundir tres décadas de inercia rutinaria con experiencia real analizada y convertida en sabiduría colectiva.',
      },
    ],
    immediateActionTitle: 'METACOGNICIÓN ORGANIZACIONAL: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'BUCLE DOBLE',
    immediateActions: [
      {
        number: 1,
        title: 'INSTITUCIONALIZAR LA INTERVISIÓN',
        description: 'Abrir las aulas a la observación no evaluativa entre docentes con protocolos claros de indagación y respeto.',
        iconName: 'eye',
      },
      {
        number: 2,
        title: 'SESIONES DE CUESTIONAMIENTO RAÍZ',
        description: 'Examinar en consejo académico los supuestos epistemológicos obsoletos que sostienen las evaluaciones tradicionales.',
        iconName: 'rotate-ccw',
      },
      {
        number: 3,
        title: 'BITÁCORA VIVA DE PROTOTIPOS',
        description: 'Documentar qué funcionó, qué falló y por qué en cada experimento pedagógico para alimentar la memoria del centro.',
        iconName: 'book-open',
      },
      {
        number: 4,
        title: 'PROGRAMA DE DESAPRENDIZAJE',
        description: 'Identificar y retirar formalmente ceremonias, tareas y formatos que han perdido todo sentido pedagógico.',
        iconName: 'scissors',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DEL APRENDIZAJE ORGANIZACIONAL',
    pillars: [
      {
        number: 1,
        title: '1. APRENDIZAJE DE BUCLE DOBLE',
        subtitle: 'Revisar Supuestos Raíz',
        description: 'No conformarse con hacer más eficiente la rutina; cuestionar los marcos, metas y valores de partida.',
        iconName: 'rotate-ccw',
      },
      {
        number: 2,
        title: '2. COMUNIDADES DE PRÁCTICA',
        subtitle: 'Inteligencia Colectiva',
        description: 'Convertir la práctica pedagógica individual en objeto de investigación rigurosa, colegiada y permanente.',
        iconName: 'users',
      },
      {
        number: 3,
        title: '3. MEMORIA INSTITUCIONAL',
        subtitle: 'Capitalización del Saber',
        description: 'Construir repositorios abiertos y vivos donde se deposita y transfiere el conocimiento pedagógico del centro.',
        iconName: 'layers',
      },
      {
        number: 4,
        title: '4. DESAPRENDIZAJE DELIBERADO',
        subtitle: 'Evolución sin Inercia',
        description: 'Desmantelar con método las certezas que sirvieron en el pasado pero que hoy asfixian la innovación necesaria.',
        iconName: 'brain',
      },
    ],
    analyticsSectionTitle: 'CAPACIDAD INSTALADA Y APRENDIZAJE COLECTIVO',
    budgetData: {
      initialInvestmentLabel: 'COSTO DE REINVENTAR LA RUEDA',
      initialInvestmentAmount: '50% ESFUERZO',
      initialInvestmentSubtitle: 'Energía repetida cada curso escolar por falta de protocolos de memoria y transferencia.',
      initialChartBars: [
        { label: 'Aislado', heightPercent: 20 },
        { label: 'Parches', heightPercent: 45 },
        { label: 'Bucle Doble', heightPercent: 86 },
      ],
      threeYearRecoveryLabel: 'CAPACIDAD INSTITUCIONAL VIVA',
      threeYearRecoveryAmount: '+76%',
      threeYearRecoverySubtitle: 'Porcentaje de innovaciones convertidas en patrimonio metodológico permanente del centro.',
      donutChartPercent: 76,
      tableTitle: 'MATRIZ DE APRENDIZAJE: ORGANIZACIÓN INERCIAL VS. ORGANIZACIÓN QUE APRENDE',
      tableHeaders: ['Dimensión Metacognitiva', 'Organización Inercial', 'Organización que Aprende de Sí Misma'],
      tableRows: [
        ['Profundidad Reflexiva', 'Bucle Simple: corregir síntomas externos', 'Bucle Doble: cuestionar supuestos y reglas tácitas'],
        ['Cultura del Aula', 'Puertas cerradas y aislamiento profesional', 'Intervisión colegiada y observación formativa'],
        ['Gestión del Conocimiento', 'Amnesia institucional con cada cambio', 'Memoria viva de prototipos y evidencias de campo'],
        ['Relación con la Rutina', 'Repetir año tras año las mismas fórmulas', 'Desaprendizaje deliberado y rediseño continuo'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 6: La Organización que Aprende de Sí Misma',
  },

  cap7: {
    id: 'cap7',
    chapterNumber: 'CAPÍTULO 7',
    title: 'APRENDER A OBSERVAR ANTES DE DISEÑAR',
    subtitle: 'ENTREGA 1 — DIAGNÓSTICO Y CARTOGRAFÍA DE LA ARQUITECTURA EXISTENTE',
    tagline: 'Hilmer Castillo Bescanza • La Mirada Etnográfica del Diseñador y la Cartografía de Fricciones',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LA INTERVENCIÓN IMPULSIVA',
    diagnosisItems: [
      {
        id: 'c7_d1',
        iconName: 'alert',
        metric: 'RECETAS',
        metricLabel: 'SOLUCIONES PREFABRICADAS',
        description: 'Llegar a la escuela con recetas prefabricadas de consultores sin haber comprendido las tensiones invisibles del ecosistema.',
      },
      {
        id: 'c7_d2',
        iconName: 'scale',
        metric: 'TEORÍA VS USO',
        metricLabel: 'ABISMO DE COHERENCIA',
        description: 'La brecha insalvable entre el discurso del ideario del colegio y lo que realmente ocurre un martes cualquiera a las 11:00 AM.',
      },
      {
        id: 'c7_d3',
        iconName: 'eye',
        metric: 'VIGILANCIA',
        metricLabel: 'OBSERVACIÓN PUNITIVA',
        description: 'Visitas directivas que generan teatro y posturas defensivas en los docentes, en vez de revelar las prácticas reales del aula.',
      },
      {
        id: 'c7_d4',
        iconName: 'clock',
        metric: 'CEGUERA',
        metricLabel: 'NORMALIZAR EL DESAFÍO',
        description: 'Incapacidad de percibir la fatiga, el aburrimiento y la desconexión porque se asumen como destino natural de la educación.',
      },
    ],
    immediateActionTitle: 'CARTOGRAFÍA Y DIAGNÓSTICO: LOS PRIMEROS 100 DÍAS (ENTREGA 1)',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'ENTREGA 1',
    immediateActions: [
      {
        number: 1,
        title: 'INMERSIÓN ETNOGRÁFICA DESARMADA',
        description: 'Permanecer en el aula como observador neutral, sin cuadernos de notas punitivas ni juicios morales.',
        iconName: 'eye',
      },
      {
        number: 2,
        title: 'CRONOGRAMA DE FLUJOS COGNITIVOS',
        description: 'Mapear segundo a segundo quién habla, cuándo decae la atención del grupo y dónde surgen las fricciones.',
        iconName: 'clock',
      },
      {
        number: 3,
        title: 'REGISTRO DE PARADOJAS VIVIDAS',
        description: 'Documentar las contradicciones entre lo que el ideario predica y lo que las notas y evaluaciones premian.',
        iconName: 'scale',
      },
      {
        number: 4,
        title: 'CONFECCIÓN DE LA MATRIZ DE LA ENTREGA 1',
        description: 'Sintetizar la cartografía del sistema como línea base obligatoria antes de emprender cualquier rediseño.',
        iconName: 'layers',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DE LA MIRADA DEL DISEÑADOR',
    pillars: [
      {
        number: 1,
        title: '1. HUMILDAD EPISTÉMICA',
        subtitle: 'Observar sin Prejuicios',
        description: 'Comprender que la conducta observada es la respuesta más lógica y razonable al diseño del entorno actual.',
        iconName: 'eye',
      },
      {
        number: 2,
        title: '2. TEORÍA DECLARADA VS. EN USO',
        subtitle: 'Cazador de Paradojas',
        description: 'Descubrir las fisuras entre lo que la institución afirma que es y lo que sus reglas tácitas obligan a hacer.',
        iconName: 'scale',
      },
      {
        number: 3,
        title: '3. CARTOGRAFÍA DE FRICCIONES',
        subtitle: 'Mapeo del Territorio',
        description: 'Localizar con precisión los cuellos de botella temporales, espaciales, relacionales y epistémicos del centro.',
        iconName: 'compass',
      },
      {
        number: 4,
        title: '4. LÍNEA BASE PARA EL REDISEÑO',
        subtitle: 'Rigor de la Entrega 1',
        description: 'Establecer datos fácticos indiscutibles que justifiquen cada intervención posterior sin recurrir a opiniones subjetivas.',
        iconName: 'layers',
      },
    ],
    analyticsSectionTitle: 'PRECISIÓN DEL DIAGNÓSTICO Y LÍNEA BASE (ENTREGA 1)',
    budgetData: {
      initialInvestmentLabel: 'FRACASO POR INTERVENCIÓN CIEGA',
      initialInvestmentAmount: '80% PROYECTOS',
      initialInvestmentSubtitle: 'Proyectos de cambio que fracasan por recetar soluciones antes de haber diagnosticado el ecosistema.',
      initialChartBars: [
        { label: 'Opinión', heightPercent: 20 },
        { label: 'Encuestas', heightPercent: 40 },
        { label: 'Etnografía', heightPercent: 94 },
      ],
      threeYearRecoveryLabel: 'FIDELIDAD DEL REDISEÑO',
      threeYearRecoveryAmount: '94%',
      threeYearRecoverySubtitle: 'Precisión y efectividad de las intervenciones fundamentadas en la cartografía etnográfica.',
      donutChartPercent: 94,
      tableTitle: 'PROTOCOLO DE DIAGNÓSTICO: INTERVENCIÓN IMPULSIVA VS. MIRADA DEL DISEÑADOR',
      tableHeaders: ['Fase Metodológica', 'Intervención Impulsiva', 'Mirada del Diseñador (Entrega 1)'],
      tableRows: [
        ['Punto de Partida', 'Importar la solución de moda sin preguntar', 'Inmersión etnográfica desarmada y atenta'],
        ['Fuente de Datos', 'Encuestas superficiales y discursos oficiales', 'Observación directa de tiempos, flujos y gestos'],
        ['Interpretación del Error', 'Culpar a la desidia de docentes o alumnos', 'Identificar el desajuste en las reglas del entorno'],
        ['Resultado de la Entrega 1', 'Plan de actividades cosméticas aceleradas', 'Cartografía de fricciones y línea base validada'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 7: Aprender a Observar antes de Diseñar (Entrega 1)',
  },
};
