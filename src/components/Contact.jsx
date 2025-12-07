import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { gsap } from 'gsap';
import car from '../assets/car_1.png';
import { sendEmail, validateFormData } from '../services/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const formRef = useRef(null);
  const carRef = useRef(null);
  const roadRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (showAnimation && carRef.current && roadRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(roadRef.current, 
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.out' }
      );

      tl.fromTo(carRef.current,
        { x: -100, opacity: 0 },
        { 
          x: window.innerWidth - 100, 
          opacity: 1,
          duration: 3,
          ease: 'power2.inOut'
        }
      );

      
    }
  }, [showAnimation]);

  useEffect(() => {
    if (isSubmitted && successRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(successRef.current,
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          rotateZ: 0,
          duration: 0.6,
          ease: 'back.out(1.7)'
        }
      );

      tl.to(successRef.current, {
        scale: 1.05,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [isSubmitted]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateFormData(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Shake animation for errors
      gsap.to(formRef.current, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.4,
        ease: 'power2.inOut'
      });
      return;
    }

    // Clear errors and show loading
    setErrors({});
    setIsLoading(true);
    setShowAnimation(true);
    
    // Send email
    const result = await sendEmail(formData);
    
    setTimeout(() => {
      setShowAnimation(false);
      setIsLoading(false);
      
      if (result.success) {
        setSuccessMessage(result.message);
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          gsap.to(successRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'back.in(1.7)',
            onComplete: () => setIsSubmitted(false)
          });
        }, 4500);
      } else {
        // Show error message
        setErrors({ submit: result.message });
      }
    }, 2500);
  };

  return (
    <section id="contact" className="contact-section py-12 sm:py-16 md:py-20 lg:py-24 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-6 bg-[#080805]">
      <div className="max-w-7xl mx-auto">
        <div className="contact-container bg-gradient-to-br from-[#1A1A1A] to-[#080805] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/5">
          
          {/* Success Message */}
          {isSubmitted && (
            <div ref={successRef} className="mb-8 p-6 sm:p-8 bg-gray-900 border border-gray-800 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-lg mb-4">
                <Check className="w-8 h-8 text-black" />
              </div>
              <p className="text-lg sm:text-xl text-white">Thank you! Your submission has been received!</p>
            </div>
          )}

          {/* Animation Box */}
          {showAnimation && (
            <div className="mb-8 p-8 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden relative h-32">
              <div ref={roadRef} className="absolute bottom-4 left-0 right-0 h-0.5 bg-gray-700"></div>
              <div ref={carRef} className="absolute bottom-4">
                <img src={car} alt="Moving Car" className="h-16 w-auto" />
              </div>
            </div>
          )}

          {/* Form Section */}
          {!isSubmitted && !showAnimation && (
            <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12">
              {/* Contact Info Left */}
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

              {/* Contact Form Right */}
              <div ref={formRef}>
                <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-4">
                  <div>
                    <input 
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`contact-input w-full bg-black/50 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-white/40 sm:placeholder-white/50 focus:border-[#D4D414] focus:outline-none transition-all`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>

                  <div>
                    <input 
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`contact-input w-full bg-black/50 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-white/40 sm:placeholder-white/50 focus:border-[#D4D414] focus:outline-none transition-all`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>

                  <div>
                    <input 
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`contact-input w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-white/40 sm:placeholder-white/50 focus:border-[#D4D414] focus:outline-none transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input 
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`contact-input w-full bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-white/40 sm:placeholder-white/50 focus:border-[#D4D414] focus:outline-none transition-all`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <textarea 
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`contact-textarea w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-white/40 sm:placeholder-white/50 focus:border-[#D4D414] focus:outline-none transition-all resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="contact-submit-button w-full bg-[#D4D414] text-black font-semibold px-4 sm:px-6 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-base hover:bg-[#D4D414]/90 transition-all hover-scale"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-car {
          0% {
            right: -100px;
          }
          100% {
            right: calc(100% + 100px);
          }
        }
        .animate-slide-car {
          animation: slide-car 3s linear;
        }
      `}</style>
    </section>
  );
}