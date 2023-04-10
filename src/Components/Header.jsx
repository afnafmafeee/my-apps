import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon,Bars3BottomRightIcon,XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [isOpen,setIsOpen] = useState(false)
    return (
      <div className="flex mt-4 justify-between max-w-screen-lg mx-auto">
        <div className="inline-flex">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="font-bold text-2xl">nextPage</span>
        </div>
        {/* Menu area */}
        <ul className="space-x-5 font-semibold hidden lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            About Us
          </NavLink>
        </ul>
        {/* Mobile menu */}
        <div className="lg:hidden">
          <button
            aria-label="Open menu"
            title="Open Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          <div>
            {isOpen && (
              <div className="absolute top-0 left-0 w-full z-10 bg-white">
                <div className="inline-flex">
                  <BoltIcon className="h-6 w-6 text-blue-500" />
                  <span className="font-bold text-2xl">nextPage</span>
                </div>
                <button
                 onClick={() => setIsOpen(!isOpen)}
                >
                  <XMarkIcon className="w-5 text-gray-600" />
                </button>
                <div>
                  <ul className="flex flex-col">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : ""
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/books"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500 font-bold" : ""
                      }
                    >
                      Books
                    </NavLink>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500" : ""
                      }
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "text-blue-500" : ""
                      }
                    >
                      About Us
                    </NavLink>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;