import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Check, Calendar, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import car from "../assets/car_1.png";
import servicesData from "./servicesData.js";
import { contactConfig, getPrimaryPhone, getMailtoLink } from "../config/contactConfig";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
      ease: "power3.out",
    });

    // Animate form fields on mount
    gsap.from(formRef.current?.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.3,
    });

    // Animate contact cards on mount
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.6,
    });

    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(formRef.current?.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.6,
    });
  }, []);

  useEffect(() => {
    if (showAnimation && carRef.current && roadRef.current) {
      const tl = gsap.timeline();

      // Road animation
      tl.fromTo(
        roadRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power2.out" }
      );

      // Car animation
      tl.fromTo(
        carRef.current,
        { x: -100, opacity: 0 },
        {
          x: window.innerWidth + 100,
          opacity: 1,
          duration: 2.5,
          ease: "power2.inOut",
        }
      );
      return () => tl.kill();

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

      tl.fromTo(
        successRef.current,
        { scale: 0, opacity: 0, rotateZ: -180 },
        {
          scale: 1,
          opacity: 1,
          rotateZ: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // Pulse animation
      tl.to(successRef.current, {
        scale: 1.05,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
      });
      
    return () => tl.kill();
    }

  }, [isSubmitted]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      gsap.to(formRef.current, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.4,
        ease: "power2.inOut",
      });
      return;
    }

    // Build mailto link with all form data
    const toEmail = contactConfig.email;
    const subject = `GR CAR LAB Service Enquiry - ${
      formData.vehicle || "New Enquiry"
    }`;
    const bodyText = `Hello,

I would like to enquire about GR CAR LAB services.

--- CLIENT DETAILS ---
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

--- VEHICLE & SERVICE ---
Vehicle: ${formData.vehicle}
Service Interested: ${formData.serviceRequired}
Preferred Date: ${formData.preferredDate}

--- ADDITIONAL DETAILS ---
${formData.message}



Best regards,
${formData.firstName} ${formData.lastName}`;

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailto;

    setSuccessMessage("Your email client should open to complete the enquiry.");
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      vehicle: "",
      serviceRequired: "",
      preferredDate: "",
    });
  };

  return (
    <>
      <div className="bg-black">
        <div className="min-h-screen bg-black text-white pt-2 sm:pt-4 md:pt-8 lg:pt-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div ref={headerRef} className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#D4D414]"></div>
                <span className="text-[#D4D414] text-sm font-medium tracking-wider">
                  CONTACT US
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                We're here to help. Contact us to schedule your detailing
                appointment, request a quote, or ask about our premium services.
                Fast responses and personalised care for every vehicle.
              </p>
              <div className="w-2 h-2 bg-[#D4D414] rounded-full mx-auto mt-6"></div>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-8 p-8 bg-gray-900 border border-gray-800 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4D414] rounded-lg mb-4">
                  <Check className="w-8 h-8 text-black" />
                </div>
                <p className="text-xl">
                  Thank you! Your submission has been received!
                </p>
              </div>
            )}

            {/* Animation Box */}
            {showAnimation && (
              <div className="mb-8 p-8 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden relative h-32">
                <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gray-700"></div>
                <div className="animate-slide-car absolute bottom-4">
                  <img loading="lazy"  src={car} alt="Moving Car" className="h-16 w-auto" />
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
                      className={`w-full px-6 py-4 bg-gray-900 border ${
                        errors.firstName ? "border-red-500" : "border-gray-800"
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4D414] transition-colors`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-gray-900 border ${
                        errors.lastName ? "border-red-500" : "border-gray-800"
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4D414] transition-colors`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
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
                      className={`w-full px-6 py-4 bg-gray-900 border ${
                        errors.email ? "border-red-500" : "border-gray-800"
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4D414] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-gray-900 border ${
                        errors.phone ? "border-red-500" : "border-gray-800"
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4D414] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      name="vehicle"
                      placeholder="Vehicle Make & Model (e.g., Toyota Innova)"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-gray-900 border ${
                        errors.vehicle ? "border-red-500" : "border-gray-800"
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4D414] transition-colors`}
                    />
                    {errors.vehicle && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.vehicle}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-strech">
                    <div className="space-y-2">
                      <label
                        htmlFor="serviceRequired"
                        className="block text-sm text-gray-400 ml-1"
                      >
                        Select Service Required
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 bg-gray-900 border ${
                          errors.serviceRequired
                            ? "border-red-500"
                            : "border-gray-800"
                        } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4D414] transition-colors`}
                      >
                        <option value="">Select</option>
                        <option value="Product Enquiry">Product Enquiry</option>
                        {servicesData.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.serviceRequired}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm text-gray-400 ml-1"
                      >
                        Select Your Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          id="preferredDate"
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className={`w-full appearance-none px-6 py-4 bg-gray-900 border ${
                            errors.preferredDate
                              ? "border-red-500"
                              : "border-gray-800"
                          } rounded-xl text-white focus:outline-none focus:border-[#D4D414] transition-colors
                          [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert
                          [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                        />
                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4D414] pointer-events-none" />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-red-500 text-sm mt-1 ml-1">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Additional Notes"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-6 py-4 bg-gray-900 border ${
                        errors.message ? "border-red-500" : "border-gray-800"
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4D414] transition-colors resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-5 bg-black border-2 border-[#D4D414] rounded-full text-[#D4D414] text-lg font-medium hover:bg-[#D4D414] hover:text-black transition-all duration-300 active:scale-95"
                >
                  Send Message
                </button>
              </div>
            )}

            
          </div>
        </div>
      </div>
    </>
  );
}
