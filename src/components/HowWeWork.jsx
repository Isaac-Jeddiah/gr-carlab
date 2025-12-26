import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import {
  ClipboardCheck,
  Sparkles,
  Droplets,
  Shield,
  Camera,
  ThumbsUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const canvasRef = useRef(null);
  const carModelRef = useRef(null);

  const workflowSteps = [
    {
      step: 1,
      title: "Initial Inspection",
      description:
        "Thorough assessment of your vehicle's condition, documenting existing issues and discussing your specific needs.",
      icon: ClipboardCheck,
    },
    {
      step: 2,
      title: "Pre-Wash & Decontamination",
      description:
        "Careful removal of surface dirt, road grime, and contaminants using pH-balanced solutions.",
      icon: Sparkles,
    },
    {
      step: 3,
      title: "Deep Cleaning",
      description:
        "Meticulous hand washing, wheel detailing, and interior deep cleaning with premium products.",
      icon: Droplets,
    },
    {
      step: 4,
      title: "Paint Correction",
      description:
        "Professional polishing to remove swirls, scratches, and imperfections, restoring paint clarity.",
      icon: Shield,
    },
    {
      step: 5,
      title: "Protection Application",
      description:
        "Application of ceramic coating or sealant to protect and enhance your vehicle's finish.",
      icon: Camera,
    },
    {
      step: 6,
      title: "Final Inspection",
      description:
        "Comprehensive quality check and walk-through to ensure every detail meets our standards.",
      icon: ThumbsUp,
    },
  ];
  const cardThemes = [
  "bg-[#0B0B0B]",
  "bg-[#111111]",
  "bg-[#161616]",
  "bg-[#1C1C1C]",
  "bg-gradient-to-br from-[#1C1C1C] to-[#D4D414]/10",
  "bg-gradient-to-br from-[#111111] to-[#D4D414]/20",
];

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.set(4, 1.5, 6);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xd4d414, 0.5);
    directionalLight2.position.set(-3, 2, -3);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xd4d414, 1, 10);
    pointLight.position.set(0, 2, 3);
    scene.add(pointLight);
    //grid plane
    const planeGeo = new THREE.PlaneGeometry(12, 12, 24, 24);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xd4d414,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      depthWrite: false,
    });

    const gridPlane = new THREE.Mesh(planeGeo, planeMat);
    gridPlane.rotation.x = -Math.PI / 2;
    gridPlane.position.y = -0.8;

    scene.add(gridPlane);

    // Load GLB model
    const gltfLoader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    // IMPORTANT: decoder path (CDN is easiest)
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

    gltfLoader.setDRACOLoader(dracoLoader);

    // UPDATE THIS PATH TO YOUR PORSCHE GT3 RS .glb FILE
    gltfLoader.load(
      "/models/porsche_gt3_rs.glb",
      (gltf) => {
        const car = gltf.scene;
        carModelRef.current = car;

        car.traverse((child) => {
          if (child.isMesh) {
            if (child.material) {
              child.material.metalness = 0.9;
              child.material.roughness = 0.3;
            }
          }
        });

        const box = new THREE.Box3().setFromObject(car);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 7 / maxDim;
        car.scale.setScalar(scale);

        car.position.sub(center.multiplyScalar(scale));
        car.position.y = -0.8;

        scene.add(car);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);

        // Fallback car
        const carGroup = new THREE.Group();

        const bodyGeometry = new THREE.BoxGeometry(1.8, 0.6, 3.5);
        const bodyMaterial = new THREE.MeshStandardMaterial({
          color: 0xff0000,
          metalness: 0.9,
          roughness: 0.2,
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.3;
        carGroup.add(body);

        const roofGeometry = new THREE.BoxGeometry(1.5, 0.5, 2);
        const roof = new THREE.Mesh(roofGeometry, bodyMaterial);
        roof.position.set(0, 0.85, -0.3);
        carGroup.add(roof);

        const wheelGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.3, 32);
        const wheelMaterial = new THREE.MeshStandardMaterial({
          color: 0x1a1a1a,
          metalness: 0.8,
          roughness: 0.4,
        });

        const wheelPositions = [
          [-0.9, 0, 1.2],
          [0.9, 0, 1.2],
          [-0.9, 0, -1.2],
          [0.9, 0, -1.2],
        ];

        wheelPositions.forEach((pos) => {
          const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(...pos);
          carGroup.add(wheel);
        });

        carGroup.position.y = -0.5;
        carModelRef.current = carGroup;
        scene.add(carGroup);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  // GSAP ScrollTrigger Animation - Based on your working code
  useEffect(() => {
    console.clear();

    const cards = cardsRef.current;
    const spacer = 20; // Space between stacked cards

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        start: "top 20%",
        end: "+=5000px",
        onUpdate: (self) => {
          // Rotate 3D car based on scroll progress
          if (carModelRef.current) {
            const progress = self.progress;
            carModelRef.current.rotation.y = progress * Math.PI * 2;
            carModelRef.current.position.y =
              -0.5 + Math.sin(progress * Math.PI) * 0.2;
          }
        },
      },
    });

    // Animate cards from bottom (using y instead of x)
    tl.fromTo(
  cards.slice(1),
  {
    y: (i) => window.innerHeight + i * 60,
    scale: 0.98,
    opacity: 1,
  },
  {
    y: (i) => -i * 80, // 🔑 NEGATIVE = ABOVE
    scale: 1,
    opacity: 1,
    stagger: 0.6,
    ease: "power2.out",
  }
);


    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Section Header */}
      <div className=" mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24">
        <div className="border-t border-white/10 pt-16 sm:pt-20 md:pt-24 mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            How We Work on Your Car
          </h3>
          <p className="text-center text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            A clear six-step process designed to ensure transparency, quality
            and consistent results.
          </p>
        </div>
      </div>

      {/* Cards Section with 3D Car */}
      <div ref={containerRef} className="relative w-screen h-[70vh]">
        <div className="relative w-full h-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            {/* Left Side - Stacked Cards */}
            <div className="relative w-full h-full">
              {workflowSteps.map(
                ({ step, title, description, icon: Icon }, index) => (
                 <div
  key={step}
  ref={(el) => (cardsRef.current[index] = el)}
  className="absolute inset-0 flex"
  style={{ zIndex: workflowSteps.length }}
>
  {/* Right margin reveal */}
  <div className="flex-1" />

  {/* Card */}
  <div
    className={`
      h-full w-[88%]
      ${cardThemes[index]}
      rounded-l-[2.5rem]
      shadow-2xl
      flex flex-col justify-center
      px-10 sm:px-14
    `}
  >
    {/* Step */}
    <span className="text-[#D4D414] text-sm font-semibold mb-4">
      STEP {step}
    </span>

    {/* Title */}
    <h4 className="text-3xl sm:text-4xl font-bold mb-6">
      {title}
    </h4>

    {/* Description */}
    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
      {description}
    </p>
  </div>
</div>

                )
              )}
            </div>

            {/* Right Side - 3D Car */}
            <div className="hidden lg:block relative h-full">
              <div className="absolute inset-0 bg-gradient-radial from-[#D4D414]/10 to-transparent rounded-full blur-3xl" />
              <canvas ref={canvasRef} className="w-full h-full" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-gray-500 text-sm">Scroll to rotate</p>
                <div className="w-1 h-8 bg-[#D4D414]/50 mx-auto mt-2 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
