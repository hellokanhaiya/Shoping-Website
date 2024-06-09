import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import styles from "./BillingDetails.module.css";

const countryNames = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
];

const BillingDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { cart, getTotalPrice } = useContext(CartContext);
  const totalPrice = parseFloat(getTotalPrice());
  const freeShippingThreshold = 800;
  const deliveryCharge = 80;

  const currentProgress = Math.min(
    (totalPrice / freeShippingThreshold) * 100,
    100
  );

  const isFreeShipping = totalPrice >= freeShippingThreshold;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Clear the error for the specific field
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);

    // Clear the error for the country field
    if (event.target.value !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedCountry: "",
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.streetAddress)
      newErrors.streetAddress = "Street address is required";
    if (!formValues.city) newErrors.city = "City is required";
    if (!formValues.zipCode) newErrors.zipCode = "ZIP Code is required";
    if (!formValues.phone) newErrors.phone = "Phone number is required";
    if (!formValues.email) newErrors.email = "Email address is required";
    if (!selectedCountry)
      newErrors.selectedCountry = "Country/Region is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setOrderPlaced(true);
      setFormValues({
        firstName: "",
        lastName: "",
        streetAddress: "",
        apartment: "",
        city: "",
        zipCode: "",
        phone: "",
        email: "",
        orderNotes: "",
      });
      setSelectedCountry("");

      // Remove success message after 5 seconds
      setTimeout(() => {
        setOrderPlaced(false);
      }, 5000);
    }
  };

  const getFinalTotal = () => {
    return isFreeShipping ? totalPrice : totalPrice + deliveryCharge;
  };

  return (
    <div className="p-4 mt-10">
      <div
        className={`p-4 mb-10 rounded-lg klb-free-progress-bar ${styles.border} w-[95%]`}
      >
        {isFreeShipping ? (
          <div className="text-green-600 free-shipping-notice">
            Your order qualifies for free shipping!
          </div>
        ) : (
          <div className=" free-shipping-notice">
            Add
            <strong className="mx-1 text-red-600">
              ${Math.max(freeShippingThreshold - totalPrice, 0).toFixed(2)}
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
      <div className={`flex ${styles.logoscontainer}`}>
        <div className={` ${styles.firstcol} w-[65%]`}>
          <h2 className={`font-bold ${styles.borderbottom} pb-[0.5rem]`}>
            BILLING DETAILS
          </h2>
          <div className="flex justify-between mt-2 mb-4">
            <div className="col-1 w-[48%]">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm text-gray-700"
              >
                First name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className={`${styles.input}`}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className="col-2 w-[48%]">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm text-gray-700"
              >
                Last name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className={`${styles.input}`}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "300px",
            }}
          >
            <label htmlFor="country" style={{ marginBottom: "8px" }}>
              Country / Region
            </label>
            <select
              name="country"
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              className={`${styles.border}`}
              style={{ padding: "8px", fontSize: "16px" }}
            >
              <option value="">Select a country / region...</option>
              {countryNames.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.selectedCountry && (
              <p className="text-sm text-red-500">{errors.selectedCountry}</p>
            )}
          </div>
          <div className="mt-6">
            <label
              htmlFor="streetAddress"
              className="block mb-2 text-sm text-gray-700"
            >
              Street address *
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formValues.streetAddress}
              onChange={handleChange}
              className={`w-full pl-[10px] ${styles.input}`}
              placeholder="House number and street name"
            />
            {errors.streetAddress && (
              <p className="text-sm text-red-500">{errors.streetAddress}</p>
            )}
            <input
              type="text"
              name="apartment"
              value={formValues.apartment}
              onChange={handleChange}
              className={`w-full mt-4 pl-[10px] ${styles.input}`}
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="city" className="block mb-2 text-sm text-gray-700">
              Town / City *
            </label>
            <input
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleChange}
              className={`${styles.input}`}
            />
            {errors.city && (
              <p className="text-sm text-red-500">{errors.city}</p>
            )}
          </div>
          <div className="mt-6">
            <label
              htmlFor="zipCode"
              className="block mb-2 text-sm text-gray-700"
            >
              ZIP Code *
            </label>
            <input
              type="text"
              name="zipCode"
              value={formValues.zipCode}
              onChange={handleChange}
              className={`${styles.input}`}
            />
            {errors.zipCode && (
              <p className="text-sm text-red-500">{errors.zipCode}</p>
            )}
          </div>
          <div className="flex justify-between mt-4 mb-4">
            <div className="col-1 w-[48%]">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-gray-700"
              >
                Phone *
              </label>
              <input
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className={`${styles.input}`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
            <div className="col-2 w-[48%]">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-700"
              >
                Email address *
              </label>
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className={`${styles.input}`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="orderNotes"
              className="block mb-2 text-sm text-gray-700"
            >
              Order notes (optional)
            </label>
            <input
              type="text"
              name="orderNotes"
              value={formValues.orderNotes}
              onChange={handleChange}
              className={`h-[100px] pl-[0.5rem] ${styles.input}`}
              placeholder="Notes about your order, e.g. special notes for delivery."
            />
          </div>
        </div>
        <div className={` ${styles.firstcol} w-[65%] w-[35%] p-12`}>
          {cart.length > 0 && (
            <>
              <h2 className={`font-bold ${styles.borderbottom} pb-[0.5rem]`}>
                YOUR ORDER
              </h2>
              <div
                className={`flex justify-between ${styles.borderbottom} py-[12px]`}
              >
                <div className="font-semibold col-1">Product</div>
                <div className="font-semibold col-2">Subtotal</div>
              </div>
              <div className={`justify-between ${styles.borderbottom}`}>
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between my-2">
                    <div className="col-1 w-[50%] my-1">
                      <div>
                        {" "}
                        <span>{item.title}</span>
                        <span className={`${styles.fontweight}`}>
                          {" "}
                          (x{item.quantity})
                        </span>
                      </div>
                      <div>{item.updateQuantity}</div>
                    </div>
                    <div className="col-2 w-[50%] text-end">
                      {item.discountPrice}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`flex justify-between font-bold ${styles.borderbottom} py-[12px]`}
              >
                <div className="col-1">Subtotal</div>
                <div className="col-2">
                  <p>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </p>
                </div>
              </div>
              <div
                className={`flex justify-between py-[12px] ${styles.borderbottom}`}
              >
                <div className="flex items-center justify-center">
                  <p>Shipping</p>
                </div>
                <div>
                  <p>
                    Free Shipping
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
                </div>
              </div>
              <div
                className={`flex justify-between font-bold ${styles.borderbottom} py-[12px]`}
              >
                <div className="font-semibold col-1">Total</div>
                <div className="col-2">
                  <p className="font-bold">${getFinalTotal().toFixed(2)}</p>
                </div>
              </div>
              <div className="my-2 payment-method">
                <h2 className="font-bold">Select Payment Method</h2>
                <div className="payment-options">
                  <p className="my-2">
                    <label>
                      <input
                        type="radio"
                        value="creditCard"
                        className="mr-[5px]"
                      />
                      Credit Card
                    </label>
                  </p>
                  <p className="my-2">
                    <label>
                      <input className="mr-[5px]" type="radio" value="paypal" />
                      PayPal
                    </label>
                  </p>
                  <p className="my-2">
                    <label>
                      <input
                        className="mr-[5px]"
                        type="radio"
                        value="bankTransfer"
                      />
                      Bank Transfer
                    </label>
                  </p>
                </div>
              </div>
            </>
          )}
          <div>
            <button
              onClick={handleSubmit}
              className="bg-[#ef262c] text-white px-[20px] py-[10px] rounded mt-6"
            >
              Proceed to Payment
            </button>
            {orderPlaced && (
              <p className="mt-4 text-green-600">
                Your order has been placed and the form has been reset!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
// import { useState, useContext } from "react";
// import { CartContext } from "../../CartContext";
// import styles from "./BillingDetails.module.css";

// const countryNames = [
//   "Afghanistan",
//   "Åland Islands",
//   "Albania",
//   "Algeria",
//   "American Samoa",
//   // Add the rest of the countries...
// ];

// const BillingDetails = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     apartment: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//     orderNotes: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const { cart, getTotalPrice } = useContext(CartContext);
//   const totalPrice = parseFloat(getTotalPrice());
//   const freeShippingThreshold = 800;
//   const deliveryCharge = 80;

//   const currentProgress = Math.min(
//     (totalPrice / freeShippingThreshold) * 100,
//     100
//   );

//   const isFreeShipping = totalPrice >= freeShippingThreshold;

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));

//     // Clear the error for the specific field
//     if (value.trim() !== "") {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));
//     }
//   };

//   const handleCountryChange = (event) => {
//     setSelectedCountry(event.target.value);

//     // Clear the error for the country field
//     if (event.target.value !== "") {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         selectedCountry: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formValues.firstName) newErrors.firstName = "First name is required";
//     if (!formValues.lastName) newErrors.lastName = "Last name is required";
//     if (!formValues.streetAddress)
//       newErrors.streetAddress = "Street address is required";
//     if (!formValues.city) newErrors.city = "City is required";
//     if (!formValues.zipCode) newErrors.zipCode = "ZIP Code is required";
//     if (!formValues.phone) newErrors.phone = "Phone number is required";
//     if (!formValues.email) newErrors.email = "Email address is required";
//     if (!selectedCountry)
//       newErrors.selectedCountry = "Country/Region is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       setOrderPlaced(true);
//       setFormValues({
//         firstName: "",
//         lastName: "",
//         streetAddress: "",
//         apartment: "",
//         city: "",
//         zipCode: "",
//         phone: "",
//         email: "",
//         orderNotes: "",
//       });
//       setSelectedCountry("");

//       // Remove success message after 5 seconds
//       setTimeout(() => {
//         setOrderPlaced(false);
//       }, 5000);
//     }
//   };

//   const getFinalTotal = () => {
//     return isFreeShipping ? totalPrice : totalPrice + deliveryCharge;
//   };

//   return (
//     <div className="p-4 mt-10">
//       <div
//         className={`p-4 mb-10 rounded-lg klb-free-progress-bar ${styles.border} w-[95%]`}
//       >
//         {isFreeShipping ? (
//           <div className="text-green-600 free-shipping-notice">
//             Your order qualifies for free shipping!
//           </div>
//         ) : (
//           <div className=" free-shipping-notice">
//             Add
//             <strong className="mx-1 text-red-600">
//               ${Math.max(freeShippingThreshold - totalPrice, 0).toFixed(2)}
//             </strong>
//             to cart and get free shipping!
//           </div>
//         )}
//         <div className="mt-4 bg-gray-300 rounded-full klb-progress-bar">
//           <div
//             className="h-2 bg-blue-400 rounded-full progress"
//             style={{ width: `${currentProgress}%` }}
//           ></div>
//         </div>
//       </div>
//       <div className={`flex ${styles.logoscontainer}`}>
//         <div className={` ${styles.firstcol} w-[65%]`}>
//           <h2 className={`font-bold ${styles.borderbottom} pb-[0.5rem]`}>
//             BILLING DETAILS
//           </h2>
//           <div className="flex justify-between mt-2 mb-4">
//             <div className="col-1 w-[48%]">
//               <label
//                 htmlFor="firstName"
//                 className="block mb-2 text-sm text-gray-700"
//               >
//                 First name *
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formValues.firstName}
//                 onChange={handleChange}
//                 className={`${styles.input}`}
//               />
//               {errors.firstName && (
//                 <p className="text-sm text-red-500">{errors.firstName}</p>
//               )}
//             </div>
//             <div className="col-2 w-[48%]">
//               <label
//                 htmlFor="lastName"
//                 className="block mb-2 text-sm text-gray-700"
//               >
//                 Last name *
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formValues.lastName}
//                 onChange={handleChange}
//                 className={`${styles.input}`}
//               />
//               {errors.lastName && (
//                 <p className="text-sm text-red-500">{errors.lastName}</p>
//               )}
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               maxWidth: "300px",
//             }}
//           >
//             <label htmlFor="country" style={{ marginBottom: "8px" }}>
//               Country / Region
//             </label>
//             <select
//               name="country"
//               id="country"
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               className={`${styles.border}`}
//               style={{ padding: "8px", fontSize: "16px" }}
//             >
//               <option value="">Select a country / region...</option>
//               {countryNames.map((country, index) => (
//                 <option key={index} value={country}>
//                   {country}
//                 </option>
//               ))}
//             </select>
//             {errors.selectedCountry && (
//               <p className="text-sm text-red-500">{errors.selectedCountry}</p>
//             )}
//           </div>
//           <div className="mt-6">
//             <label
//               htmlFor="streetAddress"
//               className="block mb-2 text-sm text-gray-700"
//             >
//               Street address *
//             </label>
//             <input
//               type="text"
//               name="streetAddress"
//               value={formValues.streetAddress}
//               onChange={handleChange}
//               className={`w-full pl-[10px] ${styles.input}`}
//               placeholder="House number and street name"
//             />
//             {errors.streetAddress && (
//               <p className="text-sm text-red-500">{errors.streetAddress}</p>
//             )}
//             <input
//               type="text"
//               name="apartment"
//               value={formValues.apartment}
//               onChange={handleChange}
//               className={`w-full mt-4 pl-[10px] ${styles.input}`}
//               placeholder="Apartment, suite, unit, etc. (optional)"
//             />
//           </div>
//           <div className="mt-6">
//             <label htmlFor="city" className="block mb-2 text-sm text-gray-700">
//               Town / City *
//             </label>
//             <input
//               type="text"
//               name="city"
//               value={formValues.city}
//               onChange={handleChange}
//               className={`${styles.input}`}
//             />
//             {errors.city && (
//               <p className="text-sm text-red-500">{errors.city}</p>
//             )}
//           </div>
//           <div className="mt-6">
//             <label
//               htmlFor="zipCode"
//               className="block mb-2 text-sm text-gray-700"
//             >
//               ZIP Code *
//             </label>
//             <input
//               type="text"
//               name="zipCode"
//               value={formValues.zipCode}
//               onChange={handleChange}
//               className={`${styles.input}`}
//             />
//             {errors.zipCode && (
//               <p className="text-sm text-red-500">{errors.zipCode}</p>
//             )}
//           </div>
//           <div className="flex justify-between mt-4 mb-4">
//             <div className="col-1 w-[48%]">
//               <label
//                 htmlFor="phone"
//                 className="block mb-2 text-sm text-gray-700"
//               >
//                 Phone *
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formValues.phone}
//                 onChange={handleChange}
//                 className={`${styles.input}`}
//               />
//               {errors.phone && (
//                 <p className="text-sm text-red-500">{errors.phone}</p>
//               )}
//             </div>
//             <div className="col-2 w-[48%]">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm text-gray-700"
//               >
//                 Email address *
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formValues.email}
//                 onChange={handleChange}
//                 className={`${styles.input}`}
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-500">{errors.email}</p>
//               )}
//             </div>
//           </div>
//           <div className="mt-6">
//             <label
//               htmlFor="orderNotes"
//               className="block mb-2 text-sm text-gray-700"
//             >
//               Order notes (optional)
//             </label>
//             <textarea
//               name="orderNotes"
//               value={formValues.orderNotes}
//               onChange={handleChange}
//               className={`${styles.input}`}
//               placeholder="Notes about your order, e.g. special notes for delivery."
//               rows="4"
//             />
//           </div>
//           <button
//             onClick={handleSubmit}
//             className={`w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded ${styles.button}`}
//           >
//             Place Order
//           </button>
//           {orderPlaced && (
//             <p className="mt-4 text-green-600">Order placed successfully!</p>
//           )}
//         </div>
//         <div className={`ml-4 w-[35%] ${styles.secondcol}`}>
//           <div
//             className={`p-4 rounded-lg klb-free-progress-bar ${styles.border}`}
//           >
//             {/* <h2 className={`font-bold ${styles.borderbottom} pb-[0.5rem]`}>
//               YOUR ORDER
//             </h2>
//             <ul>
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between mt-2">
//                   <span>
//                     {item.title} (x{item.quantity})
//                   </span>
//                   <span>{item.discountPrice}</span>
//                 </li>
//               ))}
//             </ul> */}
//             <div className="flex justify-between mt-6">
//               <span>Subtotal</span>
//               <span>${totalPrice}</span>
//             </div>
//             {!isFreeShipping && (
//               <div className="flex justify-between mt-2">
//                 <span>Delivery Charge</span>
//                 <span>${deliveryCharge}</span>
//               </div>
//             )}
//             <div className="flex justify-between mt-4 font-bold">
//               <span>Total</span>
//               <span>${getFinalTotal()}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillingDetails;
