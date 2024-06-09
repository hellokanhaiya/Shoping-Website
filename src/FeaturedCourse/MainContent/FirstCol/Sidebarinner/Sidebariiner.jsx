import styles from "./Sidebariiner.module.css";
import React, { useState } from "react";
const Sidebarinner = () => {
  const [openCategories, setOpenCategories] = useState({});
  const Sidebardata = [
    {
      title: "Apple",
    },
    {
      title: "Camera & Photo",
    },
    {
      title: "Cell Phones",
      options: [
        "iPhone",
        "Phone Accessories",
        "Phone Cases",
        "Postpaid Phones",
        "Prepaid Phones",
        "Prepaid Plans",
        "Refurbished Phones",
        "Samsung Galaxy",
        "Straight Talk",
        "Unlocked Phones",
      ],
      icon: "+",
      disableicon: "-",
    },
    {
      title: "Computers & Accessories",
      options: [
        "Desktops",
        "Loptops",
        "Monitors",
        "Networking",
        "Pc Gameing",
        "Tablets",
        "Computer Accessories",
        "Computer Components",
      ],
      icon: "+",
      disableicon: "-",
    },
    {
      title: "Headphones",
      options: [
        "Noise Canceling",
        "Over-EAR",
        "Premium Headphones",
        "Sports & Fitness",
        "Bluetooth Headphones",
      ],
      icon: "+",
      disableicon: "-",
    },
    {
      title: "Smartwatches",
      options: [
        "Sport Watches",
        "Timex Watches",
        "Watch Brands",
        "Women Watches",
        "Casio Watches",
        "Chronograph Watches",
        "Kids Watches",
        "Luxury Watches",
        "Men Watches",
        "Rolex Watches",
      ],
      icon: "+",
      disableicon: "-",
    },
    {
      title: "Sports & Outdoors",
    },
    {
      title: "Television & Video",
      option: [
        "Television Accessories",
        "Televisions",
        "TV-DVD Combos",
        "VCRs",
        "Video Glasses",
        "HD DVD Players",
        "Projection Screens",
        "Projectors",
      ],
      icon: "+",
      disableicon: "-",
    },
    {
      title: "Video Games",
    },
  ];
  const toggleCategory = (index) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of category at index
    }));
  };
  const toggleOptions = (index) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of category at index
    }));
  };

  return (
    <div className={`sidebar-inner ${styles.sidebarInner} ${styles.price} `}>
      {/* Sidebar header */}
      <div
        className={`sidebar-mobile-header flex justify-between items-center ${styles.entrytitle}`}
      >
        <h3 className="my-4 text-lg">Product Categories</h3>
        <div className="close-sidebar">
          <i className="klbth-icon-cancel"></i>
        </div>
      </div>
      {/* Sidebar content */}
      <div className="mt-4 widget widget_klb_product_categories">
        <div className="widget-checkbox-list">
          <ul>
            {/* Render category items */}
            {Sidebardata.map((category, index) => (
              <li key={index}>
                {/* Render category title with toggle */}
                <div
                  className={`${styles.right} product_cat`}
                  onClick={() => toggleCategory(index)}
                >
                  <div className="flex items-center">
                    <input
                      name="product_cat[]"
                      value={category.title}
                      id={category.title}
                      type="checkbox"
                      className="mr-2"
                    />
                    <label htmlFor={category.title}>{category.title}</label>
                  </div>
                  <div className="mr-4 cursor-pointer">
                    {/* Added onClick handler for the icon */}
                    <span onClick={() => toggleOptions(index)}>
                      {category.icon}
                    </span>
                  </div>
                </div>
                {/* Render options if category is open */}
                {openCategories[index] && category.options && (
                  <ul className="ml-8">
                    {/* Render options */}
                    {category.options.map((option, optionIndex) => (
                      <li key={optionIndex}>
                        <span>
                          {" "}
                          <input
                            name="product_cat[]"
                            value={category.title}
                            id={category.title}
                            type="checkbox"
                            className="mr-2"
                          />
                        </span>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-4">
        <h2>Filter by price</h2>
      </div>
    </div>
  );
};

export default Sidebarinner;
