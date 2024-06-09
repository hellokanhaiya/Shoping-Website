import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./Heder-nav.module.css";
import Home from "./Home";
import Shop from "./Shop";
import CellPhone from "./Cellphone";
import HeadPhone from "./HeadPhone";
import { CiDiscount1 } from "react-icons/ci";
import { CartContext } from "../Main/CartContext";
const HeaderNavbar = () => {
  const { toggleSidebar } = useContext(CartContext); // Use CartContext

  const handleAllDepartmentsClick = () => {
    toggleSidebar();
  };

  return (
    <div className="flex justify-between mt-4 text-center Heder-navbar">
      <div className="flex my-auto">
        <a
          className={`${styles.alldepartments} text-[18px] mr-10  my-auto`}
          href="#"
          onClick={handleAllDepartmentsClick}
        >
          <span>
            <IoMenu className="mr-[15px]" />
          </span>
          All Departments
          <span>
            <IoIosArrowDown className="ml-[40px]" />
          </span>
        </a>
        <Home />
        <Shop className="mr-10" />
        <CellPhone className="mr-10" />
        <HeadPhone className="mr-10" />
        <Link to="/Blog" className="flex items-center mr-10">
          Blog
        </Link>
        <Link to="/Contact" className="flex items-center mr-10">
          Contact
        </Link>
      </div>
      <div className="mr-10">
        <Link to="/super-discount" className="flex">
          <CiDiscount1 className="my-auto text-[#FF0000] mr-4 text-[22px]" />
          <div>
            <div className="text-[10px] mb-[-2px]">Only this weekend</div>
            <div>Super Discount</div>
          </div>{" "}
          <span className="ml-4">
            <IoIosArrowDown className="my-auto" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderNavbar;
