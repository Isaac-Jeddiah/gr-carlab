import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import Testimonials from './components/Testimonials.jsx';
import WhyUs from './components/WhyUs.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import ProductPage from './components/ProductPage.jsx';
import servicesData from './components/servicesData.js';
import AboutUsPage from './components/AboutPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ContactUsPage from './components/ContactPage.jsx';
import NavBar from './components/Nav.jsx';
const Home = ({ setIsDrawerOpen }) => {
  //const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  

 

 

  

  return (
    <div className="bg-black text-white overflow-x-hidden">
      

      

      {/* Hero Section with Integrated NavBar */}
      <Hero />
     
      {/* About Section */}
      <About />
      {/* Services Section */}
      <Services />
      {/* Why Choose Us Section */}
      <WhyUs />
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<><div className='bg-black'><NavBar/></div><Services /><Footer /></>} />
        <Route path="/services/:slug" element={<><ServicesPage data={servicesData} /></>} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;