import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Zap, Users, Clock, Leaf, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const reasons = [
    {
      icon: Award,
      title: "Skilled Technicians",
      description:
        "Certified professionals focused on quality workmanship and customer care.",
    },
    {
      icon: Zap,
      title: "Modern Equipment",
      description:
        "Professional tools and equipment designed for safe and effective detailing.",
    },
    {
      icon: Users,
      title: "Team-Driven Process",
      description:
        "A structured team approach ensures consistent results on every vehicle.",
    },
    {
      icon: Clock,
      title: "Transparent Service",
      description: "Clear timelines, honest pricing and reliable delivery.",
    },
    {
      icon: Leaf,
      title: "Responsible Products",
      description:
        "Use of reputed brands and environmentally responsible solutions.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every vehicle undergoes final inspection before customer handover.",
    },
  ];

  useEffect(() => {
    // Title animation
    gsap.from(sectionRef.current.querySelector(".whyus-title"), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,

      duration: 0.2,
      ease: "ease3.out",
    });
    gsap.to(sectionRef.current.querySelector(".whyus-title"), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      scale: 1.2,
      duration: 1,
      ease: "ease3.in",
    });

    // Stagger animation for cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Card entrance animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 30,
          scale: 0.9,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.1)",
        });

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -15,
            boxShadow: "0 25px 50px -12px rgba(212, 212, 20, 0.3)",
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(card.querySelector(".icon-container"), {
            scale: 1.15,
            rotation: 5,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(card.querySelector(".icon-container"), {
            scale: 1,
            rotation: 0,
            duration: 0.4,
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
    <section ref={sectionRef} className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-16 gap-4">
        <h2 className="whyus-title text-4xl lg:text-6xl font-bold mb-6">
          Why Choose <span className="text-yellow-400">GR CAR LAB</span>
        </h2>
        <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
          We are committed to delivering exceptional automotive care with
          skilled technicians, modern equipment, and customer-first service that
          guarantees satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="icon-container mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center group-hover:shadow-lg transition-all">
                <IconComponent className="w-8 h-8 text-black" />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                {reason.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-yellow-400 to-transparent group-hover:w-full transition-all duration-300"></div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 lg:mt-24 text-center">
        <p className="text-lg mb-6">
          Book your service or visit our studio to know more
        </p>
        <a
          href="/contact"
          className="inline-block bg-black border border-yellow-400 text-white-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          Schedule Now
        </a>
      </div>
    </section>
  );
};

export default WhyUs;
