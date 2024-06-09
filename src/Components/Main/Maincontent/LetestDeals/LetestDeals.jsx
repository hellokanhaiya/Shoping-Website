import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./LetestDeals.module.css";
import LetestDealsnavbar from "./LetestDealsnavbar";
import { Link } from "react-router-dom";

const LetestDeals = () => {
  const deals = [
    {
      title: "Dragon Touch Max10 Tablet Android 10.0 OS",
      images:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/product-6-400x400.jpg",
      rating: "5",
      discount: "32%",
      originalprice: "$189.99",
      discountprice: "$129.99",
    },
    {
      title: "Apple Watch Series 3 GPS – 42mm – Sport Band",
      images:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/series1-400x400.jpg",
      rating: "4",
      discount: "34%",
      originalprice: "$299.00",
      discountprice: "$199.00",
    },
  ];

  return (
    <>
      <div className="mt-8">
        <LetestDealsnavbar />
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {deals.map((item, index) => (
            <div key={index} className="flex items-center justify-around ">
              <Link
                to={{
                  pathname: `/single-page/${item.title}`,
                  state: { product: item },
                }}
                className={`${styles.productLink} border border-gray-300 p-4 rounded-lg shadow-sm`}
              >
                <div className={`${styles.discountre}`}>
                  <p className={`${styles.discountabsu}`}>{item.discount}</p>
                  <div className="flex justify-center">
                    <img
                      className="w-[73%]"
                      src={item.images}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="hover:text-[blue]">{item.title}</h3>
                  <div className="flex mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>
                        {i <= item.rating ? (
                          <FaStar className="text-yellow-500" />
                        ) : (
                          <FaRegStar className="text-gray-400" />
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="flex text-center">
                    <h3 className="text-[red] text-[24px] font-semibold">
                      {item.discountprice}
                    </h3>
                    <h3 className="ml-2 text-gray-500 line-through">
                      {item.originalprice}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LetestDeals;
