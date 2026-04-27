/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { 
  StartSection, 
  FeaturesChess, 
  FeaturesGrid, 
  WinningNames,
  Stats, 
  Testimonials, 
  CtaFooter 
} from './components/Sections';

export default function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>

      <main className="bg-black relative z-10">
        <StartSection />
        <FeaturesChess />
        <FeaturesGrid />
        <WinningNames />
        <Stats />
        <Testimonials />
        <CtaFooter />
      </main>

      {/* Persistent Glass Grain Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grain-y.vercel.app/grain.png')] bg-repeat" />
      </div>
    </div>
  );
}

