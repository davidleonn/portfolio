import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";

import Logo from "../ui/assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex font-semibold text-lg">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <FormattedMessage id="home" />
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <FormattedMessage id="skills" />
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <FormattedMessage id="about" />
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            <FormattedMessage id="projects" />
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <FormattedMessage id="contact" />
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            <FormattedMessage id="navbar.home" />
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            <FormattedMessage id="navbar.skills" />
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            <FormattedMessage id="navbar.about" />
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <FormattedMessage id="navbar.projects" />
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            <FormattedMessage id="navbar.contact" />
          </Link>
        </li>
      </ul>
      {/* social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-gray-300">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/davidleon93/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#646060ef]">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/davidleonn"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e36161]">
            <a
              className="flex justify-between items-center w-full"
              href="mailto:davidleon_06@hotmail.com"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
