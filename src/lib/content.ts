export const siteContent = {
  global: {
    whatsappNumber: "+56912345678",
    defaultWhatsAppMessage: "Hola! Vengo de la demo de Fit Power OS y me gustaría obtener más información.",
  },
  landing: {
    hero: {
      titleLine1: "Tu próximo",
      titleLine2: "nivel empieza",
      titleHighlight: "aquí",
      subtitle: "Entrenamiento, bienestar y comunidad en el corazón de Quilpué.",
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
    }
  },
  demo: {
    modules: [
      { id: "admin", name: "Administrador / Gerencia", description: "Reportes, finanzas y control multisede", icon: "shield-alert", path: "/demo/admin" },
      { id: "recepcion", name: "Recepción", description: "Control de acceso, agendas y POS", icon: "user-check", path: "/demo/agenda" },
      { id: "entrenador", name: "Entrenador / Coach", description: "Gestión de clases y rutinas", icon: "dumbbell", path: "/demo" },
      { id: "nutri", name: "Nutricionista", description: "Pautas alimenticias y mediciones", icon: "apple", path: "/demo" },
      { id: "medico", name: "Médico Deportivo", description: "Fichas médicas y evaluaciones", icon: "stethoscope", path: "/demo" },
      { id: "alumno", name: "Alumno (App View)", description: "Reservas online y pagos", icon: "smartphone", path: "/demo/checkout" },
    ]
  }
};
