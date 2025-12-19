import React, { useEffect, useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import images
import autoformImage from '../assets/images/autoform.png'
import linkrexImage from '../assets/images/linkrex.png'
import ticketImage from '../assets/images/ticket.png'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  // Projects data
  const projects = [
    {
      title: 'AutoformX',
      description: 'A lightweight Chrome extension that autofills forms with one click.',
      tech: ['Next.js', 'Typescript', 'Tailwind CSS', 'WXT', 'MongoDB', 'Paystack'],
      image: autoformImage,
      liveUrl: 'https://autoformx-onboarding.vercel.app/',
      // githubUrl: '#'
    },
    {
      title: 'TicketEase',
      description: 'TicketEase is a ticket management system that tracks and resolve support issues.',
      tech: ['Next.js', 'Tailwind CSS', 'Typescript', 'MongoDB'],
      image: ticketImage,
      liveUrl: 'https://linkerex.vercel.app/',
      githubUrl: 'https://github.com/NeverKnewNoble/TicketEase'
    },
    {
      title: 'Linkerex',
      description: 'A Jobsearch system for students trying to get Internships, oart-time jobs and full-time jobs',
      tech: ['Next.js', 'Tailwind CSS', 'Javascript', 'MongoDB'],
      image: linkrexImage,
      liveUrl: 'https://linkerex.vercel.app/',
      // githubUrl: '#'
    }
  ]

  // Refs for GSAP animation
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  // Horizontal scroll animation on mount - only activate if 4+ projects
  useEffect(() => {
    // Only enable horizontal scroll if there are 4 or more projects
    if (projects.length < 4) return;

    if (!sectionRef.current || !containerRef.current || !cardsContainerRef.current) return;

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      const cardsContainer = cardsContainerRef.current;
      const projectCards = gsap.utils.toArray('.project-card');

      if (projectCards.length === 0) return;

      // Calculate total horizontal distance to scroll through all cards
      const totalWidth = cardsContainer.scrollWidth - container.offsetWidth;
      
      // Only proceed if there's actually content to scroll
      if (totalWidth <= 0) return;
      
      // Calculate scroll distance: use viewport height multiplied by number of cards
      // This ensures each card gets adequate scroll time before moving to next section
      const viewportHeight = window.innerHeight;
      const scrollMultiplier = projectCards.length * 2; // 2 viewport heights per card

      // Animate the cards container horizontally
      gsap.to(cardsContainer, {
        x: -totalWidth,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: section,
          start: "center center",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (projectCards.length - 1),
            duration: { min: 0.2, max: 0.1 },
            delay: 0.0
          },
          // End after scrolling enough to cover all cards
          end: () => `+=${viewportHeight * scrollMultiplier}`
        }
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length]);

  return (
    <section id="projects" ref={sectionRef} className='min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20'>
      {/* Section Header */}
      <div className='w-full max-w-7xl mb-10 md:mb-15'>
        <div className='flex justify-center mb-4'>
          <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
            Portfolio
          </button>
        </div>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight'>
          Featured Projects
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto font-light'>
          Explore my latest work - innovative solutions that combine creativity with technical excellence.
        </p>
      </div>

      {/* Projects Container */}
      <div ref={containerRef} className={`p-10 mb-20 min-h-[600px] w-full max-w-7xl ${projects.length >= 4 ? 'overflow-hidden' : 'overflow-visible'}`}>
        <div ref={cardsContainerRef} className={`flex gap-8 md:gap-10 pb-4 ${projects.length >= 4 ? '' : 'justify-center flex-wrap'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className='project-card bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors duration-300 group shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px]'
            >
            {/* Project Image */}
            <div className='w-full h-64 bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden'>
              <img 
                src={project.image} 
                alt={project.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300' />
            </div>

            {/* Project Content */}
            <div className='p-6 md:p-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                {project.title}
              </h3>
              <p className='text-gray-400 text-sm md:text-base mb-6 leading-relaxed'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1 rounded-full bg-black border border-gray-800 text-gray-300 text-xs md:text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className='flex gap-4'>
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors duration-200'
                >
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </a>
                {/* <a
                  href={project.githubUrl}
                  className='flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800 text-white font-medium text-sm hover:border-gray-700 hover:bg-gray-900 transition-colors duration-200'
                >
                  <Github className='w-4 h-4' />
                  Code
                </a> */}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

