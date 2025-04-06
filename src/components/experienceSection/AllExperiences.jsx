import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "System Administration Intern",
    company: "Redhat",
    date: "May 2024 - June 2024",
    responsibilities: [
      "Assisted in managing Linux server environments, including system updates, patching, and troubleshooting.",
      "Configured and monitored system performance, ensuring optimal uptime and reliability.",
      "Supported automation tasks using shell scripting and Ansible to streamline system administration processes.",
    ],
  },
  {
    job: "YouTuber",
    company: "Tech Master",
    date: "2025 - Present",
    responsibilities: [
      "Teaching Frontend and Python .",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development and machine learning technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-blue lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
