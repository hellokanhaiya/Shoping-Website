// import styles from "./ProductStatus.module.css";
// const productsStatusdata = ["In Stock", "On Sale"];
// const ProductStatus = () => {
//   <div>
//     {" "}
//     <div className={`${styles.filterborder}`}>
//       <h2 className="my-4">Filter by color</h2>
//     </div>
//     <div className="">
//       <input type="checkbox" />
//       <p>In stock</p>
//     </div>
//   </div>;
// };
// export default ProductStatus;
import React from "react";
import styles from "./ProductStatus.module.css";

const productsStatusdata = ["In Stock", "On Sale"];

const ProductStatus = () => {
  return (
    <div>
      <div className={`${styles.filterborder}`}>
        <h2 className="my-4">Filter by Status</h2>
      </div>
      <div className="mt-4 text-[14px]">
        {productsStatusdata.map((status, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" id={status} className="mr-2" />
            <label htmlFor={status}>{status}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductStatus;
