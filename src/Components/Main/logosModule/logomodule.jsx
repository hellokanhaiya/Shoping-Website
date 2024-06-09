import React from "react";
import { Link } from "react-router-dom";
import styles from "./logomodule.module.css";

const logoimages = [
  {
    images: "1.png",
    link: "",
  },
  {
    images: "2.png",
    link: "/dellproducts",
  },
  {
    images: "3.png",
    link: "/lenovoproducts",
  },
  {
    images: "4.png",
    link: "/asusprodutcs",
  },
  {
    images: "5.png",
    link: "/sumsungproducts",
  },
  {
    images: "6.png",
    link: "/sonyproducts",
  },
];

const Logomodule = () => {
  return (
    <>
      <div className={`${styles.logoscontainer}`}>
        {" "}
        {/* Apply the logos-container class */}
        {logoimages.map((image, index) => (
          <Link
            to={image.link}
            key={index}
            className={` flex justify-center mb-4 opacity-50 logos-container hover:opacity-100`}
          >
            <img
              className="max-h-[3.75rem] hover:text-[black]"
              src={image.images}
              alt={`Logo ${index + 1}`}
            />
          </Link>
        ))}
      </div>
      <div className="mb-4">
        <hr />
      </div>
    </>
  );
};

export default Logomodule;
