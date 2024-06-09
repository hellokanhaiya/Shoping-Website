import product from "../../../../FeaturedCourse/MainContent/Secondcol/Product/nothing1";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "swiper/swiper-bundle.css";

const ITEMS_PER_PAGE = 12;

const CameraComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { cart, updateQuantity } = useContext(CartContext);
  const [clickedItem, setClickedItem] = useState(null);
  useEffect(() => {
    const clickedState = {};
    cart.forEach((item) => {
      clickedState[item.title] = { count: item.quantity };
    });
    setClickedButtons(clickedState);
  }, [cart]);

  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentPage);
    navigate({ search: searchParams.toString() }, { replace: true });
  }, [currentPage, navigate]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const filteredProducts = product.filter((item) => item.Genreid === "Camra");

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

  const { addToCart } = useContext(CartContext);
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

  return (
    <div className="container mx-auto mt-6">
      <div className="flex flex-wrap -mx-4">
        {currentItems.map((item, index) => (
          <div
            className="w-full px-4 mb-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            key={index}
          >
            <Link
              to={{
                pathname: `/single-page/${item.title}`,
                state: { product: item },
              }}
              className="block group"
            >
              <div className="transition duration-300 ease-in-out cursor-pointer hover:bg-white group-hover:shadow-md">
                <div className="relative">
                  <div className="absolute top-0 right-0 p-1 text-white bg-black rounded-br">
                    {item.discount}
                  </div>
                  <Swiper spaceBetween={30} className="mb-2">
                    {item.images.map((image, imgIndex) => (
                      <SwiperSlide key={`${index}-${imgIndex}`}>
                        <img
                          className="object-cover w-full mb-2"
                          src={image}
                          alt={`Slide ${imgIndex + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-base font-medium group-hover:text-blue-500">
                    {item.title}
                  </h3>
                  <div className="flex mb-2">
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
                <p className="text-lg font-bold text-red-500">
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
            <div className="py-4 border-t">
              <ul className="pl-2 ml-5 text-xs list-disc">
                <li>{item.size}</li>
                <li>{item.operatingSystem}</li>
                <li>{item.productLength}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
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
  );
};

export default CameraComponent;
