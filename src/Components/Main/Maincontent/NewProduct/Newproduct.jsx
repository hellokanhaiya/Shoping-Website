import React, { useContext, useState, useEffect } from "react";
import styles from "./Newproduct.module.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Product from "./data";
import "swiper/css";
import "swiper/css/pagination";
import { CartContext } from "../../CartContext";
import AddCartItem from "../AddCartItem/AddCartItem";

const NewProduct = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  const [clickedButtons, setClickedButtons] = useState({});
  const [clickedItem, setClickedItem] = useState(null);
  useEffect(() => {
    const clickedState = {};
    cart.forEach((item) => {
      clickedState[item.title] = { count: item.quantity };
    });
    setClickedButtons(clickedState);
  }, [cart]);

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

  return (
    <div className="w-full z-[100]">
      <div className="flex flex-wrap justify-center p-4">
        {Product.map((item, index) => (
          <div
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 ${styles.hoverwidth} relative`}
            key={index}
          >
            <Link
              to={`/single-page/${item.title}`}
              state={{
                product: {
                  discount: item.discount,
                  title: item.title,
                  store: item.store,
                  rating: item.rating,
                  originalPrice: item.originalPrice,
                  discountPrice: item.discountPrice,
                  size: item.size,
                  operatingSystem: item.operatingSystem,
                  productLength: item.productLength,
                  images: item.images,
                },
              }}
              className={styles.productLink}
            >
              <div className="hover:bg-[white]">
                <div className={styles.discountreal}>
                  <div className={styles.discountab}>{item.discount}</div>
                </div>

                <Swiper
                  spaceBetween={30}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {item.images.map((image, imgIndex) => (
                    <SwiperSlide key={`${index}-${imgIndex}`}>
                      <img src={image} alt={`Slide ${imgIndex + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="pl-2 mt-6">
                  <h3 className="text-[15px] font-medium hover:text-blue-500 mb-6">
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

            <div className="flex items-center justify-between pl-2">
              <div>
                <p className="text-gray-500 line-through">
                  {item.originalPrice}
                </p>
                <p className="text-red-500 text-[20px] font-bold">
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

            <div
              className={`bg-[white] pl-2 z-[200] ${styles.hoverDetails}`}
              style={{
                visibility: hoveredIndex === index ? "visible" : "hidden",
                opacity: hoveredIndex === index ? 1 : 0,
                transition: "visibility 0s, opacity 0.3s linear",
              }}
            >
              <hr />
              <ul className="list-disc text-[12px] ml-[20px] py-4">
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

export default NewProduct;
