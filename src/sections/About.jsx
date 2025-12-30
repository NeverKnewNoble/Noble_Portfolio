import React, { useEffect, useRef } from 'react'
import { Code, Zap, Palette, Smartphone, Globe, Database, Users, MessageSquare, GitBranch, Award, Target, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  // Refs for animations
  const sectionRef = useRef(null)
  const bioRef = useRef(null)
  const avatarRef = useRef(null)
  const achievementsRef = useRef(null)
  const skillsRef = useRef(null)

  // Personal bio and achievements data
  const bioData = {
    yearsExperience: '3', // Update with your actual years
    keyAchievement: 'Developed systems used by thousands of users',
    journey: 'From mastering JavaScript fundamentals to building advanced 3D web experiences with React Three Fiber and GSAP',
    bio: 'I\'m a passionate full-stack developer who transforms complex ideas into elegant, user-friendly applications. My journey in software development has been driven by a constant curiosity to learn and push the boundaries of what\'s possible on the web.',
    focus: 'I specialize in creating seamless digital experiences that combine cutting-edge technology with intuitive design, always prioritizing performance and user satisfaction.'
  }

  // Combined skills data - unified design with images
  const allSkills = [
    // Technical Skills
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks and technologies, from frontend to backend.',
      category: 'technical',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Expert in React, Next.js, Three.js, and modern web standards to create cutting-edge digital experiences.',
      category: 'technical',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Database,
      title: 'Backend Solutions',
      description: 'Designing robust server-side architectures and APIs that power scalable applications.',
      category: 'technical',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency, ensuring fast load times and smooth user experiences.',
      category: 'technical',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that prioritize user experience and modern design principles.',
      category: 'technical',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Developing mobile-first applications that work seamlessly across all devices and screen sizes.',
      category: 'technical',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80'
    },
    // Soft Skills
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Experienced in working with cross-functional teams, pair programming, and contributing to open-source projects.',
      category: 'soft',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: MessageSquare,
      title: 'Client Communication',
      description: 'Skilled at translating technical concepts into clear, actionable insights for stakeholders.',
      category: 'soft',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: GitBranch,
      title: 'Agile Methodologies',
      description: 'Proficient in Scrum and Kanban workflows. Experienced with sprint planning and iterative development.',
      category: 'soft',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical thinker who breaks down complex challenges into manageable solutions with systematic approaches.',
      category: 'soft',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Committed to staying current with industry trends and emerging technologies.',
      category: 'soft',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'Dedicated to writing clean, maintainable code and following best practices.',
      category: 'soft',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80'
    }
  ]

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

  return (
    <section id="about" ref={sectionRef} className='w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
      {/* Section Header */}
      <div className='w-full max-w-7xl mb-16 md:mb-20'>
        <div className='flex justify-center mb-4'>
          <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
            About Me
          </button>
        </div>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight'>
          Crafting Software That Drives Impact
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto font-light'>
          Combining technical expertise with creative problem-solving to deliver solutions that make a real impact.
        </p>
      </div>

      {/* Personal Bio Section */}
      <div className='w-full max-w-7xl mb-20 md:mb-24'>
        <div className='flex flex-col lg:flex-row gap-8 md:gap-12 items-center lg:items-start'>
          {/* Avatar/Headshot */}
          <div ref={avatarRef} className='flex-shrink-0'>
            <div className='relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-2xl'>
              {/* Placeholder for professional headshot - Replace with actual image */}
              <div className='w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 mx-auto mb-4 flex items-center justify-center'>
                    <span className='text-4xl md:text-6xl'>👨‍💻</span>
                  </div>
                </div>
              </div>
              {/* Uncomment and use this when you have a headshot image:
              <img 
                src="/path/to/your-headshot.jpg" 
                alt="Noble - Full Stack Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
              */}
            </div>
          </div>

          {/* Bio Content */}
          <div ref={bioRef} className='flex-1 space-y-6'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                Hi, I'm Noble
              </h3>
              <p className='text-base md:text-lg text-gray-300 leading-relaxed mb-4'>
                {bioData.bio}
              </p>
              <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
                {bioData.focus}
              </p>
            </div>

            {/* Key Achievements */}
            <div ref={achievementsRef} className='space-y-3 pt-4 border-t border-gray-800'>
              <div className='achievement-item flex items-start gap-3'>
                <div className='w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <TrendingUp className='w-4 h-4 text-white' />
                </div>
                <div>
                  <p className='text-white font-semibold mb-1'>
                    {bioData.yearsExperience} Years of Experience
                  </p>
                  <p className='text-sm text-gray-400'>
                    Full-stack development across modern web technologies
                  </p>
                </div>
              </div>
              <div className='achievement-item flex items-start gap-3'>
                <div className='w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <Award className='w-4 h-4 text-white' />
                </div>
                <div>
                  <p className='text-white font-semibold mb-1'>
                    Key Achievement
                  </p>
                  <p className='text-sm text-gray-400'>
                    {bioData.keyAchievement}
                  </p>
                </div>
              </div>
              <div className='achievement-item flex items-start gap-3'>
                <div className='w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <Code className='w-4 h-4 text-white' />
                </div>
                <div>
                  <p className='text-white font-semibold mb-1'>
                    My Journey
                  </p>
                  <p className='text-sm text-gray-400'>
                    {bioData.journey}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Expertise Section - Redesigned */}
      <div className='w-full max-w-7xl'>
        {/* Centered Title */}
        <div className='flex justify-center mb-12 md:mb-16'>
          <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center'>
            Skills & Expertise
          </h3>
        </div>
        
        {/* Unified Skills Grid */}
        <div ref={skillsRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {allSkills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={index}
                className='skill-card group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 md:p-5 hover:border-gray-700 hover:bg-gray-900/60 transition-all duration-300 cursor-default overflow-hidden flex gap-4'
              >
                {/* Animated gradient background on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />
                
                {/* Image on the left */}
                <div className='relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-gray-800 to-gray-900'>
                  {skill.image ? (
                    <img 
                      src={skill.image} 
                      alt={skill.title}
                      className='w-full h-full object-cover relative z-10'
                      loading='lazy'
                      onError={(e) => {
                        // Hide image when it fails to load, icon fallback will show
                        e.target.style.display = 'none';
                        const iconFallback = e.target.nextElementSibling;
                        if (iconFallback) {
                          iconFallback.classList.remove('opacity-0');
                          iconFallback.classList.add('opacity-100');
                        }
                      }}
                    />
                  ) : null}
                  {/* Icon fallback - shows when no image or image fails */}
                  <div className={`absolute inset-0 flex items-center justify-center z-0 ${skill.image ? 'opacity-0' : 'opacity-100'}`}>
                    <IconComponent className='w-8 h-8 md:w-10 md:h-10 text-white opacity-50' />
                  </div>
                  {/* Overlay gradient for better text readability on hover */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none' />
                  {/* Icon overlay on image hover */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30'>
                    <div className='p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20'>
                      <IconComponent className='w-5 h-5 text-white' />
                    </div>
                  </div>
                </div>
                
                {/* Content on the right */}
                <div className='relative z-10 flex-1 flex flex-col min-w-0'>
                  <h4 className='text-white font-bold text-base md:text-lg mb-1.5 group-hover:text-white transition-colors duration-300 line-clamp-1'>
                    {skill.title}
                  </h4>
                  <p className='text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-3'>
                    {skill.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
