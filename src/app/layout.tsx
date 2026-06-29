import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitpowerquilpue.cl"),
  title: "Fit Power Quilpué | Tu próximo nivel empieza aquí",
  description:
    "Entrenamiento, bienestar y comunidad en 3 sedes de Quilpué. Planes flexibles sin permanencia, reserva online y +2500 alumnos activos. Activa tu prueba gratis.",
  keywords: ["gimnasio Quilpué", "Fit Power", "entrenamiento funcional", "HIIT", "personal training"],
  openGraph: {
    title: "Fit Power Quilpué | Tu próximo nivel empieza aquí",
    description:
      "3 sedes, planes sin permanencia y una comunidad de +2500 alumnos. Activa tu prueba gratis hoy.",
    type: "website",
    locale: "es_CL",
    images: ["/images/Banner head de pagina.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontBody.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
