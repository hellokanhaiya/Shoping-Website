import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="px-4 overflow-hidden md:px-8">
      <div className="flex text-[12px] justify-between mt-[12px]">
        <div>
          <ul className="flex">
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
        <div className="mr-[50px] relative hidden">
          <ul className="flex">
            <li className="mr-[1.5625rem] header-list">
              <a href="#">Order Traking</a>
            </li>
            <li className="relative group">
              <a href="#" className="flex items-center">
                English
                <MdKeyboardArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
              </a>
              <ul className="absolute left-0 z-10 mt-2 transition-opacity duration-200 bg-white rounded shadow-lg opacity-0 pointer-events-none w-28 group-hover:opacity-100 group-hover:pointer-events-auto">
                <li className="p-2 mr-[10px] hover:bg-gray-200">
                  <a href="#">English</a>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <a href="#">Spanish</a>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <a href="#">German</a>
                </li>
              </ul>
            </li>
            <li className="relative group ml-[14px]">
              <a href="#" className="flex items-center">
                USD
                <MdKeyboardArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
              </a>
              <ul className="absolute left-0 z-10 mt-2 transition-opacity duration-200 bg-white rounded shadow-md opacity-0 pointer-events-none w-28 group-hover:opacity-100 group-hover:pointer-events-auto">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
