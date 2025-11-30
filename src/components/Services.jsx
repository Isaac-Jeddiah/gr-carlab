import React, { useEffect, useRef } from 'react';
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
      title: "Premium Washing & Cleaning",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop",
      description: "Complete exterior wash with pre-inspection, high-pressure cleaning, underbody wash, and premium polish. Bio-friendly products and expert care.",
      details: ["Pre Wash Inspection", "High Pressure Cleaning", "Underbody Wash", "Drying System", "Premium Polish"]
    },
    {
      id: 2,
      title: "Interior Detailing",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop",
      description: "Deep interior cleaning including vacuuming, roof cleaning, dashboard detailing, carpet & upholstery care, and genuine leather treatment.",
      details: ["Vacuuming", "Roof Cleaning", "Dashboard & Console", "Carpet & Upholstery", "Genuine Leather Care"]
    },
    {
      id: 3,
      title: "Exterior Detailing",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop",
      description: "Professional steam cleaning, foam wash, wheel detailing, and complete exterior restoration for a showroom finish.",
      details: ["Steam Cleaning", "Exterior Foam Wash", "Wheel Cleaning", "Trim Restoration", "Glass Treatment"]
    },
    {
      id: 4,
      title: "Ceramic Coating",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop",
      description: "Premium ceramic coating protection using DetailMax & GTECHNIQ products. Long-lasting shine, scratch resistance, and hydrophobic properties.",
      details: ["Paint Evaluation", "Surface Preparation", "Ceramic Application", "Curing Process", "9H Hardness"]
    },
    {
      id: 5,
      title: "Paint Protection Film (PPF)",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop",
      description: "Garware PPF installation for ultimate paint protection. Self-healing technology guards against chips, scratches, and environmental damage.",
      details: ["Full/Partial Coverage", "Self-Healing Technology", "UV Protection", "Precision Installation", "10-Year Warranty"]
    },
    {
      id: 6,
      title: "Paint Correction",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop",
      description: "Multi-stage paint correction to remove swirls, scratches, and oxidation. Compounding and polishing for flawless paint finish.",
      details: ["Paint Evaluation", "Decontamination", "Compounding", "Polishing", "Final Inspection"]
    },
    {
      id: 7,
      title: "Engine Detailing",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
      description: "Complete engine bay cleaning and detailing. Safe degreasing, steam cleaning, and protective dressing for a pristine engine compartment.",
      details: ["Engine Degreasing", "Steam Cleaning", "Component Protection", "Hose & Wire Dressing", "Final Detailing"]
    },
    {
      id: 8,
      title: "Wheel & Tire Detailing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxY56h5NOCcSCy-4WuFQLb8bsuxpehR2hIIQ&s",
      description: "Deep wheel cleaning, brake dust removal, tire treatment, and protective coating. Restores shine and protects against road grime.",
      details: ["Wheel Deep Clean", "Brake Dust Removal", "Tire Treatment", "Rim Protection", "Tire Shine"]
    },
    {
      id: 9,
      title: "Glass Treatment & Coating",
      image: "data:image/jpeg;base64,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",
      description: "Professional glass cleaning and hydrophobic coating. Crystal clear visibility with water-repellent properties for safer driving.",
      details: ["Glass Polish", "Water Repellent Coating", "Rain Vision Technology", "Interior Glass Care", "Wiper Treatment"]
    },
    {
      id: 10,
      title: "Headlight Restoration",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
      description: "Restore cloudy, yellowed headlights to like-new condition. Multi-step process with UV protection sealing for lasting clarity.",
      details: ["Sanding Process", "Polish & Compound", "UV Protection", "Clarity Restoration", "Sealed Finish"]
    },
    {
      id: 11,
      title: "Leather Conditioning",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      description: "Premium leather cleaning, conditioning, and protection. Maintains suppleness, prevents cracking, and restores natural shine.",
      details: ["Leather Cleaning", "Deep Conditioning", "Crack Prevention", "Color Restoration", "UV Protection"]
    },
    {
      id: 12,
      title: "Odor Elimination",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "Complete odor removal using ozone treatment and deep sanitization. Eliminates smoke, pet, and stubborn odors permanently.",
      details: ["Ozone Treatment", "Deep Sanitization", "Air Vent Cleaning", "Carpet Treatment", "Lasting Freshness"]
    },
    {
      id: 13,
      title: "Scratch & Swirl Removal",
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop",
      description: "Expert scratch and swirl mark removal through precision polishing. Restores paint depth and eliminates surface imperfections.",
      details: ["Paint Assessment", "Stage 1 Polish", "Stage 2 Refinement", "Hologram Removal", "Protection Layer"]
    },
    {
      id: 14,
      title: "Underbody Coating",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=400&fit=crop",
      description: "Protective underbody coating against rust, corrosion, and road debris. Essential protection for long-term vehicle health.",
      details: ["Underbody Cleaning", "Rust Prevention", "Rubberized Coating", "Wheel Arch Protection", "Lifetime Shield"]
    },
    {
      id: 15,
      title: "Seasonal Protection Package",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      description: "Comprehensive seasonal protection package. Ceramic coating, interior protection, and full detailing to prepare your car for any weather.",
      details: ["Full Detail Service", "Ceramic Protection", "Interior Shield", "Weather Guard", "Complete Care"]
    }
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
          <h2 className="services-title-main text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Premium Car Care Services
          </h2>
          <p className="services-description text-[#AAADB0] max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
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
                  <h3 className="service-card-title text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                <p className="service-card-description text-[#AAADB0] text-xs sm:text-sm md:text-sm lg:text-sm mb-3 sm:mb-4 leading-relaxed">
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
                <button className="service-button group flex items-center gap-2 text-[#D4D414] font-semibold text-xs sm:text-sm hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                </button>
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
              href="https://www.detailmax.in/ceramic-coatings/"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card bg-[#1A1A1A] p-6 sm:p-7 md:p-8 rounded-lg sm:rounded-xl border border-white/5 hover:border-[#D4D414]/30 transition-all text-center group"
            >
              <div className="brand-name text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4D414] mb-2 sm:mb-3">DETAIL MAX</div>
              <p className="text-[#AAADB0] text-xs sm:text-sm mb-3 sm:mb-4">Premium Ceramic Coating & PPF Solutions</p>
              <span className="text-xs text-white/50 group-hover:text-[#D4D414] transition-colors">Visit Website →</span>
            </a>
            
            <a
              href="https://gtechniq.com/product-category/auto/ceramic-coatings/"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card bg-[#1A1A1A] p-6 sm:p-7 md:p-8 rounded-lg sm:rounded-xl border border-white/5 hover:border-[#D4D414]/30 transition-all text-center group"
            >
              <div className="brand-name text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4D414] mb-2 sm:mb-3">GTECHNIQ</div>
              <p className="text-[#AAADB0] text-xs sm:text-sm mb-3 sm:mb-4">Advanced Ceramic Coating Technology</p>
              <span className="text-xs text-white/50 group-hover:text-[#D4D414] transition-colors">Visit Website →</span>
            </a>
            
            <a
              href="https://www.garwarehitechfilms.com/paint-protection-films"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card bg-[#1A1A1A] p-6 sm:p-7 md:p-8 rounded-lg sm:rounded-xl border border-white/5 hover:border-[#D4D414]/30 transition-all text-center group"
            >
              <div className="brand-name text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4D414] mb-2 sm:mb-3">GARWARE</div>
              <p className="text-[#AAADB0] text-xs sm:text-sm mb-3 sm:mb-4">Industry-Leading Paint Protection Films</p>
              <span className="text-xs text-white/50 group-hover:text-[#D4D414] transition-colors">Visit Website →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;