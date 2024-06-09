import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../../../Components/Main/CartContext";
import styles from "./Product.module.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import product from "./nothing1"; // Ensure the path is correct

const Productallfeatured = () => {
  const ITEMS_PER_PAGE = 12;
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [clickedButtons, setClickedButtons] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const clickedState = {};
    cart.forEach((item) => {
      clickedState[item.title] = { count: item.quantity };
    });
    setClickedButtons(clickedState);
  }, [cart]);

  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentPage);
    navigate({ search: searchParams.toString() }, { replace: true });
  }, [currentPage, navigate, location.search]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const filteredProducts = product.filter((item) => item.Genreid === "LedTv");
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const currentItems = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
    <div className="flex flex-col w-full my-12">
      <div className="w-full z-100">
        <div className="flex flex-wrap justify-center p-2">
          {currentItems.map((item, index) => (
            <div
              className={`w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5`}
              key={index}
            >
              <Link
                to={{
                  pathname: `/single-page/${item.title}`,
                  state: { product: item },
                }}
                className={styles.productLink}
                onClick={() => handleItemClick(item)}
              >
                <div className="hover:bg-[white]">
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
                          className="mb-2"
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
              <div className="flex items-center justify-between">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productallfeatured;
