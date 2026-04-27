import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { BlurText } from './BlurText';
import { VideoBackground } from './VideoBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[1000px] flex flex-col justify-center items-center overflow-hidden pt-36 px-8">
      {/* Bio-Atmospheric Glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none z-0" />
      
      <VideoBackground 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="opacity-40"
      />
      
      <div className="relative z-10 container mx-auto text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 p-1 pr-4 liquid-glass mb-8"
        >
          <span className="bg-white text-black px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">New</span>
          <span className="text-white/80 text-xs font-body">Introducing AI-powered design systems.</span>
        </motion.div>

        {/* Heading */}
        <div className="relative mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-8xl md:text-9xl font-heading tracking-tighter leading-[0.8] text-white max-w-4xl mx-auto"
          >
            The Website Your <br/> 
            <span className="opacity-40">Brand Deserves.</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg font-body text-white/60 mb-10 leading-relaxed max-w-xl mx-auto"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. 
          This is web design, <span className="text-white/90 italic">wildly reimagined.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <button className="liquid-glass-strong px-8 py-4 text-sm font-semibold font-body flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
            View Showreel
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="h-2.5 w-2.5 fill-white" />
            </div>
          </button>
          
          <button className="border border-white/20 hover:bg-white/5 transition-colors px-8 py-4 rounded-full font-body text-sm font-medium">
            Our Process
          </button>
        </motion.div>
      </div>

      {/* Availability Info (Bottom left/right) */}
      <div className="absolute bottom-8 left-16 right-16 hidden md:flex justify-between items-end z-20">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-body">Availability</span>
          <span className="text-xs font-body font-medium">Available for Q3 Projects</span>
        </div>
        
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-body">Based In</span>
          <span className="text-xs font-body font-medium">London &bull; San Francisco</span>
        </div>
      </div>

      {/* Decorative vertical rail */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 -rotate-90 origin-left hidden lg:block opacity-20">
        <span className="text-[10px] uppercase tracking-[0.5em] font-body whitespace-nowrap">ESTABLISHED 2024 &copy; AETHER INC</span>
      </div>
    </section>
  );
}
