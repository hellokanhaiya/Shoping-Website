import React from "react";

// Define a constant for the background image URL
const backgroundImageUrl =
  "https://klbtheme.com/machic/multivendor/wp-content/themes/machic/assets/images/pattern-2.png";

const NewsLetter = () => {
  return (
    <div
      className=" text-white pt-6 bg-[#041e42] newsbackground"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4  bg-opacity-80 p-8 rounded-md">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Newsletter Text */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold">Sign Up For Newsletters</h3>
            <p className="text-gray-400">
              Get E-mail updates about our latest shop and{" "}
              <strong className="text-[#ffbd27]">special offers</strong>.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="w-full lg:w-1/3">
            <form
              id="newsletter-form"
              className="flex items-center"
              method="post"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="EMAIL"
                className="bg-gray-700 text-white placeholder-gray-400 p-3 flex-1 rounded-l-md outline"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="bg-[#ffbd27] outline-none text-white font-semibold p-3 rounded-r-md "
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
