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
  const softSkillsRef = useRef(null)
  const techSkillsRef = useRef(null)

  // Personal bio and achievements data
  const bioData = {
    yearsExperience: '3', // Update with your actual years
    keyAchievement: 'Developed systems used by thousands of users',
    journey: 'From mastering JavaScript fundamentals to building advanced 3D web experiences with React Three Fiber and GSAP',
    bio: 'I\'m a passionate full-stack developer who transforms complex ideas into elegant, user-friendly applications. My journey in software development has been driven by a constant curiosity to learn and push the boundaries of what\'s possible on the web.',
    focus: 'I specialize in creating seamless digital experiences that combine cutting-edge technology with intuitive design, always prioritizing performance and user satisfaction.'
  }

  // Soft skills data
  const softSkills = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Experienced in working with cross-functional teams, pair programming, and contributing to open-source projects. Strong believer in knowledge sharing and mentorship.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: MessageSquare,
      title: 'Client Communication',
      description: 'Skilled at translating technical concepts into clear, actionable insights for stakeholders. Proven track record of managing client expectations and delivering on time.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: GitBranch,
      title: 'Agile Methodologies',
      description: 'Proficient in Scrum and Kanban workflows. Experienced with sprint planning, daily standups, and iterative development cycles that ensure continuous delivery.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical thinker who breaks down complex challenges into manageable solutions. Strong debugging skills and systematic approach to troubleshooting.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Committed to staying current with industry trends and emerging technologies. Regularly contribute to tech communities and attend conferences.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'Dedicated to writing clean, maintainable code and following best practices. Strong advocate for testing, code reviews, and documentation.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80'
    }
  ]

  // Technical Skills/Expertise cards data
  const skills = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks and technologies, from frontend to backend.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency, ensuring fast load times and smooth user experiences.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that prioritize user experience and modern design principles.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Developing mobile-first applications that work seamlessly across all devices and screen sizes.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Expert in React, Three.js, and modern web standards to create cutting-edge digital experiences.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80'
    },
    {
      icon: Database,
      title: 'Backend Solutions',
      description: 'Designing robust server-side architectures and APIs that power scalable applications.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80'
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

    // Animate soft skills
    if (softSkillsRef.current) {
      const softSkillCards = softSkillsRef.current.querySelectorAll('.soft-skill-card')
      gsap.fromTo(
        softSkillCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: softSkillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Animate technical skills
    if (techSkillsRef.current) {
      const techSkillCards = techSkillsRef.current.querySelectorAll('.tech-skill-card')
      gsap.fromTo(
        techSkillCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: techSkillsRef.current,
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

      {/* Combined Skills Section */}
      <div className='w-full max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>
          {/* Beyond Code - Left Column */}
          <div className='w-full flex flex-col'>
            <div className='mb-6 md:mb-8'>
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3'>
                Beyond Code
              </h3>
            </div>
            <div ref={softSkillsRef} className='grid grid-cols-1 gap-4 md:gap-6'>
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className='soft-skill-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 hover:border-gray-700 hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden'
                  >
                    {/* Gradient overlay on hover */}
                    <div className='absolute inset-0 bg-gradient-to-br from-white/5 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl' />
                    
                    {/* Image container */}
                    <div className='relative mb-4 w-full h-40 md:h-48 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300'>
                      {skill.image ? (
                        <img 
                          src={skill.image} 
                          alt={`${skill.title}`}
                          className='w-full h-full object-cover relative z-10'
                          loading='lazy'
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-gray-900');
                          }}
                        />
                      ) : (
                        <div className='w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center'>
                          <IconComponent className='w-12 h-12 md:w-16 md:h-16 text-white opacity-50' />
                        </div>
                      )}
                      {/* Overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10' />
                    </div>
                    
                    <h3 className='text-white font-bold text-lg md:text-xl mb-2 relative z-10'>
                      {skill.title}
                    </h3>
                    <p className='text-gray-400 text-sm md:text-base leading-relaxed relative z-10'>
                      {skill.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Technical Expertise - Right Column */}
          <div className='w-full flex flex-col'>
            <div className='mb-6 md:mb-8'>
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3'>
                Technical Expertise
              </h3>
            </div>
            <div ref={techSkillsRef} className='grid grid-cols-1 gap-4 md:gap-6'>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className='tech-skill-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 hover:border-gray-700 hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden'
                  >
                    {/* Gradient overlay on hover */}
                    <div className='absolute inset-0 bg-gradient-to-br from-white/5 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl' />
                    
                    {/* Image container */}
                    <div className='relative mb-4 w-full h-40 md:h-48 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300'>
                      {skill.image ? (
                        <img 
                          src={skill.image} 
                          alt={`${skill.title}`}
                          className='w-full h-full object-cover relative z-10'
                          loading='lazy'
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-gray-900');
                          }}
                        />
                      ) : (
                        <div className='w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center'>
                          <IconComponent className='w-12 h-12 md:w-16 md:h-16 text-white opacity-50' />
                        </div>
                      )}
                      {/* Overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10' />
                    </div>
                    
                    <h3 className='text-white font-bold text-lg md:text-xl mb-2 relative z-10'>
                      {skill.title}
                    </h3>
                    <p className='text-gray-400 text-sm md:text-base leading-relaxed relative z-10'>
                      {skill.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
