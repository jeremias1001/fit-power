import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Users, TrendingUp, AlertCircle, Calendar, MapPin, CheckCircle2, Clock } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function AdminDashboard() {
  const { locations } = siteContent.landing;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Dashboard General</h1>
          <p className="text-slate-500 mt-1">Resumen de operaciones y finanzas.</p>
        </div>
        
        {/* Branch Selector */}
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-2 shadow-sm">
          <MapPin className="h-5 w-5 text-orange-500 ml-2" />
          <select className="bg-transparent border-none text-sm font-medium text-slate-700 focus:ring-0 outline-none pr-4">
            <option>Todas las sedes</option>
            {locations.map(loc => (
              <option key={loc.id}>{loc.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-slate-500">Socios Activos</p>
              <Users className="h-4 w-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold">2,504</div>
            <p className="text-xs text-green-500 font-medium mt-1">+12% este mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-slate-500">Ingresos (MRR)</p>
              <TrendingUp className="h-4 w-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold">$24.8M</div>
            <p className="text-xs text-green-500 font-medium mt-1">+4% este mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-slate-500">Pagos Pendientes</p>
              <AlertCircle className="h-4 w-4 text-orange-500" />
            </div>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-orange-500 mt-1">Requieren seguimiento hoy</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-slate-500">Reservas Hoy</p>
              <Calendar className="h-4 w-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-slate-500 mt-1">85% ocupación general</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Occupation Chart (Simulated) */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Ocupación por Sede</CardTitle>
            <CardDescription>Capacidad vs. Asistencia de los últimos 7 días</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 mt-4 flex items-end gap-2 justify-between px-2">
              {[60, 80, 40, 90, 100, 75, 85].map((val, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-full">
                  <div className="w-full bg-slate-100 rounded-t-sm h-full relative group cursor-pointer flex items-end">
                    <div 
                      className="w-full bg-[image:var(--background-image-brand-gradient)] rounded-t-sm transition-all group-hover:opacity-80" 
                      style={{ height: `${val}%` }} 
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {val}%
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tasks List */}
        <Card>
          <CardHeader>
            <CardTitle>Tareas del día</CardTitle>
            <CardDescription>Operaciones pendientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Llamar a prospectos", time: "10:00 AM", status: "pending", icon: Clock },
                { title: "Revisión de mantención", time: "13:00 PM", status: "done", icon: CheckCircle2 },
                { title: "Pago de proveedores", time: "16:00 PM", status: "pending", icon: AlertCircle },
              ].map((task, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-xl border border-slate-100 bg-slate-50">
                  <task.icon className={`h-5 w-5 mt-0.5 ${task.status === 'done' ? 'text-green-500' : 'text-orange-500'}`} />
                  <div>
                    <h4 className={`text-sm font-medium ${task.status === 'done' ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                      {task.title}
                    </h4>
                    <p className="text-xs text-slate-500">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Payments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Pagos Pendientes (Hoy)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-slate-50/50">
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500">Socio</th>
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500">Monto</th>
                    <th className="h-10 px-4 text-right align-middle font-medium text-slate-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {[
                    { name: "Carlos Silva", amount: "$29.990", branch: "Centro" },
                    { name: "Ana Gómez", amount: "$39.990", branch: "El Belloto" },
                    { name: "Pedro Martínez", amount: "$19.990", branch: "Villa Alemana" },
                  ].map((p, i) => (
                    <tr key={i} className="border-b transition-colors hover:bg-slate-50/50">
                      <td className="p-4 align-middle">
                        <div className="font-medium text-slate-900">{p.name}</div>
                        <div className="text-xs text-slate-500">{p.branch}</div>
                      </td>
                      <td className="p-4 align-middle font-medium text-orange-600">{p.amount}</td>
                      <td className="p-4 align-middle text-right">
                        <button className="text-xs font-semibold text-[image:var(--background-image-brand-gradient)] bg-clip-text text-transparent border border-orange-200 px-3 py-1 rounded-full hover:bg-orange-50">
                          Cobrar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nuevas Matrículas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-slate-50/50">
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500">Nombre</th>
                    <th className="h-10 px-4 text-left align-middle font-medium text-slate-500">Plan</th>
                    <th className="h-10 px-4 text-right align-middle font-medium text-slate-500">Fecha</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {["Javiera P.", "Tomás H.", "Luis C."].map((name, i) => (
                    <tr key={i} className="border-b transition-colors hover:bg-slate-50/50">
                      <td className="p-4 align-middle font-medium text-slate-900">{name}</td>
                      <td className="p-4 align-middle text-slate-500">{i % 2 === 0 ? "Power" : "Start"}</td>
                      <td className="p-4 align-middle text-right text-slate-500">Hoy</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
