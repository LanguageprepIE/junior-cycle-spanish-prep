/* Work 08: teacher-authored practice. A/B/C are internal categories, not SEC levels. */
globalThis.JC_READING = [
  {
    "id": "rc01",
    "title": "Casa y hogar",
    "level": "A",
    "genre": "Texto personal",
    "topic": "Casa y hogar",
    "text": "Vivo en una casa pareada en un barrio tranquilo. En mi casa hay dos plantas. En la planta baja hay una cocina grande, un salón luminoso y un aseo pequeño. En la primera planta están los dormitorios y el cuarto de baño. Mi dormitorio es pequeño pero cómodo: tiene una cama, un armario y un escritorio. Los fines de semana ayudo en casa: paso la aspiradora, pongo la mesa y saco la basura. Me gusta mi casa porque está cerca del instituto y del centro. Además, hay un parque al lado para quedar con mis amigos. Este verano voy a pintar mi habitación y ordenar el trastero, porque ahora está hecho un desastre.",
    "questions": [
      {
        "prompt": "Name the three rooms on the ground floor.",
        "lang": "en",
        "parts": [
          {
            "label": "Kitchen",
            "points": 2
          },
          {
            "label": "Living room",
            "points": 1
          },
          {
            "label": "Toilet",
            "points": 1
          }
        ],
        "evidence": "En la planta baja hay una cocina grande, un salón luminoso y un aseo pequeño.",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Which two nearby places make the writer like the house?",
        "lang": "en",
        "parts": [
          {
            "label": "School",
            "points": 2
          },
          {
            "label": "Town centre",
            "points": 2
          }
        ],
        "evidence": "Me gusta mi casa porque está cerca del instituto y del centro.",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Which three chores does the writer do at weekends?",
        "lang": "en",
        "parts": [
          {
            "label": "Vacuum",
            "points": 2
          },
          {
            "label": "Set the table",
            "points": 1
          },
          {
            "label": "Take out the rubbish",
            "points": 1
          }
        ],
        "evidence": "paso la aspiradora, pongo la mesa y saco la basura",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What two things will the writer do this summer?",
        "lang": "en",
        "parts": [
          {
            "label": "Paint the bedroom",
            "points": 2
          },
          {
            "label": "Tidy the storage room",
            "points": 2
          }
        ],
        "evidence": "voy a pintar mi habitación y ordenar el trastero",
        "skill": "future",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-rc01.html",
    "maxPoints": 16,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "la planta baja",
        "ground floor"
      ],
      [
        "el aseo",
        "toilet"
      ],
      [
        "el trastero",
        "storage room"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "nadal",
    "title": "Rafael Nadal — Una vida dedicada al tenis",
    "level": "A",
    "genre": "Biografía",
    "topic": "Rafael Nadal — Una vida dedicada al tenis",
    "text": "Rafael Nadal es un extenista español muy conocido. Nació el 3 de junio de mil novecientos ochenta y seis en Manacor, una localidad de Mallorca, en las Islas Baleares. Desde pequeño le gustaba mucho el deporte. Empezó a jugar al tenis cuando era niño y su tío Toni fue uno de sus entrenadores. Nadal trabajó mucho para mejorar y llegó a ser uno de los mejores tenistas del mundo. Durante su carrera ganó veintidós títulos individuales de Grand Slam. Su torneo más famoso fue Roland Garros, en París, donde ganó catorce veces. También representó a España en competiciones internacionales. En dos mil veinticuatro anunció su retirada del tenis profesional. Para muchas personas, Nadal es un ejemplo de esfuerzo, disciplina y perseverancia.",
    "questions": [
      {
        "prompt": "In what year was Nadal born?",
        "lang": "en",
        "parts": [
          {
            "label": "1986",
            "points": 2
          }
        ],
        "evidence": "mil novecientos ochenta y seis",
        "skill": "number",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "In which town was Nadal born?",
        "lang": "en",
        "parts": [
          {
            "label": "Manacor",
            "points": 2
          }
        ],
        "evidence": "en Manacor",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Who was Toni, and what role did he have in Nadal’s tennis career?",
        "lang": "en",
        "parts": [
          {
            "label": "His uncle",
            "points": 2
          },
          {
            "label": "One of his coaches",
            "points": 2
          }
        ],
        "evidence": "su tío Toni fue uno de sus entrenadores",
        "skill": "relation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "How many Grand Slam singles titles did he win?",
        "lang": "en",
        "parts": [
          {
            "label": "22",
            "points": 2
          }
        ],
        "evidence": "veintidós títulos individuales de Grand Slam",
        "skill": "number",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "In which city is Roland Garros held?",
        "lang": "en",
        "parts": [
          {
            "label": "Paris",
            "points": 2
          }
        ],
        "evidence": "Roland Garros, en París",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "How many times did he win Roland Garros?",
        "lang": "en",
        "parts": [
          {
            "label": "14",
            "points": 2
          }
        ],
        "evidence": "ganó catorce veces",
        "skill": "number",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "In what year did he announce his retirement?",
        "lang": "en",
        "parts": [
          {
            "label": "2024",
            "points": 2
          }
        ],
        "evidence": "En dos mil veinticuatro anunció su retirada",
        "skill": "past",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "In this text, what does “extenista” tell us about Nadal?",
        "lang": "en",
        "parts": [
          {
            "label": "He used to be a tennis player / is a former tennis player.",
            "points": 3
          }
        ],
        "evidence": "Rafael Nadal es un extenista español",
        "skill": "context",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-nadal.html",
    "maxPoints": 19,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "nació",
        "was born"
      ],
      [
        "ganó",
        "won"
      ],
      [
        "la retirada",
        "retirement"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "new-9",
    "title": "Feria de Abril — Música y convivencia",
    "level": "A",
    "genre": "Texto informativo",
    "topic": "Feria de Abril — Música y convivencia",
    "text": "La Feria de Abril es una celebración tradicional de Sevilla. Aunque su nombre menciona abril, algunas ediciones pueden celebrarse en otras fechas de primavera. En el recinto ferial hay casetas, música, baile y comida. Muchas personas llevan trajes tradicionales, pero no es obligatorio vestirse de una manera especial. El flamenco y las sevillanas forman parte del ambiente. Las familias y los amigos se reúnen para conversar y pasar tiempo juntos. Algunas casetas son privadas y otras permiten la entrada al público. La feria tiene una historia relacionada con antiguos mercados, pero hoy es sobre todo una celebración social y cultural.",
    "questions": [
      {
        "prompt": "Which city holds the fair?",
        "lang": "en",
        "parts": [
          {
            "label": "Seville",
            "points": 2
          }
        ],
        "evidence": "celebración tradicional de Sevilla",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Is the fair always held in April? Explain.",
        "lang": "en",
        "parts": [
          {
            "label": "No",
            "points": 1
          },
          {
            "label": "Some editions take place at other times in spring",
            "points": 3
          }
        ],
        "evidence": "algunas ediciones pueden celebrarse en otras fechas de primavera",
        "skill": "contrast",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Is traditional dress compulsory?",
        "lang": "en",
        "parts": [
          {
            "label": "No",
            "points": 2
          }
        ],
        "evidence": "no es obligatorio vestirse de una manera especial",
        "skill": "negation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words.",
        "options": [
          "Yes, for everyone",
          "No",
          "Only for visitors"
        ],
        "correct": 1
      },
      {
        "prompt": "Explain how access differs between the casetas.",
        "lang": "en",
        "parts": [
          {
            "label": "Some are private",
            "points": 2
          },
          {
            "label": "Others allow the public in",
            "points": 2
          }
        ],
        "evidence": "Algunas casetas son privadas y otras permiten la entrada al público.",
        "skill": "contrast",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-new-9.html",
    "maxPoints": 12,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "el recinto ferial",
        "fairground"
      ],
      [
        "obligatorio",
        "compulsory"
      ],
      [
        "privado",
        "private"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "rc02",
    "title": "Instituto y exámenes",
    "level": "A",
    "genre": "Texto personal",
    "topic": "Instituto y exámenes",
    "text": "Voy a un instituto público en las afueras de Dublín. Es grande y bastante moderno. Empiezo las clases a las nueve y terminan a las cuatro. Me gusta el ambiente porque tengo buenos amigos y los profesores, en general, son simpáticos. Mis asignaturas favoritas son inglés, historia y español; no me gusta la física porque me resulta complicada. En el recreo suelo charlar con mis amigos o voy a la biblioteca para terminar los deberes. La semana pasada tuvimos muchos exámenes y fue estresante, pero estudié bien y creo que me salieron mejor de lo esperado. El viernes que viene vamos a ir de excursión al centro de Dublín y después voy a empezar un plan de estudio para los exámenes de Junior Cycle.",
    "questions": [
      {
        "prompt": "Where is the school? Give the city and its position within that area.",
        "lang": "en",
        "parts": [
          {
            "label": "Dublin",
            "points": 1
          },
          {
            "label": "On the outskirts",
            "points": 2
          }
        ],
        "evidence": "en las afueras de Dublín",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "When do classes start and finish?",
        "lang": "en",
        "parts": [
          {
            "label": "9 a.m.",
            "points": 2
          },
          {
            "label": "4 p.m.",
            "points": 2
          }
        ],
        "evidence": "Empiezo las clases a las nueve y terminan a las cuatro.",
        "skill": "time",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Why does the writer dislike physics?",
        "lang": "en",
        "parts": [
          {
            "label": "The writer finds it difficult",
            "points": 3
          }
        ],
        "evidence": "no me gusta la física porque me resulta complicada",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What happened last week, and how did the writer feel?",
        "lang": "en",
        "parts": [
          {
            "label": "There were many exams",
            "points": 2
          },
          {
            "label": "It was stressful",
            "points": 2
          }
        ],
        "evidence": "La semana pasada tuvimos muchos exámenes y fue estresante",
        "skill": "past",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-rc02.html",
    "maxPoints": 14,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "las afueras",
        "outskirts"
      ],
      [
        "el recreo",
        "break"
      ],
      [
        "estresante",
        "stressful"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "rc05",
    "title": "Viajes y vacaciones",
    "level": "B",
    "genre": "Texto personal",
    "topic": "Viajes y vacaciones",
    "text": "El verano pasado viajé a España con mi familia. Pasamos una semana en Málaga y otra en Cádiz. Me encantó pasear por el centro histórico y probar la comida típica. Un día hicimos una excursión en barco y otro día visitamos un castillo con unas vistas increíbles. El tiempo fue muy bueno casi todos los días, aunque una tarde llovió un poco. Conocí a gente de mi edad y practicamos español. Este verano voy a volver a España porque quiero mejorar más el idioma y visitar a unos amigos que viven en Sevilla. Si puedo ahorrar dinero, también me gustaría hacer un curso de surf en la costa.",
    "questions": [
      {
        "prompt": "Which two cities did the writer stay in?",
        "lang": "en",
        "parts": [
          {
            "label": "Málaga",
            "points": 2
          },
          {
            "label": "Cádiz",
            "points": 2
          }
        ],
        "evidence": "Pasamos una semana en Málaga y otra en Cádiz.",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Name the two excursions or visits.",
        "lang": "en",
        "parts": [
          {
            "label": "A boat trip",
            "points": 2
          },
          {
            "label": "A castle visit",
            "points": 2
          }
        ],
        "evidence": "Un día hicimos una excursión en barco y otro día visitamos un castillo",
        "skill": "past",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Was the weather good all the time? Give the exception.",
        "lang": "en",
        "parts": [
          {
            "label": "No",
            "points": 1
          },
          {
            "label": "It rained one afternoon",
            "points": 3
          }
        ],
        "evidence": "aunque una tarde llovió un poco",
        "skill": "contrast",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What does taking a surfing course depend on?",
        "lang": "en",
        "parts": [
          {
            "label": "Being able to save money",
            "points": 3
          }
        ],
        "evidence": "Si puedo ahorrar dinero, también me gustaría hacer un curso de surf",
        "skill": "condition",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-rc05.html",
    "maxPoints": 15,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "el verano pasado",
        "last summer"
      ],
      [
        "ahorrar",
        "save money"
      ],
      [
        "aunque",
        "although"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "new-6",
    "title": "Carnaval de Cádiz — Humor y música",
    "level": "B",
    "genre": "Texto informativo",
    "topic": "Carnaval de Cádiz — Humor y música",
    "text": "En Cádiz, el Carnaval es una fiesta muy importante. Durante varias semanas, grupos de personas preparan canciones y disfraces. Algunas agrupaciones cantan en teatros y otras actúan en las calles. Las letras suelen hablar de la vida diaria, las noticias y los problemas de la sociedad, muchas veces con humor. Las chirigotas son especialmente conocidas por sus canciones divertidas. También hay comparsas, que pueden tratar temas más emotivos. La fiesta atrae a visitantes, pero tiene un significado especial para muchos gaditanos: es una oportunidad para compartir música, creatividad y opiniones. Para disfrutar del Carnaval no hace falta conocer todas las referencias; basta con escuchar y observar.",
    "questions": [
      {
        "prompt": "What two things do groups prepare?",
        "lang": "en",
        "parts": [
          {
            "label": "Songs",
            "points": 2
          },
          {
            "label": "Costumes",
            "points": 2
          }
        ],
        "evidence": "grupos de personas preparan canciones y disfraces",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Where do groups perform? Give two places.",
        "lang": "en",
        "parts": [
          {
            "label": "Theatres",
            "points": 2
          },
          {
            "label": "Streets",
            "points": 2
          }
        ],
        "evidence": "Algunas agrupaciones cantan en teatros y otras actúan en las calles.",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "How does the text contrast chirigotas and comparsas?",
        "lang": "en",
        "parts": [
          {
            "label": "Chirigotas are known for funny songs",
            "points": 2
          },
          {
            "label": "Comparsas can deal with more emotional themes",
            "points": 2
          }
        ],
        "evidence": "Las chirigotas son especialmente conocidas por sus canciones divertidas. También hay comparsas, que pueden tratar temas más emotivos.",
        "skill": "contrast",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What three things does the festival let people share?",
        "lang": "en",
        "parts": [
          {
            "label": "Music",
            "points": 2
          },
          {
            "label": "Creativity",
            "points": 1
          },
          {
            "label": "Opinions",
            "points": 1
          }
        ],
        "evidence": "compartir música, creatividad y opiniones",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-new-6.html",
    "maxPoints": 16,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "los disfraces",
        "costumes"
      ],
      [
        "las letras",
        "lyrics"
      ],
      [
        "emotivo",
        "emotional / moving"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "new-13",
    "title": "Deporte femenino — Más visibilidad",
    "level": "B",
    "genre": "Texto informativo",
    "topic": "Deporte femenino — Más visibilidad",
    "text": "En los últimos años, el deporte femenino ha recibido más atención en muchos medios de comunicación. Las competiciones de fútbol, baloncesto y tenis atraen a espectadores de distintas edades. Esta visibilidad puede animar a niñas y adolescentes a practicar deporte. Sin embargo, las deportistas todavía señalan diferencias en recursos, instalaciones y oportunidades profesionales. Los clubes, los colegios y las familias pueden ayudar ofreciendo espacios seguros y actividades accesibles. El deporte no solo mejora la condición física: también permite aprender a colaborar y aceptar resultados difíciles. Para comprender el progreso es importante escuchar las experiencias de las propias deportistas.",
    "questions": [
      {
        "prompt": "Which three sports are mentioned?",
        "lang": "en",
        "parts": [
          {
            "label": "Football",
            "points": 2
          },
          {
            "label": "Basketball",
            "points": 1
          },
          {
            "label": "Tennis",
            "points": 1
          }
        ],
        "evidence": "Las competiciones de fútbol, baloncesto y tenis",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What may encourage girls and teenagers to take up sport?",
        "lang": "en",
        "parts": [
          {
            "label": "Greater visibility of women’s sport",
            "points": 3
          }
        ],
        "evidence": "Esta visibilidad puede animar a niñas y adolescentes a practicar deporte.",
        "skill": "relation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "In which three areas do differences remain?",
        "lang": "en",
        "parts": [
          {
            "label": "Resources",
            "points": 2
          },
          {
            "label": "Facilities",
            "points": 1
          },
          {
            "label": "Professional opportunities",
            "points": 1
          }
        ],
        "evidence": "diferencias en recursos, instalaciones y oportunidades profesionales",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Besides fitness, what two things can sport teach?",
        "lang": "en",
        "parts": [
          {
            "label": "Cooperation",
            "points": 2
          },
          {
            "label": "Accepting difficult results",
            "points": 2
          }
        ],
        "evidence": "aprender a colaborar y aceptar resultados difíciles",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-new-13.html",
    "maxPoints": 15,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "los recursos",
        "resources"
      ],
      [
        "las instalaciones",
        "facilities"
      ],
      [
        "animar a",
        "encourage"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "new-14",
    "title": "Turismo sostenible — Viajar con respeto",
    "level": "B",
    "genre": "Texto informativo",
    "topic": "Turismo sostenible — Viajar con respeto",
    "text": "Viajar permite conocer lugares, comidas y culturas diferentes. Sin embargo, cuando llegan demasiados visitantes al mismo tiempo, algunas ciudades tienen problemas de tráfico, ruido y residuos. El turismo sostenible intenta reducir estos efectos negativos. Los viajeros pueden usar transporte público, respetar los espacios naturales y apoyar negocios locales. También es útil visitar lugares menos conocidos y viajar fuera de las fechas de mayor demanda. Los gobiernos y las empresas tienen responsabilidades importantes: deben cuidar los servicios públicos y las condiciones de trabajo. La idea no es dejar de viajar, sino buscar un equilibrio entre las necesidades de los visitantes y la vida de las personas residentes.",
    "questions": [
      {
        "prompt": "What three problems can too many visitors cause?",
        "lang": "en",
        "parts": [
          {
            "label": "Traffic",
            "points": 2
          },
          {
            "label": "Noise",
            "points": 1
          },
          {
            "label": "Waste / rubbish",
            "points": 1
          }
        ],
        "evidence": "problemas de tráfico, ruido y residuos",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Which three actions can travellers take?",
        "lang": "en",
        "parts": [
          {
            "label": "Use public transport",
            "points": 2
          },
          {
            "label": "Respect natural areas",
            "points": 1
          },
          {
            "label": "Support local businesses",
            "points": 1
          }
        ],
        "evidence": "usar transporte público, respetar los espacios naturales y apoyar negocios locales",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "When does the text suggest travelling to reduce pressure?",
        "lang": "en",
        "parts": [
          {
            "label": "Outside peak dates / outside the busiest periods",
            "points": 3
          }
        ],
        "evidence": "viajar fuera de las fechas de mayor demanda",
        "skill": "context",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Whose needs should be balanced?",
        "lang": "en",
        "parts": [
          {
            "label": "Visitors’ needs",
            "points": 2
          },
          {
            "label": "The lives of local residents",
            "points": 2
          }
        ],
        "evidence": "un equilibrio entre las necesidades de los visitantes y la vida de las personas residentes",
        "skill": "relation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "retained",
    "sourcePath": "pages/reading/guided-new-14.html",
    "maxPoints": 15,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "los residuos",
        "waste"
      ],
      [
        "los negocios locales",
        "local businesses"
      ],
      [
        "las fechas de mayor demanda",
        "peak dates"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "r08-messages",
    "title": "Cambio de planes",
    "level": "A",
    "genre": "Mensajes",
    "topic": "Ocio, personas y horarios",
    "text": "Clara · 15:10: ¿Quedamos a las cinco en la piscina?\nDani · 15:12: Hoy está cerrada por obras. Podemos ir a la biblioteca a preparar el trabajo de ciencias.\nClara · 15:14: Vale. Mi hermana sale del dentista a las cinco y cuarto. Voy a recogerla antes.\nDani · 15:16: Entonces nos vemos a las seis en la entrada de la biblioteca, enfrente del parque.\nClara · 15:18: Perfecto. Llevaré mi portátil, pero no tengo el libro.\nDani · 15:20: Yo llevo el libro y los apuntes.",
    "questions": [
      {
        "prompt": "Why can they not go swimming?",
        "lang": "en",
        "parts": [
          {
            "label": "The pool is closed for building work",
            "points": 3
          }
        ],
        "evidence": "Hoy está cerrada por obras.",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Who is going to the dentist?",
        "lang": "en",
        "parts": [
          {
            "label": "Clara’s sister",
            "points": 2
          }
        ],
        "evidence": "Mi hermana sale del dentista",
        "skill": "person",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words.",
        "options": [
          "Clara",
          "Dani",
          "Clara’s sister"
        ],
        "correct": 2
      },
      {
        "prompt": "Give the final meeting time and place.",
        "lang": "en",
        "parts": [
          {
            "label": "6 p.m.",
            "points": 2
          },
          {
            "label": "At the library entrance",
            "points": 2
          }
        ],
        "evidence": "nos vemos a las seis en la entrada de la biblioteca",
        "skill": "relation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Where is the library in relation to the park?",
        "lang": "en",
        "parts": [
          {
            "label": "Opposite the park",
            "points": 3
          }
        ],
        "evidence": "enfrente del parque",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What two things will Dani bring?",
        "lang": "en",
        "parts": [
          {
            "label": "The book",
            "points": 2
          },
          {
            "label": "The notes",
            "points": 2
          }
        ],
        "evidence": "Yo llevo el libro y los apuntes.",
        "skill": "future",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 16,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "por obras",
        "for building work"
      ],
      [
        "recoger",
        "collect / pick up"
      ],
      [
        "enfrente de",
        "opposite"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "r08-school-poster",
    "title": "Taller de teatro",
    "level": "A",
    "genre": "Cartel",
    "topic": "Instituto e invitaciones",
    "text": "INSTITUTO LAS OLAS — TALLER DE TEATRO\nPara estudiantes de catorce a dieciséis años.\nTodos los miércoles de noviembre, de cuatro y media a seis de la tarde.\nLugar: salón de actos. Entrada por el patio, no por la puerta principal.\nPrecio: tres euros por sesión. La primera sesión es gratuita.\nTrae ropa cómoda y una botella de agua.\nApúntate en la secretaría antes del treinta de octubre.",
    "questions": [
      {
        "prompt": "¿Para qué edades es el taller?",
        "lang": "es",
        "parts": [
          {
            "label": "De catorce a dieciséis años.",
            "points": 3
          }
        ],
        "evidence": "de catorce a dieciséis años",
        "skill": "number",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "¿Qué día de la semana es y a qué hora empieza?",
        "lang": "es",
        "parts": [
          {
            "label": "Los miércoles",
            "points": 2
          },
          {
            "label": "A las cuatro y media de la tarde / 16:30",
            "points": 3
          }
        ],
        "evidence": "Todos los miércoles de noviembre, de cuatro y media a seis de la tarde.",
        "skill": "time",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "¿Por dónde se entra?",
        "lang": "es",
        "parts": [
          {
            "label": "Por el patio.",
            "points": 3
          }
        ],
        "evidence": "Entrada por el patio",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "¿Cuánto cuesta una sesión normal y cuánto cuesta la primera?",
        "lang": "es",
        "parts": [
          {
            "label": "Tres euros",
            "points": 3
          },
          {
            "label": "La primera es gratuita / cero euros",
            "points": 2
          }
        ],
        "evidence": "Precio: tres euros por sesión. La primera sesión es gratuita.",
        "skill": "price",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "¿Qué dos cosas debes llevar?",
        "lang": "es",
        "parts": [
          {
            "label": "Ropa cómoda",
            "points": 2
          },
          {
            "label": "Una botella de agua",
            "points": 2
          }
        ],
        "evidence": "Trae ropa cómoda y una botella de agua.",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 20,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "el salón de actos",
        "assembly hall"
      ],
      [
        "gratuito",
        "free of charge"
      ],
      [
        "apuntarse",
        "sign up"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "r08-menu",
    "title": "Comer en La Plaza",
    "level": "A",
    "genre": "Menú",
    "topic": "Comida, ingredientes y precios",
    "text": "CAFETERÍA LA PLAZA — MENÚ DEL DÍA: 12,50 €\nDisponible de lunes a viernes, de 13:00 a 15:30.\nElige un primero: sopa de verduras o ensalada de tomate y atún.\nElige un segundo: pollo asado con patatas o tortilla de espinacas.\nPostre: fruta o yogur. Incluye pan y agua; otras bebidas se pagan aparte.\nBocadillo de queso: 4 €. Zumo de naranja: 2,50 €.\nLos sábados no ofrecemos menú del día.",
    "questions": [
      {
        "prompt": "How much does the set menu cost?",
        "lang": "en",
        "parts": [
          {
            "label": "€12.50",
            "points": 2
          }
        ],
        "evidence": "MENÚ DEL DÍA: 12,50 €",
        "skill": "price",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words.",
        "options": [
          "€4",
          "€12.50",
          "€15.30"
        ],
        "correct": 1
      },
      {
        "prompt": "Name the two ingredients in the salad.",
        "lang": "en",
        "parts": [
          {
            "label": "Tomato",
            "points": 2
          },
          {
            "label": "Tuna",
            "points": 2
          }
        ],
        "evidence": "ensalada de tomate y atún",
        "skill": "food",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Which main course contains spinach?",
        "lang": "en",
        "parts": [
          {
            "label": "The omelette",
            "points": 2
          }
        ],
        "evidence": "tortilla de espinacas",
        "skill": "food",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What two items are included besides the courses and dessert?",
        "lang": "en",
        "parts": [
          {
            "label": "Bread",
            "points": 2
          },
          {
            "label": "Water",
            "points": 2
          }
        ],
        "evidence": "Incluye pan y agua",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Can you order the set menu on Saturday?",
        "lang": "en",
        "parts": [
          {
            "label": "No",
            "points": 2
          }
        ],
        "evidence": "Los sábados no ofrecemos menú del día.",
        "skill": "negation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words.",
        "options": [
          "Yes",
          "No",
          "Only before 1 p.m."
        ],
        "correct": 1
      }
    ],
    "origin": "original",
    "maxPoints": 14,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "el primero",
        "starter / first course"
      ],
      [
        "el segundo",
        "main course"
      ],
      [
        "se pagan aparte",
        "are paid for separately"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "r08-offers",
    "title": "Una compra para la excursión",
    "level": "B",
    "genre": "Oferta comercial",
    "topic": "Ropa, tallas y condiciones",
    "text": "DEPORTES EL PUENTE — OFERTAS DEL 3 AL 10 DE MAYO\nChaqueta impermeable azul: antes 40 €, ahora 30 €. Tallas S, M y L.\nZapatillas negras: 25 €. Números del 36 al 41. No hay zapatillas blancas en oferta.\nMochila roja con dos bolsillos: 18 €. La botella de agua no está incluida.\nLas ofertas son válidas solo en la tienda del centro, no en la web.\nSe puede cambiar la talla durante los quince días siguientes a la compra, con el recibo.\nHorario: de lunes a sábado, de 10:00 a 20:00.",
    "questions": [
      {
        "prompt": "Give the colour and current price of the waterproof jacket.",
        "lang": "en",
        "parts": [
          {
            "label": "Blue",
            "points": 2
          },
          {
            "label": "€30",
            "points": 2
          }
        ],
        "evidence": "Chaqueta impermeable azul: antes 40 €, ahora 30 €.",
        "skill": "price",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Which shoe sizes are available?",
        "lang": "en",
        "parts": [
          {
            "label": "36 to 41",
            "points": 3
          }
        ],
        "evidence": "Números del 36 al 41.",
        "skill": "number",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Is a water bottle included with the rucksack?",
        "lang": "en",
        "parts": [
          {
            "label": "No",
            "points": 2
          }
        ],
        "evidence": "La botella de agua no está incluida.",
        "skill": "negation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words.",
        "options": [
          "Yes",
          "No",
          "Only online"
        ],
        "correct": 1
      },
      {
        "prompt": "Where can you get these special offers?",
        "lang": "en",
        "parts": [
          {
            "label": "Only in the town-centre shop",
            "points": 3
          }
        ],
        "evidence": "solo en la tienda del centro, no en la web",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Give the time limit and the document needed to change size.",
        "lang": "en",
        "parts": [
          {
            "label": "Within fifteen days after purchase",
            "points": 2
          },
          {
            "label": "The receipt",
            "points": 2
          }
        ],
        "evidence": "durante los quince días siguientes a la compra, con el recibo.",
        "skill": "condition",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 16,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "impermeable",
        "waterproof"
      ],
      [
        "la talla",
        "clothing size"
      ],
      [
        "el recibo",
        "receipt"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "r08-timetable",
    "title": "Sábado en el centro juvenil",
    "level": "B",
    "genre": "Programa",
    "topic": "Actividades y horarios",
    "text": "CENTRO JUVENIL — PROGRAMA DEL SÁBADO\n09:30–10:30 | Cocina: prepara un desayuno saludable | Aula 2 | 4 €\n10:45–12:00 | Baloncesto para principiantes | Pabellón | Gratis\n12:15–13:00 | Taller de fotografía | Aula 3 | 3 €\n16:00–17:30 | Cine en español | Salón de actos | 2 €\nPara cocina y fotografía hay que reservar antes del viernes a las 18:00.\nSi llueve, el programa no cambia: todas las actividades son en el interior.\nTrae tu propia cámara para fotografía. El desayuno está incluido en el taller de cocina.",
    "questions": [
      {
        "prompt": "When does basketball begin, and where is it?",
        "lang": "en",
        "parts": [
          {
            "label": "10:45 a.m.",
            "points": 2
          },
          {
            "label": "In the sports hall",
            "points": 2
          }
        ],
        "evidence": "10:45–12:00 | Baloncesto para principiantes | Pabellón | Gratis",
        "skill": "time",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Which two activities require booking?",
        "lang": "en",
        "parts": [
          {
            "label": "Cooking",
            "points": 2
          },
          {
            "label": "Photography",
            "points": 2
          }
        ],
        "evidence": "Para cocina y fotografía hay que reservar",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Give the booking deadline: day and time.",
        "lang": "en",
        "parts": [
          {
            "label": "Friday",
            "points": 2
          },
          {
            "label": "6 p.m.",
            "points": 2
          }
        ],
        "evidence": "antes del viernes a las 18:00",
        "skill": "time",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Why will rain not change the programme?",
        "lang": "en",
        "parts": [
          {
            "label": "All activities are indoors",
            "points": 3
          }
        ],
        "evidence": "todas las actividades son en el interior",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What must participants bring for photography?",
        "lang": "en",
        "parts": [
          {
            "label": "Their own camera",
            "points": 3
          }
        ],
        "evidence": "Trae tu propia cámara para fotografía.",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 18,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "el pabellón",
        "sports hall"
      ],
      [
        "reservar",
        "book"
      ],
      [
        "propio",
        "one’s own"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "r08-email",
    "title": "Una semana de intercambio",
    "level": "B",
    "genre": "Correo electrónico",
    "topic": "Familia, transporte e instituto",
    "text": "De: Lucía\nPara: Erin\nAsunto: Tu llegada\n¡Hola, Erin!\nMi padre te recogerá en el aeropuerto el domingo. Yo no puedo ir porque tengo un partido, pero estaré en casa cuando llegues. Mi hermano pequeño tiene nueve años y está deseando conocerte.\nNuestro instituto está lejos de casa. Normalmente vamos en autobús, pero el lunes mi madre nos llevará en coche porque tienes que estar allí antes de las ocho y media.\nEl martes visitaremos un museo con la clase. Hay que llevar comida, ya que la cafetería estará cerrada. El viernes pasado fuimos a comprobar el recorrido y tardamos veinte minutos a pie.\nMe encanta el intercambio porque puedo conocer otras costumbres. ¡Nos vemos pronto!\nLucía",
    "questions": [
      {
        "prompt": "Who will collect Erin from the airport?",
        "lang": "en",
        "parts": [
          {
            "label": "Lucía’s father",
            "points": 3
          }
        ],
        "evidence": "Mi padre te recogerá en el aeropuerto",
        "skill": "person",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Why can Lucía not go to the airport?",
        "lang": "en",
        "parts": [
          {
            "label": "She has a match",
            "points": 3
          }
        ],
        "evidence": "porque tengo un partido",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "How do they normally travel to school, and how will they travel on Monday?",
        "lang": "en",
        "parts": [
          {
            "label": "Normally by bus",
            "points": 2
          },
          {
            "label": "On Monday by car",
            "points": 2
          }
        ],
        "evidence": "Normalmente vamos en autobús, pero el lunes mi madre nos llevará en coche",
        "skill": "contrast",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Why must students bring food on Tuesday?",
        "lang": "en",
        "parts": [
          {
            "label": "The cafeteria will be closed",
            "points": 3
          }
        ],
        "evidence": "Hay que llevar comida, ya que la cafetería estará cerrada.",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "When did they check the route, and how long did the walk take?",
        "lang": "en",
        "parts": [
          {
            "label": "Last Friday",
            "points": 2
          },
          {
            "label": "Twenty minutes",
            "points": 2
          }
        ],
        "evidence": "El viernes pasado fuimos a comprobar el recorrido y tardamos veinte minutos a pie.",
        "skill": "past",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 17,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "recogerá",
        "will collect"
      ],
      [
        "ya que",
        "because"
      ],
      [
        "el recorrido",
        "route"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "r08-blog",
    "title": "Mi móvil se quedó en casa",
    "level": "B",
    "genre": "Blog",
    "topic": "Tecnología, opiniones y pasado",
    "text": "BLOG DE INÉS — UN SÁBADO DIFERENTE\nEl sábado pasado dejé el móvil en casa por primera vez. Al principio estaba nerviosa: no podía mandar mensajes a mis amigas. Habíamos quedado a las once delante de la biblioteca, así que apunté la hora y el lugar en un papel.\nFuimos al mercado a comprar fresas para preparar una merienda. Mi amiga Paula pagó porque yo había olvidado la cartera. Después volvimos a mi casa y cocinamos juntas.\nLo mejor fue hablar sin mirar una pantalla cada dos minutos. No quiero dejar de usar el móvil: me sirve para escuchar música y consultar los horarios del autobús. Sin embargo, el próximo sábado voy a apagarlo durante la comida. Mi hermano dice que será aburrido, pero yo creo que me ayudará a prestar más atención.",
    "questions": [
      {
        "prompt": "Why was Inés nervous at first?",
        "lang": "en",
        "parts": [
          {
            "label": "She could not message her friends",
            "points": 3
          }
        ],
        "evidence": "no podía mandar mensajes a mis amigas",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What two details did she write on paper?",
        "lang": "en",
        "parts": [
          {
            "label": "The time",
            "points": 2
          },
          {
            "label": "The place",
            "points": 2
          }
        ],
        "evidence": "apunté la hora y el lugar en un papel",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Why did Paula pay at the market?",
        "lang": "en",
        "parts": [
          {
            "label": "Inés had forgotten her wallet",
            "points": 3
          }
        ],
        "evidence": "Paula pagó porque yo había olvidado la cartera.",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What two useful things does Inés do with her phone?",
        "lang": "en",
        "parts": [
          {
            "label": "Listen to music",
            "points": 2
          },
          {
            "label": "Check bus timetables",
            "points": 2
          }
        ],
        "evidence": "escuchar música y consultar los horarios del autobús",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "When will she switch it off next Saturday, and what benefit does she expect?",
        "lang": "en",
        "parts": [
          {
            "label": "During the meal",
            "points": 2
          },
          {
            "label": "It will help her pay more attention",
            "points": 2
          }
        ],
        "evidence": "el próximo sábado voy a apagarlo durante la comida. Mi hermano dice que será aburrido, pero yo creo que me ayudará a prestar más atención.",
        "skill": "relation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 18,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "la cartera",
        "wallet"
      ],
      [
        "sin mirar",
        "without looking"
      ],
      [
        "prestar atención",
        "pay attention"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "r08-dialogue",
    "title": "Un perro en la protectora",
    "level": "C",
    "genre": "Diálogo",
    "topic": "Animales, familia y responsabilidades",
    "text": "Álex: ¿Viste el perro que llegó a la protectora el jueves pasado?\nMarta: Sí. Mi prima y yo fuimos ayer. Es bastante pequeño, de pelo blanco y muy tranquilo.\nÁlex: ¿Os lo vais a llevar a casa?\nMarta: A mi prima le encantaría, pero vive en un piso donde no permiten animales. Mi familia sí puede adoptarlo.\nÁlex: ¿Qué dice tu padre?\nMarta: Al principio pensó que era demasiado mayor, pero la veterinaria le explicó que solo tiene dos años. Ya está de acuerdo.\nÁlex: ¿Qué vais a preparar?\nMarta: Una cama, comida y una correa. Mi madre comprará la cama esta tarde. Yo sacaré al perro antes de ir al instituto y mi hermano lo hará por la noche.\nÁlex: ¿Cuándo vuelve tu familia a la protectora?\nMarta: Pasado mañana por la mañana. Tenemos muchas ganas.",
    "questions": [
      {
        "prompt": "When did the dog arrive at the shelter?",
        "lang": "en",
        "parts": [
          {
            "label": "Last Thursday",
            "points": 3
          }
        ],
        "evidence": "el jueves pasado",
        "skill": "time",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Give three details about the dog’s appearance or character.",
        "lang": "en",
        "parts": [
          {
            "label": "Quite small",
            "points": 2
          },
          {
            "label": "White coat / white fur",
            "points": 2
          },
          {
            "label": "Very calm",
            "points": 2
          }
        ],
        "evidence": "Es bastante pequeño, de pelo blanco y muy tranquilo.",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Why can Marta’s cousin not adopt the dog?",
        "lang": "en",
        "parts": [
          {
            "label": "Animals are not allowed in her flat",
            "points": 3
          }
        ],
        "evidence": "vive en un piso donde no permiten animales",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What misunderstanding did the vet correct?",
        "lang": "en",
        "parts": [
          {
            "label": "Her father thought the dog was too old, but it is only two",
            "points": 4
          }
        ],
        "evidence": "pensó que era demasiado mayor, pero la veterinaria le explicó que solo tiene dos años.",
        "skill": "contrast",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Who will walk the dog before school, and who will do it at night?",
        "lang": "en",
        "parts": [
          {
            "label": "Marta before school",
            "points": 2
          },
          {
            "label": "Her brother at night",
            "points": 2
          }
        ],
        "evidence": "Yo sacaré al perro antes de ir al instituto y mi hermano lo hará por la noche.",
        "skill": "relation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "When will Marta’s family return to the shelter?",
        "lang": "en",
        "parts": [
          {
            "label": "The morning of the day after tomorrow",
            "points": 4
          }
        ],
        "evidence": "Pasado mañana por la mañana.",
        "skill": "time",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 24,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "la protectora",
        "animal shelter"
      ],
      [
        "la correa",
        "lead / leash"
      ],
      [
        "pasado mañana",
        "the day after tomorrow"
      ]
    ],
    "structures": "Reconocimiento receptivo de pasado, futuro y subordinación contextual; calificadores y relaciones precisas. No exige producir paradigmas completos."
  },
  {
    "id": "r08-festival",
    "title": "Festival del Mar",
    "level": "C",
    "genre": "Cartel",
    "topic": "Fiesta, fechas y ropa",
    "text": "FESTIVAL DEL MAR — PUERTO CLARO\nDel 12 al 14 de agosto, en la plaza del puerto.\nLos conciertos empiezan a las nueve y media de la noche.\nEntrada: seis euros por día; menores de doce años, gratis.\nActividades: conciertos, talleres de baile y un mercado de artesanía.\nPara el taller de baile se recomienda llevar camiseta blanca y zapatillas cómodas.\nSe puede llegar en autobús o en bicicleta. El aparcamiento estará cerrado durante el festival.\nCompra las entradas en la oficina de turismo. No se venden en la puerta.",
    "questions": [
      {
        "prompt": "¿Cuáles son las fechas del festival?",
        "lang": "es",
        "parts": [
          {
            "label": "Desde el 12",
            "points": 2
          },
          {
            "label": "Hasta el 14",
            "points": 2
          },
          {
            "label": "De agosto",
            "points": 1
          }
        ],
        "evidence": "Del 12 al 14 de agosto",
        "skill": "date",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "¿Dónde se celebra?",
        "lang": "es",
        "parts": [
          {
            "label": "En la plaza del puerto.",
            "points": 5
          }
        ],
        "evidence": "en la plaza del puerto",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "¿A qué hora empiezan los conciertos?",
        "lang": "es",
        "parts": [
          {
            "label": "A las nueve y media de la noche / a las 21:30.",
            "points": 5
          }
        ],
        "evidence": "a las nueve y media de la noche",
        "skill": "time",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "¿Qué dos prendas se recomiendan para el taller de baile?",
        "lang": "es",
        "parts": [
          {
            "label": "Camiseta blanca",
            "points": 5
          },
          {
            "label": "Zapatillas cómodas",
            "points": 5
          }
        ],
        "evidence": "camiseta blanca y zapatillas cómodas",
        "skill": "clothing",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "maxPoints": 25,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "la artesanía",
        "crafts"
      ],
      [
        "se recomienda",
        "it is recommended"
      ],
      [
        "la puerta",
        "door / entrance"
      ]
    ],
    "structures": "Reconocimiento receptivo de pasado, futuro y subordinación contextual; calificadores y relaciones precisas. No exige producir paradigmas completos."
  },
  {
    "id": "r08-tourism",
    "title": "Descubre Villa del Río",
    "level": "C",
    "genre": "Guía turística",
    "topic": "Turismo, servicios e ingredientes",
    "text": "1. Villa del Río es una localidad imaginaria del norte de España. Su casco antiguo tiene calles estrechas y casas de colores. Se puede recorrer a pie porque el centro es pequeño y no hay mucho tráfico.\n2. Junto al río hay un albergue juvenil con una piscina climatizada y una pista de tenis cubierta. El alojamiento cuesta veintidós euros por persona y noche; el desayuno está incluido, pero las toallas se alquilan aparte.\n3. En el mercado se puede probar el arroz de la huerta, que lleva arroz, calabacín, zanahoria y ajo. Los martes se organiza un taller para aprender a cocinarlo. Hay que reservar con dos días de antelación.\n4. En otoño hay menos visitantes y los billetes de autobús son más baratos que en verano. La oficina de turismo está justo al lado del ayuntamiento. Allí puedes recoger un mapa gratuito y reservar una visita guiada al molino antiguo.",
    "questions": [
      {
        "prompt": "Paragraph 1: give two reasons why the centre can be explored on foot.",
        "lang": "en",
        "parts": [
          {
            "label": "The centre is small",
            "points": 2
          },
          {
            "label": "There is little traffic",
            "points": 2
          }
        ],
        "evidence": "el centro es pequeño y no hay mucho tráfico",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 2: describe both sports facilities, including their qualifying words.",
        "lang": "en",
        "parts": [
          {
            "label": "A heated swimming pool",
            "points": 3
          },
          {
            "label": "An indoor / covered tennis court",
            "points": 3
          }
        ],
        "evidence": "una piscina climatizada y una pista de tenis cubierta",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 2: what is the accommodation price, including its units?",
        "lang": "en",
        "parts": [
          {
            "label": "€22",
            "points": 2
          },
          {
            "label": "Per person",
            "points": 1
          },
          {
            "label": "Per night",
            "points": 1
          }
        ],
        "evidence": "veintidós euros por persona y noche",
        "skill": "price",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 3: name all four ingredients of arroz de la huerta.",
        "lang": "en",
        "parts": [
          {
            "label": "Rice",
            "points": 2
          },
          {
            "label": "Courgette",
            "points": 1
          },
          {
            "label": "Carrot",
            "points": 1
          },
          {
            "label": "Garlic",
            "points": 1
          }
        ],
        "evidence": "arroz, calabacín, zanahoria y ajo",
        "skill": "food",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 4: give both advantages of visiting in autumn.",
        "lang": "en",
        "parts": [
          {
            "label": "Fewer visitors",
            "points": 2
          },
          {
            "label": "Cheaper bus tickets than in summer",
            "points": 2
          }
        ],
        "evidence": "En otoño hay menos visitantes y los billetes de autobús son más baratos que en verano.",
        "skill": "contrast",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 4: where exactly is the tourist office?",
        "lang": "en",
        "parts": [
          {
            "label": "Right beside the town hall",
            "points": 3
          }
        ],
        "evidence": "justo al lado del ayuntamiento",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "numbered": true,
    "maxPoints": 26,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "el albergue juvenil",
        "youth hostel"
      ],
      [
        "climatizado",
        "heated"
      ],
      [
        "con antelación",
        "in advance"
      ]
    ],
    "structures": "Reconocimiento receptivo de pasado, futuro y subordinación contextual; calificadores y relaciones precisas. No exige producir paradigmas completos."
  },
  {
    "id": "r08-profile",
    "title": "La historia de Alba",
    "level": "C",
    "genre": "Perfil con párrafos",
    "topic": "Familia, trabajo y pasado",
    "text": "1. Alba es un personaje ficticio. Nació el veintitrés de febrero de dos mil cuatro en un pueblo cerca de León. De pequeña vivía con sus padres y su abuelo materno. Él reparaba bicicletas en un pequeño taller y le enseñó a usar las herramientas.\n2. Cuando tenía quince años, Alba empezó a arreglar las bicicletas de sus amigas. No quería ganar dinero: quería que pudieran ir al instituto sin depender del coche de sus padres. Su madre, que trabaja como enfermera, la ayudó a organizar los horarios.\n3. El año pasado abrió un taller con su hermana mayor, Eva. Alba repara las bicicletas y Eva atiende a los clientes y se encarga de las cuentas. El local tiene dos plantas y está enfrente de la biblioteca municipal.\n4. A Alba le encanta su trabajo porque cada día resuelve un problema diferente. Lo más difícil es encontrar piezas para las bicicletas antiguas. El próximo verano organizará un curso gratuito para adolescentes. Para ella, aprender a reparar es una forma de cuidar el medio ambiente.",
    "questions": [
      {
        "prompt": "Paragraph 1: give Alba’s full date of birth.",
        "lang": "en",
        "parts": [
          {
            "label": "23",
            "points": 2
          },
          {
            "label": "February",
            "points": 1
          },
          {
            "label": "2004",
            "points": 1
          }
        ],
        "evidence": "veintitrés de febrero de dos mil cuatro",
        "skill": "date",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 1: which relative taught her to use tools? Be precise.",
        "lang": "en",
        "parts": [
          {
            "label": "Her maternal grandfather / her mother’s father",
            "points": 3
          }
        ],
        "evidence": "su abuelo materno. Él reparaba bicicletas en un pequeño taller y le enseñó a usar las herramientas.",
        "skill": "person",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 2: why did she repair her friends’ bikes?",
        "lang": "en",
        "parts": [
          {
            "label": "So they could go to school without depending on their parents’ car",
            "points": 4
          }
        ],
        "evidence": "quería que pudieran ir al instituto sin depender del coche de sus padres.",
        "skill": "purpose",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 3: give Eva’s two responsibilities.",
        "lang": "en",
        "parts": [
          {
            "label": "Serve customers",
            "points": 2
          },
          {
            "label": "Manage the accounts",
            "points": 2
          }
        ],
        "evidence": "Eva atiende a los clientes y se encarga de las cuentas.",
        "skill": "person",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 4: what does Alba find hardest about her job?",
        "lang": "en",
        "parts": [
          {
            "label": "Finding parts for old bicycles",
            "points": 3
          }
        ],
        "evidence": "Lo más difícil es encontrar piezas para las bicicletas antiguas.",
        "skill": "opinion",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 4: who is the summer course for, and what will it cost?",
        "lang": "en",
        "parts": [
          {
            "label": "Teenagers",
            "points": 2
          },
          {
            "label": "Free / nothing",
            "points": 2
          }
        ],
        "evidence": "El próximo verano organizará un curso gratuito para adolescentes.",
        "skill": "future",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "numbered": true,
    "maxPoints": 22,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "materno",
        "on the mother’s side"
      ],
      [
        "las herramientas",
        "tools"
      ],
      [
        "las piezas",
        "parts"
      ]
    ],
    "structures": "Reconocimiento receptivo de pasado, futuro y subordinación contextual; calificadores y relaciones precisas. No exige producir paradigmas completos."
  },
  {
    "id": "r08-information",
    "title": "La biblioteca de las cosas",
    "level": "C",
    "genre": "Texto informativo",
    "topic": "Comunidad y sostenibilidad",
    "text": "1. En el barrio ficticio de Los Pinos se ha abierto una biblioteca de las cosas. Además de libros, presta objetos que no se necesitan todos los días: tiendas de campaña, herramientas y máquinas de coser. Así los vecinos pueden ahorrar dinero y espacio en casa.\n2. Para llevarte un objeto, tienes que tener al menos dieciséis años y presentar el carné de socio. Los menores de dieciséis pueden utilizar el servicio acompañados de un adulto. Cada préstamo dura una semana. Si necesitas más tiempo, debes pedirlo antes de la fecha de devolución.\n3. Los objetos pequeños se recogen en la planta baja. Las bicicletas están en el patio cubierto, detrás del edificio. La biblioteca abre de martes a sábado. Los lunes permanece cerrada para limpiar y revisar el material.\n4. El mes pasado, un grupo de estudiantes reparó seis sillas para una asociación del barrio. No compraron herramientas: las pidieron prestadas. La directora cree que compartir objetos también permite conocer a otras personas. En diciembre habrá talleres gratuitos de reparación, pero solo veinte plazas por sesión.",
    "questions": [
      {
        "prompt": "Paragraph 1: give two benefits of borrowing objects.",
        "lang": "en",
        "parts": [
          {
            "label": "Save money",
            "points": 2
          },
          {
            "label": "Save space at home",
            "points": 2
          }
        ],
        "evidence": "ahorrar dinero y espacio en casa",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 2: what condition applies to users under sixteen?",
        "lang": "en",
        "parts": [
          {
            "label": "They must be accompanied by an adult",
            "points": 3
          }
        ],
        "evidence": "Los menores de dieciséis pueden utilizar el servicio acompañados de un adulto.",
        "skill": "condition",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 2: what must you do if you need an object for longer?",
        "lang": "en",
        "parts": [
          {
            "label": "Ask before the return date",
            "points": 3
          }
        ],
        "evidence": "debes pedirlo antes de la fecha de devolución.",
        "skill": "condition",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 3: where exactly are the bicycles?",
        "lang": "en",
        "parts": [
          {
            "label": "In the covered courtyard",
            "points": 2
          },
          {
            "label": "Behind the building",
            "points": 2
          }
        ],
        "evidence": "en el patio cubierto, detrás del edificio.",
        "skill": "place",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 3: why is the library closed on Mondays?",
        "lang": "en",
        "parts": [
          {
            "label": "To clean and check the equipment",
            "points": 3
          }
        ],
        "evidence": "para limpiar y revisar el material.",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Paragraph 4: what did the students repair, and for whom?",
        "lang": "en",
        "parts": [
          {
            "label": "Six chairs",
            "points": 2
          },
          {
            "label": "A neighbourhood association",
            "points": 2
          }
        ],
        "evidence": "un grupo de estudiantes reparó seis sillas para una asociación del barrio.",
        "skill": "past",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "original",
    "numbered": true,
    "maxPoints": 21,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "prestar",
        "lend"
      ],
      [
        "la devolución",
        "return"
      ],
      [
        "el préstamo",
        "loan"
      ]
    ],
    "structures": "Reconocimiento receptivo de pasado, futuro y subordinación contextual; calificadores y relaciones precisas. No exige producir paradigmas completos."
  },
  {
    "id": "r08-clothes",
    "title": "Ropa: imagen y palabra",
    "level": "A",
    "genre": "Asociación visual",
    "topic": "Ropa y accesorios",
    "text": "",
    "questions": [
      {
        "prompt": "El pantalón",
        "lang": "es",
        "parts": [
          {
            "label": "4",
            "points": 1
          }
        ],
        "evidence": "Imagen 4",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 3
      },
      {
        "prompt": "La gorra",
        "lang": "es",
        "parts": [
          {
            "label": "2",
            "points": 1
          }
        ],
        "evidence": "Imagen 2",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 1
      },
      {
        "prompt": "La falda",
        "lang": "es",
        "parts": [
          {
            "label": "6",
            "points": 1
          }
        ],
        "evidence": "Imagen 6",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 5
      },
      {
        "prompt": "La camiseta",
        "lang": "es",
        "parts": [
          {
            "label": "1",
            "points": 1
          }
        ],
        "evidence": "Imagen 1",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 0
      },
      {
        "prompt": "La bufanda",
        "lang": "es",
        "parts": [
          {
            "label": "5",
            "points": 1
          }
        ],
        "evidence": "Imagen 5",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 4
      },
      {
        "prompt": "El zapato",
        "lang": "es",
        "parts": [
          {
            "label": "3",
            "points": 1
          }
        ],
        "evidence": "Imagen 3",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 2
      }
    ],
    "origin": "original",
    "visual": "clothes",
    "maxPoints": 6,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "el / un pantalón",
        "trousers"
      ],
      [
        "la / una falda",
        "skirt"
      ],
      [
        "la / una bufanda",
        "scarf"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "r08-actions",
    "title": "Acciones cotidianas",
    "level": "A",
    "genre": "Asociación visual",
    "topic": "Acciones, ocio y rutinas",
    "text": "",
    "questions": [
      {
        "prompt": "Leer un libro",
        "lang": "es",
        "parts": [
          {
            "label": "3",
            "points": 2
          }
        ],
        "evidence": "Imagen 3",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 2
      },
      {
        "prompt": "Jugar al fútbol",
        "lang": "es",
        "parts": [
          {
            "label": "5",
            "points": 2
          }
        ],
        "evidence": "Imagen 5",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 4
      },
      {
        "prompt": "Dormir",
        "lang": "es",
        "parts": [
          {
            "label": "1",
            "points": 2
          }
        ],
        "evidence": "Imagen 1",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 0
      },
      {
        "prompt": "Tocar la guitarra",
        "lang": "es",
        "parts": [
          {
            "label": "6",
            "points": 2
          }
        ],
        "evidence": "Imagen 6",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 5
      },
      {
        "prompt": "Ir en bicicleta",
        "lang": "es",
        "parts": [
          {
            "label": "2",
            "points": 2
          }
        ],
        "evidence": "Imagen 2",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 1
      },
      {
        "prompt": "Nadar",
        "lang": "es",
        "parts": [
          {
            "label": "4",
            "points": 2
          }
        ],
        "evidence": "Imagen 4",
        "skill": "matching",
        "hint": "Match the whole phrase to one numbered picture.",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 3
      }
    ],
    "origin": "original",
    "visual": "actions",
    "maxPoints": 12,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "leer",
        "read"
      ],
      [
        "tocar",
        "play an instrument"
      ],
      [
        "nadar",
        "swim"
      ]
    ],
    "structures": "Presente; negación; numerales y horas; reconocimiento selectivo de pasado o futuro según texto."
  },
  {
    "id": "r08-technology",
    "title": "Tiempo libre y tecnología",
    "level": "B",
    "genre": "Texto personal",
    "topic": "Tiempo libre y tecnología",
    "text": "En mi tiempo libre me gusta quedar con mis amigos, jugar al fútbol y ver series. Uso el móvil todos los días para chatear y para hacer los deberes, pero intento limitar el tiempo en redes sociales porque a veces me distraen mucho. Los fines de semana juego a videojuegos con mi primo; es divertido, aunque mis padres dicen que paso demasiado tiempo delante de la pantalla. El sábado pasado fuimos al cine y después cenamos en una hamburguesería. Este fin de semana voy a desconectar un poco: quiero salir a dar un paseo por la playa, leer un rato y preparar una lista de objetivos para organizarme mejor.",
    "questions": [
      {
        "prompt": "What two things does the writer use the phone for?",
        "lang": "en",
        "parts": [
          {
            "label": "Chatting",
            "points": 2
          },
          {
            "label": "Doing homework",
            "points": 2
          }
        ],
        "evidence": "para chatear y para hacer los deberes",
        "skill": "detail",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Why does the writer try to limit social media use?",
        "lang": "en",
        "parts": [
          {
            "label": "It sometimes distracts them a lot",
            "points": 3
          }
        ],
        "evidence": "porque a veces me distraen mucho",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "Who plays video games with the writer?",
        "lang": "en",
        "parts": [
          {
            "label": "Their cousin",
            "points": 2
          }
        ],
        "evidence": "juego a videojuegos con mi primo",
        "skill": "person",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What two things did they do last Saturday?",
        "lang": "en",
        "parts": [
          {
            "label": "Went to the cinema",
            "points": 2
          },
          {
            "label": "Had dinner in a burger restaurant",
            "points": 2
          }
        ],
        "evidence": "El sábado pasado fuimos al cine y después cenamos en una hamburguesería.",
        "skill": "past",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "In context, what does “desconectar” mean?",
        "lang": "en",
        "parts": [
          {
            "label": "Take a break from screens / technology",
            "points": 3
          }
        ],
        "evidence": "Este fin de semana voy a desconectar un poco: quiero salir a dar un paseo por la playa, leer un rato",
        "skill": "context",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "adapted",
    "sourcePath": "pages/reading/guided-rc03.html",
    "maxPoints": 16,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "quedar con",
        "meet up with"
      ],
      [
        "distraer",
        "distract"
      ],
      [
        "desconectar",
        "switch off / take a break"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  },
  {
    "id": "r08-health",
    "title": "Salud y deporte",
    "level": "B",
    "genre": "Texto personal",
    "topic": "Salud y deporte",
    "text": "Este año intento llevar una vida más sana. Normalmente desayuno fruta y yogur y para el almuerzo llevo un bocadillo. Tres veces a la semana hago deporte: corro en el parque o voy al gimnasio con un amigo. Cuando tengo muchos exámenes, me estreso y duermo peor, así que intento organizar mi horario y descansar. Además, he dejado de tomar bebidas energéticas porque no son buenas para la salud. El mes pasado participé en una carrera solidaria y me sentí muy orgulloso. La semana que viene voy a apuntarme al equipo de baloncesto en el instituto.",
    "questions": [
      {
        "prompt": "How often does the writer do sport?",
        "lang": "en",
        "parts": [
          {
            "label": "Three times a week",
            "points": 3
          }
        ],
        "evidence": "Tres veces a la semana hago deporte",
        "skill": "number",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What two effects do exams have on the writer?",
        "lang": "en",
        "parts": [
          {
            "label": "They feel stressed",
            "points": 2
          },
          {
            "label": "They sleep worse",
            "points": 2
          }
        ],
        "evidence": "Cuando tengo muchos exámenes, me estreso y duermo peor",
        "skill": "relation",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What has the writer stopped drinking, and why?",
        "lang": "en",
        "parts": [
          {
            "label": "Energy drinks",
            "points": 2
          },
          {
            "label": "Because they are not good for health",
            "points": 2
          }
        ],
        "evidence": "he dejado de tomar bebidas energéticas porque no son buenas para la salud",
        "skill": "reason",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What did the writer do last month, and how did they feel?",
        "lang": "en",
        "parts": [
          {
            "label": "Took part in a charity run",
            "points": 2
          },
          {
            "label": "Very proud",
            "points": 2
          }
        ],
        "evidence": "El mes pasado participé en una carrera solidaria y me sentí muy orgulloso.",
        "skill": "past",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      },
      {
        "prompt": "What will the writer do next week?",
        "lang": "en",
        "parts": [
          {
            "label": "Join the school basketball team",
            "points": 3
          }
        ],
        "evidence": "La semana que viene voy a apuntarme al equipo de baloncesto en el instituto.",
        "skill": "future",
        "hint": "Read the whole sentence. Keep the person, time and any qualifying words."
      }
    ],
    "origin": "adapted",
    "sourcePath": "pages/reading/guided-rc04.html",
    "maxPoints": 18,
    "support": [
      [
        "Busca primero quién habla y de qué trata el documento.",
        "First identify the speaker and the purpose of the document."
      ],
      [
        "Lee la frase completa: conserva horas, personas, negaciones y adjetivos.",
        "Read the whole sentence: keep times, people, negatives and adjectives."
      ]
    ],
    "glossary": [
      [
        "he dejado de",
        "I have stopped"
      ],
      [
        "solidario",
        "for charity"
      ],
      [
        "apuntarme",
        "sign up / join"
      ]
    ],
    "structures": "Presente, pasado y planes; porque, aunque, pero y condiciones; pronombres y referentes."
  }
];
