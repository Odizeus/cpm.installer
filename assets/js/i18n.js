(function () {
  "use strict";

  var STORAGE_KEY = "cpm-language";
  var translations = {
    es: {
      "nav.primary": "Navegación principal",
      "nav.home": "Inicio",
      "nav.flooring": "Instalación de pisos",
      "nav.interior": "Renovación interior",
      "nav.gallery": "Galería",
      "nav.about": "Acerca de",
      "nav.requestQuote": "Solicitar una cotización",
      "nav.toggle": "Abrir o cerrar navegación",
      "nav.language": "Selector de idioma",
      "footer.tagline": "Instalación de pisos y renovación interior de primer nivel para hogares y negocios del sur de Florida.",
      "footer.explore": "Explora",
      "footer.services": "Servicios",
      "footer.contact": "Contacto",
      "footer.copyright": "© 2026 CPM Installer Services. Todos los derechos reservados.",
      "footer.serving": "Al servicio del sur de Florida",
      "footer.requestFreeQuote": "Solicite una cotización gratuita",
      "footer.licensed": "Con licencia y seguro",
      "footer.privacy": "Política de privacidad",
      "footer.terms": "Términos de uso",
      "footer.accessibility": "Accesibilidad",
      "home.title": "CPM Installer Services | Pisos y renovación interior",
      "home.description": "CPM Installer Services ofrece instalación premium de pisos y renovación interior en el sur de Florida.",
      "home.eyebrow": "Negocio familiar · Sur de Florida · Desde 2017",
      "home.heroTitle": "Artesanía que transforma los espacios donde vive.",
      "home.lead": "CPM Installer Services ofrece instalación premium de pisos y renovación interior para hogares y negocios del sur de Florida, con planificación cuidadosa, ejecución limpia y acabados hechos para durar.",
      "home.requestFreeQuote": "Solicitar una cotización gratis",
      "home.viewWork": "Ver nuestros trabajos",
      "home.statsCraft": "Años de experiencia",
      "home.highlights": "Aspectos destacados de la empresa",
      "home.statsProjects": "Proyectos entregados",
      "home.statsLicensed": "Con licencia y asegurados",
      "home.statsClient": "Acabados centrados en el cliente",
      "home.servicesEyebrow": "Lo que hacemos",
      "home.servicesTitle": "Dos disciplinas. Un estándar de excelencia.",
      "home.servicesText": "Desde la preparación hasta el último detalle, cada proyecto recibe el mismo cuidado que daríamos a nuestro propio hogar.",
      "home.serviceFlooring": "Instalación de pisos",
      "home.serviceFlooringText": "Madera maciza, madera de ingeniería, tile, vinilo de lujo y superficies instalados con transiciones precisas y acabados duraderos.",
      "home.serviceInterior": "Renovación interior",
      "home.serviceInteriorText": "Actualizaciones interiores, renovaciones de baño, molduras, acabados y transformaciones de espacios que hacen que la vida diaria se sienta nueva.",
      "home.explore": "Explorar →",
      "home.storyEyebrow": "Nuestra historia",
      "home.established": "Establecidos",
      "home.storyTitle": "Un negocio familiar construido sobre la confianza y la calidad del acabado.",
      "home.storyText1": "CPM Installer Services es una empresa familiar establecida en Florida en octubre de 2017. Hemos crecido gracias a nuestra reputación: comunicación clara, programación cuidadosa y resultados que perduran después de la entrega.",
      "home.storyText2": "Contamos con licencia y seguro, y mantenemos nuestro compromiso con la excelencia desde la primera conversación hasta la finalización del proyecto.",
      "home.meetFamily": "Conozca a la familia →",
      "home.processEyebrow": "Cómo trabajamos",
      "home.processTitle": "Un proceso meticuloso, desde la visión hasta la entrega.",
      "home.consultation": "Consulta",
      "home.consultationText": "Escuchamos, medimos y entendemos cómo el espacio debe verse, sentirse y funcionar.",
      "home.designQuote": "Diseño y cotización",
      "home.designQuoteText": "Recibe una propuesta clara, opciones prácticas y expectativas definidas antes de comenzar.",
      "home.craftsmanship": "Artesanía",
      "home.craftsmanshipText": "Materiales de primera y manos expertas se unen con atención cercana a cada detalle.",
      "home.finalReveal": "Entrega final",
      "home.finalRevealText": "Terminamos con una revisión limpia y un espacio entregado con cuidado.",
      "home.workEyebrow": "Trabajos seleccionados",
      "home.workTitle": "Proyectos recientes de nuestro archivo.",
      "home.seeGallery": "Ver la galería completa →",
      "home.clientsEyebrow": "Voces de clientes",
      "home.clientsTitle": "El acabado habla. Nuestros clientes también.",
      "home.testimonial1": "CPM realizó nuestros pisos con paciencia y precisión. Las transiciones quedaron limpias, el área de trabajo se mantuvo ordenada y el resultado transformó toda la casa.",
      "home.testimonial1Role": "Cliente residencial",
      "home.testimonial2": "La renovación interior se terminó a tiempo y la revisión final fue impecable. Se sintió como una habitación completamente nueva, sin estrés.",
      "home.testimonial2Role": "Cliente de renovación interior",
      "home.testimonial3": "Cotización honesta, comunicación constante y una calidad que se siente bajo los pies. Los llamaríamos de nuevo para la próxima etapa.",
      "home.testimonial3Role": "Cliente recurrente",
      "home.ctaTitle": "¿Listo para renovar su espacio?",
      "home.ctaText": "Cuéntenos sobre su proyecto y reciba una cotización gratuita sin compromiso.",
      "flooring.title": "Instalación de pisos | CPM Installer Services",
      "flooring.description": "Instalación profesional de pisos de madera, tile, vinilo, superficies y piedra natural en el sur de Florida.",
      "flooring.eyebrow": "Instalación de pisos",
      "flooring.heroTitle": "Pisos que dan calidad y carácter a cada ambiente.",
      "flooring.lead": "Instalamos madera maciza, madera de ingeniería, tile, vinilo de lujo, superficies y piedra natural para espacios residenciales y comerciales que requieren un acabado limpio, durable y refinado.",
      "flooring.viewWork": "Ver trabajos de pisos",
      "flooring.overviewEyebrow": "Construido desde la base",
      "flooring.overviewTitle": "Cada línea, borde y transición importa.",
      "flooring.overviewText1": "Los instaladores de pisos trabajan con diversos materiales para crear nuevos ambientes en hogares y negocios. CPM se enfoca en los detalles que hacen que esos materiales se sientan intencionales: preparación nivelada, distribución consistente, molduras limpias y transiciones suaves.",
      "flooring.overviewText2": "El resultado es un piso que eleva el ambiente y rinde día tras día.",
      "flooring.materialsTitle": "Materiales que instalamos",
      "flooring.hardwood": "Madera maciza",
      "flooring.engineeredWood": "Madera de ingeniería",
      "flooring.porcelain": "Porcelanato",
      "flooring.ceramic": "Cerámica",
      "flooring.vinyl": "Vinilo de lujo",
      "flooring.surfaceFinishes": "Superficies",
      "flooring.stone": "Piedra natural",
      "flooring.baseboards": "Zócalos",
      "flooring.transitions": "Transiciones",
      "flooring.processEyebrow": "Estándar de instalación",
      "flooring.processTitle": "Un piso es tan bueno como su preparación.",
      "flooring.prep": "Preparación de superficie",
      "flooring.prepText": "Revisamos niveles, resolvemos problemas del sustrato y preparamos la base antes de instalar los materiales.",
      "flooring.layout": "Planificación de distribución",
      "flooring.layoutText": "El patrón, la dirección, las líneas de grout, las transiciones y las puertas se planifican antes del primer corte.",
      "flooring.walkthrough": "Revisión final",
      "flooring.walkthroughText": "Revisamos los detalles con usted y dejamos el proyecto limpio, completo y listo para usar.",
      "flooring.archiveEyebrow": "Pisos instalados",
      "flooring.archiveTitle": "Proyectos de pisos de nuestro archivo.",
      "flooring.captionWood": "Instalación de piso de madera",
      "flooring.captionFinish": "Detalle de acabado limpio",
      "flooring.captionTransition": "Trabajo de transición",
      "flooring.captionSurface": "Detalle de superficie",
      "flooring.captionTile": "Artesanía en tile",
      "flooring.captionPool": "Superficie de deck de piscina",
      "flooring.ctaTitle": "¿Listo para una mejor base?",
      "flooring.ctaText": "Cuéntenos sobre su proyecto de pisos y le ayudaremos a planificar el siguiente paso.",
      "interior.title": "Renovación interior | CPM Installer Services",
      "interior.description": "Renovaciones interiores, baños, cabinetry y acabados para hogares y negocios del sur de Florida.",
      "interior.eyebrow": "Renovación interior",
      "interior.heroTitle": "Renovamos los espacios donde transcurre la vida.",
      "interior.lead": "Desde transformaciones completas hasta actualizaciones cuidadosas, CPM devuelve calidez, luz y funcionalidad duradera a interiores que necesitan renovarse.",
      "interior.overviewEyebrow": "Actualizaciones con propósito",
      "interior.overviewTitle": "Las mejores transformaciones se sienten en los detalles.",
      "interior.overviewText1": "La renovación interior puede ser una actualización completa o una mejora cuidadosamente enfocada. Ayudamos a definir las superficies, acabados, accesorios y detalles que determinan cómo se siente una habitación cada día.",
      "interior.overviewText2": "Nuestro trabajo se planifica para reducir interrupciones, aclarar expectativas y entregar un espacio que se sienta terminado de esquina a esquina.",
      "interior.includesTitle": "Qué incluye la renovación",
      "interior.requestFreeQuote": "Solicitar una cotización gratis",
      "interior.viewWork": "Ver trabajos interiores",
      "interior.roomRefreshes": "Actualizaciones de habitaciones",
      "interior.kitchenUpdates": "Actualizaciones de cocina",
      "interior.bathRenewal": "Renovación de baño",
      "interior.tileWork": "Trabajo de tile",
      "interior.trimDetails": "Detalles de molduras",
      "interior.painting": "Pintura",
      "interior.fixtures": "Accesorios",
      "interior.finishes": "Acabados",
      "interior.planning": "Planificación",
      "interior.standardEyebrow": "Estándar de renovación",
      "interior.standardTitle": "Función moderna, acabado duradero.",
      "interior.scope": "Alcance definido",
      "interior.scopeText": "Definimos el proyecto claramente para que cada actualización apoye al espacio sin crear sorpresas.",
      "interior.quality": "Calidad de acabado",
      "interior.qualityText": "Bordes, molduras, líneas de grout, accesorios y superficies reciben la misma atención minuciosa.",
      "interior.delivery": "Entrega limpia",
      "interior.deliveryText": "Protegemos el hogar, mantenemos una comunicación constante y cerramos con una revisión final cuidadosa.",
      "interior.archiveEyebrow": "Interiores renovados",
      "interior.archiveTitle": "Proyectos interiores de nuestro archivo.",
      "interior.captionBath": "Renovación de baño",
      "interior.captionTile": "Detalle de tile",
      "interior.captionFinish": "Detalle de acabado",
      "interior.captionShower": "Renovación de ducha",
      "interior.captionTransformation": "Transformación interior",
      "interior.captionKitchen": "Renovación de cocina",
      "interior.captionShowerTile": "Renovación de tile de ducha",
      "interior.captionVanityTile": "Vanity y acabado de tile",
      "interior.captionCabinets": "Cabinets de cocina",
      "interior.captionPowder": "Renovación de tocador",
      "interior.captionCloset": "Acabado de closet",
      "interior.ctaTitle": "¿Listo para renovar su espacio?",
      "interior.ctaText": "Cuéntenos qué se siente anticuado, difícil o incompleto. Le ayudaremos a definir un siguiente paso claro.",
      "gallery.title": "Galería | CPM Installer Services",
      "gallery.description": "Galería de proyectos de pisos, renovación interior y espacios exteriores de CPM Installer Services.",
      "gallery.eyebrow": "Portafolio",
      "gallery.heroTitle": "Nuestro trabajo habla por sí solo.",
      "gallery.lead": "Explore proyectos reales de pisos, renovación interior y espacios exteriores realizados por CPM Installer Services en el sur de Florida.",
      "gallery.archiveEyebrow": "Archivo seleccionado",
      "gallery.archiveTitle": "Proyectos de pisos, interiores y espacios exteriores.",
      "gallery.filters": "Filtros de galería",
      "gallery.all": "Todos los proyectos",
      "gallery.flooring": "Pisos",
      "gallery.interiors": "Interiores",
      "gallery.outdoor": "Exterior",
      "gallery.captionReflective": "Acabado de piso reflectante",
      "gallery.captionBath": "Renovación de baño moderna",
      "gallery.captionFloor": "Instalación de piso",
      "gallery.captionTileRoom": "Detalle de habitación con tile",
      "gallery.captionGraphic": "Acabado de tile gráfico",
      "gallery.captionSurface": "Detalle de superficie",
      "gallery.captionShower": "Renovación de ducha",
      "gallery.captionFloorDetail": "Detalle de piso",
      "gallery.captionInterior": "Acabado interior",
      "gallery.captionPool": "Superficie de deck de piscina",
      "gallery.captionOutdoorBuild": "Instalación de cocina exterior",
      "gallery.captionOutdoorKitchen": "Cocina exterior cubierta",
      "gallery.ctaTitle": "Vea su proyecto en la próxima galería.",
      "gallery.ctaText": "Comparta el ambiente, piso o acabado que desea transformar y le ayudaremos a planificarlo.",
      "about.title": "Acerca de | CPM Installer Services",
      "about.description": "Conozca a CPM Installer Services, una empresa familiar de instalación de pisos y renovación interior en el sur de Florida.",
      "about.eyebrow": "Acerca de nosotros",
      "about.heroTitle": "Familia, artesanía y orgullo del sur de Florida.",
      "about.lead": "CPM Installer Services es una empresa con licencia y seguro ubicada en Miami que atiende todo el sur de Florida con instalación de pisos y renovación interior.",
      "about.storyEyebrow": "Nuestra historia",
      "about.storyTitle": "Una reputación construida habitación terminada tras habitación.",
      "about.storyText1": "Establecida en octubre de 2017 en el estado de Florida, CPM Installer Services comenzó como un negocio familiar comprometido con la comunicación directa y una artesanía confiable.",
      "about.storyText2": "Durante años hemos seguido creciendo al mantener altos estándares, terminar proyectos a tiempo y dentro del presupuesto, y tratar cada espacio del cliente con cuidado desde el inicio hasta la entrega.",
      "about.yearsServing": "Años de servicio",
      "about.valuesEyebrow": "Nuestros valores",
      "about.valuesTitle": "Los valores detrás del acabado.",
      "about.integrity": "Integridad",
      "about.integrityText": "Expectativas claras, recomendaciones prácticas y respeto por el presupuesto desde el comienzo.",
      "about.craftsmanship": "Artesanía",
      "about.craftsmanshipText": "Preparación cuidadosa, instalación paciente y detalles de acabado que perduran con el tiempo.",
      "about.reliability": "Confiabilidad",
      "about.reliabilityText": "Trabajo planificado con cuidado, comunicado con claridad y terminado con una revisión final limpia.",
      "about.promiseEyebrow": "Nuestra promesa",
      "about.promiseTitle": "Haga el trabajo bien y deje que el acabado hable.",
      "about.promiseText": "Cada piso, pared, línea de moldura y detalle final lleva nuestro nombre. Por eso trabajamos con cuidado, comunicamos con honestidad y dejamos el espacio listo para la vida real.",
      "about.promiseSince": "Empresa familiar desde 2017",
      "about.ctaTitle": "¿Listo para hablar sobre su proyecto?",
      "about.ctaText": "Comparta sus objetivos y le ayudaremos a entender el mejor siguiente paso.",
      "contact.title": "Contacto | CPM Installer Services",
      "contact.description": "Solicite una cotización gratuita de pisos o renovación interior a CPM Installer Services.",
      "contact.eyebrow": "Contáctenos",
      "contact.heroTitle": "Solicite su cotización gratuita.",
      "contact.lead": "Cuéntenos sobre su proyecto de pisos o renovación interior. Revisaremos los detalles y le responderemos con el siguiente paso.",
      "contact.detailsEyebrow": "Detalles del proyecto",
      "contact.detailsTitle": "Comience con algunos datos esenciales.",
      "contact.detailsText": "Mientras más sepamos sobre el espacio, el plazo y el servicio que necesita, mejor podremos preparar una respuesta inicial clara.",
      "contact.name": "Nombre",
      "contact.namePlaceholder": "Su nombre",
      "contact.email": "Correo electrónico",
      "contact.emailPlaceholder": "Su correo electrónico",
      "contact.phone": "Teléfono",
      "contact.phonePlaceholder": "Su número de teléfono",
      "contact.service": "Servicio de interés",
      "contact.selectService": "Seleccione un servicio",
      "contact.flooring": "Instalación de pisos",
      "contact.interior": "Renovación interior",
      "contact.both": "Ambos",
      "contact.other": "Otro servicio",
      "contact.message": "Mensaje del proyecto",
      "contact.messagePlaceholder": "Cuéntenos sobre su proyecto",
      "contact.submit": "Enviar solicitud",
      "contact.panelEyebrow": "Información de contacto",
      "contact.panelTitle": "Al servicio del sur de Florida.",
      "contact.location": "Ubicación",
      "contact.serviceArea": "Área de servicio",
      "contact.serviceAreaValue": "Todo el sur de Florida",
      "contact.scheduling": "Programación",
      "contact.response": "Respuesta",
      "contact.scheduleValue": "Consultas de proyecto con cita previa",
      "contact.responseValue": "Las solicitudes de cotización se revisan mediante este formulario",
      "contact.honeypot": "No complete este campo si es una persona.",
      "thankYou.title": "Solicitud recibida | CPM Installer Services",
      "thankYou.description": "Confirmación de solicitud de cotización de CPM Installer Services.",
      "thankYou.eyebrow": "Solicitud recibida",
      "thankYou.heading": "Recibimos su solicitud y nos comunicaremos pronto.",
      "thankYou.message": "Gracias por compartir los detalles de su proyecto. Nuestro equipo los revisará y le responderá con el siguiente paso.",
      "thankYou.returnHome": "Volver al inicio",
      "legal.updated": "Última actualización: 13 de julio de 2026",
      "legal.privacy.title": "Política de privacidad | CPM Installer Services",
      "legal.privacy.description": "Conozca cómo CPM Installer Services gestiona las solicitudes de cotización y la información del sitio web.",
      "legal.privacy.eyebrow": "Su información",
      "legal.privacy.heading": "Política de privacidad",
      "legal.privacy.intro": "Esta política explica, de manera clara, cómo CPM Installer Services maneja la información compartida a través de este sitio web.",
      "legal.privacy.collectHeading": "Información que recopilamos",
      "legal.privacy.collectText": "Cuando solicita una cotización o se comunica con nosotros, puede elegir proporcionar información como:",
      "legal.privacy.collectContact": "Su nombre, número de teléfono y dirección de correo electrónico.",
      "legal.privacy.collectProject": "El servicio que le interesa y el mensaje o los detalles del proyecto que envía.",
      "legal.privacy.collectTechnical": "Información técnica básica necesaria para operar y proteger el sitio, como datos generados por su navegador o los servicios de hosting.",
      "legal.privacy.collectLanguage": "Su preferencia de idioma, que este sitio guarda localmente en su navegador mediante localStorage.",
      "legal.privacy.useHeading": "Cómo usamos la información",
      "legal.privacy.useText": "Usamos esta información para responder solicitudes, preparar cotizaciones, coordinar posibles servicios, comunicarnos sobre proyectos y ayudar a mantener el sitio seguro y funcionando correctamente.",
      "legal.privacy.providersHeading": "Formularios y proveedores de servicios",
      "legal.privacy.providersText": "Las solicitudes de cotización se envían mediante Netlify Forms. Nuestros proveedores de hosting y procesamiento de formularios pueden tratar la información necesaria para entregar su mensaje a CPM Installer Services y respaldar las notificaciones por correo relacionadas.",
      "legal.privacy.sharingHeading": "Compartición y venta de información",
      "legal.privacy.sharingText": "CPM Installer Services no vende información personal. Podemos compartir información únicamente con proveedores técnicos que ayudan a alojar el sitio, procesar formularios o enviar notificaciones por correo, y solo cuando sea razonablemente necesario para esos servicios.",
      "legal.privacy.retentionHeading": "Conservación y seguridad",
      "legal.privacy.retentionText": "Conservamos las solicitudes de cotización durante un período razonable para responder, administrar trabajos potenciales o realizados y mantener registros comerciales habituales.",
      "legal.privacy.securityText": "Usamos medidas razonables destinadas a proteger la información, pero ningún sistema en línea puede prometer seguridad absoluta.",
      "legal.privacy.choicesHeading": "Sus opciones y los menores",
      "legal.privacy.choicesText": "Puede pedirnos que actualicemos o eliminemos información que envió anteriormente comunicándose con nosotros desde la página de Contacto. Este sitio no está dirigido a menores de 13 años y no solicitamos deliberadamente su información personal.",
      "legal.privacy.changesHeading": "Cambios y contacto",
      "legal.privacy.changesText": "Podemos actualizar esta política a medida que el sitio o nuestras prácticas cambien. La fecha anterior muestra la revisión más reciente. Para consultas sobre privacidad, comuníquese con CPM Installer Services desde la página de Contacto.",
      "legal.terms.title": "Términos de uso | CPM Installer Services",
      "legal.terms.description": "Revise los términos para usar el sitio web de CPM Installer Services.",
      "legal.terms.eyebrow": "Uso del sitio web",
      "legal.terms.heading": "Términos de uso",
      "legal.terms.intro": "Estos términos describen las condiciones generales para utilizar el sitio web de CPM Installer Services.",
      "legal.terms.useHeading": "Uso de este sitio web",
      "legal.terms.useText": "Este sitio ofrece información general sobre CPM Installer Services y sus servicios de instalación de pisos y renovación interior. Úselo de forma legal y respetuosa.",
      "legal.terms.projectsHeading": "Proyectos, fotos e información",
      "legal.terms.projectsText": "Las fotos y las descripciones de proyectos son ejemplos de trabajos anteriores o de una dirección de diseño. Los materiales, las condiciones, el alcance y los resultados finales pueden variar de un proyecto a otro.",
      "legal.terms.quotesHeading": "Cotizaciones y acuerdos",
      "legal.terms.quotesText": "La información de este sitio y las solicitudes enviadas mediante el formulario no constituyen cotizaciones ni ofertas vinculantes. Una cotización solo es confiable después de la revisión y confirmación directa de CPM Installer Services.",
      "legal.terms.contractText": "Enviar un formulario no crea un contrato. Los servicios están sujetos a disponibilidad, inspección del sitio, alcance del trabajo y un acuerdo final.",
      "legal.terms.intellectualHeading": "Propiedad intelectual",
      "legal.terms.intellectualText": "Los textos, imágenes, marca y diseño del sitio pertenecen a CPM Installer Services o se usan con permiso. No los reproduzca ni los utilice más allá de la visualización personal normal sin autorización.",
      "legal.terms.prohibitedHeading": "Uso prohibido",
      "legal.terms.prohibitedText": "No use este sitio ni su formulario para enviar spam, información falsa, enlaces maliciosos, contenido abusivo o material que interfiera con el sitio o sus usuarios.",
      "legal.terms.liabilityHeading": "Límites razonables",
      "legal.terms.liabilityText": "Trabajamos para mantener la información del sitio útil y actualizada, pero no garantizamos que cada página esté siempre completa, sea exacta o esté disponible. En la medida permitida por la ley aplicable, CPM Installer Services no es responsable de pérdidas indirectas derivadas del uso de este sitio.",
      "legal.terms.linksHeading": "Enlaces externos, cambios y contacto",
      "legal.terms.linksText": "Si este sitio enlaza a otro sitio web, ese sitio se rige por su propio contenido y prácticas. Podemos revisar estos términos a medida que cambien el sitio o los servicios. Para consultas, comuníquese con CPM Installer Services desde la página de Contacto.",
      "legal.accessibility.title": "Declaración de accesibilidad | CPM Installer Services",
      "legal.accessibility.description": "Lea la declaración de accesibilidad de CPM Installer Services y cómo informar un problema de acceso.",
      "legal.accessibility.eyebrow": "Acceso inclusivo",
      "legal.accessibility.heading": "Declaración de accesibilidad",
      "legal.accessibility.intro": "CPM Installer Services busca que este sitio web sea acogedor, utilizable y más fácil de navegar para la mayor cantidad posible de visitantes.",
      "legal.accessibility.approachHeading": "Nuestro enfoque",
      "legal.accessibility.approachText": "Buscamos que el sitio sea práctico y comprensible para visitantes que usan distintos dispositivos y formas de navegación. La accesibilidad es un esfuerzo continuo y es posible que algunos contenidos aún necesiten mejoras.",
      "legal.accessibility.practicesHeading": "Prácticas que utilizamos",
      "legal.accessibility.practicesText": "Cuando es práctico, creamos y revisamos el sitio considerando lo siguiente:",
      "legal.accessibility.alt": "Texto alternativo para imágenes relevantes.",
      "legal.accessibility.contrast": "Contraste de color legible y jerarquía visual clara.",
      "legal.accessibility.keyboard": "Navegación por teclado para controles interactivos cuando corresponde.",
      "legal.accessibility.semantic": "Estructura semántica de página y encabezados que ayudan a organizar el contenido.",
      "legal.accessibility.labels": "Etiquetas e instrucciones para el formulario de solicitud de cotización.",
      "legal.accessibility.helpHeading": "¿Necesita ayuda o encontró una barrera?",
      "legal.accessibility.helpText": "Si tiene dificultades para usar este sitio o necesita información en otro formato, comuníquese con CPM Installer Services desde la página de Contacto. Describa la página o la tarea involucrada para que podamos comprender mejor el problema.",
      "legal.accessibility.improvementHeading": "Mejora continua",
      "legal.accessibility.improvementText": "Agradecemos sus comentarios y podemos actualizar esta declaración o el sitio a medida que realicemos mejoras. Esta declaración describe nuestro enfoque actual y no promete que cada función funcionará perfectamente en todas las situaciones."
    }
  };
  var originals = {
    text: {},
    placeholder: {},
    aria: {},
    content: {}
  };

  function capture(selector, keyAttribute, valueAttribute, storage) {
    document.querySelectorAll(selector).forEach(function (element) {
      var key = element.getAttribute(keyAttribute);
      if (!key || Object.prototype.hasOwnProperty.call(storage, key)) {
        return;
      }
      storage[key] = valueAttribute ? element.getAttribute(valueAttribute) : element.textContent;
    });
  }

  function apply(selector, keyAttribute, valueAttribute, storage, language) {
    document.querySelectorAll(selector).forEach(function (element) {
      var key = element.getAttribute(keyAttribute);
      var translated = language === "es" ? translations.es[key] : undefined;
      var value = typeof translated === "string" ? translated : storage[key];

      if (typeof value !== "string") {
        return;
      }

      if (valueAttribute) {
        element.setAttribute(valueAttribute, value);
      } else {
        element.textContent = value;
      }
    });
  }

  function updateLanguageButtons(language) {
    document.querySelectorAll("[data-language]").forEach(function (button) {
      var isActive = button.getAttribute("data-language") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function setLanguage(language, persist) {
    var selected = language === "es" ? "es" : "en";

    apply("[data-i18n]", "data-i18n", null, originals.text, selected);
    apply("[data-i18n-placeholder]", "data-i18n-placeholder", "placeholder", originals.placeholder, selected);
    apply("[data-i18n-aria-label]", "data-i18n-aria-label", "aria-label", originals.aria, selected);
    apply("[data-i18n-content]", "data-i18n-content", "content", originals.content, selected);
    document.documentElement.lang = selected;
    updateLanguageButtons(selected);

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, selected);
      } catch (error) {
        // Language switching remains available when storage is unavailable.
      }
    }
  }

  function getStoredLanguage() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
    } catch (error) {
      return "en";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    capture("[data-i18n]", "data-i18n", null, originals.text);
    capture("[data-i18n-placeholder]", "data-i18n-placeholder", "placeholder", originals.placeholder);
    capture("[data-i18n-aria-label]", "data-i18n-aria-label", "aria-label", originals.aria);
    capture("[data-i18n-content]", "data-i18n-content", "content", originals.content);

    document.querySelectorAll("[data-language]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-language"), true);
      });
    });

    setLanguage(getStoredLanguage(), false);
  });

  window.CPMI18n = {
    setLanguage: function (language) {
      setLanguage(language, true);
    }
  };
}());
