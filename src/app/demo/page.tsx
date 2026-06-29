import { siteContent } from "@/lib/content";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShieldAlert, UserCheck, Dumbbell, Apple, Stethoscope, Smartphone, LayoutDashboard, Settings } from "lucide-react";

export default function DemoOverview() {
  const { modules } = siteContent.demo;

  const getIcon = (id: string) => {
    switch (id) {
      case "admin": return <ShieldAlert className="h-8 w-8" />;
      case "recepcion": return <UserCheck className="h-8 w-8" />;
      case "entrenador": return <Dumbbell className="h-8 w-8" />;
      case "nutri": return <Apple className="h-8 w-8" />;
      case "medico": return <Stethoscope className="h-8 w-8" />;
      case "alumno": return <Smartphone className="h-8 w-8" />;
      default: return <Settings className="h-8 w-8" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Bienvenido a Fit Power OS</h1>
        <p className="text-slate-500 mt-2 text-lg">Selecciona un módulo o rol para explorar el sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Card key={mod.id} className="flex flex-col hover:border-orange-200 transition-all shadow-sm hover:shadow-lg">
            <CardHeader>
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                {getIcon(mod.id)}
              </div>
              <CardTitle className="font-heading text-xl">{mod.name}</CardTitle>
              <CardDescription>{mod.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-end">
              <Button variant="outline" className="w-full rounded-full" asChild>
                <Link href={mod.path}>
                  Ingresar al módulo
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
