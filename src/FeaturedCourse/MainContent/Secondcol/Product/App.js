import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiShoppingBag } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import SecondCol from "./SecondCol";
import ProductDetails from "./Product/ProductDetails";
import "./App.css"; // Ensure to include necessary styles

import { CartProvider } from "./AppContext";
import Navbar from "../../../../Components/Navbar/Navbar";
import ProductDetails from "../../../../SinglePageContent/Singlepagecontent";

const products = [
  {
    discount: "11%",
    title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
    Model: "Model: MYL92LL/A ",
    store: "Amazon",
    Sku: "SKU: BE45VGRT",
    rating: "5",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,
    originalPrice: "$699.99",
    discountPrice: "$629.99",
    size: "Screen Size 10.9 in",
    operatingSystem: "Operating System Apple iOS",
    productLength: "Product Length 9.74 in",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],
    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-400x400.jpg",
    ],
    images150: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-600x600.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-600x600.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-600x600.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-600x600.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "9%",
    title: "Apple iPhone 11 64GB Yellow Fully Unlocked",
    Model: "Model: A2484  ",
    store: "Amazon",
    Sku: "SKU: SO4JK74",
    rating: "4",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,
    originalPrice: "$438.67",
    discountPrice: "$478.67",
    size: "Fully Unlocked",
    operatingSystem: "iPhone 11 Pro Max",
    productLength: "6.50 in",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],
    images: [
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/product-2-400x400.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/yellow2-400x400.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/yellow3-400x400.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/yellow4-400x400.jpg",
    ],
    images150: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
    ],
    imagesLarge: [
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/product-2-600x600.jpg",
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/yellow2-600x600.jpg",
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/yellow3-600x600.jpg",
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/yellow4-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },

  {
    discount: "11%",
    title: "OnePlus 8 Pro Onyx Black Android Smartphone",
    Model: "Model: MYH92LL/A    ",
    store: "Amazon",

    Sku: "SKU: YHE4M7",
    rating: "3",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,
    originalPrice: "$859.00",
    discountPrice: "$959.00",
    size: "256GB Storage + 12GB RAM",
    operatingSystem: "120Hz Fluid Display",
    productLength: "5G Unlocked Android Smartphone U.S. Version",
    images: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-10-400x400.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/8pro2-400x400.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/8pro3-400x400.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/8pro4-400x400.jpg",
    ],
    images150: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-10-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/8pro2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/8pro3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/8pro4-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    // discount: "11%",
    title: "SAMSUNG Galaxy Watch Active 2 Aluminum",
    Model: "Model: MYB92LL/A    ",
    store: "Amazon",

    Sku: "SKU: CE45UGT",
    rating: "4",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,
    originalPrice: "$859.00",
    discountPrice: "$959.00",
    size: "Comfortably sleek",
    operatingSystem: "Keep your beat",
    productLength: "Level up your downtime",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],
    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-23-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/watch2-1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/watch4-1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/watch5-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/watch1-1-400x400.jpg",
    ],

    images150: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/product-23-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/watch2-1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/watch4-1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/watch5-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/watch1-1-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },

  {
    discount: "9%",
    title: "Bose Noise Cancelling Wireless Bluetooth",
    Model: "Model: MYB92LL/A    ",
    store: "Amazon",

    Sku: "SKU: RO5JK73",
    rating: "4",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,
    originalPrice: "$439.00",
    discountPrice: "$479.00",
    size: "True Wireless Headphones",
    operatingSystem: "Portable electronics",
    productLength: "Headphone Style - In-Ear",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/noise3-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/noise2-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/noise4-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/noise5-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/noise1-400x400.jpeg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/noise3-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/noise2-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/noise4-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/noise5-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/noise1-600x600.jpeg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "9%",
    title: "Echo Dot (4th Gen, 2020 release) | Smart speaker",
    Model: "Model: MYB92LL/A    ",
    store: "Amazon",

    Sku: "SKU: SO4JK47",
    rating: "4",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,
    originalPrice: "$69.99",
    discountPrice: "$79.99",
    size: "3.53 Inches (H) x 3.94 Inches (W)",
    operatingSystem: "Wi-Fi, Bluetooth",
    productLength: "Alexa Built-in",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/echo1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/echo2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/echo3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/echo4-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/echo5-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/echo6-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/echo1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/echo2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/echo3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/echo4-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/echo5-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/echo6-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "21%",
    title: "Garmin Vivo smart 3 Activity Tracker – Large",
    store: "Amazon",
    rating: "5",
    originalPrice: "$49.99",
    discountPrice: "$39.99",

    Sku: "SKU: SO4JK47",

    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Safe for swimming",
    operatingSystem: "Heart Rate Monitoring",
    productLength: "Monitors wellness with all-day",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/garmin1-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/garmin2-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/garmin3-400x400.jpeg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/garmin1-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/garmin2-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/garmin3-600x600.jpeg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "28%",
    title: "Google Pixel 3XL 64GB Black (Unlocked) Good Condition",
    store: "Amazon",
    rating: "4",
    originalPrice: "$179.95",
    discountPrice: "$129.95",
    Sku: "SKU: CI45VGRT",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Android 9.0 Pie",
    operatingSystem: "Hard Drive Capacity 64 GB",
    productLength: "Screen Size 6.3 in",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/pixel1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/pixel2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/pixel3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/pixel4-400x400.jpg",
    ],
    imagesLarge: [
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/pixel1-600x600.jpg",
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/pixel2-600x600.jpg",
      "https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/09/pixel3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/pixel4-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "33%",
    title: "Google Pixel Buds, Clearly White",
    store: "Amazon",
    rating: "4",
    originalPrice: "$304.95",
    discountPrice: "$204.95",
    Sku: "SKU: HM45UYA",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Sweat and Water Resistant",
    operatingSystem: "Up to 5 hours of listening time",
    productLength: "Up to 2.5 hours of talk time",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/google1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/google2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/google3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/google4-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/google1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/google2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/google3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/google4-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "11%",
    title: "HP Pavilion x360 14 Convertible 2-in-1 Laptop",
    store: "Amazon",
    rating: "4",
    originalPrice: "$968.99",
    discountPrice: "$868.99",
    Sku: "SKU: HO4UK74",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Intel Core i5",
    operatingSystem: "8 GB DDR4 RAM",
    productLength: "512 GB SSD Storage",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/hp1-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/hp2-400x400.jpeg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/hp3-400x400.png",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/hp1-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/hp2-600x600.jpeg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/hp3-600x600.png",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "15%",
    title: "New Microsoft Surface Go 2 – 10.5″ Touch-Screen",
    store: "Amazon",
    rating: "4",
    originalPrice: "$479.99",
    discountPrice: "$409.99",
    Sku: "SKU: NEW4JK74",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "4GB Memory",
    operatingSystem: "Platinum (Latest Model)",
    productLength: "Intel Pentium",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/surface1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/surface2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/surface3-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/surface1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/surface2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/surface3.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "6%",
    title: "New Apple iPhone 12 (128GB – 4GB RAM) – Black",
    store: "Amazon",
    rating: "5",
    originalPrice: "$5739.00",
    discountPrice: "$5439.00",
    Sku: "SKU: BE4UHTK",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Unlocked for All Carriers",
    operatingSystem: "6.1-inch (15.5 cm diagonal)",
    productLength: "12MP TrueDepth front camera with Night mode",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/appblack1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/appblack2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/appblack3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/appblack4-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/appblack5-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/appblack1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/appblack2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/appblack3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/appblack4-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/appblack5-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "15%",
    title: "New Apple iPhone 12 (128GB – 4GB RAM) – White ",
    store: "Amazon",
    rating: "3",
    originalPrice: "$5639.00",
    discountPrice: "$4839.00",
    Sku: "SKU: BE4UHTK",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Unlocked for All Carriers",
    operatingSystem: "6.1-inch (15.5 cm diagonal)",
    productLength: "12MP TrueDepth front camera",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],
    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/newapple1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/newapple2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/newapple3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/newapple4-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/newapple1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/newapple2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/newapple3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/newapple4-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "9%",
    title: "OnePlus 8T Unlocked Android Smartphone U.S. Version ",
    store: "Amazon",
    rating: "4",
    originalPrice: "$5639.00",
    discountPrice: "$4839.00",
    Sku: "SKU: ON45EPL",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "256GB Storage + 12GB RAM",
    operatingSystem: "120Hz Fluid Display",
    productLength: "5G Unlocked Android Smartphone U.S. Version",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/oneplus1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/oneplus2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/oneplus3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/oneplus4-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/oneplus1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/oneplus2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/oneplus3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/oneplus4-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "8%",
    title: "Philips Wireless Over-Ear Noise Canceling Headphones ",
    store: "Amazon",
    rating: "4",
    originalPrice: "$129.99",
    discountPrice: "$119.99",
    Sku: "SKU: PW2O6EN",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Active noise canceling",
    operatingSystem: "Google assistant",
    productLength: "Long battery life",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],
    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/philips1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/philips3-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/philips2-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/philips1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/philips3-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/philips2-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "13%",
    title: "Samsung Galaxy A72 (SM-A725M_DS) Dual SIM",
    store: "Amazon",
    rating: "3",
    originalPrice: "$399.99",
    discountPrice: "$349.99",
    Sku: "SKU: GA72ADU",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "Factory Unlocked GSM",
    operatingSystem: "International Version",
    productLength: "6.7 FHD+ Infinity-O Display",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/a721-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/a722-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/a723-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/a721.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/a722.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/a723.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "29%",
    title: "Samsung Galaxy M31 Ocean Blue 128 GB",
    store: "Amazon",
    rating: "4",
    originalPrice: "$167.00",
    discountPrice: "$119.00",
    Sku: "SKU: M31GB128",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,

    size: "6GB RAM",
    operatingSystem: "128GB Memory",
    productLength: "Android 9.0",
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/m31-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/m31-2-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/m31-1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/m31-3-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/m31-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/m31-2-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/m31-1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/m31-3-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
  {
    discount: "18%",
    title: "Sony PlayStation PS4 1TB Slim Gaming Console Black",
    store: "Amazon",
    rating: "3",
    originalPrice: "$370.00",
    discountPrice: "$305.00",
    Sku: "SKU: SPP1SGCB",
    shopingbag: <GiShoppingBag />,
    Instock: "In Stock",
    button: "Add to cart",
    addwatchlist: "Add to wishlist",
    compare: "Compare",
    catagaroy: ["Apple,", "Cell Phones"],
    shoppingIcon: <HiOutlineShoppingCart />,
    circleicon: <CiCircleCheck />,
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgcolor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgcolor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgcolor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgcolor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgcolor: "#25d366",
      },
    ],
    size: "Incredible games; Endless entertainment",
    operatingSystem: "All new lighter slimmer PS4",
    productLength: "1TB hard drive",

    images: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/playstation1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/playstation1-400x400.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/playstation2-400x400.jpg",
    ],
    imagesLarge: [
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/playstation1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/playstation1-600x600.jpg",
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/playstation2-600x600.jpg",
    ],
    otherdetail: [
      "Screen Size 10.9 in",
      "Operating System Apple iOS",
      "Product Length 9.74 in",
    ],
    Description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
    Features: [
      "slim body with metal cover",

      "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
      "8GB DDR4 RAM and fast 512GB PCIe SSD",
      "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
      "backlit keyboard, touchpad with gesture support",
    ],
    Specification: [
      {
        general: {
          Alternatenames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          Releasedate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          Betterylife: "8820",
          Removablebattery: "No",
        },

        display: {
          Screensize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          pixelperinch: "264",
        },

        hardware: {
          Processor: "1.3GHz one-core",
          Ram: "1GB",
          internalstorage: "16GB",
          Expendablestorage: "No",
          Expendablestoragetype: "microSD",
        },

        camera: {
          rearcamera: "5-megapixel",
          frontcamera: "1.2-megapixel",
        },

        software: {
          operatingsystem: "iOS 7",
        },
      },
    ],
  },
];

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/product/:title" component={ProductDetails} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
