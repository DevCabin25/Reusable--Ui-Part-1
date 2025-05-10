import React from 'react';
import { FaReddit, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {['Home', 'About', 'Teams', 'Privacy', 'Cookies'].map((item, index) => (
              <a key={index} href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500">
                {item}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>

          <div className="flex -mx-2 mt-4 sm:mt-0">
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
              <FaReddit className="w-5 h-5" />
            </a>
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500" aria-label="Github">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
