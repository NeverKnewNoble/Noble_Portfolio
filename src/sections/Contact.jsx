import React, { useState } from 'react'
import { Mail, Send, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:noblepuredev@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client with pre-filled data
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const socialLinks = [
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
    },
    {
      icon: Twitter,
      label: 'Twitter / X',
      url: 'https://x.com/404noble?s=21',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      label: 'Reddit',
      url: 'https://www.reddit.com/user/Ok-Professional2428/',
      color: 'hover:text-orange-400'
    }
  ]

  return (
    <section id="contact" className='min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32'>
      <div className='w-full max-w-6xl'>
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
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-6'>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-gray-300 text-sm font-medium mb-2'>
                  Name
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
                  Email
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
              <div>
                <label htmlFor='message' className='block text-gray-300 text-sm font-medium mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className='w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200 resize-none'
                  placeholder='Tell me about your project...'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200'
              >
                <Send className='w-5 h-5' />
                Send Message
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
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Social Links */}
            <div className='space-y-4'>
              {socialLinks.map((social, index) => {
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
    </section>
  )
}

