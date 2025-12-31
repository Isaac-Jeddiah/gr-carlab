'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#D4D414',
  trailCount = 5,
  sizes = [30, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.9,
  slowDuration = 0.1,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 1000000000
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const [filterId] = useState(() => `blob-filter-${Math.random().toString(36).substr(2, 9)}`);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const isFirstMove = useRef(true);

  // Initialize blob positions to be off-screen
  useEffect(() => {
    blobsRef.current.forEach((el) => {
      if (el) {
        gsap.set(el, { x: -200, y: -200 });
      }
    });
  }, []);

  // Handle mouse/touch movement
  useEffect(() => {
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
  }, [fastDuration, slowDuration, fastEase, slowEase]);

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="" stdDeviation={filterStdDeviation} />
            <feColorMatrix  in="" mode="matrix" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div 
        className="blob-main" 
        style={{ 
          filter: useFilter ? `url(#${filterId})` : undefined,
          opacity: mousePos.x < 0 ? 0 : 1,
          transition: 'opacity 0.3s ease',
          mixBlendMode: 'difference'
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
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
              marginLeft: -sizes[i] / 2,
              marginTop: -sizes[i] / 2
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
                borderRadius: blobType === 'circle' ? '50%' : '0%'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
