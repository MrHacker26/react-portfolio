import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
        I’m a final year MCA student at Chandigarh Group of Colleges, Landran, Mohali.
        </p>

        <br />

        <p className="text-xl">
        Throughout my academic experiences, I have developed a solid understanding of
programming languages and technologies including Python, Core Java, HTML, CSS,
TailwindCSS, JavaScript, ReactJS, NodeJS, MongoDB, MySQL, Data Structures, and
Algorithms. Additionally, I am well-versed in Git, GitHub, and APIs.
        </p>
      </div>
    </div>
  );
};

export default About;
