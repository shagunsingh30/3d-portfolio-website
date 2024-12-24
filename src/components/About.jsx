/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full rounded-[20px] green-pink-gradient p-[1px] rounded-[20px]shadow-card "
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I'm an aspiring software developer with a strong foundation in Problem
        Solving and hands-on experience with frameworks like React.js, Next.js,
        Node.js, and Three.js. During my internship at ARC Document Solutions, I
        developed and maintained React.js UIs using TypeScript, integrated
        advanced features like photo editing with Fabric.js, and collaborated
        with cross-functional teams to optimize performance and ensure smooth
        project execution. My technical arsenal includes languages like
        JavaScript, TypeScript, Java, C++, and beginner-level Python. Whether
        it’s crafting intuitive interfaces or building robust applications, I’m
        eager to take on challenges and bring ideas to life. Let’s create
        something great together!
      </motion.p>
      <div className="mt-5 p-4 w-[30%] rounded-lg bg-gradient-to-r from-[#1d1836] to-[#383E56] hover:from-[#383E56] hover:to-[#1d1836] transition-all duration-300">
        <Link
          to={
            "https://drive.google.com/file/d/1P4qMcIcCitT6M46FY9cfoYyeeJOnRPoB/view?usp=sharing"
          }
          target="_blank"
          className="text-[#E4E4E4] text-[16px] font-semibold hover:text-[#9ac5f6]"
        >
          <h3>RESUME</h3>
        </Link>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "About");
