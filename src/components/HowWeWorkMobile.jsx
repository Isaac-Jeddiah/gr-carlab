import React, { useEffect, useRef, useState } from "react";
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

const CarWorkflowMobile = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const carModelRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  const workflowSteps = [
    {
      step: 1,
      title: "Initial Inspection",
      description:
        "Thorough assessment of your vehicle's condition, documenting existing issues and discussing your specific needs.",
      icon: ClipboardCheck,
      cameraPosition: { x: -0.034, y:4, z: -0.230 },
      lookAt: { x: -0.034, y:0, z: -0.230 }
    },
    {
      step: 2,
      title: "Pre-Wash & Decontamination",
      description:
        "Careful removal of surface dirt, road grime, and contaminants using pH-balanced solutions.",
      icon: Sparkles,
      cameraPosition: { x: 4.45, y: 1, z: -0.078 },
      lookAt: { x: 0.45, y: 0, z: -1 },
    },
    {
      step: 3,
      title: "Deep Cleaning",
      description:
        "Meticulous hand washing, wheel detailing, and interior deep cleaning with premium products.",
      icon: Droplets,cameraPosition: { x: -4.45, y: 1, z: -0.078 },
      lookAt: { x: 0, y: 0.5, z: 1 }, 
     
    },
    {
      step: 4,
      title: "Paint Correction",
      description:
        "Professional polishing to remove swirls, scratches, and imperfections, restoring paint clarity.",
      icon: Shield,
      cameraPosition: { x: 0.015, y:0.5, z: -0.842 },
      lookAt: { x: 0.015, y: -2, z: 0.22 },
    },
    {
      step: 5,
      title: "Protection Application",
      description:
        "Application of ceramic coating or sealant to protect and enhance your vehicle's finish.",
      icon: Camera,
      cameraPosition: { x: 0.020, y: 1.456, z: -4.048 },
      lookAt: { x: 0, y: 0.3, z: 0 },
    },
    {
      step: 6,
      title: "Final Inspection",
      description:
        "Comprehensive quality check and walk-through to ensure every detail meets our standards.",
      icon: ThumbsUp,
      cameraPosition: { x: -0.056, y: 4, z: 4.116 },
      lookAt: { x: 0, y: 0, z: 0 },
    },
  ];

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 2, 5);
    camera.lookAt(0, 0.5, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 8, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xd4d414, 0.6);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xd4d414, 1.2, 15);
    pointLight.position.set(0, 3, 4);
    scene.add(pointLight);

    // Grid plane
    const planeGeo = new THREE.PlaneGeometry(15, 15, 30, 30);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xd4d414,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });

    const gridPlane = new THREE.Mesh(planeGeo, planeMat);
    gridPlane.rotation.x = -Math.PI / 2;
    gridPlane.position.y = -0.8;
    scene.add(gridPlane);

    // Load GLB model
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(
      "/models/porsche_gt3_rs.glb",
      (gltf) => {
        const car = gltf.scene;
        carModelRef.current = car;

        car.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.metalness = 0.9;
            child.material.roughness = 0.3;
          }
        });

        const box = new THREE.Box3().setFromObject(car);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 4.5 / maxDim;
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

  // GSAP ScrollTrigger for camera positions
  useEffect(() => {
    if (!cameraRef.current || !containerRef.current) return;

    const camera = cameraRef.current;
    const sections = workflowSteps.length;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${sections * 100}%`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const stepIndex = Math.min(
          Math.floor(progress * sections),
          sections - 1
        );
        
        setCurrentStep(stepIndex);

        // Calculate interpolation between current and next step
        const localProgress = (progress * sections) % 1;
        const currentStepData = workflowSteps[stepIndex];
        const nextStepData = workflowSteps[Math.min(stepIndex + 1, sections - 1)];

        // Interpolate camera position
        camera.position.x = THREE.MathUtils.lerp(
          currentStepData.cameraPosition.x,
          nextStepData.cameraPosition.x,
          localProgress
        );
        camera.position.y = THREE.MathUtils.lerp(
          currentStepData.cameraPosition.y,
          nextStepData.cameraPosition.y,
          localProgress
        );
        camera.position.z = THREE.MathUtils.lerp(
          currentStepData.cameraPosition.z,
          nextStepData.cameraPosition.z,
          localProgress
        );

        // Interpolate look-at target
        const lookAtTarget = new THREE.Vector3(
          THREE.MathUtils.lerp(
            currentStepData.lookAt.x,
            nextStepData.lookAt.x,
            localProgress
          ),
          THREE.MathUtils.lerp(
            currentStepData.lookAt.y,
            nextStepData.lookAt.y,
            localProgress
          ),
          THREE.MathUtils.lerp(
            currentStepData.lookAt.z,
            nextStepData.lookAt.z,
            localProgress
          )
        );
        camera.lookAt(lookAtTarget);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20">
        <div className="border-t pt-12 sm:pt-16 md:pt-20 mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            How We Work on Your Car
          </h3>
          <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto px-4">
            A clear six-step process designed to ensure transparency, quality
            and consistent results.
          </p>
        </div>
      </div>

      {/* Main Scroll Section */}
      <div ref={containerRef} className="relative w-full h-screen">
        {/* 3D Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">

            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;

              return (
                <div
                  key={step.step}
                  className={`transition-all duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  } ${currentStep === index ? "block" : "hidden"}`}
                >
                  <div className=" backdrop-blur-10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl max-w-2xl mx-auto md:mx-0">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#D4D414]/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4D414]" />
                    </div>

                    {/* Step Number */}
                    <span className="text-[#D4D414] text-xs sm:text-sm font-bold mb-2 sm:mb-3 block uppercase tracking-wider">
                      Step {step.step} of {workflowSteps.length}
                    </span>

                    {/* Title */}
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex gap-2 mt-6 sm:mt-8">
                      {workflowSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            i === currentStep
                              ? "bg-[#D4D414] flex-1"
                              : i < currentStep
                              ? "bg-[#D4D414]/50 w-8 sm:w-12"
                              : "bg-white/20 w-8 sm:w-12"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <p className="text-gray-500 text-xs sm:text-sm">Scroll to explore</p>
          <div className="w-1 h-10 sm:h-12 bg-[#D4D414]/30 rounded-full overflow-hidden">
            <div className="w-full h-1/3 bg-[#D4D414] rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-screen" />
    </div>
  );
};

export default CarWorkflowMobile;