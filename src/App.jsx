// App.jsx - UPDATED VERSION
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyUs from "./components/WhyUs.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import servicesData from "./components/servicesData.js";
import AboutUsPage from "./components/AboutPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav.jsx";
import { setupGSAP } from "./utils/gsapSetup";

// Import the scroll animation components
import {
  ClipPathReveal,
  ScaleReveal,
  ParallaxFade,
  SlideFromLeft,
  SlideFromRight,
  FadeSlideUp,
  BlurReveal,
  RotateIn,
} from "./components/ScrollAnimations.jsx";

import "./App.css";
import ContactUsPage from "./components/ContactPage.jsx";
import HowWeWork from "./components/HowWeWork.jsx";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero - No animation wrapper (loads immediately) */}
      <Hero />

      {/* Services - Slide From Right */}
      
      <Services />
    
      
      {/* How We Work Section */}
      <HowWeWork />
      {/* About - Scale Reveal (Zoom in) */}
      <ScaleReveal>
        <About />
      </ScaleReveal>
      
      {/* Why Choose Us - Slide From Left */}
      <SlideFromLeft>
        <WhyUs />
      </SlideFromLeft>
      <HowWeWork/>

      {/* Products - Parallax Fade with 3D depth */}
      <BlurReveal>

      <Products />
    </BlurReveal>

      {/* Testimonials - Slide From Right */}
      <SlideFromRight>
        <Testimonials />
      </SlideFromRight>

      {/* Contact - Blur Reveal (Modern glassmorphism) */}
      <BlurReveal>
        <Contact />
      </BlurReveal>

      {/* Footer - Simple Fade Slide Up */}
      <FadeSlideUp>
        <Footer />
      </FadeSlideUp>
    </div>
  );
};

const App = () => {
  React.useEffect(() => {
    setupGSAP();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/services"
          element={
            <>
              <div className="bg-black">
                <NavBar />
              </div>
              <ScaleReveal>
                <Services />
              </ScaleReveal>
              <Footer />
            </>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <FadeSlideUp>
              <ServicesPage data={servicesData} />
            </FadeSlideUp>
          }
        />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;