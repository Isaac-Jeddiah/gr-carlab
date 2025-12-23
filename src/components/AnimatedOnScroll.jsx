import React, { useRef, useLayoutEffect } from "react";
import gsap, { setupGSAP } from "../utils/gsapSetup";

export default function AnimatedOnScroll({ children, className = "", options = {} }) {
  const el = useRef(null);

  useLayoutEffect(() => {
    setupGSAP();

    const defaultFrom = { y: 40, opacity: 0, ease: "power3.out" };
    const { from = defaultFrom, to = { y: 0, opacity: 1 }, duration = 0.8, delay = 0, ...rest } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { ...from, duration },
        {
          ...to,
          duration,
          delay,
          scrollTrigger: {
            trigger: el.current,
            start: "top 80%",
            end: "bottom 20%",
          },
          ...rest,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options]);

  return (
    <div ref={el} className={`animated-on-scroll ${className}`}>
      {children}
    </div>
  );
}
