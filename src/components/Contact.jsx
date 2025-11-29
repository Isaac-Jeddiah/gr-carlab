
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export default function Contact() {
    return (

<section id="contact" className="py-24 px-6 bg-[#080805]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#080805] rounded-3xl p-12 md:p-16 border border-white/5">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-3 mb-6 hover-scale">
                  <span className="w-10 h-px bg-[#D4D414]"></span>
                  <span>GET IN TOUCH</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Transform Your Vehicle?
                </h2>
                <p className="text-[#AAADB0] mb-8">
                  Contact us today to schedule your appointment or learn more about our services.
                </p>

                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-4 text-[#AAADB0] hover:text-[#D4D414] transition-colors hover-scale">
                    <div className="w-12 h-12 bg-[#D4D414]/10 rounded-full flex items-center justify-center hover-scale">
                      <Phone className="w-5 h-5 text-[#D4D414]" />
                    </div>
                    <span>+91 98765 43210</span>
                  </a>
                  <a href="mailto:info@grcarlab.com" className="flex items-center gap-4 text-[#AAADB0] hover:text-[#D4D414] transition-colors hover-scale">
                    <div className="w-12 h-12 bg-[#D4D414]/10 rounded-full flex items-center justify-center hover-scale">
                      <Mail className="w-5 h-5 text-[#D4D414]" />
                    </div>
                    <span>info@grcarlab.com</span>
                  </a>
                  <div className="flex items-start gap-4 text-[#AAADB0] hover-scale">
                    <div className="w-12 h-12 bg-[#D4D414]/10 rounded-full flex items-center justify-center hover-scale">
                      <MapPin className="w-5 h-5 text-[#D4D414]" />
                    </div>
                    <span>Tiruppur, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 focus:border-[#D4D414] focus:outline-none transition-all hover-scale"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 focus:border-[#D4D414] focus:outline-none transition-all hover-scale"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 focus:border-[#D4D414] focus:outline-none transition-all hover-scale"
                  />
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 focus:border-[#D4D414] focus:outline-none transition-all resize-none hover-scale"
                  />
                  <button className="w-full bg-[#D4D414] text-black font-semibold px-6 py-4 rounded-lg hover:bg-[#D4D414]/90 transition-all hover-scale">
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
