import React from 'react'
import { Code, Zap, Palette, Smartphone, Globe, Database } from 'lucide-react'

export default function About() {
  // Skills/Expertise cards data
  const skills = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks and technologies, from frontend to backend.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency, ensuring fast load times and smooth user experiences.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that prioritize user experience and modern design principles.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Developing mobile-first applications that work seamlessly across all devices and screen sizes.'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Expert in React, Three.js, and modern web standards to create cutting-edge digital experiences.'
    },
    {
      icon: Database,
      title: 'Backend Solutions',
      description: 'Designing robust server-side architectures and APIs that power scalable applications.'
    }
  ]

  return (
    <section id="about" className='min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
      {/* Section Header */}
      <div className='w-full max-w-6xl mb-16 md:mb-20'>
        <div className='flex justify-center mb-4'>
          <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
            My Expertise
          </button>
        </div>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight'>
          Skills That Drive Innovation
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto font-light'>
          Combining technical expertise with creative problem-solving to deliver solutions that make a real impact.
        </p>
      </div>

      {/* Skills Grid */}
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {skills.map((skill, index) => {
          const IconComponent = skill.icon
          return (
            <div
              key={index}
              className='bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors duration-300'
            >
              <div className='mb-4'>
                <div className='w-12 h-12 rounded-lg bg-black border border-gray-800 flex items-center justify-center'>
                  <IconComponent className='w-6 h-6 text-white' />
                </div>
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-3'>
                {skill.title}
              </h3>
              <p className='text-gray-400 text-sm md:text-base leading-relaxed'>
                {skill.description}
              </p>
            </div>
          )
        })}
    </div>
    </section>
  )
}
