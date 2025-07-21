import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like SpringBoot, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a full-stack developer with a strong passion for building efficient and user-friendly web applications. As a fresher, I have gained experience with technologies like React, Next.js, Spring Boot, MySQL, and MongoDB. My interest in web development started with a deep curiosity about how things work, and I am continuously learning and growing in this field. I enjoy working in teams, solving problems to create high-quality solutions, and tackling challenging data structures and algorithms (DSA) problems. You can view my progress and challenges on my `;


export const PROJECTS = [
  {
    title: "Smart Email Assistant",
    image: project1,
    description:
      "A productivity-focused tool that integrates Gemini AI to help users draft, summarize, and respond to emails intelligently through a chat-based interface and Chrome Extension.",
    technologies: ["React", "Gemini API", "Spring Boot", "Chrome Extension"],
  },
  {
    title: "TradeFluent",
    image: project2,
    description:
      "A full-stack crypto trading platform with real-time market data, secure fiat-to-crypto transactions, wallet management, portfolio tracking, and an AI chatbot for crypto queries.",
    technologies: ["React", "Spring Boot", "MongoDB", "Tailwind CSS", "Gemini API"],
  },
  {
    title: "Real-Time Facial Emotion Classifier",
    image: project3,
    description:
      "A real-time facial emotion detection app using OpenCV and a CNN trained on the FER-2013 dataset, deployed with Streamlit for live predictions based on facial expressions.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Keras", "Streamlit"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A dynamic personal portfolio website to showcase projects, technical skills, and contact details, built with animations and responsive design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
];


export const CONTACT = {
  address: "Shillai Sirmaur HP 173027",
  phoneNo: "+91 7876586727",
  email: "ashokdhiman21308@gmail.com",
};
