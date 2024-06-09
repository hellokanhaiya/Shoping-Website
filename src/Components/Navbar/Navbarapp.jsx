// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "../Header-nav/HeaderContext";
import ProductDetails from "../../SinglePageContent/Singlepagecontent";
import Navbar from "./Navbar";

const App = () => {
  const products = [];

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/product/:title">
            <ProductDetails products={products} />
          </Route>
          {/* Other routes */}
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default App;
