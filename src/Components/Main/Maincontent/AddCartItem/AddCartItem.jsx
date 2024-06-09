import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
import styles from "./AddCartItem.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const AddCartItem = () => {
  const rightSideRef = useRef(null);
  const [leftSideHeight, setLeftSideHeight] = useState(0);
  const { cart, removeItem, updateQuantity, getTotalPrice, removeAllItems } =
    useContext(CartContext);

  const totalPrice = parseFloat(getTotalPrice());
  const freeShippingThreshold = 800;
  const deliveryCharge = 80;

  const currentProgress = Math.min(
    (totalPrice / freeShippingThreshold) * 100,
    100
  );

  const isFreeShipping = totalPrice >= freeShippingThreshold;

  const getFinalTotal = () => {
    return isFreeShipping ? totalPrice : totalPrice + deliveryCharge;
  };

  useEffect(() => {
    if (rightSideRef.current) {
      setLeftSideHeight(rightSideRef.current.clientHeight);
    }
  }, [rightSideRef, cart.length]);

  const increment = (productId) => {
    updateQuantity(
      productId,
      cart.find((item) => item.id === productId).quantity + 1
    );
  };

  const decrement = (productId) => {
    updateQuantity(
      productId,
      Math.max(cart.find((item) => item.id === productId).quantity - 1, 1)
    );
  };

  const getSubtotal = (item) => {
    const price = item.discountPrice
      ? parseFloat(item.discountPrice.replace("$", ""))
      : item.price;
    return (price * item.quantity).toFixed(2);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Billing-details");
  };

  return (
    <div
      className={`${styles.cartContainer} mt-10 mb-20 p-2`}
      ref={rightSideRef}
    >
      <div className="flex flex-col lg:flex-row">
        <div className={`${styles.cartDropdown} lg:w-[75%] col-1`}>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <div
                className={`p-4 mb-10 rounded-lg klb-free-progress-bar ${styles.border} w-[95%]`}
              >
                {isFreeShipping ? (
                  <div className="text-green-600 free-shipping-notice">
                    Your order qualifies for free shipping!
                  </div>
                ) : (
                  <div className="free-shipping-notice">
                    Add
                    <strong className="mx-1 text-red-600">
                      $
                      {Math.max(freeShippingThreshold - totalPrice, 0).toFixed(
                        2
                      )}
                    </strong>
                    to cart and get free shipping!
                  </div>
                )}
                <div className="mt-4 bg-gray-300 rounded-full klb-progress-bar">
                  <div
                    className="h-2 bg-blue-400 rounded-full progress"
                    style={{ width: `${currentProgress}%` }}
                  ></div>
                </div>
              </div>
              <table
                className="table shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                cellSpacing="0"
              >
                <thead>
                  <tr className={`${styles.borderbottom}`}>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="pr-4 product-price">Price</th>
                    <th className="pr-4 product-quantity">Quantity</th>
                    <th className="pr-4 product-subtotal">Subtotal</th>
                    <th className="pr-4 product-remove">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr
                      className={`woocommerce-cart-form__cart-item cart_item ${styles.lightbroderbottom}`}
                      key={item.id} // Unique ID assigned here
                    >
                      <td className="product-thumbnail">
                        <a href={item.url}>
                          <img
                            decoding="async"
                            width="90"
                            height="90"
                            src={item.images[0]}
                            alt={item.title}
                          />
                        </a>
                      </td>
                      <td className="product-name" data-title="Product">
                        <a className="text-[14px]" href={item.url}>
                          {item.title}
                        </a>
                      </td>
                      <td
                        className="product-price px-[2rem]"
                        data-title="Price"
                      >
                        {item.discountPrice}
                      </td>
                      <td
                        className="px-[4rem] product-quantity"
                        data-title="Quantity"
                      >
                        <div className="p-1 border border-gray-300 px-[1rem] rounded">
                          <button
                            className="mr-4"
                            onClick={() => decrement(item.id)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="ml-4"
                            onClick={() => increment(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="product-subtotal" data-title="Subtotal">
                        {item.discountPrice
                          ? `$${getSubtotal(item)}`
                          : "Subtotal not available"}
                      </td>
                      <td className="product-remove text-[24px] px-[1rem]">
                        <button onClick={() => removeItem(item.id)}>
                          <IoIosCloseCircleOutline />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8">
                <button
                  className="bg-[#041e42] text-white px-[14px] py-[12px] rounded"
                  onClick={removeAllItems}
                >
                  Remove all
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className="col-2  p-6 sticky top-4 lg:w-[25%] lg:p-6 mt-8 lg:mt-0"
          style={{
            position: "sticky",
            position: "-webkit-sticky",
          }}
        >
          {cart.length > 0 && (
            <div>
              <h2 className="mb-4 font-bold">CART TOTALS</h2>
              <div
                className={`flex justify-between mt-4 ${styles.lightbroderbottom} pb-[0.5rem]`}
              >
                <p>Subtotal</p>
                <p>
                  <strong> </strong>${totalPrice.toFixed(2)}
                </p>
              </div>
              <div
                className={`flex justify-between py-[12px] ${styles.lightbroderbottom}`}
              >
                <div className="flex items-center justify-center">
                  <p>Shipping</p>
                </div>
                <div>
                  <p>
                    Free Shipping{" "}
                    <input
                      className="ml-[1rem]"
                      type="radio"
                      checked={isFreeShipping}
                      readOnly
                    />
                  </p>
                  <p>
                    Delivery Charge
                    <input
                      className="ml-[1rem]"
                      type="radio"
                      checked={!isFreeShipping}
                      readOnly
                    />
                  </p>
                  <p className="mb-[1rem]">
                    Shipping to <strong>NY</strong>
                  </p>
                  <a href="#" className="text-[blue] ">
                    Change Address
                  </a>
                </div>
              </div>
              <div
                className={`flex justify-between mt-4 ${styles.lightbroderbottom} pb-[0.5rem]`}
              >
                <p className="font-semibold">Total</p>
                <p className="font-bold"> ${getFinalTotal().toFixed(2)}</p>
              </div>
              <div className="mt-8">
                <button
                  className="bg-[#041e42] text-white w-full px-[14px] py-[12px] rounded"
                  onClick={handleButtonClick}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCartItem;
