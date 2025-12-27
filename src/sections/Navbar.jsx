import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false)

  // Simple nav items; update hrefs to match your sections/route ids
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  // Handle smooth scrolling to sections
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // Use smooth scroll with offset for navbar height
      const offset = 80 // Adjust based on navbar height
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    // Close mobile menu if open
    if (isOpen) {
      closeMenu()
    }
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 sm:pt-3 px-2 sm:px-4 md:px-6 lg:px-8'>
      {/* Pill-shaped navbar container */}
      <header className={`w-full max-w-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 rounded-md md:rounded-full ${
        isOpen ? 'rounded-lg' : ''
      }`}>
        <div className='px-4 sm:px-5 md:px-6'>
          <div className='flex justify-between items-center py-2.5 sm:py-3'>
            {/* Brand */}
            <a
              href='/'
              className='text-white font-bold text-base sm:text-lg md:text-xl tracking-tight hover:text-gray-100 transition-colors py-1.5 px-2 -ml-2'
              onClick={closeMenu}
            >
              Noble
            </a>

            {/* Desktop navigation - pill buttons */}
            <nav className='hidden md:flex items-center gap-2'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className='rounded-full px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200'
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu toggle button - pill shaped */}
            <button
              type='button'
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className='md:hidden inline-flex items-center justify-center rounded-full p-2.5 min-w-[44px] min-h-[44px] text-gray-200 hover:text-white hover:bg-white/10 active:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all'
            >
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer - pill shaped items */}
        <div 
          className={`md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-[500px] opacity-100 pointer-events-auto pb-4' 
              : 'max-h-0 opacity-0 pointer-events-none pb-0'
          }`}
        >
          <nav className='px-4 pt-2 space-y-2'>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`rounded-full px-5 py-3.5 text-base text-gray-200 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all duration-300 min-h-[44px] flex items-center transform ${
                  isOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}