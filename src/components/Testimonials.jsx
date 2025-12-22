import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Quote, Star, Heart, Award, Sparkles, Users } from 'lucide-react';
import rajeshKumar from '../assets/testimonial-rajesh-kumar.jpg';
import priyaSharma from '../assets/testimonial-priya-sharma.jpg';
import arjunMehta from '../assets/testimonial-arjun-mehta.jpg';
import snehaReddy from '../assets/testimonial-sneha-reddy.jpg';
import vikramSingh from '../assets/testimonial-vikram-singh.jpg';
import ananyaIyer from '../assets/testimonial-ananya-iyer.jpg';
import karthikNair from '../assets/testimonial-karthik-nair.jpg';
import deepikaPatel from '../assets/testimonial-deepika-patel.jpg';
import rahulKapoor from '../assets/testimonial-rahul-kapoor.jpg';
import meeraKrishnan from '../assets/testimonial-meera-krishnan.jpg';
import siddharthJoshi from '../assets/testimonial-siddharth-joshi.jpg';
import kavyaMenon from '../assets/testimonial-kavya-menon.jpg';
import adityaGupta from '../assets/testimonial-aditya-gupta.jpg';
import ishitaBose from '../assets/testimonial-ishita-bose.jpg';
import rohanDesai from '../assets/testimonial-rohan-desai.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "BMW Owner",
      image: rajeshKumar,
      text: "Absolutely phenomenal service! My car looks better than showroom condition. The ceramic coating is outstanding.",
      rating: 5,
      icon: Star,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Mercedes Owner",
      image: priyaSharma,
      text: "The attention to detail is remarkable. Interior detailing brought my car's leather seats back to life. Highly recommend!",
      rating: 5,
      icon: Heart,
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      role: "Audi Owner",
      image: arjunMehta,
      text: "Professional team with exceptional workmanship. The paint correction removed all swirl marks. Worth every penny!",
      rating: 5,
      icon: Award,
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Porsche Owner",
      image: snehaReddy,
      text: "The PPF installation was flawless. Protected my investment perfectly. These guys are true professionals!",
      rating: 5,
      icon: Sparkles,
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Range Rover Owner",
      image: vikramSingh,
      text: "Best car detailing experience ever! Engine detailing was thorough and my SUV runs smoother. 5 stars!",
      rating: 5,
      icon: Quote,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 6,
      name: "Ananya Iyer",
      role: "Tesla Owner",
      image: ananyaIyer,
      text: "Eco-friendly products and amazing results! The ceramic coating makes washing so easy. Truly impressed!",
      rating: 5,
      icon: Star,
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 7,
      name: "Karthik Nair",
      role: "Jaguar Owner",
      image: karthikNair,
      text: "Impeccable service from start to finish. Headlight restoration brought them back to crystal clear. Fantastic!",
      rating: 5,
      icon: Heart,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 8,
      name: "Deepika Patel",
      role: "Lexus Owner",
      image: deepikaPatel,
      text: "Outstanding craftsmanship! The leather conditioning made my seats feel brand new. Will definitely return!",
      rating: 5,
      icon: Award,
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 9,
      name: "Rahul Kapoor",
      role: "Volvo Owner",
      image: rahulKapoor,
      text: "Premium service at reasonable prices. Underbody coating gives me peace of mind. Highly professional team!",
      rating: 5,
      icon: Sparkles,
      color: "from-fuchsia-500/20 to-pink-500/20",
      borderColor: "border-fuchsia-500/30"
    },
    {
      id: 10,
      name: "Meera Krishnan",
      role: "Mini Cooper Owner",
      image: meeraKrishnan,
      text: "Transformed my car completely! The exterior detailing and wheel care are exceptional. Love the results!",
      rating: 5,
      icon: Quote,
      color: "from-lime-500/20 to-green-500/20",
      borderColor: "border-lime-500/30"
    },
    {
      id: 11,
      name: "Siddharth Joshi",
      role: "Maserati Owner",
      image: siddharthJoshi,
      text: "Unparalleled attention to detail. The paint protection is top-notch. My car has never looked this good!",
      rating: 5,
      icon: Star,
      color: "from-sky-500/20 to-blue-500/20",
      borderColor: "border-sky-500/30"
    },
    {
      id: 12,
      name: "Kavya Menon",
      role: "Bentley Owner",
      image: kavyaMenon,
      text: "Luxury service for luxury cars! Odor elimination worked wonders. My car smells and looks amazing now!",
      rating: 5,
      icon: Heart,
      color: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 13,
      name: "Aditya Gupta",
      role: "Ferrari Owner",
      image: adityaGupta,
      text: "World-class detailing! The scratch removal was perfect. These experts know how to handle supercars!",
      rating: 5,
      icon: Award,
      color: "from-rose-500/20 to-red-500/20",
      borderColor: "border-rose-500/30"
    },
    {
      id: 14,
      name: "Ishita Bose",
      role: "Lamborghini Owner",
      image: ishitaBose,
      text: "Absolutely brilliant! GTECHNIQ ceramic coating exceeded expectations. Shine is incredible after 6 months!",
      rating: 5,
      icon: Sparkles,
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      id: 15,
      name: "Rohan Desai",
      role: "Rolls Royce Owner",
      image: rohanDesai,
      text: "Exquisite service worthy of the finest automobiles. Every detail perfected. Simply the best in the business!",
      rating: 5,
      icon: Quote,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    }
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Group testimonials - 5 for desktop, 3 for tablet, 2 for mobile
  const cardsPerSet = isMobile ? 2 : 5;
  const testimonialSets = [];
  for (let i = 0; i < testimonials.length; i += cardsPerSet) {
    testimonialSets.push(testimonials.slice(i, i + cardsPerSet));
  }
  //3 cards per set for tablet can be added similarly if needed

  useEffect(() => {
    

    // Desktop positions
    const desktopPositions = [
      { x: -400, y: -200 }, // Top left
      { x: 400, y: -200 },  // Top right
      { x: -500, y: 150 },  // Bottom left
      { x: 500, y: 150 },   // Bottom right
      { x: 0, y: 0 }      // Bottom center
    ];

    // Mobile positions
    const mobilePositions = [
      { x: 0, y: -180 },    // Top
      { x: 0, y: 180 }      // Bottom
    ];

    const positions = isMobile ? mobilePositions : desktopPositions;

    // Set initial positions for first set
    cardsRef.current.slice(0, cardsPerSet).forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          x: positions[index].x,
          y: positions[index].y,
          opacity: 0,
          scale: 0.8
        });
      }
    });

    // Animate first set in
    gsap.to(cardsRef.current.slice(0, cardsPerSet), {
      opacity: 0,
      scale: 1,
      duration: 0.2,
      stagger: 0.15,
      ease: 'back.out(1.2)',
      delay: 0.1
    });

    // Auto-rotate testimonials
    const rotationInterval = setInterval(() => {
      const currentSet = Math.floor(activeIndex / cardsPerSet);
      const nextSet = (currentSet + 1) % testimonialSets.length;
      const currentCards = cardsRef.current.slice(currentSet * cardsPerSet, (currentSet + 1) * cardsPerSet);
      const nextCards = cardsRef.current.slice(nextSet * cardsPerSet, (nextSet + 1) * cardsPerSet);

      // Fade out current set
      gsap.to(currentCards, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.in'
      });

      // Set next cards to positions and fade in
      nextCards.forEach((card, index) => {
        if (card) {
          gsap.set(card, {
            x: positions[index].x,
            y: positions[index].y,
            opacity: 0,
            scale: 0.8
          });
        }
      });

      gsap.to(nextCards, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        delay: 1
      });

      setActiveIndex((nextSet * cardsPerSet) % testimonials.length);
    }, 5000);

    return () => clearInterval(rotationInterval);
  }, [activeIndex, isMobile, cardsPerSet, testimonialSets.length]);

  const currentSet = Math.floor(activeIndex / cardsPerSet);

  return (
    <section className="testimonials-section py-32 px-6 bg-gradient-to-b from-black to-[#080805] relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-3 justify-center mb-6">
            <span className="w-10 h-px bg-[#D4D414]"></span>
            <span>TESTIMONIALS</span>
            <span className="w-10 h-px bg-[#D4D414]"></span>
          </div>
          <h2 className="testimonials-title-main text-4xl md:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="testimonials-description text-[#AAADB0] max-w-2xl mx-auto text-lg">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Testimonials Container */}
        <div className={`testimonials-container relative flex items-center justify-center ${isMobile ? 'min-h-[600px]' : 'h-[800px]'}`}>
          {/* Center Box */}
          

          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            
            return (
              <div
                key={testimonial.id}
                ref={el => cardsRef.current[index] = el}
                className={`absolute ${isMobile ? 'w-72' : 'w-80'} bg-gradient-to-br ${testimonial.color} backdrop-blur-xl border ${testimonial.borderColor} rounded-2xl p-6 shadow-2xl`}
                style={{ opacity: 0 }}
              >
                {/* Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1A1A1A] rounded-full border-2 border-[#D4D414] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#D4D414]" />
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#D4D414]/40 mb-4" />

                {/* Testimonial Text */}
                <p className="text-white/90 text-sm leading-relaxed mb-6 min-h-[80px]">
                  "{testimonial.text}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4D414] text-[#D4D414]" />
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-[#D4D414]/40"
                    style={{
                      backgroundImage: `url(${testimonial.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-[#AAADB0] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots - Fixed positioning */}
        <div className="flex justify-center gap-3 mt-16 relative z-30">
          {testimonialSets.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const currentSet = Math.floor(activeIndex / cardsPerSet);
                if (index !== currentSet) {
                  // Get current and next cards
                  const currentCards = cardsRef.current.slice(currentSet * cardsPerSet, (currentSet + 1) * cardsPerSet);
                  const nextCards = cardsRef.current.slice(index * cardsPerSet, (index + 1) * cardsPerSet);
                  const positions = isMobile ? [
                    { x: 0, y: -180 },
                    { x: 0, y: 180 }
                  ] : [
                    { x: -400, y: -200 },
                    { x: 400, y: -200 },
                    { x: -500, y: 150 },
                    { x: 500, y: 150 },
                    { x: 0, y: 0 }
                  ];

                  // Instantly hide current cards
                  gsap.killTweensOf(currentCards);
                  gsap.to(currentCards, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0,
                    immediate: true
                  });

                  // Position and animate in new cards
                  nextCards.forEach((card, cardIndex) => {
                    if (card) {
                      gsap.set(card, {
                        x: positions[cardIndex].x,
                        y: positions[cardIndex].y,
                        opacity: 0,
                        scale: 0.8
                      });
                    }
                  });

                  gsap.to(nextCards, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'back.out(1.2)'
                  });

                  setActiveIndex(index * cardsPerSet);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentSet === index 
                  ? 'bg-[#D4D414] w-8' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4D414]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4D414]/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;