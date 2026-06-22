import { getIconifyUrl, getDeviconUrl } from '../utils/icons'

// Languages data with logo URLs and descriptions
export const languages = [
  {
    name: 'TypeScript',
    logo: getDeviconUrl('typescript'),
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    proficiency: 'Proficient',
    description: 'Strongly typed JavaScript for building robust applications',
  },
  {
    name: 'JavaScript',
    logo: getDeviconUrl('javascript'),
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/30',
    proficiency: 'Proficient',
    description: 'Core language for web development and interactive experiences',
  },
  {
    name: 'Python',
    logo: getDeviconUrl('python'),
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/30',
    proficiency: 'Little Versed',
    description: 'Exploring backend development and automation scripts',
  },
  {
    name: 'SQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'text-blue-300',
    bgColor: 'bg-blue-300/10',
    borderColor: 'border-blue-300/30',
    proficiency: 'Proficient',
    description: 'Structured query language for managing and querying relational databases',
  },
  {
    name: 'Git',
    logo: getDeviconUrl('git'),
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/30',
    proficiency: 'Proficient',
    description: 'Version control and collaborative development workflows',
  },
  {
    name: 'HTML',
    logo: getDeviconUrl('html5'),
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    proficiency: 'Proficient',
    description: 'Markup language for structuring web content and building semantic layouts',
  },
  {
    name: 'CSS',
    logo: getDeviconUrl('css3'),
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    proficiency: 'Proficient',
    description: 'Styling language for designing beautiful and responsive user interfaces',
  },
]

// Frameworks and Tools data with logo URLs and descriptions
export const frameworks = [
  {
    name: 'Next.js',
    logo: getIconifyUrl('skill-icons:nextjs-light'),
    color: 'text-white',
    bgColor: 'bg-gray-700/20',
    borderColor: 'border-gray-600/30',
    description: 'Full-stack React framework for production-ready applications',
  },
  {
    name: 'Vue.js',
    logo: getDeviconUrl('vuejs'),
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    description: 'Progressive JavaScript framework for building user interfaces',
  },
  {
    name: 'Tailwind CSS',
    logo: getDeviconUrl('tailwindcss'),
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
    description: 'Utility-first CSS framework for rapid UI development',
  },
  {
    name: 'Vite',
    logo: getIconifyUrl('skill-icons:vite-light'),
    color: 'text-white',
    bgColor: 'bg-white/10',
    borderColor: 'border-white/30',
    description: 'Next-generation frontend build tool with instant HMR',
  },
  {
    name: 'Express.js',
    logo: getDeviconUrl('express'),
    color: 'text-gray-300',
    bgColor: 'bg-gray-700/20',
    borderColor: 'border-gray-600/30',
    description: 'Fast, unopinionated web framework for Node.js backends',
  },
]

// Libraries data with logo URLs and descriptions
export const libraries = [
  {
    name: 'React',
    logo: getDeviconUrl('react'),
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
    description: 'JavaScript library for building dynamic, component-based user interfaces',
  },
  {
    name: 'Three.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/30',
    description: 'JavaScript library for creating immersive 3D web experiences and visualizations',
  },
  {
    name: 'React Three Fiber',
    logo: getIconifyUrl('skill-icons:react-dark'),
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
    description: 'React renderer for Three.js that brings declarative syntax to 3D graphics',
  },
  {
    name: 'React Three Drei',
    logo: getIconifyUrl('skill-icons:react-dark'),
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    description: 'Useful helpers and abstractions for React Three Fiber to simplify 3D development',
  },
  {
    name: 'GSAP',
    logo: getIconifyUrl('mdi:animation-play'),
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/30',
    description: 'Professional-grade animation library for creating smooth, performant web animations',
  },
  {
    name: 'Lenis',
    logo: getIconifyUrl('mdi:scroll'),
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    description: 'Smooth scrolling library that provides buttery-smooth scroll experiences',
  },
  {
    name: 'Lucide',
    logo: getIconifyUrl('simple-icons:lucide'),
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    borderColor: 'border-pink-400/30',
    description: 'Beautiful & consistent icon toolkit with 1000+ icons for React and other frameworks',
  },
]

// Databases data with logo URLs and descriptions
export const databases = [
  {
    name: 'MongoDB',
    logo: getDeviconUrl('mongodb'),
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/30',
    description: 'NoSQL database for flexible, scalable data storage',
  },
  {
    name: 'PostgreSQL',
    logo: getDeviconUrl('postgresql'),
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    description: 'Advanced relational database with powerful features',
  },
  {
    name: 'Supabase',
    logo: getIconifyUrl('skill-icons:supabase-light'),
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    description: 'Open-source Firebase alternative with PostgreSQL backend and real-time features',
  },
]

// AI tooling — assistants and prompt-driven workflows used day to day
export const aiTools = [
  {
    name: 'Claude',
    logo: getIconifyUrl('simple-icons:claude'),
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/30',
    description: 'AI pair-programmer for building, refactoring, and reasoning through code',
  },
  {
    name: 'Cursor',
    logo: getIconifyUrl('simple-icons:cursor'),
    color: 'text-gray-300',
    bgColor: 'bg-gray-400/10',
    borderColor: 'border-gray-400/30',
    description: 'AI-first code editor for fast, in-context edits across a codebase',
  },
  {
    name: 'ChatGPT',
    logo: getIconifyUrl('simple-icons:openai'),
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    description: 'Prompt-driven assistant for prototyping, debugging, and exploration',
  },
  {
    name: 'GitHub Copilot',
    logo: getIconifyUrl('simple-icons:githubcopilot'),
    color: 'text-blue-300',
    bgColor: 'bg-blue-300/10',
    borderColor: 'border-blue-300/30',
    description: 'Inline code completion and suggestions inside the editor',
  },
  {
    name: 'v0',
    logo: getIconifyUrl('simple-icons:v0'),
    color: 'text-gray-200',
    bgColor: 'bg-gray-400/10',
    borderColor: 'border-gray-400/30',
    description: 'AI UI generation for quickly scaffolding React + Tailwind interfaces',
  },
  {
    name: 'Prompt Engineering',
    logo: getIconifyUrl('mdi:message-text-outline'),
    color: 'text-purple-300',
    bgColor: 'bg-purple-300/10',
    borderColor: 'border-purple-300/30',
    description: 'Designing effective prompts and AI workflows to ship faster',
  },
]

// Combined tech stack rendered as a single list of pills
export const techStack = [
  ...languages,
  ...frameworks,
  ...libraries,
  ...databases,
  ...aiTools,
]
