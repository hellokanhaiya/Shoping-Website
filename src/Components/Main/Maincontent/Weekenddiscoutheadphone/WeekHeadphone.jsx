import { Link } from "react-router-dom";

const weekendDetail = [
  {
    images:
      "https://klbtheme.com/machic/wp-content/uploads/2021/09/banner-4.jpg",
    discount: "WEEKEND DISCOUNT",
    categoryName: "Momentum 3 Headphone",
    opportunity: "Don't miss the last opportunity.",
    button: "Shop Now",
    title: "Beats Studio3 Wireless Headphones – Matte Black", // Add a title for the route
  },
];

const WeekHeadphone = () => {
  return (
    <div className="w-full mt-[5rem]">
      <ul className="flex justify-between">
        {weekendDetail.map((item, index) => (
          <Link
            key={index}
            to={{
              pathname: `/single-page/${item.title}`,
              state: { product: item },
            }}
            style={{ width: "100%", height: "100%" }}
            className="flex items-center justify-center"
          >
            <li
              className="flex w-full p-6 bg-center bg-cover"
              style={{
                backgroundImage: `url('${item.images}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-left">
                <p className="hidden">{item.title}</p>
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
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WeekHeadphone;
