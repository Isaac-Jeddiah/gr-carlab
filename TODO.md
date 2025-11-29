# TODO: Replace CSS SplitText with GSAP Flip Animation

## Steps to Complete

- [x] Remove existing CSS animation styles (keyframes, split-text-hover, split-char classes) from inline styles
- [x] Add new CSS for .gsap-target (position relative, overflow hidden) and .target-text (display block, backface-visibility hidden)
- [x] Add GSAP animation code in useEffect to handle .gsap-target elements: clone text once, animate rotationY for horizontal flip effect
- [x] Update drawer menu items JSX to use gsap-target structure
- [x] Update "Book Now" button in drawer JSX
- [x] Update "PREMIUM DETAILING" in hero section JSX
- [x] Update main hero heading JSX ("Excellence in Every Detail, Shine in Every Service")
- [x] Update CTA buttons in hero section JSX ("See Our Services", "Get in Touch")
- [x] Update about section heading JSX
- [x] Test the new GSAP animation on hover across all text elements
- [x] Ensure styling and layout remain intact
