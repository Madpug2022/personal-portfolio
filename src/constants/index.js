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
        title: "System Analist Assistant",
        company_name: "Costumbres Arg. SRL.",
        icon: starbucks,
        iconBg: "#040404",
        date: "February 2014 - July 2020",
        points: [
            "Provided invaluable assistance to web engineers in diagnosing and resolving issues with webpages and applications. Demonstrated a collaborative approach, contributing technical expertise to ensure the seamless functionality and optimal performance of digital assets.",
            "Managed the retrieval and resolution of support tickets from the IT department, displaying a keen ability to address and resolve issues promptly. Ensured a streamlined process for handling IT-related concerns, contributing to the overall efficiency of organizational operations.",
            "Executed the loading of financial data into the SQL database, showcasing meticulous attention to detail in managing critical financial information. Implemented robust data handling practices, contributing to the accuracy and integrity of financial records within the organization.",
            "Engaged in frontend development tasks using HTML, CSS, and Vanilla JavaScript. Exhibited proficiency in crafting user interfaces with a focus on clean, efficient, and responsive design. Contributed to the enhancement of the user experience through the application of frontend development best practices.",
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
            "Applied strategic culinary acumen to meticulously design and curate a diverse and enticing menu. Infused creativity and expertise into menu development, ensuring a harmonious balance of flavors, textures, and presentation that captivated the palate of discerning diners.",
            "Established and maintained crucial relationships with suppliers, playing a pivotal role in the procurement of high-quality ingredients. Demonstrated effective communication and negotiation skills to secure optimal deals, guaranteeing the restaurant's commitment to excellence in every dish served."
        ],
    },
    {
        title: "Fullstack Web Developer",
        company_name: "Assembler Institute of Technology Barcelona",
        icon: shopify,
        iconBg: "#D80720",
        date: "March 2023 - Oct 2023",
        points: [
            "Proficiently authored and refined code within the framework of Scrum methodologies, ensuring a structured and efficient development process. Maintained a commitment to agile principles, fostering a collaborative environment for optimized project delivery.",
            "Collaborated closely with strategic partners to implement and deliver code of the highest standard. Prioritized the creation of clean codebases and user interfaces that not only met but exceeded industry expectations, ensuring a superior user experience.",
            "Demonstrated expertise in leveraging cutting-edge technologies, including but not limited to Javascript, Typescript, React, Angular, NodeJs, NextJs, MongoDB, Express, Redux, Styled components, and Jest. Maintained a proactive approach to staying abreast of the latest advancements, contributing to a technologically progressive work environment.",
            "Actively participated in comprehensive code reviews, offering constructive and insightful feedback to fellow developers. Contributed to the enhancement of overall code quality, fostering a culture of continuous improvement and knowledge sharing within the development team.",
        ],
    },
    {
        title: "Fullstack Developer",
        company_name: "Metary.Tech",
        icon: meta,
        iconBg: "#FFFFFF",
        date: "Sept 2023 - Now",
        points: [
            "Spearheaded the creation of a groundbreaking Web3 search platform, elevating blockchain exploration to unprecedented levels. Engineered the first-of-its-kind system integrating GPT technology for seamless and intelligent content discovery in the blockchain realm",
            "Expertly navigated a diverse tech stack, seamlessly combining React, Tailwind, Node.js (AdonisJS), PostgreSQL, and PHP to craft a powerful and efficient search engine. Demonstrated prowess in harnessing the full potential of each technology to deliver a robust and high-performing platform.",
            "Orchestrated the development process with the precision of Scrum methodology, utilizing GitHub and Jira for streamlined collaboration and project management. Ensured a nimble and adaptive workflow, allowing the team to respond dynamically to the evolving needs of the project.",
            "Enforced a standard of excellence through the implementation of clean code practices. Meticulously crafted a codebase that not only fuels the platform's functionality but also stands as a testament to the commitment to quality, readability, and maintainability.",
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
        deploy_url: 'https://moviehub-nextjs.vercel.app/'
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
