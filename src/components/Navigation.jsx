import React, { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-5 px-20">
      <nav className="flex items-center justify-between">
        <div className="text-4xl font-medium text-underlay-1 flex items-center">
          <div className="mx-auto mb-5">Siluni Rupasinghe</div>
        </div>

        {/* Hamburger menu button */}
        <button
          className="ml-auto block sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 fill-current text-gray-600"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 4.5C3 4.22386 3.22386 4 3.5 4H16.5C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5H3.5C3.22386 5 3 4.77614 3 4.5ZM3.5 9C3.22386 9 3 8.77614 3 8.5C3 8.22386 3.22386 8 3.5 8H16.5C16.7761 8 17 8.22386 17 8.5C17 8.77614 16.7761 9 16.5 9H3.5ZM3 13.5C3 13.2239 3.22386 13 3.5 13H16.5C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14H3.5C3.22386 14 3 13.7761 3 13.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center ml-auto`}
        >
          <div className="block pt-3 mx-4">
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </div>
          <div className="block pt-3 mx-4">
            <a href="#techstack" onClick={toggleMenu}>
              Tech Stack
            </a>
          </div>
          <div className="block pt-3 mx-4">
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </div>
          <div className="block pt-3 mx-4">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
