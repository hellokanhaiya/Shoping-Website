import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import icons from "./data";
import styles from "./Cellphone.module.css";
import { CartContext } from "../CartContext";

const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSidebarVisible } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className={`${styles.sidebarcontent} ${
          isSidebarVisible ? "lg:w-1/4" : "hidden lg:block"
        }`}
      >
        <ul className={`${styles.ulBorder}`}>
          {icons.map((item, index) => (
            <li className={`${styles.listBorder}`} key={index}>
              <Link to={item.link} className="flex">
                <div className="flex items-center">
                  <span className="mr-6">{item.categoryicon}</span>
                  <span className="text-[15px]">{item.name}</span>
                  <span>{item.icon}</span>
                </div>
              </Link>
              {item.subcategories && item.subcategories.length > 0 && (
                <ul>
                  {item.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a href="#">{sub.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full p-6 mt-6 lg:mt-0 lg:w-3/4">
        <Link to="/View-all" className="relative flex flex-col lg:flex-row">
          <div className={`${styles.bannerContainer}`}>
            <div className={styles.bannerContent}>
              <h6 className={`${styles.weekendDiscount}`}> Weekend Discount</h6>
              <h3 className="text-[2.5rem] lg:text-[3rem] font-light">
                Enhance Your{" "}
                <strong className="font-semibold text-[3rem]">
                  Entertainment
                </strong>
              </h3>
              <div className="mt-2">
                <p className="text-base">
                  Last call for up to{" "}
                  <strong className="text-[#ef262c] text-[24px]">20%</strong>{" "}
                  off!
                </p>
              </div>
              <div className="mt-4 lg:mt-8">
                <a
                  href="https://klbtheme.com/machic/shop/"
                  className="px-6 py-3 mt-6 text-white transition duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
