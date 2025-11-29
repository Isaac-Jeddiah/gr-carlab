import React from 'react';
export default function Footer() {
  return (
 <footer className="bg-black border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 hover-scale cursor-pointer">
                <span className="text-white">GR CAR</span>
                <span className="text-[#D4D414]"> LAB</span>
              </div>
              <p className="text-[#AAADB0] text-sm mb-4">
                Excellence in every detail, shine in every service. Your premier car detailing destination.
              </p>
              <button className="border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-yellow hover:text-white transition-all hover-scale">
                Book Now
              </button>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Main Pages</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block  text-sm hover:text-[#D4D414] transition-colors hover-scale">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2">
                {['Instagram', 'Facebook', 'YouTube'].map((item) => (
                  <a key={item} href="#" className="block  text-sm hover:text-[#D4D414] transition-colors hover-scale">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Visit Us</h4>
              <p className="text-sm mb-4">
                Tiruppur, Tamil Nadu, India
              </p>
              <div className="space-y-2">
                <p className=" text-sm hover-scale">+91 98765 43210</p>
                <p className=" text-sm hover-scale">info@grcarlab.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-sm text-[#AAADB0]">
            <p>© 2025 GR CAR LAB. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className=" transition-colors hover-scale">Privacy Policy</a>
              <a href="#" className=" transition-colors hover-scale">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
}