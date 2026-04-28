// ═══════════════════════════════════════════════════════════════
// LevelUp! — Configuración por niño/a
// Perfil: Magdalena, 9 años, 4° básico
// Informado por evaluación WISC-V (abril 2026)
// ═══════════════════════════════════════════════════════════════

const CONFIG = {

  nombre: "Magda",
  curso: "4° básico",
  edad: 9,

  // ─── MATERIAS HABILITADAS ───
  materias: {
    matematicas: true,
    ciencias: true,
    historia: true,
    ingles: true,
    funcion_ejecutiva: true,
    patrones_logica: true,        // NUEVO: razonamiento fluido puro
    comprension: true,            // NUEVO: comprensión lectora con inferencia
    visoespacial: true            // NUEVO: rotación, cubos, vistas
  },

  // ─── DIFICULTAD ADAPTATIVA ───
  // Materias que suben/bajan nivel automáticamente
  // Mate ahora tiene nivel_7 (olimpiadas) que se desbloquea tras dominar nivel_6
  adaptativas: ["matematicas", "ingles"],
  niveles_disponibles: {
    matematicas: ["nivel_4", "nivel_5", "nivel_6", "nivel_7"],
    ingles: ["nivel_4", "nivel_5", "nivel_6"]
  },

  // ─── BLOQUE DE JUEGO ───
  preguntas_por_bloque: 8,
  tiempo_bloque_segundos: 300,    // 5 minutos por defecto
  tiempo_bloque_corto: 180,       // 3 minutos para días de más fatiga
  tiempo_minimo_recompensa: 5,

  // ─── ESTRUCTURA PREDECIBLE (TEA) ───
  // Muestra un mini roadmap visual al inicio de cada bloque
  mostrar_roadmap: true,

  // ─── GESTIÓN DE FATIGA (TEA + TDAH) ───
  fatiga: {
    habilitada: true,
    // Si el tiempo promedio sube 40%+ vs el promedio del bloque, insertar pausa
    umbral_porcentaje: 40,
    // Cantidad mínima de preguntas antes de evaluar fatiga
    preguntas_minimas: 3,
    // No poner 2 preguntas verbales/alta carga seguidas
    intercalar_carga: true
  },

  // ─── LECTURA EN VOZ ALTA (Web Speech API) ───
  lecturaEnVoz: false,           // Toggle: true para activar lectura automática
  voz_idioma: "es-CL",          // Español chileno

  // ─── NIVELES Y XP ───
  niveles: [
    { name: "Noob", xp: 0 },
    { name: "Amateur", xp: 100 },
    { name: "Pro", xp: 300 },
    { name: "Máster", xp: 600 },
    { name: "Leyenda", xp: 1000 },
    { name: "Hacker Supremo", xp: 1500 }
  ],

  xp_correcta: 10,
  xp_bonus_racha: 5,

  // ─── RECOMPENSAS ───
  recompensas: {
    chistes: true,
    datos_bizarros: true,
    records_guinness: true,
    sabias_que_animales: true,
    que_preferirías: true,
    datos_gamer: true
  },

  // ─── PANEL ADULTO ───
  pin: "1234",

  // ─── MÉTRICAS COGNITIVAS EN PANEL (agrupación por habilidad) ───
  metricas_cognitivas: {
    razonamiento_logico: ["matematicas", "patrones_logica"],
    comprension_verbal: ["comprension", "funcion_ejecutiva"],
    memoria_trabajo: ["funcion_ejecutiva"],
    visoespacial: ["visoespacial"]
  },

  // ─── CARGA COGNITIVA POR MATERIA ───
  // "alta" = verbal/producción, "media" = curricular, "baja" = fortaleza/diversión
  // Se usa para intercalar y no poner 2 de carga alta seguidas
  carga_materia: {
    matematicas: "baja",         // Fortaleza — la activa
    patrones_logica: "baja",     // Fortaleza — la activa
    ciencias: "media",
    historia: "media",
    ingles: "media",
    comprension: "alta",         // Verbal — fatiga más rápido
    funcion_ejecutiva: "alta",   // Producción — fatiga más rápido
    visoespacial: "media"
  },

  // ─── PERSONALIZACIÓN VISUAL ───
  tema: {
    fondo: "#0f0e23",
    tarjeta: "#1a1940",
    acento_cyan: "#00e5ff",
    acento_verde: "#00ff87",
    acento_rosa: "#ff4da6",
    acento_amarillo: "#ffd700",
    acento_morado: "#b14dff",
    acento_naranja: "#ff8a00"
  },

  // ─── FRASES MOTIVACIONALES ───
  frases_correcta: [
    "¡GG! 🎮", "¡Crack! 💪", "¡Eso es! ✨", "¡Nailed it! 🎯",
    "¡Pro move! 🏆", "¡Ez! 😎", "¡Genial! 🌟", "¡Épico! ⚡"
  ],
  frases_incorrecta: [
    "¡Casi! La próxima la clavas 💪",
    "No pasa nada, sigue intentando 🌟",
    "¡Uff, por poquito! 😅",
    "Un error más cerca de aprender 🧠",
    "¡El siguiente es tuyo! 🎯"
  ],
  frases_saludo: [
    "¿Lista para subir de nivel?",
    "Tu cerebro está listo para explotar 🧠",
    "Hoy vas a romperla 💪",
    "Cada respuesta te acerca al siguiente nivel",
    "¡A craftear conocimiento! ⛏️"
  ]
};
