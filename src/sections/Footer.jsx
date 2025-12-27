import React from 'react'
import { Github, Twitter, Mail, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  // All sections for navigation
  const sections = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ]

  // Social links
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/NeverKnewNoble',
      color: 'hover:text-gray-300'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      url: 'https://x.com/404noble?s=21',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:noblepuredev@gmail.com',
      color: 'hover:text-gray-300'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/404noble?igsh=MXQ5NW5jcTY1MjluMg%3D%3D&utm_source=qr',
      color: 'hover:text-pink-400'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: 'https://www.youtube.com/@404Noble',
      color: 'hover:text-red-400'
    }
  ]

  // Handle smooth scrolling to sections
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const offset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className='w-full bg-black border-t border-gray-800'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-white'>Noble</h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Full-stack developer crafting modern web applications and innovative digital experiences.
            </p>
          </div>

          {/* Navigation Section */}
          <div className='space-y-4'>
            <h4 className='text-sm font-semibold text-white uppercase tracking-wider'>Navigation</h4>
            <nav className='flex flex-col space-y-2'>
              {sections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  onClick={(e) => handleNavClick(e, section.href)}
                  className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links Section */}
          <div className='space-y-4'>
            <h4 className='text-sm font-semibold text-white uppercase tracking-wider'>Connect</h4>
            <div className='flex flex-col space-y-2'>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center gap-2 text-gray-400 ${social.color} transition-colors duration-200 text-sm`}
                  >
                    <IconComponent className='w-4 h-4' />
                    <span>{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()} Noble. All rights reserved.
          </p>
          <p className='text-gray-500 text-sm'>
            Built with React, Three.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

