import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoChevronDownOutline } from "react-icons/io5";
import icons from "../Components/Main/Sidebar/data";
import { GiSmartphone } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
const Sidebar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogoClick = () => {
    toggleSidebar(); // Close the sidebar when the logo is clicked
  };
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-sm"
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div className="relative h-full text-black bg-white w-[20rem] z-50">
        <div className="flex items-center justify-between p-4 bg-gray-800">
          <div>
            <Link
              to="/"
              className="flex items-center mr-4 text-white"
              onClick={handleLogoClick}
            >
              <img
                src="https://klbtheme.com/machic/wp-content/uploads/2021/09/logo-light.png"
                alt="Logo"
                className="h-100 w-100 h-[36px] text-white"
              />
            </Link>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <div className="relative mt-6 text-center">
          <a
            className="Heder-nav_alldepartments__atKdm justify-center text-[18px] my-auto flex items-center"
            href="#"
            onClick={toggleMenu}
          >
            <span className="mr-[15px]">
              <IoMenuOutline size="1em" />
            </span>
            All Departments
            <span className="ml-[40px]">
              <IoChevronDownOutline size="1em" />
            </span>
          </a>
          {isOpen && (
            <div className="left-0 z-10 w-full pl-4 mt-2 text-left bg-white rounded shadow-md ">
              <ul>
                {icons.map((item, index) => (
                  <li className="px-4 py-2" key={index}>
                    <a
                      href={item.link}
                      className="flex block flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
                    >
                      <span className="flex items-center justify-center mr-4 text-center">
                        {item.categoryicon}
                      </span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <nav className="mt-10">
          <Link
            to="/"
            className="block flex py-2.5 justify-between px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={toggleSidebar}
          >
            Home
            <span className="flex items-center justify-center">
              <FaChevronRight />
            </span>
          </Link>
          <Link
            to="/View-all"
            className="block py-2.5 flex justify-between px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={toggleSidebar}
          >
            Shop
            <span className="flex items-center justify-center">
              <FaChevronRight />
            </span>
          </Link>
          <Link
            to="/Cell-phones"
            className="block flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={toggleSidebar}
          >
            <span className="flex items-center justify-center mr-4">
              <GiSmartphone />
            </span>
            Cell Phones
          </Link>
          <Link
            to="/Headphone"
            className="block py-2.5 flex  px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={toggleSidebar}
          >
            <span className="flex items-center justify-center mr-4">
              <FaHeadphones />
            </span>
            Headphone
          </Link>
          <Link
            to="/Blog"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={toggleSidebar}
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
