import styles from "./Blog.module.css";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-70%">
        <div className="mb-8">
          <h2 className={`font-normal text-[45px] ${styles.borderbottom} `}>
            But I must explain to you how all this mistaken idea
          </h2>
          <div className="flex my-4">
            <div className="mr-4">
              <p className="flex ">
                <span className="m-auto">
                  <CiTimer className="flex items-center mr-2" />
                </span>
                October 9, 2021
              </p>
            </div>
            <div className="mr-4">
              <p className="flex">
                <span className="m-auto">
                  <CiTimer className="mr-2" />
                </span>
                Watches
              </p>
            </div>
            <div className="mr-4">
              <p className="flex">
                <span className="m-auto">
                  <CiTimer className="mr-2" />
                </span>
                klbtheme , themeforest
              </p>
            </div>
          </div>
          <div className={`${styles.borderbottom} pb-[16px]`}>
            <Link to="#">
              <img
                src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/post-1.jpg"
                alt=""
              />
            </Link>
            <p className="tracking-wider text-[16px] my-6">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros laoreet libero, vitae
              suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut
              mauris ultrices, vitae sollicitudin quam facilisis. Vivamus rutrum
              urna non ligula tempor aliquet. Fusce tincidunt est magna, id
              malesuada massa imperdiet ut. Nunc non nisi urna. Nam
            </p>
            <button className="text-white bg-[#0070dc] px-[10px] py-[5px] rounded  ">
              Read more
            </button>
          </div>
        </div>
        <div>
          <h2 className={`font-normal text-[45px] ${styles.borderbottom} my-6`}>
            The Problem With Typefaces on the Web
          </h2>
          <div className="flex my-4">
            <div className="mr-4">
              <p className="flex ">
                <span className="m-auto">
                  <CiTimer className="flex items-center mr-2" />
                </span>
                October 9, 2021
              </p>
            </div>
            <div className="mr-4">
              <p className="flex">
                <span className="m-auto">
                  <CiTimer className="mr-2" />
                </span>
                Camara
              </p>
            </div>
            <div className="mr-4">
              <p className="flex">
                <span className="m-auto">
                  <CiTimer className="mr-2" />
                </span>
                envato , photo
              </p>
            </div>
          </div>
          <div className={`${styles.borderbottom} pb-[16px]`}>
            <Link to="#">
              <img
                src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/post-2.jpg"
                alt=""
              />
            </Link>
            <p className="tracking-wider text-[16px] my-6">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros laoreet libero, vitae
              suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut
              mauris ultrices, vitae sollicitudin quam facilisis. Vivamus rutrum
              urna non ligula tempor aliquet. Fusce tincidunt est magna, id
              malesuada massa imperdiet ut. Nunc non nisi urna. Nam
            </p>
            <button className="text-white bg-[#0070dc] px-[10px] py-[5px] rounded  ">
              Read more
            </button>
          </div>
        </div>
        <div>
          <h2 className={`font-normal text-[45px] ${styles.borderbottom} my-6`}>
            English Breakfast Tea With Tasty Donut Desserts
          </h2>
          <div className="flex my-4">
            <div className="mr-4">
              <p className="flex ">
                <span className="m-auto">
                  <CiTimer className="flex items-center mr-2" />
                </span>
                October 9, 2021
              </p>
            </div>
            <div className="mr-4">
              <p className="flex">
                <span className="m-auto">
                  <CiTimer className="mr-2" />
                </span>
                Tablet
              </p>
            </div>
            <div className="mr-4">
              <p className="flex">
                <span className="m-auto">
                  <CiTimer className="mr-2" />
                </span>
                iPad , pro
              </p>
            </div>
          </div>
          <div className={`${styles.borderbottom} pb-[16px]`}>
            <Link to="#">
              <img
                src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/post-3.jpg"
                alt=""
              />
            </Link>
            <p className="tracking-wider text-[16px] my-6">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros laoreet libero, vitae
              suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut
              mauris ultrices, vitae sollicitudin quam facilisis. Vivamus rutrum
              urna non ligula tempor aliquet. Fusce tincidunt est magna, id
              malesuada massa imperdiet ut. Nunc non nisi urna. Nam
            </p>
            <button className="text-white bg-[#0070dc] px-[10px] py-[5px] rounded  ">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-30% relative px-10">
        <div className="">
          <input
            type="text"
            className={`${styles.border} w-[90%] h-[38px] rounded pl-[10px]`}
            placeholder="Search..."
          />
          <span>
            <CiSearch className={`${styles.position}`} />
          </span>
        </div>
        <div className="my-8">
          <h2 className={`py-8 ${styles.borderbottom}`}>Categories</h2>
          <div>
            <div className="my-1">
              <Link to="#" className="flex">
                <span className={`${styles.margin}`}>
                  <MdOutlineKeyboardArrowRight className="m-auto text-center" />
                </span>
                <span>Camera</span>
              </Link>
            </div>
            <div className="my-1">
              <Link to="#" className="flex m-auto">
                <span className={`${styles.margin}`}>
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Smartphone</span>
              </Link>
            </div>
            <div className="my-1">
              <Link to="#" className="flex">
                <span className={`${styles.margin}`}>
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Tablet</span>
              </Link>
            </div>
            <div className="my-1">
              <Link to="#" className="flex">
                <span className={`${styles.margin}`}>
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Watches</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-8">
          <h2 className={`py-8 ${styles.borderbottom}`}>Tags</h2>
          <div className="flex flex-wrap mt-8">
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px] mb-[5px] rounded`}
            >
              {" "}
              <button>envato</button>
            </Link>
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px]  mb-[5px] rounded`}
            >
              {" "}
              <button>iPad</button>
            </Link>
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px]  mb-[5px] rounded`}
            >
              {" "}
              <button>klbtheme</button>
            </Link>
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px] mb-[5px] rounded`}
            >
              {" "}
              <button>phone</button>
            </Link>
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px] mb-[5px] rounded`}
            >
              {" "}
              <button>photo</button>
            </Link>
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px] mb-[5px] rounded`}
            >
              {" "}
              <button>pro</button>
            </Link>
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px] mb-[5px] rounded`}
            >
              {" "}
              <button>standart</button>
            </Link>
            <Link
              to="#"
              className={`${styles.border} px-[10px] py-[3px] mr-[3px] mb-[5px] rounded`}
            >
              {" "}
              <button>themeforest</button>
            </Link>
          </div>
        </div>
        <div>
          <h2 className={`py-8 ${styles.borderbottom}`}>Tags</h2>
          <div>
            <div className="flex mt-6">
              <div className=" w-[80%]">
                <img
                  src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/post-1-100x100.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="font-semibold">WATCHES</h3>
                <p className="text-[14px] ">
                  But I must explain to you how all this mistaken idea
                </p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className=" w-[80%]">
                <img
                  src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/post-2-100x100.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="font-semibold">CAMERA</h3>
                <p className="text-[14px] ">
                  The Problem With Typefaces on the Web
                </p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className=" w-[80%]">
                <img
                  src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/post-3-100x100.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="font-semibold">TABLET</h3>
                <p className="text-[14px] ">
                  English Breakfast Tea With Tasty Donut Desserts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <Link to="#">
            <img
              src="https://754969b0.rocketcdn.me/machic/wp-content/uploads/2021/10/widget-banner.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
