import styles from "./SuperDiscount.module.css";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Main/CartContext";
import { Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure you have imported Swiper CSS
import product from "../../../FeaturedCourse/MainContent/Secondcol/Product/nothing1";

const SuperDiscount = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [clickedItem, setClickedItem] = useState(null);
  useEffect(() => {
    const clickedState = {};
    cart.forEach((item) => {
      clickedState[item.title] = { count: item.quantity };
    });
    setClickedButtons(clickedState);
  }, [cart]);

  const [clickedButtons, setClickedButtons] = useState({});

  const handleButtonClick = (index, item) => {
    const itemInCart = cart.find((cartItem) => cartItem.title === item.title);

    if (itemInCart) {
      // Item already in cart, so just increment its count
      setClickedButtons((prevState) => ({
        ...prevState,
        [item.title]: { count: (prevState[item.title]?.count || 0) + 1 },
      }));
      updateQuantity(itemInCart.id, itemInCart.quantity + 1); // Update quantity in cart
    } else {
      // Item not in cart, add it to cart
      setClickedButtons((prevState) => ({
        ...prevState,
        [item.title]: { count: (prevState[item.title]?.count || 0) + 1 },
      }));
      addToCart(item);
    }
  };

  const filteredProducts = product.filter(
    (product) => parseFloat(product.discount) > 30
  );

  return (
    <div className="w-full z-[100]">
      <div className="flex flex-wrap w-full p-4">
        {filteredProducts.map((item, index) => (
          <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4" key={index}>
            <Link
              to={{
                pathname: `/single-page/${item.title}`,
                state: { product: item },
              }}
              className={styles.productLink}
            >
              <div className="cursor-pointer hover:bg-white">
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
                <div className="mt-6">
                  <h3 className="mb-6 text-sm font-medium md:text-base lg:text-lg hover:text-blue-500">
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
                <p className="text-base font-bold text-red-500 md:text-lg lg:text-xl">
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
            <div className="py-4 someting1 someting">
              <hr />
              <ul className="pl-2 ml-5 text-xs list-disc md:text-sm lg:text-base">
                <li className="z-[-20]">{item.size}</li>
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

export default SuperDiscount;
