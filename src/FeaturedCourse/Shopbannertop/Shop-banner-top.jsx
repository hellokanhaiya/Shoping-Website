const ShopBannerTop = () => {
  return (
    <div className="my-6 rounded-sm col">
      <div className=" site-module module-banner-text">
        <div className="bg-gray-200 banner-wrapper">
          <div className="flex flex-wrap justify-between py-4 banner-inner">
            <div className="mx-8 my-auto">
              <h4 className="text-center entry-title text-[18px] ">
                SHOP AND{" "}
                <strong className="font-semibold bg-[#ffbd27] py-[4px] px-[8px] rounded-bl-3xl">
                  SAVE BIG ON HOTTEST
                </strong>{" "}
                PRODUCTS
              </h4>
            </div>
            <div>
              <div className="flex mx-8">
                <div className=" banner-details">
                  <div className="text-right banner-price">
                    from{" "}
                    <span className="font-bold text-[red] text-[24px]">
                      $79.00
                    </span>
                  </div>
                  <p className="text-[14px] text-[#818ea0]">
                    Don't miss this special opportunity today.
                  </p>
                </div>
                <div className="my-auto ml-4 banner-button">
                  <a
                    href="#"
                    className="text-[white] rounded btn p-[8px] rounded small  bg-[#0070dc]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopBannerTop;
