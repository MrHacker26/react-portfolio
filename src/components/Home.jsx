import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight, MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import { BsFillPersonLinesFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import Typed from "react-typed";
import AOS from "aos";
import Vid from "../assets/video.mp4";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="">
      <div className="absolute">
        <video src={Vid} autoPlay loop muted className="h-screen w-screen object-cover" />
      </div>
      <div name="home" className=" bg-black/60 relative h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
          <div className="flex flex-col justify-center h-full">
            <div>
              <h2
                data-aos="fade-right"
                className=" text-center pb-4 text-4xl sm:text-7xl font-bold text-white"
              >
                👋 Hey I'm
                <br />
                <span className=" bg-slate-800/30 text-[#2cdea9] italic text-3xl sm:text-4xl">
                  <Typed
                    strings={[
                      "Tarun Joshi",
                      "Full Stack Developer",
                      "Tech-enthusiast",
                      "Traveller",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </span>
              </h2>
            </div>

            <p className="text-gray-300 py-4 pt-8 max-w-lg">
              A passionate Full Stack Web Developer from India. I have 3 years
              of experience building and designing software. Currently, I love
              to work on web applications using technologies like React,
              Tailwind CSS, and Node JS.
            </p>

            <div className="flex space-x-3">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r  from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
              <a
                href="/Resume_TARUN_JOSHI_CGC_MCA.pdf"
                download={true}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Resume <BsFillPersonLinesFill size={25} className="ml-1" />
              </a>
            </div>
            <div className="text-3xl mt-8 text-slate-500 lg:hidden">
              <span className=" text-slate-400 flex flex-row space-x-5">
                <a href="https://www.linkedin.com/in/tarun-joshi26/">
                  <BsLinkedin />
                </a>
                <a href="https://github.com/MrHacker26">
                  <BsGithub />
                </a>
                <a href="mailto:tjocz26@gmail.com">
                  <MdEmail />
                </a>
                <a href="https://www.hackerrank.com/tjocz26">
                  <SiHackerrank />
                </a>
                <a href="https://leetcode.com/tjocz26/">
                  <SiLeetcode />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
