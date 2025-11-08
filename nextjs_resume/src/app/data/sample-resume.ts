// Sample resume data for testing
import { Basics, Education, Skills, Work, Project, Languages, Certificates, Awards } from '../types/resume';

export const sampleBasics: Basics = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  url: "https://linkedin.com/in/johndoe",
  url2: "https://github.com/johndoe",
};

export const sampleEducation: Education[] = [
  {
    institution: "Massachusetts Institute of Technology",
    area: "Bachelor of Science in Computer Science",
    studyType: "Bachelor's Degree",
    startDate: "2018-09",
    endDate: "2022-05",
    score: "3.9/4.0",
    courses: ["Data Structures", "Algorithms", "Machine Learning", "Distributed Systems"],
  },
  {
    institution: "Stanford University",
    area: "Master of Science in Artificial Intelligence",
    studyType: "Master's Degree",
    startDate: "2022-09",
    endDate: "2024-05",
    score: "4.0/4.0",
    courses: ["Deep Learning", "Natural Language Processing", "Computer Vision"],
  },
];

export const sampleSkills: Skills[] = [
  {
    name: "Programming Languages",
    keywords: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"],
  },
  {
    name: "Frontend",
    keywords: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Backend",
    keywords: ["Node.js", "Express", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Tools & DevOps",
    keywords: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins"],
  },
];

export const sampleWork: Work[] = [
  {
    name: "Tech Giants Inc.",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    startDate: "2022-06",
    endDate: "",
    summary: "Lead full-stack development of cloud-based enterprise applications serving 10M+ users.",
    highlights: [
      "Architected and implemented microservices infrastructure reducing latency by 40%",
      "Led team of 5 engineers in developing RESTful APIs handling 1M+ requests/day",
      "Improved code quality through implementation of comprehensive testing strategy (95% coverage)",
      "Mentored junior developers and conducted technical interviews",
    ],
  },
  {
    name: "StartupXYZ",
    position: "Full Stack Developer",
    location: "New York, NY",
    startDate: "2020-01",
    endDate: "2022-05",
    summary: "Developed scalable web applications using modern JavaScript frameworks.",
    highlights: [
      "Built responsive React applications with 50K+ monthly active users",
      "Integrated third-party APIs and payment processing systems (Stripe, PayPal)",
      "Reduced page load time by 60% through optimization and lazy loading",
    ],
  },
];

export const sampleProjects: Project[] = [
  {
    name: "AI-Powered Task Manager",
    description: "Intelligent task management application using machine learning to predict task priorities and deadlines.",
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
    url: "https://github.com/johndoe/ai-task-manager",
    highlights: [
      "Implemented ML model achieving 87% accuracy in priority prediction",
      "Built real-time collaboration features using WebSockets",
      "Deployed to AWS with auto-scaling infrastructure",
    ],
  },
  {
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with inventory management and analytics dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
    url: "https://github.com/johndoe/ecommerce-platform",
    highlights: [
      "Processed $500K+ in transactions with 99.9% uptime",
      "Implemented advanced search with Elasticsearch",
      "Built admin dashboard with real-time analytics",
    ],
  },
  {
    name: "Open Source Contributor",
    description: "Active contributor to popular open-source projects including React and Next.js.",
    technologies: ["JavaScript", "TypeScript", "React"],
    url: "https://github.com/johndoe",
    highlights: [
      "Contributed 50+ PRs to major open-source projects",
      "Fixed critical bugs in React Router affecting 1M+ developers",
      "Maintained TypeScript type definitions used by 100K+ projects",
    ],
  },
];

export const sampleLanguages: Languages[] = [
  { language: "English", fluency: "Native" },
  { language: "Spanish", fluency: "Professional Working" },
  { language: "Mandarin", fluency: "Elementary" },
];

export const sampleCertificates: Certificates[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    url: "https://aws.amazon.com/certification/",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    url: "https://cloud.google.com/certification",
  },
];

export const sampleAwards: Awards[] = [
  {
    title: "Best Engineering Project",
    date: "2022-05",
    awarder: "MIT Computer Science Department",
  },
  {
    title: "Hackathon Winner",
    date: "2021-11",
    awarder: "TechCrunch Disrupt",
  },
];

// Position configurations
export const positionConfigs = {
  software_engineer: {
    title: "Software Engineer",
    summary: "Full-stack engineer with expertise in React, Node.js, and cloud technologies. Passionate about building scalable applications and mentoring developers.",
    sections: ["header", "summary", "education", "skills", "experience", "projects", "certificates"],
  },
  frontend_developer: {
    title: "Frontend Developer",
    summary: "UI/UX focused developer specializing in React and modern web technologies. Expert in creating responsive, accessible, and performant web applications.",
    sections: ["header", "summary", "skills", "projects", "experience", "education"],
  },
  backend_developer: {
    title: "Backend Developer",
    summary: "Backend specialist with strong experience in API design, database optimization, and microservices architecture. Focus on building robust and scalable systems.",
    sections: ["header", "summary", "skills", "experience", "projects", "education", "certificates"],
  },
  data_scientist: {
    title: "Data Scientist",
    summary: "Data-driven professional with expertise in machine learning, statistical analysis, and data visualization. Passionate about extracting insights from complex datasets.",
    sections: ["header", "summary", "education", "skills", "experience", "projects", "awards"],
  },
};

