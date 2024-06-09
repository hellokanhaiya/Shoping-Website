import React, { useState } from "react";

import styles from "./BeforeshopLoop.module.css";

const BeforeShopLoop = () => {
  return (
    <div className={`mt-6 ${styles.beforeshoploop} p-4`}>
      <div className="row sidebar-left">
        <div className="flex justify-between">
          <div className="col-1">
            <p className="woocommerce-result-count text-[14px]">
              Showing 1–16 of 18 results
            </p>
          </div>
          {/* <div className="mr-10 col-2">
            <select name="cars" id="cars" className="short-by-list">
              <option value="volvo">
                Short by least
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="ml-[40px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
                <span></span>
              </option>
              <option value="saab">Short by papularty</option>
              <option value="mercedes">Short by average rating</option>
              <option value="audi">Short by price: low to high</option>
              <option value="audi">Short by price: high to low</option>
            </select>
            <select name="cars" id="cars" className="show-item ">
              <option value="volvo">
                <span className="text-[#818ea0] mr-2">Show:</span>
                <span>
                  <span className="ml-2">16Items</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="ml-[40px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </span>
                <span></span>
              </option>
              <option value="saab">Short by papularty</option>
              <option value="mercedes">Short by average rating</option>
              <option value="audi">Short by price: low to high</option>
              <option value="audi">Short by price: high to low</option>
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BeforeShopLoop;
