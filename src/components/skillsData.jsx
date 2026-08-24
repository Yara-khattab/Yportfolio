import {SiTypescript, SiJavascript, SiReact, SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiPhp,
SiMysql, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, SiPython} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbStack2, TbBinaryTree, TbPuzzle } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, level: 80 },
      { name: "TypeScript", icon: SiTypescript, level: 82 },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 97 },
      { name: "Bootstrap", icon: SiBootstrap, level: 92 },
      { name: "HTML5", icon: SiHtml5, level: 96 },
      { name: "CSS3", icon: SiCss, level: 93 },
     
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 82 },
      { name: "Express.js", icon: SiExpress, level: 86 },
      { name: "MongoDB", icon: SiMongodb, level: 90 },
      { name: "PHP", icon: SiPhp, level: 65 },
      { name: "MySQL", icon: SiMysql, level: 60 }
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, level: 80 },
      { name: "Java", icon: FaJava, level: 78 },
      { name: "Python", icon: SiPython, level: 86 },
    ],
  },
  {
    title: "Fundamentals & Logic",
    skills: [
      { name: "OOP (C++, JS)", icon: TbStack2, level: 84 },
      { name: "Data Structures & Algorithms", icon: TbBinaryTree, level: 82 },
      { name: "Problem Solving", icon: TbPuzzle, level: 80 },
    ],
  },
];

export default skillCategories;