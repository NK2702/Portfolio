import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Enthusiastic and Collaborative Full-Stack Developer seeking a dynamic team environment to contribute fresh perspectives and a strong work ethic. Eager to learn and grow alongside experienced professionals.`;

export const ABOUT_TEXT = `Enthusiastic Full-Stack Developer with a strong foundation in React, Node.js (Express), MongoDB, Tailwind CSS, Bootstrap, and core web development (HTML & CSS). Eager to leverage this diverse skillset to contribute to any project and continuously learn within a collaborative team environment. `;



export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description: "Crafted an e-commerce site with HTML, CSS, and JavaScript for cross-device responsiveness. Sleek design aids navigation. Dynamic features enrich shopping, while performance and accessibility optimizations ensure a robust online retail platform.",
    technologies: ["HTML", "CSS", "JavaScript","Bootstrap"],
    githubLink: "https://nk2702.github.io/E-commerce/"
  },
  {
    title: "Gemini Clone API",
    image: project2,
    description:
      "Leveraging ReactJS and the Gemini API, this clone replicates Gemini AI's features. It offers seamless interaction and dynamic user interfaces. By integrating Gemini's functionalities, it provides a familiar experience, ensuring efficiency and innovation in AI-powered solutions",
    technologies: [ "Reactjs"],
    githubLink: "https://nk2702.github.io/gemini-api-clone/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "This portfolio project epitomizes modern web development, integrating ReactJS, TailwindCSS, and Framer Motion. It features dynamic interfaces, captivating animations, and responsive design, reflecting creativity and versatility in a seamless, elegant blend",
    technologies: [ "vite.js","Reactjs", "Tailwindcss","framer motion"],
  },
  {
    title: "Blog",
    image: project4,
    description:
      "Developed a blog with CRUD API using Node.js, Express, MongoDB, and EJS. Implemented RESTful principles for data interaction, enhancing user experience with dynamic content rendering.",
    technologies: ["HTML", "CSS", "Nodejs", "Expressjs", "mongodb"],
  },
];

export const CONTACT = {
  address: "NO 31 SI QUARTERS, TSP CAMP 1 BATTALION ,CRAWFORD TIRUCHIRAPPALLI-620012",
  phoneNo: "8072650960",
  email: "naveenkumarofficial27@gmail.com",
};
