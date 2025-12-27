import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect, useRef } from "react";
import Kona from "../components/3D/Kona";
import CanvasLoader from "../components/3D/CanvasLoader";
import { OrbitControls } from "@react-three/drei";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Showcase3D() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // GSAP animations for 3D showcase section
  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate text layers
    if (textRef.current) {
      const textLayers = textRef.current.querySelectorAll('.text-layer');
      gsap.fromTo(
        textLayers,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate canvas entrance
    if (canvasRef.current) {
      gsap.fromTo(
        canvasRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // 3D Model positioning values
  const scale = isMobile ? 3.8 : 3.8;
  const positionX = isMobile ? 0 : 0;
  const positionY = isMobile ? -2 : -6;
  const positionZ = isMobile ? 0 : 0;
  const rotationX = isMobile ? 0 : 0;
  const rotationY = isMobile ? 0 : 0;
  const rotationZ = isMobile ? 0 : 0;
  const cameraZ = isMobile ? 18 : 25;

  return (
    <section ref={sectionRef} id="showcase" className=' w-full bg-black flex items-center justify-center relative overflow-hidden'>
      {/* Premium Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black' />
      
      {/* Subtle accent elements */}
      <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl' />

      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
        {/* Section Header */}
        <div className='w-full'>
          <div className='flex justify-center'>
            <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
              3D Showcase
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-center'>
          
          {/* Premium Text Content */}
          <div ref={textRef} className='space-y-6 md:space-y-8 order-2 lg:order-1'>

            {/* Main Heading - Clean and luxurious */}
            <div className='text-layer space-y-2'>
              <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight'>
                <span className='block'>Innovation</span>
                <span className='block text-gray-300'>
                  Meets
                </span>
                <span className='block bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]'>
                  Design
                </span>
              </h2>
            </div>

            {/* Description - Elegant typography */}
            <div className='text-layer space-y-4 pt-4'>
              <p className='text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl'>
                Experience cutting-edge 3D web technology brought to life. This interactive showcase demonstrates the power of modern web development.
              </p>
              <p className='text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-xl'>
                Built with Three.js and React Three Fiber, showcasing seamless integration of 3D graphics into web experiences.
              </p>
            </div>
          </div>

          {/* 3D Model Canvas - Clean and simple */}
          <div ref={canvasRef} className='order-1 lg:order-2 h-[500px] md:h-[650px] lg:h-[750px] relative'>
            <Canvas 
              className='relative z-10'
              style={{ height: '100%', width: '100%' }}
              performance={{ min: 0.5 }}
              dpr={[1, 2]}
            >
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                  enableZoom={false} 
                  autoRotate={true} 
                  autoRotateSpeed={0.8}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <Kona 
                  scale={scale} 
                  position={[positionX, positionY, positionZ]} 
                  rotation={[
                    rotationX * Math.PI / 180,
                    rotationY * Math.PI / 180,
                    rotationZ * Math.PI / 180
                  ]}
                /> 
                <ambientLight intensity={1.2} />
                <directionalLight position={[10, 10, 10]} intensity={6} />
                <directionalLight position={[-10, -10, -10]} intensity={2} />
                <PerspectiveCamera makeDefault position={[0, 0, cameraZ]}/>
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

