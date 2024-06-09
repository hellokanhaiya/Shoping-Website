import React from "react";
import FooterCatogary from "./FooterCatogary";

const footerSections = [
  {
    title: "Make Money with Us",
    links: [
      {
        url: "https://klbtheme.com/machic/multivendor/about-us/",
        text: "Sell on Machic",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/contact/",
        text: "Sell Your Services",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/contact/",
        text: "Sell on Machic Business",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/about-us/",
        text: "Sell Your Apps",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/contact/",
        text: "Become an Affiliate",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/contact/",
        text: "Advertise Products",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/terms-and-conditions/",
        text: "Sell-Publish with Us",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/privacy-policy/",
        text: "Become a Machic Vendor",
      },
    ],
  },
  {
    title: "Product Categories",
    links: [
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/apple/",
        text: "Apple",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/camera-photo/",
        text: "Camera & Photo",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/cell-phones/",
        text: "Cell Phones",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/computers-accessories/",
        text: "Computers & Accessories",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/headphones/",
        text: "Headphones",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/smartwatches/",
        text: "Smartwatches",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/sports-outdoors/",
        text: "Sports & Outdoors",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/television-video/",
        text: "Television & Video",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/product-category/video-games/",
        text: "Video Games",
      },
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      {
        url: "https://klbtheme.com/machic/multivendor/my-account/",
        text: "Your Account",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/my-account/orders/",
        text: "Your Orders",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/refund_returns/",
        text: "Returns & Replacements",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/refund_returns/",
        text: "Shipping Rates & Policies",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/refund_returns/",
        text: "Refund and Returns Policy",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/privacy-policy/",
        text: "Privacy Policy",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/terms-and-conditions/",
        text: "Terms and Conditions",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/contact/",
        text: "Help Center",
      },
    ],
  },
  {
    title: "Get to Know Us",
    links: [
      { url: "https://klbtheme.com/machic/contact/", text: "Careers" },
      {
        url: "https://klbtheme.com/machic/multivendor/about-us/",
        text: "About Machic",
      },
      {
        url: "https://klbtheme.com/machic/about-us/",
        text: "Investor Relations",
      },
      { url: "https://klbtheme.com/machic/about-us/", text: "Machic Devices" },
      {
        url: "https://klbtheme.com/machic/about-us/",
        text: "Customer Reviews",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/privacy-policy/",
        text: "Privacy Policy",
      },
      {
        url: "https://klbtheme.com/machic/multivendor/contact/",
        text: "Contact Us",
      },
    ],
  },
];

const FooterWidgets = () => {
  return (
    <div className=" footer-row footer-widgets">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          {footerSections.map((section, index) => (
            <FooterCatogary
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterWidgets;
