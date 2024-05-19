import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



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
