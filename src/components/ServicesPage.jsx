import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Calendar, Car, Droplets, Clock, Briefcase, Users, Fuel } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = ({ data = [] }) => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const pricingRef = useRef(null);
  const specsRef = useRef(null);
  const processRef = useRef(null);
  const timelineLineRef = useRef(null);

  useEffect(() => {
    const found = data.find(d => d.slug === slug);
    setService(found || data[0] || null);
    setCurrentSlide(0);
  }, [slug, data]);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current.querySelectorAll('.hero-content *'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.06, ease: 'power3.out' }
    );

    if (carouselContainerRef.current) {
      gsap.fromTo(
        carouselContainerRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    }

    ScrollTrigger.create({
      trigger: pricingRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo(
          pricingRef.current.querySelectorAll('.pricing-card'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out' }
        );
      }
    });

    ScrollTrigger.create({
      trigger: processRef.current,
      start: 'top 60%',
      end: 'bottom 20%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        if (timelineLineRef.current) {
          gsap.to(timelineLineRef.current, { height: `${progress * 100}%`, duration: 0.1 });
        }
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [service]);

  if (!service) return <div className="p-8 text-center">Service not found</div>;

  const nextSlide = () => setCurrentSlide((s) => (s + 1) % service.images.length);
  const prevSlide = () => setCurrentSlide((s) => (s - 1 + service.images.length) % service.images.length);

  return (
    <div className="bg-black text-white min-h-screen">
      <section ref={heroRef} className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 w-full hero-content">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-gray-400 text-sm lg:text-base mb-6">{service.short}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {/* simple pills for key info */}
              <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Appointment</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-full border border-yellow-400">
                <Car className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{service.pricing[0].label}</span>
              </div>
            </div>

            <div ref={pricingRef} className="bg-zinc-900 rounded-2xl p-6 lg:p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.pricing.map((p, i) => (
                  <div key={i} className="pricing-card bg-zinc-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-sm mb-2">{p.label}</p>
                    <p className="text-2xl font-bold">{p.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={carouselContainerRef} className="flex-1 w-full">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img src={service.images[currentSlide]} alt={service.title} className="w-full h-80 lg:h-[520px] object-cover" />
              </div>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          <div className="lg:w-1/3 lg:relative">
            <div ref={specsRef} className="lg:sticky lg:top-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-8">Service Benefits</h3>
              <div className="space-y-4">
                {service.benefits.map((b, i) => (
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
              <div className="absolute left-6 md:left-8 lg:left-8 top-0 w-1 bg-zinc-800 h-full">
                <div ref={timelineLineRef} className="w-full bg-yellow-400" style={{ height: '0%' }} />
              </div>

              <div className="space-y-8 relative">
                {service.processSteps.map((step, idx) => (
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

      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 lg:p-16 text-center text-black">
          <h3 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">Book your service today and experience the difference of professional care.</p>
          <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-900 transition-colors inline-flex items-center gap-3">
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
