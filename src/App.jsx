 import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import heroImage from './assets/car-hero.jpg';
import { gsap } from "gsap";
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import Testimonials from './components/Testimonials.jsx';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP Ultra Smooth Text Animation
    
    const gsapTargets = document.querySelectorAll('.gsap-target');
    gsapTargets.forEach(target => {
      const chars = target.querySelectorAll('.char');

      // Set initial state - characters start slightly transparent and scaled
      gsap.set(chars, { opacity: 0.7, scale: 0.95, y: 5 });
       // Create smooth hover animation
      const tl = gsap.timeline({ paused: true });

      tl.to(chars, {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.out"
      });

      tl.to(chars, {
        opacity: 0.7,
        scale: 0.95,
        y: 5,
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.out"
      });

      tl.to(chars, {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.out"
      })

      tl.to(chars, {
        opacity: 0.7,
        scale: 0.95,
        y: 5,
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.out"
      })

      tl.to(chars, {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.out"
      })

      target.addEventListener('mouseenter', () => {
        tl.play();
      });

      target.addEventListener('mouseleave', () => {
        tl.reverse();
      });
    });

    //animations using CSS transforms
    const cards = document.querySelectorAll('.hover-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Determine which border is closest
        const borders = {
          top: y,
          right: rect.width - x,
          bottom: rect.height - y,
          left: x
        };

        const closest = Object.entries(borders).reduce((a, b) => a[1] < b[1] ? a : b);
        card.setAttribute('data-border', closest[0]);
      });

      card.addEventListener('mouseleave', () => {
        card.removeAttribute('data-border');
      });
    });

    // Number roll animation
    const animateNumber = (element, target) => {
      const duration = 2000;
      const start = 0;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current + (target === 99 ? '%' : '+');
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.classList.contains('stat-number')) {
            const value = element.getAttribute('data-value');
            animateNumber(element, parseInt(value));
            observer.unobserve(element);
          }
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    "Premium Washing & Cleaning",
    "Interior & Exterior Detailing",
    "Ceramic Coating & PPF",
    "Paint Correction & Protection",
    "Engine Detailing",
    "Steam Cleaning"
  ];

  const whyChooseUs = [
    { title: "Skilled Employees", desc: "Expert technicians with years of experience" },
    { title: "Modern Tools", desc: "Latest equipment for perfect results" },
    { title: "Team Work", desc: "Coordinated service for efficiency" },
    { title: "Fastest Services", desc: "Quick turnaround without compromise" },
    { title: "Reputed Brands", desc: "DetailMax, GTECHNIQ, Garware PPF" },
    { title: "Quality Services", desc: "Bio-friendly products, meticulous care" }
  ];

  const accessories = [
    "Car Perfumes & Air Fresheners",
    "7D Mats & ATM Mats",
    "Android Stereos & Woofers",
    "Dash Cameras",
    "LED Door Lights",
    "Tyre Inflators",
    "Fog Lamps & Head Lights",
    "Car Covers & Speakers"
  ];

  const stats = [
    { value: "1500", label: "Happy Customers" },
    { value: "50", label: "Services Offered" },
    { value: "99", label: "Satisfaction Rate" },
    { value: "10", label: "Years Experience" }
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes arrowRotateX {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(180deg); }
          100% { transform: rotateX(360deg); }
        }

        .gsap-target {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .target-text {
          display: inline-block;
        }

        .char {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
        }

        .arrow-hover:hover {
          animation: arrowRotateX 0.6s ease-in-out;
        }

        .hover-scale {
          transition: transform 0.3s ease-in-out;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-card {
          position: relative;
          transition: all 0.3s ease;
        }

        .hover-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: transparent;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: all 0.3s ease;
        }

        .hover-card[data-border="top"]::before {
          background: linear-gradient(to bottom, #D4D414 0%, transparent 50%);
        }

        .hover-card[data-border="right"]::before {
          background: linear-gradient(to left, #D4D414 0%, transparent 50%);
        }

        .hover-card[data-border="bottom"]::before {
          background: linear-gradient(to top, #D4D414 0%, transparent 50%);
        }

        .hover-card[data-border="left"]::before {
          background: linear-gradient(to right, #D4D414 0%, transparent 50%);
        }

        .line-divider {
          width: 80px;
          height: 1px;
          background: white;
        }

        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: white;
          padding: 1rem 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #D4D414;
          transition: width 0.3s ease;
        }

        .cta-button:hover::after {
          width: 100%;
        }

        .cta-button:hover {
          color: #D4D414;
        }
      `}</style>

      

      {/* Hero Section with Integrated Navbar */}
      <Hero setIsDrawerOpen={setIsDrawerOpen}/>
     
      {/* About Section */}
      <About />
      {/* Services Section */}
      <Services />
      {/* Products Section */}
      <Products />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;