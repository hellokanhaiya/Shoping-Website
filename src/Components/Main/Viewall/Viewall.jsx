import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { CartContext } from "../CartContext";
import "swiper/css";
import "swiper/css/pagination";
import productData from "../../../FeaturedCourse/MainContent/Secondcol/Product/nothing1";
import styles from "./Viewall.module.css";

const ITEMS_PER_PAGE = 16;

const Viewall = () => {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
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

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentPage);
    navigate({ search: searchParams.toString() });
  }, [currentPage, navigate, location.search]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const totalPages = Math.ceil(productData.length / ITEMS_PER_PAGE);

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

  const currentItems = productData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    Math.min(currentPage * ITEMS_PER_PAGE, productData.length)
  );

  return (
    <div className="flex w-full my-12">
      <div className="w-full z-100">
        <div className="flex flex-wrap w-full p-2">
          {currentItems.map((item, index) => (
            <div
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ${styles.hoverwidth}`}
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
                <div className="hover:bg-white">
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
              <div>
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
              </div>
              <div className="py-4 someting2 someting">
                <hr />
                <ul className="ml-5 text-xs list-disc md:text-sm lg:text-base">
                  <li>{item.size}</li>
                  <li>{item.operatingSystem}</li>
                  <li>{item.productLength}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            <button
              className="px-3 py-1 mx-1 text-blue-500 bg-white border rounded"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-3 py-1 border rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 mx-1 text-blue-500 bg-white border rounded"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewall;
