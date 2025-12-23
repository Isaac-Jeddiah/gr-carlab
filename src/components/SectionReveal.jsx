// components/SectionReveal.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionReveal = ({
  children,
  direction = "up",
  duration = 0.8,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "left":
        x = -80;
        break;
      case "right":
        x = 80;
        break;
      case "down":
        y = -80; // come from top
        break;
      default:
        y = 80;  // 'up' -> come from bottom
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: true,          // ties progress to scroll -> always reverses
            // no toggleActions; scrub handles both directions
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction, duration]);

  return (
    <section ref={ref} className="scroll-section w-full">
      {children}
    </section>
  );
};

export default SectionReveal;
