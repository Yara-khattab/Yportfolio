import perfumeImg from "../assets/perfume_website.jpg"
import libraryImg from "../assets/library_website.jpg"
import dessertImg from "../assets/dessert_website.jpg"
import handmadeImg from "../assets/handmade_website.jpeg"
import digitalproImg from "../assets/digitalpro_website.jpg"
import shoppingImg from "../assets/shopping_website.jpg"
import weatherAppImg from "../assets/weatherapp_website.jpg"
import azkarCardsImg from "../assets/azkarCards_website.jpg"
import calculatorImg from "../assets/calculator_website.jpg"
import carExhibitionImg from "../assets/carExhibition_website.jpg"
import softspaceImg from "../assets/softspace_website.jpeg"
import flowersStoreImg from "../assets/flowersStore_website.jpg"
import pricingPlansImg from "../assets/pricingPlans_website.jpg"
import smartLibraryImg from "../assets/smartLibrary.jpg"
import studyvibeImg from "../assets/studyvibe_website.jpg"
import m2DashboardImg from "../assets/dashboard_website.jpg"
import m2StoreImg from "../assets/store_website.jpg"
import { peopleManagerIcon, weatherIcon  } from "./projectIcons"

const projects = [
  // {
  //   title: "Startup Prototype — InnovEgypt",
  //   description: "Graduation project with InnovEgypt — built the working prototype.",
  //   tech: ["React", "Figma"],
  //   category: "Frontend",
  //   image: "/src/assets/innovegypt.png",
  //   team: true,
  //   role: "I built the prototype solo",
  //   links: [
  //     { label: "Live Prototype", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://your-prototype-link.com" },
  //   ],
  // },
  {
  title: "Perfume Store Website",
  description: "A clean front-end perfume store landing page — my first hands-on frontend project.",
  tech: ["HTML", "CSS"],
  category: "Frontend",
  image: perfumeImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/first-project-front" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/first-project-front/" }
  ],
},
{
  title: "Online Library Website",
  description: "A digital library landing page showcasing various book categories with a clean, organized layout.",
  tech: ["HTML5", "CSS3"],
  category: "Frontend",
  image: libraryImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/proj2-front" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/proj2-front/" }
  ],
},
{
  title: "ChocoWhirl Sweets Shop",
  description: "A modern, fully responsive sweets shop landing page focused on clean responsive layouts.",
  tech: ["HTML5", "CSS3", "Vanilla JavaScript(ES6+)", "Bootstrap4"],
  category: "Frontend",
  image: dessertImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/proj3-front" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/proj3-front/" }
  ],
},
{
  title: "Maison Chic Fashion Store",
  description: "A fashion store simulation with interactive product selection and dynamic invoice generation.",
  tech: ["HTML5", "CSS3", "Vanilla Javascript(ES6+)"],
  category: "Frontend",
  image: shoppingImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/Masion_chic" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/Masion_chic/" }
  ],
},
{
  title: "Simple Calculator",
  description: "A simple calculator with basic arithmetic operations, clear and delete functions, and a responsive navigation bar.",
  tech: ["HTML5", "CSS3", "Vanilla JavaScript(ES6+)", "Bootstrap4"],
  category: "Frontend",
  image: calculatorImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/task-calulator" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/task-calulator/" }
  ],
},
{
  title: "DigitalPro Marketing Agency",
  description: "A fully responsive marketing agency landing page with a clean, modern layout.",
  tech: ["HTML5", "Tailwind CSS"],
  category: "Frontend",
  image: digitalproImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/DigitalPro-Digital-Marketing" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/DigitalPro-Digital-Marketing/" }
  ],
},
{
  title: "Crafted With Love E-Commerce",
  description: "A handmade gifts e-commerce platform with dynamic shopping cart state management.",
  tech: ["HTML5", "CSS3", "Vanilla JavaScript(ES6+)", "Bootstrap5"],
  category: "Frontend",
  image: handmadeImg,
  featured: true,
  featuredOrder: 4,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/Crafted-With-Love" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/Crafted-With-Love/" }
  ],
},
{
  title: "Flowers Store",
  description: "A flower store webpage showcasing different flowers with product cards, images, descriptions, buy buttons, and hover effects.",
  tech: ["HTML5", "CSS3"],
  category: "Frontend",
  miniProject: true,
  image: flowersStoreImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/flower-store-task-" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/flower-store-task-/" }
  ],
},
{
  title: "Pricing Plans",
  description: "A simple online course pricing page featuring three pricing plans with styled cards, navigation links, and hover effects.",
  tech: ["HTML5", "CSS3"],
  category: "Frontend",
  miniProject: true,
  image: pricingPlansImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/course-plans-practice" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/course-plans-practice/" }
  ],
},
{
  title: "Car Exhibition",
  description: "A car exhibition page displaying six cars with timed CSS animations that move the cars across the screen.",
  tech: ["HTML5", "CSS3"],
  category: "Frontend",
  miniProject: true,
  image: carExhibitionImg, 
  team: false,
  role: "",
  source: "SEF Academy",
 links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/animation-task" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/animation-task/" }
  ],
},
{
  title: "Daily Azkar Encyclopedia",
  description: "A daily Azkar collection displayed through interactive 3D flip cards with hover effects and background images.",
  tech: ["HTML5", "CSS3"],
  category: "Frontend",
  miniProject: true,
  image: azkarCardsImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/card-task" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/card-task/" }
  ],
},
{
  title: "StudyVibe",
  description: "A collaborative study platform with study rooms, real-time chat, focus tools, task planning, break activities, and a progress dashboard.",
  tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],  category: "Full-Stack",
  image: studyvibeImg,
  featured: true,
  featuredOrder: 3,
  team: true,
  role: "my role: Backend Developer & Mini Game Developer",
  source: "College",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/StudyVibe" },
    { label: "Demo", url: "https://drive.google.com/file/d/13H8_2Q8e5kM816xhdMwOna97ZxMsZVSU/view?usp=sharing", icon: "fa-solid fa-play"}
  ],
},
{
  title: "Softspace",
  description: "A furniture website with a home page, responsive navigation, registration and login forms, and client-side authentication using localStorage.",
  tech: ["HTML5", "CSS3", "Vanilla JavaScript(ES6+)", "Bootstrap4"],
  category: "Frontend",
  miniProject: true,
  image: softspaceImg,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/Softspace" },
    { label: "Live", icon: "fa-solid fa-arrow-up-right-from-square", url: "https://yara-khattab.github.io/Softspace/" }
  ],
},
{
  title: "Weather App",
  description: "A full-stack app that fetches and displays real-time weather data for any country.",
  tech: ["Node.js", "Express.js", "Handlebars", "HTML5", "CSS3", "JavaScript"],
  category: "Full-Stack",
  image: weatherAppImg,
  featured: true,
  featuredOrder: 2,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/weather-app" },
    { label: "Demo", url: "https://drive.google.com/file/d/104mqvSjXSwz7USN0L1LW_t6ywP4pP1fH/view?usp=sharing", icon: "fa-solid fa-play"}
  ],
},
{
  title: "PeopleManager",
  description: "A terminal-based CRUD app to manage people data using Node.js.",
  tech: ["Node.js", "readline-sync", "validator.js"],
  category: "Backend",
  miniProject: true,
  image: peopleManagerIcon ,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/nodejs-crud-task" },
  ],
},
{
  title: "Weather Country API",
  description: "A terminal app that fetches and displays live weather data for any country.",
  tech: ["Node.js", "Axios", "Weather API"],
  category: "Backend",
  miniProject: true,
  image: weatherIcon,
  team: false,
  role: "",
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/weather-country-api" },
  ],
},
  {
    title: "Smart Library System",
    description: "A college team project for the Semiconductors course, designed to create a smarter library environment with automated access, self-lighting, department guidance, and noise alerts.",    tech: ["Arduino", "Sensors", "Servo Motor", "ISD1820", "LEDs"],
    category: "Hardware / IoT",
    image: smartLibraryImg,
    miniProject: false,
    source: "College",
    team: true,
    role: "my role: Hardware integration and system development",
    links: [
      { label: "View Presentation", icon: "fa-solid fa-file-powerpoint", url: "https://www.canva.com/design/DAGnKbyrgM4/V71f0Ictv_HMNnqSR4KAmw/edit" },
    ],
  },
  {
  title: "M2 Store",
  description: "An e-commerce platform with a full shopping flow — including cart, wishlist, and product details — developed during my Front-End internship.",
  tech: ["React.js", "Tailwind CSS"],
  category: "Frontend",
  team: true,
  role: "Built the Profile page",
  image: m2StoreImg,
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/M2-Store" },
    { label: "Demo Video", icon: "fa-solid fa-play", url: "https://drive.google.com/file/d/1OUkujM8Cww73XdosE3HW-Yoyw9RzkJdE/view?usp=sharing" },
  ],
},
{
  title: "M2 Dashboard",
  description: "An admin dashboard for managing users, products, and orders with real-time statistics, developed during my Front-End internship.",
  tech: ["React.js", "Tailwind CSS"],
  category: "Frontend",
  team: true,
  role: "Built the User Management module and Profile page",
  featured:true,
  featuredOrder: 1,
  image: m2DashboardImg,
  source: "SEF Academy",
  links: [
    { label: "Github", icon: "fa-brands fa-github", url: "https://github.com/Yara-khattab/M2-Dashboard" },
    { label: "Demo Video", icon: "fa-solid fa-play", url: "https://drive.google.com/file/d/1BN3sD7H6IIL2_eY6NnOLCHpdqdvgNV5F/view?usp=sharing" },
  ],
},
];

export default projects;