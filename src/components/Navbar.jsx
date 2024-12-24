/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { menu, close, logo } from "../assets";
import { navLinks } from "../constants";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop; // Get the position of the element
      console.log(element.offsetHeight, "offset");
      window.scrollTo({
        top: offset - 30, // Adjust for fixed navbar height if needed
        behavior: "smooth", // Smooth scrolling
      });
      setActive(id);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[25px] font-bold font-cursive text-glow cursor-pointer">
            Shagun Singh
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <ScrollLink
              key={nav.title}
              to={nav.title}
              smooth={true}
              duration={300}
            >
              <li
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(nav.title);
                  // handleScroll(nav.title);
                }}
              >
                {nav.title}
                {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
              </li>
            </ScrollLink>
          ))}
        </ul>
        {/* mobile app nav bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <ScrollLink
                  key={nav.title}
                  to={nav.title}
                  smooth={true}
                  duration={300}
                >
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } font-poppins text-[16px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                </ScrollLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
