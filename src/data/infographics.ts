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
    pages: "Páginas 6 - 22",
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
    pages: "Páginas 23 - 47",
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
    subtitle: "La ilusión de la tecnología, los talleres docentes y el cambio fragmentario",
    pages: "Páginas 48 - 62",
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
    title: "Arquitectura del Aprendizaje",
    subtitle: "Cuando el problema deja de estar en las respuestas",
    pages: "Páginas 63 - 97",
    accentColor: {
      badge: "bg-emerald-950/80 border-emerald-500/40 text-emerald-300",
      border: "border-emerald-500/30",
      glow: "from-emerald-600/20 via-teal-600/10 to-transparent",
      gradient: "from-emerald-900/40 to-slate-900/60",
      text: "text-emerald-400",
    },
    coreThesis: {
      headline: "Aprender es un acto de diseño de condiciones, no de transmisión de respuestas",
      summary: "La Arquitectura del Aprendizaje es la orquestación deliberada de cuatro dimensiones interdependientes (temporal, espacial, relacional y epistémica) cuyo propósito es hacer que la indagación rigurosa, la curiosidad y la comprensión profunda sean el resultado natural e inevitable de habitar el entorno.",
      keyFact: "El aprendizaje profundo no se exige ni se decreta; se provocan las condiciones arquitectónicas para que acontezca.",
    },
    pillars: [
      {
        title: "Dimensión Temporal",
        badge: "Ritmos Cognitivos",
        iconName: "Timer",
        points: [
          "Transitar de campanas apresuradas a bloques de inmersión prolongada y ritmo fluido.",
          "El tiempo debe estar al servicio de la complejidad del desafío, no de la sincronía burocrática.",
        ],
      },
      {
        title: "Dimensión Espacial",
        badge: "Entornos Flexibles",
        iconName: "Maximize2",
        points: [
          "Reconfiguración de aulas unidireccionales en laboratorios de co-creación y silencio reflexivo.",
          "El espacio físico y digital educa: habla sobre quién tiene el poder y qué tipo de interacción es legítima.",
        ],
      },
      {
        title: "Dimensiones Relacional y Epistémica",
        badge: "Vínculo y Criterio",
        iconName: "Compass",
        points: [
          "Relacional: de la jerarquía vertical a la comunidad de indagadores interdependientes.",
          "Epistémica: cómo se construye, valida y desafía el saber con rigor ético y evidencias.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Planificación de Actividades",
      leftBadge: "Foco en la Tarea",
      leftItems: [
        "¿Qué voy a hacer durante la clase?",
        "Cumplir con el temario y rellenar horas de calendario.",
        "Actividades desconectadas para mantener ocupados a los alumnos.",
        "El docente como presentador del contenido.",
      ],
      rightTitle: "Diseño de Capacidades",
      rightBadge: "Foco en la Emergencia",
      rightItems: [
        "¿Qué capacidad cognitiva y ética debe florecer en el estudiante?",
        "Andamiaje riguroso con desvanecimiento progresivo de la ayuda.",
        "Desafíos auténticos que exigen síntesis y toma de postura.",
        "El docente como arquitecto de experiencias de alto desafío.",
      ],
    },
    systemicMechanism: {
      title: "El Ecosistema de la Comprensión Generativa",
      subtitle: "Las 4 dimensiones activadas en coherencia sistémica",
      steps: [
        {
          step: 1,
          label: "Pregunta Desafiante",
          description: "Un problema auténtico que no puede resolverse con una búsqueda rápida en Google o IA.",
        },
        {
          step: 2,
          label: "Espacio y Tiempo Adaptables",
          description: "Entornos y ritmos moldeables que permiten trabajo en parejas, prototipado y silencio analítico.",
        },
        {
          step: 3,
          label: "Andamiaje Epistémico",
          description: "Herramientas de pensamiento, modelado docente y criterios transparentes de excelencia.",
        },
        {
          step: 4,
          label: "Comprensión Transferible",
          description: "El estudiante demuestra dominio aplicando lo aprendido a una situación inédita.",
        },
      ],
      insight: "Cuando las cuatro dimensiones convergen con coherencia, la desmotivación se disuelve sin necesidad de premios ni castigos externos.",
    },
    designLaws: [
      "Las organizaciones no diseñan actividades; diseñan capacidades para el futuro.",
      "El andamiaje pedagógico solo es exitoso cuando contempla su propio desvanecimiento gradual.",
      "El espacio y el tiempo nunca son neutros: o expanden la mente o la domestican.",
    ],
    authorQuote: {
      text: "Cuando el problema deja de estar en las respuestas y se traslada a la arquitectura del entorno, la educación recupera su poder de transformar la existencia.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap5: {
    chapterId: "cap5",
    chapterNumber: "CAPÍTULO 5",
    title: "El Liderazgo como Disciplina de Diseño",
    subtitle: "Arquitectos antes que administradores",
    pages: "Páginas 98 - 121",
    accentColor: {
      badge: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300",
      border: "border-cyan-500/30",
      glow: "from-cyan-600/20 via-blue-600/10 to-transparent",
      gradient: "from-cyan-900/40 to-slate-900/60",
      text: "text-cyan-400",
    },
    coreThesis: {
      headline: "El liderazgo escolar no es apagar incendios; es diseñar las condiciones del ecosistema",
      summary: "Los directivos han sido formados como guardianes de reglamentos y gestores de crisis operativas. El verdadero liderazgo consiste en asumir la disciplina de un arquitecto: diseñar conversaciones estratégicas, cuidar la seguridad psicológica y tener la valentía de podar lo superfluo.",
      keyFact: "No se puede exigir innovación y valentía a un cuerpo docente que vive sometido a la vigilancia punitiva y a la asfixia de trámites estériles.",
    },
    pillars: [
      {
        title: "La Valentía de Podar",
        badge: "Higiene Institucional",
        iconName: "Scissors",
        points: [
          "Eliminar comités inútiles, informes duplicados y rituales vacíos que devoran la energía docente.",
          "La innovación no empieza por añadir más cosas a la agenda, sino por vaciar espacio para lo que importa.",
        ],
      },
      {
        title: "Seguridad Psicológica",
        badge: "Cultura de Confianza",
        iconName: "HeartHandshake",
        points: [
          "Nadie innova en un entorno donde cometer un error conduce al escarnio o al demérito profesional.",
          "Normalizar el error como dato de aprendizaje colectivo y base del rediseño iterativo.",
        ],
      },
      {
        title: "Liderazgo Distribuido",
        badge: "Redes de Agencia",
        iconName: "Network",
        points: [
          "Superar el mito del héroe directivo todopoderoso y generar capilaridad decisoria en los equipos.",
          "Construir capacidad instalada para que la excelencia sobreviva a la marcha del líder.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Administrador / Capataz",
      leftBadge: "Control y Vigilancia",
      leftItems: [
        "Vigilar el cumplimiento ciego del cronograma.",
        "Gestionar la urgencia inmediata y acumular actas.",
        "Monopolizar las decisiones y penalizar la discrepancia.",
        "Considerar que el silencio docente equivale a armonía.",
      ],
      rightTitle: "Líder Arquitecto",
      rightBadge: "Diseño y Habilitación",
      rightItems: [
        "Diseñar las condiciones para que el talento pedagógico florezca.",
        "Alinear las decisiones diarias con la visión a 10 años.",
        "Distribuir la autonomía y celebrar la discrepancia constructiva.",
        "Cultivar la seguridad psicológica y la curiosidad colectiva.",
      ],
    },
    systemicMechanism: {
      title: "El Círculo Virtuoso del Liderazgo Habilitador",
      subtitle: "De la sofocación burocrática a la vitalidad pedagógica",
      steps: [
        {
          step: 1,
          label: "Poda Burocrática",
          description: "El líder desmantela exigencias absurdas y protege el tiempo de planificación colegiada.",
        },
        {
          step: 2,
          label: "Seguridad para Explorar",
          description: "Los docentes ensayan nuevos formatos de clase sabiendo que el error será analizado, no castigado.",
        },
        {
          step: 3,
          label: "Resultados Visibles",
          description: "Los estudiantes responden con mayor autonomía, motivación genuina y pensamiento crítico.",
        },
        {
          step: 4,
          label: "Orgullo Profesional",
          description: "La comunidad recupera el sentido de misión y se convierte en referente de rediseño.",
        },
      ],
      insight: "El mayor legado de un líder no son los edificios que inaugura, sino la calidad de las conversaciones que deja instauradas en la institución.",
    },
    designLaws: [
      "No sobrecargues a tu equipo con novedades si antes no has tenido la valentía de podar lo obsoleto.",
      "La calidad de un liderazgo se mide por la autonomía que engendra, no por la dependencia que cultiva.",
      "Un directivo que no diseña condiciones se convierte inevitablemente en cómplice de la inercia del sistema.",
    ],
    authorQuote: {
      text: "El líder que necesitamos no es un administrador de inercias ni un inspector de rutinas; es un arquitecto de posibilidades humanas.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap6: {
    chapterId: "cap6",
    chapterNumber: "CAPÍTULO 6",
    title: "La Organización que Aprende de Sí Misma",
    subtitle: "Mecanismos de reflexión, rediseño y desarrollo de capacidades",
    pages: "Páginas 122 - 143",
    accentColor: {
      badge: "bg-purple-950/80 border-purple-500/40 text-purple-300",
      border: "border-purple-500/30",
      glow: "from-purple-600/20 via-violet-600/10 to-transparent",
      gradient: "from-purple-900/40 to-slate-900/60",
      text: "text-purple-400",
    },
    coreThesis: {
      headline: "Las organizaciones no aprenden por acumular años, sino por institucionalizar la reflexión",
      summary: "La experiencia reiterada sin un protocolo de análisis solo fosiliza los prejuicios del pasado. Una escuela verdaderamente viva es aquella que implementa el aprendizaje de bucle doble: no se conforma con corregir los errores sobre la marcha, sino que se atreve a cuestionar los supuestos de fondo sobre los que opera.",
      keyFact: "Tener 30 años de experiencia no es lo mismo que haber vivido un año repetido 30 veces con distintas caras.",
    },
    pillars: [
      {
        title: "Aprendizaje de Bucle Doble",
        badge: "Metacognición Institucional",
        iconName: "RotateCcw",
        points: [
          "Bucle Simple: '¿Cómo aprobamos a más alumnos este trimestre?' (ajuste de síntomas).",
          "Bucle Doble: '¿Qué concepción del saber estamos premiando al evaluar de este modo?' (rediseño de supuestos).",
        ],
      },
      {
        title: "Comunidades de Práctica",
        badge: "Inteligencia Colectiva",
        iconName: "Users",
        points: [
          "Superar la soledad del aula cerrada para abrir las puertas a la observación entre pares.",
          "Transformar el conocimiento tácito de los mejores docentes en patrimonio explícito de la institución.",
        ],
      },
      {
        title: "Memoria y Desaprendizaje",
        badge: "Evolución Continua",
        iconName: "FileCode",
        points: [
          "Documentar rigurosamente los experimentos pedagógicos para no tropezar con las mismas piedras.",
          "Desaprender con método aquellas certezas que sirvieron ayer pero hoy obstaculizan el crecimiento.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Organización Inercial",
      leftBadge: "Amnesia y Rutina",
      leftItems: [
        "Reaccionar a los problemas buscando parches inmediatos.",
        "Trabajo docente aislado tras puertas blindadas.",
        "Repetir las mismas actividades de hace dos décadas.",
        "Amnesia colectiva cada vez que cambia el equipo directivo.",
      ],
      rightTitle: "Organización que Aprende",
      rightBadge: "Investigación y Rediseño",
      rightItems: [
        "Analizar evidencias compartidas para cuestionar supuestos raíz.",
        "Intervisión pedagógica estructurada y retroalimentación franca.",
        "Iteración deliberada de prototipos de aprendizaje en el aula.",
        "Memoria institucional viva y accesible que capitaliza cada acierto.",
      ],
    },
    systemicMechanism: {
      title: "El Circuito del Aprendizaje Organizacional",
      subtitle: "De la práctica intuitiva a la capacidad institucional instalada",
      steps: [
        {
          step: 1,
          label: "Evidencia de Campo",
          description: "Recoger trabajos de estudiantes y grabaciones de clase sin carácter punitivo.",
        },
        {
          step: 2,
          label: "Reflexión Colegiada",
          description: "Equipos docentes analizan qué ocurrió realmente versus lo que se pretendía lograr.",
        },
        {
          step: 3,
          label: "Cuestionamiento Raíz",
          description: "Descubrir qué regla tácita del colegio impidió que el estudiante pensara con autonomía.",
        },
        {
          step: 4,
          label: "Prototipo de Rediseño",
          description: "Diseñar una nueva condición estructural y probarla con seguimiento sistemático.",
        },
      ],
      insight: "Aprender en equipo es la única ventaja competitiva y pedagógica que ninguna crisis ni cambio tecnológico puede arrebatar.",
    },
    designLaws: [
      "La experiencia no examinada con rigor metodológico no produce sabiduría; produce ceguera.",
      "El aprendizaje de bucle doble es la vacuna contra la obsolescencia y la complacencia institucional.",
      "Una escuela que no aprende de sus propios maestros no tiene autoridad moral para enseñar a sus alumnos.",
    ],
    authorQuote: {
      text: "Las organizaciones no aprenden porque acumulan experiencia. Aprenden cuando desarrollan una arquitectura capaz de transformar sistemáticamente la experiencia en comprensión.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },

  cap7: {
    chapterId: "cap7",
    chapterNumber: "CAPÍTULO 7",
    title: "Aprender a Observar antes de Diseñar",
    subtitle: "ENTREGA 1 — Diagnóstico y cartografía de la arquitectura existente",
    pages: "Páginas 144 - 165",
    accentColor: {
      badge: "bg-amber-950/80 border-amber-500/40 text-amber-300",
      border: "border-amber-500/30",
      glow: "from-amber-600/20 via-yellow-600/10 to-transparent",
      gradient: "from-amber-900/40 to-slate-900/60",
      text: "text-amber-400",
    },
    coreThesis: {
      headline: "Antes de proponer cualquier cambio, aprende a leer la realidad con ojos de arquitecto",
      summary: "El mayor error de los reformadores es llegar a una institución con soluciones prefabricadas antes de haber comprendido los equilibrios invisibles que sostienen el comportamiento actual. Observar con rigor etnográfico y sin juzgar es el primer deber sagrado del diseñador.",
      keyFact: "La distancia entre la 'teoría declarada' (los discursos del colegio) y la 'teoría en uso' (lo que realmente pasa un martes a las 11:00 AM) es donde habita la verdad del sistema.",
    },
    pillars: [
      {
        title: "Observación No Punitiva",
        badge: "Metodología Clínica",
        iconName: "ScanEye",
        points: [
          "Despojarse de la libreta de calificaciones para registrar hechos concretos, tiempos y movimientos.",
          "Escuchar el silencio de los pasillos y la gestualidad de los alumnos con mirada antropológica.",
        ],
      },
      {
        title: "Cartografía de Fricciones",
        badge: "Mapa del Ecosistema",
        iconName: "MapPin",
        points: [
          "Identificar en qué momentos exactos la energía del aula se derrumba o se dispersa.",
          "Mapear los cuellos de botella burocráticos que consumen las horas más valiosas de los docentes.",
        ],
      },
      {
        title: "Línea Base para la Entrega 1",
        badge: "Protocolo de Diagnóstico",
        iconName: "ClipboardCheck",
        points: [
          "Construir la matriz diagnóstica con datos fácticos antes de diseñar la primera intervención.",
          "Involucrar a docentes, directivos y estudiantes en la validación del mapa de su propia realidad.",
        ],
      },
    ],
    paradigmShift: {
      leftTitle: "Intervención Impulsiva",
      leftBadge: "Arrogancia del Experto",
      leftItems: [
        "Traer recetas mágicas importadas de otros contextos.",
        "Juzgar y culpar a los docentes por las fallas observadas.",
        "Confiar en encuestas superficiales de satisfacción.",
        "Cambiar las superficies para simular acción rápida.",
      ],
      rightTitle: "Mirada del Diseñador",
      rightBadge: "Humildad Epistémica",
      rightItems: [
        "Habitar el espacio y observar los flujos con respeto etnográfico.",
        "Comprender por qué la conducta actual es una respuesta lógica al entorno.",
        "Contrastar el discurso institucional con la evidencia empírica.",
        "Establecer una cartografía fidedigna antes de mover una sola pieza.",
      ],
    },
    systemicMechanism: {
      title: "El Protocolo de Diagnóstico Arquitectónico",
      subtitle: "Paso a paso para la confección de la ENTREGA 1",
      steps: [
        {
          step: 1,
          label: "Inmersión Desarmada",
          description: "Permanecer en el aula como observador neutral, sin juicios de valor ni intenciones de corregir.",
        },
        {
          step: 2,
          label: "Registro de Flujos",
          description: "Cronometrar quién habla, cuánto tiempo se dedica a la tarea y cuándo surge la distracción.",
        },
        {
          step: 3,
          label: "Detección de Paradojas",
          description: "Registrar las contradicciones flagrantes entre lo que el centro predica y lo que recompensa.",
        },
        {
          step: 4,
          label: "Matriz Cartográfica",
          description: "Sintetizar la arquitectura existente como trampolín indispensable para el rediseño futuro.",
        },
      ],
      insight: "No puedes transformar un territorio que te niegas a recorrer a pie con respeto y atención plena.",
    },
    designLaws: [
      "Antes de intervenir, observa; antes de construir, comprende; antes de transformar, aprende a leer.",
      "Toda solución apresurada es el germen de un problema más complejo en el futuro.",
      "La verdad de una escuela no se encuentra en su ideario pedagógico; se descubre en el rostro de sus estudiantes un día cualquiera.",
    ],
    authorQuote: {
      text: "Aprender a observar no es una técnica accesoria; es la disposición ética fundamental de quien respeta profundamente la vida de las organizaciones.",
      author: "Hilmer Castillo Bescanza — Arquitectura del Aprendizaje",
    },
  },
};
