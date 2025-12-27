import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setupGSAP } from "../utils/gsapSetup";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { ShoppingCart, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import carPerfumesAndAirFresheners from "../assets/images_products/car-perfumes-and-air-fresheners.jpg";
import matsAndAtmMats from "../assets/images_products/7d-mats-and-atm-mats.jpg";
import bootMats from "../assets/images_products/boot-mats.jpg";
import windshieldWipers from "../assets/images_products/windshield-wipers.jpg";
import fogLampsAndHeadlightLamps from "../assets/images_products/fog-lamps-and-headlight-lamps.jpg";
import rainGuardsAndDoorGuards from "../assets/images_products/rain-guards-and-door-guards.jpg";
import androidStereosAmplifiersAndWoofers from "../assets/images_products/android-stereos-amplifiers-and-woofers.jpg";
import speakersAndSoundSystems from "../assets/images_products/speakers-and-sound-systems.jpg";
import carCovers from "../assets/images_products/car-covers.jpg";
import towingCables from "../assets/images_products/towing-cables.jpg";
import ledDoorLightsAndInteriorLighting from "../assets/images_products/led-door-lights-and-interior-lighting.jpg";
import headrestAndBackrestCushions from "../assets/images_products/headrest-and-backrest-cushions.jpg";
import seatBeltPadsAndArmrests from "../assets/images_products/seat-belt-pads-and-armrests.jpg";
import dashboardCovers from "../assets/images_products/dashboard-covers.jpg";
import dashCameras from "../assets/images_products/dash-cameras.jpg";
import tyreInflators from "../assets/images_products/tyre-inflators.jpg";

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const productsRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);
  const hiddenCardsRef = useRef([]);
  const navigate = useNavigate();
  const productsData = [
    {
      id: 1,
      title: "Car Perfumes and Air Fresheners",
      short: "Long lasting scents and refillable options.",
      brands: ["All brands"],
      image: carPerfumesAndAirFresheners,
      description:
        "Long lasting scents, refillable bottles, available in multiple fragrances.",
      category: "Interior",
    },
    {
      id: 2,
      title: "7D Mats and ATM Mats",
      short: "Full coverage floor protection with premium finishes.",
      brands: ["All brands"],
      image: matsAndAtmMats,
      description:
        "Premium 7D and ATM mats tailored to vehicle models for full coverage protection.",
      category: "Interior",
    },
    {
      id: 3,
      title: "Boot Mats",
      short: "Tailored protection for the luggage area.",
      brands: ["Brand X"],
      image: bootMats,
      description:
        "Custom-fit boot mats to protect the luggage area from spills and wear.",
      category: "Interior",
    },
    {
      id: 4,
      title: "Windshield Wipers",
      short: "High performance blades for clear vision in all conditions.",
      brands: ["Bosch", "Valeo"],
      image: windshieldWipers,
      description:
        "Durable wiper blades offering clear vision during rain and harsh weather.",
      category: "Exterior",
    },
    {
      id: 5,
      title: "Fog Lamps and Headlight Lamps",
      short: "Improved visibility and stylish upgrades.",
      brands: ["Philips", "OSRAM"],
      image: fogLampsAndHeadlightLamps,
      description:
        "Wide selection of fog and headlight lamps for enhanced visibility and style.",
      category: "Lighting",
    },
    {
      id: 6,
      title: "Rain Guards and Door Guards",
      short: "Weather protection and door edge safety.",
      brands: ["Brand R"],
      image: rainGuardsAndDoorGuards,
      description:
        "Durable rain guards and door edge protectors to defend against weather and chips.",
      category: "Safety",
    },
    {
      id: 7,
      title: "Android Stereos, Amplifiers and Woofers",
      short: "Multimedia upgrades with Bluetooth and navigation.",
      brands: ["Pioneer", "Sony"],
      image: androidStereosAmplifiersAndWoofers,
      description:
        "High-end multimedia units with navigation, Bluetooth and performance audio components.",
      category: "Electronics",
    },
    {
      id: 8,
      title: "Speakers and Sound Systems",
      short: "Brand options for crisp audio and powerful bass.",
      brands: ["JBL", "Infinity"],
      image: speakersAndSoundSystems,
      description:
        "Speakers and full sound systems for improved in-car audio experience.",
      category: "Electronics",
    },
    {
      id: 9,
      title: "Car Covers",
      short: "Weatherproof protection for outdoor and indoor storage.",
      brands: ["Brand C"],
      image: carCovers,
      description:
        "Breathable, weatherproof car covers for long-term protection.",
      category: "Protection",
    },
    {
      id: 10,
      title: "Towing Cables",
      short: "Robust safety rated cables for emergencies.",
      brands: ["Brand T"],
      image: towingCables,
      description:
        "High-strength towing cables rated for safety and emergency use.",
      category: "Safety",
    },
    {
      id: 11,
      title: "LED Door Lights and Interior Lighting",
      short: "Decorative and functional illumination.",
      brands: ["Brand L"],
      image: ledDoorLightsAndInteriorLighting,
      description:
        "Stylish LED lights for doors and interiors to enhance look and visibility.",
      category: "Interior",
    },
    {
      id: 12,
      title: "Headrest and Backrest Cushions",
      short: "Comfort and ergonomic support for long drives.",
      brands: ["Brand H"],
      image: headrestAndBackrestCushions,
      description: "Comfort cushions with ergonomic support for long journeys.",
      category: "Comfort",
    },
    {
      id: 13,
      title: "Seat Belt Pads and Armrests",
      short: "Comfort accessories for driver and passengers.",
      brands: ["Brand S"],
      image: seatBeltPadsAndArmrests,
      description:
        "Soft pads and armrests to improve comfort and reduce irritation.",
      category: "Comfort",
    },
    {
      id: 14,
      title: "Dashboard Covers",
      short: "Protects instrument panel from UV damage and glare.",
      brands: ["Brand D"],
      image: dashboardCovers,
      description:
        "Custom-fit dashboard covers to reduce glare and protect from UV.",
      category: "Interior",
    },
    {
      id: 15,
      title: "Dash Cameras",
      short:
        "Front and dual channel options for security and incident recording.",
      brands: ["70mai", "BlackVue"],
      image: dashCameras,
      description:
        "Quality dashcams with single or dual channel recording and parking mode.",
      category: "Electronics",
    },
    {
      id: 16,
      title: "Tyre Inflators",
      short: "Portable inflators for roadside convenience.",
      brands: ["Brand I"],
      image: tyreInflators,
      description:
        "Portable and electric tyre inflators for emergency and maintenance use.",
      category: "Tools",
    },
  ];

  const visibleProducts = showAll ? productsData : productsData.slice(0, 7);

  useEffect(() => {
    setupGSAP();

    // Use a scoped GSAP context to avoid touching triggers elsewhere
    const cleanupListeners = [];
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(".products-title", {
        scrollTrigger: {
          trigger: ".products-title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0.9,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Animate initial visible cards
      cardsRef.current.slice(0, 7).forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            opacity: 0.9,
            y: 40,
            scale: 0.95,
            duration: 0.6,
            delay: index * 0.08,
            ease: "power2.out",
          });

          // Hover animation (add/remove listeners explicitly so we can clean up)
          const image = card.querySelector(".product-image");
          const cartIcon = card.querySelector(".cart-icon");

          const enterHandler = () => {
            gsap.to(image, { scale: 1.15, duration: 0.5, ease: "power2.out" });
            gsap.to(cartIcon, { y: -5, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
            gsap.to(card, { y: -8, boxShadow: "0 20px 40px rgba(212, 212, 20, 0.3)", duration: 0.3, ease: "power2.out" });
          };

          const leaveHandler = () => {
            gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
            gsap.to(cartIcon, { y: 0, opacity: 0.7, duration: 0.3, ease: "power2.in" });
            gsap.to(card, { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", duration: 0.3, ease: "power2.out" });
          };

          card.addEventListener("mouseenter", enterHandler);
          card.addEventListener("mouseleave", leaveHandler);

          cleanupListeners.push(() => {
            card.removeEventListener("mouseenter", enterHandler);
            card.removeEventListener("mouseleave", leaveHandler);
          });
        }
      });

      // Button hover animation
      if (buttonRef.current && !showAll) {
        const plusIcon = buttonRef.current.querySelector(".plus-icon");
        const enter = () => gsap.to(plusIcon, { rotation: 90, scale: 1.2, duration: 0.3, ease: "back.out(1.7)" });
        const leave = () => gsap.to(plusIcon, { rotation: 0, scale: 1, duration: 0.3, ease: "back.out(1.7)" });

        buttonRef.current.addEventListener("mouseenter", enter);
        buttonRef.current.addEventListener("mouseleave", leave);

        cleanupListeners.push(() => {
          buttonRef.current && buttonRef.current.removeEventListener("mouseenter", enter);
          buttonRef.current && buttonRef.current.removeEventListener("mouseleave", leave);
        });
      }
    }, productsRef);

    return () => {
      // Revert all GSAP animations created in this context
      ctx.revert();
      // Clean up native listeners we added
      cleanupListeners.forEach((fn) => fn());
    };
  }, [showAll]);

  const handleSeeMore = () => {
    if (!showAll && buttonRef.current) {
      // Animate the button first, then reveal items
      gsap.to(buttonRef.current, {
        scale: 0.98,
        opacity: 0,
        duration: 0.35,
        ease: "back.in(1.7)",
        onComplete: () => {
          // Show new items after button animation completes
          setShowAll(true);

          // Give DOM a tick and animate newly shown cards
          requestAnimationFrame(() => {
            // small delay to ensure DOM is updated
            setTimeout(() => {
              cardsRef.current.slice(7).forEach((card) => {
                if (card) {
                  gsap.from(card, {
                    opacity: 0,
                    y: 60,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.2)",
                  });

                  // Add hover handlers to these cards (cleaned up by the main effect when necessary)
                  const image = card.querySelector(".product-image");
                  const cartIcon = card.querySelector(".cart-icon");

                  const enter = () => {
                    gsap.to(image, { scale: 1.15, duration: 1 });
                    gsap.to(cartIcon, { y: -5, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
                    gsap.to(card, { y: -2, boxShadow: "0 20px 40px rgba(212, 212, 20, 0.3)", duration: 0.3, ease: "power2.out" });
                  };

                  const leave = () => {
                    gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
                    gsap.to(cartIcon, { y: 0, opacity: 0.7, duration: 0.3, ease: "power2.in" });
                    gsap.to(card, { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", duration: 0.3, ease: "power2.out" });
                  };

                  card.addEventListener("mouseenter", enter);
                  card.addEventListener("mouseleave", leave);
                }
              });
            }, 50);
          });
        },
      });
    }
  };

  return (
    <section
      id="products"
      className="products-section py-24 px-6 bg-[#080805]"
      ref={productsRef}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedOnScroll options={{ from: { y: 30, opacity: 0 }, duration: 0.9 }}>
        {/* Section Header */}
        <div className="text-center mb-16 products-title">
          <div className="text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-3 justify-center mb-6">
            <span className="w-10 h-px bg-[#D4D414]"></span>
            <span>ACCESSORIES</span>
            <span className="w-10 h-px bg-[#D4D414]"></span>
          </div>
          <h2 className="products-title-main text-4xl md:text-6xl font-bold mb-6">
            Premium Car Accessories
          </h2>
          <p className="products-description text-[#AAADB0] max-w-3xl mx-auto text-lg">
            Enhance your driving experience with our curated collection of
            quality accessories
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {visibleProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 hover:border-[#D4D414]/30 transition-all duration-300 cursor-pointer"
              onClick={() => {
                navigate("/products");
              }}
            >
              {/* Product Image */}
              <div className="product-card-image relative h-36 md:h-44 overflow-hidden bg-[#222222]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="product-category-badge absolute top-2 left-2 bg-[#D4D414]/90 backdrop-blur-sm text-black text-xs font-bold px-2 py-1 rounded-full">
                  {product.category}
                </div>

                {/* Cart Icon */}
                <div className="cart-icon-container absolute bottom-2 right-2 w-8 h-8 bg-[#D4D414] rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart className="cart-icon w-4 h-4 text-black" />
                </div>
              </div>

              {/* Product Info */}
              <div className="product-card-content p-3 md:p-4">
                <h3 className="product-card-title text-white  text-sm md:text-base mb-2 line-clamp-1 group-hover:text-[#D4D414] transition-colors">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              ref={buttonRef}
              onClick={handleSeeMore}
              className="see-more-button group relative bg-gradient-to-r from-[#D4D414] to-[#B8B812] text-black font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(212,212,20,0.6)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                <span>See More Products</span>
                <Plus className="see-more-icon plus-icon w-6 h-6" />
              </span>

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8B812] to-[#D4D414] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 -left-full group-hover:left-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
            </button>
          </div>
        )}

        {/* Book Now CTA Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <p className="text-[#AAADB0] text-sm md:text-base mb-4">
              Ready to enhance your vehicle with premium products?
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Professional Installation & Consultation
            </h3>
            <p className="text-[#AAADB0] max-w-2xl mx-auto mb-8">
              Our expert team can help you select, install, and maintain these
              premium products for your car. Schedule a consultation with our
              specialists today.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="group relative bg-black border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 font-bold px-10 py-4 rounded-full transition-all duration-300 flex items-center gap-3 hover-scale"
            >
              <span className="text-lg group-hover:text-black">Book Installation Service</span>
              <ArrowRight className="w-5 h-5 group-hover:text-black group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default Products;
