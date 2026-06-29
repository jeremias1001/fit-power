"use client";

import { MessageCircle } from "lucide-react";
import { siteContent } from "@/lib/content";

export function WhatsAppFab() {
  const href = `https://wa.me/${siteContent.global.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(siteContent.global.defaultWhatsAppMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:block max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap rounded-full bg-white shadow-premium text-slate-800 text-sm font-semibold transition-all duration-300 group-hover:px-4 group-hover:py-2.5">
        Escríbenos ahora
      </span>
      <span className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/40 transition-transform hover:scale-105">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="relative h-7 w-7 fill-white" />
      </span>
    </a>
  );
}
