import React from 'react';
import { ChevronRight } from 'lucide-react';
import herobg from '../assets/car-hero.jpg';
const Hero = () => {
  
  return (
    <section id="home" className="hero-section relative w-full min-h-screen">
      <div className="hero-content relative rounded-lg sm:rounded-2xl lg:rounded-3xl overflow-hidden mx-4 xs:mx-2 sm:mx-8 md:mx-6 lg:mx-16 my-3 sm:my-3 md:my-4 lg:my-6 min-h-[90vh] sm:min-h-[95vh] md:min-h-[100vh] lg:min-h-[115vh]">
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
        

        {/* Hero Content */}
        <div className="relative z-10 px-2 xs:px-3 sm:px-6 md:px-10 lg:px-12 flex flex-col justify-between py-4 sm:py-6 md:py-8 min-h-[calc(90vh-60px)] sm:min-h-[calc(95vh-60px)] md:min-h-[calc(100vh-70px)] lg:min-h-[calc(115vh-80px)]">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0 pt-4 sm:pt-6 md:pt-8">
            <div className="hero-label text-xs sm:text-sm md:text-sm lg:text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-2 sm:gap-3 hover-scale">
              <span className="hero-label-line w-6 sm:w-8 md:w-10 h-px bg-[#D4D414]"></span>
              <span className="gsap-target text-xs sm:text-sm">
                {'PREMIUM DETAILING'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
            </div>
            <div className="hero-side-text text-right text-xs sm:text-sm md:text-sm text-white/70 max-w-xs hidden lg:block">
              Expert car care with cutting-edge technology and eco-friendly solutions
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
            <h1 className="hero-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block gsap-target">
                {'Excellence in Every Detail,'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <span className="hero-subtitle block text-[#D4D414] gsap-target">
                {'Shine in Every Service'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
            </h1>
            <p className="hero-description text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-2xl leading-relaxed">
              Transform your vehicle with our professional detailing services. 
              Meticulous attention to detail, premium products, exceptional results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-container grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/20">
            <a href="#services" className="hero-cta-button text-white group flex flex-col sm:flex-row items-center justify-between px-3 xs:px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-r-0 md:border-r border-b sm:border-b-0 md:border-b-0 border-white/20 hover:bg-white/5 transition-all">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium gsap-target text-center sm:text-left">
                {'See Our Services'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 arrow-hover group-hover:translate-x-2 transition-transform mt-2 sm:mt-0" />
            </a>
            <a href="#contact" className="hero-cta-button group flex flex-col sm:flex-row items-center justify-between px-3 xs:px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:bg-white/5 transition-all">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium gsap-target text-center sm:text-left">
                {'Get in Touch'.split('').map((char, i) => (
                  <span key={i} className="char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 arrow-hover group-hover:translate-x-2 transition-transform mt-2 sm:mt-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;