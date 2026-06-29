import { DemoSidebar } from "@/components/layout/DemoSidebar";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <DemoSidebar />
      <div className="flex-1 lg:ml-64 min-w-0 flex flex-col">
        {/* Mock top header for demo */}
        <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between pl-16 pr-4 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="hidden sm:inline">Fit Power OS</span>
            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="font-medium text-slate-800">Panel de control</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="text-sm font-semibold text-slate-800">Admin Demo</span>
              <span className="text-xs text-slate-400">Quilpué Centro</span>
            </div>
            <div className="h-9 w-9 rounded-full bg-brand-animated flex items-center justify-center text-white font-bold text-xs shadow-sm">
              AD
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
