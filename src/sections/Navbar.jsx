import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/navigation'
import { handleNavClick } from '../utils/scroll'

export default function Navbar() {
  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 sm:pt-3 px-2 sm:px-4 md:px-6 lg:px-8'>
      {/* Pill-shaped navbar container */}
      <header className={`w-full max-w-2xl bg-surface/80 backdrop-blur-md border border-line shadow-[0_8px_30px_-12px_rgba(23,22,20,0.18)] transition-all duration-300 rounded-md md:rounded-full ${
        isOpen ? 'rounded-lg' : ''
      }`}>
        <div className='px-4 sm:px-5 md:px-6'>
          <div className='flex justify-between items-center py-2.5 sm:py-3'>
            {/* Brand */}
            <a
              href='/'
              className='group flex items-center gap-2 py-1.5 px-2 -ml-2'
              onClick={closeMenu}
            >
             <span className='font-mono text-sm sm:text-base font-bold tracking-tight text-ink lowercase'>
                noble
              </span>
            </a>

            {/* Desktop navigation - pill buttons */}
            <nav className='hidden md:flex items-center gap-1'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, closeMenu)}
                  className='rounded-full px-3.5 py-1.5 text-sm text-muted hover:text-ink hover:bg-ink/5 transition-all duration-200'
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
              className='md:hidden inline-flex items-center justify-center rounded-full p-2.5 min-w-[44px] min-h-[44px] text-ink/70 hover:text-ink hover:bg-ink/5 active:bg-ink/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-all'
            >
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer - pill shaped items */}
        <div
          className={`md:hidden border-t border-line bg-surface/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-[500px] opacity-100 pointer-events-auto pb-4'
              : 'max-h-0 opacity-0 pointer-events-none pb-0'
          }`}
        >
          <nav className='px-4 pt-2 space-y-1'>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, closeMenu)}
                className={`rounded-xl px-5 py-3.5 text-base text-ink/80 hover:text-ink hover:bg-ink/5 active:bg-ink/10 transition-all duration-300 min-h-[44px] flex items-center transform ${
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