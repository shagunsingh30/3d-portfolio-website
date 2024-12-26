/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { useEffect, useState } from "react";

const Tech = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const SkillCard = ({ icon, title, shadowColor }) => {
    return (
      <div
        style={{
          boxShadow: `0px 10px 15px ${shadowColor}`,
        }}
        className={`w-[140px] md:w-[220px] p-3 bg-tertiary rounded-lg flex flex-col items-center`}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-white text-[16px] font-semibold text-center">
          {title}
        </h3>
      </div>
    );
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    setIsLargeScreen(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <h3
        className={`${styles.sectionHeadText} font-cursive font-bold text-center mb-3`}
      >
        Tech Stack
      </h3>
      <div className="flex sm:justify-center flex-wrap  gap-10">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex justify-center items-center ">
            {isLargeScreen ? (
              <BallCanvas icon={tech.icon} />
            ) : (
              <SkillCard
                icon={tech.icon}
                title={tech.name}
                shadowColor={tech.shadowColor}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
