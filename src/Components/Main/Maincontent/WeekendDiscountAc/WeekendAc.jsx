import { Link } from "react-router-dom";
const weekendAcdata = [
  {
    images:
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/banner-6.jpg",
    discount: "WEEKEND DISCOUNT",
    categoryName: "Momentum 3 Headphone",
    opportunity: "Don't miss the last opportunity.",
    button: "Shop Now",
  },
];

const WeekendAc = () => {
  return (
    <div className="w-full mt-10">
      {/* Ensure parent container has full width */}
      <Link to="/View-all">
        <ul className="flex justify-between">
          {/* Make sure it's a flex container */}

          {weekendAcdata.map((item, index) => (
            <li
              key={index}
              className="flex w-full p-6 bg-center bg-cover"
              style={{
                backgroundImage: `url('${item.images}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-left">
                <h6 className="text-blue-500 text-[13px]">{item.discount}</h6>
                <h1 className="text-[26px] font-bold mb-2">
                  {item.categoryName}
                </h1>
                <p className="mb-2">{item.opportunity}</p>
                <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                  {item.button}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default WeekendAc;
