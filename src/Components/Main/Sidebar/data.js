import { IoIosArrowForward } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { GrPersonalComputer } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { MdHeadphones } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { IoGlassesSharp } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
const icons = [
  {
    name: "Cell Phones",
    link: "/Cell-phones",
    image:
      "https://i.pinimg.com/736x/b5/d3/c3/b5d3c31d61cc4e62d0f22f7472b95a05.jpg", // image icon ka URL
    categories: [
      "Phone Accessories",
      "Phone Cases",
      "Postpaid Phones",
      "Unlocked Phones",
      "Prepaid Phones",
      "Prepaid Plans",
      "Refurbished Phones",
      "Straight Talk",
      "iPhone",
      "Samsung Galaxy",
    ],
    icon: <IoIosArrowForward />,
    categoryicon: <CiMobile4 />,
  },
  {
    name: " Computers & Accessories",
    link: "Computers&Accessories",
    image:
      "https://i.pinimg.com/736x/b5/d3/c3/b5d3c31d61cc4e62d0f22f7472b95a05.jpg", // image icon ka URL
    categories: [
      "Computer Components",
      "Computer Accessories",
      "Desktops",
      "Laptops",
      "Monitors",
      "Networking",
      "PC Gaming",
      "Tablets",
    ],
    icon: <IoIosArrowForward />,
    categoryicon: <GrPersonalComputer />,
  },
  {
    name: " Television & Video",
    link: "/Television&Video",
    image:
      "https://i.pinimg.com/736x/b5/d3/c3/b5d3c31d61cc4e62d0f22f7472b95a05.jpg", // image icon ka URL
    categories: [
      "HD DVD Players",
      "Projection Screens",
      "Projectors",
      "Television Accessories",
      "Televisions",
      "TV-DVD Combos",
      "VCRs",
      "Video Glasses",
    ],
    icon: <IoIosArrowForward />,
    categoryicon: <RiComputerLine />,
  },
  {
    name: "Smartwatches",
    link: "/SmartWatch",
    image:
      "https://i.pinimg.com/736x/b5/d3/c3/b5d3c31d61cc4e62d0f22f7472b95a05.jpg", // image icon ka URL
    categories: [
      "Casio Watches",
      "Chronograph Watches",
      "Kids Watches",
      "Luxury Watches",
      "Men Watches",
      "Rolex Watches",
      "Women Watches",
      "Watch Brands",
      "Timex Watches",
      "Sport Watches",
    ],
    icon: <IoIosArrowForward />,
    categoryicon: <BsSmartwatch />,
  },
  {
    name: "Headphones",
    link: "Headphone",
    categoryicon: <MdHeadphones />,
  },
  {
    name: " Camera & Photo",
    link: "/Camara&Photo",

    categoryicon: <FaCamera />,
  },
  {
    name: " Video Games",
    link: "/VideoGames",

    categoryicon: <IoGameController />,
  },
  {
    name: " Sports & Outdoors",
    link: "sports&outdoors",

    categoryicon: <IoGlassesSharp />,
  },
  {
    name: "Best Sellers",
    link: "/super-discount",
    icon: <IoIosArrowForward />,
    categoryicon: <HiArrowsUpDown />,
  },
  {
    name: " Top 100 Offers",
    link: "/super-discount",
    categoryicon: <BiSolidOffer />,
  },
  {
    name: " New Arrivals",
    link: "Computers&Accessories",
    categoryicon: <CiStopwatch />,
  },
];
export default icons;
