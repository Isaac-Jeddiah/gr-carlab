# Fix Plan for GR Car Lab Issues

## Issues Identified:

### 1. ServicesPage.jsx Mobile Opacity Issue
- **Problem**: Scroll animations causing opacity: 0 for mobile devices
- **Root Cause**: GSAP animations that start with opacity: 0 and may not properly animate on mobile
- **Fix Strategy**: Modify mobile-specific GSAP animations or use CSS-based animations for better mobile compatibility

### 2. Testimonials.jsx Delay Issue  
- **Problem**: Testimonials take 1+ seconds to appear
- **Root Cause**: Complex GSAP rotation system with multiple delays and timing issues
- **Fix Strategy**: Optimize animation timing, reduce initial delays, improve mobile-specific handling

### 3. Services.jsx Key Prop Error
- **Problem**: Missing unique "key" prop in list items
- **Root Cause**: service.details.map() without proper key prop
- **Fix Strategy**: Add unique key props to all mapped elements

## Implementation Steps:

1. **ServicesPage.jsx**: 
   - Add mobile detection for GSAP animations
   - Simplify mobile animations or use CSS transitions
   - Ensure elements are visible on mobile devices

2. **Testimonials.jsx**:
   - Reduce initial animation delays
   - Optimize auto-rotation timing
   - Improve mobile positioning logic

3. **Services.jsx**:
   - Add unique key props to service details mapping
   - Ensure all list items have proper React keys

## Expected Outcomes:
- Services page fully visible on mobile devices
- Testimonials appear immediately without delay
- No React key prop warnings in console
- Better overall mobile user experience
