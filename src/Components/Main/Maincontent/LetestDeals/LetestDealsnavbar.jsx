import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const detail = [
  {
    name: "Latest Deals",
    loaction: "View all",
    arrow: <FaArrowRightLong />,
  },
];

const LetestDealsnavbar = () => {
  return (
    <div className="mt-[3rem]">
      {detail.map((item, index) => (
        <div key={index} className="flex justify-between">
          <h2 className="font-semibold text-[20px]">{item.name}</h2>
          <Link
            to="View-all"
            className="text-[blue] flex items-center mr-[10px]"
          >
            {item.loaction}
            <span className="ml-2">{item.arrow}</span>
          </Link>
        </div>
      ))}
      <div className="mt-[1rem]">
        <hr />
      </div>
    </div>
  );
};

export default LetestDealsnavbar;
