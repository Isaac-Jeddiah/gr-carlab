// App.jsx - UPDATED VERSION
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NavBar from "./components/Nav.jsx";
import ContactUsPage from "./components/ContactPage.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import BlobCursor from "./components/BlobCursor.jsx";

import { setupGSAP } from "./utils/gsapSetup";

//scroll animation components
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


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      
      {/* Hero - No animation wrapper (loads immediately) */}
      <Hero />

      {/* Services - Slide From Right */}
      <SlideFromRight>
        <Services />
      </SlideFromRight>

      {/* How We Work Section */}
      {/* About - Scale Reveal (Zoom in) */}
      <ScaleReveal>
        <About />
      </ScaleReveal>

      {/* Why Choose Us - Slide From Left */}
      <SlideFromLeft>
        <WhyUs />
      </SlideFromLeft>
      {/* How We Work - Rotate In */}

      <div className="transform-none">
        <HowWeWork />
      </div>

      {/* Products - Parallax Fade with 3D depth */}

      <Products />

      {/* Testimonials - Slide From Right */}
      <SlideFromRight>
        <Testimonials />
      </SlideFromRight>

      {/* Contact - Blur Reveal (Modern glassmorphism) */}
      <BlurReveal>
        <Contact />
      </BlurReveal>

      {/* Footer - Simple Fade Slide Up */}
      <BlurReveal>
        <Footer />
      </BlurReveal>
    </div>
  );
};

const App = () => {
  React.useEffect(() => {
    setupGSAP();
  }, []);

  return (
    <>
    <BlobCursor
        fillColor="#D4D414"
        trailCount={4}
        sizes={[10,30,50,60,60]}
        innerSizes={[49,20,20,20,20]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[1, 0.6, 1]}
        fastDuration={0.1}
        slowDuration={0.5}
        useFilter={true}
      />
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
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/:slug"
          element={<ServicesPage data={servicesData} />}
        />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
