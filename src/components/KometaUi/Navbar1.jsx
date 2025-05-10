import React, { useState } from 'react';

const Navbar1 = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (e, linkName) => {
    e.preventDefault(); 
    setActiveLink(linkName); 
  };

  const linkStyle = (name) => ({
    borderBottom: activeLink === name ? '2px solid #7e22ce' : 'none',
    paddingBottom: '2px',
  });

  const navItemsLeft = ['Product', 'Features', 'Pricing'];
  const navItemsRight = ['About us', 'Sign in', 'Sign up'];

  return (
    <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">

        {/* Left Menu */}
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {navItemsLeft.map((item) => (
            <li key={item}>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, item)}
                style={linkStyle(item)}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a href="/" className="inline-flex items-center" onClick={(e) => e.preventDefault()}>
          <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
        </a>

        {/* Right Menu */}
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {navItemsRight.map((item) => (
            <li key={item}>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, item)}
                style={linkStyle(item)}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Navbar1;
