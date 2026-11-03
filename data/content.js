/**
 * Portfolio Content Data
 * Central source of truth for bio, experience, skills, projects, and social links.
 */
const portfolioData = {
  profile: {
    name: "Reza Julian",
    headline: "Full-Stack Developer & Software Engineer",
    shortBio: "Membangun aplikasi web modern yang cepat, responsif, dan mudah diakses dengan fokus pada clean code dan performa optimal.",
    about: "Saya adalah seorang pengembang perangkat lunak dengan pengalaman dalam membangun solusi web ujung-ke-ujung (end-to-end). Terbiasa merancang antarmuka pengguna yang intuitif, arsitektur frontend yang terstruktur rapi, serta backend API yang andal dan aman.",
    avatar: "assets/images/profile.svg",
    location: "Indonesia",
    status: "Available for opportunities",
    resumeUrl: "#",
    contact: {
      email: "rhezandroid@gmail.com"
    }
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/julianreza",
      icon: "assets/icons/github.svg"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/julianreza",
      icon: "assets/icons/linkedin.svg"
    },
    {
      platform: "Email",
      url: "mailto:rhezandroid@gmail.com",
      icon: "assets/icons/email.svg"
    }
  ],
  experience: [
    {
      role: "Senior Frontend / Full-Stack Engineer",
      company: "Tech Solutions & Digital Studio",
      period: "2023 - Sekarang",
      description: "Memimpin pengembangan aplikasi web interaktif, mengoptimalkan Web Vitals, serta merancang sistem komponen UI yang reusable dan modular."
    },
    {
      role: "Web Developer",
      company: "Freelance & Agency Projects",
      period: "2021 - 2023",
      description: "Mengembangkan website portofolio, landing page konversi tinggi, dan dashboard internal menggunakan HTML5, modern CSS, dan JavaScript."
    }
  ],
  skills: {
    frontend: [
      { name: "HTML5 & Semantic Markup", level: "Advanced" },
      { name: "Modern CSS & Responsive Design", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "React / Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" }
    ],
    backend: [
      { name: "Node.js & Express", level: "Intermediate" },
      { name: "Go (Golang)", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vite & Build Tools", level: "Intermediate" },
      { name: "Performance & Accessibility (a11y)", level: "Advanced" },
      { name: "Figma / UI Design", level: "Intermediate" }
    ]
  },
  projects: [
    {
      id: "project-analytics-dashboard",
      title: "CloudMetrics - Analytics Dashboard",
      description: "Dashboard analitik real-time yang menyajikan metrik performa server, visualisasi trafik pengguna, dan laporan performa sistem.",
      technologies: ["JavaScript", "HTML5", "CSS Grid", "Chart.js"],
      image: "assets/images/projects/project-1.svg",
      repoUrl: "https://github.com/julianreza/cloudmetrics-dashboard",
      demoUrl: "https://julianreza.github.io/cloudmetrics-dashboard"
    },
    {
      id: "project-ecommerce-storefront",
      title: "Aura Commerce - Modern Storefront",
      description: "Katalog belanja daring dengan pencarian instan, filter kategori, keranjang belanja dinamis, dan tata letak responsif ramah seluler.",
      technologies: ["HTML5", "CSS Flexbox", "JavaScript", "LocalStorage API"],
      image: "assets/images/projects/project-2.svg",
      repoUrl: "https://github.com/julianreza/aura-commerce",
      demoUrl: "https://julianreza.github.io/aura-commerce"
    },
    {
      id: "project-task-manager",
      title: "FlowDesk - Task Management App",
      description: "Aplikasi manajemen tugas produktivitas dengan fitur drag-and-drop kanban, label prioritas, dan penyimpanan status offline.",
      technologies: ["HTML5", "CSS Variables", "JavaScript", "IndexedDB"],
      image: "assets/images/projects/project-3.svg",
      repoUrl: "https://github.com/julianreza/flowdesk-app",
      demoUrl: "https://julianreza.github.io/flowdesk-app"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
