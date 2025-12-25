import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)
  const languagesRef = useRef(null)
  const frameworksRef = useRef(null)
  const librariesRef = useRef(null)
  const databasesRef = useRef(null)

  // GSAP animations for skills sections
  useEffect(() => {
    if (!sectionRef.current) return

    // Animate languages
    if (languagesRef.current) {
      const languageCards = languagesRef.current.querySelectorAll('.skill-card')
      gsap.fromTo(
        languageCards,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: languagesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate frameworks
    if (frameworksRef.current) {
      const frameworkCards = frameworksRef.current.querySelectorAll('.skill-card')
      gsap.fromTo(
        frameworkCards,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: frameworksRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate libraries
    if (librariesRef.current) {
      const libraryCards = librariesRef.current.querySelectorAll('.skill-card')
      gsap.fromTo(
        libraryCards,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: librariesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate databases
    if (databasesRef.current) {
      const databaseCards = databasesRef.current.querySelectorAll('.skill-card')
      gsap.fromTo(
        databaseCards,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: databasesRef.current,
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

  return (
    <section id="skills" ref={sectionRef} className='min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
      {/* Section Header */}
      <div className='w-full max-w-7xl mb-16 md:mb-20'>
        <div className='flex justify-center mb-4'>
          <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
            Technologies
          </button>
        </div>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight'>
          Languages & Frameworks
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto font-light mb-4'>
          Technologies I work with to build modern, scalable applications and innovative solutions.
        </p>
        <p className='text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-3xl mx-auto font-light leading-relaxed'>
          From frontend frameworks to backend technologies, I continuously expand my toolkit to deliver cutting-edge solutions. 
          Currently diving deep into Three.js for 3D web experiences and building scalable applications with modern databases.
        </p>
      </div>

      {/* Languages Section */}
      <div className='w-full max-w-7xl mb-16 md:mb-20'>
        <div className='mb-6 md:mb-8'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 text-center md:text-left'>
            Languages & Tools
          </h3>
          <p className='text-gray-400 text-sm md:text-base max-w-3xl font-light leading-relaxed'>
            Core programming languages and development tools that form the foundation of my development workflow. 
            From strongly-typed TypeScript to the versatility of JavaScript, I leverage these technologies to create 
            robust and maintainable codebases.
          </p>
        </div>
        <div ref={languagesRef} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`skill-card bg-gray-900/50 backdrop-blur-sm border ${lang.borderColor} rounded-2xl p-5 md:p-6 hover:border-opacity-100 hover:shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${lang.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Icon container with modern styling */}
              <div className={`relative mb-4 ${lang.bgColor} rounded-xl p-4 md:p-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center shadow-lg`}>
                <img 
                  src={lang.logo} 
                  alt={`${lang.name} logo - ${lang.description}`}
                  className='w-10 h-10 md:w-14 md:h-14 relative z-10'
                  loading='lazy'
                />
                {/* Glow effect */}
                <div className={`absolute inset-0 ${lang.bgColor} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              </div>
              
              <h4 className='text-white font-bold text-sm md:text-base mb-1 relative z-10'>
                {lang.name}
              </h4>
              <span className={`text-xs ${lang.color} font-semibold mb-2 block relative z-10`}>
                {lang.proficiency}
              </span>
              <p className='text-gray-400 text-xs leading-tight mt-1 hidden sm:block relative z-10 group-hover:text-gray-300 transition-colors duration-300'>
                {lang.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks & Tools Section */}
      <div className='w-full max-w-7xl mb-16 md:mb-20'>
        <div className='mb-6 md:mb-8'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 text-center md:text-left'>
            Frameworks & Tools
          </h3>
          <p className='text-gray-400 text-sm md:text-base max-w-3xl font-light leading-relaxed'>
            Modern frameworks and development tools that accelerate my workflow and enable rapid prototyping. 
            Whether it's building server-side APIs with Express.js, managing state in React applications, 
            or styling with utility-first CSS, these tools help me deliver high-quality projects efficiently.
          </p>
        </div>
        <div ref={frameworksRef} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className={`skill-card bg-gray-900/50 backdrop-blur-sm border ${framework.borderColor} rounded-2xl p-5 md:p-6 hover:border-opacity-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${framework.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Icon container with modern styling */}
              <div className={`relative mb-4 ${framework.bgColor} rounded-xl p-4 md:p-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center shadow-lg`}>
                <img 
                  src={framework.logo} 
                  alt={`${framework.name} logo - ${framework.description}`}
                  className='w-10 h-10 md:w-14 md:h-14 relative z-10'
                  loading='lazy'
                />
                {/* Glow effect */}
                <div className={`absolute inset-0 ${framework.bgColor} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              </div>
              
              <h4 className='text-white font-bold text-sm md:text-base mb-2 relative z-10'>
                {framework.name}
              </h4>
              <p className='text-gray-400 text-xs leading-tight hidden sm:block relative z-10 group-hover:text-gray-300 transition-colors duration-300'>
                {framework.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Libraries Section */}
      <div className='w-full max-w-7xl mb-16 md:mb-20'>
        <div className='mb-6 md:mb-8'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 text-center md:text-left'>
            Libraries
          </h3>
          <p className='text-gray-400 text-sm md:text-base max-w-3xl font-light leading-relaxed'>
            Powerful JavaScript libraries that extend functionality and enable specialized features. 
            These libraries enhance my projects with advanced capabilities, from 3D graphics to complex data visualizations.
          </p>
        </div>
        <div ref={librariesRef} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
          {libraries.map((library, index) => (
            <div
              key={index}
              className={`skill-card bg-gray-900/50 backdrop-blur-sm border ${library.borderColor} rounded-2xl p-5 md:p-6 hover:border-opacity-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${library.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Icon container with modern styling */}
              <div className={`relative mb-4 ${library.bgColor} rounded-xl p-4 md:p-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center shadow-lg`}>
                <img 
                  src={library.logo} 
                  alt={`${library.name} logo - ${library.description}`}
                  className='w-10 h-10 md:w-14 md:h-14 relative z-10'
                  loading='lazy'
                />
                {/* Glow effect */}
                <div className={`absolute inset-0 ${library.bgColor} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              </div>
              
              <h4 className='text-white font-bold text-sm md:text-base mb-2 relative z-10'>
                {library.name}
              </h4>
              <p className='text-gray-400 text-xs leading-tight hidden sm:block relative z-10 group-hover:text-gray-300 transition-colors duration-300'>
                {library.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Databases Section */}
      <div className='w-full max-w-7xl'>
        <div className='mb-6 md:mb-8'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 text-center md:text-left'>
            Databases
          </h3>
          <p className='text-gray-400 text-sm md:text-base max-w-3xl font-light leading-relaxed'>
            Database systems I use to store, manage, and retrieve data efficiently. 
            From NoSQL solutions for flexible schemas to relational databases for structured data, 
            I choose the right database technology based on project requirements.
          </p>
        </div>
        <div ref={databasesRef} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
          {databases.map((database, index) => (
            <div
              key={index}
              className={`skill-card bg-gray-900/50 backdrop-blur-sm border ${database.borderColor} rounded-2xl p-5 md:p-6 hover:border-opacity-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${database.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Icon container with modern styling */}
              <div className={`relative mb-4 ${database.bgColor} rounded-xl p-4 md:p-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center shadow-lg`}>
                <img 
                  src={database.logo} 
                  alt={`${database.name} logo - ${database.description}`}
                  className='w-10 h-10 md:w-14 md:h-14 relative z-10'
                  loading='lazy'
                />
                {/* Glow effect */}
                <div className={`absolute inset-0 ${database.bgColor} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              </div>
              
              <h4 className='text-white font-bold text-sm md:text-base mb-2 relative z-10'>
                {database.name}
              </h4>
              <p className='text-gray-400 text-xs leading-tight hidden sm:block relative z-10 group-hover:text-gray-300 transition-colors duration-300'>
                {database.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

