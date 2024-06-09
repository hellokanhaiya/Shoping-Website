import React, { useContext, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "./SearchResults.module.css";
import product from "../../FeaturedCourse/MainContent/Secondcol/Product/nothing1";
import { CartContext } from "../Main/CartContext";
import "swiper/css";
import "swiper/css/pagination";

// Custom hook to get query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedButtons, setClickedButtons] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const query = useQuery();
  const searchQuery = query.get("query") || "";

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

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const filteredProducts = product.filter((product) => {
    const words = product.title.toLowerCase().split(" ");
    const searchLower = searchQuery.toLowerCase();
    return (
      words.some((word) => word.includes(searchLower)) ||
      product.title.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="flex flex-wrap justify-center product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <div
            className={`w-full sm:w-[48%] md:w-[32%] lg:w-[24%] mb-4 p-2 ${styles.hoverwidth}`}
            key={index}
          >
            <Link
              to={{
                pathname: `/single-page/${item.title}`,
                state: { product: item, Genre: item.Genre },
              }}
              className={`${styles.productLink}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="hover:bg-[white]">
                <div className={`${styles.discountreal}`}>
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
                        className="w-full mb-2"
                        src={image}
                        alt={`Slide ${imgIndex + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-6">
                  <h3 className="text-[15px] font-medium hover:text-[blue] mb-6">
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
            <div className="flex items-center justify-between p-4">
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
            <div className="py-4 someting2 someting">
              <hr />
              <ul className="list-disc text-[12px] ml-[20px]">
                <li className="z-[-20]">{item.size}</li>
                <li>{item.operatingSystem}</li>
                <li>{item.productLength}</li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default SearchResults;
