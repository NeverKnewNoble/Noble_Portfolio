import React, { useState } from 'react'
import { Mail, Send, Twitter, Instagram, Youtube, MessageCircle, Github, ArrowRight } from 'lucide-react'
// import emailjs from '@emailjs/browser' // Uncomment after installing: yarn add @emailjs/browser

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Option 1: EmailJS Integration (Recommended)
      // Uncomment and configure after setting up EmailJS account
      // Replace with your EmailJS service ID, template ID, and public key
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',      // Get from EmailJS dashboard
        'YOUR_TEMPLATE_ID',     // Get from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'       // Get from EmailJS dashboard
      )
      */

      // Option 2: Fallback to mailto (current implementation)
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType || 'General'}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n` +
        `Project Type: ${formData.projectType || 'Not specified'}\n` +
        `Budget: ${formData.budget || 'Not specified'}\n` +
        `Timeline: ${formData.timeline || 'Not specified'}\n\n` +
        `Message:\n${formData.message}`
      )
      const mailtoLink = `mailto:noblepuredev@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        })
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Professional social links for recruiters and clients
  const professionalSocialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/NeverKnewNoble', // Update if different
      color: 'hover:text-gray-300'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      url: 'https://x.com/404noble?s=21',
      color: 'hover:text-blue-400'
    }
  ]

  // Additional social links
  const additionalSocialLinks = [
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

  return (
    <section id="contact" className='min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
      <div className='w-full max-w-7xl'>
        {/* Section Header */}
        <div className='mb-16 md:mb-20'>
          <div className='flex justify-center mb-4'>
            <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
              Get In Touch
            </button>
          </div>
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight'>
            Let's Build Something Amazing
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto font-light'>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something great together.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16'>
          {/* Contact Form */}
          <div className='bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 lg:p-10'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
              Send a Message
            </h3>
            <p className='text-gray-400 text-sm mb-6'>
              Fill out the form below to discuss your project. All fields help me provide a better quote.
            </p>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='block text-gray-300 text-sm font-medium mb-2'>
                    Name <span className='text-red-400'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200'
                    placeholder='Your name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-gray-300 text-sm font-medium mb-2'>
                    Email <span className='text-red-400'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200'
                    placeholder='your.email@example.com'
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor='phone' className='block text-gray-300 text-sm font-medium mb-2'>
                  Phone (Optional)
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200'
                  placeholder='+1 (555) 123-4567'
                />
              </div>
              <div>
                <label htmlFor='projectType' className='block text-gray-300 text-sm font-medium mb-2'>
                  Project Type
                </label>
                <select
                  id='projectType'
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-gray-700 transition-colors duration-200'
                >
                  <option value=''>Select project type...</option>
                  <option value='web-application'>Web Application</option>
                  <option value='e-commerce'>E-commerce Platform</option>
                  <option value='portfolio'>Portfolio Website</option>
                  <option value='3d-interactive'>3D Interactive Experience</option>
                  <option value='chrome-extension'>Chrome Extension</option>
                  <option value='full-stack'>Full-Stack Project</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='budget' className='block text-gray-300 text-sm font-medium mb-2'>
                    Budget Range
                  </label>
                  <select
                    id='budget'
                    name='budget'
                    value={formData.budget}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-gray-700 transition-colors duration-200'
                  >
                    <option value=''>Select budget...</option>
                    <option value='below-1k'>Below $1,000</option>
                    <option value='1k-5k'>$1,000 - $5,000</option>
                    <option value='5k-10k'>$5,000 - $10,000</option>
                    <option value='10k-25k'>$10,000 - $25,000</option>
                    <option value='25k-50k'>$25,000 - $50,000</option>
                    <option value='50k-plus'>$50,000+</option>
                    <option value='discuss'>Let's Discuss</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='timeline' className='block text-gray-300 text-sm font-medium mb-2'>
                    Timeline
                  </label>
                  <select
                    id='timeline'
                    name='timeline'
                    value={formData.timeline}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-gray-700 transition-colors duration-200'
                  >
                    <option value=''>Select timeline...</option>
                    <option value='asap'>ASAP</option>
                    <option value='1-month'>Within 1 Month</option>
                    <option value='2-3-months'>2-3 Months</option>
                    <option value='3-6-months'>3-6 Months</option>
                    <option value='6-plus-months'>6+ Months</option>
                    <option value='flexible'>Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor='message' className='block text-gray-300 text-sm font-medium mb-2'>
                  Project Details <span className='text-red-400'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200 resize-none'
                  placeholder='Tell me about your project, goals, and any specific requirements...'
                  required
                />
              </div>
              {submitStatus === 'success' && (
                <div className='p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm'>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className='p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm'>
                  There was an error sending your message. Please try again or email me directly.
                </div>
              )}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className='w-5 h-5' />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className='flex flex-col justify-center space-y-8'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-6'>
                Connect With Me
              </h3>
              <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-8'>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together.
              </p>
            </div>

            {/* Professional Social Links */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-4'>Professional Profiles</h4>
              <div className='space-y-3'>
                {professionalSocialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`flex items-center gap-4 p-4 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 ${social.color} transition-colors duration-200 hover:border-gray-700`}
                    >
                      <div className='w-10 h-10 rounded-lg bg-black border border-gray-800 flex items-center justify-center'>
                        <IconComponent className='w-5 h-5' />
                      </div>
                      <span className='font-medium'>{social.label}</span>
                      <ArrowRight className='w-4 h-4 ml-auto' />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Additional Social Links */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-4'>More Ways to Connect</h4>
              <div className='space-y-3'>
                {additionalSocialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`flex items-center gap-4 p-4 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 ${social.color} transition-colors duration-200 hover:border-gray-700`}
                    >
                      <div className='w-10 h-10 rounded-lg bg-black border border-gray-800 flex items-center justify-center'>
                        <IconComponent className='w-5 h-5' />
                      </div>
                      <span className='font-medium'>{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

