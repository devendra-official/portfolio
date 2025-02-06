interface SkillT {
    image:string,
    title:string
}

const skill_value:SkillT[] = [
    {
        image:"rust-logo-blk.svg",
        title:"Rust"
    },
    {
        image:"c.svg",
        title:"C"
    },
    {
        image:"cpp.svg",
        title:"C++"
    },
    {
        image:"java.svg",
        title:"Java"
    },
    {
        image:"dart.svg",
        title:"Dart"
    },
    {
        image:"flutter.svg",
        title:"Flutter"
    },
    {
        image:"postgres.svg",
        title:"PostgreSql"
    },
    {
        image:"mongo.svg",
        title:"MongoDB"
    },
    {
        image:"next.svg",
        title:"Next Js"
    },
    {
        image:"nodejs.svg",
        title:"Node Js"
    },
    {
        image:"typescript.svg",
        title:"Typescript"
    },
    {
        image:"github.svg",
        title:"GitHub"
    },
    {
        image:"docker.svg",
        title:"Docker"
    },
    {
        image:"linux.svg",
        title:"Linux"
    }
]

interface project {
    title:string,
    details:string,
    image:string,
    made:string[],
    github:string,
}

const project_list:project[] = [
    {
        title:"Webserver using Rust Actix Web",
        details:"Implemented login, signup, and blog upload functionalities with image file storage locally. Authentication is handled using JWT (JSON Web Token) to ensure secure access to the application. The backend server verifies the JWT token for protected routes, allowing only authenticated users to upload blogs and images.",
        image:"",
        made:["rust-logo-blk.svg","postgres.svg"],
        github:"https://github.com/devendra-official/Rust-server.git"
    },
    {
        title:"Music Streaming Application",
        details:"Developed a music streaming application using Flutter for the frontend and Node Js for the backend logic. The server-side is powered by Node.js and PostgreSQL for database management. The application allows users to stream music.",
        image:"icon.png",
        made:["flutter.svg","dart.svg","nodejs.svg","postgres.svg"],
        github:"https://github.com/devendra-official/music-player.git"
    },
    {
        title:"Weather Application",
        details:"Created a weather application using Flutter and Dart. The application fetches real-time weather data and displays it to the user. It includes features like current weather conditions, forecasts, and weather alerts. The project is available on GitHub for further details.",
        image:"weather.jpeg",
        made:["flutter.svg","dart.svg","logo.webp"],
        github:"https://github.com/devendra-official/Weather.git"
    }
]

export{ skill_value,project_list };