import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import Testimonials from './components/Testimonials.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import servicesData from './components/servicesData.js';
import AboutUsPage from './components/AboutPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ContactUsPage from './components/ContactPage.jsx';
const Home = ({ setIsDrawerOpen }) => {
  //const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    <div className="bg-black text-white overflow-x-hidden">
      

      

      {/* Hero Section with Integrated Navbar */}
      <Hero />
     
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicesPage data={servicesData} />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;