import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";
import { Calendar as CalendarIcon, Clock, User, ChevronLeft, ChevronRight, MapPin, Activity, Zap } from "lucide-react";

export default function AgendaDemo() {
  const timeslots = ["07:00", "08:00", "09:00", "17:00", "18:00", "19:00"];
  const { locations, services } = siteContent.landing;
  
  const getWhatsAppLink = () => {
    return `https://wa.me/${siteContent.global.whatsappNumber.replace("+", "")}?text=${encodeURIComponent("Hola! Estoy en la demo y me gustaría agendar una hora de prueba.")}`;
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
      
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-slate-900">Agenda & Reservas</h1>
          <p className="text-slate-500 text-sm">Reserva tus clases grupales o personales fácilmente.</p>
        </div>

        {/* Filters */}
        <Card className="bg-slate-50 border-slate-200">
          <CardContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Sede</label>
              <div className="flex items-center bg-white border border-slate-200 rounded-lg p-2">
                <MapPin className="h-4 w-4 text-orange-500 mr-2" />
                <select className="bg-transparent border-none text-sm w-full outline-none">
                  {locations.map(loc => <option key={loc.id}>{loc.name}</option>)}
                </select>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Servicio</label>
              <div className="flex items-center bg-white border border-slate-200 rounded-lg p-2">
                <Activity className="h-4 w-4 text-orange-500 mr-2" />
                <select className="bg-transparent border-none text-sm w-full outline-none">
                  <option>Todos los servicios</option>
                  {services.map(srv => <option key={srv.id}>{srv.name}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Profesional</label>
              <div className="flex items-center bg-white border border-slate-200 rounded-lg p-2">
                <User className="h-4 w-4 text-orange-500 mr-2" />
                <select className="bg-transparent border-none text-sm w-full outline-none">
                  <option>Cualquier profesional</option>
                  <option>Mario L.</option>
                  <option>Carla R.</option>
                  <option>Javiera P.</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Calendario Octubre</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8"><ChevronLeft className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="h-8 w-8"><ChevronRight className="h-4 w-4" /></Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Fake Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
                <div key={d} className="text-xs font-semibold text-slate-500 uppercase">{d}</div>
              ))}
              {Array.from({length: 31}).map((_, i) => (
                <div key={i} className={`p-2 rounded-lg text-sm flex items-center justify-center cursor-pointer transition-colors ${i === 14 ? 'bg-[image:var(--background-image-brand-gradient)] text-white font-bold shadow-md' : 'hover:bg-slate-100 text-slate-700'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Horarios Disponibles (15 Octubre)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {timeslots.map(t => (
                <Button key={t} variant={t === "18:00" ? "gradient" : "outline"} className={t === "18:00" ? "shadow-md" : ""}>
                  {t}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar Reservation Summary */}
      <div className="w-full lg:w-80 space-y-6">
        <Card className="bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--background-image-brand-gradient)] opacity-10" />
          <CardHeader className="relative z-10">
            <CardTitle className="text-xl font-heading">Tu Reserva</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 relative z-10">
            <div className="flex items-center gap-3 text-sm text-slate-200 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <MapPin className="h-5 w-5 text-orange-400 shrink-0" />
              <span>Fit Power Quilpué Centro</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <CalendarIcon className="h-5 w-5 text-orange-400 shrink-0" />
              <span>Hoy, 15 de Octubre</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <Clock className="h-5 w-5 text-orange-400 shrink-0" />
              <span>18:00 - 19:00</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <Activity className="h-5 w-5 text-orange-400 shrink-0" />
              <span>Clase HIIT Avanzado</span>
            </div>
            
            <div className="pt-6 mt-2 border-t border-slate-700/50">
              <Button variant="gradient" className="w-full h-12 rounded-full text-base" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Reservar por WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
