"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/lib/content";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const getWhatsAppLink = () => {
    return `https://wa.me/${siteContent.global.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(siteContent.global.defaultWhatsAppMessage)}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/images/Logo.png" 
            alt="Fit Power Quilpué" 
            width={160} 
            height={48} 
            className="object-contain h-10 md:h-12 w-auto"
            style={{ width: 'auto', height: 'auto', maxHeight: '48px' }}
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#planes" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">Planes</Link>
          <Link href="/demo" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">Demo OS</Link>
          <Button variant="gradient" asChild className="shadow-lg shadow-brand-orange/25 rounded-full px-6">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Prueba gratis
            </a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="md:hidden text-slate-900 p-2"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-6 pt-2 space-y-3 animate-in slide-in-from-top">
          <Link href="#planes" className="block py-3 text-base font-semibold text-slate-700 border-b border-slate-100" onClick={() => setMobileOpen(false)}>Planes</Link>
          <Link href="/demo" className="block py-3 text-base font-semibold text-slate-700 border-b border-slate-100" onClick={() => setMobileOpen(false)}>Demo del Sistema</Link>
          <Button variant="gradient" asChild className="w-full rounded-full mt-2">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Prueba gratis
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
