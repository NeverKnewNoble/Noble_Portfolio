import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { techStack } from '../data/skills'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)
  const techStackRef = useRef(null)

  // GSAP animation for tech stack. Scoped with gsap.context so cleanup only
  // affects this section (a global kill would break sibling sections), with a
  // viewport-aware safety net so content can never stay stuck invisible.
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (techStackRef.current) {
        const techCards = techStackRef.current.querySelectorAll('.skill-card')
        gsap.fromTo(
          techCards,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: 'back.out(1.2)',
            scrollTrigger: { trigger: techStackRef.current, start: 'top 90%', once: true },
          }
        )
      }
    }, sectionRef)

    const refreshId = setTimeout(() => ScrollTrigger.refresh(), 200)
    const safetyId = setTimeout(() => {
      const sec = sectionRef.current
      if (!sec) return
      const r = sec.getBoundingClientRect()
      const inView = r.top < window.innerHeight && r.bottom > 0
      if (!inView) return
      gsap.to(sec.querySelectorAll('.skill-card'), {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        overwrite: 'auto',
      })
    }, 1400)

    return () => {
      clearTimeout(refreshId)
      clearTimeout(safetyId)
      ctx.revert()
    }
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className='w-full bg-paper flex flex-col items-center justify-center relative px-5 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-line'
    >
      {/* Section Header */}
      <div className='w-full max-w-5xl mb-12 md:mb-16 text-center'>
        <p className='font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4'>
          // Technologies
        </p>
        <h2 className='font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink tracking-[-0.02em] leading-[1.02]'>
          The stack I build with.
        </h2>
      </div>

      {/* Unified Tech Stack Section */}
      <div className='w-full max-w-5xl'>
        <div ref={techStackRef} className='flex flex-wrap gap-2.5 md:gap-3 justify-center'>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className='skill-card bg-surface border border-line rounded-full pl-2 pr-4 py-1.5 md:py-2 hover:border-ink/25 hover:shadow-[0_12px_24px_-16px_rgba(23,22,20,0.4)] transition-all duration-300 group flex items-center gap-2.5 cursor-default'
            >
              {/* Icon container */}
              <div className='bg-paper border border-line rounded-full p-1.5 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center'>
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className='w-4 h-4 md:w-[18px] md:h-[18px]'
                  loading='lazy'
                />
              </div>

              <h4 className='text-ink font-medium text-sm md:text-base'>
                {tech.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

