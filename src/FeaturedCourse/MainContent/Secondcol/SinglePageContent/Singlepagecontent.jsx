import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import { CiHeart } from "react-icons/ci";
import { LuBox } from "react-icons/lu";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./Singlepagecontent.module.css";
import { CartContext } from "../../../../Components/Main/CartContext";
import SatisfactionAll from "./Allui";
import RelatedProducts from "../../../../Components/Main/RelatedProduct/RelatedProducts";

const ProductDetails = ({ products }) => {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const { title } = useParams();
  const product = products.find((item) => item.title === title);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    const itemInCart = cart.find(
      (cartItem) => cartItem.title === product.title
    );

    if (itemInCart) {
      updateQuantity(itemInCart.id, itemInCart.quantity + quantity);
    } else {
      addToCart(product, quantity);
    }
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="px-4 my-14 product-details md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row md:flex-wrap-reverse">
        <div className={`w-full md:w-[45%] ${styles.firstcol} flex-shrink-0`}>
          <div className="flex p-[10px]">
            <div className={`${styles.discountreal}`}>
              <div className={styles.discountab}>{product.discount}</div>
            </div>
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mb-2 mySwiper"
            >
              {product.imagesLarge &&
                product.imagesLarge.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img
                      className="object-contain w-full mb-2"
                      src={image}
                      alt={`Slide ${imgIndex + 1}`}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div
          className={`w-full md:w-[55%] flex-grow Second-col px-8 ${styles.borderbottom}`}
        >
          <div>
            <h2 className="text-[24px] md:text-[28px] font-normal">
              {product.title}
            </h2>
          </div>
          <div className="font-[14px] text-[#818ea0] mt-2">
            <span>
              {product.Sku} | <span>{product.Model}</span>
            </span>
          </div>
          <div className="flex my-6">
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
          <div className="flex text-center text-[#00a046] bg-[#f4faf6] w-fit rounded px-4 py-2">
            <span className="my-auto mr-2">{product.circleicon}</span>
            {product.Instock}
          </div>
          <div className="flex my-4">
            <span className="text-[#ef262c] text-[24px] mr-2">
              {product.discountPrice}
            </span>
            <span className="line-through text-[#818ea0]">
              {product.originalPrice}
            </span>
          </div>
          <div className="border border-gray-300">
            <div className={`mx-auto py-6 ${styles.borderbottom}`}>
              <div className="flex flex-col p-1 md:flex-row">
                <div className="p-2 max-w-[100px] border rounded border-gray-300 px-[1rem] ml-0 md:ml-10 mb-4 md:mb-0">
                  <button className="mr-4" onClick={decreaseQuantity}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="ml-4" onClick={increaseQuantity}>
                    +
                  </button>
                </div>
                <div className="mb-4 ml-0 md:ml-10 md:mb-0">
                  <button
                    className="bg-[#037535] w-fit px-[10px] py-[9px] rounded text-white"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="my-auto ml-0 md:ml-10">
                  <p className="">
                    <span className="flex">
                      <CiHeart className="my-auto" />
                      Add to wishlist
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 ml-6">
              <div className="flex">
                <span className="my-auto">
                  <LuBox />
                </span>
                <span className="ml-2">
                  <strong> 2-day Delivery</strong>
                </span>
                <span className="ml-2"> |</span>
                <span className="ml-2">
                  Speedy and reliable parcel delivery!
                </span>
              </div>
            </div>
          </div>
          <div className="other-people px-[12px] py-[10px] bg-[#fffcf2] text-[#c28e00] border border-gray-300 my-6 rounded">
            <div className="flex">
              <span className="my-auto mr-2">{product.shoppingBag}</span>
              <span>
                <strong>Other people want this.</strong>
              </span>
              <span className="ml-2">
                1 person has this in their cart right now.
              </span>
            </div>
          </div>
          <div className="category">
            <div className="flex">
              <p>Categories: </p>
              <p className="text-[#0070dc] text-[14px] ml-2 my-auto">
                {product.catagaroy}
              </p>
            </div>
          </div>
          <div className="my-4 social-icon">
            <ul className="flex">
              {product.socialIcons &&
                product.socialIcons.map((socialIcon, iconIndex) => (
                  <li
                    key={iconIndex}
                    style={{ backgroundColor: socialIcon.bgcolor }}
                    className="w-[30px] h-[30px] text-white rounded-full text-center flex items-center mr-2 justify-center"
                  >
                    {socialIcon.icon}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <SatisfactionAll />
      <RelatedProducts currentProduct={product} products={products} />
    </div>
  );
};

export default ProductDetails;
