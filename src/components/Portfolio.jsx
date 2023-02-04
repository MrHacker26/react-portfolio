import React from "react";
import codesync from "../assets/portfolio/codesync.png";
import resumeBuilder from "../assets/portfolio/resumeBuilder.png";
import NetscapeToJSONConverter from "../assets/portfolio/NetscapeToJSONConverter.png";
import TodoBot from "../assets/portfolio/TODOBotJava.png";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "CodeSync",
      src: codesync,
      href: "https://github.com/MrHacker26/codesync",
      hrefLive: "https://codesync-tarun.vercel.app/",
    },
    {
      id: 2,
      name: "ResumeBuilder",
      src: resumeBuilder,
      href: "https://github.com/MrHacker26/ResumeBuilder",
      hrefLive: "https://resume-builder-tarun.vercel.app/",
    },
    {
      id: 3,
      src: NetscapeToJSONConverter,
      name: "NetscapeToJSONConverter",
      href: "https://github.com/MrHacker26/netscapetojson",
      hrefLive: "https://github.com/MrHacker26/netscapetojson",
    },
    {
      id: 4,
      src: TodoBot,
      name: "Telegram TODO Bot",
      href: "https://github.com/MrHacker26/todo-bot-telegram-java",
      hrefLive: "https://github.com/MrHacker26/todo-bot-telegram-java",
    },
  ];

  return (
    <div
      name="portfolio"
      className="pt-16 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-aos="fade-up" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-300">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {portfolios.map(({ id, name, src, href, hrefLive }) => (
            <div data-aos="fade-up" key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" h-44 rounded-md duration-200 hover:scale-105"
              />
              <p className=" text-lg font-bold text-gray-300 italic pl-4 pt-3 ">
                {name}
              </p>
              <div className="flex items-center justify-center">
                <a
                  href={hrefLive}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 flex border-2 border-gray-400 rounded-xl hover:bg-gray-700"
                >
                  <TbExternalLink size={23} className="py-1" /> Demo
                </a>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 flex border-2 border-gray-400 rounded-xl  hover:bg-gray-700"
                >
                  <FaGithub size={23} className="py-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
