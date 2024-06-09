// import React from "react";
// const Storedata = [
//   {
//     images:
//       "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand1.webp",
//     platfrom: "Amazon",
//     discription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     images:
//       "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand2.webp",
//     platfrom: "Migros",
//     discription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     images:
//       "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand2.webp",
//     platfrom: "Harrier",
//     discription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     images:
//       "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand4.webp",
//     platfrom: "Bacola",
//     discription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     images:
//       "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand5.webp",
//     platfrom: "Cosmetsy",
//     discription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     images:
//       "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand6.webp",
//     platfrom: "Medibazar",
//     discription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// const Stores = () => {
//   return (
//     <main id="main" className="site-primary">
//       <div className="site-content">
//         <div className="elementor elementor-2594">
//           <section
//             className="elementor-section elementor-top-section elementor-element elementor-element-4276df6 elementor-section-boxed elementor-section-height-default"
//             data-id="4276df6"
//             data-element_type="section"
//           >
//             <div className="elementor-container elementor-column-gap-extended">
//               <div
//                 className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4057075"
//                 data-id="4057075"
//                 data-element_type="column"
//               >
//                 <div className="elementor-widget-wrap elementor-element-populated">
//                   <div
//                     className="elementor-element elementor-element-ea811fd elementor-widget elementor-widget-machic-vendor-grid"
//                     data-id="ea811fd"
//                     data-element_type="widget"
//                     data-widget_type="machic-vendor-grid.default"
//                   >
//                     <div className="elementor-widget-container">
//                       <div className="stores-grid">
//                         <div className="row">
//                           {/* Replace below code with your dynamic data */}
//                           <div className="col-sm-6 col-md-6 col-lg-6 wow fadeInUp">
//                             <div className="item">
//                               <div className="row">
//                                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 logo-img">
//                                   <a href="https://klbtheme.com/machic/multivendor/vendor/amazon/">
//                                     <img
//                                       decoding="async"
//                                       className="img-responsive"
//                                       src="https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand1.webp"
//                                       alt="amazon"
//                                     />
//                                   </a>
//                                 </div>
//                                 <div className="col-lg-9 col-md-9 col-sm-6 col-xs-12">
//                                   <h3>
//                                     <a href="https://klbtheme.com/machic/multivendor/vendor/amazon/">
//                                       amazon
//                                     </a>
//                                   </h3>
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit, sed do eiusmod tempor
//                                     incididunt ut labore et dolore magna aliqua.
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           {/* End of dynamic data */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Stores;
import React from "react";
import styles from "./Stores.module.css";

const Storedata = [
  {
    images:
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand1.webp",
    platform: "Amazon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    images:
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand2.webp",
    platform: "Migros",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    images:
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand3.webp",
    platform: "Harrier",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    images:
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand4.webp",
    platform: "Bacola",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    images:
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand5.webp",
    platform: "Cosmetsy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    images:
      "https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/11/brand6.webp",
    platform: "Medibazar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Stores = () => {
  return (
    <main id="main" className="my-20 site-primary">
      <div className="site-content">
        <div className="elementor elementor-2594">
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-4276df6 elementor-section-boxed elementor-section-height-default"
            data-id="4276df6"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-extended">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4057075"
                data-id="4057075"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-ea811fd elementor-widget elementor-widget-machic-vendor-grid"
                    data-id="ea811fd"
                    data-element_type="widget"
                    data-widget_type="machic-vendor-grid.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="stores-grid">
                        <div
                          className={` ${styles.logoscontainer} flex flex-wrap row`}
                        >
                          {Storedata.map((store, index) => (
                            <div
                              key={index}
                              className={`w-[46%]  gap-4 col-sm-6 col-md-6 col-lg-6 wow ${styles.fadeInUp}  `}
                            >
                              <div className=" item">
                                <div className="flex row">
                                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 logo-img">
                                    <a href="#">
                                      <img
                                        decoding="async"
                                        className="img-responsive"
                                        src={store.images}
                                        alt={store.platform}
                                      />
                                    </a>
                                  </div>
                                  <div className="col-lg-9 col-md-9 col-sm-6 col-xs-12">
                                    <h3>
                                      <a href="#" className="font-bold">
                                        {store.platform}
                                      </a>
                                    </h3>
                                    <p className="text-[12px] text-[#818ea0]">
                                      {store.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Stores;
