import styles from "./Shop-banner-bottom.module.css";
const ShopBannerBottom = () => {
  const shopbannerbottomdata = [
    {
      images:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/banner-31.jpg",
      para: "Maecenas non erat",
      title: "Home Speaker",
      Weekndiscout: "Weekend Discount",
      orginalprice: "399.00",
      discountprice: "399.00",
    },
    {
      images:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/banner-32.jpg",
      para: "Maecenas non erat",
      title: "Home Speaker",
      Weekndiscout: "Weekend Discount",
      orginalprice: "399.00",
      discountprice: "399.00",
    },
    {
      images:
        "https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/09/banner-33.jpg",
      para: "Maecenas non erat",
      title: "Home Speaker",
      Weekndiscout: "Weekend Discount",
      orginalprice: "399.00",
      discountprice: "399.00",
    },
  ];
  return (
    <div
      className={`flex items-center flex-wrap justify-between  mb-4 rounded-lg ${styles.banerbottom}`}
    >
      {shopbannerbottomdata.map((item, index) => (
        <div
          key={index}
          className={`flex gap-1 items-center  h-64 bg-center bg-cover rounded-lg w-full lg:w-[30%] `}
          style={{ backgroundImage: `url(${item.images})` }}
        >
          <div className="p-4 rounded-lg ">
            <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
            <p className="mb-4 text-sm">{item.para}</p>
            <div className="flex items-center">
              <span className="mr-2 text-sm line-through">{`$${item.orginalprice}`}</span>
              <span className="text-sm font-bold">{`$${item.discountprice}`}</span>
            </div>
            <span className="inline-block px-2 py-1 mt-2 text-xs text-white bg-yellow-400 rounded-md">
              {item.Weekndiscout}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShopBannerBottom;
