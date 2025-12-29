import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import heroBg from "../assets/car-background.jpg";
import heroCar from "../assets/car-hero1.png";
import NavBar from "./Nav";

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const carRef = useRef(null);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const currentPos = useRef({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth interpolation for parallax
  const lerp = (start, end, factor) => start + (end - start) * factor;

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Animate text elements on load
    const chars = document.querySelectorAll('.text-char');
    const words = document.querySelectorAll('.text-word');
    
    chars.forEach((char, i) => {
      setTimeout(() => {
        char.style.opacity = '1';
        char.style.transform = 'translateY(0) rotateX(0)';
      }, 500 + i * 10);
    });

    words.forEach((word, i) => {
      setTimeout(() => {
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
      }, 600 + i * 80);
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMove = (event) => {
      const section = heroRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

      mousePos.current.x = (clientX - rect.left) / rect.width;
      mousePos.current.y = (clientY - rect.top) / rect.height;
    };

    // Smooth animation loop
    const animate = () => {
      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.05);
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.05);

      const xOffset = (currentPos.current.x - 0.5) * 2;
      const yOffset = (currentPos.current.y - 0.5) * 2;

      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      // Background - subtle depth
      

      // Car - strong 3D effect from left
      if (carRef.current) {
        const carMoveX = isMobile ? 40 : isTablet ? 60 : 80;
        const carMoveY = isMobile ? 20 : isTablet ? 30 : 40;
        const rotateY = xOffset * (isMobile ? 8 : 15);
        const rotateX = -yOffset * (isMobile ? 4 : 8);
        const translateZ = Math.abs(xOffset) * (isMobile ? 20 : 40);
        
        carRef.current.style.transform = `
          translate3d(${xOffset * carMoveX}px, ${yOffset * carMoveY}px, ${translateZ}px)
          rotateY(${rotateY}deg)
          rotateX(${rotateX}deg)
          scale(${1 + Math.abs(xOffset) * 0.05})
        `;
      }

      

      requestRef.current = requestAnimationFrame(animate);
    };

    const section = heroRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMove);
      section.addEventListener('touchmove', handleMove, { passive: true });
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMove);
        section.removeEventListener('touchmove', handleMove);
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="text-char inline-block"
        style={{
          opacity: 0,
          transform: 'translateY(100px) rotateX(-90deg)',
          transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          transformOrigin: 'top center',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const splitWords = (text) => {
    return text.split(' ').map((word, i) => (
      <span
        key={i}
        className="text-word inline-block mr-2 md:mr-3"
        style={{
          opacity: 0,
          transform: 'translateY(60px)',
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {word}
      </span>
    ));
  };

  return (
    // Hero section
    <div className="relative rounded-4xl mt-6 bg-black min-h-screen overflow-hidden mx-2 md:mx-8 lg:mx-8 mb-12">
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ perspective: '100000px' }}
    >
      {/* Full Background with 3D depth */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full transition-transform will-change-transform"
        style={{
          backgroundImage: `url(${heroBg})`,
          scale: 1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Car from left with 3D transform */}
      <div
        
        className="absolute right-[260%] md:right-[50%] lg:left-[-20%] bottom-0 w-full h-full pointer-events-none transition-transform will-change-transform"
      >
        <img
          src={heroCar}
          alt="Hero car"
          className="relative lg:pb-50  h-[100%] md:h-[80%] lg:h-[140%] lg:scale-110 scale-110 md:scale-110 w-auto max-w-none object-contain"
          style={{
            filter: 'drop-shadow(20px 20px 40px rgba(0,0,0,0.5))',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-50%)',
            transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      {/* Navigation */}
      <NavBar/>

      {/* Content */}
      <div
        
        className="relative z-40 h-full w-full flex flex-col justify-between min-h-screen  transition-transform will-change-transform"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 ">
        {/* Top Label */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex items-center gap-3 text-[#D4D414] text-xs sm:text-sm tracking-wider uppercase">
            <span className="w-24 md:w-12 h-2 rounded-full bg-[#D4D414]" />
            <span></span>
          </div>
          <div className="text-right text-xs sm:text-sm text-white/70 max-w-xs hidden lg:block">
            Expert car care with cutting-edge technology
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full">
          <h1 className="font-bold leading-tight">
            <span className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
              {splitWords('Welcome to GR CAR LAB')}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#D4D414] mt-2 md:mt-4">
              {splitWords('Precision Care for Every Car')}
            </span>
          </h1>
          
        </div>
        </div>
        {/* CTA Buttons */}
        <div className="grid grid-rows-2">
        <p
            className="px-4 sm:px-6 md:px-8 lg:px-12 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s',
            }}
          >
            Committed to premium detailing delivered with care and expertise. We refine every surface to restore shine, protect value, and delight our customers.
          </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t-2 border-white/20 w-full"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 1.4s',
          }}
        >
          <a
            href="/services"
            className="group flex items-center justify-between px-6 py-5 md:py-6 border-b-0 sm:border-b-0 sm:border-r border-white/20 hover:bg-white/5 transition-all"
          >
            <span className="text-base md:text-lg lg:text-xl text-white">See Our Services</span>
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-between px-6 py-5 md:py-6 hover:bg-white/5 transition-all"
          >
            <span className="text-base md:text-lg lg:text-xl text-white">Get in Touch</span>
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;