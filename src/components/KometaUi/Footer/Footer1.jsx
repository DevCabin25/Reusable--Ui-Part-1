import React from 'react';

const Footer1 = () => {
  return (
    <footer className="bg-white">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt="Logo"
                />
              </a>

              <p className="max-w-sm mt-2 text-gray-500">
                Join 31,000+ others and never miss out on new tips, tutorials, and more.
              </p>

              <div className="flex mt-6 -mx-2">
                {/* Reddit */}
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Reddit"
                >
                  {/* SVG Icon */}
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Facebook"
                >
                  {/* SVG Icon */}
                </a>

                {/* Github */}
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Github"
                >
                  {/* SVG Icon */}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase">About</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Company</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Community</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Careers</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">Blog</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Tech</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Music</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Videos</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">Products</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Mega Cloud</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Aperion UI</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Meraki UI</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600 hover:underline">+1 526 654 8965</span>
                <span className="block mt-2 text-sm text-gray-600 hover:underline">example@email.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none" />

        <div>
          <p className="text-center text-gray-500">© Brand 2020 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
