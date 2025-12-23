// ScrollAnimations.jsx - Import this file and use these wrapper components
import React, { useEffect, useRef } from "react";

// 1. Clip Path Reveal - Curtain effect from top
export const ClipPathReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: `all 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

// 2. Scale Reveal - Zoom in effect
export const ScaleReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        transform: "scale(0.9)",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

// 3. Parallax Fade - 3D depth effect
export const ParallaxFade = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        transform: "translateY(80px) rotateX(10deg)",
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: translateY(0) rotateX(0) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

// 4. Slide From Left
export const SlideFromLeft = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        transform: "translateX(-100px)",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

// 5. Slide From Right
export const SlideFromRight = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        transform: "translateX(100px)",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

// 6. Fade Slide Up - Classic elegant reveal
export const FadeSlideUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        transform: "translateY(60px)",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

// 7. Blur Reveal - Modern glassmorphism effect
export const BlurReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        filter: "blur(20px)",
        transform: "scale(0.95)",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          filter: blur(0px) !important;
          transform: scale(1) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

// 8. Rotate In - Spin entrance
export const RotateIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate-in');
          } else {
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: 0,
        transform: "rotate(-10deg) scale(0.9)",
        transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <style>{`
        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: rotate(0deg) scale(1) !important;
        }
      `}</style>
      {children}
    </div>
  );
};