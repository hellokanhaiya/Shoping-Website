import React, { useEffect, useRef, useState } from "react";
import Shipment from "./OneSidecomponent/Shipmentdetail";
import SuperDiscount from "./OneSidecomponent/SupperDiscount";
import DealofThisWeek from "./OneSidecomponent/DealThisWeek/DealofThisWeek";
import TrendingProduct from "./OneSidecomponent/TrendingProducts/TredingProduct";
import BestSellersComponent from "./BestSellers/Bestsellers";
import WeekHeadphone from "./Weekenddiscoutheadphone/WeekHeadphone";
import LetestDeals from "./LetestDeals/LetestDeals";
import NewProduct from "./NewProduct/Newproduct";
import Weekend from "./OneSidecomponent/WeekendDiscount";
import WeekendAc from "./WeekendDiscountAc/WeekendAc";
import SmartPhoneAess from "./Smartphone&Aessories/SmartPhone&Aess";
import styles from "./MainContent.module.css";
import "./MainContent.module.css";
const MainContent = () => {
  const rightSideRef = useRef(null);
  const [leftSideHeight, setLeftSideHeight] = useState(0);

  useEffect(() => {
    if (rightSideRef.current) {
      setLeftSideHeight(rightSideRef.current.clientHeight);
    }
  }, [rightSideRef]);

  return (
    <div className={`flex mt-8 ${styles.logoscontainer}`}>
      <div
        className={`w-[25%] ${styles.fitstcol}`}
        style={{
          position: "sticky",
          position: "-webkit-sticky",
          top: "4rem", // Adjust as needed
        }}
      >
        <div className={`sticky top-4 mr-2`}>
          <Shipment />
          <SuperDiscount />
          <DealofThisWeek />
          <TrendingProduct />
        </div>
      </div>
      <div className={`w-[75%]  ${styles.secondcol}`} ref={rightSideRef}>
        <Weekend />
        <BestSellersComponent />
        <WeekHeadphone />
        <LetestDeals />
        <SmartPhoneAess />
        <WeekendAc />
        <NewProduct />
      </div>
    </div>
  );
};

export default MainContent;
