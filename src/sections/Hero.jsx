import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect } from "react";
import Kona from "../components/3D/Kona";
import CanvasLoader from "../components/3D/CanvasLoader";
import { OrbitControls } from "@react-three/drei";


export default function Hero() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  //? Default values for Kona position, rotation, and scale
  //? Mobile: scale 5.0, pos(1.3, 0.1, 0.1), rot(85.6, -0.7, -0.8), cameraZ 16.0
  //? Desktop: scale 4.6, pos(0.1, -8.1, 1.5), rot(3.4, -2.3, 0.0), cameraZ 28.3
  const scale = isMobile ? 5.0 : 4.6;
  const positionX = isMobile ? 1.3 : 0.1;
  const positionY = isMobile ? 0.1 : -8.1;
  const positionZ = isMobile ? 0.1 : 1.5;
  const rotationX = isMobile ? 85.6 : 3.4;
  const rotationY = isMobile ? -0.7 : -2.3;
  const rotationZ = isMobile ? -0.8 : 0.0;
  const cameraZ = isMobile ? 16.0 : 28.3;

  return (
    <section id="home" className='h-screen w-full bg-black flex items-center justify-center relative overflow-hidden'>
        {/* Premium Background Gradient Effects */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950 opacity-100' />
        <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl' />

        {/* Text Content - Behind the model (like on a wall) - Positioned at top */}
        <div className='absolute inset-0 flex flex-col items-center justify-start z-0 px-4 sm:px-6 md:px-10 lg:px-10 pt-15 mt-5  md:pt-26'>
            {/* Greeting with premium styling */}
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2 md:mb-3'>
              <p className='text-sm sm:text-base md:text-lg font-medium text-gray-300 tracking-wide'>
                Hi, I am Noble
              </p>
              <span className='text-lg'>👋</span>
            </div>
            {/* Description with premium typography */}
            <p className='text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl text-center opacity-90 mb-2 md:mb-3'>
              Building modern web applications, innovative projects & digital experiences
            </p>

            {/* Main Heading - Full width across page */}
            <h1 className='w-full font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-[-0.03em] text-center -mt-2 md:-mt-4'>
              <span className='block text-white'>
                Crafting Software
              </span>
              <span className='block bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] mt-1'>
                That Drives Impact
              </span>
            </h1>
        </div>

        {/* 3D Model - Right Side with premium effects */}
        <div className='hidden md:flex flex-1 min-h-0 w-full md:w-auto md:h-full relative overflow-hidden z-10'>
          {/* Glow effect around 3D model */}
          <div className='absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent pointer-events-none' />
          
          <Canvas 
            className='relative z-10'
            style={{ height: '100%', width: '100%' }}
          >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1.0} />
                <Kona 
                  scale={scale} 
                  position={[positionX, positionY, positionZ]} 
                  rotation={[
                    rotationX * Math.PI / 180,
                    rotationY * Math.PI / 180,
                    rotationZ * Math.PI / 180
                  ]}
                /> 
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={7} />
                  <PerspectiveCamera makeDefault position={[0, 0, cameraZ]}/>
            </Suspense>
          </Canvas>
        </div>
    </section>
  )
}
