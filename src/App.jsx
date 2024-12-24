/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Projects,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Element } from "react-scroll";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-dark-violet-shadow bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Element name="About">
          <About />
        </Element>
        <Element name="Work"></Element>
        <Projects />
        <Tech />
        <Element name="Contact">
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </Element>
      </div>
    </BrowserRouter>
  );
};

export default App;
