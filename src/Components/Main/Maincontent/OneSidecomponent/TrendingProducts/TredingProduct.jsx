import React from "react";
import { Link } from "react-router-dom";
import Product from "./Data";
import styles from "./TredingProduct.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const TrendingProduct = () => {
  return (
    <div className="mt-10 sticky top-[100px]">
      <div className="text-[20px] font-semibold mb-6">Trending Products</div>
      <hr className="mb-4" />
      {Product.map((item, index) => (
        <div key={index} className="mb-6">
          <Link
            to={{
              pathname: `/single-page/${item.title}`,
              state: { product: item },
            }}
            className="flex"
          >
            <div className="mr-4">
              <img className="w-[130px]" src={item.images} alt={item.title} />
            </div>
            <div className="">
              <p className="text-[13px] font-medium hover:text-[blue] mb-4">
                {item.title}
              </p>
              <div className="flex">
                <p className="mr-2 font-bold text-red-500">
                  {item.discountPrice}
                </p>
                <p
                  style={{ color: "rgb(107, 114, 128)" }}
                  className="line-through"
                >
                  {item.originalPrice}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TrendingProduct;
