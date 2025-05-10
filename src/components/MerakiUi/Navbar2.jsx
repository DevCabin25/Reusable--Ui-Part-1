import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaReddit } from 'react-icons/fa';  // React Icons import

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');  // Active link state

    const handleLinkClick = (link) => {
        setActiveLink(link); // Set active link on click
    };

    return (
        <nav className="bg-white shadow">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between w-full">
                        <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                        </a>
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}>
                        <div className="flex flex-col text-gray-600 capitalize lg:flex-row lg:items-center lg:space-x-4">
                            <a
                                href="#"
                                onClick={() => handleLinkClick('features')}
                                className={`mt-2 lg:mt-0 ${activeLink === 'features' ? 'text-gray-900 underline' : 'hover:text-gray-900'}`}
                            >
                                features
                            </a>
                            <a
                                href="#"
                                onClick={() => handleLinkClick('downloads')}
                                className={`mt-2 lg:mt-0 ${activeLink === 'downloads' ? 'text-gray-900 underline' : 'hover:text-gray-900'}`}
                            >
                                downloads
                            </a>
                            <a
                                href="#"
                                onClick={() => handleLinkClick('docs')}
                                className={`mt-2 lg:mt-0 ${activeLink === 'docs' ? 'text-gray-900 underline' : 'hover:text-gray-900'}`}
                            >
                                docs
                            </a>
                            <a
                                href="#"
                                onClick={() => handleLinkClick('support')}
                                className={`mt-2 lg:mt-0 ${activeLink === 'support' ? 'text-gray-900 underline' : 'hover:text-gray-900'}`}
                            >
                                support
                            </a>
                            <a
                                href="#"
                                onClick={() => handleLinkClick('blog')}
                                className={`mt-2 lg:mt-0 ${activeLink === 'blog' ? 'text-gray-900 underline' : 'hover:text-gray-900'}`}
                            >
                                blog
                            </a>

                            <div className="relative mt-4 lg:mt-0">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z"
                                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 focus:outline-none focus:border-gray-600 lg:w-56"
                                    placeholder="Search"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 lg:mt-0 lg:ml-4 space-x-2">
                            {/* Social Icons */}
                            <a href="https://www.reddit.com" className="text-gray-600 hover:text-gray-500" aria-label="Reddit">
                                <FaReddit className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-500" aria-label="Facebook">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="https://github.com" className="text-gray-600 hover:text-gray-500" aria-label="GitHub">
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;