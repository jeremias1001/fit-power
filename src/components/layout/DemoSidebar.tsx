"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  CreditCard,
  Users,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/demo", label: "Overview", icon: LayoutDashboard },
  { href: "/demo/admin", label: "Dashboard Gerencia", icon: ShieldCheck },
  { href: "/demo/agenda", label: "Agenda & Reservas", icon: Calendar },
  { href: "/demo/checkout", label: "Checkout", icon: CreditCard },
  { href: "/demo/roles", label: "Roles & Accesos", icon: Users },
];

export function DemoSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-brand-dark text-slate-300 flex flex-col fixed left-0 top-0 overflow-y-auto border-r border-white/5">
      <div className="p-6">
        <Link href="/" className="inline-block">
          <Image
            src="/images/logo-white.png"
            alt="Fit Power OS"
            width={990}
            height={533}
            className="object-contain h-9 w-auto"
          />
        </Link>
        <div className="mt-3 text-[10px] font-bold text-orange-400 bg-orange-400/10 border border-orange-400/20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
          Demo Environment
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        <div className="pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Plataforma
        </div>
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-brand-animated text-white shadow-glow-orange"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 hover:text-white transition-colors text-slate-400"
        >
          <LogOut className="h-5 w-5" />
          Salir de la Demo
        </Link>
      </div>
    </div>
  );
}
