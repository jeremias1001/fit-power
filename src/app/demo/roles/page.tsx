import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ShieldAlert, UserCheck, Stethoscope, Apple, Dumbbell, Shield } from "lucide-react";

export default function RolesDemo() {
  const roles = [
    {
      id: "admin",
      title: "Administrador / Gerencia",
      icon: <ShieldAlert className="h-6 w-6" />,
      color: "bg-red-50 text-red-600 border-red-200",
      description: "Acceso total al sistema, reportes financieros y configuración de sedes.",
      modules: ["Dashboard Financiero", "Configuración de Sedes", "Gestión de Personal", "Reportes Exportables"]
    },
    {
      id: "recepcion",
      title: "Recepción",
      icon: <UserCheck className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      description: "Control de acceso, ventas directas y atención al cliente en sucursal.",
      modules: ["Punto de Venta (POS)", "Control de Asistencia", "Gestión de Agendas", "Creación de Alumnos"]
    },
    {
      id: "entrenador",
      title: "Entrenador / Coach",
      icon: <Dumbbell className="h-6 w-6" />,
      color: "bg-orange-50 text-orange-600 border-orange-200",
      description: "Gestión de clases grupales y rutinas personalizadas.",
      modules: ["Mi Agenda de Clases", "Lista de Asistentes", "Rutinas de Alumnos", "Evaluaciones Físicas"]
    },
    {
      id: "nutri",
      title: "Nutricionista",
      icon: <Apple className="h-6 w-6" />,
      color: "bg-green-50 text-green-600 border-green-200",
      description: "Seguimiento nutricional y pautas alimenticias.",
      modules: ["Fichas Clínicas Nutricionales", "Pautas Alimenticias", "Mediciones Antropométricas"]
    },
    {
      id: "medico",
      title: "Médico Deportivo",
      icon: <Stethoscope className="h-6 w-6" />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-200",
      description: "Evaluaciones médicas y liberación deportiva.",
      modules: ["Fichas Médicas", "Certificados de Aptitud", "Historial de Lesiones"]
    },
    {
      id: "alumno",
      title: "Alumno (App View)",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      description: "Vista del cliente final en la plataforma/app móvil.",
      modules: ["Reserva de Clases", "Pagos y Renovaciones", "Mi Progreso", "Mis Rutinas"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-slate-900">Gestión de Roles y Accesos</h1>
        <p className="text-slate-500 text-sm">Controla qué ve cada miembro de tu equipo (Multisede).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Card key={role.id} className="h-full">
            <CardHeader>
              <div className={`h-12 w-12 rounded-xl border flex items-center justify-center mb-4 ${role.color}`}>
                {role.icon}
              </div>
              <CardTitle>{role.title}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Módulos permitidos</p>
                <ul className="space-y-2">
                  {role.modules.map((module, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
