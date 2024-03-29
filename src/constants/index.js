import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    mongodb,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    dotnet,
    laravel,
    devops,
    frontend,
    dotneticon,
    kubernetes,
    jenkins,
    aws,
    vuejs,
    redis,
    kafka,
    rabbitmq,
    vitaImages,
    stayonImages,
    erpImages,
    alburaqImages,
    homepinImages,
    dearbornImages,
    bintjbeilassociationImages,
    cmsImages,
    crmImages,
    junkersImages, ecoImages
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
        title: "Dotnet web developer",
        icon: dotnet,
    },
    {
        title: "Laravel Developer",
        icon: laravel,
    },
    {
        title: "Devops",
        icon: devops,
    },
    {
        title: "FrontEnd Developer",
        icon: frontend,
    },
];

const technologies = [
    {
        title: "Dotnet",
        icon: dotneticon,
    },
    {
        title: "Laravel",
        icon: laravel,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "kubernetes",
        icon: kubernetes,
    },
    {
        name: "jenkins",
        icon: jenkins,
    },
    {
        name: "aws",
        icon: aws,
    },
    {
        name: "redis",
        icon: redis,
    },
    // {
    //     name: "kafka",
    //     icon: kafka,
    // },
    // {
    //     name: "rabbitmq",
    //     icon: rabbitmq,
    // },
    {
        name: "MongoDB",
        icon: mongodb,
    },
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
        name: "Vue JS",
        icon: vuejs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
];

const experiences = [
    {
        title: "Backend Engineer",
        company_name: "DivCodes (Lebanon)",
        icon: "",
        iconBg: "#302f54",
        date: " 06/2022 – Current",
        points: [
            "Tools: laravel, devops, dotnet",
            "Maintaining old systems and improving performance for others",
            "Designing database architecture",
            "Designing and implementing system architecture for ERP systems and other systems",
            "Leading a small team of developers",
            "Contributing to system analysis"
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Meta (United Arab Emirates)",
        icon: "",
        iconBg: "#1a3a32",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Working as a Laravel developer on two projects: maintaining a delivery app and collaborating with a team on developing a B2B e-commerce website",
            "Working as a .NET developer on CMS and CRM projects",
            "Writing SQL Server PL/SQL procedures and scripts to manage multitenancy at the database level for a CMS application"
        ],
    },
    {
        title: "fullstack developer",
        company_name: "FlexSol (syria)",
        icon: "",
        iconBg: "#5d1c15",
        date: "11/2021 – 10/2022",
        points: [
            "Tools: laravel,html,css,js",
            "Developing laravel application apis and creating dashboard laravel blade",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Vita",
        description:
            "An application designed to facilitate the sale of medical items to patients, oversee physicians, administer clinics, manage pharmacies, schedule clinic appointments, enable communication between physicians and patients, handle patient profiles and medical histories, and manage various types of orders, including those conducted online and in clinics\n " +
            "my responsibilities: design and implement database and backend application ,integrate with multiple\n" +
            "payment way (authorize.net,Fedex),in addition to\n" +
            "dockerize applications(react,next,node js,laravel)",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "nest js (chat app)",
                color: "pink-text-gradient",
            },
            {
                name: "react (dashboard)",
                color: "green-text-gradient",
            },
            {
                name: "next js (website)",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        images: vitaImages,
        source_code_link: "https://thevitatest.com",
    },
    {
        name: "ERP",
        description:
            "product multiple variations with modifiers,multi payment methods (points,wallet,credit card,paypal),multi branches,inventory management,warehouse management,POS,ebay sales channel \n " +
            "my responsibilities: design and implement database and backend application,integerate with multiple\n" +
            "payment way (stripe,paypal,authorize.net),integerate with sales channels such as ebay,in addition to\n" +
            "dockerize applications(react,laravel)",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "flutter",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        images: erpImages,
        source_code_link: "https://4x4motors.net",
    },
    {
        name: "Stayon app",
        description:
            "library management (pdf and courses),pay by points when buying lectures and courses ,scan qrcodes to\n" +
            "charge points,in addition to making tests with bank questions for each subject" +
            "my responsibilities: implement backend and dashboard",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "flutter",
                color: "green-text-gradient",
            },
            {
                name: "dashboard(mvc)",
                color: "pink-text-gradient",
            }
        ],
        image: tripguide,
        images: stayonImages,
        source_code_link: "https://play.google.com/store/apps/details?id=co.flexsol.stayon&hl=en&gl=US",
    },
    {
        name: "CMS",
        description:
            "A unified content management system featuring a dashboard for streamlined content control, customizable website components for easy navigation and order management, and seamless integration with mobile apps. Empowers users to dynamically add pages, manage global themes, and optimize content across platforms." +
            "my responsibilities: design and implement database and backend application, write sqlserver procedure and\n" +
            "function to mange tenant on database level",
        tags: [
            {
                name: "dotnet core 5",
                color: "blue-text-gradient",
            },
            {
                name: "react (dashboard)",
                color: "green-text-gradient",
            },
            {
                name: "next js (website)",
                color: "pink-text-gradient",
            },
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        images: cmsImages,
        source_code_link: "https://folioibsweb.meta-itech.com/",
    },
    {
        name: "Alburaq",
        description:
            " application for reading and publish books, subscribe to a specific tier in order to get access to a group of\n" +
            "books,in app purchase apple and google " +
            "my responsibilities: design and implement database and backend application,integrate with in app\n" +
            "purchase apple and google payment, help a flutter team in implementing in app purchase",
        tags: [
            {
                name: "laravel api",
                color: "blue-text-gradient",
            },
            {
                name: "laravel blade (dashboard)",
                color: "red-text-gradient",
            },
            {
                name: "flutter",
                color: "green-text-gradient",
            }
        ],
        image: jobit,
        images: alburaqImages,
        source_code_link: "https://play.google.com/store/apps/details?id=com.divcodes.alburaq.alburaq&hl=en&gl=US",
    },
    {
        name: "Homepin (CRM)",
        description:
            "dashboard to manage employees to deal with customers , sync with mutiple facebook accounts and pages to\n" +
            "sync campaigns and leads from them, integerate with facebook pages campaigns and leads, assign\n" +
            "employee to lead,task management, internal accounting system" +
            "my responsibilities: implement backend and lead a front end team",
        tags: [
            {
                name: "laravel MVC",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        images: homepinImages,
        source_code_link: "https://homepincrm.com/",
    },
    {
        name: "Dearborn and Bintjbeil news",
        description:
            "international news site, single backend for multi news site (dearborn, bintjbeil)" +
            "my responsibilities: implement backend , solving seo problems for google and facebook crawlers, setup\n" +
            "nginx config on the server to operate two websites with backend on the same aws instance but using\n" +
            "different subdomains for each website",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "react (next js) (website)",
                color: "green-text-gradient",
            },
            {
                name: "flutter",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        images: dearbornImages,
        source_code_link: "https://dearborn.org/",
    },
    {
        name: "Bintjbeil association",
        description:
            "Fundraising site " +
            "my responsibilities: integration with authorize.net payment way (from laravel side and frontend side (js))",
        tags: [
            {
                name: "Laravel MVC",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        images: bintjbeilassociationImages,
        source_code_link: "https://bintjbeilassociation.us",
    },
    {
        name: "ECO Motor",
        description:
            "A website for booking trips by vehicle" +
            "my responsibilities: integration with stripe payment way (from laravel side)",
        tags: [
            {
                name: "Laravel MVC",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        images: ecoImages,
        source_code_link: "https://eco-motor.co",
    },
    {
        name: "Junkers",
        description:"A web app to sell your junk car for the highest price possible, Provide detailed information about vehicle ,You can also upload photos to give buyers a better idea of the car's appearance.\n",
        tags: [
            {
                name: "Laravel",
                color: "blue-text-gradient",
            },
            {
                name: "react (next js) (website)",
                color: "green-text-gradient",
            },
            {
                name: "react (dashboard)",
                color: "green-text-gradient",
            },
            {
                name: "flutter",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        images: junkersImages,
        source_code_link: "https://junkker.com",
    },

    {
        name: "CRM",
        description:
            "customer relation management, mange employees and setup tasks for them to dealing with customers\n" +
            "(such as jira but with companies as customers)\n" +
            "my responsibilities: design and implement database and backend application",
        tags: [
            {
                name: "dotnet core 5",
                color: "blue-text-gradient",
            },
            {
                name: "react (dashboard)",
                color: "green-text-gradient",
            },
            {
                name: "next js (website)",
                color: "pink-text-gradient",
            },
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        images: crmImages,
        source_code_link: "https://meta-itech.com/projects",
    },

];

export {services, technologies, experiences,testimonials, projects};