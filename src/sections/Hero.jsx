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
  //? Desktop: scale 5.0, pos(0.0, -4.0, 0.0), rot(13.5, -26.0, 0.0), cameraZ 30.0
  const scale = isMobile ? 5.0 : 5.0;
  const positionX = isMobile ? 1.3 : 0.0;
  const positionY = isMobile ? 0.1 : -4.0;
  const positionZ = isMobile ? 0.1 : 0.0;
  const rotationX = isMobile ? 85.6 : 13.5;
  const rotationY = isMobile ? -0.7 : -26.0;
  const rotationZ = isMobile ? -0.8 : 0.0;
  const cameraZ = isMobile ? 16.0 : 30.0;

  return (
    <section id="home" className='h-screen w-full bg-black flex flex-col md:flex-row items-center justify-between relative px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-0'>
        {/* Text Content - Left Side */}
        <div className='mt-20 md:mt-0 shrink-0 text-white flex flex-col gap-4 md:gap-6 w-full md:w-auto justify-center items-center md:items-start text-center md:text-left max-w-2xl'>
            <p className='text-lg sm:text-xl md:text-2xl font-normal text-gray-300 tracking-wide'>Hi, I am Noble 👋</p>
            <h1 className='font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight'>
              Crafting Software That Drives Impact
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 font-light mt-2'>
              Building modern web applications, innovative projects & digital experiences
            </p>
        </div>

        {/* 3D Model - Right Side */}
        <div className='hidden md:flex  flex-1 min-h-0 w-full md:w-auto md:h-full relative overflow-hidden'>
          <Canvas 
            className=''
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
