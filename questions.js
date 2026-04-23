// ═══════════════════════════════════════════
// LevelUp! — Banco de preguntas y recompensas
// Etapa 1: banco de prueba (~20 preguntas)
// Etapa 2: banco completo (2000+)
// ═══════════════════════════════════════════

const QUESTION_BANK = {

  matematicas: {
    nivel_4: [
      {
        id: "mat4_001", tipo: "seleccion",
        pregunta: "¿Cuánto es 345 + 278?",
        opciones: ["613", "623", "633", "523"],
        respuesta: "623",
        hint: "Suma las unidades primero: 5 + 8 = 13, llevas 1"
      },
      {
        id: "mat4_002", tipo: "seleccion",
        pregunta: "¿Cuánto es 7 × 8?",
        opciones: ["54", "56", "58", "48"],
        respuesta: "56",
        hint: "Piensa: 7 × 8 es lo mismo que 8 × 7"
      },
      {
        id: "mat4_003", tipo: "seleccion",
        pregunta: "¿Cuánto es 1.000 − 437?",
        opciones: ["573", "563", "663", "567"],
        respuesta: "563",
        hint: "Resta paso a paso desde las unidades"
      },
      {
        id: "mat4_004", tipo: "seleccion",
        pregunta: "¿Cuántos minutos hay en 2 horas y media?",
        opciones: ["120", "130", "150", "200"],
        respuesta: "150",
        hint: "1 hora = 60 minutos. Entonces 2 horas = 120, más media hora..."
      },
      {
        id: "mat4_005", tipo: "seleccion",
        pregunta: "Si tienes 3 cajas con 12 lápices cada una, ¿cuántos lápices tienes?",
        opciones: ["32", "36", "39", "42"],
        respuesta: "36",
        hint: "Multiplica: 3 × 12"
      }
    ],
    nivel_5: [
      {
        id: "mat5_001", tipo: "seleccion",
        pregunta: "¿Cuánto es 3/4 + 1/4?",
        opciones: ["4/8", "1", "4/4", "1 y 4/4"],
        respuesta: "1",
        hint: "Cuando el numerador y el denominador son iguales, el resultado es 1"
      },
      {
        id: "mat5_002", tipo: "seleccion",
        pregunta: "¿Cuál es el 25% de 200?",
        opciones: ["25", "50", "75", "100"],
        respuesta: "50",
        hint: "25% es lo mismo que 1/4. ¿Cuánto es 200 ÷ 4?"
      }
    ],
    nivel_6: [
      {
        id: "mat6_001", tipo: "seleccion",
        pregunta: "Si un cubo tiene aristas de 3 cm, ¿cuál es su volumen?",
        opciones: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        respuesta: "27 cm³",
        hint: "Volumen del cubo = lado × lado × lado"
      }
    ]
  },

  ciencias: {
    nivel_4: [
      {
        id: "cie4_001", tipo: "seleccion",
        pregunta: "¿Qué planeta del sistema solar está más cerca del Sol?",
        opciones: ["Venus", "Marte", "Mercurio", "Tierra"],
        respuesta: "Mercurio",
        hint: "Su nombre viene del dios mensajero romano, el más rápido"
      },
      {
        id: "cie4_002", tipo: "seleccion",
        pregunta: "¿Qué parte de la planta absorbe el agua del suelo?",
        opciones: ["Las hojas", "El tallo", "La raíz", "La flor"],
        respuesta: "La raíz",
        hint: "Está bajo la tierra..."
      },
      {
        id: "cie4_003", tipo: "seleccion",
        pregunta: "Cuando el hielo se derrite, ¿en qué estado queda el agua?",
        opciones: ["Sólido", "Líquido", "Gaseoso", "Plasma"],
        respuesta: "Líquido",
        hint: "El hielo es sólido, al derretirse cambia a..."
      },
      {
        id: "cie4_004", tipo: "seleccion",
        pregunta: "¿Qué órgano del cuerpo humano bombea la sangre?",
        opciones: ["Los pulmones", "El cerebro", "El corazón", "El hígado"],
        respuesta: "El corazón",
        hint: "Late todo el día sin parar"
      }
    ]
  },

  historia: {
    nivel_4: [
      {
        id: "his4_001", tipo: "seleccion",
        pregunta: "¿En qué continente está Chile?",
        opciones: ["Europa", "Asia", "América del Sur", "Oceanía"],
        respuesta: "América del Sur",
        hint: "Mira un mapa: estamos en la parte larga y flaquita del sur"
      },
      {
        id: "his4_002", tipo: "seleccion",
        pregunta: "¿Qué pueblo originario es el más numeroso de Chile?",
        opciones: ["Aymara", "Rapa Nui", "Mapuche", "Diaguita"],
        respuesta: "Mapuche",
        hint: "Su nombre significa 'gente de la tierra'"
      },
      {
        id: "his4_003", tipo: "seleccion",
        pregunta: "¿En qué año Chile declaró su independencia?",
        opciones: ["1810", "1818", "1820", "1800"],
        respuesta: "1818",
        hint: "La Primera Junta fue en 1810, pero la independencia oficial fue después"
      }
    ]
  },

  ingles: {
    nivel_4: [
      {
        id: "eng4_001", tipo: "seleccion",
        pregunta: "What color is the sky on a sunny day?",
        opciones: ["Red", "Blue", "Green", "Yellow"],
        respuesta: "Blue",
        hint: "Look up! ☀️"
      },
      {
        id: "eng4_002", tipo: "seleccion",
        pregunta: "How do you say 'gato' in English?",
        opciones: ["Dog", "Cat", "Bird", "Fish"],
        respuesta: "Cat",
        hint: "Meow! 🐱"
      },
      {
        id: "eng4_003", tipo: "seleccion",
        pregunta: "Complete: 'She ___ a student.'",
        opciones: ["am", "is", "are", "be"],
        respuesta: "is",
        hint: "I am, you are, she..."
      }
    ],
    nivel_5: [
      {
        id: "eng5_001", tipo: "seleccion",
        pregunta: "What is the past tense of 'go'?",
        opciones: ["Goed", "Gone", "Went", "Going"],
        respuesta: "Went",
        hint: "It's an irregular verb — it changes completely!"
      }
    ],
    nivel_6: [
      {
        id: "eng6_001", tipo: "seleccion",
        pregunta: "Choose the correct sentence:",
        opciones: [
          "She don't like pizza",
          "She doesn't likes pizza",
          "She doesn't like pizza",
          "She not like pizza"
        ],
        respuesta: "She doesn't like pizza",
        hint: "With he/she/it, use 'doesn't' + base verb"
      }
    ]
  },

  funcion_ejecutiva: {
    secuenciacion: [
      {
        id: "fe_sec_001", tipo: "ordenar",
        pregunta: "Ordena los pasos para preparar un cereal con leche:",
        items: ["Echar la leche", "Sacar el plato y la caja", "Comer", "Servir el cereal en el plato"],
        orden_correcto: [1, 3, 0, 2]
      },
      {
        id: "fe_sec_002", tipo: "ordenar",
        pregunta: "Ordena los pasos para enviar un mensaje de WhatsApp:",
        items: ["Tocar enviar", "Escribir el mensaje", "Abrir WhatsApp", "Elegir el contacto"],
        orden_correcto: [2, 3, 1, 0]
      }
    ],
    storytelling: [
      {
        id: "fe_sto_001", tipo: "storytelling",
        pregunta: "Inventa UNA oración usando estas 3 palabras:",
        palabras: ["dragón", "cocina", "morado"],
        validacion: "contiene_palabras"
      }
    ],
    planificacion: [
      {
        id: "fe_pla_001", tipo: "ordenar",
        pregunta: "En Minecraft, un creeper viene en 5 minutos. ¿Qué haces primero?",
        items: ["Hacer una puerta", "Construir paredes", "Elegir dónde construir", "Buscar materiales"],
        orden_correcto: [2, 3, 1, 0]
      }
    ],
    categorizacion: [
      {
        id: "fe_cat_001", tipo: "seleccion",
        pregunta: "¿Cuál de estos NO es un planeta?",
        opciones: ["Marte", "Venus", "Luna", "Júpiter"],
        respuesta: "Luna",
        hint: "Tres son planetas y uno es un satélite natural..."
      },
      {
        id: "fe_cat_002", tipo: "seleccion",
        pregunta: "¿Cuál de estos NO es un animal vertebrado?",
        opciones: ["Perro", "Araña", "Águila", "Salmón"],
        respuesta: "Araña",
        hint: "Los vertebrados tienen columna vertebral y huesos"
      }
    ]
  }
};

// ═══════════════════════════════════════════
// BANCO DE RECOMPENSAS
// ═══════════════════════════════════════════

const REWARD_BANK = {
  chistes: [
    { texto: "¿Qué le dijo un techo a otro techo?\n— ¡Techo de menos! 😄" },
    { texto: "¿Qué hace una abeja en el gimnasio?\n— ¡Zumba! 🐝" },
    { texto: "¿Cómo se despiden los químicos?\n— ¡Ácido un placer! 🧪" },
    { texto: "¿Qué le dijo la luna al sol?\n— ¡Tan grande y no te dejan salir de noche! 🌙" },
    { texto: "¿Por qué los pájaros no usan Facebook?\n— Porque ya tienen Twitter 🐦" }
  ],
  datos_bizarros: [
    { texto: "🪳 Las cucarachas pueden vivir UNA SEMANA sin cabeza. Mueren de hambre, no por falta de cabeza." },
    { texto: "🤢 Un humano produce suficiente saliva en su vida para llenar DOS piscinas olímpicas." },
    { texto: "🧠 Tu cerebro genera suficiente electricidad para encender una ampolleta pequeña." },
    { texto: "🦷 Los dientes de los tiburones se regeneran. ¡Pueden tener más de 30.000 en su vida!" },
    { texto: "💨 Los astronautas NO pueden eructar en el espacio. La gravedad cero lo impide." }
  ],
  records_guinness: [
    { texto: "🍕 La pizza más grande del mundo midió 1.300 metros cuadrados. Se hizo en Roma en 2023." },
    { texto: "👁️ El récord de no pestañear es de 1 hora y 5 minutos. ¡No lo intentes en casa!" },
    { texto: "🎮 El speedrun más rápido de Minecraft es de menos de 2 minutos. ¡Imposible!" },
    { texto: "🏗️ La torre de LEGO más alta del mundo tenía 35 metros. Usaron más de 500.000 piezas." }
  ],
  sabias_que_animales: [
    { texto: "🐙 Los pulpos tienen TRES corazones y su sangre es de color AZUL." },
    { texto: "🦎 Los axolotl pueden regenerar sus patas, su corazón e incluso partes de su cerebro." },
    { texto: "🐌 Los caracoles pueden dormir hasta 3 AÑOS seguidos. Ojalá tú no." },
    { texto: "🦑 El calamar gigante tiene los ojos más grandes del reino animal: del tamaño de un plato." },
    { texto: "🐬 Los delfines duermen con UN OJO ABIERTO. Literalmente." }
  ],
  que_preferirías: [
    { texto: "🤔 ¿Preferirías poder VOLAR pero solo a 1 km/h... o CORRER a 200 km/h pero solo hacia atrás?" },
    { texto: "🤔 ¿Preferirías hablar con los animales pero que nadie te crea... o ser invisible pero solo cuando estornudas?" },
    { texto: "🤔 ¿Preferirías tener un dragón de mascota pero del tamaño de un hámster... o un hámster del tamaño de un dragón?" },
    { texto: "🤔 ¿Preferirías que llovieran completos... o que las nubes fueran de algodón de azúcar?" }
  ],
  datos_gamer: [
    { texto: "🌍 Un mundo de Minecraft tiene 8 VECES la superficie de la Tierra. ¡Y tú quejándote de que no encuentras diamantes!" },
    { texto: "⛏️ El bloque de diamante en Minecraft es en realidad de color azul celeste, no azul oscuro como los diamantes reales." },
    { texto: "🎮 Roblox tiene más de 40 MILLONES de juegos creados por usuarios. ¿Cuántos has jugado tú?" },
    { texto: "💥 Un Creeper originalmente iba a ser un cerdo, pero Notch se equivocó programando y creó un monstruo." },
    { texto: "🏠 La primera casa que construyes en Minecraft siempre es un cubo de tierra. No lo niegues. Todos lo hicimos." }
  ]
};
