import React, { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, X, Target, Lightbulb, TrendingUp, BookOpen, Clock, Users, Code } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import images
import autoformImage from '../assets/images/autoform.png'
import linkrexImage from '../assets/images/linkrex.png'
import ticketImage from '../assets/images/ticket.png'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)
  const overlayRef = useRef(null)

  // Projects data with full case study information
  const projects = [
    {
      title: 'AutoformX',
      description: 'A lightweight Chrome extension that autofills forms with one click, dramatically reducing time spent on repetitive data entry.',
      tech: ['Next.js', 'Typescript', 'Tailwind CSS', 'WXT', 'MongoDB', 'Paystack', 'Chrome Extension API', 'Content Scripts'],
      image: autoformImage,
      // videoUrl: 'path/to/autoform-demo.mp4',
      // gifUrl: 'path/to/autoform-demo.gif',
      liveUrl: 'https://autoformx-onboarding.vercel.app/',
      // githubUrl: '#',
      status: 'completed', // 'completed', 'ongoing', 'archived'
      caseStudy: {
        challenge: 'Users were spending excessive time filling out repetitive forms across multiple websites, leading to frustration and decreased productivity. Manual form filling was error-prone and time-consuming, especially for users who frequently applied for jobs, filled out applications, or completed registrations.',
        approach: 'I developed a Chrome extension using WXT framework that intelligently stores and retrieves user data. The solution includes secure data encryption, cross-site form detection, and a user-friendly dashboard for managing saved information. I implemented a smart matching algorithm that identifies form fields and auto-populates them with relevant data, reducing user effort significantly.',
        technologies: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hooks'],
          backend: ['MongoDB', 'RESTful APIs', 'JWT Authentication'],
          extension: ['WXT Framework', 'Chrome Extension API', 'Content Scripts', 'Background Workers'],
          payment: ['Paystack Integration'],
          other: ['Data Encryption', 'Local Storage API', 'Chrome Storage API']
        },
        results: [
          { metric: '80%', description: 'Reduction in form-filling time' },
          { metric: '95%', description: 'Accuracy improvement in data entry' },
          { metric: '1000+', description: 'Active users within first month' },
          { metric: '4.8/5', description: 'Average user rating' }
        ],
        impact: 'AutoformX has transformed how users interact with web forms, saving thousands of hours collectively. The extension has been particularly valuable for job seekers and professionals who frequently complete applications, resulting in positive user feedback and organic growth.',
        lessons: 'This project taught me the importance of user privacy and data security in browser extensions. I learned to balance functionality with security, implementing robust encryption while maintaining a seamless user experience. The project also highlighted the value of iterative user feedback in refining the auto-fill algorithm.'
      }
    },
    {
      title: 'TicketEase',
      description: 'A comprehensive ticket management system that streamlines support workflows and improves resolution times through intelligent categorization and tracking.',
      tech: ['Next.js', 'Tailwind CSS', 'Typescript', 'MongoDB', 'NextAuth.js', 'Email Integration'],
      image: ticketImage,
      // videoUrl: 'path/to/ticket-demo.mp4',
      // gifUrl: 'path/to/ticket-demo.gif',
      liveUrl: 'https://ticket-ease-two.vercel.app/',
      githubUrl: 'https://github.com/NeverKnewNoble/TicketEase',
      status: 'completed',
      caseStudy: {
        challenge: 'Support teams were struggling with ticket organization, leading to delayed responses and unresolved issues. There was no centralized system to track ticket status, assign priorities, or measure team performance. Customer satisfaction was declining due to poor response times and lack of visibility into issue resolution.',
        approach: 'I built a full-stack ticket management system with role-based access control, real-time updates, and intelligent ticket categorization. The system includes automated email notifications, priority assignment based on keywords, and comprehensive analytics dashboards. I implemented a clean, intuitive interface that reduces training time and improves team efficiency.',
        technologies: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Server Components'],
          backend: ['MongoDB', 'Mongoose ODM', 'Next.js API Routes'],
          authentication: ['NextAuth.js', 'JWT Tokens', 'Session Management'],
          features: ['Email Integration (Nodemailer)', 'Real-time Updates', 'File Uploads', 'Search & Filtering'],
          other: ['Role-Based Access Control', 'Analytics Dashboard', 'Export Functionality']
        },
        results: [
          { metric: '60%', description: 'Faster ticket resolution times' },
          { metric: '45%', description: 'Reduction in average response time' },
          { metric: '85%', description: 'Improvement in customer satisfaction scores' },
          { metric: '3x', description: 'Increase in tickets handled per agent' }
        ],
        impact: 'TicketEase has significantly improved support team productivity and customer satisfaction. Teams can now track metrics, identify bottlenecks, and respond to customers more efficiently. The system has been adopted by multiple teams, demonstrating its scalability and effectiveness.',
        lessons: 'This project reinforced the importance of user-centered design in enterprise tools. I learned to balance feature richness with simplicity, ensuring the system remains intuitive as it scales. The project also taught me valuable lessons about database optimization for high-volume ticket systems and the importance of real-time updates in collaborative environments.'
      }
    },
    {
      title: 'Linkerex',
      description: 'A comprehensive job search platform connecting students with internships, part-time, and full-time opportunities through intelligent matching and streamlined applications.',
      tech: ['Next.js', 'Tailwind CSS', 'Javascript', 'MongoDB', 'Search Algorithms', 'Email Notifications'],
      image: linkrexImage,
      // videoUrl: 'path/to/linkrex-demo.mp4',
      // gifUrl: 'path/to/linkrex-demo.gif',
      liveUrl: 'https://linkerex.vercel.app/',
      // githubUrl: '#',
      status: 'completed', // Project completed
      caseStudy: {
        challenge: 'Students were struggling to find relevant job opportunities, spending hours browsing multiple job boards with poor filtering and matching capabilities. Employers also faced challenges in reaching qualified candidates efficiently. There was a clear need for a platform that could intelligently match students with opportunities based on skills, location, and preferences.',
        approach: 'I developed a job search platform with advanced filtering, intelligent job matching algorithms, and a streamlined application process. The system includes user profiles, resume management, application tracking, and employer dashboards. I implemented search functionality that considers multiple factors including skills, location, job type, and salary expectations to provide highly relevant results.',
        technologies: {
          frontend: ['Next.js', 'JavaScript', 'Tailwind CSS', 'React Context API'],
          backend: ['MongoDB', 'Mongoose', 'Next.js API Routes'],
          search: ['Full-text Search', 'Filtering Algorithms', 'Sorting Algorithms'],
          features: ['User Profiles', 'Resume Upload', 'Application Tracking', 'Email Notifications'],
          other: ['Job Matching Algorithm', 'Employer Dashboard', 'Analytics', 'Admin Panel']
        },
        results: [
          { metric: '500+', description: 'Active job seekers' },
          { metric: '200+', description: 'Listed opportunities' },
          { metric: '70%', description: 'Match accuracy rate' },
          { metric: 'Ongoing', description: 'Continuous improvements based on user feedback' }
        ],
        impact: 'Linkerex is actively helping students discover opportunities that align with their career goals. The platform has facilitated hundreds of successful connections between students and employers. User feedback has been positive, with particular appreciation for the intuitive interface and relevant job matches.',
        lessons: 'This ongoing project has taught me the value of iterative development and user feedback. I\'ve learned to prioritize features based on actual user needs rather than assumptions. The project continues to evolve, teaching me about maintaining and scaling applications while adding new features. It has also highlighted the importance of search algorithm optimization for user satisfaction.'
      }
    }
  ]

  // Refs for GSAP animation
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Open case study modal
  const openCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close case study modal
  const closeCaseStudy = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // GSAP animation for modal and keyboard support
  useEffect(() => {
    if (isModalOpen && modalRef.current && overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
      );
    }
  }, [isModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeCaseStudy();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Image loading handler for performance
  useEffect(() => {
    const images = document.querySelectorAll('.project-card img');
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad); // Count errors too
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  // Card hover animations and entrance animations
  useEffect(() => {
    if (!imagesLoaded) return;

    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0) return;

    // Entrance animation for cards
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Hover animations for each card
    const cleanupFunctions = cards.map((card) => {
      const cardElement = card;
      const imageElement = cardElement.querySelector('.project-image-container');
      
      // 3D tilt effect on mouse move
      const handleMouseMove = (e) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        gsap.to(cardElement, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: 'power2.out',
        });

        // Parallax effect on image
        if (imageElement) {
          gsap.to(imageElement, {
            y: (y - centerY) * 0.1,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(cardElement, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
        });

        if (imageElement) {
          gsap.to(imageElement, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      };

      cardElement.addEventListener('mousemove', handleMouseMove);
      cardElement.addEventListener('mouseleave', handleMouseLeave);

      // Return cleanup function
      return () => {
        cardElement.removeEventListener('mousemove', handleMouseMove);
        cardElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Cleanup all event listeners
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [imagesLoaded, projects.length]);

  // Horizontal scroll animation on mount - only activate if 4+ projects
  useEffect(() => {
    // Only enable horizontal scroll if there are 4 or more projects
    if (projects.length < 4) return;

    if (!sectionRef.current || !containerRef.current || !cardsContainerRef.current || !imagesLoaded) return;

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      const cardsContainer = cardsContainerRef.current;
      const projectCards = gsap.utils.toArray('.project-card');

      if (projectCards.length === 0) return;

      // Calculate total horizontal distance to scroll through all cards
      const totalWidth = cardsContainer.scrollWidth - container.offsetWidth;
      
      // Only proceed if there's actually content to scroll
      if (totalWidth <= 0) return;
      
      // Calculate scroll distance: use viewport height multiplied by number of cards
      // This ensures each card gets adequate scroll time before moving to next section
      const viewportHeight = window.innerHeight;
      const scrollMultiplier = projectCards.length * 2; // 2 viewport heights per card

      // Animate the cards container horizontally
      gsap.to(cardsContainer, {
        x: -totalWidth,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: section,
          start: "center center",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (projectCards.length - 1),
            duration: { min: 0.2, max: 0.1 },
            delay: 0.0
          },
          // End after scrolling enough to cover all cards
          end: () => `+=${viewportHeight * scrollMultiplier}`
        }
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length, imagesLoaded]);

  return (
    <section id="projects" ref={sectionRef} className='min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20'>
      {/* Section Header */}
      <div className='w-full max-w-7xl mb-10 md:mb-15'>
        <div className='flex justify-center mb-4'>
          <button className='px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-white text-sm font-medium'>
            Portfolio
          </button>
        </div>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight'>
          Featured React Projects & Full-Stack Solutions
        </h2>
        <p className='text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto font-light'>
          Explore my latest work - innovative React projects and full-stack solutions that combine creativity with technical excellence. Specializing in modern web development, 3D experiences, and scalable applications.
        </p>
      </div>

      {/* Projects Container */}
      <div ref={containerRef} className={`p-10 mb-20 min-h-[600px] w-full max-w-7xl ${projects.length >= 4 ? 'overflow-hidden' : 'overflow-visible'}`}>
        <div ref={cardsContainerRef} className={`flex gap-8 md:gap-10 pb-4 ${projects.length >= 4 ? '' : 'justify-center flex-wrap'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className='project-card bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors duration-300 group shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px] will-change-transform'
              style={{ transformStyle: 'preserve-3d' }}
            >
            {/* Project Image/Video Container */}
            <div className='project-image-container w-full h-64 bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden will-change-transform'>
              {/* Support for video demos */}
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover'
                  onLoadStart={() => setImagesLoaded(true)}
                />
              ) : project.gifUrl ? (
                <img 
                  src={project.gifUrl} 
                  alt={`${project.title} - Interactive demo showcasing ${project.description.toLowerCase()}`}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              ) : (
                <>
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.description} - Full-stack web development project by Noble`}
                    className='w-full h-full object-cover transition-transform duration-500'
                    loading='lazy'
                    decoding='async'
                  />
                  {/* Overlay gradient for better text readability */}
                  <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </>
              )}
              {/* Hover overlay effect */}
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300' />
            </div>

            {/* Project Content */}
            <div className='p-6 md:p-8'>
              <div className='flex items-start justify-between mb-3'>
                <h3 className='text-2xl md:text-3xl font-bold text-white'>
                  {project.title}
                </h3>
                {project.status === 'ongoing' && (
                  <span className='px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-medium flex items-center gap-1'>
                    <Clock className='w-3 h-3' />
                    Ongoing
                  </span>
                )}
              </div>
              <p className='text-gray-400 text-sm md:text-base mb-6 leading-relaxed'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1 rounded-full bg-black border border-gray-800 text-gray-300 text-xs md:text-sm'
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className='px-3 py-1 rounded-full bg-black border border-gray-800 text-gray-400 text-xs md:text-sm'>
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className='flex flex-col gap-3'>
                <button
                  onClick={() => openCaseStudy(project)}
                  className='flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-white font-medium text-sm hover:border-gray-600 hover:bg-gray-800 transition-colors duration-200 w-full'
                >
                  <BookOpen className='w-4 h-4' />
                  View Case Study
                </button>
                <div className='flex gap-3'>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors duration-200 flex-1'
                  >
                    <ExternalLink className='w-4 h-4' />
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-800 text-white font-medium text-sm hover:border-gray-700 hover:bg-gray-900 transition-colors duration-200'
                    >
                      <Github className='w-4 h-4' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {isModalOpen && selectedProject && (
        <div
          ref={overlayRef}
          className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
          onClick={closeCaseStudy}
        >
          <div
            ref={modalRef}
            className='bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className='sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-start justify-between z-10'>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-2'>
                  <h2 className='text-3xl md:text-4xl font-bold text-white'>
                    {selectedProject.title}
                  </h2>
                  {selectedProject.status === 'ongoing' && (
                    <span className='px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-medium flex items-center gap-1'>
                      <Clock className='w-3 h-3' />
                      Ongoing
                    </span>
                  )}
                </div>
                <p className='text-gray-400 text-base md:text-lg'>
                  {selectedProject.description}
                </p>
              </div>
              <button
                onClick={closeCaseStudy}
                className='ml-4 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200'
              >
                <X className='w-6 h-6 text-gray-400' />
              </button>
            </div>

            {/* Modal Content */}
            <div className='p-6 md:p-8 space-y-8'>
              {/* The Challenge */}
              <div className='case-study-section'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center justify-center'>
                    <Target className='w-5 h-5 text-red-400' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white'>
                    The Challenge
                  </h3>
                </div>
                <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.challenge}
                </p>
              </div>

              {/* My Approach */}
              <div className='case-study-section'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center'>
                    <Lightbulb className='w-5 h-5 text-blue-400' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white'>
                    My Approach
                  </h3>
                </div>
                <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.approach}
                </p>
              </div>

              {/* Technologies Used */}
              <div className='case-study-section'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center'>
                    <Code className='w-5 h-5 text-purple-400' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white'>
                    Technologies Used
                  </h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {Object.entries(selectedProject.caseStudy.technologies).map(([category, techs]) => (
                    <div key={category} className='space-y-2'>
                      <h4 className='text-lg font-semibold text-white capitalize'>
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {techs.map((tech, idx) => (
                          <span
                            key={idx}
                            className='px-3 py-1 rounded-full bg-black border border-gray-800 text-gray-300 text-sm'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Impact */}
              <div className='case-study-section'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center'>
                    <TrendingUp className='w-5 h-5 text-green-400' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white'>
                    Results & Impact
                  </h3>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
                  {selectedProject.caseStudy.results.map((result, idx) => (
                    <div
                      key={idx}
                      className='bg-black border border-gray-800 rounded-xl p-4'
                    >
                      <div className='text-3xl font-bold text-white mb-1'>
                        {result.metric}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
                <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.impact}
                </p>
              </div>

              {/* Lessons Learned */}
              <div className='case-study-section'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center'>
                    <BookOpen className='w-5 h-5 text-yellow-400' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white'>
                    Lessons Learned
                  </h3>
                </div>
                <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                  {selectedProject.caseStudy.lessons}
                </p>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-wrap gap-4 pt-4 border-t border-gray-800'>
                <a
                  href={selectedProject.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200'
                >
                  <ExternalLink className='w-5 h-5' />
                  View Live Demo
                </a>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-800 text-white font-medium hover:border-gray-700 hover:bg-gray-800 transition-colors duration-200'
                  >
                    <Github className='w-5 h-5' />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

