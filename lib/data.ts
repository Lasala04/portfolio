import { 
  Users, FileText, PenTool, MonitorPlay, Handshake
} from "lucide-react";

export const siteConfig = {
  name: "Dwyn Richie T. Lasala",
  initials: "DRL",
  title: "IT Student & Developer",
  email: "dlasala_230000000999@uic.edu.ph",
  github: "https://github.com/Lasala04",
  bio: "A third-year BSIT student specializing in Healthcare Technologies at the University of the Immaculate Conception, Davao City — building real-world software at the intersection of technology, health, and innovation.",
};

export const aboutData = {
  background: "I'm a 3rd-year BSIT student at the University of the Immaculate Conception in Davao City, Philippines, specializing in Healthcare Technologies. I build full-stack web and mobile applications with a focus on solving real problems in health, education, and sustainability.",
  missionVision: "My mission is to develop technology that improves how people manage their health, learn, and work. I aim to grow into a software engineer who bridges the gap between cutting-edge technology and practical human impact — particularly in underserved sectors like healthcare and education in the Philippines.",
  goals: "Short-term: graduate with distinction, ship real products, and contribute to impactful open-source or civic tech projects. Long-term: build a technology company that solves meaningful problems in Southeast Asia. I'm driven by the belief that well-designed software can change lives.",
  achievements: [
    "3rd Honors, BSIT-3B Honor Roll — 1st Semester, University of the Immaculate Conception",
    "Co-Founded BurNoy Tech, a cloud-based OJT monitoring platform currently under the Marian TBI Incubation Program",
    "Drafted and submitted a Utility Model Patent Application (RA 8293) for BurNoy's core platform IP",
    "Event Lead, Google Developer Groups on Campus — UIC Chapter (2025–Present)"
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Mobile Development",
      skills: ["Flutter", "Dart"]
    },
    {
      name: "Web Development",
      skills: ["Next.js", "React", "HTML", "Tailwind CSS", "JavaScript"]
    },
    {
      name: "Backend & Cloud",
      skills: ["Firebase", "Supabase", "Cloudinary", "Python"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Android Studio", "VS Code", "Ubuntu/Linux", "Git", "Oracle VirtualBox"]
    },
    {
      name: "Other",
      skills: ["Machine Learning", "ERD/Schema Design", "REST APIs", "OpenStreetMap/Leaflet"]
    }
  ],
  softSkills: [
    { name: "Technical Leadership", icon: Users },
    { name: "Project Documentation", icon: FileText },
    { name: "IP & Patent Writing", icon: PenTool },
    { name: "Public Presentation & Pitching", icon: MonitorPlay },
    { name: "Cross-functional Team Collaboration", icon: Handshake }
  ]
};

export const projectsData = [
  {
    title: "BurNoy OJT Cloud Platform",
    year: "2025",
    role: "Co-Founder & IP Liaison",
    techStack: ["Next.js", "Firebase", "Supabase", "Cloud Architecture"],
    description: "A cloud-based OJT monitoring and journaling system designed for higher education institutions in Davao Region (Region XI). Architected the full-stack system, led development, drafted a utility model patent application, and co-presented a comprehensive pitch deck to academic and industry evaluators.",
    github: "https://github.com/Lasala04",
    badge: "Startup / Incubated"
  },
  {
    title: "EcoByte — E-Waste Marketplace Mobile App",
    year: "2025",
    role: "Lead Developer",
    techStack: ["Flutter", "Firebase", "Cloudinary", "OpenStreetMap"],
    description: "A sustainability-focused mobile marketplace for buying and selling e-waste electronics. Features seller/buyer roles, real-time messaging, Google OAuth, image uploads via Cloudinary, and map integration via OpenStreetMap. Includes dark/light mode, animated screens, seller badges, and a rating system.",
    github: "https://github.com/Lasala04",
    badge: "Mobile App"
  },
  {
    title: "MediRemind — Cloud Medication Manager",
    year: "2025",
    role: "Full-Stack Developer",
    techStack: ["HTML", "Tailwind CSS", "Vanilla JS", "Supabase"],
    description: "A full-featured medication management web app with a reminder system and analytics dashboard. Completed four core feature priorities: Medication Management, Reminder System, Reports & Analytics, and User Features.",
    github: "https://github.com/Lasala04",
    badge: "Healthcare Tech"
  },
  {
    title: "ML Algorithm Interactive Website",
    year: "2024",
    role: "Developer",
    techStack: ["React", "Next.js", "Python"],
    description: "An interactive educational website showcasing six machine learning models including Linear Regression, Decision Tree, KNN, and Neural Networks. Deployed on an Ubuntu server inside Oracle VirtualBox for academic submission.",
    github: "https://github.com/Lasala04",
    badge: "Machine Learning"
  }
];

export const educationData = [
  {
    institution: "University of the Immaculate Conception — Davao City, Philippines",
    degree: "Bachelor of Science in Information Technology",
    period: "2023 – Present | 3rd Year",
    specialization: "Healthcare Technologies",
    coursework: "Machine Learning, Server Administration, Technopreneurship, Healthcare Technologies, Systems Design",
    honors: "3rd Honors, BSIT-3B Honor Roll — 1st Semester"
  }
];

export const affiliationsData = [
  {
    title: "BurNoy OJT Cloud Platform",
    role: "Co-Founder & IP Liaison",
    period: "2025 – Present",
    subtitle: "Technopreneurship 1, University of the Immaculate Conception",
    points: [
      "Architected a cloud-based OJT monitoring and journaling system for Davao Region HEIs",
      "Led full-stack development with Firebase/Supabase backend",
      "Drafted utility model patent application for core platform IP",
      "Developed and presented pitch deck to academic and industry evaluators"
    ]
  },
  {
    title: "Google Developer Groups on Campus — UIC Chapter",
    role: "Event Lead",
    period: "2025 – Present",
    subtitle: "",
    points: [
      "Leads planning and execution of developer-focused community events on campus"
    ]
  },
  {
    title: "Google Developer Groups on Campus — UIC Chapter",
    role: "Core Member",
    period: "2024 – 2025",
    subtitle: "",
    points: [
      "Contributed to community building, workshops, and on-campus tech advocacy"
    ]
  }
];
