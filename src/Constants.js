// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';;
import netlifyLogo from './assets/tech_logo/netlify.png';


// Experience Section Logo's

// Education Section Logo's
import SATI_Vidisha from './assets/education_logo/SATI_Vidisha logo.jpg';
import Vatsalya from "./assets/education_logo/Vatsalya logo.png"

// Project Section Logo's
import MyPortfolio_img from './assets/work_logo/MyPortfolio_img.png';
import GoFoody_img from './assets/work_logo/GoFoody_img.png';
import CrudApp_img from './assets/work_logo/CrudApp_img.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: SATI_Vidisha,
    college: "Samrat Ashok Tecnological Institute",
    date: "Nov 2021 - May 2025",
    grade: "6.85 CGPA",
    desc: "I have completed my Bachelor's Degree (B-tech) in Artificial Intelligence and Data Science from Samrat Ashok Tecnological Institute, Vidisha. During my time at SATI, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Database Management Systems, Web Development. My experience at SATI has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor in Technology - B-Tech",
  },
  {
    id: 1,
    img: Vatsalya,
    school: "Vatsalya Senior secondary School, Vidisha",
    date: "Apr 2020 - March 2021",
    grade: "82.4",
    desc: "I completed my class 12 education from Vatsalya Senior Secondary School, Vidisha, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM ",
  },
  {
    id: 2,
    img: Vatsalya,
    school: "Vatsalya Senior Secondary School, Vidisha",
    date: "Apr 2018 - March 2019",
    grade: "83.4%",
    desc: "I completed my class 10 education from Vatsalya Senior Secondary School, Vidisha, under the CBSE board, where I studied Science.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "GoFoody-Online Food Ordering App",
    description:
      "Built a full-stack food ordering web app using the MERN stack, featuring secure login, cart & order management, and responsive UI. Deployed frontend on Netlify and backend on Render, making it accessible online.",
    image: GoFoody_img,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arihant21/GoFoody",
    webapp: "https://gofoodyarihant.netlify.app/",
  },
  {
    id: 1,
    title: "MyPortfolio-Personal Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio using. Showcases projects, skills, and contact details with a clean UI and smooth user experience. Designed with responsive layouts, smooth animations, and modern UI components for a professional look",
    image: MyPortfolio_img,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arihant21/MyPortfolio",
    webapp: "https://myarihantportfolio.netlify.app/",
  },
  {
    id: 2,
    title: "CRUD Application",
    description:
      "Built a CRUD (Create, Read, Update, Delete) application using the MERN stack to manage user data efficiently. Implemented RESTful APIs, form handling, and database integration with MongoDB, ensuring a clean and responsive interface.",
    image: CrudApp_img,
    tags: ["React JS", "Node.js", "Express", "MongoDb", "JavaScript"],
    github: "https://github.com/Arihant21/CRUD-App",
    webapp: "",
  },
];  