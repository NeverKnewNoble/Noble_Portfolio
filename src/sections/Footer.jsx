import React from 'react'
import { navItems as sections, socialLinks } from '../data/navigation'
import { handleNavClick } from '../utils/scroll'

export default function Footer() {
  return (
    <footer className='w-full bg-paper border-t border-line'>
      <div className='w-full max-w-6xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <span className='font-mono text-base font-bold tracking-tight text-ink lowercase'>
                noble
              </span>
            </div>
            <p className='text-muted text-sm leading-relaxed'>
              Full-stack developer crafting modern web applications and interactive 3D experiences.
            </p>
          </div>

          {/* Navigation Section */}
          <div className='space-y-4'>
            <h4 className='font-mono text-xs font-medium text-accent uppercase tracking-wider'>Navigation</h4>
            <nav className='flex flex-col space-y-2'>
              {sections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  onClick={(e) => handleNavClick(e, section.href)}
                  className='text-muted hover:text-ink transition-colors duration-200 text-sm w-fit'
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links Section */}
          <div className='space-y-4'>
            <h4 className='font-mono text-xs font-medium text-accent uppercase tracking-wider'>Connect</h4>
            <div className='flex flex-col space-y-2'>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-muted hover:text-ink transition-colors duration-200 text-sm w-fit'
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
        <div className='pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='font-mono text-xs text-muted'>
            © {new Date().getFullYear()} Noble — All rights reserved.
          </p>
          <p className='font-mono text-xs text-muted'>
            Built with React, Three.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

