
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export default function Contact() {
    return (

<section id="contact" className="contact-section py-12 sm:py-16 md:py-20 lg:py-24 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-6 bg-[#080805]">
        <div className="max-w-7xl mx-auto">
          <div className="contact-container bg-gradient-to-br from-[#1A1A1A] to-[#080805] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/5">
            <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12">
              <div>
                <div className="contact-label text-xs sm:text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 hover-scale">
                  <span className="w-6 sm:w-8 md:w-10 h-px bg-[#D4D414]"></span>
                  <span>GET IN TOUCH</span>
                </div>
                <h2 className="contact-title text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Ready to Transform Your Vehicle?
                </h2>
                <p className="contact-description text-[#AAADB0] mb-6 sm:mb-8 text-xs sm:text-sm md:text-base lg:text-base">
                  Contact us today to schedule your appointment or learn more about our services.
                </p>

                <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-4">
                  <a href="tel:+919876543210" className="contact-info-item flex items-center gap-3 sm:gap-4 text-[#AAADB0] hover:text-[#D4D414] transition-colors hover-scale">
                    <div className="contact-icon-container w-10 sm:w-12 md:w-12 lg:w-12 h-10 sm:h-12 md:h-12 lg:h-12 bg-[#D4D414]/10 rounded-full flex items-center justify-center hover-scale">
                      <Phone className="contact-icon w-4 sm:w-5 md:w-5 lg:w-5 h-4 sm:h-5 md:h-5 lg:h-5 text-[#D4D414]" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base lg:text-base">+91 98765 43210</span>
                  </a>
                  <a href="mailto:info@grcarlab.com" className="contact-info-item flex items-center gap-3 sm:gap-4 text-[#AAADB0] hover:text-[#D4D414] transition-colors hover-scale">
                    <div className="contact-icon-container w-10 sm:w-12 md:w-12 lg:w-12 h-10 sm:h-12 md:h-12 lg:h-12 bg-[#D4D414]/10 rounded-full flex items-center justify-center hover-scale">
                      <Mail className="contact-icon w-4 sm:w-5 md:w-5 lg:w-5 h-4 sm:h-5 md:h-5 lg:h-5 text-[#D4D414]" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base lg:text-base">info@grcarlab.com</span>
                  </a>
                  <div className="contact-info-item flex items-start gap-3 sm:gap-4 text-[#AAADB0] hover-scale">
                    <div className="contact-icon-container w-10 sm:w-12 md:w-12 lg:w-12 h-10 sm:h-12 md:h-12 lg:h-12 bg-[#D4D414]/10 rounded-full flex items-center justify-center hover-scale flex-shrink-0">
                      <MapPin className="contact-icon w-4 sm:w-5 md:w-5 lg:w-5 h-4 sm:h-5 md:h-5 lg:h-5 text-[#D4D414]" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base lg:text-base">Tiruppur, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="contact-input w-full bg-black/50 border border-white/10 rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base focus:border-[#D4D414] focus:outline-none transition-all hover-scale"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="contact-input w-full bg-black/50 border border-white/10 rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base focus:border-[#D4D414] focus:outline-none transition-all hover-scale"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="contact-input w-full bg-black/50 border border-white/10 rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base focus:border-[#D4D414] focus:outline-none transition-all hover-scale"
                  />
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="contact-textarea w-full bg-black/50 border border-white/10 rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base focus:border-[#D4D414] focus:outline-none transition-all resize-none hover-scale"
                  />
                  <button className="contact-submit-button w-full bg-[#D4D414] text-black font-semibold px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-base hover:bg-[#D4D414]/90 transition-all hover-scale">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
