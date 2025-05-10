import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer3 = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white">
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Join 31,000+ others and never miss <br /> out on new tips, tutorials, and more.
        </h1>

        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Email Address"
          />
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr className="h-px bg-gray-200 border-none my-7" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <a href="#">
            <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
          </a>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              {['About', 'Blog', 'News', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
