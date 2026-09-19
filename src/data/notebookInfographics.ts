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
    subtitle: 'POR QUÉ LAS INSTITUCIONES EDUCATIVAS FUNCIONAN CON PASMOSA FIDELIDAD SEGÚN SU DISEÑO',
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
    subtitle: 'POR QUÉ MUCHAS INSTITUCIONES SIGUEN DISEÑADAS PARA UN MUNDO QUE YA NO EXISTE',
    tagline: 'Hilmer Castillo Bescanza • La Herencia Fabril, la Fragmentación Artificial y la Emergencia de la IA',
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
    subtitle: 'POR QUÉ LA INNOVACIÓN SUPERFICIAL NO TRANSFORMA EL APRENDIZAJE',
    tagline: 'Hilmer Castillo Bescanza • Homeostasis Institucional, Tecnocentrismo y Parches Pedagógicos',
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
        title: 'REDISEÑAR EL RÉGIMEN EVALUATIVO',
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
        iconName: 'power',
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
    title: 'LA ANATOMÍA DEL NÚCLEO INSTRUCCIONAL',
    subtitle: 'EL TRIÁNGULO PEDAGÓGICO Y LAS FUERZAS INVISIBLES QUE DETERMINAN LA CALIDAD DEL APRENDIZAJE',
    tagline: 'Hilmer Castillo Bescanza • La Tarea Real, el Rol Docente y la Demanda Cognitiva Auténtica',
    diagnosisTitle: 'EL DIAGNÓSTICO DEL NÚCLEO INSTRUCCIONAL',
    diagnosisItems: [
      {
        id: 'c4_d1',
        iconName: 'layers',
        metric: 'LA TAREA REAL',
        metricLabel: 'LO QUE EL ALUMNO HACE',
        description: 'El aprendizaje real no reside en lo que el docente enseña ni en el temario escrito, sino en lo que el estudiante realmente hace y piensa durante la tarea.',
      },
      {
        id: 'c4_d2',
        iconName: 'brain',
        metric: 'PSEUDO-ACTIVIDAD',
        metricLabel: 'ILUSIÓN DE APRENDIZAJE',
        description: 'Aulas llenas de dinamismo, pantallas y proyectos donde la demanda cognitiva efectiva sigue siendo de bajo orden: copiar, rellenar y reproducir sin juicio crítico.',
      },
      {
        id: 'c4_d3',
        iconName: 'alert',
        metric: '3 VÍAS',
        metricLabel: 'PRINCIPIOS DE ELMORE',
        description: 'Solo hay 3 formas de mejorar el aprendizaje: elevar el conocimiento del docente, elevar el reto del contenido o transformar el rol activo del estudiante.',
      },
      {
        id: 'c4_d4',
        iconName: 'scale',
        metric: 'CENTRALIZACIÓN',
        metricLabel: 'DOCENTE MONOPÓLICO',
        description: 'Docentes que asumen todo el esfuerzo reflexivo y resuelven las dificultades, privando a los estudiantes de la lucha productiva indispensable para aprender.',
      },
    ],
    immediateActionTitle: 'REDISEÑO DEL NÚCLEO INSTRUCCIONAL: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'NÚCLEO VIVO',
    immediateActions: [
      {
        number: 1,
        title: 'AUDITORÍA DE LA TAREA REAL',
        description: 'Mapear la demanda cognitiva efectiva de las tareas que los alumnos realizan a diario, contrastándola con las expectativas declaradas.',
        iconName: 'eye',
      },
      {
        number: 2,
        title: 'DESCENTRALIZAR EL ESFUERZO COGNITIVO',
        description: 'Transferir la formulación de preguntas, el contraste de fuentes y la validación de hipótesis directamente a los estudiantes.',
        iconName: 'brain',
      },
      {
        number: 3,
        title: 'PROTOCOLOS DE RETROALIMENTACIÓN FORMATIVA',
        description: 'Institucionalizar ciclos de crítica constructiva entre pares basada en evidencias observables de desempeño y rúbricas públicas.',
        iconName: 'users',
      },
      {
        number: 4,
        title: 'CALIBRACIÓN DEL ANDAMIAJE PEDAGÓGICO',
        description: 'Diseñar apoyos docentes graduados que se desvanecen progresivamente a medida que el estudiante consolida su autonomía.',
        iconName: 'layers',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DEL NÚCLEO INSTRUCCIONAL',
    pillars: [
      {
        number: 1,
        title: '1. LA TAREA PREDICE EL RENDIMIENTO',
        subtitle: 'Principio de Richard Elmore',
        description: 'La demanda cognitiva real de la tarea que el alumno ejecuta es el único predictor confiable de lo que efectivamente aprenderá.',
        iconName: 'layers',
      },
      {
        number: 2,
        title: '2. EL TRIÁNGULO PEDAGÓGICO VIVO',
        subtitle: 'Interdependencia Dinámica',
        description: 'El aprendizaje emerge de la interacción simultánea entre docente, estudiante y contenido alrededor de un desafío auténtico.',
        iconName: 'compass',
      },
      {
        number: 3,
        title: '3. LUCHA PRODUCTIVA Y AGENCIA',
        subtitle: 'Demanda Cognitiva de Alto Orden',
        description: 'El error fértil, la persistencia ante la complejidad y la reflexión activa son insustituibles para forjar comprensión profunda.',
        iconName: 'brain',
      },
      {
        number: 4,
        title: '4. ECOSISTEMA ALINEADO AL NÚCLEO',
        subtitle: 'Infraestructura de Soporte',
        description: 'Tiempo, espacio y evaluación deben subordinarse por completo a proteger y enriquecer la calidad de la interacción formativa.',
        iconName: 'scale',
      },
    ],
    analyticsSectionTitle: 'DEMANDA COGNITIVA Y TRANSFERENCIA AUTÉNTICA',
    budgetData: {
      initialInvestmentLabel: 'DEMANDA COGNITIVA TRADICIONAL',
      initialInvestmentAmount: '75% BAJO ORDEN',
      initialInvestmentSubtitle: 'Tareas centradas en memorización, transcripción mecánica y respuestas unívocas sin juicio propio.',
      initialChartBars: [
        { label: 'Bajo Reto', heightPercent: 75 },
        { label: 'Medio', heightPercent: 45 },
        { label: 'Alto Juicio', heightPercent: 92 },
      ],
      threeYearRecoveryLabel: 'PROFUNDIDAD COGNITIVA DEMOSTRADA',
      threeYearRecoveryAmount: '+86%',
      threeYearRecoverySubtitle: 'Alumnos capacitados para formular problemas, contrastar evidencias complejas y transferir su saber a contextos inéditos.',
      donutChartPercent: 86,
      tableTitle: 'ANATOMÍA DEL NÚCLEO: INSTRUCCIÓN CONVENCIONAL VS. ARQUITECTURA DEL APRENDIZAJE',
      tableHeaders: ['Componente del Núcleo', 'Instrucción Convencional', 'Arquitectura del Núcleo Instruccional'],
      tableRows: [
        ['Foco de la Tarea', 'Reproducir respuestas correctas predeterminadas', 'Resolver desafíos auténticos con rigor y transferencia'],
        ['Rol del Docente', 'Emisor exclusivo e instructor de contenidos', 'Diseñador de condiciones y facilitador socrático'],
        ['Rol del Estudiante', 'Receptor pasivo y ejecutor de órdenes', 'Indagador activo, co-evaluador y productor de sentido'],
        ['Gestión del Error', 'Falla moral sancionada con nota numérica', 'Dato de diseño e insumo indispensable para iterar'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 4: La Anatomía del Núcleo Instruccional',
  },

  cap5: {
    id: 'cap5',
    chapterNumber: 'CAPÍTULO 5',
    title: 'LAS CINCO DIMENSIONES DE LA ARQUITECTURA DEL APRENDIZAJE',
    subtitle: 'PROPÓSITO, TIEMPO, ESPACIO, RELACIONES Y EVALUACIÓN COMO PILARES ESTRUCTURALES',
    tagline: 'Hilmer Castillo Bescanza • El Pentágono Arquitectónico: Del Control a la Emancipación',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LAS CINCO DIMENSIONES',
    diagnosisItems: [
      {
        id: 'c5_d1',
        iconName: 'compass',
        metric: 'PROPÓSITO',
        metricLabel: 'REDUCIDO A TRÁMITE',
        description: 'Instituciones que confunden el fin formativo con el cumplimiento burocrático, perdiendo de vista el sentido profundo del saber.',
      },
      {
        id: 'c5_d2',
        iconName: 'clock',
        metric: '45 MINUTOS',
        metricLabel: 'TIRANÍA TEMPORAL',
        description: 'Timbres rígidos que fragmentan la atención, impiden la inmersión reflexiva y penalizan el ritmo singular de cada estudiante.',
      },
      {
        id: 'c5_d3',
        iconName: 'layers',
        metric: 'ESPACIO',
        metricLabel: 'DISPOSICIÓN PANÓPTICA',
        description: 'Pupitres atornillados en filas mirando a la pizarra que anulan el diálogo entre iguales y la autonomía de movimiento.',
      },
      {
        id: 'c5_d4',
        iconName: 'scale',
        metric: 'EVALUACIÓN',
        metricLabel: 'RÉGIMEN PUNITIVO',
        description: 'Calificaciones numéricas que miden obediencia o memoria efímera en lugar de retroalimentar y visibilizar el dominio real.',
      },
    ],
    immediateActionTitle: 'DESPLIEGUE DEL PENTÁGONO ARQUITECTÓNICO: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '5 DIMENSIONES',
    immediateActionCalloutNumber: '5D',
    immediateActionCalloutUnit: 'DIMENSIONES',
    immediateActionCalloutLabel: 'REDISEÑO INTEGRAL',
    immediateActions: [
      {
        number: 1,
        title: 'DECLARAR EL PROPÓSITO EMANCIPADOR',
        description: 'Alinear cada proyecto formativo con capacidades humanas auténticas y desafíos éticos del mundo contemporáneo.',
        iconName: 'compass',
      },
      {
        number: 2,
        title: 'INSTALAR BLOQUES DE SOBERANÍA TEMPORAL',
        description: 'Implementar franjas protegidas de 90 a 180 minutos para proyectos de indagación sin timbres interruptores.',
        iconName: 'clock',
      },
      {
        number: 3,
        title: 'MODULARIZAR EL ESPACIO FÍSICO Y DIGITAL',
        description: 'Crear zonas polivalentes: estaciones de trabajo colectivo, rincones de concentración individual y laboratorios de prototipado.',
        iconName: 'layers',
      },
      {
        number: 4,
        title: 'MIGRAR A LA EVALUACIÓN FORMATIVA AUTÉNTICA',
        description: 'Sustituir pruebas estandarizadas por portafolios vivos, defensas dialógicas y rúbricas de dominio público.',
        iconName: 'scale',
      },
    ],
    pillarsTitle: 'LAS CINCO DIMENSIONES DEL DISEÑO INSTITUCIONAL',
    pillars: [
      {
        number: 1,
        title: '1. DIMENSIÓN PROPÓSITO',
        subtitle: 'Sentido y Trascendencia',
        description: 'La brújula que define para qué educamos antes de seleccionar metodologías o tecnologías.',
        iconName: 'compass',
      },
      {
        number: 2,
        title: '2. DIMENSIÓN TEMPORAL',
        subtitle: 'Soberanía del Tiempo',
        description: 'El tiempo como ritmo biológico y cognitivo: inmersión prolongada y fluidez adaptativa.',
        iconName: 'clock',
      },
      {
        number: 3,
        title: '3. DIMENSIÓN ESPACIAL',
        subtitle: 'El Tercer Educador',
        description: 'Entornos físicos y virtuales flexibles que comunican confianza e invitan a la co-creación activa.',
        iconName: 'layers',
      },
      {
        number: 4,
        title: '4. DIMENSIÓN RELACIONAL',
        subtitle: 'Seguridad Psicológica',
        description: 'Vínculos de interdependencia y respeto donde la autoridad se legitima por el acompañamiento pedagógico.',
        iconName: 'users',
      },
      {
        number: 5,
        title: '5. DIMENSIÓN EVALUATIVA',
        subtitle: 'Juicio y Evidencias',
        description: 'Evaluación formativa continua que visibiliza el aprendizaje auténtico y retroalimenta el crecimiento.',
        iconName: 'scale',
      },
    ],
    analyticsSectionTitle: 'EQUILIBRIO MULTIDIMENSIONAL Y AGENCIA COGNITIVA',
    budgetData: {
      initialInvestmentLabel: 'PÉRDIDA DE ATENCIÓN EN CLASE TRADICIONAL',
      initialInvestmentAmount: '12 MINUTOS',
      initialInvestmentSubtitle: 'Límite promedio de atención activa en clases expositivas basadas en fragmentación y pupitres rígidos.',
      initialChartBars: [
        { label: 'Expositivo', heightPercent: 22 },
        { label: 'Actividades', heightPercent: 48 },
        { label: 'Pentágono 5D', heightPercent: 94 },
      ],
      threeYearRecoveryLabel: 'TRANSFERENCIA A RETOS INÉDITOS',
      threeYearRecoveryAmount: '+89%',
      threeYearRecoverySubtitle: 'Capacidad demostrada de aplicar saberes y habilidades a problemas reales complejos no ensayados.',
      donutChartPercent: 89,
      tableTitle: 'MATRIZ DEL PENTÁGONO: DISEÑO DE CONTROL VS. ARQUITECTURA DEL APRENDIZAJE',
      tableHeaders: ['Dimensión Estructural', 'Diseño de Control (Convencional)', 'Arquitectura del Aprendizaje'],
      tableRows: [
        ['Dimensión Propósito', 'Cubrir el programa y aprobar exámenes', 'Desarrollar capacidades de autonomía y juicio'],
        ['Dimensión Temporal', 'Timbres rígidos de 45 minutos', 'Bloques inmersivos y ritmo fluido adaptativo'],
        ['Dimensión Espacial', 'Pupitres en fila orientados a la tarima', 'Zonas modulares de co-creación y silencio'],
        ['Dimensión Relacional', 'Vigilancia jerárquica y desconfianza', 'Comunidad de indagación y seguridad psicológica'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 5: Las Cinco Dimensiones de la Arquitectura del Aprendizaje',
  },

  cap6: {
    id: 'cap6',
    chapterNumber: 'CAPÍTULO 6',
    title: 'PATRONES DE DISEÑO INSTITUCIONAL',
    subtitle: 'CONFIGURACIONES ARQUITECTÓNICAS PARA LA EMANCIPACIÓN O LA DOMESTICACIÓN COGNITIVA',
    tagline: 'Hilmer Castillo Bescanza • Arquetipos Sistémicos, Anti-patrones y Gobernanza Pedagógica',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LOS PATRONES DESTRUCTIVOS',
    diagnosisItems: [
      {
        id: 'c6_d1',
        iconName: 'chain',
        metric: 'CELDA',
        metricLabel: 'PATRÓN DE CONFINAMIENTO',
        description: 'La estructura de aulas cerradas, timbres mecánicos y vigilancia vertical reproduce pasividad, dependencia y sumisión.',
      },
      {
        id: 'c6_d2',
        iconName: 'shield',
        metric: 'DEFENSA',
        metricLabel: 'RUTINAS DE PRESERVACIÓN',
        description: 'Organizaciones que priorizan blindarse contra el error y la crítica interna antes que abrirse al aprendizaje y la adaptación.',
      },
      {
        id: 'c6_d3',
        iconName: 'rotate-ccw',
        metric: 'BUCLE SIMPLE',
        metricLabel: 'CORRECCIÓN DE SÍNTOMAS',
        description: 'Cambiar libros de texto o añadir plataformas digitales sin cuestionar jamás las reglas de distribución del poder y el saber.',
      },
      {
        id: 'c6_d4',
        iconName: 'users',
        metric: 'AISLAMIENTO',
        metricLabel: 'BALCANIZACIÓN DOCENTE',
        description: 'Departamentos y docentes que trabajan en silos estancos, compitiendo por recursos en lugar de articular proyectos comunes.',
      },
    ],
    immediateActionTitle: 'ACTIVACIÓN DE PATRONES EMANCIPADORES: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'NUEVA MATRIZ',
    immediateActions: [
      {
        number: 1,
        title: 'AUDITORÍA DE ANTI-PATRONES',
        description: 'Identificar y documentar los patrones organizacionales que generan cinismo, sobrecarga y rechazo a la innovación.',
        iconName: 'scissors',
      },
      {
        number: 2,
        title: 'PROTOTIPAR EL PATRÓN DE INDAGACIÓN',
        description: 'Diseñar células piloto interdisciplinarias donde rige la co-enseñanza, la autorregulación y el aprendizaje por retos.',
        iconName: 'layers',
      },
      {
        number: 3,
        title: 'INSTAURAR CONSEJOS DE BUCLE DOBLE',
        description: 'Habilitar espacios formales para cuestionar y rediseñar los supuestos tácitos que rigen las decisiones escolares.',
        iconName: 'rotate-ccw',
      },
      {
        number: 4,
        title: 'REDISTRIBUIR EL LIDERAZGO PEDAGÓGICO',
        description: 'Conferir autonomía operativa y presupuestaria a equipos docentes para el co-diseño de experiencias de aprendizaje.',
        iconName: 'users',
      },
    ],
    pillarsTitle: 'LOS 4 PILARES DE LOS PATRONES ARQUITECTÓNICOS',
    pillars: [
      {
        number: 1,
        title: '1. PATRONES DE EMANCIPACIÓN',
        subtitle: 'Diseño para la Agencia',
        description: 'Configuraciones que potencian la autorregulación, la metacognición y el pensamiento crítico de los aprendices.',
        iconName: 'compass',
      },
      {
        number: 2,
        title: '2. ERRADICACIÓN DE ANTI-PATRONES',
        subtitle: 'Higiene Sistémica',
        description: 'Desmantelar sistemáticamente las inercias estructurales que premian el conformismo y castigan la experimentación.',
        iconName: 'scissors',
      },
      {
        number: 3,
        title: '3. APRENDIZAJE DE BUCLE DOBLE',
        subtitle: 'Metacognición Organizacional',
        description: 'Trascender la corrección de síntomas para modificar los marcos de referencia, valores e incentivos institucionales.',
        iconName: 'rotate-ccw',
      },
      {
        number: 4,
        title: '4. GOBERNANZA DISTRIBUIDA',
        subtitle: 'Redes de Confianza y Maestría',
        description: 'Estructura en red donde las decisiones pedagógicas surgen de evidencias de aprendizaje y deliberación profesional.',
        iconName: 'shield',
      },
    ],
    analyticsSectionTitle: 'CAPACIDAD ADAPTATIVA Y SOSTENIBILIDAD ORGANIZACIONAL',
    budgetData: {
      initialInvestmentLabel: 'DESPERDICIO POR RUTINAS DEFENSIVAS',
      initialInvestmentAmount: '50% ENERGÍA',
      initialInvestmentSubtitle: 'Tiempo y energía institucional absorbidos por resolver crisis cíclicas generadas por el propio diseño.',
      initialChartBars: [
        { label: 'Inercial', heightPercent: 20 },
        { label: 'Bucle Simple', heightPercent: 44 },
        { label: 'Emancipador', heightPercent: 88 },
      ],
      threeYearRecoveryLabel: 'PATRIMONIO PEDAGÓGICO VIVO',
      threeYearRecoveryAmount: '+84%',
      threeYearRecoverySubtitle: 'Capacidad del centro para innovar, aprender de sus fallos y capitalizar el saber colectivo sin depender de personalismos.',
      donutChartPercent: 84,
      tableTitle: 'MATRIZ DE PATRONES: MODELO DE DOMESTICACIÓN VS. MODELO DE EMANCIPACIÓN',
      tableHeaders: ['Eje Institucional', 'Patrón de Domesticación', 'Patrón de Emancipación'],
      tableRows: [
        ['Organización Docente', 'Aulas aisladas e individualismo profesional', 'Co-enseñanza y comunidades de práctica vivas'],
        ['Enfoque ante el Problema', 'Bucle Simple: corregir el síntoma superficial', 'Bucle Doble: examinar y rediseñar reglas tácitas'],
        ['Distribución del Poder', 'Jerarquía vertical piramidal y punitiva', 'Liderazgo distribuido y gobernanza en red'],
        ['Relación con el Conocimiento', 'Consumo pasivo y reproducción de temarios', 'Co-creación reflexiva, investigación y juicio'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 6: Patrones de Diseño Institucional',
  },

  cap7: {
    id: 'cap7',
    chapterNumber: 'CAPÍTULO 7',
    title: 'LA MATRIZ DE DIAGNÓSTICO Y LOS NIVELES DE MADUREZ',
    subtitle: 'CARTOGRAFÍA PARA EVALUAR Y REDISEÑAR LA ARQUITECTURA INSTITUCIONAL',
    tagline: 'Hilmer Castillo Bescanza • De la Escuela Fabril a la Organización que Aprende: Niveles I al IV',
    diagnosisTitle: 'EL DIAGNÓSTICO DE LA MADUREZ ARQUITECTÓNICA',
    diagnosisItems: [
      {
        id: 'c7_d1',
        iconName: 'factory',
        metric: 'NIVEL I',
        metricLabel: 'ARQUITECTURA FABRIL',
        description: 'Estructura inercial centrada en el cumplimiento burocrático, transmisión magistral exclusiva y control estricto de tiempos.',
      },
      {
        id: 'c7_d2',
        iconName: 'layers',
        metric: 'NIVEL II',
        metricLabel: 'ADICIÓN Y COSMÉTICA',
        description: 'Incorporación fragmentada de pantallas y proyectos sin alterar los incentivos profundos ni el núcleo instruccional.',
      },
      {
        id: 'c7_d3',
        iconName: 'compass',
        metric: 'NIVEL III',
        metricLabel: 'TRANSICIÓN ACTIVA',
        description: 'Islas de innovación, prototipos metodológicos validados y equipos docentes con creciente autonomía y tiempo protegido.',
      },
      {
        id: 'c7_d4',
        iconName: 'brain',
        metric: 'NIVEL IV',
        metricLabel: 'ORGANIZACIÓN QUE APRENDE',
        description: 'Ecosistema adaptativo con bucle doble, memoria institucional viva, soberanía temporal y rigor formativo pleno.',
      },
    ],
    immediateActionTitle: 'DESPLIEGUE DE LA MATRIZ DIAGNÓSTICA: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '100 DÍAS',
    immediateActionCalloutNumber: '100',
    immediateActionCalloutUnit: 'DÍAS',
    immediateActionCalloutLabel: 'HOJA DE RUTA',
    immediateActions: [
      {
        number: 1,
        title: 'AUTOEVALUACIÓN ESTRUCTURAL RIGUROSA',
        description: 'Mapear la institución en las cinco dimensiones para establecer la línea base real sin concesiones cosméticas.',
        iconName: 'eye',
      },
      {
        number: 2,
        title: 'IDENTIFICAR BRECHAS DE COHERENCIA',
        description: 'Evidenciar áreas donde la institución proclama estar en Nivel III o IV pero opera tácitamente en Nivel I.',
        iconName: 'scale',
      },
      {
        number: 3,
        title: 'SELECCIÓN DE PALANCAS DE TRANSICIÓN',
        description: 'Concentrar los recursos en las intervenciones estructurales que destraben el paso de un nivel de madurez al siguiente.',
        iconName: 'compass',
      },
      {
        number: 4,
        title: 'PACTO INSTITUCIONAL DE REDISEÑO',
        description: 'Socializar los hallazgos de la matriz con docentes, directivos y familias para construir una visión compartida del cambio.',
        iconName: 'users',
      },
    ],
    pillarsTitle: 'LOS CUATRO NIVELES DE MADUREZ INSTITUCIONAL',
    pillars: [
      {
        number: 1,
        title: '1. NIVEL I: ARQUITECTURA FABRIL',
        subtitle: 'Inercia y Control',
        description: 'Modelo decimonónico: fragmentación horaria estricta, aislamiento docente y evaluación punitiva orientada al filtrado.',
        iconName: 'factory',
      },
      {
        number: 2,
        title: '2. NIVEL II: INNOVACIÓN COSMÉTICA',
        subtitle: 'Adición sin Cambio de Núcleo',
        description: 'Modernización superficial: compra de tecnología y talleres aislados que dejan intacto el paradigma tradicional.',
        iconName: 'layers',
      },
      {
        number: 3,
        title: '3. NIVEL III: TRANSICIÓN Y PROTOTIPADO',
        subtitle: 'Rediseño en Marcha',
        description: 'Tiempo protegido para co-diseño docente, flexibilización de espacios y evaluación formativa en consolidación.',
        iconName: 'compass',
      },
      {
        number: 4,
        title: '4. NIVEL IV: ECOSISTEMA ADAPTATIVO',
        subtitle: 'La Organización que Aprende',
        description: 'Capacidad instalada permanente de reflexionar, desaprender y rediseñarse continuamente en función de evidencias.',
        iconName: 'brain',
      },
    ],
    analyticsSectionTitle: 'PROGRESIÓN DE MADUREZ E IMPACTO FORMATIVO',
    budgetData: {
      initialInvestmentLabel: 'FRACASO POR INTERVENCIÓN A CIEGAS',
      initialInvestmentAmount: '80% PROYECTOS',
      initialInvestmentSubtitle: 'Proyectos de cambio que fracasan por importar soluciones ajenas sin haber diagnosticado el nivel real del centro.',
      initialChartBars: [
        { label: 'Nivel I', heightPercent: 25 },
        { label: 'Nivel II', heightPercent: 45 },
        { label: 'Nivel III/IV', heightPercent: 92 },
      ],
      threeYearRecoveryLabel: 'FIDELIDAD DEL REDISEÑO ARQUITECTÓNICO',
      threeYearRecoveryAmount: '94%',
      threeYearRecoverySubtitle: 'Efectividad y sostenibilidad de las innovaciones ancladas en la cartografía de la matriz de madurez.',
      donutChartPercent: 94,
      tableTitle: 'MATRIZ DE NIVELES: DE LA ESCUELA FABRIL AL ECOSISTEMA ADAPTATIVO',
      tableHeaders: ['Dimensión Arquitectónica', 'Nivel I (Fabril)', 'Nivel IV (Organización que Aprende)'],
      tableRows: [
        ['Estructura del Tiempo', 'Timbres rígidos de 45 min y prisa', 'Soberanía temporal y bloques fluidos por reto'],
        ['Espacio y Mobiliario', 'Pupitres en fila orientados a la tarima', 'Entornos modulares, polivalentes y de co-creación'],
        ['Cultura Profesional', 'Docente aislado en aula cerrada', 'Comunidades de práctica e intervisión colegiada'],
        ['Régimen de Evaluación', 'Examen sumativo y nota clasificatoria', 'Portafolios de dominio, diálogo y retroalimentación'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 7: La Matriz de Diagnóstico y los Niveles de Madurez',
  },

  cap8: {
    id: 'cap8',
    chapterNumber: 'CAPÍTULO 8',
    title: 'LA ARQUITECTURA DEL APRENDIZAJE EN LA ERA DE LA INTELIGENCIA ARTIFICIAL',
    subtitle: 'DISEÑAR INSTITUCIONES FORMATIVAS CUANDO LAS MÁQUINAS TAMBIÉN APRENDEN',
    tagline: 'Hilmer Castillo Bescanza • Núcleo Instruccional Aumentado, Juicio Crítico y Soberanía Humana',
    diagnosisTitle: 'LOS RIESGOS DE LA ADOPCIÓN TECNOCÉNTRICA EN LA ERA IA',
    diagnosisItems: [
      {
        id: 'c8_d1',
        iconName: 'brain',
        metric: 'ENGAÑO',
        metricLabel: 'AUTOMATIZACIÓN MUTUA',
        description: 'Alumnos que usan IA para redactar tareas mecánicas que luego son calificadas por docentes con otras IAs sin aprendizaje real.',
      },
      {
        id: 'c8_d2',
        iconName: 'alert',
        metric: 'PARÁLISIS',
        metricLabel: 'PROHIBICIÓN REACTIVA',
        description: 'Bloqueos punitivos y políticas de persecución que empujan a la comunidad educativa a la clandestinidad digital.',
      },
      {
        id: 'c8_d3',
        iconName: 'scale',
        metric: 'BRECHA',
        metricLabel: 'DESIGUALDAD COGNITIVA',
        description: 'Ampliación de la distancia entre quienes dominan el criterio reflexivo y quienes se convierten en consumidores pasivos.',
      },
      {
        id: 'c8_d4',
        iconName: 'layers',
        metric: 'MÉTRICAS',
        metricLabel: 'ILUSIÓN DE DATOS',
        description: 'Confundir la telemetría superficial de clics y tiempos en pantalla con verdadera perseverancia, juicio y comprensión profunda.',
      },
    ],
    immediateActionTitle: 'PROTOCOLO ARQUITECTÓNICO DE INCORPORACIÓN: LOS PRIMEROS 100 DÍAS',
    immediateActionCallout: '5 PASOS',
    immediateActionCalloutNumber: '5',
    immediateActionCalloutUnit: 'PASOS',
    immediateActionCalloutLabel: 'DECISIÓN IA',
    immediateActions: [
      {
        number: 1,
        title: 'DEFINICIÓN DE LA CAPACIDAD HUMANA IRRENUNCIABLE',
        description: 'Determinar qué competencias de criterio y empatía se desean expandir y cuáles jamás se deben delegar en la máquina.',
        iconName: 'brain',
      },
      {
        number: 2,
        title: 'INCORPORAR LA IA COMO SOCIO COGNITIVO',
        description: 'Autorizar el uso transparente de modelos de lenguaje como andamiaje para la formulación, el contraste y la refutación.',
        iconName: 'compass',
      },
      {
        number: 3,
        title: 'REDISEÑO RADICAL HACIA LA EVALUACIÓN DIALÓGICA',
        description: 'Migrar de productos estáticos reproducibles a defensas orales socráticas, trazabilidad del proceso y retos auténticos.',
        iconName: 'scale',
      },
      {
        number: 4,
        title: 'SOBERANÍA Y SALVAGUARDAS DE DATOS',
        description: 'Establecer directrices institucionales estrictas para auditar sesgos y proteger los derechos digitales de los estudiantes.',
        iconName: 'shield',
      },
      {
        number: 5,
        title: 'FORMACIÓN DOCENTE EN ARQUITECTURA COGNITIVA',
        description: 'Capacitar a los educadores para desempeñarse como mentores socráticos y diseñadores de retos de alto orden.',
        iconName: 'graduation',
      },
    ],
    pillarsTitle: 'LOS TRES PILARES DE LA IA COMO CAPACIDAD INSTITUCIONAL',
    pillars: [
      {
        number: 1,
        title: '1. NÚCLEO INSTRUCCIONAL AUMENTADO',
        subtitle: 'El Docente como Mentor Socrático',
        description: 'La automatización de tareas mecánicas libera tiempo para centrar la interacción en el pensamiento crítico, la ética y la metacognición.',
        iconName: 'compass',
      },
      {
        number: 2,
        title: '2. EVALUACIÓN DE PROCESO Y SENTIDO',
        subtitle: 'Valorar la Demanda Cognitiva Real',
        description: 'Evaluar la capacidad de interrogar a la herramienta, validar fuentes rigurosamente, refutar sesgos y fundamentar conclusiones.',
        iconName: 'layers',
      },
      {
        number: 3,
        title: '3. GOBERNANZA ADAPTATIVA Y SOBERANÍA',
        subtitle: 'Marcos de Innovación Ética y Segura',
        description: 'Crear sandboxes de experimentación pedagógica con reglas transparentes que protejan la privacidad sin frenar la creatividad.',
        iconName: 'shield',
      },
    ],
    analyticsSectionTitle: 'INDICADORES CLAVE DE IMPACTO ARQUITECTÓNICO',
    budgetData: {
      initialInvestmentLabel: 'AUTONOMÍA COGNITIVA ALCANZADA',
      initialInvestmentAmount: '88%',
      initialInvestmentSubtitle: 'Estudiantes con capacidad demostrada de verificación crítica y formulación de preguntas complejas.',
      initialChartBars: [
        { label: 'Indagación', heightPercent: 92, color: 'bg-indigo-500' },
        { label: 'Criterio Ético', heightPercent: 86, color: 'bg-emerald-500' },
        { label: 'Verificación', heightPercent: 88, color: 'bg-cyan-500' },
      ],
      threeYearRecoveryLabel: 'RECONFIGURACIÓN DOCENTE SOCRÁTICA',
      threeYearRecoveryAmount: '95%',
      threeYearRecoverySubtitle: 'Tiempo de aula reorientado a mentoría profunda, debates deliberativos y proyectos colaborativos auténticos.',
      donutChartPercent: 95,
      tableTitle: 'MATRIZ ARQUITECTÓNICA: ADOPCIÓN TECNOCÉNTRICA VS. ARQUITECTURA DEL APRENDIZAJE',
      tableHeaders: ['Dimensión Institucional', 'Adopción Tecnocéntrica', 'Arquitectura del Aprendizaje'],
      tableRows: [
        ['Foco Principal', 'Comprar licencias y delegar tareas mecánicas', 'Diseñar deliberadamente qué capacidades humanas expandir'],
        ['Rol del Docente', 'Vigilante contra el plagio o mero usuario', 'Mentor socrático y diseñador de experiencias complejas'],
        ['Evaluación', 'Ensayos y exámenes memorísticos vulnerables', 'Procesos reflexivos, defensas dialógicas y problemas reales'],
        ['Gobernanza', 'Prohibición reactiva o permisividad descuidada', 'Principios éticos claros, soberanía de datos y experimentación'],
      ],
    },
    sourceCitation: 'Arquitectura del Aprendizaje — Cap. 8: La Arquitectura del Aprendizaje en la Era de la Inteligencia Artificial',
  },
};
