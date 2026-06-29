"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Calendar, 
  CreditCard, 
  Users, 
  Settings,
  LogOut
} from "lucide-react";
import Image from "next/image";

export function DemoSidebar() {
  const pathname = usePathname();
  const modules = siteContent.demo.modules;

  const getIcon = (id: string) => {
    switch (id) {
      case "admin": return <LayoutDashboard className="h-5 w-5" />;
      case "agenda": return <Calendar className="h-5 w-5" />;
      case "checkout": return <CreditCard className="h-5 w-5" />;
      case "roles": return <Users className="h-5 w-5" />;
      default: return <Settings className="h-5 w-5" />;
    }
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-slate-300 flex flex-col fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/">
          <Image 
            src="/images/Logo.png" 
            alt="Fit Power OS" 
            width={120} 
            height={40} 
            className="object-contain h-10 w-auto brightness-0 invert"
          />
        </Link>
        <div className="mt-2 text-xs font-medium text-orange-400 bg-orange-400/10 inline-block px-2 py-1 rounded">
          DEMO ENVIRONMENT
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <Link
          href="/demo"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
            pathname === "/demo" ? "bg-slate-800 text-white" : "hover:bg-slate-800/50 hover:text-white"
          )}
        >
          <LayoutDashboard className="h-5 w-5" />
          Overview
        </Link>

        <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Módulos
        </div>

        {modules.map((mod) => (
          <Link
            key={mod.id}
            href={mod.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === mod.path ? "bg-[image:var(--background-image-brand-gradient)] text-white shadow-md" : "hover:bg-slate-800/50 hover:text-white"
            )}
          >
            {getIcon(mod.id)}
            {mod.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800/50 hover:text-white transition-colors text-slate-400">
          <LogOut className="h-5 w-5" />
          Salir de la Demo
        </Link>
      </div>
    </div>
  );
}
