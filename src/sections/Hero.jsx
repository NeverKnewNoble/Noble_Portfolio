import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';


export default function Hero() {
  const greetingRef = useRef(null);
  const descriptionRef = useRef(null);
  const headingRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const buttonRef = useRef(null);

  // GSAP entrance animations for hero text
  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.3 });

    // Animate greeting
    if (greetingRef.current) {
      timeline.fromTo(
        greetingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }

    // Animate description
    if (descriptionRef.current) {
      timeline.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 0.9, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );
    }

    // Animate heading lines
    if (headingLine1Ref.current) {
      timeline.fromTo(
        headingLine1Ref.current,
        { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.out' },
        '-=0.3'
      );
    }

    if (headingLine2Ref.current) {
      timeline.fromTo(
        headingLine2Ref.current,
        { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.out' },
        '-=0.7'
      );
    }

    // Animate button
    if (buttonRef.current) {
      timeline.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.2)' },
        '-=0.5'
      );
    }

    return () => {
      timeline.kill();
    };
  }, []);

  // Handle button click to scroll to contact section
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className='h-screen w-full bg-black flex items-center justify-center relative overflow-hidden'>
        {/* Premium Background Gradient Effects */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950 opacity-100' />
        <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl' />
        
        {/* Spotlight Effect - Shines on the text */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div 
            className='w-full max-w-5xl h-[80vh] bg-gradient-radial from-white/20 via-white/10 to-transparent opacity-60 blur-2xl'
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, transparent 70%)',
            }}
          />
        </div>

        {/* Text Content - Centered */}
        <div className='absolute inset-0 flex flex-col items-center justify-center z-0 px-4 sm:px-6 md:px-12 lg:px-20'>
            {/* Greeting with premium styling */}
            <div ref={greetingRef} className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2 md:mb-3 will-change-transform'>
              <p className='text-sm sm:text-base md:text-lg font-medium text-gray-300 tracking-wide'>
                Hi, I am Noble
              </p>
              <span className='text-lg'>👋</span>
            </div>
            {/* Description with premium typography */}
            <p ref={descriptionRef} className='text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl text-center opacity-90 mb-2 md:mb-3 will-change-transform'>
              Full-stack developer specializing in React, Next.js, and Three.js - Building modern web applications, innovative projects & digital experiences
            </p>

            {/* Main Heading - Full width across page */}
            <h1 ref={headingRef} className='w-full font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-[-0.03em] text-center -mt-2 md:-mt-4 will-change-transform'>
              <span ref={headingLine1Ref} className='block text-white'>
                Crafting Software
              </span>
              <span ref={headingLine2Ref} className='block bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] mt-1'>
                That Drives Impact
              </span>
            </h1>

            {/* Hire Me Button */}
            <div ref={buttonRef} className='flex justify-center mt-8 md:mt-12 will-change-transform'>
              <button
                onClick={handleHireMeClick}
                className='group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg md:text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Hire me for your next project
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </button>
        </div>

        </div>
    </section>
  )
}
