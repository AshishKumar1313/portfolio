import {
  RxEnvelopeClosed,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const NAV_LINKS = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Journey", link: "#experience" },
  { title: "Contact", link: "#contact" },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/AshishKumar1313",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ashish-kumar18",
  },
  {
    name: "Email",
    icon: RxEnvelopeClosed,
    link: "mailto:ashishkumar12314270@gmail.com",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/AshishKumar1313",
  resume: "/ashish-kumar-resume.pdf",
};

export const HERO = {
  badge: "Available for opportunities",
  title: ["Ashish", "Kumar"],
  role: "Software Engineer / Full-Stack Developer",
  description:
    "I build dynamic, scalable, and intelligent applications. Passionate about full-stack development, AI-powered tools, and solving real-world problems through code.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
  image: "/ashish.png",
};

export const QUICK_FACTS = [
  { label: "Location", value: "Punjab, India" },
  { label: "Education", value: "Pursuing B.Tech in CS Engineering" },
  { label: "Status", value: "Fresher / Actively Building" },
  { label: "Achievement", value: "Smart India Hackathon Finalist" },
] as const;

export const INTERESTS = [
  "Problem Solving",
  "Reading",
  "Web Surfing",
  "Music",
] as const;

export const ABOUT_PARAGRAPHS = [
  "Hello! I'm Ashish Kumar, a passionate full-stack developer with a deep interest in building intelligent, scalable applications that solve real-world problems.",
  "My journey in tech has evolved into hands-on expertise across the full development stack, from crafting responsive, user-friendly frontends with React and Tailwind CSS to building robust backends with Node.js and Flask.",
  "What excites me most is the intersection of AI and software engineering. I've built AI-powered tools ranging from a sports news chatbot using Google Gemini to an ML-based anomaly detection system, and I'm always looking for the next challenge that pushes my skills further.",
  "I believe in writing clean, maintainable code that is not just functional but meaningful. I value modular architecture, collaborative development, and continuous learning as the foundations of great software engineering.",
] as const;

export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "C", "Java", "Python"],
  },
  {
    title: "Frameworks & Web",
    items: ["React.js", "Node.js", "Flask", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "MySQL",
      "Git",
      "GitHub",
      "Scikit-learn",
      "Pandas",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem-Solving",
      "Team Player",
      "Project Management",
      "Adaptability",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "DwelDubai",
    period: "Mar - Aug 2025",
    type: "Frontend / Consultancy",
    summary:
      "Led frontend development for a UAE and Saudi Arabia relocation consultancy with reusable service modules and responsive visa workflows.",
    bullets: [
      "Built modules for study, tourist, and work visas.",
      "Implemented responsive UI and interactive service sections using React and Tailwind CSS.",
      "Designed modular components that supported multiple visa categories with a consistent UX.",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "HTML5"],
    link: "https://github.com/AshishKumar1313/dweldubai-project",
  },
  {
    title: "SportsPulse",
    period: "Jul - Aug 2025",
    type: "Full-Stack / AI Integration",
    summary:
      "Built a sports news platform that combines live aggregation with AI-assisted responses and responsive browsing.",
    bullets: [
      "Created a real-time sports news aggregation pipeline across multiple categories.",
      "Integrated Google Gemini with a backend to generate context-aware chatbot responses.",
      "Designed a responsive interface for real-time news browsing and filtering.",
    ],
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "JavaScript"],
    link: "https://github.com/AshishKumar1313/AI-SPORTS-NEWS-AGGREGATOR",
  },
  {
    title: "AI Process Analyzer",
    period: "Jun - Jul 2025",
    type: "AI / System Security",
    summary:
      "Developed an AI-driven monitoring tool for abnormal process behavior and automated threat detection workflows.",
    bullets: [
      "Tracked CPU and memory usage to identify abnormal behavior in real time.",
      "Integrated an Isolation Forest model to detect suspicious process patterns.",
      "Built automated workflows for secure threat detection and process handling.",
    ],
    tech: ["Python", "psutil", "Pandas", "Scikit-learn", "Prophet"],
    link: "https://github.com/AshishKumar1313/AI-Powered-OS-Process-Performance-Analyzer",
  },
] as const;

export const TIMELINE_ITEMS = [
  {
    date: "Jun 2025 - Aug 2025",
    title: "C Programming - Summer Training",
    org: "CSE Pathshala",
    details: [
      "Intensive training on arrays, pointers, functions, and file handling.",
      "Developed efficient programs and debugged real-world coding tasks.",
    ],
  },
  {
    date: "Smart India Hackathon",
    title: "SIH Finalist",
    org: "National Level Competition",
    details: [
      "Reached the last round of the SIH gateway, demonstrating strong problem-solving, teamwork, and innovation under competitive conditions.",
    ],
  },
  {
    date: "Ongoing",
    title: "DSA Problem Solver",
    org: "LeetCode",
    details: [
      "Solved 100+ problems, consistently strengthening algorithmic thinking and competitive programming skills.",
    ],
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Introduction to Hardware and Operating Systems",
    org: "IBM / Coursera / Dec 2024",
    link: "https://drive.google.com/file/d/1XWgbLYZLNmK1LoJiXKdbYa07pCPYfYYL/view?usp=drive_link",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    org: "Google / Coursera / Dec 2024",
    link: "https://drive.google.com/file/d/1UcJDMX3F7I_iWJlKdKO7uA5xYKH6Krtf/view?usp=drive_link",
  },
  {
    title: "C Programming Language - Summer Training",
    org: "CSE Pathshala / Jun-Aug 2025",
    link: "https://drive.google.com/file/d/1wOFin0UmZpBOggpJ6EgN16dU6woWA6Cf/view?usp=drive_link",
  },
] as const;

export const EDUCATION = [
  {
    label: "B.Tech / Current",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Computer Science and Engineering",
    year: "Since August 2023",
    score: "CGPA: 7.2",
  },
  {
    label: "Intermediate / Science PCM",
    institution: "Maharishi Dayanand Public School",
    location: "Kaithal, Haryana",
    degree: "Science - Physics, Chemistry, Math",
    year: "Apr 2022 - Mar 2023",
    score: "74%",
  },
] as const;

export const CONTACT_INFO = [
  {
    label: "Email",
    value: "ashishkumar12314270@gmail.com",
    href: "mailto:ashishkumar12314270@gmail.com",
  },
  {
    label: "Phone",
    value: "+91-7206050043",
    href: "tel:+917206050043",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ashish-kumar18",
    href: "https://www.linkedin.com/in/ashish-kumar18",
  },
  {
    label: "GitHub",
    value: "github.com/AshishKumar1313",
    href: "https://github.com/AshishKumar1313",
  },
] as const;

export const CONTACT_NOTE =
  "Feel free to reach out for collaborations, freelance opportunities, or just to say hi. I'm always open to discussing new projects and creative ideas.";
