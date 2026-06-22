import { Github, Twitter, Mail, Instagram, Youtube } from 'lucide-react'

// Primary site navigation, shared by the Navbar and Footer
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Contact', href: '#contact' },
]

// Social links displayed in the Footer
export const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/NeverKnewNoble',
    color: 'hover:text-gray-300',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    url: 'https://x.com/404noble?s=21',
    color: 'hover:text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    url: 'mailto:noblepuredev@gmail.com',
    color: 'hover:text-gray-300',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/404noble?igsh=MXQ5NW5jcTY1MjluMg%3D%3D&utm_source=qr',
    color: 'hover:text-pink-400',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    url: 'https://www.youtube.com/@404Noble',
    color: 'hover:text-red-400',
  },
]
