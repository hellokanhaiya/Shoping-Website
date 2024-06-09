import { HiOutlineShoppingCart } from "react-icons/hi";

const Product = [
  {
    discount: "11.8%",
    title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
    store: "Amazon",
    rating: "5",
    originalPrice: "$699.99",
    discountPrice: "$629.99",
    shoppingIcon: <HiOutlineShoppingCart />,

    size: "Screen Size 11 in",
    operatingSystem: "Operating SystemApple iOS",
    productLength: "RAM Memory 8 GB",

    images: [
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-400x400.jpg ",
    ],
  },
  {
    title: "Samsung Galaxy A52 5G Android Cell Phone",
    store: "Harrier",
    rating: "4",
    originalPrice: "$478.67",

    shoppingIcon: <HiOutlineShoppingCart />,
    discount: "6%",
    size: "Factory Unlocked Smartphone",
    operatingSystem: "64MP Camera",
    productLength: "128GB Black",

    images: [
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-2-400x400.jpg",
    ],
  },
  {
    discount: "33.4%",
    title: "OnePlus 8 Pro Onyx Black Android Smartphone",
    store: "Migros",
    rating: "4",
    originalPrice: "$959.00",
    discountPrice: "$859.00",
    shoppingIcon: <HiOutlineShoppingCart />,

    size: "Aluminum Case",
    operatingSystem: "GPS and a barometric altimeter",
    productLength: "Ultimate sports watch",

    images: [
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-10-400x400.jpg",
    ],
  },
  {
    discount: "17.7%",
    title: "SAMSUNG Galaxy Watch Active 2 Aluminum",
    store: "Amazon",
    rating: "5",
    originalPrice: "$29",

    shoppingIcon: <HiOutlineShoppingCart />,

    size: "Unlocked for All Carriers",
    operatingSystem: "6.1-inch (15.5 cm diagonal)",
    productLength: "12MP TrueDepth front camera",

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-23-400x400.jpg",
    ],
  },
];
export default Product;
