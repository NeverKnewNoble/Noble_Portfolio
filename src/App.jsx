import React, { useEffect, useState, useRef, Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
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
  <div className='min-h-screen w-full bg-paper flex items-center justify-center'>
    <div className='w-8 h-8 border-2 border-ink/15 border-t-accent rounded-full animate-spin' />
  </div>
);

// Isolates a subtree so a runtime error (e.g. a WebGL/model failure) shows a
// fallback instead of unmounting the whole page.
class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.error('Section failed to render:', error);
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

// Only mounts its children once they scroll near the viewport. Used to keep
// the heavy Three.js chunk from downloading until the user approaches it.
const DeferredMount = ({ children, minHeight = '100vh' }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [show]);

  return (
    <div ref={ref} style={{ minHeight: show ? undefined : minHeight }}>
      {show ? children : null}
    </div>
  );
};

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

    // Sections are lazy-loaded and fonts/images settle after first paint, so
    // ScrollTrigger positions measured at creation can be wrong — leaving
    // entrance animations for in-view sections stuck hidden. Refresh a few
    // times as things settle, and on window load.
    const refreshTimers = [150, 500, 1200, 2500].map((t) =>
      setTimeout(() => ScrollTrigger.refresh(), t)
    );
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    // Cleanup on unmount
    return () => {
      refreshTimers.forEach(clearTimeout);
      window.removeEventListener('load', onLoad);
      lenis.destroy();
      // Clean up any remaining ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  return (
    <div className='bg-paper'>
      <Navbar />
      <Hero />
      {/* Each below-the-fold section streams in on its own boundary so the
          heavy 3D chunk never delays the lighter sections (Projects, About…). */}
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <SectionErrorBoundary fallback={null}>
        <DeferredMount>
          <Suspense fallback={<SectionLoader />}>
            <Showcase3D />
          </Suspense>
        </DeferredMount>
      </SectionErrorBoundary>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Footer />
      <Analytics />
    </div>
  )
}