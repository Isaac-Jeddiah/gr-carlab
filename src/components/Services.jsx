import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);

  const servicesData = [
    {
      id: 1,
      title: "Washing & Cleaning",
      slug: 'premium-washing',
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop",
      description: "Complete exterior wash with pre-inspection, high-pressure cleaning, underbody wash, and premium polish. Bio-friendly products and expert care.",
      details: ["Pre Wash Inspection", "High Pressure Cleaning", "Underbody Wash", "Drying System", "Premium Polish"]
    },
    {
      id: 2,
      title: "Car Detailing",
      slug: 'interior-detailing',
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop",
      description: "Deep interior cleaning including vacuuming, roof cleaning, dashboard detailing, carpet & upholstery care, and genuine leather treatment.",
      details: ["Vacuuming", "Roof Cleaning", "Dashboard & Console", "Carpet & Upholstery", "Genuine Leather Care"]
    },
    {
      id: 3,
      title: "Exterior Detailing",
      slug: 'exterior-detailing',
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop",
      description: "Professional steam cleaning, foam wash, wheel detailing, and complete exterior restoration for a showroom finish.",
      details: ["Steam Cleaning", "Exterior Foam Wash", "Wheel Cleaning", "Trim Restoration", "Glass Treatment"]
    },
    {
      id: 4,
      title: "Ceramic Coating",
      slug: 'ceramic-coating',
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop",
      description: "Premium ceramic coating protection using DetailMax & GTECHNIQ products. Long-lasting shine, scratch resistance, and hydrophobic properties.",
      details: ["Paint Evaluation", "Surface Preparation", "Ceramic Application", "Curing Process", "9H Hardness"]
    },
    
    {
      id: 5,
      title: "Paint Correction & Paint Protection Film (PPF)",
      slug: 'ppf',
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop",
      description: "Multi-stage paint correction to remove swirls, scratches, and oxidation. Compounding and polishing for flawless paint finish.",
      details: ["Paint Evaluation", "Decontamination", "Compounding", "Polishing", "Final Inspection"]
    },
    
  
    {
      id: 6,
      title: "Paint Protection  Ceramic Coating and Applying PPF",
      slug: 'paint-protection',
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop",
      description: "Expert scratch and swirl mark removal through precision polishing. Restores paint depth and eliminates surface imperfections.",
      details: ["Paint Assessment", "Stage 1 Polish", "Stage 2 Refinement", "Hologram Removal", "Protection Layer"]
    },
    {
      id: 7,
      title: "Underbody Coating",
      slug: 'underbody-coating',
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=400&fit=crop",
      description: "Protective underbody coating against rust, corrosion, and road debris. Essential protection for long-term vehicle health.",
      details: ["Underbody Cleaning", "Rust Prevention", "Rubberized Coating", "Wheel Arch Protection", "Lifetime Shield"]
    },
   
  ];

  useEffect(() => {
    // Animate section title on scroll
    gsap.from('.services-title', {
      scrollTrigger: {
        trigger: '.services-title',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0.5,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate cards with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Card entrance animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0.8,
          y: 15,
          rotationX: -25,
          scale: 0.9,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.2)'
        });

        // Hover animation for card
        const image = card.querySelector('.service-image');
        const title = card.querySelector('.service-title');
        const button = card.querySelector('.service-button');

        card.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out'
          });

          gsap.to(title, {
            color: '#D4D414',
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(button, {
            x: 2,
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(card, {
            y: -20,
            boxShadow: '0 20px 40px rgba(212, 212, 20, 0.2)',
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          });

          gsap.to(title, {
            color: '#FFFFFF',
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(button, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className="services-section py-12 sm:py-16 md:py-20 lg:py-24 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-6 bg-black" ref={servicesRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-16 services-title">
          <div className="text-xs sm:text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
            <span className="w-6 sm:w-8 md:w-10 h-px bg-[#D4D414]"></span>
            <span>OUR SERVICES</span>
          </div>
          <h2 className="services-title-main text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6">
            Premium Car Care Services
          </h2>
          <p className="services-description text-[#AAADB0] max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
            Expert detailing solutions with advanced technology, premium products, and meticulous attention to every detail
          </p>
        </div>

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
                  src={service.image}
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

        {/* Brand Partners Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-14 md:pt-16 lg:pt-16 border-t border-white/10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            Premium Product Partners
          </h3>
          <div className="brand-partners-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card bg-[#1A1A1A] p-6 sm:p-7 md:p-8 rounded-lg sm:rounded-xl border border-white/5 hover:border-[#D4D414]/30 transition-all text-center group"
            >
              <div className="brand-name text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4D414] mb-2 sm:mb-3">DETAIL MAX</div>
              <p className="text-[#AAADB0] text-xs sm:text-sm mb-3 sm:mb-4">Premium Ceramic Coating & PPF Solutions</p>
              
            </a>
            
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card bg-[#1A1A1A] p-6 sm:p-7 md:p-8 rounded-lg sm:rounded-xl border border-white/5 hover:border-[#D4D414]/30 transition-all text-center group"
            >
              <div className="brand-name text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4D414] mb-2 sm:mb-3">GTECHNIQ</div>
              <p className="text-[#AAADB0] text-xs sm:text-sm mb-3 sm:mb-4">Advanced Ceramic Coating Technology</p>
             
            </a>
            
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card bg-[#1A1A1A] p-6 sm:p-7 md:p-8 rounded-lg sm:rounded-xl border border-white/5 hover:border-[#D4D414]/30 transition-all text-center group"
            >
              <div className="brand-name text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4D414] mb-2 sm:mb-3">GARWARE</div>
              <p className="text-[#AAADB0] text-xs sm:text-sm mb-3 sm:mb-4">Industry-Leading Paint Protection Films</p>
             
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;