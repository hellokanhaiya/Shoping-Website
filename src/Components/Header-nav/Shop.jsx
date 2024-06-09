import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
const Shop = () => {
  const item = [
    "Shop Default",
    "Shop Right Sidebar",
    "Shop Wide",
    "Filters Area",
    "List Left Sidebar",
    "Load More Button",
    "Infinite Scrolling",
  ];
  const item2 = [
    "Product Detail",
    "Product Default",
    "Product Variable",
    "Product Grouped",
    "Product External",
    "Product Downloadable",
    "Zoom Image",
    "Product With Video",
  ];
  const item3 = [
    "Shop Pages",
    "Cart",
    "Checkout",
    "My ",
    "Wishlist",
    "Order Tracking",
    "Featured Products",
    "Order on WhatsApp",
  ];
  const item4 = [
    "Shop Layouts",
    "Two Columns",
    "Three Columns",
    "Three Columns Wide",
    "Four Columns",
    "Four Columns Wide",
    "Five Columns Wide",
    "Six Columns Wide",
  ];

  return (
    <div className="static flex items-center mr-10 group">
      <Link
        to="View-all"
        className="relative flex items-center text-blue-600 hover:text-blue-800"
      >
        Shop
        <IoIosArrowDown className="ml-2" />
      </Link>

      {/* <div className="absolute z-20 hidden w-full p-4 mt-1 bg-white rounded-lg shadow-lg group-hover:block absolute top-[143px]">
        <div className="grid w-[98%] grid-cols-4 gap-4 text-left sub-menu1 hidden">
          <div className="px-6">
            <h4 className="font-semibold">Shop</h4>
            <ul className="">
              {item.map((itemName, index) => (
                <li key={index}>
                  <a
                    href={`https://klbtheme.com/machic/${itemName
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="block py-2 hover:text-blue-800 "
                  >
                    {itemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Products</h4>
            <ul>
              {item2.map((itemName, index) => (
                <li key={index}>
                  <a
                    href={`https://klbtheme.com/machic/${itemName
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="block py-2 hover:text-blue-800"
                  >
                    {itemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Pages</h4>
            <ul>
              {item3.map((itemName, index) => (
                <li key={index}>
                  <a
                    href={`https://klbtheme.com/machic/${itemName
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="block py-2 hover:text-blue-800"
                  >
                    {itemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Layouts</h4>
            <ul>
              {item4.map((itemName, index) => (
                <li key={index}>
                  <a
                    href={`https://klbtheme.com/machic/${itemName
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="block py-2 hover:text-blue-800"
                  >
                    {itemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Shop;
