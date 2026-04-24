// ═══════════════════════════════════════════════════════════════
// LevelUp! — Configuración por niño/a
// 
// Para adaptar la app a otro niño/a:
// 1. Copia esta carpeta completa
// 2. Modifica SOLO este archivo con los datos del niño/a
// 3. Sube a un nuevo repo en GitHub Pages
// ═══════════════════════════════════════════════════════════════

const CONFIG = {

  // ─── DATOS DEL NIÑO/A ───
  nombre: "Magda",
  curso: "4° básico",            // Nivel escolar actual
  edad: 9,

  // ─── MATERIAS HABILITADAS ───
  // true = aparece en el juego, false = no aparece
  materias: {
    matematicas: true,
    ciencias: true,
    historia: true,
    ingles: true,
    funcion_ejecutiva: true      // Secuenciación, storytelling, planificación, categorización
  },

  // ─── DIFICULTAD ADAPTATIVA ───
  // Las materias listadas aquí suben de nivel automáticamente
  // (3 correctas seguidas = sube, 2 incorrectas seguidas = baja)
  // Materias NO listadas se mantienen en nivel_4 fijo
  adaptativas: ["matematicas", "ingles"],

  // ─── BLOQUE DE JUEGO ───
  preguntas_por_bloque: 8,       // Cuántas preguntas por sesión
  tiempo_bloque_segundos: 300,   // 5 minutos
  tiempo_minimo_recompensa: 5,   // Segundos mínimos viendo la recompensa

  // ─── NIVELES Y XP ───
  niveles: [
    { name: "Noob", xp: 0 },
    { name: "Amateur", xp: 100 },
    { name: "Pro", xp: 300 },
    { name: "Máster", xp: 600 },
    { name: "Leyenda", xp: 1000 },
    { name: "Hacker Supremo", xp: 1500 }
  ],

  xp_correcta: 10,              // XP por respuesta correcta
  xp_bonus_racha: 5,            // XP extra si lleva racha en el bloque

  // ─── RECOMPENSAS HABILITADAS ───
  // Categorías de recompensas que aparecen (todas true por defecto)
  recompensas: {
    chistes: true,
    datos_bizarros: true,
    records_guinness: true,
    sabias_que_animales: true,
    que_preferirías: true,
    datos_gamer: true            // Referencias a Roblox, Minecraft, etc.
  },

  // ─── PANEL MAMÁ/PAPÁ ───
  pin: "1234",                   // PIN de acceso al panel de estadísticas

  // ─── PERSONALIZACIÓN VISUAL ───
  tema: {
    // Puedes cambiar los colores del tema
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
  // Puedes personalizar según los intereses del niño/a
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
    "¿List@ para subir de nivel?",
    "Tu cerebro está listo para explotar 🧠",
    "Hoy vas a romperla 💪",
    "Cada respuesta te acerca al siguiente nivel",
    "¡A craftear conocimiento! ⛏️"
  ]
};
