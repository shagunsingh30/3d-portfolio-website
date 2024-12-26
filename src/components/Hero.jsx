/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profile } from "../assets";
import { useEffect, useState } from "react";
const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Define a media query for large screens
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Set the initial state
    setIsLargeScreen(mediaQuery.matches);

    // Listener to handle changes in screen size
    const handleMediaQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    // Attach the listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className="hidden lg:block relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff] ">Shagun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A tech enthusiast exploring web development and creating innovative
            projects.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-1 h-[100px] bg-gradient-to-b from-purple-500 to-purple-900 mb-0" />
          <img
            src={profile}
            alt="profile"
            className="rounded-xl w-[200px] saturate-150 mx-auto lg:rounded-[50%] brightness-100 md:border-2 md:border-violet-300 shadow-[0px_20px_15px_rgba(128,0,128,0.3)]"
          />
        </div>
      </div>
      {isLargeScreen && <ComputersCanvas />}
    </section>
  );
};

export default Hero;
