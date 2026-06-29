import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";
import { CheckCircle2, ShieldCheck, CreditCard as CreditCardIcon } from "lucide-react";

export default function CheckoutDemo() {
  const plan = siteContent.landing.plans.find(p => p.id === "power") || siteContent.landing.plans[0];
  
  const getWhatsAppLink = () => {
    return `https://wa.me/${siteContent.global.whatsappNumber.replace("+", "")}?text=${encodeURIComponent("Hola! Estoy probando el simulador de Checkout y quiero finalizar mi pago.")}`;
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-slate-900">Checkout Seguro</h1>
        <p className="text-slate-500 text-sm">Completa tu inscripción a Fit Power Quilpué</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Datos del Alumno</CardTitle>
              <CardDescription>Ingresa tu información personal para la membresía.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-slate-700">Nombre</label>
                    <input className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Juan" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-slate-700">Apellidos</label>
                    <input className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Pérez" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-slate-700">Correo Electrónico</label>
                  <input type="email" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="juan@ejemplo.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-slate-700">Teléfono</label>
                  <input type="tel" className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="+56 9 1234 5678" />
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Método de Pago</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-slate-200 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                    <CreditCardIcon className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Tarjeta de Crédito / Débito</p>
                    <p className="text-xs text-slate-500">Procesado de forma segura vía Webpay/MercadoPago</p>
                  </div>
                </div>
                <div className="h-5 w-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24 border-2 border-orange-500/20 shadow-xl bg-gradient-to-b from-white to-orange-50/30">
            <CardHeader>
              <CardTitle>Resumen de Compra</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div>
                  <h4 className="font-heading font-bold text-slate-900">{plan.name}</h4>
                  <p className="text-xs text-slate-500">Fit Power El Belloto</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">{plan.price}</p>
                  <p className="text-xs text-slate-500">Facturación recurrente</p>
                </div>
              </div>

              <div className="space-y-2">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium text-slate-900">Total a pagar hoy</span>
                  <span className="text-2xl font-bold font-heading text-slate-900">{plan.price}</span>
                </div>
                
                <Button variant="gradient" className="w-full h-12 text-lg rounded-full shadow-lg" asChild>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Continuar al pago
                  </a>
                </Button>
                
                <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1 mt-4">
                  <ShieldCheck className="h-3 w-3" /> Pago 100% seguro y encriptado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
