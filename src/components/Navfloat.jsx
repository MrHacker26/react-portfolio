import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatDots } from "react-icons/bs";

const Navfloat = () => {
  return (
    <nav className="fixed bottom-3 lg:bottom-8 w-full overflow-hidden z-50 ">
      <div className="container mx-auto ">
        <div className="w-full bg-gray-400/20 h-[75px] md:h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-7 flex justify-between items-center text-2xl text-white/50">
          <Link to="home" smooth={true} spy={true} className="w-[60px] cursor-pointer flex items-center justify-center"><BiHomeAlt/></Link>
          <Link to="about" smooth={true} spy={true} className=" w-[60px] cursor-pointer flex items-center justify-center"><BiUser /></Link>
          <Link to="portfolio" smooth={true} spy={true} className=" w-[60px] cursor-pointer flex items-center justify-center"><BsClipboardData /></Link>
          <Link to="experience" smooth={true} spy={true} className=" w-[60px] cursor-pointer flex items-center justify-center"><BsBriefcase/></Link>
          <Link to="contact" smooth={true} spy={true} className=" w-[60px] cursor-pointer flex items-center justify-center"><BsChatDots/></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navfloat;
