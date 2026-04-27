import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-6 left-0 right-0 z-50 px-4 md:px-16"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl italic shadow-lg">
             A
          </div>
          <span className="font-heading text-lg tracking-tight hidden sm:block">Aether Design</span>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-1 liquid-glass px-2 py-1.5">
          {["Home", "Services", "Work", "Pricing"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={cn(
                "px-4 py-1.5 text-xs font-medium font-body transition-all rounded-full text-white/70 hover:text-white hover:bg-white/5",
                link === "Pricing" && "text-white bg-white/10 font-semibold"
              )}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <button className="bg-white text-black rounded-full px-5 py-2 text-xs font-semibold font-body flex items-center gap-2 hover:bg-neutral-200 transition-colors">
          Get Started
          <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
        </button>
      </div>
    </motion.nav>
  );
}
