import Sidebarinner from "./Sidebarinner/Sidebariiner";
import styles from "./Firstcol.module.css";
import PriceFilter from "./PriceFilter/PriceFilter";
import ProductStatus from "./ProductStatus/ProductStatus";
import FilterColor from "./FilterColor/FilterColor";
import Brands from "./Brands/Brands";
const FirstCol = () => {
  return (
    <div className={`${styles.firstcol} hidden `}>
      <Sidebarinner />
      <PriceFilter />
      <FilterColor />
      <ProductStatus />
      <Brands />
    </div>
  );
};
export default FirstCol;
