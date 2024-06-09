import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

import { IoCartOutline, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { CartContext } from "../Main/CartContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  // Calculate the total quantity of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = getTotalPrice();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="Navbar flex justify-between p-[12px] px-[2rem]">
      <div className="flex w-3/5 mr-4">
        <Link to="/" className="flex items-center mr-4">
          <img
            src="logo-dark.png"
            alt="Logo"
            className="h-100 w-100 h-[36px]"
          />
        </Link>
        <form
          className="flex items-center w-full h-10 ml-4 overflow-hidden bg-white border border-gray-300 rounded-lg"
          onSubmit={handleSearchSubmit}
        >
          <div className="relative">
            <select
              className="form-select custom-width border-none bg-transparent px-4 py-2 focus:outline-none focus:ring-0 w-[80px] all-option"
              name="product_cat"
              id="categories"
            >
              <option className="select-value" value="" selected>
                All
              </option>
              {/* Other options here */}
            </select>
          </div>
          <div className="flex w-full">
            <button type="submit">
              <IoSearch className="text-[#e0e0e0] text-[24px] ml-4" />
            </button>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-transparent focus:outline-none focus:ring-0"
              type="text"
              placeholder="Search your favorite product..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="bg-[#041e42] p-2 text-white">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="ml-4">
        <ul className="flex space-x-4">
          <li className="mr-6">
            <Link
              to="/Vendor-dashborad"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 text-[16px]"
            >
              <FaRegCircleUser className="w-6 h-6" />
              <IoIosArrowDown />
            </Link>
          </li>
          {/* <li>
              <div className="flex items-center header-addons wishlist-button">
                <a href="#" className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    <FiHeart />
                  </div>
                  <div
                    className={`flex items-center justify-center bg-red-500 text-white rounded-full w-5 h-5 text-sm ${styles.heart}`}
                  >
                    0
                  </div>
                </a>
              </div>
            </li> */}
          <li>
            <div className="flex items-center header-addons wishlist-button">
              <Link to="/AddCartItem" className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                  <IoCartOutline />
                </div>
                <div
                  className={`flex items-center justify-center bg-red-500 text-white rounded-full w-5 h-5 text-sm ${styles.heart}`}
                >
                  {cartCount}
                </div>
              </Link>
              <div className="ml-2 text-right">
                <div className="mb-[0.2rem]">Total</div>
                <div className="text-sm">${totalPrice}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
