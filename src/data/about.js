import {
  Code,
  Zap,
  Palette,
  Smartphone,
  Globe,
  Database,
  Users,
  MessageSquare,
  GitBranch,
  Award,
  Target,
  TrendingUp,
} from 'lucide-react'

// Personal bio and achievements data
export const bioData = {
  yearsExperience: '3', // Update with your actual years
  keyAchievement: 'Developed systems used by thousands of users',
  journey:
    'From mastering JavaScript fundamentals to building advanced 3D web experiences with React Three Fiber and GSAP',
  bio: "I'm a passionate full-stack developer who transforms complex ideas into elegant, user-friendly applications. My journey in software development has been driven by a constant curiosity to learn and push the boundaries of what's possible on the web.",
  focus:
    'I specialize in creating seamless digital experiences that combine cutting-edge technology with intuitive design, always prioritizing performance and user satisfaction.',
}

// Combined skills data - unified design with images
export const allSkills = [
  // Technical Skills
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern frameworks and technologies, from frontend to backend.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'Expert in React, Next.js, Three.js, and modern web standards to create cutting-edge digital experiences.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Database,
    title: 'Backend Solutions',
    description: 'Designing robust server-side architectures and APIs that power scalable applications.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed and efficiency, ensuring fast load times and smooth user experiences.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that prioritize user experience and modern design principles.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Developing mobile-first applications that work seamlessly across all devices and screen sizes.',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
  },
  // Soft Skills
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Experienced in working with cross-functional teams, pair programming, and contributing to open-source projects.',
    category: 'soft',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: MessageSquare,
    title: 'Client Communication',
    description: 'Skilled at translating technical concepts into clear, actionable insights for stakeholders.',
    category: 'soft',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: GitBranch,
    title: 'Agile Methodologies',
    description: 'Proficient in Scrum and Kanban workflows. Experienced with sprint planning and iterative development.',
    category: 'soft',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Analytical thinker who breaks down complex challenges into manageable solutions with systematic approaches.',
    category: 'soft',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Committed to staying current with industry trends and emerging technologies.',
    category: 'soft',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Award,
    title: 'Quality Focus',
    description: 'Dedicated to writing clean, maintainable code and following best practices.',
    category: 'soft',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80',
  },
]
