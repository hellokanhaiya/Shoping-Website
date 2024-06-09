import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

// Single product category component
const ProductCategory = ({
  image,
  categoryLink,
  categoryName,
  subCategories,
  buttonLink,
  buttonText,
  icon,
}) => (
  <div className="w-full px-4 mb-8 lg:w-1/3">
    <div className="flex overflow-hidden bg-white rounded-lg shadow-lg">
      <a href={categoryLink} className="w-50%">
        <img
          src={image}
          alt={categoryName}
          className="object-cover w-full h-56"
        />
      </a>
      <div className="p-4">
        <h3 className="mb-4 text-lg font-semibold">
          <a href={categoryLink}>{categoryName}</a>
        </h3>
        <ul className="mb-4">
          {subCategories.map((sub, index) => (
            <li key={index}>
              <a
                href={sub.link}
                className="text-blue-500 text-[14px] hover:text-blue-700"
              >
                {sub.name}
              </a>
            </li>
          ))}
        </ul>
        <a href={buttonLink} className="text-[blue] flex items-center">
          <span>
            {buttonText} <i className="ml-2"></i>
          </span>
          <span>{icon}</span>
        </a>
      </div>
    </div>
  </div>
);

// Product category list component
const CategoryList = () => {
  const categories = [
    {
      image:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/category-1.jpg",
      categoryLink: "/Cell-phones",
      categoryName: "Cell Phones",
      subCategories: [
        {
          name: "iPhone",
          link: "/Cell-phones",
        },
        {
          name: "Phone Accessories",
          link: "/Cell-phones",
        },
        {
          name: "Phone Cases",
          link: "/Cell-phones",
        },
        {
          name: "Postpaid Phones",
          link: "/Cell-phones",
        },
      ],
      buttonLink: "/Cell-phones",
      buttonText: "All Cell Phones",
      icon: <FaArrowRightLong />,
    },
    {
      image:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/category-2.jpg",
      categoryLink: "/Headphone",
      categoryName: "Headphones",
      subCategories: [
        {
          name: "Noise Canceling",
          link: "/Headphone",
        },
        {
          name: "Over-EAR",
          link: "/Headphone",
        },
        {
          name: "Premium Headphones",
          link: "/Headphone",
        },
        {
          name: "Sports & Fitness",
          link: "/Headphone",
        },
      ],
      buttonLink: "/Headphone",
      buttonText: "All Headphones",
      icon: <FaArrowRightLong />,
    },
    {
      image:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/category-5.jpg",
      categoryLink: "/SmartWatch",
      categoryName: "Smartwatches",
      subCategories: [
        {
          name: "Sport Watches",
          link: "/SmartWatch",
        },
        {
          name: "Timex Watches",
          link: "/SmartWatch",
        },
        {
          name: "Watch Brands",
          link: "/SmartWatch",
        },
        {
          name: "Women Watches",
          link: "/SmartWatch",
        },
      ],
      buttonLink: "/SmartWatch",
      buttonText: "All Smartwatches",
      icon: <FaArrowRightLong />,
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-wrap -mx-4">
        {categories.map((category, index) => (
          <ProductCategory
            key={index}
            image={category.image}
            categoryLink={category.categoryLink}
            categoryName={category.categoryName}
            subCategories={category.subCategories}
            buttonLink={category.buttonLink}
            buttonText={category.buttonText}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
