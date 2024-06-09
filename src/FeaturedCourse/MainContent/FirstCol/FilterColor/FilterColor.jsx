import styles from "./FilterColor.module.css";
const colors = [
  { name: "Black", code: "#000000", link: "black" },
  { name: "Blue", code: "#1e73be", link: "blue" },
  { name: "Brown", code: "#49271d", link: "brown" },
  { name: "Gray", code: "#bfbfbf", link: "gray" },
  { name: "Green", code: "#50b948", link: "green" },
  { name: "Orange", code: "#ff7900", link: "orange" },
  { name: "Red", code: "#cb2028", link: "red" },
];
const FilterColor = () => {
  return (
    <div>
      <div className={`${styles.filterborder}`}>
        <h2 className="my-4">Filter by color</h2>
      </div>
      <div className="mt-4 widget woocommerce widget_layered_nav woocommerce-widget-layered-nav">
        <ul className="woocommerce-widget-layered-nav-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="my-2 woocommerce-widget-layered-nav-list__item wc-layered-nav-term"
            >
              <div className="flex justify-between type-color">
                <div>
                  <span
                    className={`${styles.colorbox}`}
                    style={{ backgroundColor: color.code }}
                  ></span>
                  <a
                    rel="nofollow"
                    href={`https://klbtheme.com/machic/multivendor/shop/?filter_cat=42&filter_color=${color.link}`}
                  >
                    {color.name}
                  </a>
                </div>
                <div>
                  <span className="mr-4 count text-[#ccc]">(2)</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FilterColor;
