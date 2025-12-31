import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setupGSAP } from "../utils/gsapSetup";
import { Award, Zap, Users, Clock, Leaf, Shield } from "lucide-react";

// Memoized icon components to prevent re-renders
const IconWrapper = React.memo(({ icon: Icon, className }) => (
  <Icon className={className} />
));

const WhyUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const reasons = useMemo(() => [
    {
      icon: Award,
      title: "Skilled Technicians",
      description: "Certified professionals focused on quality workmanship and customer care.",
    },
    {
      icon: Zap,
      title: "Modern Equipment",
      description: "Professional tools and equipment designed for safe and effective detailing.",
    },
    {
      icon: Users,
      title: "Team-Driven Process",
      description: "A structured team approach ensures consistent results on every vehicle.",
    },
    {
      icon: Clock,
      title: "Transparent Service",
      description: "Clear timelines, honest pricing and reliable delivery.",
    },
    {
      icon: Leaf,
      title: "Responsible Products",
      description: "Use of reputed brands and environmentally responsible solutions.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every vehicle undergoes final inspection before customer handover.",
    },
  ], []);

  useEffect(() => {
    setupGSAP();

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // Single ScrollTrigger for the entire section (not per card)
      const title = section.querySelector(".whyus-title");
      const cards = cardsRef.current;

      if (title) {
        gsap.fromTo(title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      // Single ScrollTrigger for ALL cards (much more efficient)
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 80%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-16 gap-4">
        <h2 className="whyus-title text-4xl lg:text-6xl font-bold mb-6">
          Why Choose <span className="text-[#D4D414]">GR CAR LAB</span>
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
              className="whyus-card group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-[#D4D414] transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="icon-container mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4D414] to-yellow-500 flex items-center justify-center transition-transform duration-300">
                <IconWrapper icon={IconComponent} className="w-8 h-8 text-black" />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
          className="inline-block bg-black border border-[#D4D414] text-white px-8 py-4 rounded-full text-lg hover:bg-[#D4D414] hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          Schedule Now
        </a>
      </div>
    </section>
  );
};

export default WhyUs;

