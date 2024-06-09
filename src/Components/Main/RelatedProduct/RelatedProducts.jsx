import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./RelatedProducts.module.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";

const RelatedProducts = ({ currentProduct, products }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { cart, addToCart } = useContext(CartContext);

  const [clickedItem, setClickedItem] = useState(null);
  useEffect(() => {
    const clickedState = {};
    cart.forEach((item) => {
      clickedState[item.title] = { count: item.quantity };
    });
    setClickedButtons(clickedState);
  }, [cart]);

  const handleButtonClick = (index, item) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [item.title]: { count: (prevState[item.title]?.count || 0) + 1 },
    }));
    addToCart(item);
  };

  const navigate = useNavigate();

  const [clickedButtons, setClickedButtons] = useState({});

  const handleProductClick = (item) => {
    navigate(`/single-page/${item.title}`, { state: { product: item } });
  };

  const relatedProducts = products.filter(
    (item) =>
      item.Genreid === currentProduct.Genreid &&
      item.title !== currentProduct.title
  );

  return (
    <div className="mt-10 related-products">
      <h3 className="mb-6 text-2xl">Related Products</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {relatedProducts.map((item, index) => (
          <div
            className="relative p-4 bg-white border rounded-lg shadow-md group"
            key={index}
          >
            <Link to={`/single-page/${item.title}`} className="block">
              <div className="hover:bg-white">
                <div className="relative">
                  <div className={styles.discountreal}>
                    <div className={styles.discountab}>{item.discount}</div>
                  </div>
                  <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mb-2 mySwiper"
                  >
                    {item.images.map((image, imgIndex) => (
                      <SwiperSlide key={`${index}-${imgIndex}`}>
                        <img
                          className="object-contain w-full h-48 mb-2"
                          src={image}
                          alt={`Slide ${imgIndex + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="mt-6">
                  <h3 className="mb-6 text-lg font-medium hover:text-blue-500">
                    {item.title}
                  </h3>
                  <div className="flex mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>
                        {i <= item.rating ? (
                          <FaStar className="text-yellow-500" />
                        ) : (
                          <FaRegStar className="text-gray-400" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 line-through">
                  {item.originalPrice}
                </p>
                <p className="text-xl font-bold text-red-500">
                  {item.discountPrice}
                </p>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleButtonClick(index, item)}
                  className="text-[24px] p-2 relative"
                >
                  <HiOutlineShoppingCart
                    className={`${
                      clickedButtons[item.title]?.count
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  />
                  {clickedButtons[item.title]?.count && (
                    <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs text-white translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                      {clickedButtons[item.title].count}
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="py-4">
              <hr />
              <ul className="mt-2 ml-5 text-sm list-disc">
                <li>{item.size}</li>
                <li>{item.operatingSystem}</li>
                <li>{item.productLength}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
