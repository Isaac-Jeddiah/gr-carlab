import React from 'react';
import logo from '../assets/logo.png';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  
  const mainPages = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/#products' },
    { name: 'Contact', path: '/contact' }
  ];
  return (
 <footer className="footer-section bg-black border-t border-white/5 py-8 sm:py-10 md:py-12 lg:py-12 px-2 s:px-3 sm:px-4 md:px-6 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-8 lg:gap-8 mb-6 sm:mb-8 md:mb-8 lg:mb-8">
            <div>
              <div className="footer-logo mb-3 sm:mb-4 hover-scale cursor-pointer">
                <img src={logo} alt="GR CAR LAB" className="h-30 s:h-32 sm:h-32 md:h-16 lg:h-36 w-auto object-contain" />
              </div>
              <p className="footer-description text-[#AAADB0] text-s sm:text-sm md:text-sm lg:text-sm mb-3 sm:mb-4">
                Excellence in every detail, shine in every service. Your premier car detailing destination.
              </p>
              <Link to={'/contact'}>
              <button className="group relative w-full max-w-64 flex items-center justify-center gap-3 px-6 py-3 bg-black border-2 border-yellow-400 rounded-full transition-all duration-300 hover:rounded-2xl active:scale-95"
              >
                <span className="text-white font-semibold text-sm">Book Now</span>
                <ArrowRight className="w-4 h-4 text-yellow-400" />
              </button>
              </Link>
            </div>

            <div>
              <h4 className="footer-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-base lg:text-base">Main Pages</h4>
              <div className="space-y-2">
                {mainPages.map((item) => (
                  <Link key={item.name} to={item.path} className="footer-link block text-s sm:text-sm md:text-sm lg:text-sm text-[#AAADB0] hover:text-[#D4D414] transition-colors hover-scale">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-base lg:text-base">Follow Us</h4>
              <div className="space-y-2">
                {['Instagram', 'Facebook', 'YouTube'].map((item) => (
                  <a key={item} href="#" className="footer-link block text-s sm:text-sm md:text-sm lg:text-sm text-[#AAADB0] hover:text-[#D4D414] transition-colors hover-scale">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-base lg:text-base">Visit Us</h4>
              <p className="text-s sm:text-sm md:text-sm lg:text-sm mb-3 sm:mb-4">
                [Enter full workshop address]
              </p>
              <div className="space-y-2">
                <p className="text-s sm:text-sm md:text-sm lg:text-sm text-[#AAADB0] hover-scale">[Enter mobile number]</p>
                <p className="text-s sm:text-sm md:text-sm lg:text-sm text-[#AAADB0] hover-scale">[Enter Gmail address]</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom pt-6 sm:pt-8 md:pt-8 lg:pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-s sm:text-sm md:text-sm lg:text-sm text-[#AAADB0]">
            <p className="footer-bottom-text">© 2025 GR CAR LAB. All rights reserved.</p>
            <div className="footer-bottom-links flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-[#D4D414] transition-colors hover-scale">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4D414] transition-colors hover-scale">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
}