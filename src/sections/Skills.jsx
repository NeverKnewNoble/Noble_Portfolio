import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)
  const techStackRef = useRef(null)

  // GSAP animations for tech stack
  useEffect(() => {
    if (!sectionRef.current) return

    // Animate all tech stack items
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
          scrollTrigger: {
            trigger: techStackRef.current,
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
  // Helper function to get colored logo URL from Iconify CDN (colored icons)
  const getIconifyUrl = (name) => {
    return `https://api.iconify.design/${name}.svg?color=%23ffffff`
  }
  
  // Helper function to get colored logo URL from devicons CDN
  const getDeviconUrl = (name) => {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`
  }

  // Languages data with logo URLs and descriptions
  const languages = [
    {
      name: 'TypeScript',
      logo: getDeviconUrl('typescript'),
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      proficiency: 'Proficient',
      description: 'Strongly typed JavaScript for building robust applications'
    },
    {
      name: 'JavaScript',
      logo: getDeviconUrl('javascript'),
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      proficiency: 'Proficient',
      description: 'Core language for web development and interactive experiences'
    },
    {
      name: 'Python',
      logo: getDeviconUrl('python'),
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      proficiency: 'Little Versed',
      description: 'Exploring backend development and automation scripts'
    },
    {
      name: 'SQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: 'text-blue-300',
      bgColor: 'bg-blue-300/10',
      borderColor: 'border-blue-300/30',
      proficiency: 'Proficient',
      description: 'Structured query language for managing and querying relational databases'
    },
    {
      name: 'Git',
      logo: getDeviconUrl('git'),
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
      proficiency: 'Proficient',
      description: 'Version control and collaborative development workflows'
    },
    {
      name: 'HTML',
      logo: getDeviconUrl('html5'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      proficiency: 'Proficient',
      description: 'Markup language for structuring web content and building semantic layouts'
    },
    {
      name: 'CSS',
      logo: getDeviconUrl('css3'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      proficiency: 'Proficient',
      description: 'Styling language for designing beautiful and responsive user interfaces'
    }
  ]

  // Frameworks and Tools data with logo URLs and descriptions
  const frameworks = [
    {
      name: 'Next.js',
      logo: getIconifyUrl('skill-icons:nextjs-light'),
      color: 'text-white',
      bgColor: 'bg-gray-700/20',
      borderColor: 'border-gray-600/30',
      description: 'Full-stack React framework for production-ready applications'
    },
    {
      name: 'Vue.js',
      logo: getDeviconUrl('vuejs'),
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      description: 'Progressive JavaScript framework for building user interfaces'
    },
    {
      name: 'Tailwind CSS',
      logo: getDeviconUrl('tailwindcss'),
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      name: 'Vite',
      logo: getIconifyUrl('skill-icons:vite-light'),
      color: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/30',
      description: 'Next-generation frontend build tool with instant HMR'
    },
    {
      name: 'Express.js',
      logo: getDeviconUrl('express'),
      color: 'text-gray-300',
      bgColor: 'bg-gray-700/20',
      borderColor: 'border-gray-600/30',
      description: 'Fast, unopinionated web framework for Node.js backends'
    }
  ]

  // Libraries data with logo URLs and descriptions
  const libraries = [
    {
      name: 'React',
      logo: getDeviconUrl('react'),
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      description: 'JavaScript library for building dynamic, component-based user interfaces'
    },
    {
      name: 'Three.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      description: 'JavaScript library for creating immersive 3D web experiences and visualizations'
    },
    {
      name: 'React Three Fiber',
      logo: getIconifyUrl('skill-icons:react-dark'),
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      description: 'React renderer for Three.js that brings declarative syntax to 3D graphics'
    },
    {
      name: 'React Three Drei',
      logo: getIconifyUrl('skill-icons:react-dark'),
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      description: 'Useful helpers and abstractions for React Three Fiber to simplify 3D development'
    },
    {
      name: 'GSAP',
      logo: getIconifyUrl('mdi:animation-play'),
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      description: 'Professional-grade animation library for creating smooth, performant web animations'
    },
    {
      name: 'Lenis',
      logo: getIconifyUrl('mdi:scroll'),
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      description: 'Smooth scrolling library that provides buttery-smooth scroll experiences'
    },
    {
      name: 'Lucide',
      logo: getIconifyUrl('simple-icons:lucide'),
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/30',
      description: 'Beautiful & consistent icon toolkit with 1000+ icons for React and other frameworks'
    }
  ]

  // Databases data with logo URLs and descriptions
  const databases = [
    {
      name: 'MongoDB',
      logo: getDeviconUrl('mongodb'),
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      description: 'NoSQL database for flexible, scalable data storage'
    },
    {
      name: 'PostgreSQL',
      logo: getDeviconUrl('postgresql'),
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      description: 'Advanced relational database with powerful features'
    },
    {
      name: 'Supabase',
      logo: getIconifyUrl('skill-icons:supabase-light'),
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      description: 'Open-source Firebase alternative with PostgreSQL backend and real-time features'
    }
  ]

  // Combine all tech stack items into one array
  const techStack = [...languages, ...frameworks, ...libraries, ...databases]

  return (
    <section id="skills" ref={sectionRef} className='w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 '>
      {/* Section Header */}
      <div className='w-full max-w-7xl mb-16 md:mb-20'>
        <div className='flex justify-center mb-4'>
          <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
            Technologies
          </button>
        </div>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight'>
          My Technology Stack
        </h2>
      </div>

      {/* Unified Tech Stack Section */}
      <div className='w-full max-w-7xl'>
        <div ref={techStackRef} className='flex flex-wrap gap-3 md:gap-4 justify-center'>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`skill-card bg-gray-900/50 backdrop-blur-sm border ${tech.borderColor} rounded-full px-4 py-2 md:px-5 md:py-2.5 hover:border-opacity-100 hover:shadow-lg transition-all duration-300 group flex items-center gap-2 md:gap-3 cursor-default relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full`} />
              
              {/* Icon container */}
              <div className={`relative ${tech.bgColor} rounded-full p-1.5 md:p-2 group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} logo`}
                  className='w-4 h-4 md:w-5 md:h-5 relative z-10'
                  loading='lazy'
                />
              </div>
              
              <h4 className={`${tech.color} font-semibold text-sm md:text-base relative z-10`}>
                {tech.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

