import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Calendar, Car, Droplets, Clock, Briefcase, Users, Fuel } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const pricingRef = useRef(null);
  const specsRef = useRef(null);
  const processRef = useRef(null);
  const timelineLineRef = useRef(null);

  const carouselImages = [
    'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&h=800&fit=crop'
  ];

  const benefits = [
    'Professional Equipment',
    'Eco-Friendly Products',
    'Quick Service',
    'Satisfaction Guaranteed',
    'Premium Care',
    'Expert Team'
  ];

  const processSteps = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Book Appointment',
      description: 'Schedule your preferred time slot online or call us directly for instant booking.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Vehicle Drop-off',
      description: 'Bring your vehicle to our facility or opt for our convenient pickup service.'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Professional Cleaning',
      description: 'Our expert team performs thorough cleaning using premium products and equipment.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quality Check',
      description: 'Final inspection ensures every detail meets our high-quality standards before delivery.'
    }
  ];

  useEffect(() => {
    // Hero text slide from bottom
    gsap.fromTo(
      heroRef.current.querySelector('.hero-content'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );

    // Carousel slide from bottom (slower)
    gsap.fromTo(
      carouselContainerRef.current,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );

    // Pricing section animation
    ScrollTrigger.create({
      trigger: pricingRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          pricingRef.current.querySelectorAll('.pricing-card'),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
        );
      }
    });

    // Timeline line animation
    ScrollTrigger.create({
      trigger: processRef.current,
      start: 'top 60%',
      end: 'bottom 20%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(timelineLineRef.current, {
          height: `${progress * 100}%`,
          duration: 0.1
        });
      }
    });

    // Fixed specs section
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Remove GSAP pinning and use CSS sticky instead
      // This prevents the shaking/jittering issue
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      mm.revert();
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Carousel */}
      <section ref={heroRef} className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full hero-content">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Glide Vortex</h1>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8">
              Professional automotive care focusing on detailing, protection and trusted accessories. We deliver tailored solutions to restore shine, protect surfaces and improve your driving experience.
            </p>
            
            {/* Info Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">2022</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                <Car className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">SUV</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                <Briefcase className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">3</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">4</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                <Fuel className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Diesel</span>
              </div>
            </div>

            {/* Pricing Section */}
            <div ref={pricingRef} className="bg-zinc-900 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-6">Pricing Terms</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="pricing-card">
                  <p className="text-gray-400 text-sm mb-2">Daily Rental</p>
                  <p className="text-3xl font-bold">$100<span className="text-lg text-gray-400">/day</span></p>
                </div>
                <div className="pricing-card">
                  <p className="text-gray-400 text-sm mb-2">Weekly Rental</p>
                  <p className="text-3xl font-bold">$600<span className="text-lg text-gray-400">/wk</span></p>
                </div>
                <div className="pricing-card">
                  <p className="text-gray-400 text-sm mb-2">Monthly Rental</p>
                  <p className="text-3xl font-bold">$2,200<span className="text-lg text-gray-400">/mo</span></p>
                </div>
              </div>

              <button className="w-full bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold text-base hover:bg-yellow-400 hover:text-black transition-all inline-flex items-center justify-between group">
                <span>Book Now</span>
                <div className="bg-yellow-400 text-black rounded-full p-2 group-hover:bg-black group-hover:text-yellow-400 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div ref={carouselContainerRef} className="flex-1 w-full">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={carouselImages[currentSlide]} 
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-96 lg:h-[600px] object-cover"
                />
              </div>
              
              {/* Carousel Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Gallery Icon */}
              <button className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Benefits Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          {/* Fixed Benefits - Desktop */}
          <div className="lg:w-1/3 lg:relative">
            <div ref={specsRef} className="lg:sticky lg:top-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-8">Service Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                    <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div ref={processRef} className="lg:w-2/3 min-h-screen">
            <h3 className="text-3xl lg:text-4xl font-bold mb-12">How It Works</h3>
            
            <div className="relative">
              {/* Timeline Line Container - Desktop & Mobile */}
              <div className="absolute left-6 md:left-8 lg:left-8 top-0 w-1 bg-zinc-800 h-full will-change-auto">
                <div ref={timelineLineRef} className="w-full bg-yellow-400" style={{ height: '0%' }}></div>
              </div>

              <div className="space-y-8 relative">
                {processSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 md:gap-6 relative pl-16 md:pl-20 lg:pl-24 will-change-auto"
                  >
                    {/* Timeline Dot - Always Visible */}
                    <div className="absolute left-2 md:left-4 lg:left-4 bg-yellow-400 text-black rounded-full p-3 md:p-4 z-10 flex items-center justify-center will-change-auto">
                      {step.icon}
                    </div>
                    
                    {/* Card */}
                    <div className="bg-zinc-900 rounded-2xl p-5 md:p-6 lg:p-8 flex-1 border-2 border-yellow-400 will-change-auto">
                      <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{step.title}</h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 lg:p-16 text-center text-black">
          <h3 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your service today and experience the difference of professional car care.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-900 transition-colors inline-flex items-center gap-3">
            Schedule Now
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;