// import {
//   FaFacebookF,
//   FaTwitter,
//   FaPinterestP,
//   FaLinkedinIn,
//   FaWhatsapp,
// } from "react-icons/fa";

// import { GiShoppingBag } from "react-icons/gi";
// import { CiCircleCheck } from "react-icons/ci";

// const data = [
//   {
//     title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
//     Model: "Model: MYL92LL/A ",
//     Sku: "SKU: BE45VGRT",
//     rating: "5",
//     shopingbag: <GiShoppingBag />,
//     Instock: "In Stock",
//     discount: "11%",
//     button: "Add to cart",
//     addwatchlist: "Add to wishlist",
//     compare: "Compare",
//     catagaroy: ["Apple,", "Cell Phones"],
//     orginalprice: "$699.99",
//     discoutprice: "$629.99",
//     circleicon: <CiCircleCheck />,
//     socialIcons: [
//       {
//         icon: <FaFacebookF />,
//         bgcolor: "#3b5998",
//       },
//       {
//         icon: <FaTwitter />,
//         bgcolor: "#1da1f2",
//       },
//       {
//         icon: <FaPinterestP />,
//         bgcolor: "#e60023",
//       },
//       {
//         icon: <FaLinkedinIn />,
//         bgcolor: "#0077b5",
//       },
//       {
//         icon: <FaWhatsapp />,
//         bgcolor: "#25d366",
//       },
//     ],
//     images150: [
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
//     ],
//     imagesLarge: [
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-600x600.jpg",
//     ],
//     otherdetail: [
//       "Screen Size 10.9 in",
//       "Operating System Apple iOS",
//       "Product Length 9.74 in",
//     ],
//     Description:
//       "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
//     Features: [
//       "slim body with metal cover",

//       "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
//       "8GB DDR4 RAM and fast 512GB PCIe SSD",
//       "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
//       "backlit keyboard, touchpad with gesture support",
//     ],
//     Specification: [
//       {
//         general: {
//           Alternatenames: "iPad 5",
//           Brand: "Apple",
//           Model: "iPad Air Wi-Fi + Cellular",
//           Releasedate: "September 2013",
//           Dimensions: "240.00 x 169.50 x 7.50",
//           Weight: "478.00",
//           Betterylife: "8820",
//           Removablebattery: "No",
//         },

//         display: {
//           Screensize: "9.70",
//           Touchscreen: "No",
//           Resolution: "1536x2048 pixels",
//           pixelperinch: "264",
//         },

//         hardware: {
//           Processor: "1.3GHz one-core",
//           Ram: "1GB",
//           internalstorage: "16GB",
//           Expendablestorage: "No",
//           Expendablestoragetype: "microSD",
//         },

//         camera: {
//           rearcamera: "5-megapixel",
//           frontcamera: "1.2-megapixel",
//         },

//         software: {
//           operatingsystem: "iOS 7",
//         },
//       },
//     ],
//   },]
//   {
//     title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
//     Model: "Model: MYL92LL/A ",
//     Sku: "SKU: BE45VGRT",
//     rating: "5",
//     shopingbag: <GiShoppingBag />,
//     Instock: "In Stock",
//     discount: "11%",
//     button: "Add to cart",
//     addwatchlist: "Add to wishlist",
//     compare: "Compare",
//     catagaroy: ["Apple,", "Cell Phones"],
//     orginalprice: "$699.99",
//     discoutprice: "$629.99",
//     circleicon: <CiCircleCheck />,
//     socialIcons: [
//       {
//         icon: <FaFacebookF />,
//         bgcolor: "#3b5998",
//       },
//       {
//         icon: <FaTwitter />,
//         bgcolor: "#1da1f2",
//       },
//       {
//         icon: <FaPinterestP />,
//         bgcolor: "#e60023",
//       },
//       {
//         icon: <FaLinkedinIn />,
//         bgcolor: "#0077b5",
//       },
//       {
//         icon: <FaWhatsapp />,
//         bgcolor: "#25d366",
//       },
//     ],
//     images150: [
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
//     ],
//     imagesLarge: [
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-600x600.jpg",
//       "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-600x600.jpg",
//     ],
//     otherdetail: [
//       "Screen Size 10.9 in",
//       "Operating System Apple iOS",
//       "Product Length 9.74 in",
//     ],
//     Description:
//       "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
//     Features: [
//       "slim body with metal cover",

//       "latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
//       "8GB DDR4 RAM and fast 512GB PCIe SSD",
//       "NVIDIA GeForce MX350 2GB GDDR5 graphics card",
//       "backlit keyboard, touchpad with gesture support",
//     ],
//     Specification: [
//       {
//         general: {
//           Alternatenames: "iPad 5",
//           Brand: "Apple",
//           Model: "iPad Air Wi-Fi + Cellular",
//           Releasedate: "September 2013",
//           Dimensions: "240.00 x 169.50 x 7.50",
//           Weight: "478.00",
//           Betterylife: "8820",
//           Removablebattery: "No",
//         },

//         display: {
//           Screensize: "9.70",
//           Touchscreen: "No",
//           Resolution: "1536x2048 pixels",
//           pixelperinch: "264",
//         },

//         hardware: {
//           Processor: "1.3GHz one-core",
//           Ram: "1GB",
//           internalstorage: "16GB",
//           Expendablestorage: "No",
//           Expendablestoragetype: "microSD",
//         },

//         camera: {
//           rearcamera: "5-megapixel",
//           frontcamera: "1.2-megapixel",
//         },

//         software: {
//           operatingsystem: "iOS 7",
//         },
//       },
//     ],
//   },
// ];

// export default data;
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { GiShoppingBag } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";

const data = [
  {
    title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
    Model: "Model: MYL92LL/A",
    Sku: "SKU: BE45VGRT",
    rating: 5,
    shoppingBag: <GiShoppingBag />,
    Instock: "In Stock",
    discount: "11%",
    originalPrice: "$699.99",
    discountPrice: "$629.99",
    circleIcon: <CiCircleCheck />,
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgColor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgColor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgColor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgColor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgColor: "#25d366",
      },
    ],
    images150: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
    ],
    // imagesLarge: [
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-600x600.jpg",
    // ],
    otherDetails: [
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
          AlternateNames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          ReleaseDate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          BatteryLife: "8820",
          RemovableBattery: "No",
        },
        display: {
          ScreenSize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          PixelPerInch: "264",
        },
        hardware: {
          Processor: "1.3GHz one-core",
          RAM: "1GB",
          InternalStorage: "16GB",
          ExpandableStorage: "No",
          ExpandableStorageType: "microSD",
        },
        camera: {
          RearCamera: "5-megapixel",
          FrontCamera: "1.2-megapixel",
        },
        software: {
          OperatingSystem: "iOS 7",
        },
      },
    ],
  },
  {
    title: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
    Model: "Model: MYL92LL/A",
    Sku: "SKU: BE45VGRT",
    rating: 5,
    shoppingBag: <GiShoppingBag />,
    Instock: "In Stock",
    discount: "11%",
    originalPrice: "$699.99",
    discountPrice: "$629.99",
    circleIcon: <CiCircleCheck />,
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgColor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgColor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgColor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgColor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgColor: "#25d366",
      },
    ],
    images150: [
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-150x150.jpg",
      "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-150x150.jpg",
    ],
    // imagesLarge: [
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-1-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-2-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/single-3-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air3-600x600.jpg",
    //   "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/air4-600x600.jpg",
    // ],
    otherDetails: [
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
          AlternateNames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          ReleaseDate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          BatteryLife: "8820",
          RemovableBattery: "No",
        },
        display: {
          ScreenSize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          PixelPerInch: "264",
        },
        hardware: {
          Processor: "1.3GHz one-core",
          RAM: "1GB",
          InternalStorage: "16GB",
          ExpandableStorage: "No",
          ExpandableStorageType: "microSD",
        },
        camera: {
          RearCamera: "5-megapixel",
          FrontCamera: "1.2-megapixel",
        },
        software: {
          OperatingSystem: "iOS 7",
        },
      },
    ],
  },
  {
    title: "OnePlus 8 Pro Onyx Black Android Smartphone",
    Model: "Model: MYH92LL/A ",
    Sku: "SKU: YHE4M7",
    rating: 3,
    shoppingBag: <GiShoppingBag />,
    Instock: "In Stock",
    discount: "11%",
    originalPrice: "$959.00",
    discountPrice: "$859.00",
    circleIcon: <CiCircleCheck />,
    socialIcons: [
      {
        icon: <FaFacebookF />,
        bgColor: "#3b5998",
      },
      {
        icon: <FaTwitter />,
        bgColor: "#1da1f2",
      },
      {
        icon: <FaPinterestP />,
        bgColor: "#e60023",
      },
      {
        icon: <FaLinkedinIn />,
        bgColor: "#0077b5",
      },
      {
        icon: <FaWhatsapp />,
        bgColor: "#25d366",
      },
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
    otherDetails: [
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
          AlternateNames: "iPad 5",
          Brand: "Apple",
          Model: "iPad Air Wi-Fi + Cellular",
          ReleaseDate: "September 2013",
          Dimensions: "240.00 x 169.50 x 7.50",
          Weight: "478.00",
          BatteryLife: "8820",
          RemovableBattery: "No",
        },
        display: {
          ScreenSize: "9.70",
          Touchscreen: "No",
          Resolution: "1536x2048 pixels",
          PixelPerInch: "264",
        },
        hardware: {
          Processor: "1.3GHz one-core",
          RAM: "1GB",
          InternalStorage: "16GB",
          ExpandableStorage: "No",
          ExpandableStorageType: "microSD",
        },
        camera: {
          RearCamera: "5-megapixel",
          FrontCamera: "1.2-megapixel",
        },
        software: {
          OperatingSystem: "iOS 7",
        },
      },
    ],
  },
];
export default data;
