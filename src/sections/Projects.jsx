import React, { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, X, Target, Lightbulb, TrendingUp, BookOpen, Clock, Code, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, projectCategories } from '../data/projects'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Stable display number for each project (its position in the full list)
const projectNumber = new Map(projects.map((p, i) => [p, i + 1]))

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const modalRef = useRef(null)
  const overlayRef = useRef(null)

  // Refs for GSAP animation
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  // Categories that actually have projects, in the defined order
  const visibleCategories = projectCategories.filter((cat) =>
    projects.some((p) => p.category === cat.name)
  )

  // Which category groups to render given the active filter
  const groupsToRender =
    activeCategory === 'All'
      ? visibleCategories
      : visibleCategories.filter((cat) => cat.name === activeCategory)

  // Open case study modal
  const openCaseStudy = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  // Close case study modal
  const closeCaseStudy = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  // GSAP animation for modal entrance
  useEffect(() => {
    if (isModalOpen && modalRef.current && overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      )
    }
  }, [isModalOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeCaseStudy()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  // Card entrance + subtle tilt-on-hover animations
  // Re-runs when the active category changes, since cards remount on filter.
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean)
    if (cards.length === 0) return

    // Entrance animation for cards
    gsap.set(cards, { opacity: 0, y: 40 })
    const entrance = gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        once: true,
      },
    })

    // The section is lazy-loaded, so ScrollTrigger positions can be measured
    // before layout settles and the entrance may never fire. Recalculate once
    // things settle, and keep a safety net that reveals the cards regardless
    // so they can never get stuck invisible.
    const refreshId = setTimeout(() => ScrollTrigger.refresh(), 200)
    const safetyId = setTimeout(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        overwrite: 'auto',
      })
    }, 1000)

    // Subtle 3D tilt on hover for each card
    const cleanups = cards.map((cardElement) => {
      const imageElement = cardElement.querySelector('.project-image-container')

      const handleMouseMove = (e) => {
        const rect = cardElement.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const rotateX = (y - rect.height / 2) / 40
        const rotateY = (rect.width / 2 - x) / 40

        gsap.to(cardElement, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.4,
          ease: 'power2.out',
        })
        if (imageElement) {
          gsap.to(imageElement, { scale: 1.04, duration: 0.4, ease: 'power2.out' })
        }
      }

      const handleMouseLeave = () => {
        gsap.to(cardElement, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' })
        if (imageElement) {
          gsap.to(imageElement, { scale: 1, duration: 0.5, ease: 'power2.out' })
        }
      }

      cardElement.addEventListener('mousemove', handleMouseMove)
      cardElement.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        cardElement.removeEventListener('mousemove', handleMouseMove)
        cardElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    })

    return () => {
      clearTimeout(refreshId)
      clearTimeout(safetyId)
      entrance.scrollTrigger?.kill()
      entrance.kill()
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [activeCategory])

  // Assign a stable cardRefs slot to each currently-visible project
  const refIndexOf = new Map()
  let running = 0
  groupsToRender.forEach((cat) => {
    projects
      .filter((p) => p.category === cat.name)
      .forEach((p) => refIndexOf.set(p, running++))
  })

  // Single project card (reused across every category group)
  const renderCard = (project) => {
    const refIndex = refIndexOf.get(project)
    const number = projectNumber.get(project)
    return (
      <article
        key={project.title}
        ref={(el) => (cardRefs.current[refIndex] = el)}
        className='project-card group bg-surface border border-line rounded-2xl overflow-hidden flex flex-col will-change-transform transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(23,22,20,0.25)]'
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Project Image (with fallback until a screenshot is added) */}
        <div className='relative h-44 bg-paper overflow-hidden border-b border-line'>
          <div className='project-image-container absolute inset-0 will-change-transform'>
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} — ${project.description}`}
                className='w-full h-full object-cover'
                loading='lazy'
                decoding='async'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-paper to-line/50'>
                <span className='font-display text-6xl font-bold text-ink/15 select-none'>
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>
          {/* Index marker */}
          <span className='absolute top-3 left-3 font-mono text-[11px] font-medium text-ink bg-surface/90 backdrop-blur-sm border border-line rounded-full px-2 py-0.5'>
            {String(number).padStart(2, '0')}
          </span>
          {/* Status pill */}
          <span
            className={`absolute top-3 right-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 backdrop-blur-sm border ${
              project.status === 'ongoing'
                ? 'bg-accent/10 border-accent/30 text-accent-deep'
                : 'bg-surface/90 border-line text-muted'
            }`}
          >
            {project.status === 'ongoing' ? (
              <>
                <Clock className='w-2.5 h-2.5' /> Building
              </>
            ) : (
              'Shipped'
            )}
          </span>
        </div>

        {/* Content */}
        <div className='p-5 flex flex-col flex-1'>
          <h3 className='font-display text-xl font-semibold text-ink mb-2'>
            {project.title}
          </h3>
          <p className='text-sm text-muted leading-relaxed mb-4 line-clamp-3'>
            {project.description}
          </p>

          {/* Tech stack */}
          <div className='flex flex-wrap gap-1.5 mb-5'>
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className='font-mono text-[10px] text-muted bg-paper border border-line rounded-full px-2 py-0.5'
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className='font-mono text-[10px] text-muted/70 px-1 py-0.5'>
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className='mt-auto flex flex-col gap-2'>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors duration-200'
              >
                <ExternalLink className='w-4 h-4' />
                Visit site
              </a>
            )}
            <div className='flex items-center gap-2'>
              <button
                onClick={() => openCaseStudy(project)}
                className={`group/cs inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-line text-ink text-sm font-medium hover:border-ink/40 transition-colors duration-200 ${
                  project.liveUrl ? 'flex-1' : 'w-full'
                }`}
              >
                <BookOpen className='w-4 h-4' />
                Case study
                <ArrowUpRight className='w-3.5 h-3.5 group-hover/cs:translate-x-0.5 group-hover/cs:-translate-y-0.5 transition-transform duration-200' />
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${project.title} source code`}
                  className='inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-full border border-line text-ink hover:bg-ink hover:text-paper transition-colors duration-200'
                >
                  <Github className='w-4 h-4' />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className='relative w-full bg-paper flex flex-col items-center px-5 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'
    >
      {/* Section Header */}
      <div className='w-full max-w-7xl mb-12 md:mb-16'>
        <p className='font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4'>
          // Selected work
        </p>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
          <h2 className='font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink tracking-[-0.02em] leading-[1.02] max-w-2xl'>
            Real products,
            <br />
            shipped &amp; in the wild.
          </h2>
          <p className='text-base md:text-lg text-muted font-light max-w-sm md:text-right'>
            A look at the full-stack applications I&apos;ve designed, built, and
            launched — with the outcomes they delivered.
          </p>
        </div>
      </div>

      {/* Category filter tabs */}
      <div className='w-full max-w-7xl mb-10 md:mb-12 flex flex-wrap gap-2'>
        {['All', ...visibleCategories.map((c) => c.name)].map((name) => {
          const active = activeCategory === name
          const count =
            name === 'All'
              ? projects.length
              : projects.filter((p) => p.category === name).length
          return (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`inline-flex items-center gap-1.5 font-mono text-xs tracking-wide rounded-full px-4 py-2 border transition-colors duration-200 ${
                active
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-surface text-muted border-line hover:border-ink/40 hover:text-ink'
              }`}
            >
              {name}
              <span className={active ? 'text-paper/60' : 'text-muted/60'}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grouped project sections */}
      <div className='w-full max-w-7xl flex flex-col gap-16 md:gap-20'>
        {groupsToRender.map((cat) => {
          const catProjects = projects.filter((p) => p.category === cat.name)
          return (
            <div key={cat.name}>
              {/* Sub-category header */}
              <div className='mb-6 md:mb-8 flex items-end justify-between gap-4 border-b border-line pb-4'>
                <div>
                  <h3 className='font-display text-2xl md:text-3xl font-semibold text-ink tracking-[-0.01em]'>
                    {cat.name}
                  </h3>
                  <p className='text-sm text-muted mt-1.5'>{cat.blurb}</p>
                </div>
                <span className='font-mono text-xs text-muted/70 shrink-0'>
                  {String(catProjects.length).padStart(2, '0')} projects
                </span>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6'>
                {catProjects.map((project) => renderCard(project))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Case Study Modal */}
      {isModalOpen && selectedProject && (
        <div
          ref={overlayRef}
          className='fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden'
          onClick={closeCaseStudy}
          onWheel={(e) => e.stopPropagation()}
        >
          <div
            ref={modalRef}
            className='bg-surface border border-line rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl'
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className='sticky top-0 bg-surface border-b border-line p-6 flex items-start justify-between z-10'>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-2'>
                  <h2 className='font-display text-3xl md:text-4xl font-bold text-ink'>
                    {selectedProject.title}
                  </h2>
                  {selectedProject.status === 'ongoing' && (
                    <span className='inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider rounded-full px-2.5 py-1 bg-accent/10 border border-accent/30 text-accent-deep'>
                      <Clock className='w-3 h-3' />
                      Building
                    </span>
                  )}
                </div>
                <p className='text-muted text-base md:text-lg'>
                  {selectedProject.description}
                </p>
              </div>
              <button
                onClick={closeCaseStudy}
                aria-label='Close case study'
                className='ml-4 p-2 rounded-lg text-muted hover:bg-paper hover:text-ink transition-colors duration-200'
              >
                <X className='w-6 h-6' />
              </button>
            </div>

            {/* Modal Content */}
            <div className='p-6 md:p-8 space-y-8 overflow-y-auto flex-1'>
              {/* The Challenge */}
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center'>
                    <Target className='w-5 h-5 text-accent' />
                  </div>
                  <h3 className='font-display text-2xl md:text-3xl font-semibold text-ink'>
                    The Challenge
                  </h3>
                </div>
                <p className='text-muted text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.challenge}
                </p>
              </div>

              {/* My Approach */}
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-ink/5 border border-line flex items-center justify-center'>
                    <Lightbulb className='w-5 h-5 text-ink' />
                  </div>
                  <h3 className='font-display text-2xl md:text-3xl font-semibold text-ink'>
                    My Approach
                  </h3>
                </div>
                <p className='text-muted text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.approach}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-ink/5 border border-line flex items-center justify-center'>
                    <Code className='w-5 h-5 text-ink' />
                  </div>
                  <h3 className='font-display text-2xl md:text-3xl font-semibold text-ink'>
                    Technologies Used
                  </h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {Object.entries(selectedProject.caseStudy.technologies).map(([category, techs]) => (
                    <div key={category} className='space-y-2'>
                      <h4 className='font-mono text-xs uppercase tracking-wider text-accent'>
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {techs.map((tech, idx) => (
                          <span
                            key={idx}
                            className='font-mono text-[11px] text-muted bg-paper border border-line rounded-full px-2.5 py-1'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Impact */}
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center'>
                    <TrendingUp className='w-5 h-5 text-accent' />
                  </div>
                  <h3 className='font-display text-2xl md:text-3xl font-semibold text-ink'>
                    Results &amp; Impact
                  </h3>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
                  {selectedProject.caseStudy.results.map((result, idx) => (
                    <div key={idx} className='bg-paper border border-line rounded-xl p-4'>
                      <div className='font-display text-3xl font-bold text-ink mb-1'>
                        {result.metric}
                      </div>
                      <div className='text-sm text-muted'>{result.description}</div>
                    </div>
                  ))}
                </div>
                <p className='text-muted text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.impact}
                </p>
              </div>

              {/* Lessons Learned */}
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-ink/5 border border-line flex items-center justify-center'>
                    <BookOpen className='w-5 h-5 text-ink' />
                  </div>
                  <h3 className='font-display text-2xl md:text-3xl font-semibold text-ink'>
                    Lessons Learned
                  </h3>
                </div>
                <p className='text-muted text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.lessons}
                </p>
              </div>

              {/* Action Buttons */}
              {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                <div className='flex flex-wrap gap-4 pt-4 border-t border-line'>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper font-medium hover:bg-accent transition-colors duration-200'
                    >
                      <ExternalLink className='w-5 h-5' />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-ink font-medium hover:border-ink/40 transition-colors duration-200'
                    >
                      <Github className='w-5 h-5' />
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
