import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Globe, 
  ShoppingBag, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight,
  Monitor,
  Smartphone,
  Layout,
  Command
} from 'lucide-react';

const LogoFragment = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20H60C71.0457 20 80 28.9543 80 40C80 51.0457 71.0457 60 60 60H20V20Z" stroke="currentColor" strokeWidth="8" />
    <path d="M20 60V80H60C71.0457 80 80 71.0457 80 60H20Z" fill="currentColor" opacity="0.2" />
    <rect x="20" y="20" width="8" height="60" fill="currentColor" />
  </svg>
);

const GridItem = ({ children, className = "", title = "" }: { children: React.ReactNode, className?: string, title?: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`bg-[#0B0C10]/80 backdrop-blur-md border border-[#1f2937] rounded-lg overflow-hidden relative group shadow-xl ${className}`}
  >
    {title && (
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#00A6FB] bg-black/40 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xl">
          {title}
        </span>
      </div>
    )}
    {children}
  </motion.div>
);

export default function BrandGrid() {
  return (
    <div className="w-full max-w-[1200px] aspect-square mx-auto p-4 md:p-8 grid grid-cols-12 grid-rows-12 gap-2 md:gap-3 font-sans text-white bg-[#0a0c10] border border-[#1f2937] shadow-2xl relative selection:bg-[#00A6FB] selection:text-white">
      
      {/* 1. Main Logo / Hero - Big Impact */}
      <GridItem className="col-span-12 md:col-span-6 row-span-4 flex items-center justify-center bg-gradient-to-br from-[#001D4A] to-[#006992] overflow-hidden" title="Project / BR Blue">
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,166,251,0.2),transparent_70%)]" />
            <motion.div 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
                <div className="flex items-center gap-6">
                    <LogoFragment className="w-28 h-28 text-white drop-shadow-[0_0_20px_rgba(0,166,251,0.5)]" />
                    <div>
                        <h1 className="font-display font-bold text-5xl leading-none tracking-tight">BR<br/>Blue</h1>
                        <p className="text-[#00A6FB] font-mono text-[10px] mt-4 tracking-[0.4em] uppercase opacity-60">Visual System v1.0</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </GridItem>

      {/* 2. Logo Explorations */}
      <GridItem className="col-span-6 md:col-span-3 row-span-3 bg-[#0B0C10] flex flex-col items-center justify-center p-6 gap-6" title="Logo System">
        <div className="grid grid-cols-2 gap-3 w-full h-full">
            {[1, 0.6, 0.3, 0.1].map((op, i) => (
                <div key={i} className="flex items-center justify-center border border-[#1f2937] rounded-lg aspect-square hover:bg-white/5 transition-colors">
                    <LogoFragment className="w-7 h-7 text-[#00A6FB]" style={{ opacity: op }} />
                </div>
            ))}
        </div>
      </GridItem>

      {/* 3. App Icons */}
      <GridItem className="col-span-6 md:col-span-3 row-span-3 bg-[#0E1117] flex items-center justify-center" title="Platform Icons">
        <div className="flex gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#001233] to-[#0B0C10] border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="text-[#00A6FB] w-7 h-7" />
            </div>
            <div className="w-14 h-14 bg-[#00A6FB] rounded-xl flex items-center justify-center shadow-lg shadow-[#00A6FB]/20">
                <Globe className="text-white w-7 h-7" />
            </div>
            <div className="w-14 h-14 bg-[#0B0C10] border border-[#1f2937] rounded-xl flex items-center justify-center">
                <ShoppingBag className="text-white/30 w-7 h-7" />
            </div>
        </div>
      </GridItem>

      {/* 4. Color Palette */}
      <GridItem className="col-span-12 md:col-span-4 row-span-2 flex flex-col" title="Color DNA">
        <div className="flex-1 flex gap-px">
            <div className="flex-1 bg-[#050608] p-3 flex flex-col justify-end">
                <span className="font-mono text-[9px] opacity-40">#050608</span>
            </div>
            <div className="flex-1 bg-[#001D4A] p-3 flex flex-col justify-end">
                <span className="font-mono text-[9px] opacity-40">#001D4A</span>
            </div>
            <div className="flex-1 bg-[#00A6FB] p-3 flex flex-col justify-end text-black">
                <span className="font-mono text-[9px] font-bold">#00A6FB</span>
            </div>
            <div className="flex-1 bg-white p-3 flex flex-col justify-end text-black">
                <span className="font-mono text-[9px] font-bold">#FFFFFF</span>
            </div>
        </div>
      </GridItem>

      {/* 5. Typography Display */}
      <GridItem className="col-span-12 md:col-span-4 row-span-3 p-6 flex flex-col justify-between bg-[#0B0C10]" title="Typography">
        <div className="space-y-3">
            <div className="text-2xl font-black italic text-white flex items-center gap-2">
                Aa <span className="h-[1px] bg-white/10 flex-1"></span>
            </div>
            <h2 className="font-display font-medium text-3xl leading-tight tracking-tight">Responsive<br/>Digital Frames.</h2>
            <div className="flex items-center gap-3 text-[10px] font-mono text-white/30">
                <span>INTER DISPLAY</span>
                <span>/</span>
                <span>SEMI-BOLD</span>
            </div>
        </div>
      </GridItem>

      {/* 6. Abstract Pattern / Motion */}
      <GridItem className="col-span-6 md:col-span-4 row-span-4 relative group" title="Authentic Textures">
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0C10] overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="grid grid-cols-10 gap-2 opacity-10">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-[#00A6FB]" />
                ))}
            </div>
            <div className="relative flex flex-col items-center">
                <div className="text-6xl font-black text-white/[0.03]">BRB</div>
                <div className="text-[10px] tracking-[0.5em] text-[#00A6FB] font-bold uppercase -mt-4">Quality</div>
            </div>
        </div>
      </GridItem>

      {/* 7. Poster / Editorial */}
      <GridItem className="col-span-6 md:col-span-4 row-span-4 bg-[#0E1117] p-8 flex flex-col justify-between" title="Poster 01">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,166,251,0.1),transparent_70%)]" />
        <div className="space-y-4 relative">
            <div className="w-10 h-[1px] bg-[#00A6FB]" />
            <h3 className="font-display font-black text-5xl leading-none tracking-tighter uppercase">
                Build<br/><span className="text-[#00A6FB]">Success</span>
            </h3>
        </div>
        <div className="flex justify-between items-end relative">
            <p className="text-[10px] text-white/30 italic uppercase leading-tight tracking-widest">Future<br/>Connected</p>
            <ArrowUpRight className="w-8 h-8 text-[#00A6FB]" />
        </div>
      </GridItem>

      {/* 8. UI Fragment */}
      <GridItem className="col-span-12 md:col-span-8 row-span-3 bg-[#0B0C10] flex flex-col overflow-hidden" title="Admin Interface">
        <div className="h-8 bg-white/5 border-b border-white/10 px-4 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/30" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
            <div className="w-2 h-2 rounded-full bg-green-500/30" />
            <div className="ml-2 text-[9px] font-mono text-white/20">br-blue-cloud.config</div>
        </div>
        <div className="p-5 flex gap-8">
            <div className="w-1/3 space-y-4">
                <div className="h-6 bg-white/5 rounded-md border border-white/10" />
                <div className="h-20 bg-[#00A6FB]/5 rounded-md border border-[#00A6FB]/20 p-3 flex flex-col justify-between">
                    <span className="text-[9px] text-[#00A6FB]/60 font-mono">NODE_STATUS</span>
                    <span className="text-xl font-display font-medium text-white">Active</span>
                </div>
            </div>
            <div className="flex-1 space-y-5 pt-1">
                <div className="flex justify-between items-center text-[10px] font-mono text-white/30">
                    <span>BANDWIDTH</span>
                    <span className="text-[#00A6FB]">100%</span>
                </div>
                <div className="space-y-2">
                    {[60, 85, 30].map((w, i) => (
                        <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${w}%` }}
                                className="h-full bg-gradient-to-r from-[#00A6FB] to-[#05D9E8]" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </GridItem>

      {/* 9. Sticker System */}
      <GridItem className="col-span-6 md:col-span-2 row-span-2 bg-[#00A6FB] flex items-center justify-center p-4" title="System Assets">
        <div className="w-12 h-12 bg-white rounded-xl shadow-2xl flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-[#00A6FB] rounded-full border-t-transparent animate-spin" />
        </div>
      </GridItem>

      {/* 10. Packaging Mockup */}
      <GridItem className="col-span-6 md:col-span-2 row-span-2 bg-white text-black p-5 flex flex-col justify-between" title="Stationery">
        <div className="flex justify-between items-start">
            <div className="w-8 h-8 bg-[#00A6FB] rounded" />
            <span className="text-[7px] font-mono text-black/30 text-right uppercase">Stationery MS-02<br/>BR Blue Corp</span>
        </div>
        <p className="text-[10px] font-bold uppercase leading-tight border-l-2 border-[#00A6FB] pl-2">Logistics<br/>Solutions</p>
      </GridItem>

    </div>
  );
}
