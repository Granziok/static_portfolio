import { Project, SkillCategory, EducationItem, LanguageItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Santiago Olivera',
  tagline: 'Desarrollador Backend & Estudiante de Analista en Sistemas',
  shortBio:
    'Estudiante de Analista en Sistemas (IFES) y Tecnicatura en Sonido (ESMN). Especializado en arquitectura backend en Java/Spring Boot, modelos predictivos y visión computacional adaptativa, optimización de sistemas multiplataforma y procesamiento de señal digital.',
  fullBio: [
    'Soy un desarrollador y estudiante avanzado radicado en Neuquén Capital, apasionado por resolver problemas técnicos complejos desde la raíz: desde el diseño riguroso de la persistencia y la arquitectura de datos hasta la inferencia algorítmica y la estabilidad a nivel de sistema operativo.',
    'Cuento con una sólida formación en Analista en Sistemas en el IFES y en la Tecnicatura en Sonido en la ESMN, lo que me aporta una combinación única de disciplina analítica, pensamiento matemático y precisión técnica.',
    'Me destaco por mi proactividad, aprendizaje rápido y fuerte compromiso a la hora de estructurar software escalable, realizar análisis exploratorio riguroso en datasets masivos (300k+ registros) o diagnosticar conflictos de hardware y controladores a bajo nivel.'
  ],
  location: 'Neuquén Capital, Argentina',
  email: 'santyolivera843@gmail.com',
  secondaryEmail: 'santyoli4693@gmail.com ',
  phone: '+54 9 299 622 5217',
  phoneRaw: '2996225217',
  github: 'https://github.com/Granziok',
  linkedin: 'https://www.linkedin.com/in/santiago-olivera-dev',
  status: 'Disponible para incorporación a equipos de tecnología',
  stats: [
    { label: 'Registros Médicos Analizados', value: '300,000+' },
    { label: 'Stack Primario Backend', value: 'Java / Spring' },
    { label: 'Nivel de Inglés', value: 'B2 Intermedio' },
    { label: 'Carreras en Curso', value: '2 Formaciones' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'cardio-vision-predictive',
    title: 'Diseño de Datasets, Visión Computacional y Modelado Predictivo Adaptativo',
    shortTitle: 'Detección de Cardiopatías & YOLOv8',
    subtitle: 'Arquitectura de inferencia en tiempo real y ajuste de umbrales críticos para maximizar la sensibilidad en salud',
    category: 'ai',
    categoryLabel: 'IA & Visión Computacional',
    badge: 'Proyecto Crítico',
    featured: true,
    summary:
      'Sistema integral de análisis exploratorio sobre más de 300.000 registros clínicos médicos, integrando un modelo de detección acoplado a YOLOv8 con matriz de confusión adaptativa orientada a minimizar falsos negativos.',
    whatIDid: [
      'Análisis exploratorio de datos (EDA) y limpieza exhaustiva sobre un dataset médico crítico de 300.000 registros.',
      'Creación y calibración de visualizaciones estadísticas multidimensionales (Heatmaps de correlación clínica, histogramas de distribución de riesgo).',
      'Desarrollo e integración de un sistema avanzado de detección de objetos acoplado a un modelo de predicción dinámico con arquitectura YOLOv8 para inferencia.',
      'Diseño de una arquitectura capaz de adaptar su matriz de precisión (accuracy matrix) en tiempo real según los parámetros y criticidad del entorno de evaluación.',
      'Implementación de un filtro predictivo de cardiopatías con ajuste fino de pesos y umbrales diagnósticos (thresholds), priorizando la sensibilidad estadística frente a los falsos negativos.'
    ],
    whatIApplied: [
      'Arquitectura YOLOv8 para inferencia y detección de patrones visuales y espaciales.',
      'Modelado de datos, principios de diseño de sistemas y arquitectura de la información.',
      'Diseño y optimización de modelos de Machine Learning y algoritmos de clasificación supervisada.',
      'Análisis y manipulación dinámica de matrices de confusión, curvas ROC y métricas de sensibilidad (Recall/Sensitivity).',
      'Adaptación algorítmica contextual orientada a la toma de decisiones clínicas asistidas.'
    ],
    tags: ['YOLOv8', 'Python', 'Machine Learning', 'EDA', 'Dataset 300k', 'Matriz de Confusión', 'Salud'],
    highlights: [
      { label: 'Volumen del Dataset', value: '300.000 registros' },
      { label: 'Objetivo Clínico', value: 'Minimizar falsos negativos' },
      { label: 'Inferencia Visual', value: 'YOLOv8 Architecture' },
      { label: 'Matriz de Precisión', value: 'Adaptativa en tiempo real' }
    ],
    technicalDetails: {
      architecture:
        'Pipeline de 3 etapas: Ingesta y normalización de variables clínicas mediante scripts estadísticos -> Inferencia de características espaciales y segmentación con YOLOv8 -> Capa de decisión probabilística con threshold dinámico para alerta temprana.',
      keyChallenges:
        'En aplicaciones médicas críticas, un falso negativo (no detectar a un paciente enfermo) es incomparablemente más grave que un falso positivo. El desafío residió en calibrar los pesos del hiperespacio para forzar la alta sensibilidad estadística sin colapsar la especificidad del sistema.',
      outcome:
        'Prueba de concepto robusta con capacidad de adaptación dinámica de umbrales según el protocolo médico del centro asistencial.'
    }
  },
  {
    id: 'backend-concesionaria',
    title: 'Arquitectura Backend y Persistencia de Datos para Concesionaria',
    shortTitle: 'Sistema Backend Concesionaria',
    subtitle: 'Estructuración modular en Java, Spring Boot, Maven y persistencia de alto rendimiento con JDO y DataNucleus',
    category: 'backend',
    categoryLabel: 'Backend & Persistencia',
    badge: 'Arquitectura Java',
    featured: true,
    summary:
      'Diseño e implementación desde cero de la arquitectura backend para la gestión integral de stock, precios y operaciones comerciales en una concesionaria automotriz con interfaz web conectada.',
    whatIDid: [
      'Estructuración y diseño integral de la arquitectura backend desde cero para aplicaciones empresariales.',
      'Establecimiento de la capa de persistencia de datos orientada a objetos para la gestión eficiente y atómica de información.',
      'Implementación de funcionalidades completas para consulta de inventario, filtrado por características y cálculo de precios.',
      'Diseño de operaciones transaccionales CRUD robustas (crear, leer, actualizar y dar de baja registros vehiculares y transacciones).',
      'Conexión de la lógica del servidor con interfaces web interactivas (React, JavaScript, HTML, CSS) priorizando una experiencia ágil para los usuarios operadores.'
    ],
    whatIApplied: [
      'Java y ecosistema Spring Boot para orquestación de servicios y controladores RESTful.',
      'Automatización y gestión estricta de dependencias con Apache Maven.',
      'Persistencia de datos avanzada mediante JDO (Java Data Objects) y motor DataNucleus.',
      'Modelado de bases de datos relacionales y esquemas de entidades vinculadas.',
      'Integración full-stack con React, JavaScript modular, maquetación CSS responsive y buenas prácticas de interacción cliente-servidor.'
    ],
    tags: ['Java', 'Spring Boot', 'Maven', 'JDO', 'DataNucleus', 'CRUD', 'React', 'REST API'],
    highlights: [
      { label: 'Ecosistema', value: 'Java Enterprise / Spring' },
      { label: 'Persistencia', value: 'JDO + DataNucleus' },
      { label: 'Gestor de Builds', value: 'Apache Maven' },
      { label: 'Operaciones', value: 'CRUD Transaccional' }
    ],
    technicalDetails: {
      architecture:
        'Arquitectura en capas (Controller -> Service -> DAO/Repository -> ORM/JDO DataNucleus -> Database), garantizando desacoplamiento estricto, inyección de dependencias y facilidad para pruebas unitarias.',
      keyChallenges:
        'Configuración adecuada de la persistencia transparente con DataNucleus y sincronización de estados concurrentes de inventario vehicular en tiempo real.',
      outcome:
        'Plataforma sólida, escalable y con tiempos de respuesta inmediatos para consultas de stock y actualización de datos comerciales.'
    }
  },
  {
    id: 'multiplatform-systems',
    title: 'Arquitectura Multiplataforma y Troubleshooting de Sistemas',
    shortTitle: 'Sistemas & Troubleshooting',
    subtitle: 'Despliegue de entornos duales, optimización de hardware a nivel BIOS/firmware y estabilidad de drivers',
    category: 'systems',
    categoryLabel: 'Infraestructura & OS',
    badge: 'Infraestructura',
    featured: true,
    summary:
      'Configuración de estaciones de trabajo multiplataforma en equipamiento Dell y desktops PCBOX, arranque dual GRUB/BIOS, Linux Mint en SSDs externos y resolución de conflictos de drivers de red.',
    whatIDid: [
      'Configuración y optimización de entornos de trabajo y despliegue multiplataforma en hardware heterogéneo (laptops Dell y desktops PCBOX).',
      'Optimización de sistemas operativos según los límites y particularidades térmicas y de procesamiento de cada máquina.',
      'Resolución de conflictos complejos de compatibilidad a nivel de BIOS, Secure Boot y controladores de dispositivos.',
      'Implementación de esquemas de arranque dual robustos (GRUB/BIOS) para alternar entre sistemas según la carga de trabajo.',
      'Despliegue portable y seguro de Linux Mint en unidades SSD externas de alta velocidad.',
      'Instalación y configuración profunda de Windows 10 LTSC, depurando servicios innecesarios y optimizando el consumo de RAM.',
      'Troubleshooting avanzado de módulos Wi-Fi Realtek y dependencias de red a nivel de kernel.'
    ],
    whatIApplied: [
      'Particionado EFI, gestor de arranque GRUB y parametrización de BIOS/UEFI.',
      'Distribución Linux Mint (gestión de paquetes, módulos de kernel, optimización de I/O en SSDs externos).',
      'Windows 10 LTSC (Long-Term Servicing Channel) para entornos de máxima estabilidad sin telemetría intrusiva.',
      'Diagnóstico de hardware, análisis de trazas de eventos del sistema y compilación/actualización de drivers Realtek.',
      'Metodologías metódicas de descarte para troubleshooting de fallos de hardware y conectividad.'
    ],
    tags: ['Linux Mint', 'Windows 10 LTSC', 'GRUB / BIOS', 'Troubleshooting', 'Dell & PCBOX', 'Drivers Realtek', 'Hardware'],
    highlights: [
      { label: 'Sistemas Operativos', value: 'Linux Mint + Win10 LTSC' },
      { label: 'Esquema de Arranque', value: 'Dual Boot GRUB/BIOS' },
      { label: 'Portabilidad', value: 'External NVMe/SSD OS' },
      { label: 'Diagnóstico', value: 'Drivers & Kernel Level' }
    ],
    technicalDetails: {
      architecture:
        'Estructura de almacenamiento particionada con UEFI/ESP independiente para aislamiento de sistemas operativos, garantizando que actualizaciones de Windows no corrompan el sector de arranque de Linux.',
      keyChallenges:
        'Incompatibilidades en los controladores de tarjetas inalámbricas Realtek en distribuciones Linux modernas y mitigación de cuellos de botella de latencia de bus en SSD externos.',
      outcome:
        'Entornos de desarrollo estables, con tiempos de arranque ultrarrápidos y redundancia total ante contingencias de software.'
    }
  },
  {
    id: 'audio-workflow-scripting',
    title: 'Diseño de Flujos de Trabajo en Audio Digital y Scripting Paramétrico',
    shortTitle: 'Audio Digital & Scripting',
    subtitle: 'Automatización matemática no lineal mediante Fruity Formula Controller y ruteo avanzado en FL Studio',
    category: 'audio',
    categoryLabel: 'DSP & Audio',
    badge: 'Procesamiento de Señal',
    featured: false,
    summary:
      'Creación de cadenas de procesamiento de audio complejas y flujos de trabajo personalizados con programación matemática de comportamiento paramétrico y depuración de variables.',
    whatIDid: [
      'Diseño y estructuración de cadenas de procesamiento de audio modular complejas y flujos de trabajo personalizados.',
      'Programación del comportamiento paramétrico y automatización matemática de plugins de audio para lograr respuestas dinámicas.',
      'Desarrollo de algoritmos de control continuo en Fruity Formula Controller no soportados nativamente por las interfaces gráficas.',
      'Depuración rigurosa de errores de sintaxis en identificadores de variables matemáticas y temporales.',
      'Integración con herramientas avanzadas de modulación y ruteo interno (Patcher, Fruity Balance, Edison).'
    ],
    whatIApplied: [
      'FL Studio avanzado (Patcher modular, Fruity Balance para gestión de ganancia y Edison para manipulación espectral).',
      'Diseño de lógica matemática y curvas analíticas mediante Fruity Formula Controller.',
      'Conceptos de procesamiento de señal digital (DSP), relación señal-ruido, envolventes dinámicas y modulación.',
      'Depuración de expresiones matemáticas y optimización de ciclos de procesamiento para evitar sobrecargas de CPU.'
    ],
    tags: ['FL Studio', 'Fruity Formula Controller', 'Audio DSP', 'Patcher', 'Math Scripting', 'Edison', 'Automatización'],
    highlights: [
      { label: 'Entorno de Síntesis', value: 'FL Studio + Patcher' },
      { label: 'Lógica Algorítmica', value: 'Fruity Formula Controller' },
      { label: 'Tipo de Control', value: 'Curvas Matemáticas Custom' },
      { label: 'Área de Aplicación', value: 'Ingeniería de Sonido' }
    ],
    technicalDetails: {
      architecture:
        'Malla modular dentro de Patcher conectando fuentes de señal, generadores de fórmulas matemáticas y moduladores de filtros en tiempo real con latencia cero.',
      keyChallenges:
        'Resolver discontinuidades numéricas en funciones trigonométricas y polinómicas para evitar clics o artefactos acústicos no deseados durante la modulación de ganancia.',
      outcome:
        'Workflows de audio altamente expresivos y automatizados que agilizan el diseño sonoro con precisión matemática.'
    }
  },
  {
    id: 'server-administration-economy',
    title: 'Administración de Servidores y Diseño de Economía Virtual',
    shortTitle: 'Servidores & Economía Virtual',
    subtitle: 'Gestión de infraestructura dedicada, modding y balanceo de sistemas económicos para comunidades activas',
    category: 'infrastructure',
    categoryLabel: 'Infraestructura & Servidores',
    badge: 'Gestión de Sistemas',
    featured: false,
    summary:
      'Despliegue, gestión y mantenimiento de servidor dedicado multijugador con mods complejos, implementando desde cero un sistema económico virtual equilibrado para usuarios activos.',
    whatIDid: [
      'Despliegue, configuración técnica y mantenimiento continuo de un servidor dedicado modeado para videojuegos.',
      'Diseño e implementación desde cero de todo un sistema de economía interna del juego para los usuarios y comercio.',
      'Equilibrado matemático de tasas de generación monetaria (currency sinks y taps), evitando hiperinflación en el juego.',
      'Mantenimiento de bases de datos de perfiles de usuario, inventarios y registros de transacciones comerciales.',
      'Gestión operativa de la comunidad, soporte técnico a jugadores y resolución de incidentes de conectividad.'
    ],
    whatIApplied: [
      'Configuración de infraestructura de servidores dedicados y parámetros de rendimiento en red.',
      'Modding avanzado y personalización de scripts de servidor.',
      'Diseño de sistemas de economía virtual basados en principios microeconómicos de oferta y demanda.',
      'Gestión operativa de comunidades online, control de reglas de juego y mediación técnica.'
    ],
    tags: ['Servidores Dedicados', 'Modding', 'Economía Virtual', 'Networking', 'Bases de Datos', 'Comunidades'],
    highlights: [
      { label: 'Infraestructura', value: 'Servidor Dedicado' },
      { label: 'Sistema Diseñado', value: 'Economía Interna Completa' },
      { label: 'Balance de Juego', value: 'Prevención de Inflación' },
      { label: 'Soporte', value: 'Gestión de Comunidad' }
    ],
    technicalDetails: {
      architecture:
        'Arquitectura cliente-servidor con sincronización periódica de estados, snapshots automáticos de base de datos para recuperación ante caídas y reglas de firewall para mitigación de ataques.',
      keyChallenges:
        'Mantener el balance económico a largo plazo a medida que nuevos jugadores ingresaban y los jugadores veteranos acumulaban recursos.',
      outcome:
        'Servidor estable con alta retención de usuarios y una economía virtual dinámica y auto-sustentable.'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & Persistencia',
    iconName: 'Server',
    description: 'Construcción de arquitecturas de servidor robustas, estructuradas desde cero y orientadas a objetos.',
    skills: [
      {
        name: 'Java & Spring Boot',
        level: 'Avanzado',
        description: 'Estructuración modular de microservicios y monolitos, inyección de dependencias y controladores REST.',
        keyTools: ['Java 17/21', 'Spring Boot', 'Spring MVC']
      },
      {
        name: 'Persistencia con JDO & DataNucleus',
        level: 'Intermedio - Avanzado',
        description: 'Mapeo objeto-relacional, persistencia transparente, transacciones ACID y consultas optimizadas.',
        keyTools: ['JDO', 'DataNucleus', 'ORM']
      },
      {
        name: 'Automatización con Maven',
        level: 'Avanzado',
        description: 'Gestión de ciclos de vida de build, resolución de dependencias y empaquetado.',
        keyTools: ['Apache Maven', 'POM configuration']
      },
      {
        name: 'Bases de Datos & SQL',
        level: 'Intermedio - Avanzado',
        description: 'Modelado relacional, diseño de operaciones CRUD, normalización y consultas estructuradas.',
        keyTools: ['SQL', 'PostgreSQL / MySQL', 'Data Modeling']
      }
    ]
  },
  {
    id: 'ai-data',
    name: 'IA, Visión Computacional & Datos',
    iconName: 'Cpu',
    description: 'Análisis de datos a gran escala y modelos predictivos con foco en métricas críticas.',
    skills: [
      {
        name: 'YOLOv8 & Visión Computacional',
        level: 'Intermedio - Avanzado',
        description: 'Detección e inferencia de objetos en tiempo real, calibración y segmentación espacial.',
        keyTools: ['YOLOv8', 'OpenCV', 'Computer Vision']
      },
      {
        name: 'Modelado Predictivo & Clasificación',
        level: 'Intermedio - Avanzado',
        description: 'Entrenamiento y evaluación de algoritmos supervisados, optimización de hiperparámetros.',
        keyTools: ['Scikit-learn', 'Predictive Modeling', 'Python']
      },
      {
        name: 'EDA en Datasets Masivos (300k+)',
        level: 'Avanzado',
        description: 'Limpieza de valores nulos, normalización estadística y detección de anomalías en datos médicos.',
        keyTools: ['Pandas', 'NumPy', 'Data Cleansing']
      },
      {
        name: 'Evaluación de Matrices de Confusión',
        level: 'Avanzado',
        description: 'Manipulación dinámica de umbrales para priorizar sensibilidad y minimizar falsos negativos.',
        keyTools: ['Recall/Sensitivity', 'ROC-AUC', 'Heatmaps']
      }
    ]
  },
  {
    id: 'systems',
    name: 'Sistemas Operativos & Hardware',
    iconName: 'Terminal',
    description: 'Despliegue multiplataforma, optimización profunda de SO y solución de fallos de hardware.',
    skills: [
      {
        name: 'Linux Mint & Entornos UNIX',
        level: 'Avanzado',
        description: 'Despliegue booteable en SSDs externos, gestión de servicios, bash y optimización de I/O.',
        keyTools: ['Linux Mint', 'Bash', 'Systemd']
      },
      {
        name: 'Arranque Dual (GRUB / BIOS / UEFI)',
        level: 'Avanzado',
        description: 'Configuración de particionado GPT/MBR, variables EFI y resolución de Secure Boot.',
        keyTools: ['GRUB2', 'UEFI Settings', 'Disk Management']
      },
      {
        name: 'Windows 10 LTSC Tuning',
        level: 'Avanzado',
        description: 'Instalación limpia, deshabilitación de telemetría y optimización para hardware Dell / PCBOX.',
        keyTools: ['Windows LTSC', 'Performance Tuning']
      },
      {
        name: 'Troubleshooting de Drivers & Redes',
        level: 'Avanzado',
        description: 'Depuración a nivel de controlador (módulos Wi-Fi Realtek) y compatibilidad de hardware.',
        keyTools: ['Realtek Drivers', 'Hardware Diagnostic']
      }
    ]
  },
  {
    id: 'audio-servers',
    name: 'Audio Digital, Scripting & Servidores',
    iconName: 'Headphones',
    description: 'Lógica matemática aplicada al procesamiento de señal y gestión de infraestructura dedicada.',
    skills: [
      {
        name: 'FL Studio & Patcher Modular',
        level: 'Intermedio - Avanzado',
        description: 'Ruteo de audio complejo, diseño de cadenas sonoras personalizadas y modulación paramétrica.',
        keyTools: ['FL Studio', 'Patcher', 'Edison']
      },
      {
        name: 'Fruity Formula Controller (Scripting)',
        level: 'Básica',
        description: 'Automatización algorítmica y control por funciones matemáticas dinámicas.',
        keyTools: ['Mathematical Logic', 'Parameter Automation']
      },
      {
        name: 'Servidores Dedicados & Modding',
        level: 'Intermedio - Avanzado',
        description: 'Mantenimiento de infraestructura, balance de recursos de red y configs de servidores de juego.',
        keyTools: ['Dedicated Servers', 'Server Modding']
      },
      {
        name: 'Diseño de Economía Virtual',
        level: 'Intermedio',
        description: 'Equilibrado de transacciones, curvas de progresión de usuario y estabilidad de mercados.',
        keyTools: ['Virtual Economics', 'Community Operations']
      }
    ]
  },
  {
    id: 'frontend',
    name: 'Desarrollo Frontend & UI',
    iconName: 'Layout',
    description: 'Creación de interfaces web ágiles y funcionales para conectar con servicios backend.',
    skills: [
      {
        name: 'React & JavaScript Moderno',
        level: 'Intermedio',
        description: 'Componentes funcionales, manejo de estado reactivo y consumo de APIs REST.',
        keyTools: ['React', 'JavaScript (ES6+)', 'TypeScript']
      },
      {
        name: 'HTML5, CSS3 & Tailwind CSS',
        level: 'Intermedio - Avanzado',
        description: 'Maquetación responsive mobile-first, diseño limpio y layouts con alta accesibilidad.',
        keyTools: ['Tailwind CSS', 'CSS Grid & Flexbox']
      },
      {
        name: 'Integración y UX para Gestión de Datos',
        level: 'Intermedio - Avanzado',
        description: 'Interfaces interactivas pensadas para la exploración de precios, stock e información compleja.',
        keyTools: ['REST Integration', 'Data Tables', 'UX Flow']
      }
    ]
  }
];

export const SOFT_SKILLS = [
  {
    title: 'Responsabilidad y Compromiso',
    description: 'Cumplimiento estricto de entregables técnicos con atención al detalle y fiabilidad demostrada.'
  },
  {
    title: 'Trabajo en Equipo',
    description: 'Colaboración abierta, empatía técnica y capacidad para integrarse con distintas áreas del proyecto.'
  },
  {
    title: 'Proactividad',
    description: 'Iniciativa para detectar cuellos de botella y proponer mejoras arquitectónicas antes de que surjan fallos.'
  },
  {
    title: 'Aprendizaje Rápido y Adaptación',
    description: 'Capacidad comprobada para dominar nuevos stacks tecnológicos, herramientas y entornos de trabajo.'
  },
  {
    title: 'Buena Comunicación',
    description: 'Claridad para explicar decisiones técnicas, documentar procesos y presentar avances a pares o líderes.'
  },
  {
    title: 'Organización y Metodología',
    description: 'Estructuración metódica de tareas, priorización inteligente y trazabilidad en cada cambio de código.'
  },
  {
    title: 'Puntualidad y Cumplimiento',
    description: 'Respeto riguroso por plazos, calendarios de reuniones y sincronización con el equipo.'
  },
  {
    title: 'Dedicación y Motivación',
    description: 'Entusiasmo genuino por superarse continuamente y resolver problemas de ingeniería de alto impacto.'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'IFES',
    degree: 'Técnico en Analista en Sistemas',
    period: '2024 - Actualmente',
    status: 'En curso',
    description:
      'Formación integral en análisis de sistemas, modelado y arquitectura de software, bases de datos relacionales, metodologías ágiles y desarrollo backend orientado a proyectos empresariales.',
    competencies: [
      'Análisis y diseño de sistemas',
      'Estructuras de datos y algoritmos',
      'Arquitectura de persistencia',
      'Ingeniería de requerimientos'
    ]
  },
  {
    institution: 'ESMN (Escuela Superior de Música del Neuquén)',
    degree: 'Tecnicatura en Sonido',
    period: '2025 - Actualmente',
    status: 'En curso',
    description:
      'Estudios especializados en acústica, psicoacústica, procesamiento de señal digital, cadenas de grabación, análisis espectral y mezcla técnica.',
    competencies: [
      'Procesamiento de señal digital (DSP)',
      'Diseño acústico y ruteo de señal',
      'Automatización paramétrica',
      'Análisis de fase y dinámica'
    ]
  },
  {
    institution: 'Colegio AMEN',
    degree: 'Bachiller en Prácticas de Laboratorio',
    period: 'Estudio Secundario Completo - 2023',
    status: 'Graduado',
    description:
      'Orientación técnico-científica con fuerte énfasis en el método científico, toma de muestras, rigor en análisis de datos cuantitativos y documentación de ensayos experimentales.',
    competencies: [
      'Método científico experimental',
      'Control de variables y registros cuantitativos',
      'Disciplina analítica de laboratorio'
    ]
  }
];

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'Inglés',
    level: 'Nivel B2 (Intermedio)',
    levelDescription: 'Capacidad operativa sólida para contextos técnicos y de ingeniería',
    details: [
      'Comprensión fluida de textos técnicos especializados, RFCs y manuales de arquitectura.',
      'Lectura e interpretación precisa de documentación oficial en inglés (frameworks, librerías, papers científicos).',
      'Capacidad probada para seguir instrucciones escritas rigurosas y redactar documentación de código y commits.'
    ]
  },
  {
    language: 'Español',
    level: 'Nativo',
    levelDescription: 'Lengua materna con excelente capacidad de redacción y expresión oral',
    details: [
      'Comunicación asertiva para interacción con equipos multidisciplinarios y clientes.',
      'Redacción técnica impecable para manuales, especificaciones y presentaciones.'
    ]
  }
];
