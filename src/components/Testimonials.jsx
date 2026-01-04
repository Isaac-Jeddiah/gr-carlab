import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Quote, Star, Heart, Award, Sparkles, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import rajeshKumar from '../assets/testimonial-rajesh-kumar.jpg';
import priyaSharma from '../assets/testimonial-priya-sharma.jpg';
import arjunMehta from '../assets/testimonial-arjun-mehta.jpg';
import snehaReddy from '../assets/testimonial-sneha-reddy.jpg';
import vikramSingh from '../assets/testimonial-vikram-singh.jpg';
import ananyaIyer from '../assets/testimonial-ananya-iyer.jpg';
import karthikNair from '../assets/testimonial-karthik-nair.jpg';
import deepikaPatel from '../assets/testimonial-deepika-patel.jpg';
import rahulKapoor from '../assets/testimonial-rahul-kapoor.jpg';
import meeraKrishnan from '../assets/testimonial-meera-krishnan.jpg';
import siddharthJoshi from '../assets/testimonial-siddharth-joshi.jpg';
import kavyaMenon from '../assets/testimonial-kavya-menon.jpg';
import adityaGupta from '../assets/testimonial-aditya-gupta.jpg';
import ishitaBose from '../assets/testimonial-ishita-bose.jpg';

import AnimatedOnScroll from './AnimatedOnScroll';

// Car logo mapping function
const getCarLogo = (role) => {
  const logoMap = {
    'BMW Owner': '/car_logos/bmw.svg',
    'Mercedes Owner': '/car_logos/bmw.svg', // Using BMW as fallback for Mercedes
    'Audi Owner': '/car_logos/audi.svg',
    'Porsche Owner': '/car_logos/porsche.svg',
    'Range Rover Owner': '/car_logos/volvo.svg', // Using Volvo as fallback for Range Rover
    'Tesla Owner': '/car_logos/tesla.svg',
    'Jaguar Owner': '/car_logos/bentley.svg', // Using Bentley as fallback for Jaguar
    'Lexus Owner': '/car_logos/volvo.svg', // Using Volvo as fallback for Lexus
    'Volvo Owner': '/car_logos/volvo.svg',
    'Mini Cooper Owner': '/car_logos/mini.svg',
    'Maserati Owner': '/car_logos/maserati.svg',
    'Bentley Owner': '/car_logos/bentley.svg',
    'Ferrari Owner': '/car_logos/ferrari.svg',
    'Lamborghini Owner': '/car_logos/lamborghini.svg',
    'Renault Owner': '/car_logos/renault.svg',
  };
  
  return logoMap[role] || '/car_logos/bmw.svg'; // Default fallback
};

const Testimonials = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "BMW Owner",
      image: rajeshKumar,
      text: "Absolutely phenomenal service! My car looks better than showroom condition. The ceramic coating is outstanding.",
      rating: 5,
      icon: Star,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "BMW Owner",
      image: priyaSharma,
      text: "The attention to detail is remarkable. Interior detailing brought my car's leather seats back to life. Highly recommend!",
      rating: 5,
      icon: Heart,
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      role: "Audi Owner",
      image: arjunMehta,
      text: "Professional team with exceptional workmanship. The paint correction removed all swirl marks. Worth every penny!",
      rating: 5,
      icon: Award,
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Porsche Owner",
      image: snehaReddy,
      text: "The PPF installation was flawless. Protected my investment perfectly. These guys are true professionals!",
      rating: 5,
      icon: Sparkles,
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Volvo Owner",
      image: vikramSingh,
      text: "Best car detailing experience ever! Engine detailing was thorough and my SUV runs smoother. 5 stars!",
      rating: 5,
      icon: Quote,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 6,
      name: "Ananya Iyer",
      role: "Tesla Owner",
      image: ananyaIyer,
      text: "Eco-friendly products and amazing results! The ceramic coating makes washing so easy. Truly impressed!",
      rating: 5,
      icon: Star,
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 7,
      name: "Karthik Nair",
      role: "Bentley Owner",
      image: karthikNair,
      text: "Impeccable service from start to finish. Headlight restoration brought them back to crystal clear. Fantastic!",
      rating: 5,
      icon: Heart,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 8,
      name: "Deepika Patel",
      role: "Volvo Owner",
      image: deepikaPatel,
      text: "Outstanding craftsmanship! The leather conditioning made my seats feel brand new. Will definitely return!",
      rating: 5,
      icon: Award,
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 9,
      name: "Rahul Kapoor",
      role: "Volvo Owner",
      image: rahulKapoor,
      text: "Premium service at reasonable prices. Underbody coating gives me peace of mind. Highly professional team!",
      rating: 5,
      icon: Sparkles,
      color: "from-fuchsia-500/20 to-pink-500/20",
      borderColor: "border-fuchsia-500/30"
    },
    {
      id: 10,
      name: "Meera Krishnan",
      role: "Mini Cooper Owner",
      image: meeraKrishnan,
      text: "Transformed my car completely! The exterior detailing and wheel care are exceptional. Love the results!",
      rating: 5,
      icon: Quote,
      color: "from-lime-500/20 to-green-500/20",
      borderColor: "border-lime-500/30"
    },
    {
      id: 11,
      name: "Sid Joshi",
      role: "Maserati Owner",
      image: siddharthJoshi,
      text: "Unparalleled attention to detail. The paint protection is top-notch. My car has never looked this good!",
      rating: 5,
      icon: Star,
      color: "from-sky-500/20 to-blue-500/20",
      borderColor: "border-sky-500/30"
    },
    {
      id: 12,
      name: "Kavya Menon",
      role: "Bentley Owner",
      image: kavyaMenon,
      text: "Luxury service for luxury cars! Odor elimination worked wonders. My car smells and looks amazing now!",
      rating: 5,
      icon: Heart,
      color: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 13,
      name: "Aditya Gupta",
      role: "Ferrari Owner",
      image: adityaGupta,
      text: "World-class detailing! The scratch removal was perfect. These experts know how to handle supercars!",
      rating: 5,
      icon: Award,
      color: "from-rose-500/20 to-red-500/20",
      borderColor: "border-rose-500/30"
    },
    {
      id: 14,
      name: "Ishita Bose",
      role: "Lamborghini Owner",
      image: ishitaBose,
      text: "Absolutely brilliant! GTECHNIQ ceramic coating exceeded expectations. Shine is incredible after 6 months!",
      rating: 5,
      icon: Sparkles,
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30"
    },
     {
      id: 15,
      name: "Rohan Desai",
      role: "Renault Owner",
      image: rahulKapoor,
      text: "Exceptional detailing service! The team at GR CAR LAB transformed my car inside and out. Highly recommended!",
      rating: 5,
      icon: Sparkles,
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30"
    },
  ];

   const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const nameRef = useRef(null);
  const designationRef = useRef(null);
  const quoteRef = useRef(null);
  const canvasRef = useRef(null);

  // WebGL Shader Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vertexSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position*0.9 + 0.5;
        gl_Position = vec4(position,0,1);
      }
    `;

    const fragmentSource = `
      precision mediump float;
      uniform float iTime;
      uniform vec2 iResolution;
      varying vec2 vUv;

      float random(vec2 uv) {
        return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 uv) {
        vec2 i = floor(uv);
        vec2 f = fract(uv);
        float a = random(i);
        float b = random(i + vec2(1., 0.));
        float c = random(i + vec2(0., 1.));
        float d = random(i + vec2(1., 1.));
        vec2 u = f*f*(3.0-2.0*f);
        float v1 = mix(a, b, u.x);
        float v2 = mix(c, d, u.x);
        return mix(v1, v2, u.y);
      }

      vec3 palette(float t) {
        vec3 a = vec3(0.1, 0.1, 0.0);
        vec3 b = vec3(0.5, 0.5, 0.0);
        vec3 c = vec3(0.5, 0.5, 0.0);
        vec3 d = vec3(0.8, 0.6, 0.0);
        return a + b*cos(6.28318*(c*t + d));
      }

      #define OCTAVES 6
      float fbm(vec2 uv) {
        float lacunarity = 3.0;
        float gain = 0.5;
        float amplitude = 0.5;
        float frequency = 1.0;
        float result = 0.0;
        for(int i = 0; i < OCTAVES; i++) {
          result += amplitude*noise(frequency*uv);
          frequency *= lacunarity;
          amplitude *= gain;
        }
        return result;
      }

      void main() {
        vec2 fragCoord = vUv * iResolution;
        vec2 uv = (fragCoord - iResolution*0.5) / iResolution.y * 10.0;
        float uvt = sin(length(uv) - iTime);
        vec2 uv2 = uv * fbm(uv) * uvt;
        vec3 col = palette(fbm(uv2)) * 0.3;
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const createProgram = (vsrc, fsrc) => {
      const vs = createShader(gl.VERTEX_SHADER, vsrc);
      const fs = createShader(gl.FRAGMENT_SHADER, fsrc);
      const prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      return prog;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', resize);
    resize();

    const prog = createProgram(vertexSource, fragmentSource);
    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1,-1, 1,-1, -1,1,
      -1,1, 1,-1, 1,1,
    ]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, 'position');
    const iTimeLoc = gl.getUniformLocation(prog, 'iTime');
    const iResLoc = gl.getUniformLocation(prog, 'iResolution');

    let animationId;
    const render = (now) => {
      const t = now * 0.001;
      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1f(iTimeLoc, t);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const calculateGap = (width) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;

    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
  };

  const updateTestimonial = (direction) => {
    const newIndex = (activeIndex + direction + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);

    const containerWidth = imageContainerRef.current?.offsetWidth || 0;
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;

    testimonials.forEach((_, index) => {
      const img = imageContainerRef.current?.querySelector(`[data-index="${index}"]`);
      if (!img) return;

      const offset = (index - newIndex + testimonials.length) % testimonials.length;
      const zIndex = testimonials.length - Math.abs(offset);
      const opacity = 1;
      const scale = index === newIndex ? 1 : 0.85;

      let translateX, translateY, rotateY;
      if (offset === 0) {
        translateX = '0%';
        translateY = '0%';
        rotateY = 0;
      } else if (offset === 1 || offset === -2) {
        translateX = '20%';
        translateY = `-${maxStickUp / img.offsetHeight * 100}%`;
        rotateY = -15;
      } else {
        translateX = '-20%';
        translateY = `-${maxStickUp / img.offsetHeight * 100}%`;
        rotateY = 15;
      }

      gsap.to(img, {
        zIndex,
        opacity,
        scale,
        x: translateX,
        y: translateY,
        rotateY,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    gsap.to([nameRef.current, designationRef.current], {
      opacity: 1,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.to([nameRef.current, designationRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    
  };

  useEffect(() => {
    updateTestimonial(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTestimonial(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => updateTestimonial(1);
  const handlePrev = () => updateTestimonial(-1);

  return (
    <section style={{ fontFamily: "Figtree, sans-serif" }} className="testimonials-section pt-2 sm:pt-4 md:pt-8 lg:pt-8 px-6 bg-gradient-to-b from-black to-[#080805] relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <AnimatedOnScroll options={{ from: { y: 30, opacity: 0 }, duration: 0.9 }}>
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-4 lg:mb-12">
          <div className="text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-3 justify-center mb-6">
            <span className="w-10 h-px bg-[#D4D414]"></span>
            <span>TESTIMONIALS</span>
            <span className="w-10 h-px bg-[#D4D414]"></span>
          </div>
          <h2 className="testimonials-title-main text-4xl md:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="testimonials-description text-[#AAADB0] max-w-2xl mx-auto text-lg">
            Real experiences from our valued customers
          </p>
        </div>
        </AnimatedOnScroll>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-16">
        <div className="bg-black backdrop-blur-xl rounded-3xl p-6 md:p-2 lg:p-2 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_100px_rgba(234,179,8,0.2)] transition-all duration-500">
          
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Container */}
            <div 
              ref={imageContainerRef}
              className="relative w-full h-24 md:h-24 lg:h-24"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  data-index={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-24 h-24 md:w-56 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-3 border-[#D4D414] bg-gray-900">
                    <img loading="lazy" 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#D4D414] shadow-[inset_0_0_25px_rgba(234,179,8,0.1),0_0_20px_rgba(234,179,8,0.2)]">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-6">
                <div>
                <h3 ref={nameRef} className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                  {testimonials[activeIndex].name}
                </h3>
                <div ref={designationRef} className="flex items-center gap-3">
                  <p className="text-sm md:text-base text-[#D4D414]">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
                </div>
                  <div className="flex items-center justify-center ">
                    <img loading="lazy"  
                      src={getCarLogo(testimonials[activeIndex].role)}
                      alt={`${testimonials[activeIndex].role} logo`}
                      className="w-24 h-24 object-contain bg-[#D4D414] rounded-2xl p-2 border-2 border-[#D4D414] shadow-2xl shadow-yellow-500/20"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
              </div>
              
              <p 
                ref={quoteRef}
                className="text-base md:text-lg text-gray-200 leading-relaxed mb-6"
              >
                {testimonials[activeIndex].text.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block mr-1">
                    {word}
                  </span>
                ))}
              </p>

              <div className="grid grid-rows-2 flex items-center justify-center">
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <div className="flex gap-3 items-center justify-center">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-yellow-500/10 border-2 border-yellow-500/50 flex items-center justify-center hover:bg-yellow-500/20 hover:scale-110 hover:shadow-[0_8px_24px_rgba(234,179,8,0.6)] transition-all duration-300 group"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#D4D414] group-hover:text-white transition-colors group-hover:-rotate-12 transition-transform" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-yellow-500/10 border-2 border-yellow-500/50 flex items-center justify-center hover:bg-yellow-500/20 hover:scale-110 hover:shadow-[0_8px_24px_rgba(234,179,8,0.6)] transition-all duration-300 group"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#D4D414] group-hover:text-white transition-colors group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   

       
      </div>

       </section>
  );
};

export default Testimonials;