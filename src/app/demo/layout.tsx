import { DemoSidebar } from "@/components/layout/DemoSidebar";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <DemoSidebar />
      <div className="flex-1 ml-64 min-w-0 flex flex-col">
        {/* Mock top header for demo */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="h-8 w-48 bg-slate-100 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-[image:var(--background-image-brand-gradient)] flex items-center justify-center text-white font-semibold text-xs shadow-sm">
              AD
            </div>
          </div>
        </header>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
