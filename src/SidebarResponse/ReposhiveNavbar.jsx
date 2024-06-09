// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { IoCartOutline, IoSearch } from "react-icons/io5";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { HiOutlineShoppingCart } from "react-icons/hi";

// import Product from "../Components/Main/Maincontent/NewProduct/data";
// import { CartContext } from "../Components/Main/CartContext";
// import styles from "./ReposhiveNavbar.module.css";

// // Import Sidebar component
// import Sidebar from "./Sidebarcompoents";

// const ResponshivNavbar = () => {
//   const { cart, getTotalPrice } = useContext(CartContext);
//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
//   const { addToCart } = useContext(CartContext);
//   const [clickedButtons, setClickedButtons] = useState({});
//   const [clickedItem, setClickedItem] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

//   const handleButtonClick = (index, item) => {
//     setClickedButtons((prevState) => ({
//       ...prevState,
//       [index]: true,
//     }));
//     setClickedItem(item);
//     addToCart(item);
//   };

//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search?query=${searchQuery}`);
//   };

//   // Function to toggle sidebar visibility
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="w-full">
//       {/* Top bar */}
//       <div className="flex items-center justify-center p-4 bg-gray-100">
//         <div className="flex space-x-4 text-sm">
//           <a href="#" className="hover:underline">
//             Order Tracking
//           </a>
//           <div className="relative group">
//             <a href="#" className="flex items-center hover:underline">
//               English
//               <MdKeyboardArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
//             </a>
//             <ul className="absolute left-0 mt-2 bg-white rounded shadow-lg opacity-0 pointer-events-none w-28 group-hover:opacity-100 group-hover:pointer-events-auto">
//               <li className="p-2 hover:bg-gray-200">
//                 <a href="#">English</a>
//               </li>
//               <li className="p-2 hover:bg-gray-200">
//                 <a href="#">Spanish</a>
//               </li>
//               <li className="p-2 hover:bg-gray-200">
//                 <a href="#">German</a>
//               </li>
//             </ul>
//           </div>
//           <div className="relative group">
//             <a href="#" className="flex items-center hover:underline">
//               USD
//               <MdKeyboardArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
//             </a>
//             <ul className="absolute left-0 mt-2 bg-white rounded shadow-lg opacity-0 pointer-events-none w-28 group-hover:opacity-100 group-hover:pointer-events-auto">
//               <li className="p-2 hover:bg-gray-200">
//                 <a href="#">USD</a>
//               </li>
//               <li className="p-2 hover:bg-gray-200">
//                 <a href="#">INR</a>
//               </li>
//               <li className="p-2 hover:bg-gray-200">
//                 <a href="#">GBP</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
//         <div className="text-2xl" onClick={toggleSidebar}>
//           {" "}
//           {/* Add onClick event to toggle sidebar */}
//           <FaBars />
//         </div>
//         <div className="flex items-center w-full max-w-2xl mx-4 bg-gray-100 rounded">
//           <IoSearch className="ml-2 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search your favorite product..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-full px-2 py-1 bg-transparent focus:outline-none"
//           />
//           <button
//             onClick={handleSearchSubmit}
//             className="px-4 py-2 text-white bg-blue-600 rounded-r hover:bg-blue-700"
//           >
//             Search
//           </button>
//         </div>
//         <div className="flex items-center header-addons wishlist-button">
//           <Link to="/AddCartItem" className="flex items-center space-x-2">
//             <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
//               <IoCartOutline />
//             </div>
//             <div
//               className={`flex items-center justify-center bg-red-500 text-white rounded-full w-5 h-5 text-sm ${styles.heart}`}
//             >
//               {cartCount}
//             </div>
//           </Link>
//         </div>
//       </div>

//       <div className="relative">
//         <FaBars
//           className="fixed top-0 left-0 p-4 cursor-pointer"
//           onClick={toggleSidebar}
//         />
//         {isSidebarOpen && <Sidebar />}
//       </div>
//     </div>
//   );
// };

// export default ResponshivNavbar;
// ResponshivNavbar.js

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCartOutline, IoSearch } from "react-icons/io5";

import styles from "./ReposhiveNavbar.module.css";
import Sidebar from "./Sidebarcompoents";
import { CartContext } from "../Components/Main/CartContext";

const ResponshivNavbar = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = getTotalPrice();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery(""); // Clear the input field after searching
  };

  return (
    <div className="w-full">
      {/* <div className="flex items-center justify-center p-4 bg-gray-100">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Order Tracking
          </a>
          <div className="relative group">
            <a href="#" className="flex items-center hover:underline">
              English
            </a>
            <ul className="absolute left-0 mt-2 bg-white rounded shadow-lg opacity-0 pointer-events-none w-28 group-hover:opacity-100 group-hover:pointer-events-auto">
              <li className="p-2 hover:bg-gray-200">
                <a href="#">English</a>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <a href="#">Spanish</a>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <a href="#">German</a>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <a href="#" className="flex items-center hover:underline">
              USD
            </a>
            <ul className="absolute left-0 mt-2 bg-white rounded shadow-lg opacity-0 pointer-events-none w-28 group-hover:opacity-100 group-hover:pointer-events-auto">
              <li className="p-2 hover:bg-gray-200">
                <a href="#">USD</a>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <a href="#">INR</a>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <a href="#">GBP</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="flex p-2 mx-auto">
        <Link to={"/"} className="p-2 mx-auto">
          {" "}
          <img
            src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/08/logo-dark.png"
            alt="Logo"
            className="h-100 w-100 h-[36px] text-white"
          />
        </Link>
      </div>
      <div className="p-4 bg-gray-100 ">
        <ul className="flex items-center justify-center">
          <li className="mr-[1.5625rem] header-list">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="mr-[1.5625rem] header-list">
            <Link to="/Featured-dashborad">Featured Products</Link>
          </li>
          <li className="mr-[1.5625rem] header-list">
            <Link to="/stores">Stores</Link>
          </li>
          <li className="mr-[1.5625rem] header-list">
            <Link to="/Vendor-dashborad">Vendor Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <div className="text-2xl" onClick={toggleSidebar}>
          <FaBars className="cursor-pointer" />
        </div>

        <form
          className="flex items-center w-full max-w-2xl mx-4 bg-gray-100 rounded"
          onSubmit={handleSearchSubmit}
        >
          <IoSearch className="ml-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search your favorite product..."
            className="w-full px-2 py-1 bg-transparent focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-r hover:bg-blue-700"
          >
            Search
          </button>
        </form>

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
        </div>
      </div>

      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default ResponshivNavbar;
