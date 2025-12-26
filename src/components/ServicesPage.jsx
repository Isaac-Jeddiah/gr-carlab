import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Calendar, Car, Droplets, Clock,ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from './Nav';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from './servicesData';
import { Link } from 'react-router-dom';
import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const specsRef = useRef(null);
  const processRef = useRef(null);
  const timelineLineRef = useRef(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);

  // Find service by slug passed in route param. Do not fall back to defaults.
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="bg-black text-white min-h-screen">
        <NavBar />
        <main className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold">Service not found</h2>
          <p className="mt-4 text-gray-400">We couldn't find the service you requested.</p>
          <button onClick={() => navigate('/services')} className="mt-6 bg-yellow-400 text-black px-5 py-3 rounded-full">Back to Services</button>
        </main>
      </div>
    );
  }
  

  useEffect(() => {
    const cleanup = [];
    const ctx = gsap.context(() => {
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

      cleanup.push(() => mm.revert());
    });

    return () => {
      ctx.revert();
      cleanup.forEach((fn) => fn());
    };
  }, []);

  const carouselImages = service.images || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (carouselImages.length ? (prev + 1) % carouselImages.length : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (carouselImages.length ? (prev - 1 + carouselImages.length) % carouselImages.length : 0));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      {/* Hero Section with Carousel */}
      <section ref={heroRef} className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
            <div className="flex-1 w-full hero-content">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">{service.title}</h1>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8">{service.description}</p>

            {/* Info Pills - render from service.details if present */}
            <div className="flex flex-wrap gap-3 mb-12">
              {(service.details || []).slice(0, 6).map((d, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                  <span className="text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Carousel */}
          <div ref={carouselContainerRef} className="flex-1 w-full">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={carouselImages[currentSlide] || (service.images && service.images[0])} 
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-96 lg:h-[600px] object-cover"
                />
              </div>
              
              {/* Carousel Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all"
                aria-label="Next slide"
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
          <div className="lg:w-1/3 lg:relative">
            <div ref={specsRef} className="lg:sticky lg:top-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-8">Service Benefits</h3>
              <div className="space-y-4">
                {(service.benefits || []).map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                    <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0"><Check className="w-5 h-5 text-black" /></div>
                    <span className="text-lg">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={processRef} className="lg:w-2/3 min-h-screen">
            <h3 className="text-3xl lg:text-4xl font-bold mb-12">How It Works</h3>
            <div className="relative">
              <div className="absolute left-7 md:left-8 lg:left-10 md:left-10  top-0 w-1 bg-zinc-800 h-full">
                <div ref={timelineLineRef} className="w-full bg-yellow-400" style={{ height: '0%' }} />
              </div>

              <div className="space-y-8 relative">
                {(service.processSteps || []).map((step, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6 relative pl-16 md:pl-20 lg:pl-24">
                    <div className="absolute left-2 md:left-4 lg:left-4 bg-yellow-400 text-black rounded-full p-3 md:p-4 z-10 flex items-center justify-center">
                      {/* use simple icon mapping */}
                      {idx === 0 ? <Calendar className="w-6 h-6" /> : idx === 1 ? <Car className="w-6 h-6" /> : idx === 2 ? <Droplets className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                    </div>
                    <div className="bg-zinc-900 rounded-2xl p-5 md:p-6 lg:p-8 flex-1 border-2 border-yellow-400">
                      <h4 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
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
          <button onClick={() => navigate('/contact')} className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-900 transition-colors inline-flex items-center gap-3">
            Schedule Now
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section ref={servicesRef} className="container mx-auto px-4 py-12 lg:py-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Explore Other Services</h2>
                {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="service-card bg-[#1A1A1A] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4D414]/30 transition-all duration-300 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Service Image */}
              <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden bg-[#222222]">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="service-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
                
                {/* Service Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6">
                  <h3 className="service-card-title text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                <p className="service-card-description text-[#AAADB0] text-sm sm:text-base md:text-base lg:text-base mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <ul className="service-features space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="service-feature-item flex items-center gap-2 text-xs sm:text-xs md:text-xs lg:text-xs text-white/60">
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#D4D414] flex-shrink-0"></span>
                      <span className="line-clamp-2">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link to={`/services/${service.slug || service.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`} className="service-button group inline-flex items-center gap-2 text-[#D4D414] font-semibold text-sm sm:text-base hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;