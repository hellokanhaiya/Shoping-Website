import React, { useState, useEffect } from "react";
import HeaderTop from "./Components/Header-top/headerTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CategoryList from "./Components/Elementer-footer-wedigth/ElementerWeigth";
import HeaderNavbar from "./Components/Header-nav/Header";
import ResponshivNavbar from "./SidebarResponse/ReposhiveNavbar";

const Layout = ({ children, navbarItems }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    // Initial check for mobile
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {isMobile ? (
        <ResponshivNavbar />
      ) : (
        <>
          <HeaderTop />

          <Navbar />
          <div className="Container">
            <HeaderNavbar />
          </div>
        </>
      )}
      {children}
      <CategoryList />
      <Footer />
    </div>
  );
};

export default Layout;
