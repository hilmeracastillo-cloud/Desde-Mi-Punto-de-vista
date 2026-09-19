export interface InfographicPillar {
  title: string;
  badge: string;
  iconName: string;
  points: string[];
}

export interface InfographicCycleStep {
  step: number;
  label: string;
  description: string;
}

export interface ChapterInfographicData {
  chapterId: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  pages: string;
  accentColor: {
    badge: string;
    border: string;
    glow: string;
    gradient: string;
    text: string;
  };
  coreThesis: {
    headline: string;
    summary: string;
    keyFact: string;
  };
  pillars: InfographicPillar[];
  paradigmShift: {
    leftTitle: string;
    leftBadge: string;
    leftItems: string[];
    rightTitle: string;
    rightBadge: string;
    rightItems: string[];
  };
  systemicMechanism: {
    title: string;
    subtitle: string;
    steps: InfographicCycleStep[];
    insight: string;
  };
  designLaws: string[];
  authorQuote: {
    text: string;
    author: string;
  };
}

export const chapterInfographics: Record<string, ChapterInfographicData> = {
  cap1: {
    chapterId: "cap1",
    chapterNumber: "CAPÍTULO 1",
    title: "La Arquitectura Invisible",
    subtitle: "Por qué las instituciones educativas funcionan con pasmosa fidelidad según su diseño",
    pages: "Páginas 5 - 20",
    accentColor: {
      badge: "bg-indigo-950/80 border-indigo-500/40 text-indigo-300",
      border: "border-indigo-500/30",
      glow: "from-indigo-600/20 via-blue-600/10 to-transparent",
      gradient: "from-indigo-900/40 to-slate-900/60",
      text: "text-indigo-400",
    },
    coreThesis: {
      headline: "Todo sistema está perfectamente diseñado para obtener los resultados que obtiene",
      summary: "Las organizaciones educativas no fallan por incompetencia o desidia de sus miembros; producen con exactitud matemática aquello que su arquitectura tácita, sus incentivos y su distribución del tiempo hacen inevitable.",
      keyFact: "El agotamiento docente no es falta de vocación, sino el costo por fricción de sostener con heroísmo individual un sistema estructuralmente desfasado.",
    },
    pillars: [
      {
        title: "Reglas Tácitas vs. Discurso",
        badge: "Cultura Real",
        iconName: "ShieldAlert",
        points: [
          "Lo que una institución evalúa y premia dicta la práctica real más que su ideario o misión.",
          "Las conductas de supervivencia surgen cuando la estructura formal contradice la realidad cotidiana.",
        ],
      },
      {
        title: "La Tiranía de los 45 Minutos",
        badge: "Estructura Temporal",
        iconName: "Clock",
        points: [
          "El horario fragmentado penaliza la indagación profunda y normaliza la superficialidad.",
          "Cada cambio de campana reinicia artificialmente la atención y disuelve el compromiso cognitivo.",
        ],
      },
      {
        title: "Metáfora del Invernadero",
        badge: "Pensamiento Sistémico",
        iconName: "Layers",
        points: [
          "Las escuelas no son relojes de engranajes sustituibles, sino ecosistemas vivos con dinámicas adaptativas.",
          "Intervenir en un síntoma aislado genera efectos no deseados en otras partes del organismo.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Paradigma Mecanicista",
      leftBadge: "Enfoque Tradicional",
      leftItems: [
        "Buscar culpables individuales cuando algo falla.",
        "Exigir más esfuerzo al personal dentro del mismo molde.",
        "Medir el cumplimiento formal y la obediencia al reglamento.",
        "Tratar los problemas como averías aisladas de piezas.",
      ],
      rightTitle: "Paradigma Arquitectónico",
      rightBadge: "Enfoque de Diseño",
      rightItems: [
        "Examinar qué condiciones e incentivos generan el error.",
        "Rediseñar la estructura para liberar la capacidad creadora.",
        "Medir la emergencia de autonomía, criterio y comprensión.",
        "Comprender la interdependencia y las reglas invisibles del sistema.",
      ],
    },
    systemicMechanism: {
      title: "El Bucle de la Fricción Invisible",
      subtitle: "Cómo el diseño tácito neutraliza el talento y perpetúa la frustración",
      steps: [
        {
          step: 1,
          label: "Diseño Desfasado",
          description: "Estructuras rígidas, evaluación punitiva y fragmentación horaria heredadas.",
        },
        {
          step: 2,
          label: "Heroísmo Individual",
          description: "Docentes comprometidos suplen con esfuerzo propio las carencias del entorno.",
        },
        {
          step: 3,
          label: "Desgaste y Cinismo",
          description: "La energía se agota al luchar a contracorriente de la inercia institucional.",
        },
        {
          step: 4,
          label: "Normalización",
          description: "La mediocridad se asume como destino natural y no como consecuencia de diseño.",
        },
      ],
      insight: "Si no rediseñamos la arquitectura invisible, cualquier nuevo proyecto o currículo será absorbido y desactivado por las reglas tácitas existentes.",
    },
    designLaws: [
      "Las organizaciones no sufren fallos morales; sufren desajustes de diseño.",
      "El heroísmo individual es un pésimo sustituto de una arquitectura institucional sana.",
      "Para cambiar permanentemente una conducta, rediseña el entorno donde esa conducta cobra sentido.",
    ],
    authorQuote: {
      text: "La calidad del aprendizaje que ocurre en una escuela no es superior a la calidad de la arquitectura que lo hace posible.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap2: {
    chapterId: "cap2",
    chapterNumber: "CAPÍTULO 2",
    title: "La Crisis del Paradigma Industrial",
    subtitle: "Por qué muchas instituciones siguen diseñadas para un mundo que ya no existe",
    pages: "Páginas 21 - 42",
    accentColor: {
      badge: "bg-amber-950/80 border-amber-500/40 text-amber-300",
      border: "border-amber-500/30",
      glow: "from-amber-600/20 via-orange-600/10 to-transparent",
      gradient: "from-amber-900/40 to-slate-900/60",
      text: "text-amber-400",
    },
    coreThesis: {
      headline: "La educación moderna mantiene intacta la matriz fabril de la era industrial",
      summary: "La escuela que conocemos no nació para fomentar el pensamiento crítico ni la curiosidad; fue diseñada con brillantez en el siglo XIX para producir ciudadanos obedientes, puntuales y capaces de ejecutar labores repetitivas en una economía de manufactura masiva.",
      keyFact: "Separar a las personas por año de nacimiento es un criterio de ingeniería logística industrial, no un principio derivado de la neurociencia ni de la psicología del aprendizaje.",
    },
    pillars: [
      {
        title: "Agrupación por Lotes",
        badge: "Matriz Fabril",
        iconName: "Boxes",
        points: [
          "Tratar a los estudiantes como productos que avanzan en una línea de montaje secuencial.",
          "Ignorar ritmos biológicos, intereses y trayectorias cognitivas singulares.",
        ],
      },
      {
        title: "Parcelación del Saber",
        badge: "Especialización Taylorista",
        iconName: "Split",
        points: [
          "Materia tras materia sin conexión, destruyendo la visión holística de la realidad.",
          "El mundo real enfrenta problemas interdisciplinarios complejos; el currículo responde con casilleros.",
        ],
      },
      {
        title: "El Desafío de la Era de la IA",
        badge: "Ruptura Histórica",
        iconName: "Cpu",
        points: [
          "Cualquier tarea educativa basada en memorizar y repetir patrones ya es ejecutada mejor por algoritmos.",
          "El valor humano radica ahora en la formulación de preguntas, el criterio y la empatía ética.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Escuela Fabril Siglo XIX",
      leftBadge: "Producción Estandarizada",
      leftItems: [
        "Transmisión unidireccional de contenidos cerrados.",
        "Estandarización de ritmos, respuestas y exámenes.",
        "Docente como inspector y único dispensador del saber.",
        "Obediencia pasiva y tolerancia a tareas desprovistas de sentido.",
      ],
      rightTitle: "Comunidad del Aprendizaje Siglo XXI",
      rightBadge: "Desarrollo de Criterio y Agencia",
      rightItems: [
        "Indagación activa, proyectos auténticos y co-diseño.",
        "Itinerarios adaptativos y evaluación formativa continua.",
        "Docente como arquitecto de experiencias y mediador cognitivo.",
        "Agencia del aprendiz, espíritu crítico y creatividad situada.",
      ],
    },
    systemicMechanism: {
      title: "El Abismo de la Relevancia",
      subtitle: "La creciente contradicción entre el mundo real y el aula convencional",
      steps: [
        {
          step: 1,
          label: "Transformación Global",
          description: "La IA, la interconectividad y la incertidumbre redefinen la sociedad.",
        },
        {
          step: 2,
          label: "Inmovilidad del Aula",
          description: "La estructura física, temporal y evaluativa sigue anclada en 1890.",
        },
        {
          step: 3,
          label: "Desconexión Cognitiva",
          description: "Los estudiantes 'juegan a la escuela' para aprobar, sin involucrar su intelecto genuino.",
        },
        {
          step: 4,
          label: "Crisis de Legitimidad",
          description: "La institución pierde su capacidad de inspirar y formar valor para el futuro.",
        },
      ],
      insight: "Intentar mejorar la escuela industrial sin alterar su diseño de base es como intentar construir un cohete espacial optimizando una locomotora de vapor.",
    },
    designLaws: [
      "No se puede preparar a mentes libres para un mundo incierto utilizando una arquitectura de ensamblaje.",
      "La estandarización genera la ilusión de control a costa de sacrificar la comprensión profunda.",
      "Cuando la información es abundante e inmediata, el desafío educativo es el criterio, no la acumulación.",
    ],
    authorQuote: {
      text: "La escuela industrial no está rota; funciona con admirable precisión. Lo que ocurre es que fue diseñada para un mundo que ya dejó de existir.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap3: {
    chapterId: "cap3",
    chapterNumber: "CAPÍTULO 3",
    title: "El Fracaso de las Reformas Aisladas",
    subtitle: "Por qué la mayoría de las innovaciones producen cambios visibles pero pocas transformaciones sostenibles",
    pages: "Páginas 43 - 58",
    accentColor: {
      badge: "bg-rose-950/80 border-rose-500/40 text-rose-300",
      border: "border-rose-500/30",
      glow: "from-rose-600/20 via-pink-600/10 to-transparent",
      gradient: "from-rose-900/40 to-slate-900/60",
      text: "text-rose-400",
    },
    coreThesis: {
      headline: "La tecnología sin rediseño arquitectónico solo digitaliza la mediocridad",
      summary: "Inyectar pantallas, pizarras interactivas o talleres de capacitación docente de fin de semana en una estructura escolar inalterada no genera transformación; solo amplifica la pedagogía previa y produce cinismo por fatiga de reforma.",
      keyFact: "Las organizaciones poseen un sistema inmunológico homeostático que absorbe las novedades superficiales para blindar su núcleo tradicional.",
    },
    pillars: [
      {
        title: "La Trampa de la Visibilidad",
        badge: "Inversión Cosmética",
        iconName: "EyeOff",
        points: [
          "Comprar artefactos fotogénicos para justificar presupuestos ante padres y ministerios.",
          "Se confunde tener ordenadores con desarrollar un pensamiento computacional o crítico.",
        ],
      },
      {
        title: "La Tecnología como Amplificador",
        badge: "Ley de Pedagogía",
        iconName: "Zap",
        points: [
          "Si la pedagogía es expositiva y pasiva, la tableta amplifica el aburrimiento y la distracción.",
          "Si la arquitectura es colaborativa y profunda, la herramienta potencia la investigación.",
        ],
      },
      {
        title: "Homeostasis Institucional",
        badge: "Inercia del Sistema",
        iconName: "ShieldCheck",
        points: [
          "El sistema escolar reconfigura cualquier innovación hasta hacerla encajar en sus viejas rutinas.",
          "Cuestionar los cimientos incomoda; cambiar de libro de texto o de software reconforta.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Reforma Fragmentaria",
      leftBadge: "Ciclo del Fracaso",
      leftItems: [
        "Invertir en dispositivos sin tocar el modelo pedagógico.",
        "Talleres de 'motivación' de fin de semana para los docentes.",
        "Cambios de terminología curricular que no alteran la práctica.",
        "Medición inmediata de resultados cosméticos.",
      ],
      rightTitle: "Rediseño Arquitectónico",
      rightBadge: "Transformación Real",
      rightItems: [
        "Alinear espacio, tiempo, evaluación y tecnología con el propósito.",
        "Comunidades de práctica sostenidas con tiempo protegido.",
        "Reestructuración de los incentivos y de la carga administrativa.",
        "Acompañamiento a largo plazo centrado en la cultura institucional.",
      ],
    },
    systemicMechanism: {
      title: "El Ciclo de las Buenas Intenciones",
      subtitle: "Por qué las reformas educativas se evaporan sin dejar huella duradera",
      steps: [
        {
          step: 1,
          label: "Inyección de Novedad",
          description: "Entusiasmo por una nueva plataforma, metodología de moda o infraestructura.",
        },
        {
          step: 2,
          label: "Choque con la Gramática",
          description: "La innovación choca contra las notas numéricas, los 45 minutos y la burocracia.",
        },
        {
          step: 3,
          label: "Asimilación Cosmética",
          description: "Los docentes adaptan la herramienta para seguir dictando la misma clase de siempre.",
        },
        {
          step: 4,
          label: "Fatiga y Resignación",
          description: "Se decreta que 'la innovación no funcionó' y se retorna al statu quo con mayor apatía.",
        },
      ],
      insight: "La tecnología nunca solucionará un problema de diseño pedagógico; solo lo hará más costoso y evidente.",
    },
    designLaws: [
      "No se puede resolver con herramientas lo que es un defecto de arquitectura relacional y temporal.",
      "La capacitación docente sin tiempo protegido para el rediseño es una falta de respeto profesional.",
      "Cualquier reforma que no altere el sistema de evaluación terminará absorbida por él.",
    ],
    authorQuote: {
      text: "No faltan tecnologías ni buenas intenciones en nuestras escuelas; falta la lucidez para comprender que las piezas jamás transformarán el todo si la estructura permanece intocada.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap4: {
    chapterId: "cap4",
    chapterNumber: "CAPÍTULO 4",
    title: "La Anatomía del Núcleo Instruccional",
    subtitle: "El triángulo pedagógico y las fuerzas invisibles que determinan la calidad del aprendizaje",
    pages: "Páginas 59 - 78",
    accentColor: {
      badge: "bg-emerald-950/80 border-emerald-500/40 text-emerald-300",
      border: "border-emerald-500/30",
      glow: "from-emerald-600/20 via-teal-600/10 to-transparent",
      gradient: "from-emerald-900/40 to-slate-900/60",
      text: "text-emerald-400",
    },
    coreThesis: {
      headline: "El aprendizaje real ocurre únicamente en la interacción recíproca entre docente, estudiante y contenido mediado por la tarea",
      summary: "Richard Elmore demostró que el aprendizaje no responde a la retórica de los planes de estudio ni a las inversiones en la periferia institucional, sino a la relación viva del triángulo pedagógico. Si una intervención no altera lo que el estudiante efectivamente piensa y hace durante la tarea, el rendimiento jamás cambiará.",
      keyFact: "'La tarea predice el rendimiento': no importa la sofisticación de la clase magistral; el aprendizaje real queda delimitado por la demanda cognitiva real que la tarea exige al alumno.",
    },
    pillars: [
      {
        title: "El Triángulo de Elmore",
        badge: "Núcleo Irreducible",
        iconName: "Workflow",
        points: [
          "El aprendizaje sólo aumenta si se incrementa el conocimiento del docente, la complejidad del contenido o el rol activo del alumno.",
          "Modificar un único vértice sin reajustar los otros dos desestabiliza el núcleo y anula la efectividad del cambio.",
        ],
      },
      {
        title: "La Tarea como Predictor",
        badge: "Demanda Cognitiva",
        iconName: "Target",
        points: [
          "No importa lo que el profesor crea que está enseñando; el aprendizaje es lo que la tarea obliga al alumno a procesar.",
          "La gran mayoría de las tareas escolares sólo demandan memorización procedimental y obediencia pasiva.",
        ],
      },
      {
        title: "Las Fuerzas Invisibles",
        badge: "Dinámica Oculta",
        iconName: "Compass",
        points: [
          "El contrato didáctico tácito que establece qué conductas y respuestas son legítimas en el aula.",
          "Las expectativas mutuas implícitas y la economía de la atención que regulan la energía intelectual del grupo.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Intervención Periférica",
      leftBadge: "Cosmética Externa",
      leftItems: [
        "Cambiar libros de texto o añadir plataformas digitales sin tocar el aula.",
        "Cursos de capacitación docente sin observación de la tarea real.",
        "Inspección formal de planificaciones curriculares en papel.",
        "Culpar a la 'falta de interés' o desmotivación de los estudiantes.",
      ],
      rightTitle: "Transformación del Núcleo",
      rightBadge: "Profundidad Cognitiva",
      rightItems: [
        "Elevar la complejidad intrínseca de la tarea que el alumno resuelve.",
        "Desplazar al docente de expositor a provocador socrático y modelador.",
        "Ampliar la responsabilidad del estudiante sobre su propio razonamiento.",
        "Alinear la evaluación con desempeños de comprensión auténtica.",
      ],
    },
    systemicMechanism: {
      title: "La Dinámica del Núcleo Instruccional",
      subtitle: "Cómo la tarea actúa como embudo del aprendizaje real",
      steps: [
        {
          step: 1,
          label: "Propuesta Docente",
          description: "El profesor presenta un tema complejo con gran despliegue visual y explicativo.",
        },
        {
          step: 2,
          label: "Filtro de la Tarea",
          description: "Se entrega una guía de ejercicios estandarizados de reproducción mecánica o respuestas cerradas.",
        },
        {
          step: 3,
          label: "Acomodación Cognitiva",
          description: "El estudiante reduce su esfuerzo intelectual al mínimo indispensable para aprobar la prueba.",
        },
        {
          step: 4,
          label: "Ilusión de Aprendizaje",
          description: "Se obtienen buenas notas en memoria a corto plazo, pero nula comprensión ni transferencia a situaciones reales.",
        },
      ],
      insight: "Si no intervienes en la tarea que el estudiante tiene frente a sus ojos, cualquier reforma educativa se evaporará al traspasar la puerta del aula.",
    },
    designLaws: [
      "El aprendizaje real no es lo que el docente enseña, sino lo que la tarea exige que el estudiante piense.",
      "Existen solo tres formas de mejorar el aprendizaje: elevar el nivel del contenido, aumentar la pericia del docente o activar la agencia del estudiante.",
      "Cualquier reforma que no altere la relación recíproca entre docente, estudiante y contenido es cosmética.",
    ],
    authorQuote: {
      text: "La tarea predice el rendimiento. Si quieres saber qué están aprendiendo los estudiantes, no mires al profesor: mira lo que los estudiantes están haciendo.",
      author: "Richard Elmore / Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap5: {
    chapterId: "cap5",
    chapterNumber: "CAPÍTULO 5",
    title: "Las Cinco Dimensiones de la Arquitectura del Aprendizaje",
    subtitle: "Propósito, Tiempo, Espacio, Relaciones y Evaluación como pilares estructurales",
    pages: "Páginas 79 - 104",
    accentColor: {
      badge: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300",
      border: "border-cyan-500/30",
      glow: "from-cyan-600/20 via-blue-600/10 to-transparent",
      gradient: "from-cyan-900/40 to-slate-900/60",
      text: "text-cyan-400",
    },
    coreThesis: {
      headline: "El aprendizaje profundo no se decreta; es la consecuencia natural de habitar un ecosistema coherente",
      summary: "La Arquitectura del Aprendizaje articula cinco dimensiones interdependientes: Propósito, Tiempo, Espacio, Relaciones y Evaluación. La disonancia entre cualquiera de ellas sabotea el conjunto; su alineamiento estratégico libera el potencial humano de la institución.",
      keyFact: "La evaluación es la dimensión con mayor fuerza gravitacional: define las reglas del juego reales que todas las demás dimensiones terminarán acatando.",
    },
    pillars: [
      {
        title: "Propósito y Tiempo",
        badge: "Sentido y Ritmo",
        iconName: "Timer",
        points: [
          "Propósito: el telos formativo real que dota de sentido a la experiencia más allá de la acreditación burocrática.",
          "Tiempo: transición de la campana fragmentaria a bloques de inmersión prolongada y ritmo cognitivo fluido.",
        ],
      },
      {
        title: "Espacio y Relaciones",
        badge: "Territorio y Vínculo",
        iconName: "Maximize2",
        points: [
          "Espacio: reconfiguración física y digital de aulas de vigilancia a entornos polivalentes de co-creación y agencia.",
          "Relaciones: paso de la verticalidad punitiva a redes de interdependencia con seguridad psicológica total.",
        ],
      },
      {
        title: "Evaluación Formativa",
        badge: "Fuerza Gravitacional",
        iconName: "Scale",
        points: [
          "Sustituir la sanción numérica tardía por ciclos iterativos de retroalimentación procesual entre pares y docente.",
          "Alinear lo que la institución dice valorar con lo que efectivamente premia, reconoce y acredita.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Estructura Desarticulada",
      leftBadge: "Inercia Tradicional",
      leftItems: [
        "Tiempos rígidos de 45 minutos regidos por timbre y prisa.",
        "Aulas unidireccionales con filas de pupitres fijos hacia la tarima.",
        "Evaluación sumativa punitiva basada en exámenes de memoria.",
        "Soledad docente y relaciones verticales de desconfianza.",
      ],
      rightTitle: "Arquitectura Coherente",
      rightBadge: "Ecosistema Integrado",
      rightItems: [
        "Bloques flexibles de inmersión y trabajo por proyectos auténticos.",
        "Espacios polivalentes que fomentan la colaboración y el silencio.",
        "Evaluación formativa continua basada en evidencias de desempeño.",
        "Cultura colegiada de intervisión docente y co-diseño compartido.",
      ],
    },
    systemicMechanism: {
      title: "El Ecosistema Pentadimensional del Aprendizaje",
      subtitle: "La sincronía sinérgica entre las cinco dimensiones estructurales",
      steps: [
        {
          step: 1,
          label: "Claridad de Propósito",
          description: "La comunidad define qué capacidades, valores y criterios busca forjar en sus graduados.",
        },
        {
          step: 2,
          label: "Liberación del Tiempo",
          description: "Se abren bloques prolongados que permiten investigar y profundizar sin interrupciones arbitrarias.",
        },
        {
          step: 3,
          label: "Espacios de Agencia",
          description: "Los entornos físicos y virtuales se adaptan a la dinámica del reto cognitivo en lugar de constreñirlo.",
        },
        {
          step: 4,
          label: "Vínculos de Confianza",
          description: "Se consolida un clima donde el error es materia prima de reflexión colectiva y aprendizaje continuo.",
        },
      ],
      insight: "Modificar el espacio sin alterar la evaluación o el tiempo es como cambiar la carrocería de un coche manteniendo el motor averiado.",
    },
    designLaws: [
      "El espacio y el tiempo nunca son mudos: cuando contradicen las palabras del docente, el alumno cree al espacio y al tiempo.",
      "Cualquier contradicción entre el ideario institucional y el sistema de evaluación será resuelta por los estudiantes a favor de la evaluación.",
      "La coherencia entre las cinco dimensiones es lo que transforma un edificio escolar en una comunidad viva de aprendizaje.",
    ],
    authorQuote: {
      text: "Diseñar una arquitectura de aprendizaje es coordinar el tiempo, el espacio, el propósito, los vínculos y la evaluación para que la comprensión profunda sea inevitable.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap6: {
    chapterId: "cap6",
    chapterNumber: "CAPÍTULO 6",
    title: "Patrones de Diseño Institucional",
    subtitle: "Configuraciones arquitectónicas para la emancipación o la domesticación cognitiva",
    pages: "Páginas 105 - 128",
    accentColor: {
      badge: "bg-purple-950/80 border-purple-500/40 text-purple-300",
      border: "border-purple-500/30",
      glow: "from-purple-600/20 via-violet-600/10 to-transparent",
      gradient: "from-purple-900/40 to-slate-900/60",
      text: "text-purple-400",
    },
    coreThesis: {
      headline: "Las instituciones reproducen patrones que o bien emancipan el pensamiento o domestican la conducta",
      summary: "Inspirado en la teoría de patrones arquitectónicos y organizacionales, este capítulo disecciona las configuraciones arquetípicas de la escuela: patrones tóxicos que perpetúan la pasividad y el control burocrático, frente a patrones regenerativos que estimulan la autonomía, el trabajo transdisciplinar y la indagación colegiada.",
      keyFact: "El acoplamiento coherente supera la falsa disyuntiva entre la asfixia burocrática (acoplamiento férreo) y la soledad docente anárquica (acoplamiento laxo).",
    },
    pillars: [
      {
        title: "Domesticación vs. Emancipación",
        badge: "Intencionalidad Ética",
        iconName: "Brain",
        points: [
          "El diseño institucional jamás es neutro: moldea la disposición psicológica y ética del aprendiz.",
          "La domesticación premia la docilidad y la repetición; la emancipación cultiva el juicio crítico y la responsabilidad.",
        ],
      },
      {
        title: "La Dialéctica del Acoplamiento",
        badge: "Gobernanza Sistémica",
        iconName: "Network",
        points: [
          "Acoplamiento férreo: hipervigilancia y asfixia normativa que anula la creatividad del docente.",
          "Acoplamiento laxo: fragmentación y aislamiento de aulas que impide el aprendizaje organizacional.",
          "Acoplamiento coherente: propósito común innegociable con amplia autonomía metodológica en el aula.",
        ],
      },
      {
        title: "Patrones Tóxicos vs. Regenerativos",
        badge: "Configuraciones Vivas",
        iconName: "Workflow",
        points: [
          "Tóxicos: el búnker disciplinar, la carrera de postas curricular y el examen como aduana punitiva.",
          "Regenerativos: el estudio de proyectos transdisciplinares, el andamiaje desvaneciente y la intervisión entre pares.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Patrones de Domesticación",
      leftBadge: "Control y Silos",
      leftItems: [
        "Asignaturas estancas sin comunicación interdisciplinar.",
        "Docente aislado como única autoridad epistémica en su aula.",
        "Currículo entendido como inventario de contenidos que 'cubrir'.",
        "Control externo y sanciones como motor de la conducta.",
      ],
      rightTitle: "Patrones de Emancipación",
      rightBadge: "Agencia y Redes",
      rightItems: [
        "Talleres y retos centrados en problemas del mundo real.",
        "Comunidades docentes de práctica con observación entre pares.",
        "Currículo centrado en grandes ideas y desempeños de comprensión.",
        "Autonomía andamiada y autorregulación de los aprendices.",
      ],
    },
    systemicMechanism: {
      title: "La Transición de Patrones Institucionales",
      subtitle: "Cómo reemplazar estructuras tóxicas por configuraciones regenerativas",
      steps: [
        {
          step: 1,
          label: "Identificación del Patrón Tóxico",
          description: "Mapear el ritual obsoleto (ej. silos de asignaturas y exámenes de memoria aislados).",
        },
        {
          step: 2,
          label: "Desactivación de Incentivos",
          description: "Retirar las métricas burocráticas que recompensan la fragmentación y la obediencia pasiva.",
        },
        {
          step: 3,
          label: "Inserción del Patrón Regenerativo",
          description: "Prototipar laboratorios transdisciplinares con tiempo protegido y trabajo colaborativo.",
        },
        {
          step: 4,
          label: "Acoplamiento Coherente",
          description: "Institucionalizar la práctica mediante acuerdos colegiados y evaluación auténtica.",
        },
      ],
      insight: "Los patrones no son leyes fijas, sino soluciones vivas que deben ser adaptadas y perfeccionadas continuamente por la comunidad pedagógica.",
    },
    designLaws: [
      "El diseño de una institución educativa es una declaración ética materializada en rutinas y espacios.",
      "No se puede pedir innovación a los docentes manteniéndolos atrapados en patrones de aislamiento y vigilancia.",
      "Un patrón regenerativo exitoso combina alta claridad en las metas con total libertad táctica en el aula.",
    ],
    authorQuote: {
      text: "Los patrones de diseño son las respuestas estructurales a los desafíos de la convivencia y el saber. Elegir qué patrones habitamos es decidir qué tipo de sociedad queremos engendrar.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap7: {
    chapterId: "cap7",
    chapterNumber: "CAPÍTULO 7",
    title: "La Matriz de Diagnóstico y los Niveles de Madurez",
    subtitle: "Cartografía para evaluar y rediseñar la arquitectura institucional",
    pages: "Páginas 129 - 148",
    accentColor: {
      badge: "bg-amber-950/80 border-amber-500/40 text-amber-300",
      border: "border-amber-500/30",
      glow: "from-amber-600/20 via-yellow-600/10 to-transparent",
      gradient: "from-amber-900/40 to-slate-900/60",
      text: "text-amber-400",
    },
    coreThesis: {
      headline: "No se puede rediseñar con éxito un sistema sin antes cartografiar con rigor sus niveles de madurez",
      summary: "La Matriz de Diagnóstico es una herramienta cartográfica que cruza las cinco dimensiones del aprendizaje con cuatro estadios de evolución institucional: Fragmentada, Coordinada, Integrada y Generativa. Permite identificar con precisión clínica los puntos de apalancamiento sistémico donde intervenir genera máxima transformación con mínima fricción.",
      keyFact: "La madurez no se compra ni se decreta; se desarrolla consolidando capacidades acumulativas en cada una de las cinco dimensiones.",
    },
    pillars: [
      {
        title: "Los Cuatro Niveles de Madurez",
        badge: "Estadios Sistémicos",
        iconName: "Layers",
        points: [
          "Nivel 1 (Fragmentada): silos aislados, inercia industrial y gestión reactiva de crisis.",
          "Nivel 2 (Coordinada): protocolos compartidos, estandarización de procesos y reuniones de alineación.",
          "Nivel 3 (Integrada): coherencia transversal, proyectos interdisciplinares y evaluación auténtica.",
          "Nivel 4 (Generativa): ecosistema vivo adaptativo, bucle doble continuo y autorregulación comunitaria.",
        ],
      },
      {
        title: "Cartografía Etnográfica No Punitiva",
        badge: "Método Clínico",
        iconName: "ScanEye",
        points: [
          "Observar las prácticas reales y las teorías en uso sin juzgar ni sancionar a los actores.",
          "Recoger evidencias directas de aula: tiempos reales de habla, complejidad de tareas y climas relacionales.",
        ],
      },
      {
        title: "Puntos de Apalancamiento Sistémico",
        badge: "Donella Meadows",
        iconName: "Zap",
        points: [
          "Evitar intervenir en parámetros superficiales que solo generan resistencia institucional.",
          "Actuar sobre los flujos de información, la estructura de reglas y el paradigma fundacional del centro.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Auditoría Burocrática",
      leftBadge: "Inspección Tradicional",
      leftItems: [
        "Verificación formal de carpetas pedagógicas y actas firmadas.",
        "Encuestas de satisfacción superficiales y complacientes.",
        "Recetas prefabricadas impuestas jerárquicamente desde el exterior.",
        "Búsqueda de culpables para justificar malos indicadores.",
      ],
      rightTitle: "Cartografía Arquitectónica",
      rightBadge: "Diagnóstico Clínico",
      rightItems: [
        "Inmersión etnográfica desarmada y atenta a la práctica viva.",
        "Evaluación basada en la matriz 5x4 con evidencias de campo.",
        "Identificación colaborativa de puntos de apalancamiento sistémico.",
        "Construcción colectiva de la línea base para el rediseño.",
      ],
    },
    systemicMechanism: {
      title: "El Proceso Cartográfico y de Apalancamiento",
      subtitle: "De la radiografía del centro al plan estratégico de transición",
      steps: [
        {
          step: 1,
          label: "Observación Etnográfica",
          description: "Registro de campo de la dinámica diaria en aulas, patios y salas de profesores.",
        },
        {
          step: 2,
          label: "Ubicación en la Matriz 5x4",
          description: "Diagnóstico del nivel de madurez específico en cada una de las 5 dimensiones estructurales.",
        },
        {
          step: 3,
          label: "Detección de Cuellos de Botella",
          description: "Localizar la dimensión rezagada que frena el avance armónico del conjunto.",
        },
        {
          step: 4,
          label: "Intervención de Apalancamiento",
          description: "Activar rediseños estratégicos en las reglas y flujos para transitar hacia el siguiente nivel.",
        },
      ],
      insight: "Intentar forzar una práctica de Nivel 4 (Generativa) en una institución con cimientos de Nivel 1 (Fragmentada) produce rechazo homeostático y cinismo institucional.",
    },
    designLaws: [
      "El diagnóstico arquitectónico no busca evaluar a las personas; busca comprender la lógica del sistema.",
      "El mayor apalancamiento no proviene de agregar más recursos, sino de alterar las reglas que gobiernan los recursos existentes.",
      "Una institución madura no es la que carece de problemas, sino la que posee los mecanismos reflexivos para aprender de ellos.",
    ],
    authorQuote: {
      text: "La Matriz de Diagnóstico no es un tribunal que califica la excelencia de una escuela; es un espejo riguroso que le permite verse a sí misma y elegir conscientemente su próximo umbral evolutivo.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap8: {
    chapterId: "cap8",
    chapterNumber: "CAPÍTULO 8",
    title: "La Arquitectura del Aprendizaje en la Era de la Inteligencia Artificial",
    subtitle: "Diseñar instituciones formativas cuando las máquinas también aprenden",
    pages: "Páginas 149 - 168",
    accentColor: {
      badge: "bg-purple-950/80 border-purple-500/40 text-purple-300",
      border: "border-purple-500/30",
      glow: "from-purple-600/20 via-pink-600/10 to-transparent",
      gradient: "from-purple-900/40 to-slate-900/60",
      text: "text-purple-400",
    },
    coreThesis: {
      headline: "La IA colapsa la pedagogía de la transcripción y exige rediseñar las condiciones del pensamiento humano",
      summary: "La inteligencia artificial no es una novedad técnica que se añade al aula; es una disrupción epistemológica que invalida las tareas basadas en resumir, repetir o calcular de forma mecánica. Ante ello, la institución educativa debe decidir qué capacidades humanas cultivar deliberadamente: el criterio ético, la formulación de preguntas complejas y la argumentación dialógica.",
      keyFact: "Si un modelo generativo de lenguaje aprueba en tres segundos el examen estándar de tu curso, el defecto nunca estuvo en la IA: siempre estuvo en el diseño del examen.",
    },
    pillars: [
      {
        title: "Colapso de la Transcripción",
        badge: "Fin de la Copia",
        iconName: "Brain",
        points: [
          "Las tareas de búsqueda superficial, síntesis rutinaria y redacción predecible pierden todo valor formativo.",
          "Superar la trampa del engaño mutuo (alumnos que generan con IA tareas que profesores corrigen con IA).",
        ],
      },
      {
        title: "Los Tres Impactos Arquitectónicos",
        badge: "Reconfiguración",
        iconName: "Workflow",
        points: [
          "Tiempo: automatización de cargas burocráticas para liberar horas de interacción dialógica humana.",
          "Evaluación: muerte del producto final estático y renacimiento de la defensa oral y el debate en vivo.",
          "Rol Docente: del expositor de contenidos al mentor socrático y curador de sentido ético.",
        ],
      },
      {
        title: "Gobernanza y Soberanía",
        badge: "Ética y Datos",
        iconName: "ShieldCheck",
        points: [
          "Evitar tanto la prohibición reactiva paralizante como la adopción acrítica desregulada.",
          "Salvaguardar la soberanía pedagógica y la privacidad de los datos frente a la dependencia comercial.",
          "Capacitar a toda la comunidad en una alfabetización crítica ante los sesgos algorítmicos.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Adopción Tecnocéntrica",
      leftBadge: "Automatización Pasiva",
      leftItems: [
        "Comprar software para hacer más rápido lo que carece de sentido.",
        "Detectores de plagio y vigilancia policíaca en exámenes memorísticos.",
        "Aislamiento individual de aprendices ante pantallas optimizadas.",
        "Delegación ciega del esfuerzo cognitivo en herramientas automatizadas.",
      ],
      rightTitle: "Arquitectura del Aprendizaje",
      rightBadge: "Criterio y Agencia",
      rightItems: [
        "Poda deliberada de tareas mecánicas que la máquina resuelve mejor.",
        "Evaluación auténtica basada en razonamiento dialógico y pensamiento vivo.",
        "Comunidad social presencial fortalecida por la interacción socrática.",
        "Cultivo deliberado del juicio ético, la duda reflexiva y la empatía.",
      ],
    },
    systemicMechanism: {
      title: "El Protocolo de Diseño Institucional ante la IA",
      subtitle: "Cinco preguntas indispensables para orientar el ecosistema educativo",
      steps: [
        {
          step: 1,
          label: "Capacidades Innegociables",
          description: "Definir qué competencias humanas reflexivas se protegerán y expandirán sin delegación algorítmica.",
        },
        {
          step: 2,
          label: "Revisión de la Tarea",
          description: "Erradicar cualquier consigna que premie la mera repetición o transcripción de datos.",
        },
        {
          step: 3,
          label: "Evaluación Dialógica",
          description: "Diseñar instancias procesuales donde el alumno defienda su postura y justifique sus decisiones.",
        },
        {
          step: 4,
          label: "Soberanía Ética y Crítica",
          description: "Auditar sesgos algorítmicos y garantizar que la tecnología esté al servicio de la equidad humana.",
        },
      ],
      insight: "La IA amplifica la arquitectura existente: en una institución mecanicista acelera la deshumanización; en un ecosistema emancipador libera tiempo para la conversación profunda.",
    },
    designLaws: [
      "Si una inteligencia artificial puede aprobar tu examen, el problema pedagógico es el examen, no la máquina.",
      "El valor formativo del siglo XXI no reside en almacenar respuestas, sino en formular preguntas pertinentes y sostener la duda fértil.",
      "La mayor amenaza de la IA no es que las máquinas piensen como humanos, sino que los humanos sigamos siendo educados para pensar como máquinas.",
    ],
    authorQuote: {
      text: "La inteligencia artificial nos coloca ante el espejo definitivo: nos obliga a despojarnos de la pedagogía de la rutina y nos devuelve a la esencia misma de educar: ayudar a otro ser humano a pensar con libertad, profundidad y sentido.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },
};
