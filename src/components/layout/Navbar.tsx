"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/content";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getWhatsAppLink = () => {
    return `https://wa.me/${siteContent.global.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(siteContent.global.defaultWhatsAppMessage)}`;
  };

  const links = [
    { href: "#planes", label: "Planes" },
    { href: "/demo", label: "Demo OS" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <div
        className={
          "mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border pl-5 pr-2 py-2 transition-all duration-300 " +
          (scrolled
            ? "border-white/15 bg-brand-dark/80 shadow-xl shadow-black/40 backdrop-blur-2xl"
            : "border-white/10 bg-brand-dark/55 shadow-lg shadow-black/25 backdrop-blur-xl")
        }
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="Fit Power Quilpué"
            width={990}
            height={533}
            priority
            className="object-contain h-7 md:h-8 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav (center) */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-white/75 hover:text-white transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-animated after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block shrink-0">
          <Button variant="gradient" asChild className="shadow-glow-orange rounded-full px-5 h-10">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Prueba gratis <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-full text-white"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu (floating panel) */}
      {mobileOpen && (
        <div className="md:hidden mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-brand-dark/90 backdrop-blur-2xl shadow-xl shadow-black/40 p-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-4 py-3 text-base font-medium text-white/85 hover:text-white rounded-2xl hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="gradient" asChild className="w-full rounded-full mt-2 h-12">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Prueba gratis <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
