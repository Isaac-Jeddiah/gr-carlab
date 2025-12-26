import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin and set friendly defaults
export function setupGSAP() {
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  // sensible defaults — allow reverse and re-triggering across navigations
  ScrollTrigger.defaults({
    toggleActions: "play reverse play reverse",
    once: false,
  });
}

export default gsap;