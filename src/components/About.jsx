import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div
        data-aos="fade-up"
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10 text-gray-300">
          I’m a final year MCA student at Chandigarh Group of Colleges, Landran,
          Mohali.
        </p>

        <br />

        <p className="text-xl text-gray-300">
          Throughout my academic experiences, I have developed a solid
          understanding of programming languages and technologies including
          Python, Core Java, HTML, CSS, TailwindCSS, JavaScript, ReactJS,
          NodeJS, MongoDB, MySQL, Data Structures, and Algorithms. Additionally,
          I am well-versed in Git, GitHub, and APIs.
        </p>
      </div>
    </div>
  );
};

export default About;
