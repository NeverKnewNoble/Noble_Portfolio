import React, { useEffect, Suspense, lazy } from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy load sections below the fold for better initial load performance
const Showcase3D = lazy(() => import('./sections/Showcase3D'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Loading fallback component
const SectionLoader = () => (
  <div className='min-h-screen w-full bg-black flex items-center justify-center'>
    <div className='w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin' />
  </div>
);

export default function App() {
  useEffect(() => {
    // Optimize Lenis smooth scroll with performance settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Integrate Lenis with ScrollTrigger for smooth animations
    lenis.on('scroll', ScrollTrigger.update);

    // Use requestAnimationFrame for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      // Clean up any remaining ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      {/* Lazy load sections below the fold */}
      <Suspense fallback={<SectionLoader />}>
        <Projects />
        <About />
        <Skills />
        <Showcase3D />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  )
}