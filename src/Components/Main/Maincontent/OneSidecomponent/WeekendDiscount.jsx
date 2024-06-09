import React from "react";
import Viewall from "./UsefullUi/Viewall";
import { Link } from "react-router-dom";
import "./WeekendDiscount.module.css";
import styles from "./WeekendDiscount.module.css";
const weekendDetail = [
  {
    images:
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/plugins/machic-core/elementor/images/banner-box.jpg",
    discount: "WEEKEND DISCOUNT",
    catograyName: "Home Speaker",
    opportunity: "Don't miss the last opportunity.",
    button: "Shop Now",
    title: "Echo Dot (4th Gen, 2020 release) | Smart speaker",
  },
  {
    images:
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/banner-2.jpg",
    discount: "WEEKEND DISCOUNT",
    catograyName: "New Smartphones",
    opportunity: "Don't miss the last opportunity.",
    button: "Shop Now",
    title: "OnePlus 8 Pro Onyx Black Android Smartphone",
  },
];

const Weekend = () => {
  return (
    <div className="w-full ">
      <ul
        className={`${styles.logoscontainer} flex justify-between p-[1rem] gap-8`}
        // style={{ flexWrap: "nowrap", maxWidth: "1200px", margin: "0 auto" }}
      >
        {weekendDetail.map((item, index) => (
          <li
            key={index}
            className="min-w-[48%]  "
            style={{
              backgroundImage: `url('${item.images}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "100%",
            }}
          >
            <Link
              to={{
                pathname: `/single-page/${item.title}`,
                state: { product: item },
              }}
              className="w-full"
            >
              <div
                className={`text-center  md:text-left w-[50%] ${styles.textcontent}`}
              >
                <h6 className="text-blue-500">{item.discount}</h6>
                <h1 className="mb-2 text-3xl font-semibold md:text-4xl">
                  {item.catograyName}
                </h1>
                <p className="mb-4">{item.opportunity}</p>
                <button className="px-4 py-2 text-white bg-blue-500 rounded">
                  {item.button}
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Viewall />
    </div>
  );
};

export default Weekend;
