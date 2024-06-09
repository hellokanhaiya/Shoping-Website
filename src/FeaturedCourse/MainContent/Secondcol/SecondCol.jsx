import React from "react";
import { Route } from "react-router-dom";
import Productallfeatured from "./Product/Product";
import ProductDetails from "./SinglePageContent/Singlepagecontent";
import product from "./Product/nothing1";

const SecondCol = () => {
  console.log("Product Data:", product); // Debugging statement

  return (
    <div>
      <Productallfeatured />
      {/* <Route
        path="/Single-page/:title"
        element={<ProductDetails products={product} />}
      /> */}
    </div>
  );
};

export default SecondCol;
