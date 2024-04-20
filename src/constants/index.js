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
    git,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    angular,
    jest,
    bootstrap,
    meta,
    sql,
    mediaStop,
    pokedex,
    museum,
    trc,
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
        id: "projects",
        title: "Projects",
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
        name: "Tailwind",
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
        name: "SQL Databases",
        icon: sql,
    },
    {
        name: "git",
        icon: git,
    }
];

const experiences = [
    {
        title: "Junior Fullstack Dev.",
        company_name: "Costumbres Arg. SRL.",
        icon: starbucks,
        iconBg: "#040404",
        date: "Jan 2018 - July 2020",
        points: [
            "Assisted in the creaation aand implementation of 4 diferrent Ecommerce pages built on React and NodeJs, with a SQL database, that allowed the company to have a fresh and modern online presence.",
            "Managed the retrieval and resolution of support tickets from the IT department, displaying a keen ability to address and resolve issues promptly. ",
        ],
    },
    {
        title: "Head Chef",
        company_name: "Soportales Vinotales SL",
        icon: tesla,
        iconBg: "#FFFFFF",
        date: "May 2021 - May 2023",
        points: [
            "Served as the Head Chef at a distinguished restaurant in Pontevedra, demonstrating visionary leadership in culinary operations. Oversaw the entire kitchen, orchestrating a team of culinary professionals to deliver exceptional dining experiences.",
        ],
    },
    {
        title: "Junior Fullstack Dev.",
        company_name: "BlockChain Solutions SL.",
        icon: shopify,
        iconBg: "#fff",
        date: "March 2023 - Oct 2023",
        points: [
            "Constributed in the creation of two Blockchain related Tools, one for the creation of NFTs and the other for the creation of Smart Contracts, both built on React and NodeJs, with a SQL database.",
            "Created from 0 a selenium test suite with Java for the company's products.",
        ],
    },
    {
        title: "Mid Fullstack Developer",
        company_name: "Metary",
        icon: meta,
        iconBg: "#FFFFFF",
        date: "Sept 2023 - March 2024",
        points: [
            "Helped on the creation of a Web3 search platform, with GPT technology for seamless and intelligent content discovery in the blockchain realm",
            "Refactored the entire visual aspect of the platform, using Figma and Tailwind, to make it more user friendly and modern.",
        ],
    },
    {
        title: "Fullstack Developer",
        company_name: "Grupo TRC",
        icon: trc,
        iconBg: "#111056",
        date: "Jan 2024 - Present",
        points: [
            "Developed a web application that help track and study hate crimes in the diferent social media platforms, using React, NodeJs and aa microservice system with a noSQL database.",
            "Asisted my colleagues in the creation of diferent public security tools, like a facial recognition system and a license plate recognition system, using Python and Tensorflow.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I highly recommend Matías as an exceptional programmer with a perfect balance of hard skills and soft skills. His coding expertise spans various languages and frameworks, delivering elegant solutions for complex problems. Notably, he can identify any coding error and fix it in under two minutes, showcasing his unmatched proficiency.",
        name: "Fran Pérez Alberca",
        designation: "Developer",
        company: "Assembler Institute of Technology",
        image: "https://avatars.githubusercontent.com/u/131665298?v=4",
    },
    {
        testimonial:
            "After working on a complete module with Matías, I can say that he is a good developer and a better person. Technically, he is an intelligent and resourceful developer, capable of finding solutions and adapting to needs. Very hardworking and very efficient. On a personal level he is a great person, polite and respectful and a good team worker. Highly recommend on any team.",
        name: " Luis Jover Pérez",
        designation: "Developer",
        company: "Assembler Institute of Technology",
        image: "https://avatars.githubusercontent.com/u/129792624?v=4",
    },
    {
        testimonial:
            "I highly recommend Matias Alaimo. He is a friendly and cooperative team player who demonstrates good competence. Matias is always ready to lend a helping hand to his colleagues, making him a valuable asset to any team. His dedication and willingness to collaborate are truly commendable qualities.",
        name: "Néstor Menéndez Echevarría",
        designation: "Developer",
        company: "Assembler Institute of Technology",
        image: "https://media.licdn.com/dms/image/D4D03AQEPMqsWt_7TWA/profile-displayphoto-shrink_400_400/0/1695891781965?e=1703721600&v=beta&t=JTvMmRxQwPIqNPKwh7rBxiia3STUQlyQWLPTciPo8cI",
    },
];

const alphaProjects = [
    {
        name: "3D Selfconstructed Museum",
        description:
            "A 3D web application that will server as a navigable and self constructed museum, where the user can see the art pieces and read about them.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "ThreeJs",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: museum
    }
]

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
                name: "MongoDb",
                color: "green-text-gradient",
            },
            {
                name: "Nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Madpug2022/Moviehub-nextjs",
        deploy_url: 'https://moviehub-nextjs.vercel.app/'
    },
    {
        name: "Apollofy Audio Streaming",
        description:
            "A Audio streaming platafform that simulates Spotify, allow users to listen to music and upload their own audios and albums.",
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
    {
        name: "Pokedex",
        description:
            "A pokedex web application that allows users to search for pokemons and see their stats and abilities.",
        tags: [
            {
                name: "React and NextJs",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: pokedex,
        source_code_link: "https://github.com/Madpug2022/Pokedex/",
        deploy_url: 'https://pokedex-mauve-seven.vercel.app/'
    },
    {
        name: "MediaStop",
        description:
            "A web application that allows users to search for movies and series and see their details and ratings.",
        tags: [
            {
                name: "React and NextJs",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "Motion Framer",
                color: "pink-text-gradient",
            },
        ],
        image: mediaStop,
        source_code_link: "https://github.com/Madpug2022/MediaStop",
        deploy_url: "https://media-stop.vercel.app/",
    },

];

export { services, technologies, experiences, testimonials, projects, alphaProjects };
