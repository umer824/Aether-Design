import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Zap, Layout, Globe, Command } from 'lucide-react';
import { BlurText } from './BlurText';
import { VideoBackground } from './VideoBackground';
import { cn } from '@/src/lib/utils';
import { useRef } from 'react';

export function StartSection() {
  return (
    <section className="py-32 relative bg-black">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="liquid-glass px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-white/70 mb-6 inline-block">The Vision</span>
          <BlurText 
            text="Designing Tomorrow, Today." 
            as="h2"
            className="text-4xl md:text-5xl font-heading italic text-white mb-8"
          />
          <p className="text-white/60 font-body text-lg leading-relaxed mb-8 max-w-lg">
            We don't just build websites; we craft digital legacies. By blending cutting-edge AI with human intuition, we create experiences that are as intelligent as they are beautiful.
          </p>
          <ul className="space-y-4">
            {["AI-Driven Personalization", "Ultra-Low Latency Infrastructure", "Immersive 3D Visuals"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden liquid-glass">
          <VideoBackground 
            src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          />
        </div>
      </div>
    </section>
  );
}

export function FeaturesChess() {
  const features = [
    {
      title: "Generative Aesthetics",
      description: "Our AI engines generate bespoke visual styles that evolve with your brand's narrative.",
      media: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
      tag: "01"
    },
    {
      title: "Seamless Flow",
      description: "Motion that feels like water. Navigation that anticipates intent. Performance that defies logic.",
      media: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2000&auto=format&fit=crop",
      tag: "02",
      reverse: true
    }
  ];

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 space-y-32">
        {features.map((f, i) => (
          <div key={i} className={cn("grid md:grid-cols-2 gap-16 items-center", f.reverse && "md:flex-row-reverse")}>
             <motion.div 
               initial={{ opacity: 0, x: f.reverse ? 50 : -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className={cn(f.reverse && "md:order-2")}
             >
                <span className="text-5xl font-heading italic opacity-20 mb-4 block">{f.tag}</span>
                <h3 className="text-4xl font-heading italic mb-6">{f.title}</h3>
                <p className="text-white/50 text-lg mb-8 max-w-md">{f.description}</p>
                <button className="flex items-center gap-2 group text-white font-medium">
                  Learn more <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className={cn("aspect-[4/3] rounded-3xl overflow-hidden liquid-glass", f.reverse && "md:order-1")}
             >
               <img src={f.media} alt={f.title} className="w-full h-full object-cover opacity-80" />
             </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturesGrid() {
  const items = [
    { icon: Zap, title: "Speed", desc: "Optimized for sub-second loading." },
    { icon: Layout, title: "Design", desc: "Pixel-perfect luxury layouts." },
    { icon: Globe, title: "Scale", desc: "Global edge CDN distribution." },
    { icon: Command, title: "Control", desc: "Intuitive CMS for your team." }
  ];

  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <BlurText text="Built for Excellence" className="text-4xl md:text-5xl font-heading italic text-center justify-center" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 liquid-glass hover:bg-white/5 transition-colors cursor-default group"
            >
              <item.icon className="h-8 w-8 mb-6 text-white group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-heading italic mb-4">{item.title}</h4>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-48 relative overflow-hidden bg-black">
      <motion.div style={{ y }} className="absolute -inset-y-24 inset-x-0 z-0">
        <VideoBackground 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          desaturated
        />
      </motion.div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projects Delivered", value: "250+" },
            { label: "Awards Won", value: "48" },
            { label: "Client Satisfaction", value: "99.9%" },
            { label: "Designers", value: "12 AI" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-6xl font-heading italic mb-2">{stat.value}</div>
              <div className="text-white/40 text-xs md:text-sm font-body tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto liquid-glass-strong p-12 md:p-20 text-center relative">
          <div className="absolute top-10 left-10 text-8xl font-heading italic opacity-10">"</div>
          <p className="text-2xl md:text-3xl font-heading italic text-white/90 leading-relaxed mb-10">
            Aura AI completely transformed our digital presence. Their ability to blend cinematic motion with highly functional layouts is unmatched in the industry.
          </p>
          <div className="flex flex-col items-center gap-4">
             <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-white/20 to-white/5 border border-white/20 p-1">
                <div className="w-full h-full rounded-full bg-white/10 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="text-center">
                <div className="font-heading italic text-xl">Julian Vane</div>
                <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Founder, Lumière Digital</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WinningNames() {
  const winners = [
    "Astra Dynamics", "Velvet & Stone", "Nexus Robotics", 
    "Lumière Digital", "Solaris Collective", "Aether Labs",
    "Prisma Global", "Vanguard AI", "Echo Media"
  ];

  return (
    <section className="py-24 bg-black border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xs">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-body mb-2 block">Recognition</span>
            <h2 className="text-3xl font-heading italic text-white leading-tight">Winning Names in Design</h2>
            <p className="text-white/40 text-sm font-body mt-4">Brands that redefined their category through atmospheric intelligence.</p>
          </div>
          
          <div className="flex-grow">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
              {winners.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group cursor-default"
                >
                  <span className="text-xl md:text-2xl font-heading italic text-white/30 group-hover:text-white transition-colors duration-500">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaFooter() {
  return (
    <footer className="relative py-48 overflow-hidden bg-black min-h-[800px] flex items-center">
      <VideoBackground 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <BlurText 
          text="Ready to build your digital legacy?" 
          as="h2"
          className="text-5xl md:text-7xl font-heading italic text-white mb-12 justify-center"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
           <button className="bg-white text-black px-12 py-5 rounded-full font-semibold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
              Contact Us <ArrowUpRight className="h-5 w-5" />
           </button>
           <button className="liquid-glass px-12 py-5 text-white/80 hover:text-white transition-colors">
              View Our Process
           </button>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-md">
                 <div className="h-4 w-4 rounded-full bg-white" />
              </div>
              <span className="font-heading italic text-lg tracking-tight">Aura AI</span>
           </div>
           <div className="flex gap-8 text-white/40 text-xs uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
           </div>
           <div className="text-white/30 text-xs uppercase tracking-[0.1em]">
              © 2026 Aura AI Design Agency. All rights reserved.
           </div>
        </div>
      </div>
    </footer>
  );
}
