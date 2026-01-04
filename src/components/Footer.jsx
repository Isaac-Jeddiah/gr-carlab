import React from "react";
import logo from "../assets/logo.png";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { contactConfig, getPrimaryPhone } from "../config/contactConfig";

export default function Footer() {
  const mainPages = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <footer className="footer-section bg-black border-t border-white/10 py-10 sm:py-12 md:py-14 lg:py-16 px-5 sm:px-6 md:px-8 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedOnScroll options={{ from: { y: 15, opacity: 0 }, duration: 0.6 }}>
          
          {/* Logo and Description */}
          <div className="mb-8 sm:mb-10 md:mb-12 pb-8 sm:pb-10 border-b border-white/5">
            <div className="grid grid-cols-2 sm:items-center gap-12">
              <div className="">
                <div className="footer-logo mb-4 hover-scale cursor-pointer">
                  <img loading="lazy" 
                    src={logo}
                    alt="GR CAR LAB"
                    className="h-20 sm:h-20 md:h-20 lg:h-32 w-auto object-contain"
                  />
                </div>
                <p className="footer-description text-[#AAADB0] text-sm sm:text-sm md:text-base lg:text-base leading-relaxed max-w-md">
                  Excellence in every detail, shine in every service. Your premier car detailing destination.
                </p>
              </div>
              
              <Link to={"/contact"} className="lg:flex lg:items-start lg:justify-start flex items-center justify-center">
                <button
                  className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D4D414] rounded-full text-black font-semibold hover:bg-[#E5E515] transition-all duration-300 shadow-lg shadow-[#D4D414]/20 hover:shadow-[#D4D414]/40 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <span className="text-sm sm:text-base">Book Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="footer-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-10 sm:mb-12">
            
            {/* Main Pages */}
            <div>
              <h4 className="footer-heading mb-4 text-base sm:text-lg font-bold text-white tracking-wide">
                Main Pages
              </h4>
              <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2">
                {mainPages.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="footer-link block text-sm sm:text-base text-[#AAADB0] hover:text-[#D4D414] transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="footer-heading mb-4 text-base sm:text-lg font-bold text-white tracking-wide">
                Follow Us
              </h4>
              <div className="space-y-3 grid grid-cols-1 sm:grid-cols-1">
                {Object.entries(contactConfig.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link block text-sm sm:text-base text-[#AAADB0] hover:text-[#D4D414] transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </div>

            {/* Visit Us - Spans 2 columns on mobile */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-2">
              <h4 className="footer-heading mb-4 text-base sm:text-lg font-bold text-white tracking-wide">
                Visit Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-[#D4D414] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-sm sm:text-base text-[#AAADB0] leading-relaxed">
                    {contactConfig.address}
                  </p>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-[#D4D414] flex-shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                  <div className="text-sm sm:text-base text-[#AAADB0]">
                    {contactConfig.phones.map((phone, index) => (
                      <p key={index} className="hover:text-[#D4D414] transition-colors">
                        {phone}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-[#D4D414] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-sm sm:text-base text-[#AAADB0] hover:text-[#D4D414] transition-colors">
                    {contactConfig.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm sm:text-base text-[#AAADB0]">
            <p className="footer-bottom-text">
              © 2025 GR CAR LAB. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-[#D4D414]">★</span>
              <span>Precision Care For Every Car</span>
              <span className="text-[#D4D414]">★</span>
            </div>
          </div>
          
        </AnimatedOnScroll>
      </div>
    </footer>
  );
}