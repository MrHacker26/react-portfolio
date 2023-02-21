import React from "react";


const Contact = () => {
  return (
    <div 
      name="contact"
      className="pb-20 pt-24 w-full bg-gradient-to-b from-gray-900 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div data-aos="fade-up" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Interested to work together? - Let's talk</p>
        </div>

        <div data-aos="fade-up" className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/fceac440-d499-459e-a245-2fcbee0030de"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name" 
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-lg hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
