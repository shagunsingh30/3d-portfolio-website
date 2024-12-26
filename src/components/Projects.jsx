/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { MyProjects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={project.date}
      iconStyle={{ background: "#383E56" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={project.icon}
            alt={project.title}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white lg:text-[24px] font-bold">{project.title}</h3>
        <p
          className=" mt-2 text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {project.technologies.join(" | ")}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-1 lg:space-y-2">
        {project.description.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[14px] pl-1 tracking-wider "
          >
            {point}
          </li>
        ))}
      </ul>
      {project.demoLink && (
        <div className="mt-3 p-4 w-[30%] rounded-lg bg-gradient-to-r from-[#1d1836] to-[#383E56] hover:from-[#383E56] hover:to-[#1d1836] transition-all duration-300">
          <Link
            to={project.demoLink}
            target="_blank"
            className="text-[#E4E4E4] text-[14px] font-semibold hover:text-[#9ac5f6]"
          >
            <h3>DEMO</h3>
          </Link>
        </div>
      )}
      {project.repoLink && (
        <div className="mt-3 p-4 w-[30%] rounded-lg bg-gradient-to-r from-[#1d1836] to-[#383E56] hover:from-[#383E56] hover:to-[#1d1836] transition-all duration-300">
          <Link
            to={project.repoLink}
            target="_blank"
            className="text-[#E4E4E4] text-[14px] font-semibold hover:text-[#9ac5f6]"
          >
            <h3>CODE</h3>
          </Link>
        </div>
      )}
    </VerticalTimelineElement>
  );
};
const Projects = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col justify-center items-center"
      >
        <p className={`${styles.sectionSubText}`}>WHAT I HAVE DONE SO FAR.</p>
        <h2 className={`${styles.sectionHeadText}`}>PROJECTS</h2>
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {MyProjects.map((project, index) => (
            <ProjectCard key={project.title} index={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "Work");
