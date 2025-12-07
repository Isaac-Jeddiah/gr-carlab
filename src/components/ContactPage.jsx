import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageCircle, Check } from 'lucide-react';
import { gsap } from 'gsap';
import car from '../assets/car_1.png';
import { sendEmail, validateFormData } from '../services/emailService';
import Navbar from 'NavBar';
import Footer from 'Footer';
export default function ContactUsPage() {
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
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const cardsRef = useRef([]);
  const successRef = useRef(null);
  const carRef = useRef(null);
  const roadRef = useRef(null);

  useEffect(() => {
    // Animate header on mount
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate form fields on mount
    gsap.from(formRef.current?.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3
    });

    // Animate contact cards on mount
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.6
    });

    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });

  gsap.to(formRef.current?.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3
    });
  
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.6
    });

  }, []);

  useEffect(() => {
    if (showAnimation && carRef.current && roadRef.current) {
      const tl = gsap.timeline();
      
      // Road animation
      tl.fromTo(roadRef.current, 
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.out' }
      );

      // Car animation
      tl.fromTo(carRef.current,
        { x: -100, opacity: 0 },
        { 
          x: window.innerWidth + 100, 
          opacity: 1,
          duration: 2.5,
          ease: 'power2.inOut'
        }
      );

      // Add car bounce effect
    //   tl.to(carRef.current, {
    //     y: -10,
    //     duration: 0.15,
    //     repeat: 10,
    //     yoyo: true,
    //     ease: 'power1.inOut'
    //   }, '-=2.5');
    }
  }, [showAnimation]);

  useEffect(() => {
    if (isSubmitted && successRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(successRef.current,
        { scale: 0, opacity: 0, rotateZ: -180 },
        { 
          scale: 1, 
          opacity: 1, 
          rotateZ: 0,
          duration: 0.6,
          ease: 'back.out(1.7)'
        }
      );

      // Pulse animation
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
    
    // Validate form using emailService validator
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
    
    // Send email via service
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
    <>
    <div className="bg-black">
    <Navbar />
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-yellow-400"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wider">CONTACT US</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus
          </p>
          <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-8 p-8 bg-gray-900 border border-gray-800 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-lg mb-4">
              <Check className="w-8 h-8 text-black" />
            </div>
            <p className="text-xl">Thank you! Your submission has been received!</p>
          </div>
        )}

        {/* Animation Box */}
        {showAnimation && (
          <div className="mb-8 p-8 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden relative h-32">
            <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gray-700"></div>
            <div className="animate-slide-car absolute bottom-4">
              <img src={car} alt="Moving Car" className="h-16 w-auto" />
            </div>
          </div>
        )}

        {/* Contact Form */}
        {!isSubmitted && !showAnimation && (
          <div ref={formRef} className="space-y-6 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border ${errors.firstName ? 'border-red-500' : 'border-gray-800'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border ${errors.lastName ? 'border-red-500' : 'border-gray-800'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border ${errors.phone ? 'border-red-500' : 'border-gray-800'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Write Your Message Here..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={`w-full px-6 py-4 bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-800'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-5 bg-black border-2 border-yellow-400 rounded-full text-yellow-400 text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 active:scale-95"
            >
              Send Message
            </button>
          </div>
        )}

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div 
            ref={el => cardsRef.current[0] = el}
            className="p-8 bg-gray-900 border border-gray-800 rounded-2xl text-center hover:border-yellow-400 transition-colors cursor-pointer"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
          >
            <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">+1 (123) 456-7890</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur</p>
          </div>

          <div 
            ref={el => cardsRef.current[1] = el}
            className="p-8 bg-gray-900 border border-gray-800 rounded-2xl text-center hover:border-yellow-400 transition-colors cursor-pointer"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
          >
            <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">info@rydex.com</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur</p>
          </div>

          <div 
            ref={el => cardsRef.current[2] = el}
            className="p-8 bg-gray-900 border border-gray-800 rounded-2xl text-center hover:border-yellow-400 transition-colors cursor-pointer"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
          >
            <MessageCircle className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">Chat With Us</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur</p>
          </div>
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
    </div>
    <Footer />
    </div>
    </>
  );
}