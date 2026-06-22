import React, { useEffect, useRef } from 'react'
import { Code, Award, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bioData, allSkills } from '../data/about'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Split skills by category for grouped display
const technicalSkills = allSkills.filter((s) => s.category === 'technical')
const softSkills = allSkills.filter((s) => s.category === 'soft')

export default function About() {
  // Refs for animations
  const sectionRef = useRef(null)
  const bioRef = useRef(null)
  const avatarRef = useRef(null)
  const achievementsRef = useRef(null)
  const skillsRef = useRef(null)

  // GSAP animations for About section
  useEffect(() => {
    if (!sectionRef.current) return

    // Animate bio section
    if (bioRef.current) {
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate avatar
    if (avatarRef.current) {
      gsap.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: avatarRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate achievements
    if (achievementsRef.current) {
      const achievementItems = achievementsRef.current.querySelectorAll('.achievement-item')
      gsap.fromTo(
        achievementItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate all skills
    if (skillsRef.current) {
      const skillCards = skillsRef.current.querySelectorAll('.skill-card')
      gsap.fromTo(
        skillCards,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Reusable skill card
  const SkillCard = ({ skill }) => {
    const IconComponent = skill.icon
    return (
      <div className='skill-card group bg-surface border border-line rounded-xl p-5 hover:border-ink/25 hover:shadow-[0_20px_40px_-28px_rgba(23,22,20,0.3)] transition-all duration-300'>
        <div className='w-10 h-10 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent transition-colors duration-300'>
          <IconComponent className='w-5 h-5 text-accent group-hover:text-paper transition-colors duration-300' />
        </div>
        <h4 className='font-display text-base md:text-lg font-semibold text-ink mb-1.5'>
          {skill.title}
        </h4>
        <p className='text-sm text-muted leading-relaxed'>{skill.description}</p>
      </div>
    )
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className='w-full bg-paper flex flex-col items-center relative px-5 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32 border-t border-line'
    >
      {/* Section Header */}
      <div className='w-full max-w-6xl mb-12 md:mb-16'>
        <p className='font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4'>
          // About
        </p>
        <h2 className='font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink tracking-[-0.02em] leading-[1.02] max-w-3xl'>
          The developer behind the work.
        </h2>
      </div>

      {/* Bio + Identity block */}
      <div className='w-full max-w-6xl mb-20 md:mb-28'>
        <div className='grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-8 md:gap-12 items-start'>
          {/* Identity title-block */}
          <div ref={avatarRef} className='bg-surface border border-line rounded-2xl p-6 md:p-7'>
            <div className='w-20 h-20 rounded-xl bg-ink flex items-center justify-center mb-5'>
              <span className='font-display text-3xl font-bold text-paper'>N</span>
            </div>
            <h3 className='font-display text-2xl font-bold text-ink'>Noble</h3>
            <p className='font-mono text-xs uppercase tracking-wider text-accent mt-1 mb-5'>
              Full-Stack Developer
            </p>
            <dl className='space-y-3 font-mono text-xs border-t border-line pt-5'>
              <div className='flex justify-between gap-4'>
                <dt className='text-muted'>EXPERIENCE</dt>
                <dd className='text-ink text-right'>{bioData.yearsExperience} years</dd>
              </div>
              <div className='flex justify-between gap-4'>
                <dt className='text-muted'>FOCUS</dt>
                <dd className='text-ink text-right'>Web · 3D</dd>
              </div>
              <div className='flex justify-between gap-4'>
                <dt className='text-muted'>AVAILABILITY</dt>
                <dd className='text-accent text-right'>Open</dd>
              </div>
            </dl>
          </div>

          {/* Bio + achievements */}
          <div ref={bioRef} className='space-y-8'>
            <div className='space-y-4'>
              <p className='text-lg md:text-2xl text-ink leading-relaxed font-light'>
                {bioData.bio}
              </p>
              <p className='text-base md:text-lg text-muted leading-relaxed'>
                {bioData.focus}
              </p>
            </div>

            {/* Key achievements */}
            <div ref={achievementsRef} className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2'>
              <div className='achievement-item'>
                <TrendingUp className='w-5 h-5 text-accent mb-3' />
                <p className='font-display font-semibold text-ink mb-1'>
                  {bioData.yearsExperience} Years Experience
                </p>
                <p className='text-sm text-muted'>
                  Full-stack across modern web technologies
                </p>
              </div>
              <div className='achievement-item'>
                <Award className='w-5 h-5 text-accent mb-3' />
                <p className='font-display font-semibold text-ink mb-1'>
                  Real-World Impact
                </p>
                <p className='text-sm text-muted'>{bioData.keyAchievement}</p>
              </div>
              <div className='achievement-item'>
                <Code className='w-5 h-5 text-accent mb-3' />
                <p className='font-display font-semibold text-ink mb-1'>My Journey</p>
                <p className='text-sm text-muted'>{bioData.journey}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Expertise */}
      <div ref={skillsRef} className='w-full max-w-6xl'>
        <div className='mb-10 md:mb-12'>
          <p className='font-mono text-xs tracking-[0.2em] uppercase text-accent mb-3'>
            // Skills &amp; Expertise
          </p>
          <h3 className='font-display text-3xl sm:text-4xl font-bold text-ink tracking-[-0.02em]'>
            What I bring to a team.
          </h3>
        </div>

        {/* Technical */}
        <div className='mb-12'>
          <div className='flex items-center gap-3 mb-5'>
            <span className='font-mono text-sm font-medium text-ink'>Technical</span>
            <span className='h-px flex-1 bg-line' />
            <span className='font-mono text-xs text-muted'>
              {String(technicalSkills.length).padStart(2, '0')}
            </span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Soft */}
        <div>
          <div className='flex items-center gap-3 mb-5'>
            <span className='font-mono text-sm font-medium text-ink'>
              Collaboration
            </span>
            <span className='h-px flex-1 bg-line' />
            <span className='font-mono text-xs text-muted'>
              {String(softSkills.length).padStart(2, '0')}
            </span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
