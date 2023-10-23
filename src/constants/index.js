import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    jest,
    bootstrap,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UX/UI Design",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Jest",
        icon: jest,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    }
];

const experiences = [
    {
        title: "System Analist helper",
        company_name: "Costumbres Arg. SRL.",
        icon: starbucks,
        iconBg: "#383E56",
        date: "February 2014 - July 2020",
        points: [
            "Assinsting the web enginners fixing the webpage and application.",
            "Answering support tickets.",
            "Loadinng financial status in SQL Database",
            "Writing financial status monthly.",
        ],
    },
    {
        title: "Head Chef",
        company_name: "Soportales Vinotales SL",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "May 2021 - May 2023",
        points: [
            "Head chef at restaurant in Pontevedra.",
            "Desing menu",
            "Contact supliers"
        ],
    },
    {
        title: "Fullstack Web Developer",
        company_name: "Assembler Institute of Technology Barcelona",
        icon: shopify,
        iconBg: "#383E56",
        date: "March 2023 - Oct 2023",
        points: [
            "Writing and fixing code under Agile methods like Kanban and Scrum.",
            "Colaborating with partners to bring clean code and friendly user interfaces.",
            "Working with the latest technologies such as: Javascript, Typescript, React, Angular, NodeJs, NextJs, and other libraries",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }

];

const testimonials = [
    {
        testimonial:
            "I highly recommend Matías as an exceptional programmer with a perfect balance of hard skills and soft skills. His coding expertise spans various languages and frameworks, delivering elegant solutions for complex problems. Notably, he can identify any coding error and fix it in under two minutes, showcasing his unmatched proficiency.",
        name: "Fran Pérez Alberca",
        designation: "Developer",
        company: "Assembler Institute of Technology",
        image: "https://media.licdn.com/dms/image/D4D35AQG9UbjVaip14g/profile-framedphoto-shrink_400_400/0/1695721007701?e=1698670800&v=beta&t=ICqQkcJLrpeYSuNxEwT1vCgGRCHO_kHUjNQfwviAJtE",
    },
    {
        testimonial:
            "After working on a complete module with Matías, I can say that he is a good developer and a better person. Technically, he is an intelligent and resourceful developer, capable of finding solutions and adapting to needs. Very hardworking and very efficient. On a personal level he is a great person, polite and respectful and a good team worker. Highly recommend on any team.",
        name: " Luis Jover Pérez",
        designation: "Developer",
        company: "Assembler Institute of Technology",
        image: "https://media.licdn.com/dms/image/D4D35AQHEh6NsAGraQw/profile-framedphoto-shrink_400_400/0/1697465149592?e=1698670800&v=beta&t=XrarlFXMhHotlWnLSxPGgeINxIlTxGRddTjrWFW8MEE",
    },
    {
        testimonial:
            "As a developer, Matías's technical skills are top-notch. He has a deep understanding of [mention any specific programming languages, tools, or technologies] and has a proven track record of successfully delivering complex projects on time and within budget.",
        name: "Facundo Herrera",
        designation: "Developer",
        company: "Assembler Institute of Technology",
        image: "https://media.licdn.com/dms/image/D4E35AQEN_QmH6I3z7A/profile-framedphoto-shrink_400_400/0/1648416221880?e=1698670800&v=beta&t=Goz_PuQJEWV1lxQW6N1wrKwmPn-LXCiUpWVRxsCvdo4",
    },
];

const projects = [
    {
        name: "Pl∆ay Store Eccomerce",
        description:
            "Web-based platform that assembles a videogame eccomerce, where the user can add to cart products, log in and shop.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "sqLite",
                color: "green-text-gradient",
            },
            {
                name: "styled components",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Madpug2022/Ecommerce-Assembler-Project",
        deploy_url: 'https://ecommerce-assembler-project.vercel.app/'
    },
    {
        name: "PopCorn MovieHUB",
        description:
            "Web application that allow users to upload reviews of movies and series based on scores and look for other users reviews.",
        tags: [
            {
                name: "React and NextJs",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDb and Cloudinary",
                color: "green-text-gradient",
            },
            {
                name: "Nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Madpug2022/Moviehub-nextjs",
        deploy_url: 'moviehub-nextjs.vercel.app'
    },
    {
        name: "Apollofy Audio Streaming",
        description:
            "A Audio streaming platafform that simulates Spotify, allow users to listen to music and upload their own audios and personal albums.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "PostgreSql",
                color: "green-text-gradient",
            },
            {
                name: "Andt",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Madpug2022/apollofy-frontend",
        deploy_url: 'https://apollofy-frontend.vercel.app/home'
    },
];

export { services, technologies, experiences, testimonials, projects };
