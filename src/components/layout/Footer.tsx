import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export function Footer() {
  return (
    <footer id="contacto" className="bg-[#111111] text-slate-300 py-12 lg:py-16 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo Section */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo-cropped.png"
              alt="Fit Power Quilpué"
              width={990}
              height={533}
              className="object-contain h-16 w-auto brightness-0 invert opacity-95"
            />
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Fit Power Quilpué. Todos los derechos reservados.
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white tracking-wider text-sm">CONTACTO</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+56912345678" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone className="h-4 w-4" /> +56 9 1234 5678
              </a>
              <a href="mailto:hola@fitpowerquilpue.cl" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail className="h-4 w-4" /> hola@fitpowerquilpue.cl
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Freire 123, Quilpué
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white tracking-wider text-sm">HORARIOS</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-white">Lunes a Viernes</p>
                <p className="text-slate-400">06:00 – 22:00</p>
              </div>
              <div>
                <p className="text-white">Sábados</p>
                <p className="text-slate-400">08:00 – 14:00</p>
              </div>
            </div>
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white tracking-wider text-sm">SÍGUENOS</h4>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
