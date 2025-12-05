import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const productsRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);
  const hiddenCardsRef = useRef([]);

  const productsData = [
    {
      id: 1,
      name: "Car Perfumes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4gmlE8rcZECCPLTLu97x6zhoGd7kS6F_cQ&s",
      price: "₹299 - ₹899",
      category: "Interior"
    },
    {
      id: 2,
      name: "Air Fresheners",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZHFWOcAj9YDhgFqLVu-0nRUp2Becqpm05A&s",
      price: "₹199 - ₹599",
      category: "Interior"
    },
    {
      id: 3,
      name: "Towing Cables",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
      price: "₹799 - ₹1,999",
      category: "Safety"
    },
    {
      id: 4,
      name: "7D Mats",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop",
      price: "₹2,499 - ₹4,999",
      category: "Interior"
    },
    {
      id: 5,
      name: "Car Boot Mats",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=300&fit=crop",
      price: "₹999 - ₹2,499",
      category: "Interior"
    },
    {
      id: 6,
      name: "Windshield Wipers",
      image: "data:image/jpeg;base64,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",
      price: "₹399 - ₹1,299",
      category: "Exterior"
    },
    {
      id: 7,
      name: "Fog Lamps",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      price: "₹1,499 - ₹3,999",
      category: "Lighting"
    },
    // Hidden initially
    {
      id: 8,
      name: "Headlight Lamps",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop",
      price: "₹2,999 - ₹8,999",
      category: "Lighting"
    },
    {
      id: 9,
      name: "Rain Guards",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=300&fit=crop",
      price: "₹799 - ₹1,999",
      category: "Exterior"
    },
    {
      id: 10,
      name: "Android Stereos",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      price: "₹8,999 - ₹24,999",
      category: "Electronics"
    },
    {
      id: 11,
      name: "Woofers & Amplifiers",
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=300&fit=crop",
      price: "₹4,999 - ₹19,999",
      category: "Electronics"
    },
    {
      id: 12,
      name: "Car Covers",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      price: "₹999 - ₹3,999",
      category: "Protection"
    },
    {
      id: 13,
      name: "Car Speakers",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop",
      price: "₹2,499 - ₹9,999",
      category: "Electronics"
    },
    {
      id: 14,
      name: "Door Guards",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      price: "₹399 - ₹1,299",
      category: "Protection"
    },
    {
      id: 15,
      name: "LED Door Lights",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      price: "₹599 - ₹1,999",
      category: "Lighting"
    },
    {
      id: 16,
      name: "Headrest & Backrest",
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
      price: "₹799 - ₹2,499",
      category: "Comfort"
    },
    {
      id: 17,
      name: "Seat Belt Pads",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
      price: "₹299 - ₹899",
      category: "Comfort"
    },
    {
      id: 18,
      name: "Dashboard Covers",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=300&fit=crop",
      price: "₹699 - ₹1,999",
      category: "Interior"
    },
    {
      id: 19,
      name: "Dash Cameras",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop",
      price: "₹3,999 - ₹14,999",
      category: "Electronics"
    },
    {
      id: 20,
      name: "Tyre Inflators",
      image: "https://images.unsplash.com/photo-1591378608446-0b2bc7e41c57?w=400&h=300&fit=crop",
      price: "₹1,299 - ₹3,999",
      category: "Tools"
    },
    {
      id: 21,
      name: "Arm Rests",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop",
      price: "₹999 - ₹2,999",
      category: "Comfort"
    }
  ];

  const visibleProducts = showAll ? productsData : productsData.slice(0, 7);

  useEffect(() => {
    // Animate section title
    gsap.from('.products-title', {
      scrollTrigger: {
        trigger: '.products-title',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0.9,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate initial visible cards
    cardsRef.current.slice(0, 7).forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0.9,
          y: 40,
          scale: 0.95,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'power2.out'
        });

        // Hover animation
        const image = card.querySelector('.product-image');
        const cartIcon = card.querySelector('.cart-icon');

        card.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.15,
            duration: 0.5,
            ease: 'power2.out'
          });

          gsap.to(cartIcon, {
            y: -5,
            opacity: 1,
            duration: 0.3,
            ease: 'back.out(1.7)'
          });

          gsap.to(card, {
            y: -8,
            boxShadow: '0 20px 40px rgba(212, 212, 20, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
          });

          gsap.to(cartIcon, {
            y: 0,
            opacity: 0.7,
            duration: 0.3,
            ease: 'power2.in'
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

    // Button hover animation
    if (buttonRef.current && !showAll) {
      const plusIcon = buttonRef.current.querySelector('.plus-icon');
      
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(plusIcon, {
          rotation: 90,
          scale: 1.2,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      });

      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(plusIcon, {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showAll]);

  const handleSeeMore = () => {
    if (!showAll) {
      setShowAll(true);
      
      // Animate button disappearing
      gsap.to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.in(1.7)',
        onComplete: () => {
          // Animate new cards appearing
          setTimeout(() => {
            cardsRef.current.slice(7).forEach((card, index) => {
              if (card) {
                gsap.from(card, {
                  opacity: 1,
                  y: 60,
                  scale: 1,
                  duration: 0.6,
                  ease: 'back.out(1.2)'
                });

                // Add hover animations to new cards
                const image = card.querySelector('.product-image');
                const cartIcon = card.querySelector('.cart-icon');

                card.addEventListener('mouseenter', () => {
                  gsap.to(image, {
                    scale: 1.15,
                    duration: 1,
                    
                  });

                  gsap.to(cartIcon, {
                    y: -5,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                  });

                  gsap.to(card, {
                    y: -2,
                    boxShadow: '0 20px 40px rgba(212, 212, 20, 0.3)',
                    duration: 0.3,
                    ease: 'power2.out'
                  });
                });

                card.addEventListener('mouseleave', () => {
                  gsap.to(image, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                  });

                  gsap.to(cartIcon, {
                    y: 0,
                    opacity: 0.7,
                    duration: 0.3,
                    ease: 'power2.in'
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
          }, 100);
        }
      });
    }
  };

  return (
    <section id="products" className="products-section py-24 px-6 bg-[#080805]" ref={productsRef}>
      <div className="max-w-7xl mx-auto">
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
            Enhance your driving experience with our curated collection of quality accessories
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {visibleProducts.map((product, index) => (
            <div
              key={product.id}
              ref={el => cardsRef.current[index] = el}
              className="group bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 hover:border-[#D4D414]/30 transition-all duration-300 cursor-pointer"
            >
              {/* Product Image */}
              <div className="product-card-image relative h-36 md:h-44 overflow-hidden bg-[#222222]">
                <img
                  src={product.image}
                  alt={product.name}
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
                <h3 className="product-card-title text-white font-semibold text-sm md:text-base mb-2 line-clamp-1 group-hover:text-[#D4D414] transition-colors">
                  {product.name}
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

        
        
      </div>
    </section>
  );
};

export default Products;