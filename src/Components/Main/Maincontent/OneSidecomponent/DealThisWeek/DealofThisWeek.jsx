import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./DealofThisWeek.module.css";
import { Link } from "react-router-dom";

const DealofthisWeek = () => {
  const Product = [
    {
      title: "Bose Noise Cancelling Wireless Bluetooth",
      images: [
        "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/noise3-400x400.jpeg",
      ],
      rating: 4, // As a number
      originalprice: "$479.00",
      discount: "20.9%",
      discountprice: "$379.00",
    },
  ];

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Deals of This Week</h2>
      <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        {Product.map((product, index) => (
          <Link
            key={index}
            to={{
              pathname: `/single-page/${product.title}`,
              state: { product },
            }}
            style={{ width: "100%", height: "100%" }}
            className="flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div className={`${styles.discountreal}`}>
                <div className={styles.discountab}>{product.discount}</div>
              </div>
              <img
                src={product.images[0]}
                alt={product.title}
                className="object-cover w-32 h-32 mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>
                    {i <= product.rating ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-400" />
                    )}
                  </span>
                ))}
              </div>
              <div className="text-gray-500 line-through">
                {product.originalprice}
              </div>
              <div className="font-bold text-red-500">
                {product.discountprice}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DealofthisWeek;
