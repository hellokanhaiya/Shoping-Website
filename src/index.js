import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Layout";
import Aboutus from "./Aboutus/Aboutus";
import Stores from "./Stores/Stores";
import VendorDashborad from "./VendorDashboard/VendorDashborad";
import FeaturedCourse from "./FeaturedCourse/FeaturedCourse";
// import Singlepage from "./SinglePageContent/Singlepage";
import product from "./FeaturedCourse/MainContent/Secondcol/Product/nothing1";
import ProductDetails from "./FeaturedCourse/MainContent/Secondcol/SinglePageContent/Singlepagecontent";
import Viewall from "./Components/Main/Viewall/Viewall";
import RelatedProducts from "./Components/Main/RelatedProduct/RelatedProducts";
import { CartProvider } from "./Components/Main/CartContext";
import AddCartItem from "./Components/Main/Maincontent/AddCartItem/AddCartItem";
import BillingDetails from "./Components/Main/Maincontent/BilingDetails/BillingDetails";
import SearchResults from "./Components/Navbar/SearchResults ";
import Blog from "./Components/Navbar/Blog/Blog";
import Contact from "./Components/Navbar/Contact/Contact";
import SuperDiscount from "./Components/Navbar/SuperDiscount/SuperDiscount";
import Cellphoneproducts from "./Components/Header-nav/Cellphones/CellphonesComponent";
import HeadphoneComponent from "./Components/Header-nav/Headphone/Headphone";
import ComputerAess from "./Components/Main/Sidebar/Computer&Aess/Computer&Aess";
import TelevisionComponent from "./Components/Main/Sidebar/Telvision/Television";
import SmartWatchComponent from "./Components/Main/Sidebar/SmartWatchs/SmartWatch";
import CamaraComponent from "./Components/Main/Sidebar/Camara&Photo/Camara&Photo";
import VideogamesComponent from "./Components/Main/Sidebar/Videogames/Videogames";
import SportOutdoorscompoents from "./Components/Main/Sidebar/Sports&Outdoars/Sport&Outdoors";
import Dellcomponetns from "./Components/Main/logosModule/Dell/Dellcomponents";
import Lenvocomponetns from "./Components/Main/logosModule/Lenvo/LenvoComponents";
import AsusComponent from "./Components/Main/logosModule/Asus/AsusComponent";
import Sumsungcomponetns from "./Components/Main/logosModule/Sumsung/SumsungComponents";
import Sonycomponetns from "./Components/Main/logosModule/Sony/SonyComponents";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="stores" element={<Stores />} />
            <Route path="Vendor-dashborad" element={<VendorDashborad />} />
            <Route path="Featured-dashborad" element={<FeaturedCourse />} />
            {/* <Route path="Single-page" element={<Singlepage />} /> */}
            <Route
              path="Single-page/:title"
              element={<ProductDetails products={product} />}
            />
            <Route path="View-all" element={<Viewall />} />
            <Route path="/related-products" element={<RelatedProducts />} />
            <Route path="/AddCartItem" element={<AddCartItem />} />
            <Route path="/Billing-details" element={<BillingDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/super-discount" element={<SuperDiscount />} />
            <Route path="/Cell-phones" element={<Cellphoneproducts />} />
            <Route path="/Headphone" element={<HeadphoneComponent />} />
            <Route path="/Computers&Accessories" element={<ComputerAess />} />
            <Route path="/Television&Video" element={<TelevisionComponent />} />
            <Route path="/SmartWatch" element={<SmartWatchComponent />} />
            <Route path="/Camara&Photo" element={<CamaraComponent />} />
            <Route path="/VideoGames" element={<VideogamesComponent />} />
            <Route
              path="/sports&outdoors"
              element={<SportOutdoorscompoents />}
            />
            <Route path="/dellproducts" element={<Dellcomponetns />} />
            <Route path="/lenovoproducts" element={<Lenvocomponetns />} />
            <Route path="/asusprodutcs" element={<AsusComponent />} />
            <Route path="/sumsungproducts" element={<Sumsungcomponetns />} />
            <Route path="/sonyproducts" element={<Sonycomponetns />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
