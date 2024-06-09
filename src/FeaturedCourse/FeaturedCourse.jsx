import ShopBannerTop from "./Shopbannertop/Shop-banner-top";
import ShopBannerBottom from "./Shopbannerbottom/Shop-banner-bottom";
import Shoppageheader from "./Shoppageheader/Shoppageheader";
import BeforeShopLoop from "./Beforeshoploop/BeforeshopLoop";
import MainContentFeatured from "./MainContent/Maincontent";
const FeaturedCourse = () => {
  return (
    <div className="p-4 Featured-course">
      <div className="">
        <ShopBannerTop />
        <ShopBannerBottom />
        <Shoppageheader />
        <BeforeShopLoop />
        <MainContentFeatured />
      </div>
    </div>
  );
};
export default FeaturedCourse;
