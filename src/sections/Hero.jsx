import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { smoothScrollToId } from '../utils/scroll';

export default function Hero() {
  const mastheadRef = useRef(null);
  const descriptionRef = useRef(null);
  const headingRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const buttonRef = useRef(null);

  // GSAP entrance animations for hero text
  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.3 });

    // Animate masthead row
    if (mastheadRef.current) {
      timeline.fromTo(
        mastheadRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );
    }

    // Animate heading lines
    if (headingLine1Ref.current) {
      timeline.fromTo(
        headingLine1Ref.current,
        { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.out' },
        '-=0.3'
      );
    }

    if (headingLine2Ref.current) {
      timeline.fromTo(
        headingLine2Ref.current,
        { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.out' },
        '-=0.75'
      );
    }

    // Animate description
    if (descriptionRef.current) {
      timeline.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
    }

    // Animate CTAs
    if (buttonRef.current) {
      timeline.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }

    return () => {
      timeline.kill();
    };
  }, []);

  // Scroll handlers
  const handleHireMeClick = () => smoothScrollToId('contact');
  const handleViewWorkClick = () => smoothScrollToId('projects');

  return (
    <section
      id="home"
      className='relative min-h-screen w-full bg-paper flex flex-col justify-center overflow-hidden'
    >
      {/* Subtle hairline-grid backdrop */}
      <div className='spec-grid absolute inset-0 opacity-60 pointer-events-none' />
      {/* Soft ambient wash */}
      <div className='absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full bg-accent/5 blur-3xl pointer-events-none' />

      <div className='relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 pt-28 pb-16 md:py-0'>
        {/* Masthead */}
        <div
          ref={mastheadRef}
          className='flex items-baseline justify-between border-b border-ink/15 pb-4 mb-10 md:mb-16 will-change-transform'
        >
          <span className='font-mono text-sm font-medium uppercase tracking-[0.18em] text-ink'>
            Noble
          </span>
          <span className='font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted'>
            Full-Stack Developer
          </span>
        </div>

        {/* Main heading — the thesis */}
        <h1
          ref={headingRef}
          className='font-display font-medium text-ink text-[clamp(2.6rem,8.5vw,7.5rem)] leading-[1.0] tracking-[-0.02em] max-w-5xl'
        >
          <span ref={headingLine1Ref} className='block will-change-transform'>
            Crafting software
          </span>
          <span ref={headingLine2Ref} className='block will-change-transform'>
            that drives{' '}
            <span className='italic font-normal text-accent'>impact.</span>
          </span>
        </h1>

        {/* Lower row — description + CTAs */}
        <div className='mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8'>
          <p
            ref={descriptionRef}
            className='text-base sm:text-lg text-muted leading-relaxed max-w-xl will-change-transform'
          >
            I build modern web applications and interactive 3D experiences with
            React, Next.js, and Three.js — shipping real products that people
            actually use.
          </p>

          <div
            ref={buttonRef}
            className='flex items-center gap-6 shrink-0 will-change-transform'
          >
            <button
              onClick={handleHireMeClick}
              className='group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-ink text-paper font-medium text-base hover:bg-accent transition-colors duration-300'
            >
              Hire me
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
            </button>
            <button
              onClick={handleViewWorkClick}
              className='group inline-flex items-center gap-1.5 text-base font-medium text-ink/80 hover:text-accent transition-colors duration-200'
            >
              <span className='border-b border-ink/30 group-hover:border-accent transition-colors duration-200 pb-0.5'>
                View selected work
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
