import frontInternImg from "../assets/front_training_certificate.jpg";
import frontImg from "../assets/frontend_certificate.jpg";
import backImg from "../assets/Backend_certificate.jpg";
import AIsprintImg from "../assets/AI_sprints_certificate.jpg";
import bulidAiImg from "../assets/Bulid_Ai_certificate.jpg";
import NetworkCisciImg from "../assets/Cisco_certificate.jpg";
import NetworkMaharaImg from "../assets/computer_network_mahara_techa_certificate.jpg";
import ECPC2025Img from "../assets/ECPC_2025_certificate.jpg";
import ECPC2026Img from "../assets/ECPC_2026_certificate.jpg";
import Kickoff2025 from "../assets/kickoff_2025_certificate.jpg";
import innovImg from "../assets/innovegypt_certificate.jpg";
import introGitImg from "../assets/intro_to_git_certificate.jpg";
import javaImg from "../assets/java_basic_certificate.jpg";
import nileContestImg from "../assets/nile_contest_certificate.jpg";


const sourceStyles = {
  "SEF Academy": { color: "#F2A63C", icon: "fa-solid fa-graduation-cap" },      
  "InnovEgypt": { color: "#C084FC", icon: "fa-solid fa-lightbulb" },           
  "Cisco": { color: "#2DD4BF", icon: "fa-solid fa-network-wired" },           
  "Nile University": { color: "#F472B6", icon: "fa-solid fa-building-columns" },
  "Microsoft Azure": { color: "#3B82F6", icon: "fa-solid fa-cloud" },          
  "Sprints": { color: "#84CC16", icon: "fa-solid fa-rocket" },                
  "Mahara-Tech": { color: "#14B8A6", icon: "fa-solid fa-laptop-code" },         
  "Microsoft": { color: "#EF4444", icon: "fa-brands fa-microsoft" },        
  "ICPC": { color: "#6366F1", icon: "fa-solid fa-trophy" },                     
  "HackerRank": { color: "#EAB308", icon: "fa-brands fa-hackerrank" },          
};

const certificates = [
  {
    title: "Front-End Internship",
    source: "SEF Academy",
    category: "Internships",
    featured: true,
    featuredOrder: 1,
    image: frontInternImg,
    url: "https://drive.google.com/file/d/1KIimhjIZxanuuQzs5RJ3wLdBJlyTc2M1/view?usp=drive_link",
  },
  {
    title: "InnovEgypt Training Completion",
    source: "InnovEgypt",
    category: "Internships",
    featured: true,
    featuredOrder: 2,
    image: innovImg,
    url: "https://drive.google.com/file/d/1uE9l9vmwsc900FPZvTYS9uk198lIZw8X/view?usp=drive_link",
  },
  {
    title: "Frontend Development Track",
    source: "SEF Academy",
    category: "Development Tracks",
    image: frontImg,
    url: "https://drive.google.com/file/d/1nvgYopjzwnPhtnCC4UCxOMMBmjgDbSgl/view?usp=drive_link",
  },
  {
    title: "Backend Development Track",
    source: "SEF Academy",
    category: "Development Tracks",
    image: backImg,
    url: "https://drive.google.com/file/d/1GJwDtV3GwbmRVtai4KYd2p3-Dbnj7Nsh/view?usp=drive_link",
  },
  {
    title: "ECPC 2025 Qualifiers",
    source: "ICPC",
    category: "Competitive Programming",
    featured: true,
    featuredOrder: 4,
    image: ECPC2025Img,
    url: "https://drive.google.com/file/d/1-e9jSOXnGG6pUFWoSV3BRv9fvZP2ZoN9/view?usp=drive_link",
  },
  {
    title: "ECPC 2026 Qualifiers",
    source: "ICPC",
    category: "Competitive Programming",
    image: ECPC2026Img,
    url: "https://drive.google.com/file/d/1v-QgR1AfZqXQrhGZHaKgTn203pmY8Hjs/view?usp=drive_link",
  },
  {
    title: "ICPC ACPC Kickoff",
    source: "ICPC",
    category: "Competitive Programming",
    image:Kickoff2025 ,
    url: "https://drive.google.com/file/d/1iO0vxmeMbsEWt4L5bkyy66acHBDzpuP_/view?usp=drive_link",
  },
  {
    title: "Nile Contest",
    source: "Nile University",
    category: "Competitive Programming",
    image:nileContestImg ,
    url: "https://drive.google.com/file/d/12wPIT13zP18ZDfQq1EXZDWQZn2Qe2eYh/view?usp=drive_link",
  },
  {
    title: "Cisco Networking Certificate",
    source: "Cisco",
    category: "Technical Courses",
    image: NetworkCisciImg,
    url: "https://drive.google.com/file/d/1NtRn7CPoc5B1CxTwVbTUxePWWJtAsgUA/view?usp=drive_link",
  },
  {
    title: "Intro to Git",
    source: "Microsoft",
    category: "Technical Courses",
    image: introGitImg,
    url: "https://drive.google.com/file/d/1EMVlqqZCZubdBdke4LKD65fTu4vo8LQq/view?usp=drive_link",
  },
  {
    title: "Java Basics",
    source: "HackerRank",
    category: "Technical Courses",
    image: javaImg,
    url: "https://drive.google.com/file/d/12YR8VQWqNNGoLTtqWJAlHnbNPb6YKVnE/view?usp=drive_link",
  },
  {
    title: "Computer Network Fundamentals",
    source: "Mahara-Tech",
    category: "Technical Courses",
    image: NetworkMaharaImg,
    url: "https://drive.google.com/file/d/1cDNr34ugfh7ZVGvdihnsfGB-aP5aqFLs/view?usp=drive_link",
  },
  {
    title: "Building AI Agents with Azure AI Foundry",
    source: "Microsoft Azure",
    category: "AI & Emerging Tech",
    image: bulidAiImg,
    url: "https://drive.google.com/file/d/1Lo9wMPy5fsOFnd41N0YnZLSSMHlQP9In/view?usp=drive_link",
  },
  {
    title: "AI & Machine Learning Sprint",
    source: "Sprints",
    category: "AI & Emerging Tech",
    featured: true,
    featuredOrder: 3,
    image: AIsprintImg,
    url: "https://drive.google.com/file/d/1fB80Jm-_3pY_OxFX2w6bjrWGc3o7sYH1/view?usp=drive_link",
  },
];

export { sourceStyles };
export default certificates;