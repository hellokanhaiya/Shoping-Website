import React from "react";
import styles from "./Brands.module.css";

const Brandsdata = [
  {
    title: "Apple",
    sale: "(9)",
  },
  {
    title: "Samsung",
    sale: "(5)",
  },
];

const Brands = () => {
  return (
    <div className="mt-4">
      <div className={`${styles.filterborder}`}>
        <h2 className="my-4">Filter by Brands</h2>
      </div>
      <ul className="mt-6">
        {Brandsdata.map((brand, index) => (
          <li key={index} className="flex items-center mb-2">
            <input type="checkbox" id={`brand-${index}`} className="mr-2" />
            <label htmlFor={`brand-${index}`} className="cursor-pointer">
              {brand.title} {brand.sale}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
