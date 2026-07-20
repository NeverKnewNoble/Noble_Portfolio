import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect, useRef } from "react";
import Kona from "../components/3D/Kona";
import CanvasLoader from "../components/3D/CanvasLoader";
import { OrbitControls } from "@react-three/drei";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getShowcaseModelConfig } from "../data/showcase";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Showcase3D() {
  const [isMobile, setIsMobile] = useState(false);
  // Defer mounting the 3D canvas (and its model download) until the section
  // is about to enter the viewport, so it never blocks initial page load.
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Lazy-mount the canvas when the showcase scrolls near the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || shouldLoad3D) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad3D(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' } // start loading a bit before it's visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad3D]);

  // GSAP animations for 3D showcase section. Scoped with gsap.context so
  // cleanup only kills this section's triggers, with a viewport-aware safety
  // net so the text/canvas can never stay stuck invisible.
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
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
            scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
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
            scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
          }
        );
      }
    }, sectionRef);

    const refreshId = setTimeout(() => ScrollTrigger.refresh(), 200);
    const safetyId = setTimeout(() => {
      const sec = sectionRef.current;
      if (!sec) return;
      const r = sec.getBoundingClientRect();
      const inView = r.top < window.innerHeight && r.bottom > 0;
      if (!inView) return;
      const layers = textRef.current?.querySelectorAll('.text-layer');
      gsap.to([canvasRef.current, ...(layers || [])].filter(Boolean), {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        overwrite: 'auto',
      });
    }, 1400);

    return () => {
      clearTimeout(refreshId);
      clearTimeout(safetyId);
      ctx.revert();
    };
  }, []);

  // 3D Model positioning/camera values (tuned per viewport)
  const { scale, position, rotation, cameraZ } = getShowcaseModelConfig(isMobile);

  return (
    <section ref={sectionRef} id="showcase" className=' w-full bg-paper flex items-center justify-center relative overflow-hidden border-t border-line'>
      {/* Signature hairline-grid backdrop */}
      <div className='spec-grid absolute inset-0 pointer-events-none' />

      {/* Subtle accent wash */}
      <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none' />

      <div className='relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-center'>

          {/* Premium Text Content */}
          <div ref={textRef} className='space-y-6 md:space-y-8 order-2 lg:order-1'>
            <div className='text-layer'>
              <p className='font-mono text-xs tracking-[0.2em] uppercase text-accent'>
                // 3D Showcase
              </p>
            </div>

            {/* Main Heading */}
            <div className='text-layer space-y-1'>
              <h2 className='font-display text-5xl sm:text-6xl md:text-7xl font-bold text-ink leading-[0.95] tracking-[-0.02em]'>
                <span className='block'>Innovation</span>
                <span className='block text-muted'>meets</span>
                <span className='block text-accent'>design.</span>
              </h2>
            </div>

            {/* Description */}
            <div className='text-layer space-y-4 pt-2'>
              <p className='text-lg md:text-xl text-ink/80 font-light leading-relaxed max-w-xl'>
                Real-time 3D, rendered right in the browser. Drag to explore the
                model — no plugins, no downloads.
              </p>
              <p className='text-base text-muted font-light leading-relaxed max-w-xl'>
                Built with Three.js and React Three Fiber, bringing interactive
                3D graphics into the web with a declarative React workflow.
              </p>
            </div>
          </div>

          {/* 3D Model Canvas - Clean and simple */}
          <div ref={canvasRef} className='order-1 lg:order-2 h-[500px] md:h-[650px] lg:h-[750px] relative'>
            {shouldLoad3D ? (
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
                    position={position}
                    rotation={rotation}
                  />
                  <ambientLight intensity={1.2} />
                  <directionalLight position={[10, 10, 10]} intensity={6} />
                  <directionalLight position={[-10, -10, -10]} intensity={2} />
                  <PerspectiveCamera makeDefault position={[0, 0, cameraZ]}/>
                </Suspense>
              </Canvas>
            ) : (
              <div className='w-full h-full flex items-center justify-center'>
                <div className='w-8 h-8 border-2 border-ink/15 border-t-accent rounded-full animate-spin' />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

