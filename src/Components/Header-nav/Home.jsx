import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
const Home = () => {
  const item = ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5", "Home 6"];

  return (
    <div className="relative flex items-center mr-10 group">
      <Link
        to="/"
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        Home
        <IoIosArrowDown className="ml-2" />
      </Link>

      {/* <ul className="absolute hidden group-hover:block bg-white shadow-lg p-4 text-left rounded-lg z-10 w-[300px] sub-menu">
        {item.map((itemName, index) => (
          <li key={index} className="relative ">
            <a
              href={`https://klbtheme.com/machic/${itemName
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="block px-4 py-2 hover:text-[blue]"
            >
              {itemName}
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default Home;
