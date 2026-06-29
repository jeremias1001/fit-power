"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { cn } from "@/lib/utils";
import {
  CheckCircle2, ChevronRight, BadgeCheck, CalendarCheck, Dumbbell, Building,
  Activity, Zap, User, Users, Apple, Stethoscope, Star, ArrowRight,
  ShieldCheck, Sparkles, Plus, Minus, Trophy, Flame, MapPin, PlayCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { hero, locations, features, plans, services, metrics, testimonials, faqs } = siteContent.landing;
  const modules = siteContent.demo.modules;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      case "users": return <Users className={className} />;
      case "apple": return <Apple className={className} />;
      case "stethoscope": return <Stethoscope className={className} />;
      case "shield-alert": return <ShieldAlert className={className} />;
      case "user-check": return <UserCheck className={className} />;
      case "smartphone": return <Smartphone className={className} />;
      default: return null;
    }
  };

  const steps = [
    { n: "01", title: "Activa tu prueba", desc: "Escríbenos por WhatsApp y reserva tu primer día gratis. Sin tarjeta, sin compromiso.", icon: <Sparkles className="h-6 w-6" /> },
    { n: "02", title: "Entrena y evalúa", desc: "Conoce las sedes, prueba una clase y recibe tu evaluación inicial con un coach.", icon: <Flame className="h-6 w-6" /> },
    { n: "03", title: "Elige tu plan", desc: "Gestiona todo desde la app: reservas, pagos y progreso en un solo lugar.", icon: <Trophy className="h-6 w-6" /> },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-brand-dark overflow-hidden rounded-b-[1.75rem] sm:rounded-b-[2.5rem] lg:rounded-b-[3rem]">
          {/* Full-bleed photo blended into the dark background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-y-0 right-0 w-full sm:w-[88%] lg:w-[60%]">
              <Image
                src="/images/banner mujer y dos personas entrenando.png"
                alt="Atleta entrenando en Fit Power Quilpué"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[62%_center]"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 40%)",
                  maskImage: "linear-gradient(to right, transparent 0%, #000 40%)",
                }}
              />
              {/* darken + bottom fade to seat content */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent" />
              <div className="absolute inset-0 lg:hidden bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/30" />
              <div className="absolute inset-0 lg:hidden bg-brand-dark/30" />
            </div>
            {/* ambient glows */}
            <div className="absolute top-0 right-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-purple/25 blur-[150px]" />
            <div className="absolute -bottom-24 left-0 h-[26rem] w-[26rem] rounded-full bg-brand-orange/15 blur-[150px]" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center min-h-[82vh] lg:min-h-[86vh] py-28 lg:py-28">
              <div className="max-w-3xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full">
                    <MapPin className="h-4 w-4 text-brand-orange" />
                    3 sedes activas en Quilpué
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-extrabold font-heading text-white tracking-[-0.035em] mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)", lineHeight: 1.02 }}
                >
                  {hero.titleLine1}<br />
                  {hero.titleLine2}{" "}
                  <span className="text-transparent bg-clip-text bg-brand-animated">
                    {hero.titleHighlight}.
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-lg md:text-xl text-slate-300/90 mb-10"
                >
                  {hero.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-bold shadow-glow-orange">
                    <a href={getWhatsAppLink("Hola! Quiero activar mi prueba gratis en Fit Power.")}>
                      Empieza gratis hoy <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full sm:w-auto rounded-full px-8 h-14 text-base bg-white/5 border-white/15 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm">
                    <Link href="/demo">
                      Conocer el sistema <PlayCircle className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Rating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-10 inline-flex items-center gap-5 bg-white/[0.06] border border-white/10 backdrop-blur-sm rounded-2xl px-5 py-4"
                >
                  <div className="h-12 w-12 rounded-xl bg-brand-animated flex items-center justify-center text-white shrink-0">
                    <Star className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white leading-none">
                      <span className="text-2xl">{metrics.rating.split("/")[0]}</span>
                      <span className="text-base text-slate-400">/{metrics.rating.split("/")[1]}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">en Google Reviews</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400 pl-4 border-l border-white/10">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-5 grid grid-cols-1 sm:grid-cols-3 max-w-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm rounded-2xl divide-y sm:divide-y-0 sm:divide-x divide-white/10"
                >
                  {hero.stats.map((stat) => (
                    <div key={stat.id} className="flex items-center gap-3 px-5 py-4">
                      <div className={cn("shrink-0", stat.color)}>
                        {getIcon(stat.icon, "h-7 w-7")}
                      </div>
                      <div>
                        <p className="text-xl font-heading font-bold text-white leading-none">{stat.value}</p>
                        <p className="text-xs text-slate-400 mt-1 leading-tight">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SEDES SELECTOR & QUICK FEATURES */}
        <section className="relative z-20 pt-16 md:pt-20 mb-16 container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center gap-6">
            {/* Pill-shaped quick features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl md:rounded-full shadow-premium p-2 md:p-3 w-full max-w-5xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-slate-200/50">
                {features.map((feature) => (
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
                <p className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Entrena donde quieras, cuando quieras</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {locations.map((loc) => (
                  <div key={loc.id} className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent group-hover:from-slate-900/80 transition-colors z-10" />
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      width={600}
                      height={400}
                      className="object-cover h-64 w-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-orange-400 mb-1">
                          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-xs font-bold uppercase tracking-wider">Activa</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white">{loc.name}</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Empezar es fácil</h2>
              <p className="text-3xl md:text-5xl font-heading font-bold text-slate-900">Tu primer entrenamiento, en 3 pasos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
              {/* connecting line */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200" />
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto h-24 w-24 rounded-3xl bg-white shadow-premium border border-slate-100 flex items-center justify-center mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-brand-animated flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">{step.n}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="planes" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
                PLANES PARA TI
              </h2>
              <p className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Elige tu nivel de poder</p>
              <p className="text-slate-500 text-lg">Sin permanencia. Cancela o congela cuando quieras.</p>
              <div className="h-1 w-16 bg-brand-animated mx-auto rounded-full mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch md:items-end pb-8">
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
                      <div className="bg-brand-animated text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-glow-orange flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5 fill-current" /> Más Popular
                      </div>
                    </div>
                  )}

                  <Card className={cn(
                    "h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-premium rounded-3xl",
                    plan.popular ? "border-transparent bg-white shadow-premium relative" : "border-slate-200"
                  )}>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-brand-animated p-[2px] rounded-3xl -z-10" />
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

                      <CardFooter className="pt-6 pb-8 flex-col gap-3">
                        <Button
                          variant={plan.popular ? "gradient" : "outline"}
                          className="w-full rounded-full h-12 text-base"
                          asChild
                        >
                          <a href={getWhatsAppLink(`Hola! Quiero suscribirme al Plan ${plan.name} por ${plan.price}.`)}>
                            Elegir plan
                          </a>
                        </Button>
                        <p className="flex items-center gap-1.5 text-xs text-slate-400">
                          <ShieldCheck className="h-3.5 w-3.5" /> 7 días de garantía
                        </p>
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
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Servicios Incluidos</h2>
              <p className="text-3xl md:text-5xl font-heading font-bold text-slate-900">Todo lo que necesitas para avanzar</p>
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
                    <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover:bg-brand-animated group-hover:text-white transition-all">
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
          <div className="absolute inset-0 bg-dot-grid opacity-100" />
          <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-brand-magenta/20 blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-orange/20 blur-[130px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Fit Power OS
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Todo tu gimnasio en una sola plataforma</h2>
              <p className="text-lg text-slate-300">Un sistema operativo integral que conecta cada área de tu negocio para que crezcas sin fricción.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group bg-slate-800/40 border border-slate-700/60 p-6 rounded-3xl hover:bg-slate-800 hover:border-orange-500/40 transition-all hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-2xl bg-slate-700 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-brand-animated group-hover:text-white transition-all">
                    {getIcon(mod.icon, "h-6 w-6")}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{mod.name}</h3>
                  <p className="text-sm text-slate-400">{mod.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="gradient" size="lg" className="rounded-full px-10 shadow-glow-orange" asChild>
                <Link href="/demo">Explorar el Sistema <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & METRICS */}
        <section id="nosotros" className="py-24 bg-slate-50 scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Lo que dicen de nosotros</h2>
              <p className="text-3xl md:text-5xl font-heading font-bold text-slate-900">Una comunidad que entrena en serio</p>
            </div>

            {/* Metrics band */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
              {[
                { icon: <Users className="h-7 w-7" />, value: metrics.students, label: "alumnos activos" },
                { icon: <Building className="h-7 w-7" />, value: metrics.branches, label: "sedes conectadas" },
                { icon: <CalendarCheck className="h-7 w-7" />, value: metrics.classes, label: "clases semanales" },
                { icon: <Star className="h-7 w-7" />, value: metrics.rating, label: "valoración Google" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center p-6 rounded-3xl bg-white border border-slate-100 shadow-sm"
                >
                  <div className="flex justify-center text-orange-500 mb-3">{m.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">{m.value}</h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">{m.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col"
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-fuchsia-500 flex items-center justify-center shadow-inner">
                      <span className="text-white font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-slate-900">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Preguntas Frecuentes</h2>
                <p className="text-3xl md:text-5xl font-heading font-bold text-slate-900">¿Tienes dudas? Aquí van las respuestas</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => {
                  const open = openFaq === i;
                  return (
                    <div
                      key={i}
                      className={cn(
                        "rounded-2xl border transition-colors",
                        open ? "border-orange-200 bg-orange-50/40" : "border-slate-200 bg-slate-50"
                      )}
                    >
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-6 text-left"
                      >
                        <span className="font-heading font-bold text-slate-900 text-lg">{faq.q}</span>
                        <span className={cn(
                          "h-8 w-8 shrink-0 rounded-full flex items-center justify-center transition-colors",
                          open ? "bg-brand-animated text-white" : "bg-white text-slate-500 border border-slate-200"
                        )}>
                          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL B2B */}
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-premium">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/Banner pie de pagina.png"
                alt="Gym equipment"
                fill
                className="object-cover opacity-25 object-center"
              />
              <div className="absolute inset-0 bg-brand-animated opacity-25 mix-blend-overlay" />
              <div className="absolute inset-0 bg-dot-grid opacity-50" />
            </div>

            <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
                  Para dueños de gimnasios
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                  Digitaliza tus sedes y vende más desde una sola plataforma.
                </h2>
                <p className="text-lg text-slate-300">
                  Reserva tu llamada estratégica para ver cómo Fit Power OS puede transformar tu gimnasio.
                </p>
              </div>
              <Button variant="gradient" size="lg" asChild className="shrink-0 w-full md:w-auto px-10 h-14 text-lg rounded-full shadow-glow-orange">
                <a href={getWhatsAppLink("Hola! Me interesa agendar una reunión para ver cómo Fit Power OS puede digitalizar mis sedes.")}>
                  Agendar demostración <ChevronRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
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
