import React, { useState } from 'react'
import { Send, ArrowRight } from 'lucide-react'
import {
  initialFormData,
  professionalSocialLinks,
  additionalSocialLinks,
  projectTypeOptions,
  budgetOptions,
  timelineOptions,
  buildMailtoLink,
} from '../data/contact'
// import emailjs from '@emailjs/browser' // Uncomment after installing: yarn add @emailjs/browser

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData)
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
      window.location.href = buildMailtoLink(formData)

      setSubmitStatus('success')

      // Reset form after successful submission
      setTimeout(() => {
        setFormData(initialFormData)
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className='w-full bg-paper flex flex-col items-center justify-center relative px-5 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32 border-t border-line'>
      <div className='w-full max-w-6xl'>
        {/* Section Header */}
        <div className='mb-12 md:mb-16'>
          <p className='font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4'>
            // Get in touch
          </p>
          <h2 className='font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink tracking-[-0.02em] leading-[1.02] max-w-3xl'>
            Let&apos;s build something that ships.
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-muted mt-5 max-w-2xl font-light'>
            Have a project in mind? Tell me about it — the more detail you share,
            the better I can scope it.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16'>
          {/* Contact Form */}
          <div className='bg-surface border border-line rounded-2xl p-6 md:p-8 lg:p-10'>
            <h3 className='font-display text-2xl md:text-3xl font-bold text-ink mb-2'>
              Send a message
            </h3>
            <p className='text-muted text-sm mb-6'>
              Fill out the form below to discuss your project. All fields help me provide a better quote.
            </p>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='block text-ink text-sm font-medium mb-2'>
                    Name <span className='text-accent'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-paper border border-line text-ink placeholder-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors duration-200'
                    placeholder='Your name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-ink text-sm font-medium mb-2'>
                    Email <span className='text-accent'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-paper border border-line text-ink placeholder-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors duration-200'
                    placeholder='your.email@example.com'
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor='phone' className='block text-ink text-sm font-medium mb-2'>
                  Phone (Optional)
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-paper border border-line text-ink placeholder-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors duration-200'
                  placeholder='+1 (555) 123-4567'
                />
              </div>
              <div>
                <label htmlFor='projectType' className='block text-ink text-sm font-medium mb-2'>
                  Project Type
                </label>
                <select
                  id='projectType'
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-paper border border-line text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors duration-200'
                >
                  {projectTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='budget' className='block text-ink text-sm font-medium mb-2'>
                    Budget Range
                  </label>
                  <select
                    id='budget'
                    name='budget'
                    value={formData.budget}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-paper border border-line text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors duration-200'
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor='timeline' className='block text-ink text-sm font-medium mb-2'>
                    Timeline
                  </label>
                  <select
                    id='timeline'
                    name='timeline'
                    value={formData.timeline}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-paper border border-line text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors duration-200'
                  >
                    {timelineOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor='message' className='block text-ink text-sm font-medium mb-2'>
                  Project Details <span className='text-accent'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className='w-full px-4 py-3 rounded-lg bg-paper border border-line text-ink placeholder-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors duration-200 resize-none'
                  placeholder='Tell me about your project, goals, and any specific requirements...'
                  required
                />
              </div>
              {submitStatus === 'success' && (
                <div className='p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm'>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className='p-4 rounded-lg bg-accent/10 border border-accent/30 text-accent-deep text-sm'>
                  There was an error sending your message. Please try again or email me directly.
                </div>
              )}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper font-medium hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-paper border-t-transparent rounded-full animate-spin' />
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
              <h3 className='font-display text-2xl md:text-3xl font-bold text-ink mb-5'>
                Or reach me directly.
              </h3>
              <p className='text-muted text-base md:text-lg leading-relaxed'>
                Always open to new projects, collaborations, and the occasional
                interesting problem. Pick whichever channel suits you.
              </p>
            </div>

            {/* Professional Social Links */}
            <div>
              <h4 className='font-mono text-xs uppercase tracking-wider text-accent mb-4'>
                Professional
              </h4>
              <div className='space-y-3'>
                {professionalSocialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center gap-4 p-4 rounded-xl bg-surface border border-line text-muted hover:border-ink/25 hover:text-ink transition-all duration-200'
                    >
                      <div className='w-10 h-10 rounded-lg bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-paper transition-colors duration-200'>
                        <IconComponent className='w-5 h-5' />
                      </div>
                      <span className='font-medium text-ink'>{social.label}</span>
                      <ArrowRight className='w-4 h-4 ml-auto text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200' />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Additional Social Links */}
            <div>
              <h4 className='font-mono text-xs uppercase tracking-wider text-accent mb-4'>
                More ways to connect
              </h4>
              <div className='space-y-3'>
                {additionalSocialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center gap-4 p-4 rounded-xl bg-surface border border-line text-muted hover:border-ink/25 hover:text-ink transition-all duration-200'
                    >
                      <div className='w-10 h-10 rounded-lg bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-paper transition-colors duration-200'>
                        <IconComponent className='w-5 h-5' />
                      </div>
                      <span className='font-medium text-ink'>{social.label}</span>
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

