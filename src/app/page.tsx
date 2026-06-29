"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronRight, BadgeCheck, CalendarCheck, Dumbbell, Building, Activity, Zap, User, Users, Apple, Stethoscope, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { hero, locations, features, plans, services, metrics } = siteContent.landing;
  const modules = siteContent.demo.modules;

  const getWhatsAppLink = (message?: string) => {
    const text = message || siteContent.global.defaultWhatsAppMessage;
    return `https://wa.me/${siteContent.global.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(text)}`;
  };

  const getIcon = (iconName: string, className = "h-8 w-8") => {
    switch (iconName) {
      case "badge-check": return <BadgeCheck className={className} />;
      case "calendar-check": return <CalendarCheck className={className} />;
      case "dumbbell": return <Dumbbell className={className} />;
      case "building": return <Building className={className} />;
      case "activity": return <Activity className={className} />;
      case "zap": return <Zap className={className} />;
      case "user": return <User className={className} />;
      case "apple": return <Apple className={className} />;
      case "stethoscope": return <Stethoscope className={className} />;
      case "shield-alert": return <ShieldAlert className={className} />;
      case "user-check": return <UserCheck className={className} />;
      case "smartphone": return <Smartphone className={className} />;
      default: return null;
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-28 pb-40 lg:pt-36 lg:pb-56 overflow-hidden bg-brand-dark flex items-center min-h-[85vh] md:min-h-[90vh]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Banner head de pagina.png" 
              alt="Hero Fit Power" 
              fill 
              className="object-cover opacity-60 object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
            {/* Subtle brand gradient overlay */}
            <div className="absolute inset-0 bg-[image:var(--background-image-brand-gradient)] opacity-10 mix-blend-overlay" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Brand badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  3 sedes activas en Quilpué
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[42px] sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading text-white leading-[1.05] tracking-tight mb-6"
              >
                {hero.titleLine1} <br className="hidden sm:block" />
                {hero.titleLine2}{" "}
                <span className="text-transparent bg-clip-text bg-[image:var(--background-image-brand-gradient)]">
                  {hero.titleHighlight}.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1.5 w-20 sm:w-32 bg-[image:var(--background-image-brand-gradient)] rounded-full mb-6"
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed"
              >
                {hero.subtitle}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto rounded-full px-8 h-14 text-base shadow-xl shadow-brand-orange/30">
                  <a href={getWhatsAppLink("Hola! Quiero activar mi prueba gratis en Fit Power.")}>
                    ⚡ Prueba gratis
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto rounded-full px-8 h-14 text-base bg-white/5 border-white/20 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm">
                  <Link href="/demo">
                    Ver demo del sistema <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEDES SELECTOR & QUICK FEATURES */}
        <section className="relative z-20 -mt-24 md:-mt-32 mb-16 container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center gap-6">
            {/* Pill-shaped quick features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl md:rounded-full shadow-2xl p-2 md:p-3 w-full max-w-5xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-slate-200/50">
                {features.map((feature, i) => (
                  <div key={feature.id} className="flex-1 flex items-center justify-start md:justify-center gap-4 py-4 md:py-2 px-6 w-full">
                    <div className="text-orange-500 bg-orange-100/50 p-2.5 rounded-full shrink-0">
                      {getIcon(feature.icon, "h-6 w-6")}
                    </div>
                    <span className="font-heading font-semibold text-slate-800 text-base md:text-sm leading-tight">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Sedes Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 w-full"
            >
              <div className="text-center mb-8">
                <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">Nuestras Sedes</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {locations.map((loc, i) => (
                  <div key={loc.id} className="group relative overflow-hidden rounded-3xl cursor-pointer">
                    <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors z-10" />
                    <Image 
                      src={loc.image} 
                      alt={loc.name}
                      width={600}
                      height={400}
                      className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-orange-400 mb-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Activa</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white">{loc.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRICING */}
        <section id="planes" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
                PLANES PARA TI
              </h2>
              <div className="h-1 w-16 bg-[image:var(--background-image-brand-gradient)] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end pb-8">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative ${plan.popular ? 'md:scale-105 z-10' : 'z-0'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-[image:var(--background-image-brand-gradient)] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                        Más Popular
                      </div>
                    </div>
                  )}

                  <Card className={cn(
                    "h-full overflow-hidden transition-all duration-300 hover:shadow-2xl rounded-3xl",
                    plan.popular ? "border-transparent bg-white shadow-xl relative" : "border-slate-200"
                  )}>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-[image:var(--background-image-brand-gradient)] p-[2px] rounded-3xl -z-10" />
                    )}
                    
                    <div className="bg-white h-full rounded-[calc(1.5rem-2px)] flex flex-col">
                      <CardHeader className="text-center pb-8 pt-10">
                        <CardTitle className="text-3xl font-bold font-heading">{plan.name}</CardTitle>
                        <p className="text-slate-500 text-sm mt-2">{plan.subtitle}</p>
                        <div className="mt-6 flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-heading font-bold text-slate-900">{plan.price}</span>
                          <span className="text-slate-500 font-medium">{plan.period}</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="flex-1">
                        <ul className="space-y-4">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                              <span className="text-slate-600 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      
                      <CardFooter className="pt-6 pb-8">
                        <Button 
                          variant={plan.popular ? "gradient" : "outline"} 
                          className="w-full rounded-full h-12 text-base"
                          asChild
                        >
                          <a href={getWhatsAppLink(`Hola! Quiero suscribirme al Plan ${plan.name} por ${plan.price}.`)}>
                            Elegir plan
                          </a>
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES PILLS */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Servicios Incluidos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-200 rounded-full p-2 pr-6 flex items-center justify-between cursor-pointer group hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover:bg-[image:var(--background-image-brand-gradient)] group-hover:text-white transition-all">
                      {getIcon(service.icon, "h-6 w-6")}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900">{service.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{service.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-orange-500 transition-colors shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULOS SHOWCASE */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[image:var(--background-image-brand-gradient)] opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Todo Fit Power en una sola plataforma</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">Nuestro sistema operativo integral conecta cada área de tu negocio para que crezcas sin fricción.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 p-6 rounded-3xl hover:bg-slate-800 transition-colors"
                >
                  <div className="h-12 w-12 rounded-2xl bg-slate-700 flex items-center justify-center text-orange-400 mb-4">
                    {getIcon(mod.icon, "h-6 w-6")}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{mod.name}</h3>
                  <p className="text-sm text-slate-400">{mod.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button variant="outline" size="lg" className="rounded-full border-slate-600 bg-transparent text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/demo">Explorar el Sistema <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & METRICS */}
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-200 flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-200 pb-10 lg:pb-0 lg:pr-12">
              <div className="text-[image:var(--background-image-brand-gradient)] mb-6 text-orange-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.439 14.99H11.75V3H21V10.08L17.24 21H14.017ZM3.25 21L5.672 14.99H1V3H10.25V10.08L6.47 21H3.25Z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl text-slate-700 font-medium italic mb-8 leading-relaxed">
                "Fit Power Quilpué cambió mi rutina y mi mentalidad. Los entrenadores te acompañan de verdad y la comunidad te motiva todos los días."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-400 to-fuchsia-500 flex items-center justify-center shadow-inner">
                  <span className="text-white font-bold text-lg">CR</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-lg">Camila R.</h4>
                  <p className="text-sm text-slate-500">Alumna Fit Power</p>
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-8 w-full">
              <div className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="flex justify-center text-orange-500 mb-4"><Users className="h-8 w-8" /></div>
                <h3 className="text-4xl font-heading font-bold text-slate-900">{metrics.students}</h3>
                <p className="text-sm font-medium text-slate-500 mt-2">alumnos activos</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="flex justify-center text-orange-500 mb-4"><Building className="h-8 w-8" /></div>
                <h3 className="text-4xl font-heading font-bold text-slate-900">{metrics.branches}</h3>
                <p className="text-sm font-medium text-slate-500 mt-2">sedes conectadas</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="flex justify-center text-orange-500 mb-4"><CalendarCheck className="h-8 w-8" /></div>
                <h3 className="text-4xl font-heading font-bold text-slate-900">{metrics.classes}</h3>
                <p className="text-sm font-medium text-slate-500 mt-2">clases semanales</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="flex justify-center text-orange-500 mb-4">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <h3 className="text-4xl font-heading font-bold text-slate-900">{metrics.rating}</h3>
                <p className="text-sm font-medium text-slate-500 mt-2">valoración en Google</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA FINAL B2B */}
        <section className="pb-24 container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/Banner pie de pagina.png" 
                alt="Gym equipment" 
                fill 
                className="object-cover opacity-20 object-center"
              />
              <div className="absolute inset-0 bg-[image:var(--background-image-brand-gradient)] opacity-20 mix-blend-overlay" />
            </div>
            
            <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                  Digitaliza tus sedes y vende más desde una sola plataforma.
                </h2>
                <p className="text-lg text-slate-300">
                  Reserva tu llamada estratégica para ver cómo Fit Power OS puede transformar tu gimnasio.
                </p>
              </div>
              <Button variant="gradient" size="lg" asChild className="shrink-0 w-full md:w-auto px-10 h-14 text-lg rounded-full">
                <a href={getWhatsAppLink("Hola! Me interesa agendar una reunión para ver cómo Fit Power OS puede digitalizar mis sedes.")}>
                  Agendar demostración <ChevronRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Additional missing icons for B2B Modules section
function ShieldAlert(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
}
function UserCheck(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
}
function Smartphone(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
}
