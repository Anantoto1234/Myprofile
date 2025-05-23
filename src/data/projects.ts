export interface Project {
    title: string
    slug: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    category: "backend" | "frontend" | "module" | "mobile"| "fullstack"
    showGithub?: boolean
}

export const allProjects: Project[] = [
    {
    title: "PyWork – Real-time Communication & Collaboration Platform",
    slug: "pywork",
    description:
        "PyWork is a real-time communication and collaboration platform designed for modern office environments. It features instant messaging, video calling, screen sharing, and internal email functionalities. The system leverages Flask, WebSocket, and WebRTC to ensure fast, stable, and secure connections. A multi-server architecture is implemented to enhance scalability and maintain high performance under heavy user loads.",
    image: "/images/projects/pywork.png",
    technologies: ["Python", "Flask", "WebSocket", "WebRTC", "MySQL", "SMTP", "Multi-server"],
    liveUrl: "https://github.com/Anantoto1234/PyWork",
    githubUrl: "https://github.com/Anantoto1234/ChatMutiserverLTM",
    category: "fullstack",
     },
    {
    title: "Nena Shop – Game Account E-Commerce Website",
    slug: "nena-shop",
    description:
        "Nena Shop is a full-featured web application for selling game accounts like Liên Quân, Free Fire, Liên Minh, and ZingSpeed. Built with Next.js and React, it provides a smooth and interactive experience for users. Tailwind CSS ensures a clean UI, Redux handles global state, and Axios manages backend communication. The platform supports account listings, discount labels, and real-time inventory display, offering a modern solution for digital goods trading.",
    image: "/images/projects/game.png",
    technologies: ["NextJS", "React", "Tailwind CSS", "TypeScript", "Redux", "Axios"],
    liveUrl: "https://shop-game-web.vercel.app/",
    githubUrl: "https://github.com/Anantoto1234/ShopGameWeb",
    category: "frontend",
},
    {
    title: "Galio-Sell ",
    slug: "galio-sell",
    description:
        "Galio-Sell is a fullstack e-commerce web application featuring a custom HTML/CSS/JS frontend and a powerful Java backend. The system includes product pages, blog layouts, shopping cart functionality, and account management. The backend, built with Java (Spring Boot), handles business logic, user authentication, and database operations, making this project a complete solution for online store development.",
    image: "/images/projects/galio.png",
    technologies: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
    liveUrl: "https://sell-galio.vercel.app/",
    githubUrl: "https://github.com/Anantoto1234/SellGaliot",
    category: "fullstack",
    showGithub: true,
},
  {
    title: "Tic Tac Toe (Android)",
    slug: "tic-tac-toe-kotlin",
    description:
        "A simple and interactive Tic Tac Toe game built using Kotlin for Android. The app features both two-player mode and single-player mode against a basic AI. It showcases clean UI design, efficient game logic, and state handling using Android components.",
    image: "/images/projects/tictactoe.png",
    technologies: ["Kotlin", "Android SDK", "XML Layout"],
    liveUrl: "https://github.com/Anantoto1234/tic-tac-toe",
    githubUrl: "https://github.com/Anantoto1234/tic-tac-toe",
    category: "mobile",
},

    {
    title: "LMS-VKU – Learning Management System",
    slug: "lms-vku",
    description:
        "LMS-VKU is a web-based learning management system developed using Laravel and PHP. The platform supports user account management, course organization, and learning content delivery. The frontend is built with HTML, CSS, JavaScript, and styled using Bootstrap for responsiveness. A relational database is used to store user data, course information, and progress tracking, making the system suitable for academic institutions.",
    image: "/images/projects/lms.png",
    technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    liveUrl: "https://docs.google.com/document/d/18wNcdI1NoOdZ7vL8Yna4RXltX483Hodq/edit?usp=drive_link&ouid=116063730547285835336&rtpof=true&sd=true",
    githubUrl: "https://github.com/Anantoto1234/lmsVKU",
    category: "fullstack",
},

    {
    title: "ViT5-NSGA Scheduler VKU",
    slug: "vit5-nsga-scheduler",
    description:
        "A cross-platform scheduling assistant built with React Native and Expo, designed to visualize and interact with optimized timetables generated using ViT5 NLP and the NSGA-II algorithm. The app supports user login, timetable preferences, and real-time data syncing via Axios. Tailwind CSS ensures a clean UI, while Redux manages app-wide state efficiently.",
    image: "/images/projects/schedule.png",
    technologies: ["React Native", "Tailwind", "TypeScript", "Axios", "Redux"],
    liveUrl: "https://fe-f97d.vercel.app/",
    githubUrl: "https://github.com/SmartTimetable/FE",
    category: "frontend",
},
 {
    title: "ViT5-NSGA Scheduler VKU",
    slug: "vit5-nsga-scheduler",
    description:
         "The backend service for the ViT5-NSGA Scheduler system, responsible for processing timetable optimization using the ViT5 language model and NSGA-II algorithm. Built with Python and FastAPI, it exposes RESTful APIs for schedule generation, constraint handling, and integration with n8n workflows for automation. MongoDB stores input/output data, while the system ensures scalability and responsiveness for multi-user environments.",
    image: "/images/projects/schedule1.png",
    technologies:  ["Python", "FastAPI", "ViT5", "NSGA-II", "MongoDB", "n8n"],
    liveUrl: "https://fe-f97d.vercel.app/",
    githubUrl: "https://github.com/SmartTimetable/BE",
    category: "backend",
},
  
    {
        title: "Hand Check",
        slug: "hand-check",
        description:
            "HandCheckAI is a graphical user interface (GUI) application that helps you measure hand angles from input images using MediaPipe, OpenCV, and Tkinter. Suitable for hand gesture analysis in physical therapy, education, or scientific research.",
        image: "/images/projects/handcheck.png",
        technologies: ["MediaPipe", "OpenCV", "Tkinter"],
        liveUrl: "https://github.com/bbqqvv/HandCheckAI.git",
        githubUrl: "https://github.com/bbqqvv/HandCheckAI.git",
        category: "frontend",
    },

    {
        title: "Project HTVT",
        slug: "project-htvt",
        description:
            "A module in the LMS system of Vietnam Korea University Of Information And Communication Technology.",
        image: "/images/projects/module-edu-htvt.png",
        technologies: ["PHP", "Laravel", "MySQL", "Tailwind", "React"],
        liveUrl: "https://github.com/bbqqvv/Project-HTVT.git",
        githubUrl: "https://github.com/bbqqvv/Project-HTVT.git",
        category: "module",
    },

]