import { Mail, Twitter, Instagram, Youtube, Github } from 'lucide-react'

// Empty form state for the contact form
export const initialFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
}

// Professional social links for recruiters and clients
export const professionalSocialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/NeverKnewNoble', // Update if different
    color: 'hover:text-gray-300',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    url: 'https://x.com/404noble?s=21',
    color: 'hover:text-blue-400',
  },
]

// Additional social links
export const additionalSocialLinks = [
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

// Select options for the contact form dropdowns
export const projectTypeOptions = [
  { value: '', label: 'Select project type...' },
  { value: 'web-application', label: 'Web Application' },
  { value: 'e-commerce', label: 'E-commerce Platform' },
  { value: 'portfolio', label: 'Portfolio Website' },
  { value: '3d-interactive', label: '3D Interactive Experience' },
  { value: 'chrome-extension', label: 'Chrome Extension' },
  { value: 'full-stack', label: 'Full-Stack Project' },
  { value: 'other', label: 'Other' },
]

export const budgetOptions = [
  { value: '', label: 'Select budget...' },
  { value: 'below-1k', label: 'Below $1,000' },
  { value: '1k-5k', label: '$1,000 - $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-plus', label: '$50,000+' },
  { value: 'discuss', label: "Let's Discuss" },
]

export const timelineOptions = [
  { value: '', label: 'Select timeline...' },
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: 'Within 1 Month' },
  { value: '2-3-months', label: '2-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: '6-plus-months', label: '6+ Months' },
  { value: 'flexible', label: 'Flexible' },
]

// Build a mailto link from the submitted form data
export function buildMailtoLink(formData, to = 'noblepuredev@gmail.com') {
  const subject = encodeURIComponent(
    `Project Inquiry: ${formData.projectType || 'General'}`
  )
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Project Type: ${formData.projectType || 'Not specified'}\n` +
      `Budget: ${formData.budget || 'Not specified'}\n` +
      `Timeline: ${formData.timeline || 'Not specified'}\n\n` +
      `Message:\n${formData.message}`
  )
  return `mailto:${to}?subject=${subject}&body=${body}`
}
