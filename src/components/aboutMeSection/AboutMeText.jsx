import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Manikanta, a 3rd-year B.Tech Computer Science student with a passion for teaching and coding. 
        I specialize in React and front-end development, helping students build real-world projects and 
        master modern web technologies. I am also working on building an AI-based virtual assistant project 
        designed to make daily tasks smarter and easier. Outside of coding, I enjoy continuous learning, 
        working on innovative projects, and inspiring others to achieve their goals.
      </p>
      <button className="border border-blue rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-blue transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
