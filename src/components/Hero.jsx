// Hero.jsx
import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

import heroBg from "../assets/car-background.jpg";   // background only
import heroCar from "../assets/car-hero1.png"; // cut-out car (right side)
import NavBar from "../components/Nav";
import AnimatedOnScroll from "./AnimatedOnScroll";


const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // bg reveal
      tl.fromTo(
        ".hero-bg",
        { scale: 1.05, filter: "blur(8px) brightness(0.5)" },
        { scale: 1, filter: "blur(0px) brightness(1)", duration: 1 }
      );

      // label chars
      tl.from(".hero-label .char", {
        y: 20,
        opacity: 0,
        stagger: 0.03,
        duration: 0.6
      }, "-=0.6");

      // typewriter main title
      const fullTitle = "Welcome to GR CAR LAB";
      const titleElement = document.querySelector(".hero-main-title");
      if (titleElement) {
        titleElement.textContent = "";
        tl.add(() => {
          let index = 0;
          const interval = setInterval(() => {
            titleElement.textContent = fullTitle.slice(0, index + 1);
            index++;
            if (index === fullTitle.length) clearInterval(interval);
          }, 60);
        }, "-=0.3");
      }

      // subtitle
      tl.from(".hero-sub-title", {
        y: 30,
        opacity: 0,
        duration: 0.6
      }, "-=0.1");

      // description
      tl.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.6
      }, "-=0.3");

      // CTA
      tl.from(".hero-cta-container", {
        y: 40,
        opacity: 0,
        duration: 0.7
      }, "-=0.2");
    }, heroRef);

    // PARALLAX
    const handleParallax = (event) => {
      const section = heroRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const clientY =
        "touches" in event ? event.touches[0].clientY : event.clientY;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const xPercent = (x / rect.width - 0.5) * 2; // -1..1
      const yPercent = (y / rect.height - 0.5) * 2;

      // check viewport width to clamp motion
      const isMobile = window.innerWidth < 640;
      const bgX = isMobile ? -6 : -10;
      const bgY = isMobile ? -4 : -6;
      const carX = isMobile ? 10 : 22;
      const carY = isMobile ? 8 : 14;
      const textX = isMobile ? -3 : -6;
      const textY = isMobile ? -2 : -4;

      gsap.to(".hero-bg", {
        x: xPercent * bgX,
        y: yPercent * bgY,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(".hero-car", {
        x: xPercent * carX,
        y: yPercent * carY,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(".hero-text-block", {
        x: xPercent * textX,
        y: yPercent * textY,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const section = heroRef.current;
    if (section) {
      section.addEventListener("mousemove", handleParallax);
      section.addEventListener("touchmove", handleParallax, { passive: true });
    }

    return () => {
      ctx.revert();
      if (section) {
        section.removeEventListener("mousemove", handleParallax);
        section.removeEventListener("touchmove", handleParallax);
      }
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero-section relative w-full min-h-screen">
      <div className="hero-content relative rounded-lg sm:rounded-2xl lg:rounded-3xl overflow-hidden mx-4 xs:mx-2 sm:mx-8 md:mx-6 lg:mx-16 my-3 sm:my-3 md:my-4 lg:my-6 min-h-[90vh] sm:min-h-[95vh] md:min-h-[100vh] lg:min-h-[115vh]">
        <AnimatedOnScroll options={{ from: { y: 40, opacity: 0 }, duration: 1 }}>
          {/* BG */}
          <div
            className="hero-bg absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
          </div>

          {/* CAR – keep inside container, same width as bg */}
          <img
            src={heroCar}
            alt="Hero car"
            className="
              hero-car pointer-events-none
              absolute bottom-0 right-0
              w-full sm:w-[105%] md:w-[100%] max-w-none
            "
          />

          {/* NavBar */}
          <NavBar />

          {/* Content (unchanged layout) */}
          <div className="hero-text-block relative z-10 px-2 xs:px-3 sm:px-6 md:px-10 lg:px-12 flex flex-col justify-between py-4 sm:py-6 md:py-8 min-h-[calc(90vh-60px)] sm:min-h-[calc(95vh-60px)] md:min-h-[calc(100vh-70px)] lg:min-h-[calc(115vh-80px)]">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0 pt-4 sm:pt-6 md:pt-8">
              <div className="hero-label text-xs sm:text-sm md:text-sm lg:text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-2 sm:gap-3 hover-scale">
                <span className="hero-label-line w-40 sm:w-8 md:w-10 h-px bg-[#D4D414]" />
                <span className="gsap-target text-xs sm:text-sm">
                  {"PREMIUM DETAILING             ".split("").map((char, i) => (
                    <span key={i} className="char">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </div>
              <div className="hero-side-text text-right text-xs sm:text-sm md:text-sm text-white/70 max-w-xs hidden lg:block">
                Expert car care with cutting-edge technology and eco-friendly
                solutions
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
              <h1 className="hero-title font-bold leading-tight">
                <span className="hero-main-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl block gsap-target">
                  Welcome to GR CAR LAB
                </span>
                <span className="hero-sub-title text-l xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl block text-[#D4D414] gsap-target">
                  Precision Care for Every Car
                </span>
              </h1>
              <p className="hero-description text-sm sm:text-base md:text-lg lg:text-lg text-white/80 max-w-3xl leading-relaxed">
                Committed to premium detailing delivered with care and expertise. We refine every surface to restore shine, protect value, and delight our customers.
              </p>
            </div>

            <div className="hero-cta-container w-full grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/20">
              <a
                href="#services"
                className="hero-cta-button text-white group flex flex-row items-center justify-between px-6 py-4 sm:py-5 md:py-6 border-r-0 md:border-r border-b sm:border-b-0 md:border-b-0 border-white/20 hover:bg-white/5 transition-all"
              >
                <span className="flex-1 text-lg sm:text-base md:text-lg lg:text-xl text-white font-large gsap-target text-left whitespace-nowrap">
                  See Our Services
                </span>
                <ChevronRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 arrow-hover group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="/contact"
                className="hero-cta-button group flex flex-row items-center justify-between px-6 py-4 sm:py-5 md:py-6 hover:bg-white/5 transition-all"
              >
                <span className="flex-1 text-lg sm:text-base md:text-lg lg:text-xl text-white font-large gsap-target text-left whitespace-nowrap">
                  Get in Touch
                </span>
                <ChevronRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 arrow-hover group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default Hero;
