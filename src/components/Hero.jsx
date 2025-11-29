import React from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from './Navbar.jsx';
import herobg from '../assets/car-hero.jpg';
const Hero = ({ setIsDrawerOpen }) => {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="relative rounded-3xl overflow-hidden mx-16 mt-6" style={{ minHeight: '115vh' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
        </div>

        {/* Navbar Inside Hero */}
        <Navbar setIsDrawerOpen={setIsDrawerOpen} />

        {/* Hero Content */}
        <div className="relative z-10 px-8 md:px-12 flex flex-col justify-between" style={{ minHeight: 'calc(115vh - 80px)' }}>
          <div className="flex items-start justify-between pt-8">
            <div className="text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-3 hover-scale">
              <span className="w-10 h-px bg-[#D4D414]"></span>
              <span className="gsap-target">
                {'PREMIUM DETAILING'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
            </div>
            <div className="text-right text-sm text-white/70 max-w-xs hidden md:block">
              Expert car care with cutting-edge technology and eco-friendly solutions
            </div>
          </div>

          <div className="space-y-8 pb-24">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block gsap-target">
                {'Excellence in Every Detail,'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <span className="block text-[#D4D414] gsap-target">
                {'Shine in Every Service'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Transform your vehicle with our professional detailing services. 
              Meticulous attention to detail, premium products, exceptional results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/20">
            <a href="#services" className="text-white group flex items-center justify-between px-8 py-6 border-r border-white/20 hover:bg-white/5 transition-all">
              <span className="text-lg text-white font-medium gsap-target">
                {'See Our Services'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <ChevronRight className="w-6 h-6 arrow-hover group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center justify-between px-8 py-6 hover:bg-white/5 transition-all">
              <span className="text-lg text-white font-medium gsap-target">
                {'Get in Touch'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <ChevronRight className="w-6 h-6 arrow-hover group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;