import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/src/lib/utils';

interface BlurTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  split?: 'words' | 'letters';
  delay?: number;
  className?: string;
  stagger?: number;
}

export function BlurText({
  text,
  as: Component = 'h1',
  split = 'words',
  delay = 0,
  className,
  stagger = 0.05,
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const items = split === 'words' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: stagger,
        delayChildren: delay / 1000,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: 0.35,
      },
    },
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 50,
    },
  };

  return (
    <Component 
      ref={ref}
      className={cn("flex flex-wrap", className)}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap"
      >
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={child}
            className={cn("inline-block", split === 'words' ? "mr-[0.25em]" : "")}
          >
            {item === ' ' ? '\u00A0' : item}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
