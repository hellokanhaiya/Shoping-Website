import React, { useContext, useState, useEffect } from "react";
import styles from "./SmartPhone&Aess.module.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { CartContext } from "../../CartContext";

const SmartPhoneAess = () => {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [clickedButtons, setClickedButtons] = useState({});

  useEffect(() => {
    const clickedState = {};
    cart.forEach((item) => {
      clickedState[item.title] = { count: item.quantity };
    });
    setClickedButtons(clickedState);
  }, [cart]);
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    navigate(`/single-page/${item.title}`, { state: { product: item } });
  };

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
  const product = [
    {
      discount: "11%",
      title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      store: "Amazon",
      rating: 5,
      originalPrice: "$699.99",
      discountPrice: "$629.99",
      size: "Screen Size 10.9 in",
      operatingSystem: "Operating System Apple iOS",
      productLength: "Product Length 9.74 in",
      images: [
        "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-400x400.jpg",
      ],
    },
    {
      title: "Apple iPhone 11 64GB Yellow Fully Unlocked",
      store: "Harrier",
      rating: 4,
      discountPrice: "$478.67",
      size: "Fully Unlocked",
      operatingSystem: "iPhone 11 Pro Max",
      productLength: "6.50 in",
      images: [
        "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-2-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/yellow2-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/yellow3-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/yellow4-400x400.jpg",
      ],
    },
    {
      discount: "13%",
      title: "Apple iPhone 11 Pro Max (64GB) – Silver",
      store: "Migros",
      rating: 3,
      originalPrice: "$814.76",
      discountPrice: "$714.76",
      size: "Fully Unlocked",
      operatingSystem: "iPhone 11 Pro Max",
      productLength: "6.50 in",
      images: [
        "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-8-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/silver2-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/silver3-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/silver4-400x400.jpg",
      ],
    },
    {
      discount: "22%",
      title: "Apple MHXH3TU/A MagSafe Charger",
      store: "Amazon",
      rating: 5,
      originalPrice: "$37.64",
      discountPrice: "$27.64",
      size: "11.9 x 6.8 x 1.6 inches",
      operatingSystem: "Maintains compatibility with Qi charging",
      productLength: "Compatible with iPhone 12 Pro",
      images: [
        "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-9-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/charge3-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/charge4-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/charge1-1-400x400.jpg",
      ],
    },
    {
      discount: "7%",
      title: "Apple iPhone 11 Pro Max 256GB Gold Fully Unlocked",
      store: "Amazon",
      rating: 4,
      originalPrice: "$824.99",
      discountPrice: "$769.99",
      size: "Fully Unlocked",
      operatingSystem: "iPhone 11 Pro Max",
      productLength: "6.50 in",
      images: [
        "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-12-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/iphone2-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/iphone3-400x400.jpg",
      ],
    },
    {
      discount: "11%",
      title: "OnePlus 8 Pro Onyx Black Android Smartphone",
      store: "Amazon",
      rating: 3,
      originalPrice: "$959.00",
      discountPrice: "$859.00",
      size: "256GB Storage + 12GB RAM",
      operatingSystem: "120Hz Fluid Display",
      productLength: "5G Unlocked Android Smartphone U.S. Version",
      images: [
        "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-10-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/8pro2-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/8pro3-400x400.jpg",
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/8pro4-400x400.jpg",
      ],
    },
  ];

  const GalaxyX6 = [
    {
      company: "SUMSUNG PHONE",
      title: "Galaxy A46",
      paragraph: "Don't miss the last opportunity.",
      button: "Shop Now",
      phoneCases: "(0)",
      iPhone: "(1)",
      phoneAccessories: "(1)",
      postpaidPhones: "(1)",
      prepaidPhones: "(2)",
      images:
        "https://klbtheme.com/machic/multivendor/wp-content/plugins/machic-core/elementor/images/category-banner.jpg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`flex flex-wrap md:flex-nowrap ${styles.logoscontainer}`}>
      <div className="w-full md:w-[100%] w-[40%] mb-4 md:mb-0">
        {GalaxyX6.map((phone, index) => (
          <React.Fragment key={index}>
            <Link to={"/sumsungproducts"}>
              <div
                className="relative mt-4 cursor-pointer"
                style={{
                  backgroundImage: `url('${phone.images}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                }}
                onClick={() => handleProductClick(phone)}
              >
                <div className="px-4 mt-6 absolute top-[50px]">
                  <h2 className="text-blue-500 text-[12px]">{phone.company}</h2>
                  <h3 className="text-[24px] font-bold">{phone.title}</h3>
                  <p>{phone.paragraph}</p>
                  <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                    {phone.button}
                  </button>
                </div>
              </div>
            </Link>
            <div className="mt-4">
              <h3 className="mb-4 font-bold">Cell Phones</h3>
              <a href="#">
                <p className="mb-2">Phone Cases: {phone.phoneCases}</p>
              </a>
              <a href="#">
                <p className="mb-2">iPhone: {phone.iPhone}</p>
              </a>
              <a href="#">
                <p className="mb-2">
                  Phone Accessories: {phone.phoneAccessories}
                </p>
              </a>
              <a href="#">
                <p className="mb-2">Postpaid Phones: {phone.postpaidPhones}</p>
              </a>
              <a href="#">
                <p className="mb-2">Prepaid Phones: {phone.prepaidPhones}</p>
              </a>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className={`${styles.secondcol} w-[70%]`}>
        <div
          className={`flex flex-wrap justify-center p-4 ${styles.secondcol}`}
        >
          {product.map((item, index) => (
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
    </div>
  );
};

export default SmartPhoneAess;
