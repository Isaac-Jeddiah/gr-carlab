'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

// Detect Safari browser
const isSafari = () => {
  if (typeof window === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

// Detect device type
const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#D4D414',
  trailCount = 3,
  sizes = [60, 80, 100],
  innerSizes = [25, 35, 45],
  innerColor = 'rgba(255,255,255,0.9)',
  opacities = [0.7, 0.5, 0.3],
  shadowColor = 'rgba(0,0,0,0.5)',
  shadowBlur = 20,
  shadowOffsetX = 0,
  shadowOffsetY = 0,
  filterStdDeviation = 20,
  filterColorMatrixValues = '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15',
  useFilter = true,
  fastDuration = 0.15,
  slowDuration = 0.4,
  fastEase = 'power2.out',
  slowEase = 'power1.out',
  zIndex = 1000000000
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const [filterId] = useState(() => `blob-filter-${Math.random().toString(36).substr(2, 9)}`);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const isFirstMove = useRef(true);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);

  // Initialize blob positions to be off-screen and detect Safari
  useEffect(() => {
    setIsSafariBrowser(isSafari());
    
    // Check if device supports hover (not touch) and is desktop size
    const checkDevice = () => {
      const isDesktop = window.innerWidth >= 1024 && !isTouchDevice();
      setIsVisible(isDesktop);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    // Initialize blob positions off-screen
    blobsRef.current.forEach((el) => {
      if (el) {
        gsap.set(el, { x: -200, y: -200 });
      }
    });

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Handle mouse/touch movement
  useEffect(() => {
    if (!isVisible) return;

    const handleMove = (e) => {
      const x = 'clientX' in e ? e.clientX : (e.touches?.[0]?.clientX ?? -100);
      const y = 'clientY' in e ? e.clientY : (e.touches?.[0]?.clientY ?? -100);
      
      setMousePos({ x, y });

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        
        // First move - jump immediately to position
        if (isFirstMove.current) {
          gsap.set(el, { x, y });
          isFirstMove.current = false;
          return;
        }

        gsap.to(el, {
          x,
          y,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    };

    // Track mouse position
    const handleMouseMove = (e) => handleMove(e);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        handleMove(e);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isVisible, fastDuration, slowDuration, fastEase, slowEase]);

  // Don't render on touch devices or small screens
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 1024 || isTouchDevice()) {
      return null;
    }
  }

  // Disable filter on Safari for better performance
  const shouldUseFilter = useFilter && !isSafariBrowser;

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ zIndex }}
    >
      {shouldUseFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation={filterStdDeviation} />
            <feColorMatrix mode="matrix" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div 
        className="blob-main"
        style={{ 
          filter: shouldUseFilter ? `url(#${filterId})` : undefined,
          opacity: mousePos.x < 0 ? 0 : 1,
          transition: 'opacity 0.3s ease',
          mixBlendMode: isSafariBrowser ? 'normal' : 'difference'
        }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => (blobsRef.current[i] = el)}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`,
              marginLeft: -sizes[i] / 2,
              marginTop: -sizes[i] / 2,
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%',
                position: 'absolute',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

