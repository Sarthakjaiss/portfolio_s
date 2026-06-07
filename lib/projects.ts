export interface ProjectDetail {
  id: string
  title: string
  year: string
  description: string
  about: string
  githubUrl: string
  tags: string[]
  features: string[]
  images: string[]
}

export const projectsData: ProjectDetail[] = [
  {
    id: "fitquest",
    title: "FitQuest",
    year: "2024",
    description: "AI-powered fitness application that creates personalized workout and diet plans using machine learning algorithms.",
    about: "FitQuest is an innovative fitness platform leveraging AI and machine learning to deliver personalized workout routines and nutrition plans. Users receive customized recommendations based on their fitness goals, current fitness level, and preferences. The application tracks progress, provides real-time feedback, and adapts plans accordingly. Features include a comprehensive exercise library, meal planning, progress analytics, and community challenges. Perfect for fitness enthusiasts seeking intelligent, adaptive workout guidance tailored to their unique journey.",
    githubUrl: "https://github.com/Sarthakjaiss/fitquest",
    tags: ["React", "Node.js", "MongoDB", "AI/ML", "TypeScript"],
    features: [
      "Personalized workout plans",
      "AI diet recommendations",
      "Progress tracking",
      "Social features",
      "Real-time analytics",
      "Mobile responsive"
    ],
    images: [
      "/projects/fitquest-1.jpg",
      "/projects/fitquest-2.jpg",
      "/projects/fitquest-3.jpg",
      "/projects/fitquest-4.jpg",
      "/projects/fitquest-5.jpg",
      "/projects/fitquest-6.jpg"
    ]
  },
  {
    id: "bella-vista",
    title: "Bella Vista",
    year: "2024",
    description: "Elegant restaurant website featuring online reservations, menu showcase, and seamless user experience.",
    about: "Bella Vista is a sophisticated restaurant web platform designed to enhance customer engagement and streamline operations. Features include an interactive digital menu with detailed item descriptions, online reservation system with real-time availability, beautiful image gallery showcasing ambiance and dishes, and integrated contact management. The responsive design ensures perfect display on all devices. Built with modern web technologies, it provides an elegant user experience that reflects the restaurant's premium quality and hospitality standards.",
    githubUrl: "https://github.com/Sarthakjaiss/bella-vista",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "UI/UX"],
    features: [
      "Online reservations",
      "Interactive menu",
      "Gallery showcase",
      "Contact integration",
      "Responsive design",
      "SEO optimized"
    ],
    images: [
      "/projects/bella-vista-1.jpg",
      "/projects/bella-vista-2.jpg",
      "/projects/bella-vista-3.jpg",
      "/projects/bella-vista-4.jpg",
      "/projects/bella-vista-5.jpg",
      "/projects/bella-vista-6.jpg"
    ]
  },
  {
    id: "task-manager",
    title: "Task Manager",
    year: "2023",
    description: "Full-featured productivity application with CRUD operations, categories, and responsive design.",
    about: "Task Manager is a modern productivity tool designed to help users organize, prioritize, and track tasks efficiently. It provides complete CRUD functionality for task management with category organization, priority levels, and due date management. The application includes search and filtering capabilities, progress visualization, and local storage persistence for seamless data retention. Built with React and TypeScript, it offers a clean, intuitive interface that works flawlessly on desktop and mobile devices. Perfect for personal and professional task management.",
    githubUrl: "https://github.com/Sarthakjaiss/task-manager",
    tags: ["React", "TypeScript", "Tailwind", "LocalStorage"],
    features: [
      "Task CRUD operations",
      "Category management",
      "Due date reminders",
      "Search and filter",
      "Progress tracking",
      "Local persistence"
    ],
    images: [
      "/projects/task-manager-1.jpg",
      "/projects/task-manager-2.jpg",
      "/projects/task-manager-3.jpg",
      "/projects/task-manager-4.jpg",
      "/projects/task-manager-5.jpg",
      "/projects/task-manager-6.jpg"
    ]
  },
  {
    id: "password-manager",
    title: "Password Manager",
    year: "2023",
    description: "Secure password management application with encryption, password generation, and cloud sync capabilities.",
    about: "Password Manager is a robust security application providing enterprise-grade password management. Features AES encryption for maximum security, intelligent password generator with customizable parameters, and secure vault for credential storage. Users can synchronize passwords across devices, manage multiple accounts, and organize credentials by categories. The application includes security audit tools, breach detection alerts, and automatic password strength assessment. Built with React and Node.js, it ensures your sensitive data remains protected while maintaining accessibility and ease of use.",
    githubUrl: "https://github.com/Sarthakjaiss/password-manager",
    tags: ["React", "Node.js", "MongoDB", "Encryption"],
    features: [
      "AES encryption",
      "Password generator",
      "Secure vault",
      "Cross-device sync",
      "Security audit",
      "Breach detection"
    ],
    images: [
      "/projects/password-manager-1.jpg",
      "/projects/password-manager-2.jpg",
      "/projects/password-manager-3.jpg",
      "/projects/password-manager-4.jpg",
      "/projects/password-manager-5.jpg",
      "/projects/password-manager-6.jpg"
    ]
  }
]

export function getProjectById(id: string): ProjectDetail | undefined {
  return projectsData.find(project => project.id === id)
}
