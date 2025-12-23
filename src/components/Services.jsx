import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import servicesData from "./servicesData.js";
import {
  ClipboardList,
  SearchCheck,
  FileText,
  MessageSquare,
  Wrench,
  CheckCircle,
  Sparkles, 
  Droplets, 
  Shield, 
  Camera, 
  ThumbsUp 
} from "lucide-react";
import { setupGSAP } from "../utils/gsapSetup";
import AnimatedOnScroll from "./AnimatedOnScroll";

const Services = () => {
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);
  const workflowSteps = [
    {
      step: 1,
      title: "Know Requirements",
      description:
        "We understand your vehicle condition, usage and expectations to plan the most suitable service.",
      icon: ClipboardList,
    },
    {
      step: 2,
      title: "Thorough Inspection",
      description:
        "A complete inspection is carried out to document current condition and identify areas needing attention.",
      icon: SearchCheck,
    },
    {
      step: 3,
      title: "Detailed Job Sheet",
      description:
        "We prepare a clear job sheet outlining recommended services, costs, timeline and products.",
      icon: FileText,
    },
    {
      step: 4,
      title: "Customer Brief",
      description:
        "The service plan and process are explained clearly to ensure transparency and alignment.",
      icon: MessageSquare,
    },
    {
      step: 5,
      title: "Execute Services",
      description:
        "Approved services are performed by trained technicians using professional tools and methods.",
      icon: Wrench,
    },
    {
      step: 6,
      title: "Quality Check & Handover",
      description:
        "Final quality checks are completed followed by a customer walkthrough before delivery.",
      icon: CheckCircle,
    },
  ];
  const StackedWorkflowCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the container
      const scrollStart = windowHeight * 0.3;
      const scrollEnd = windowHeight * 0.7;
      
      if (containerTop > scrollStart) {
        setActiveCard(0);
        return;
      }

      if (containerTop < -containerHeight + scrollEnd) {
        setActiveCard(workflowSteps.length - 1);
        return;
      }

      // Calculate which card should be active based on scroll position
      const progress = Math.abs(containerTop - scrollStart) / (containerHeight - windowHeight);
      const cardIndex = Math.min(
        Math.floor(progress * workflowSteps.length),
        workflowSteps.length - 1
      );
      
      setActiveCard(Math.max(0, cardIndex));

      // Apply transforms to each card
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isActive = index === cardIndex;
        const isPast = index < cardIndex;
        const isFuture = index > cardIndex;

        if (isPast) {
          // Cards that have been scrolled past - stack at top
          const stackOffset = (cardIndex - index) * 20;
          card.style.transform = `translateY(-${stackOffset}px) scale(${0.95 - (cardIndex - index) * 0.05})`;
          card.style.opacity = '0.6';
          card.style.zIndex = index.toString();
        } else if (isActive) {
          // Current active card
          card.style.transform = 'translateY(0) scale(1)';
          card.style.opacity = '1';
          card.style.zIndex = workflowSteps.length.toString();
        } else if (isFuture) {
          // Future cards - hidden below
          const offset = (index - cardIndex) * 100;
          card.style.transform = `translateY(${offset}px) scale(0.95)`;
          card.style.opacity = '0';
          card.style.zIndex = (workflowSteps.length - index).toString();
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="border-t border-white/10 pt-16 sm:pt-20 md:pt-24 mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            How We Work on Your Car
          </h3>
          <p className="text-center text-gray-400 text-base sm:text-lg mb-14 max-w-2xl mx-auto">
            A clear six-step process designed to ensure transparency, quality
            and consistent results.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div
          ref={containerRef}
          className="relative"
          style={{ minHeight: `${workflowSteps.length * 60}vh` }}
        >
          <div className="sticky top-20 md:top-32 h-[70vh] md:h-[60vh] flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto">
              {workflowSteps.map(({ step, title, description, icon: Icon }, index) => (
                <div
                  key={step}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="absolute inset-0 w-full"
                  style={{
                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    transform: index === 0 ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)',
                    opacity: index === 0 ? '1' : '0',
                  }}
                >
                  <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 sm:p-12 md:p-16 rounded-2xl border border-white/10 hover:border-[#D4D414]/50 transition-all shadow-2xl">
                    {/* Step Number */}
                    <div className="inline-block px-4 py-2 rounded-full bg-[#D4D414]/20 text-[#D4D414] text-sm font-bold mb-6">
                      Step {step}
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#D4D414]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4D414]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                          {title}
                        </h4>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-8 flex items-center gap-2">
                      {workflowSteps.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full flex-1 transition-all duration-500 ${
                            idx <= index ? 'bg-[#D4D414]' : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          Scroll to see each step
        </div>
      </div>
    </div>
  );
};
  useEffect(() => {
    setupGSAP();
    // Animate section title on scroll
    gsap.from(".services-title", {
      scrollTrigger: {
        trigger: ".services-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate cards with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Card entrance animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          opacity: 0.8,
          y: 15,
          rotationX: -25,
          scale: 0.9,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.2)",
        });

        // Hover animation for card
        const image = card.querySelector(".service-image");
        const title = card.querySelector(".service-title");
        const button = card.querySelector(".service-button");

        card.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.6,
            ease: "power2.out",
          });

          gsap.to(title, {
            color: "#D4D414",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(button, {
            x: 2,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(card, {
            y: -20,
            boxShadow: "0 20px 40px rgba(212, 212, 20, 0.2)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          });

          gsap.to(title, {
            color: "#FFFFFF",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(button, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(card, {
            y: 0,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="services"
      className="services-section sm:-py-2 md:-py-4 lg:-py-8 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-6 bg-black"
      ref={servicesRef}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedOnScroll options={{ from: { y: 30, opacity: 0 }, duration: 0.9 }}>
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
            Expert detailing solutions with advanced technology, premium
            products, and meticulous attention to every detail
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card bg-[#1A1A1A] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4D414]/30 transition-all duration-300 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
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
                    <li
                      key={idx}
                      className="service-feature-item flex items-center gap-2 text-xs sm:text-xs md:text-xs lg:text-xs text-white/60"
                    >
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#D4D414] flex-shrink-0"></span>
                      <span className="line-clamp-2">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link
                  to={`/services/${
                    service.slug ||
                    service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                  }`}
                  className="service-button group inline-flex items-center gap-2 text-[#D4D414] font-semibold text-sm sm:text-base hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How We Work Section */}
        <StackedWorkflowCards />
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default Services;
