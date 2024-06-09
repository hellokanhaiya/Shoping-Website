// import React, { useState } from "react";
// const PriceFilter = () => {
//   const [rangeval, setRangeval] = useState(null);
//   return (
//     <div className="my-6 price-section">
//       <div className="flex justify-between">
//         <p>
//           <span className="text-[#ccc]">Price</span>$20 — $5,440
//         </p>
//         <button className="px-[8px] py-[5px] bg-[#f2f3f5] text-[12px] font-semibold rounded mr-6">
//           FILTER
//         </button>
//       </div>
//       <div className="pr-2 mt-4">
//         <input
//           type="range"
//           className="w-full custom-range"
//           min="199"
//           max="3999"
//           onChange={(event) => setRangeval(event.target.value)}
//         />
//       </div>
//     </div>
//   );
// };
// export default PriceFilter;
import React, { useState } from "react";

const PriceFilter = () => {
  const [rangeVal, setRangeVal] = useState(199); // Initial value of the slider

  // Function to calculate the price range based on the slider value
  const calculatePriceRange = (value) => {
    const minPrice = 20; // Minimum price
    const maxPrice = 5440; // Maximum price
    // Calculate the price range based on the slider value
    const range = Math.round((maxPrice - minPrice) * (value / 100));
    return `$${minPrice} — $${minPrice + range}`;
  };

  return (
    <div className="my-6 price-section">
      <div className="flex justify-between">
        <p>
          <span className="text-[#ccc]">Price</span>
          {calculatePriceRange(rangeVal)}
        </p>
        <button className="px-[8px] py-[5px] bg-[#f2f3f5] text-[12px] font-semibold rounded mr-6">
          FILTER
        </button>
      </div>
      <div className="pr-2 mt-4">
        <input
          type="range"
          className="w-full custom-range"
          min="0"
          max="100"
          value={((rangeVal - 20) / (5440 - 20)) * 100} // Normalize slider value to percentage
          onChange={(event) => {
            const newValue = Math.round(
              (parseInt(event.target.value) / 100) * (5440 - 20) + 20
            );
            setRangeVal(newValue);
          }}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
