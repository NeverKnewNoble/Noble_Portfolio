import React from 'react'
import { Eye } from 'lucide-react'

export default function Skills() {
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
      name: 'React',
      logo: getDeviconUrl('react'),
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      proficiency: 'Proficient',
      description: 'Building dynamic, component-based user interfaces'
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
      name: 'Python',
      logo: getDeviconUrl('python'),
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      proficiency: 'Little Versed',
      description: 'Exploring backend development and automation scripts'
    },
    {
      name: 'Three.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      proficiency: 'Learning',
      description: 'Creating immersive 3D web experiences and visualizations'
    },
    {
      name: 'VR',
      logo: null, // No simple icon for VR, will use Eye icon
      icon: Eye,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/30',
      proficiency: 'Aspiring',
      description: 'Future focus on virtual reality and immersive technologies'
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
    },
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
    }
  ]

  return (
    <section id="skills" className='min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
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
          Currently diving deep into Three.js for 3D web experiences and exploring the exciting world of virtual reality development.
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
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6'>
          {languages.map((lang, index) => {
            const IconComponent = lang.icon
            return (
              <div
                key={index}
                className={`bg-gray-900 border ${lang.borderColor} rounded-2xl p-4 md:p-6 hover:border-opacity-60 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default`}
              >
                <div className={`mb-4 ${lang.bgColor} rounded-xl p-4 md:p-5 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  {lang.logo ? (
                    <img 
                      src={lang.logo} 
                      alt={`${lang.name} logo`}
                      className='w-8 h-8 md:w-12 md:h-12'
                    />
                  ) : (
                    IconComponent && <IconComponent className={`w-8 h-8 md:w-12 md:h-12 ${lang.color}`} />
                  )}
                </div>
                <h4 className='text-white font-bold text-sm md:text-base mb-1'>
                  {lang.name}
                </h4>
                <span className={`text-xs ${lang.color} font-medium mb-2 block`}>
                  {lang.proficiency}
                </span>
                <p className='text-gray-500 text-xs leading-tight mt-1 hidden sm:block'>
                  {lang.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Frameworks & Tools Section */}
      <div className='w-full max-w-7xl'>
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
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6'>
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className={`bg-gray-900 border ${framework.borderColor} rounded-2xl p-4 md:p-6 hover:border-opacity-60 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-default`}
            >
              <div className={`mb-4 ${framework.bgColor} rounded-xl p-4 md:p-5 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                <img 
                  src={framework.logo} 
                  alt={`${framework.name} logo`}
                  className='w-8 h-8 md:w-12 md:h-12'
                />
              </div>
              <h4 className='text-white font-bold text-sm md:text-base mb-2'>
                {framework.name}
              </h4>
              <p className='text-gray-500 text-xs leading-tight hidden sm:block'>
                {framework.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

