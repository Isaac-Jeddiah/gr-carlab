import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./Nav";
import Footer from "./Footer";
import { contactConfig, getGoogleMapsUrl } from "../config/contactConfig";
import aboutHeroImg from "../assets/about-hero.jpg";
import aboutMissionImg from "../assets/about-mission.jpg";
import aboutStatsImg from "../assets/about-stats.jpg";
import aboutShowroomImg from "../assets/about-showroom.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const statsRef = useRef(null);
  const showroomRef = useRef(null);
  const statCards = useRef([]);

  useEffect(() => {
    // Hero Section Animation - animate to normal state
    gsap.fromTo(
      heroRef.current.querySelectorAll(".hero-content"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" }
    );

    // Mission Section Animation with ScrollTrigger
    gsap.fromTo(
      missionRef.current.querySelector(".mission-image"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      missionRef.current.querySelector(".mission-content"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Stats Animation with ScrollTrigger and Number Counter
    statCards.current.forEach((card, index) => {
      if (card) {
        // Card animation
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play reset play reset",
            },
          }
        );

        // Animate numbers - resets every time user scrolls to it
        const numberElement = card.querySelector(".stat-number");
        if (numberElement) {
          const text =
            numberElement.getAttribute("data-value") ||
            numberElement.textContent;
          numberElement.setAttribute("data-value", text);

          const hasK = text.includes("K");
          const hasPercent = text.includes("%");
          const hasPlus = text.includes("+");
          const hasDot = text.includes(".");

          let numericValue = parseFloat(text.replace(/[^0-9.]/g, ""));

          if (hasK) {
            numericValue = numericValue * 1000;
          }

          ScrollTrigger.create({
            trigger: card,
            start: "top 90%",
            onEnter: () =>
              animateNumber(
                numberElement,
                numericValue,
                hasK,
                hasPercent,
                hasPlus,
                hasDot,
                index
              ),
            onEnterBack: () =>
              animateNumber(
                numberElement,
                numericValue,
                hasK,
                hasPercent,
                hasPlus,
                hasDot,
                index
              ),
          });
        }
      }
    });

    function animateNumber(
      element,
      targetValue,
      hasK,
      hasPercent,
      hasPlus,
      hasDot,
      index
    ) {
      gsap.fromTo(
        element,
        { textContent: 0 },
        {
          textContent: targetValue,
          duration: 2,
          delay: index * 0.1,
          ease: "power1.out",
          snap: { textContent: hasK ? 100 : 1 },
          onUpdate: function () {
            let current = parseFloat(this.targets()[0].textContent);

            if (hasK) {
              current = (current / 1000).toFixed(1);
              element.textContent = current + "K" + (hasPlus ? "+" : "");
            } else if (hasDot) {
              element.textContent = current.toFixed(1) + (hasPlus ? "+" : "");
            } else {
              current = Math.ceil(current);
              if (hasPercent) {
                element.textContent = current + "%";
              } else {
                element.textContent = current + (hasPlus ? "+" : "");
              }
            }
          },
        }
      );
    }

    // Showroom Section Animation with ScrollTrigger
    gsap.fromTo(
      showroomRef.current.querySelector(".showroom-content"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: showroomRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      showroomRef.current.querySelector(".showroom-image"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: showroomRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center"
      >
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${aboutHeroImg})`,
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent">
            {" "}
            <NavBar />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="hero-content flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wider">
                ABOUT US
              </span>
            </div>

            <h1 className="hero-content text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Automotive Care,
              <br />
              <span className="text-yellow-400">
                Built on Precision and Trust
              </span>
            </h1>

            <p className="hero-content text-gray-300 text-lg mb-8 max-w-xl">
              GR CAR LAB is a professional automotive care studio dedicated to
              restoring, protecting and enhancing vehicles through reliable
              processes and skilled workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="mission-image relative rounded-3xl overflow-hidden">
              <div
                className="w-full h-[400px] lg:h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${aboutMissionImg})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="mission-content">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wider">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Dedicated to Quality, Transparency and Care
              </h2>

              <p className="text-gray-400 text-base lg:text-lg mb-8 leading-relaxed">
                GR CAR LAB combines advanced techniques, bio-friendly products
                and experienced technicians to deliver high-quality automotive
                care. Our mission is to provide transparent, reliable services
                that improve vehicle aesthetics, longevity and customer
                confidence. Every car is treated with the same care and
                attention we would give our own.
              </p>

              <button className="flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-black border-2 border-yellow-400 rounded-full text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wider">
                OUR NUMBERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
              Key Statistics That Define Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div
              ref={(el) => (statCards.current[0] = el)}
              className="p-6 lg:p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="stat-number text-4xl lg:text-5xl font-bold mb-4">
                2.5K+
              </h3>
              <p className="text-gray-400 text-base lg:text-lg">
                Total Services
              </p>
              <div className="mt-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Stat Card 2 */}
            <div
              ref={(el) => (statCards.current[1] = el)}
              className="p-6 lg:p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="stat-number text-4xl lg:text-5xl font-bold mb-4 text-yellow-400">
                5.0
              </h3>
              <p className="text-gray-400 text-base lg:text-lg">
                Average Rating
              </p>
              <div className="mt-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Stat Card 3 - Image */}
            <div
              ref={(el) => (statCards.current[2] = el)}
              className="relative rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1 lg:row-span-2"
            >
              <div
                className="w-full h-full bg-cover bg-center min-h-[250px] lg:min-h-[300px]"
                style={{
                  backgroundImage: `url(${aboutStatsImg})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Stat Card 4 */}
            <div
              ref={(el) => (statCards.current[3] = el)}
              className="p-6 lg:p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="stat-number text-4xl lg:text-5xl font-bold mb-4">
                15+
              </h3>
              <p className="text-gray-400 text-base lg:text-lg">
                Expert Technicians
              </p>
              <div className="mt-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Stat Card 5 */}
            <div
              ref={(el) => (statCards.current[4] = el)}
              className="p-6 lg:p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="stat-number text-4xl lg:text-5xl font-bold mb-4">
                99%
              </h3>
              <p className="text-gray-400 text-base lg:text-lg">
                Customer Satisfaction
              </p>
              <div className="mt-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Stat Card 6 */}
            <div
              ref={(el) => (statCards.current[5] = el)}
              className="p-6 lg:p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="stat-number text-4xl lg:text-5xl font-bold mb-4">
                50+
              </h3>
              <p className="text-gray-400 text-base lg:text-lg">
                Daily Services
              </p>
              <div className="mt-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section ref={showroomRef} className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="showroom-content order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wider">
                  OUR FACILITY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Discover GR CAR LAB Automotive Care Studio
              </h2>

              <p className="text-gray-300 text-base lg:text-lg mb-6">
                Our facility is equipped with professional tools and a
                controlled environment designed to deliver consistent,
                high-quality automotive care.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-4 h-[300px] lg:h-[400px]">
                <iframe
                  src={getGoogleMapsUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <div className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-base lg:text-lg">
                    {contactConfig.address}
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-transparent border-2 border-yellow-400 rounded-full text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="showroom-image relative rounded-3xl overflow-hidden order-1 lg:order-2 h-[400px] lg:h-[600px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${aboutShowroomImg})`,
                }}
              ></div>
              <div className="absolute top-8 right-8 pointer-events-none">
                <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
              </div>
              <div className="absolute bottom-8 right-8 pointer-events-none">
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
