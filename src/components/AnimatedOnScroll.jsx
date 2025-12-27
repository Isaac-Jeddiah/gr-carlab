import React, { useRef, useLayoutEffect } from "react";
import gsap, { setupGSAP } from "../utils/gsapSetup";

export default function AnimatedOnScroll({ children, className = "", options = {} }) {
  const el = useRef(null);

  useLayoutEffect(() => {
    setupGSAP();

    
  }, [options]);

  return (
    <div ref={el} className={` ${className}`}>
      {children}
    </div>
  );
}
