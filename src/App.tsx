import BrandGrid from './components/BrandGrid';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050608] flex items-center justify-center p-4 md:p-10 font-sans selection:bg-[#00A6FB] selection:text-white">
      <div className="w-full max-w-[1240px]">
        {/* Header Section */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 flex justify-between items-end border-b border-[#1f2937] pb-8">
          <div>
            <span className="text-[#00A6FB] font-mono text-[10px] uppercase tracking-widest opacity-60">System Identity / BR Blue</span>
            <h1 className="text-4xl font-display font-bold text-white mt-2 leading-none uppercase tracking-tighter">Core<br/>Software</h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest italic">// STATIONERY MS-02<br/>BR BLUE CORP</p>
          </div>
        </div>

        {/* The Grid Container - Matching Theme structure */}
        <div className="relative group p-1 bg-[#0a0c10]">
          <BrandGrid />
        </div>

        {/* Footer info */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-[#1f2937] pt-8">
            <div className="space-y-3">
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Typographic System</p>
                <div className="text-xl font-black italic text-white/90">Aa</div>
                <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-tighter">Modernity. Technology.<br/>Success Integrated.</p>
            </div>
            <div className="space-y-3">
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Visual Patterns</p>
                <p className="text-[10px] text-white/40 leading-relaxed">The system evokes fluid motion, representing adaptability.</p>
            </div>
            <div className="space-y-3">
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Guarantees</p>
                <div className="flex items-center gap-3">
                    <span className="text-xl font-black text-white">100<span className="text-[#00A6FB] text-sm">%</span></span>
                    <span className="text-[8px] text-white/40 uppercase leading-none">Uptime<br/>Assured</span>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <div className="bg-[#00A6FB]/10 px-5 py-2 border border-[#00A6FB]/20 rounded text-[9px] font-mono text-[#00A6FB] uppercase tracking-widest backdrop-blur-sm">
                    ICON_SYSTEM.LIB
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
