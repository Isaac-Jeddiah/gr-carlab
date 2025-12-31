import React, { useEffect, useRef, useCallback, memo } from "react";

let sharedObserver = null;
const animatedElements = new Set();

const getSharedObserver = () => {
  if (sharedObserver) return sharedObserver;
  
  const options = {
    root: null,
    rootMargin: "-50px",
    threshold: 0.1,
  };
  
  sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        // Unobserve after animation triggers (better performance)
        if (sharedObserver) {
          sharedObserver.unobserve(entry.target);
        }
      }
    });
  }, options);
  
  return sharedObserver;
};

// Hook to use shared observer with cleanup
const useSharedObserver = () => {
  const observerRef = useRef(null);
  
  useEffect(() => {
    observerRef.current = getSharedObserver();
    return () => {
      // Don't disconnect shared observer, just cleanup references
    };
  }, []);
  
  const observe = useCallback((element) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);
  
  const unobserve = useCallback((element) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
  }, []);
  
  return { observe, unobserve };
};

// ============================================
// ANIMATION COMPONENTS
// All animations work on mobile touch scroll
// No expensive CSS properties (blur, 3D transforms)
// ============================================

// 1. Clip Path Reveal - Curtain effect from top
export const ClipPathReveal = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate clip-path-reveal"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// 2. Scale Reveal - Zoom in effect (works great on mobile)
export const ScaleReveal = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate scale-reveal"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// 3. Parallax Fade - Simple vertical fade (no 3D transforms for mobile)
export const ParallaxFade = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate parallax-fade"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// 4. Slide From Left - Smooth left entry
export const SlideFromLeft = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate slide-from-left"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// 5. Slide From Right - Smooth right entry
export const SlideFromRight = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate slide-from-right"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// 6. Fade Slide Up - Classic elegant reveal
export const FadeSlideUp = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate fade-slide-up"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// 7. Blur Reveal - Simple opacity fade (no blur for mobile performance)
export const BlurReveal = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate blur-reveal"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// 8. Rotate In - Gentle rotation entry
export const RotateIn = memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { observe, unobserve } = useSharedObserver();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observe(element);
    }
    return () => {
      if (element) unobserve(element);
    };
  }, [observe, unobserve]);

  return (
    <div
      ref={ref}
      className="scroll-animate rotate-in"
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </div>
  );
});

// Export cleanup function
export const cleanupAnimations = () => {
  if (sharedObserver) {
    sharedObserver.disconnect();
    sharedObserver = null;
  }
  animatedElements.clear();
};

export default {
  ClipPathReveal,
  ScaleReveal,
  ParallaxFade,
  SlideFromLeft,
  SlideFromRight,
  FadeSlideUp,
  BlurReveal,
  RotateIn,
  cleanupAnimations,
};

