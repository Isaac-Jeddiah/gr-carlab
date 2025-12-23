import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin and set friendly defaults
export function setupGSAP() {
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  // sensible defaults
  ScrollTrigger.defaults({
    toggleActions: "play none none none",
    once: true,
  });
}

export default gsap;