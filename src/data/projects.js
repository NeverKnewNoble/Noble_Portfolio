// Import project images
import autoformImage from '../assets/images/autoform.png'
import ticketImage from '../assets/images/ticket.png'

// New project screenshots
import fluxAdsImage from '../assets/images/flux-ads.png'
import ellenEffectImage from '../assets/images/ellen-effect.png'
import kasacartImage from '../assets/images/kasacart.png'
import nakobiGrillImage from '../assets/images/nakobi-grill.png'
import joshobPmsImage from '../assets/images/joshob-pms.png'
import wmsImage from '../assets/images/wms.png'

// Projects data with concise case study information
export const projects = [
  {
    title: 'Flux Ads',
    description: 'My AI ads venture — an AI-powered platform that turns a product and a prompt into high-converting ad creatives and marketing copy in minutes.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Generative AI', 'Prompt Engineering'],
    image: fluxAdsImage,
    liveUrl: 'https://flux-ads.vercel.app/',
    status: 'completed',
    caseStudy: {
      challenge: 'Brands and creators need a constant flow of fresh ad creatives, but hiring designers or agencies is slow and expensive.',
      approach: 'I built Flux Ads as an AI-first platform that combines generative image models with on-brand templated layouts, turning a product and a prompt into ready-to-run ad creatives and copy.',
      technologies: {
        frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        ai: ['Generative Image Models', 'LLM Copywriting', 'Prompt Engineering'],
        other: ['Vercel', 'Responsive Design'],
      },
      results: [
        { metric: 'Minutes', description: 'From prompt to finished ad creative' },
        { metric: 'AI-native', description: 'Creative and copy generated end to end' },
      ],
      impact: 'Flux Ads lets businesses produce on-brand ad content on demand, cutting the cost and turnaround of traditional creative production.',
      lessons: 'Building an AI product taught me to design tight prompt pipelines and guardrails so the output stays consistent and on-brand.',
    },
  },
  {
    title: 'The Ellen Effect',
    description: 'A brand and booking site for a lash, hair and braiding studio and training academy — service menus, a transformation gallery and a guided booking flow.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Booking Flow', 'Mobile Money'],
    image: ellenEffectImage,
    liveUrl: 'https://the-ellen-effect.vercel.app/',
    status: 'completed',
    caseStudy: {
      challenge: 'A growing beauty studio was handling bookings and course sign-ups over DMs, with no central place to show services, pricing or policies.',
      approach: 'I designed an elegant brand site with categorized service menus, a before/after gallery, course enrollment and a step-by-step booking workflow with clear deposit and cancellation policies.',
      technologies: {
        frontend: ['Next.js', 'React', 'Tailwind CSS'],
        features: ['Service Catalog', 'Booking Flow', 'Course Enrollment', 'Gallery'],
        payments: ['Mobile Money (MoMo)', 'Card Payments'],
      },
      results: [
        { metric: 'Live', description: 'Public booking and brand presence' },
        { metric: '2-in-1', description: 'Client services and training academy' },
      ],
      impact: 'The studio now has a professional storefront that showcases work, explains pricing and policies, and channels clients into a clear booking process.',
      lessons: 'Reinforced how much a clear, opinionated booking flow and transparent pricing reduce back-and-forth for service businesses.',
    },
  },
  {
    title: 'KasaCart',
    description: 'A commerce platform that gives social-media sellers a single storefront link plus an order and inventory dashboard — replacing scattered DM sales.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Mobile Money', 'Inventory'],
    image: kasacartImage,
    liveUrl: 'https://kasacart.vercel.app/',
    status: 'completed',
    caseStudy: {
      challenge: 'Sellers on WhatsApp, Instagram and TikTok lose track of orders and stock across chats, leading to overselling and lost sales data.',
      approach: 'I built KasaCart so a creator can spin up a storefront, share one shop link, and manage orders from creation to delivery with real-time stock and revenue analytics.',
      technologies: {
        frontend: ['Next.js', 'React', 'Tailwind CSS'],
        backend: ['Node.js', 'MongoDB', 'REST APIs'],
        features: ['Storefront Builder', 'Order Dashboard', 'Inventory Tracking', 'Analytics'],
        payments: ['Mobile Money', 'Bank Transfer', 'Cash on Delivery'],
      },
      results: [
        { metric: '1 link', description: 'Storefront and dashboard in one' },
        { metric: 'Real-time', description: 'Stock and order tracking' },
      ],
      impact: 'KasaCart turns chaotic social selling into a structured shop, helping merchants capture every order and understand what sells.',
      lessons: 'Learned to model order lifecycles and inventory carefully so the dashboard stays a reliable single source of truth.',
    },
  },
  {
    title: 'Nakobi Grill',
    description: 'A cloud POS system for high-volume grill restaurants — smart order management, a live table floor map, a kitchen display and real-time sales analytics.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Real-time', 'POS', 'Analytics'],
    image: nakobiGrillImage,
    liveUrl: 'https://nakobi-grill.vercel.app/',
    status: 'completed',
    caseStudy: {
      challenge: 'Busy grill restaurants juggle dine-in, takeaway and delivery orders with little visibility between front-of-house and the kitchen.',
      approach: 'I built a POS platform with smart order routing, a live floor map, a colour-coded kitchen display system, multi-payment checkout and a live analytics dashboard.',
      technologies: {
        frontend: ['Next.js', 'React', 'Tailwind CSS'],
        features: ['Order Management', 'Table Floor Map', 'Kitchen Display System', 'Inventory Alerts'],
        payments: ['Cash', 'Card', 'Mobile Pay', 'QR Codes'],
        other: ['Real-time Sync', 'Analytics Dashboard'],
      },
      results: [
        { metric: 'Real-time', description: 'Front-of-house ↔ kitchen sync' },
        { metric: '3 modes', description: 'Dine-in, takeaway and delivery' },
      ],
      impact: 'Nakobi Grill keeps orders flowing smoothly from table to kitchen to payment, with live data for smarter decisions.',
      lessons: 'Designing the kitchen display and floor map taught me how critical real-time state and clear status cues are under pressure.',
    },
  },
  {
    title: 'Joshob PMS',
    description: 'A project management system for a construction company — dashboards, progress tracking, photo documentation, safety reporting and a document manager.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Dashboards'],
    image: joshobPmsImage,
    liveUrl: 'https://joshob-pms.vercel.app/',
    status: 'completed',
    caseStudy: {
      challenge: 'A construction firm needed one place to coordinate projects, track progress and keep site documentation, photos and safety records organised.',
      approach: 'I built a PMS with a central dashboard, milestone and budget tracking, auto-tagged photo documentation, safety incident reporting and version-controlled document storage.',
      technologies: {
        frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        features: ['Dashboard', 'Progress Tracking', 'Analytics', 'Photo Management', 'Safety Reporting', 'Document Manager'],
      },
      results: [
        { metric: '1 hub', description: 'Projects, photos, docs and safety' },
        { metric: 'Field-ready', description: 'Built for on-site teams' },
      ],
      impact: 'The system gives the company clear visibility into project progress and keeps critical site records in one organised, searchable place.',
      lessons: 'Building for construction teams taught me to prioritise clarity and fast data entry for users working in the field.',
    },
  },
  {
    title: 'Joshob WMS',
    description: 'A warehouse and materials management system for construction sites — goods-received and requisition notes, stock audits, reorder alerts and role-based access across sites.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'RBAC', 'Inventory'],
    image: wmsImage,
    liveUrl: 'https://wms-display.vercel.app/',
    status: 'completed',
    caseStudy: {
      challenge: 'Materials moving across multiple construction sites were hard to track, causing stockouts, variance and no single source of truth.',
      approach: 'I built a WMS with Goods Received Notes, Materials Requisition Notes, cycle counts and variance tracking, smart reorder thresholds and role-based access for storekeepers, engineers and PMs.',
      technologies: {
        frontend: ['Next.js', 'React', 'Tailwind CSS'],
        backend: ['PostgreSQL', 'REST APIs'],
        features: ['GRN & MRN', 'Stock Audits', 'Reorder Alerts', 'Consumption Reports'],
        access: ['Role-Based Access Control'],
      },
      results: [
        { metric: '99.2%', description: 'Stock accuracy across sites' },
        { metric: 'Multi-site', description: 'Unified materials visibility' },
      ],
      impact: 'The platform gives the company one reliable view of materials across every site, cutting stockouts and surfacing reports managers actually open.',
      lessons: 'Reinforced the importance of transactional integrity and role-based workflows in operational tools.',
    },
  },
  {
    title: 'AutoformX',
    description: 'A lightweight Chrome extension that autofills forms with one click, dramatically reducing time spent on repetitive data entry.',
    tech: ['Next.js', 'Typescript', 'Tailwind CSS', 'WXT', 'MongoDB', 'Paystack', 'Chrome Extension API', 'Content Scripts'],
    image: autoformImage,
    liveUrl: 'https://autoformx-onboarding.vercel.app/',
    status: 'completed',
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
]
