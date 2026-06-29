export const siteContent = {
  global: {
    whatsappNumber: "+56912345678",
    defaultWhatsAppMessage: "Hola! Vengo de la demo de Fit Power OS y me gustaría obtener más información.",
  },
  landing: {
    hero: {
      titleLine1: "Entrena mejor.",
      titleLine2: "Vive más",
      titleHighlight: "fuerte",
      subtitle: "Fitness, energía y comunidad en Quilpué.",
      stats: [
        { id: "members", value: "+1.500", label: "Miembros activos", icon: "users", color: "text-orange-500" },
        { id: "years", value: "9", label: "Años transformando vidas", icon: "zap", color: "text-brand-purple" },
        { id: "commit", value: "100%", label: "Comprometidos contigo", icon: "activity", color: "text-brand-magenta" },
      ],
    },
    locations: [
      { id: "quilpue", name: "Fit Power Quilpué Centro", image: "/images/banner mujer y dos personas entrenando.png" },
      { id: "belloto", name: "Fit Power El Belloto", image: "/images/ChatGPT Image 28 jun 2026, 15_22_07 (4).png" },
      { id: "villa", name: "Fit Power Villa Alemana", image: "/images/ChatGPT Image 28 jun 2026, 15_22_09 (6).png" }
    ],
    features: [
      { id: 1, title: "Entrenadores certificados", icon: "badge-check" },
      { id: 2, title: "Reserva online", icon: "calendar-check" },
      { id: 3, title: "Planes flexibles", icon: "dumbbell" },
      { id: 4, title: "Sistema multicede", icon: "building" }
    ],
    plans: [
      {
        id: "start",
        name: "Start",
        subtitle: "Ideal para comenzar",
        price: "$19.990",
        period: "/mes",
        popular: false,
        features: ["Acceso gimnasio", "Clases grupales", "App Fit Power", "Evaluación inicial"]
      },
      {
        id: "power",
        name: "Power",
        subtitle: "Equilibrio perfecto",
        price: "$29.990",
        period: "/mes",
        popular: true,
        features: ["Acceso gimnasio", "Clases grupales ilimitadas", "App Fit Power", "Evaluación corporal"]
      },
      {
        id: "elite",
        name: "Elite",
        subtitle: "Rendimiento sin límites",
        price: "$39.990",
        period: "/mes",
        popular: false,
        features: ["Acceso gimnasio 24/7", "Clases grupales ilimitadas", "App Fit Power", "Asesoría personalizada"]
      }
    ],
    services: [
      { id: "hiit", name: "HIIT", description: "Entrenamientos intensos para quemar y avanzar.", icon: "activity" },
      { id: "funcional", name: "Funcional", description: "Fuerza, movilidad y rendimiento real.", icon: "zap" },
      { id: "pt", name: "Personal Training", description: "Entrenamiento 100% personalizado.", icon: "user" },
      { id: "nutricion", name: "Nutrición", description: "Planes de alimentación adaptados a tus objetivos.", icon: "apple" },
      { id: "evaluacion", name: "Evaluación física", description: "Medición antropométrica y seguimiento de progreso.", icon: "stethoscope" }
    ],
    metrics: {
      students: "+2500",
      classes: "+120",
      branches: "3",
      rating: "4.9/5"
    },
    testimonials: [
      {
        id: "camila",
        quote: "Fit Power Quilpué cambió mi rutina y mi mentalidad. Los entrenadores te acompañan de verdad y la comunidad te motiva todos los días.",
        name: "Camila R.",
        role: "Alumna · 8 meses",
        initials: "CR"
      },
      {
        id: "matias",
        quote: "Reservo mis clases desde el celular en 10 segundos y nunca más perdí un cupo. La app es rapidísima y todo queda registrado.",
        name: "Matías P.",
        role: "Plan Power",
        initials: "MP"
      },
      {
        id: "fernanda",
        quote: "Como dueña de gimnasio, ver las 3 sedes en un solo panel me cambió la vida. Sé exactamente cuánto vendí hoy sin llamar a nadie.",
        name: "Fernanda S.",
        role: "Gerencia · Multisede",
        initials: "FS"
      }
    ],
    faqs: [
      {
        q: "¿Puedo congelar o cancelar mi plan cuando quiera?",
        a: "Sí. Todos los planes son sin permanencia. Puedes congelar hasta 30 días al año y cancelar en cualquier momento directo desde la app, sin papeleo."
      },
      {
        q: "¿La prueba gratis tiene costo o compromiso?",
        a: "Cero. Activas tu prueba por WhatsApp, vienes a entrenar y recién después decides. No pedimos tarjeta para empezar."
      },
      {
        q: "¿Mi membresía sirve en las 3 sedes?",
        a: "Con los planes Power y Elite accedes a Quilpué Centro, El Belloto y Villa Alemana con la misma credencial digital."
      },
      {
        q: "¿Necesito experiencia previa para entrenar?",
        a: "Para nada. Incluimos una evaluación inicial y un plan guiado por entrenadores certificados, sin importar tu punto de partida."
      }
    ]
  },
  demo: {
    modules: [
      { id: "admin", name: "Administrador / Gerencia", description: "Reportes, finanzas y control multisede", icon: "shield-alert", path: "/demo/admin" },
      { id: "recepcion", name: "Recepción", description: "Control de acceso, agendas y POS", icon: "user-check", path: "/demo/agenda" },
      { id: "entrenador", name: "Entrenador / Coach", description: "Gestión de clases y rutinas", icon: "dumbbell", path: "/demo/roles" },
      { id: "nutri", name: "Nutricionista", description: "Pautas alimenticias y mediciones", icon: "apple", path: "/demo/roles" },
      { id: "medico", name: "Médico Deportivo", description: "Fichas médicas y evaluaciones", icon: "stethoscope", path: "/demo/roles" },
      { id: "alumno", name: "Alumno (App View)", description: "Reservas online y pagos", icon: "smartphone", path: "/demo/checkout" },
    ]
  }
};
