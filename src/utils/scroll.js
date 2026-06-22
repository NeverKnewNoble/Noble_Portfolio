// Smooth-scroll helpers shared across sections (Navbar, Footer, Hero, etc.)

// Default offset (px) to account for the fixed navbar height
const NAV_OFFSET = 80

// Smooth-scroll the window to an element by its id
export function smoothScrollToId(targetId, offset = NAV_OFFSET) {
  const targetElement = document.getElementById(targetId)
  if (!targetElement) return

  const elementPosition = targetElement.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

// Anchor click handler: prevents the default jump and smooth-scrolls instead.
// Pass an optional `onNavigate` callback (e.g. to close a mobile menu).
export function handleNavClick(e, href, onNavigate) {
  e.preventDefault()
  smoothScrollToId(href.replace('#', ''))
  if (typeof onNavigate === 'function') onNavigate()
}
