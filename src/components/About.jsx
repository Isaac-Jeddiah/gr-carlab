import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setupGSAP } from "../utils/gsapSetup";
import AnimatedOnScroll from "./AnimatedOnScroll";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "15" },
    { label: "Customer Satisfaction", value: "99" },
    { label: "Projects Completed", value: "2987" },
    { label: "Team Members", value: "67" },
  ];

  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const statsRefs = useRef([]);

  useEffect(() => {
    setupGSAP();

    const ctx = gsap.context(() => {
      // Stats animation - only target elements that exist
      const statNumbers = statsRefs.current.filter((ref) => ref);

      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top 80%",
        onEnter: () => {
          // Animate stats only
          statNumbers.forEach((stat, idx) => {
            if (stat) {
              const value = parseInt(stat.dataset.value);
              gsap.fromTo(
                stat,
                {
                  opacity: 0,
                  y: 20,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  delay: idx * 0.2,
                  ease: "power2.out",
                }
              );

              // Animate number counting
              const counter = { count: 0 };

              gsap.to(counter, {
                count: value,
                duration: 2,
                delay: idx * 0.2 + 0.3,
                ease: "power2.out",
                onUpdate: () => {
                  const currentValue = Math.floor(counter.count);
                  if (stats[idx].label === "Customer Satisfaction") {
                    stat.textContent = currentValue + "%";
                  } else {
                    stat.textContent = currentValue + "+";
                  }
                },
              });
            }
          });
        },
        once: true,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="pt-2 sm:pt-4 md:pt-8 lg:pt-8 px-6 bg-black mb-8 sm:mb-4 lg:mb-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedOnScroll
          options={{ from: { y: 30, opacity: 0 }, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="about-label text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-3 mb-6 hover-scale">
                <span className="w-10 h-px bg-[#D4D414]"></span>
                <span>ABOUT US</span>
              </div>

              <h2
                ref={titleRef}
                className="about-title text-4xl md:text-5xl font-bold mb-6 leading-tight break-words overflow-wrap-normal"
              >
                A professional automotive care studio focused on restoring,
                protecting and enhancing vehicles
              </h2>

              <p className="about-description text-[#AAADB0] mb-8 leading-relaxed">
                GR CAR LAB combines advanced techniques, bio-friendly products
                and experienced technicians to deliver reliable, high-quality
                automotive care, with a clear focus on improving aesthetics,
                longevity and customer confidence while treating every car as
                our own.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center hover-scale">
                  <div
                    ref={(el) => (statsRefs.current[idx] = el)}
                    className="text-4xl md:text-5xl font-bold text-[#D4D414] mb-2 stat-number opacity-0"
                    data-value={stat.value}
                  >
                    0{stat.value === "99" ? "%" : "+"}
                  </div>
                  <div className="text-[#AAADB0] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
