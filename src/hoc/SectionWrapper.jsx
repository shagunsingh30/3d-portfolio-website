import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useEffect, useState } from "react";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      // Check for small or medium screen size
      const handleResize = () => {
        const width = window.innerWidth;
        setIsSmallScreen(width <= 1024); // Adjust breakpoint as needed
      };

      handleResize(); // Set initial state
      window.addEventListener("resize", handleResize); // Listen for window resize

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        animate={isSmallScreen ? "show" : undefined} // Trigger animation immediately for small screens
        whileInView={isSmallScreen ? undefined : "show"} // Trigger on scroll for larger screens
        viewport={isSmallScreen ? undefined : { once: true, amount: 0.25 }} // Disable viewport for small screens
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 overflow-hidden`}
      >
        <Component />
      </motion.section>
    );
  }
  return HOC;
};

export default SectionWrapper;
