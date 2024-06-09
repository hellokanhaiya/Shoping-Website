import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const FooterDetails = () => {
  // Social media links array
  const tagLinks = [
    {
      name: "Apple",
      href: "https://klbtheme.com/machic/multivendor/product-tag/apple/",
    },
    {
      name: "Apple Watch",
      href: "https://klbtheme.com/machic/multivendor/product-tag/apple-watch/",
    },
    {
      name: "Beats",
      href: "https://klbtheme.com/machic/multivendor/product-tag/beats/",
    },
    {
      name: "Camera",
      href: "https://klbtheme.com/machic/multivendor/product-tag/camera/",
    },
    {
      name: "Game Controller",
      href: "https://klbtheme.com/machic/multivendor/product-tag/game-controller/",
    },
    {
      name: "HD",
      href: "https://klbtheme.com/machic/multivendor/product-tag/hd/",
    },
    {
      name: "HTC",
      href: "https://klbtheme.com/machic/multivendor/product-tag/htc/",
    },
    {
      name: "HTC one",
      href: "https://klbtheme.com/machic/multivendor/product-tag/htc-one/",
    },
    {
      name: "iMac",
      href: "https://klbtheme.com/machic/multivendor/product-tag/imac/",
    },
    {
      name: "Ipad",
      href: "https://klbtheme.com/machic/multivendor/product-tag/ipad/",
    },
    {
      name: "Ipad 4 16Gb",
      href: "https://klbtheme.com/machic/multivendor/product-tag/ipad-4-16gb/",
    },
    {
      name: "Ipad Mini",
      href: "https://klbtheme.com/machic/multivendor/product-tag/ipad-mini/",
    },
    {
      name: "Keyboard",
      href: "https://klbtheme.com/machic/multivendor/product-tag/keyboard/",
    },
    {
      name: "Lenovo",
      href: "https://klbtheme.com/machic/multivendor/product-tag/lenovo/",
    },
    {
      name: "M8",
      href: "https://klbtheme.com/machic/multivendor/product-tag/m8/",
    },
    {
      name: "Mackbook Pro M1",
      href: "https://klbtheme.com/machic/multivendor/product-tag/mackbook-pro-m1/",
    },
    {
      name: "Mouse",
      href: "https://klbtheme.com/machic/multivendor/product-tag/mouse/",
    },
    {
      name: "Samsung",
      href: "https://klbtheme.com/machic/multivendor/product-tag/samsung/",
    },
    {
      name: "Samsung Galaxy M11",
      href: "https://klbtheme.com/machic/multivendor/product-tag/samsung-galaxy-m11/",
    },
    {
      name: "Samsung Galaxy M31",
      href: "https://klbtheme.com/machic/multivendor/product-tag/samsung-galaxy-m31/",
    },
    {
      name: "Samsung Galaxy S5 - 64gb",
      href: "https://klbtheme.com/machic/multivendor/product-tag/samsung-galaxy-s5-64gb/",
    },
    {
      name: "Samsung Galaxy Tab 4",
      href: "https://klbtheme.com/machic/multivendor/product-tag/samsung-galaxy-tab-4/",
    },
    {
      name: "Wireless Speaker",
      href: "https://klbtheme.com/machic/multivendor/product-tag/wireless-speaker/",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    { name: "Twitter", href: "https://twitter.com/", icon: <FaTwitter /> },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/",
      icon: <FaPinterestSquare />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: <IoLogoInstagram />,
    },
    { name: "Youtube", href: "https://www.youtube.com/", icon: <FaYoutube /> },
  ];

  return (
    <div className="p-4 bg-gray-100 footer-details lg:p-8">
      <div className="flex flex-col justify-between mt-8 site-details lg:flex-row lg:mt-12">
        <div className="flex justify-center mb-8 site-brand lg:mb-0 lg:justify-start">
          <a
            href="https://klbtheme.com/machic/multivendor/"
            title="Multi Vendor eCommerce Theme"
          >
            <img
              src="https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/08/logo-dark.png"
              alt="Multi Vendor eCommerce Theme"
              className="w-32 lg:w-40"
            />
          </a>
        </div>

        <div className="flex justify-center site-social lg:justify-end">
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li
                className="flex items-center justify-center w-10 h-10 text-white bg-gray-400 rounded-full"
                key={index}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 site-details">
        <ul className="flex flex-wrap justify-center space-x-2 tags lg:justify-start lg:space-x-4">
          {tagLinks.map((tag, index) => (
            <li className="text-sm lg:text-base" key={index}>
              <a href={tag.href} className="hover:underline">
                {tag.name}
                {index < tagLinks.length - 1 && <span className="ml-1">|</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mt-8 border-gray-300 lg:mt-16" />
    </div>
  );
};

export default FooterDetails;
