/* Customized Portfolio Config for Pratik Chouragadey */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Pratik Chouragadey",
  title: "Hi all, I'm Pratik",
  subTitle: emoji(
    "A passionate IoT Developer and Research Intern 🚀 pursuing B.Tech in Internet of Things at MITS Gwalior. I enjoy working on Smart Systems, Secure IoT Communication, and AI-powered solutions."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1h42ddsab4K9ZcqNHSL5FABBcNHFQ6UjV?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Pratik261201",
  linkedin: "https://www.linkedin.com/in/pratik-chouragadey-4a6b64286/",
  gmail: "pratikchouragadey26@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "IOT ENTHUSIAST EXPLORING SECURE COMMUNICATION AND SMART AUTOMATION",
  skills: [
    emoji("⚡ Designing and developing smart home and industrial automation systems using ESP32 and Node-RED"),
    emoji("⚡ Securing IoT communication with end-to-end encryption and protocol optimization"),
    emoji("⚡ Building desktop assistants and gesture-controlled systems with ML and CV")
  ],
  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "C", fontAwesomeClassname: "fas fa-code" },
    { skillName: "ESP32", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "MQTT", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Node-RED", fontAwesomeClassname: "fas fa-project-diagram" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Madhav Institute of Technology & Science, Gwalior",
      subHeader: "B.Tech in Internet of Things",
      duration: "Nov 2022 - June 2026",
      desc: "Pursuing a degree in IoT with interests in smart systems, cybersecurity, and AI integration."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Embedded Systems", progressPercentage: "90%" },
    { Stack: "IoT Communication Protocols", progressPercentage: "85%" },
    { Stack: "AI & Automation", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "SURGE Research Intern",
      company: "IIT Kanpur",
      date: "May 2025 – Present",
      desc: "Conducting research on IoT architectures and sensor networks under Prof. Dr. Ankush Sharma."
    },
    {
      role: "Research Intern",
      company: "Centre for IoT, MITS-DU",
      date: "July 2024 – Dec 2024",
      desc: "Published research at IEEE ICPC²T 2025. Built a precision irrigation system and analyzed multiple IoT protocols."
    },
    {
      role: "IoT & Edge AI Intern",
      company: "UniConverge Technology Pvt. Ltd.",
      date: "May – June 2024",
      desc: "Developed real-time monitoring systems and cloud-integrated IoT solutions using Node-RED."
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "MAJOR ACADEMIC AND INDEPENDENT PROJECTS",
  projects: [
    {
      projectName: "Smart Home Automation with MQTT",
      projectDesc: "Built using ESP32, Node-RED, and HiveMQ. Supports secure MQTT TLS communication.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Pratik261201" }
      ]
    },
    {
      projectName: "Industrial Health Monitoring Robot",
      projectDesc: "A real-time industrial safety monitoring bot designed for hazardous environments."
    },
    {
      projectName: "Desktop Assistant (Jarvis)",
      projectDesc: "Python-based voice assistant for command automation and ML data processing."
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Recognitions and certifications for academic and co-curricular excellence.",
  achievementsCards: [
    {
      title: "IEEE PES Day 2024 Brand Ambassador",
      subtitle: "Organized national-level events to promote innovation and energy solutions."
    },
    {
      title: "SURGE Research Internship",
      subtitle: "Selected as a SURGE intern at IIT Kanpur in IoT domain."
    },
    {
      title: "NPTEL IoT Certification",
      subtitle: "Certified by IIT Kharagpur in 'Introduction to Internet of Things'."
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally share insights on IoT and AI projects.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Sharing knowledge through tech talks and workshops."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "", podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Click below to view or download my resume.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is always open.",
  number: "+91-7566090544",
  email_address: "pratikchouragadey26@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
