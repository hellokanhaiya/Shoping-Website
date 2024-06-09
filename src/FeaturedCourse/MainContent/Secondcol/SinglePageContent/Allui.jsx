import React, { useState } from "react";
import product from "../Product/nothing1";
import styles from "./Allui.module.css";

const SatisfactionAll = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={`${styles.borderbottom} mt-14`}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
          }}
          className="my-4"
        >
          <li className="mr-8">
            <button
              onClick={() => handleClick("home")}
              className="text-[1.3rem] font-semibold"
              style={{ opacity: currentPage === "home" ? 1 : 0.5 }}
            >
              Description
            </button>
          </li>
          <li className="mr-8">
            <button
              onClick={() => handleClick("about")}
              className={`text-[1.125rem] font-semibold `}
              style={{ opacity: currentPage === "about" ? 1 : 0.5 }}
            >
              Specification
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("vendor")}
              className={`text-[1.125rem] font-semibold `}
              style={{ opacity: currentPage === "vendor" ? 1 : 0.5 }}
            >
              Vendor
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        {currentPage === "home" && (
          <>
            {product.slice(0, 1).map((item, index) => (
              <div key={index}>
                <div>
                  <p className="text-[17px]">{item.Description}</p>
                </div>
                <div>
                  <h2 className="my-4">Key Features:</h2>
                  <ul className="ml-6 list-disc">
                    {item.Features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        )}

        {currentPage === "about" && (
          <>
            {product.slice(0, 1).map((item, index) => (
              <div key={index}>
                <div>
                  <h2 className="font-bold">GENERAL</h2>
                  <table className="w-full mt-4">
                    <tbody>
                      {Object.entries(item.Specification[0].general).map(
                        ([key, value]) => (
                          <tr
                            className={`${styles.borderbottom} h-[32px]`}
                            key={key}
                          >
                            <td className="w-1/2">{key}</td>
                            <td className="w-1/2">{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="mt-10">
                  <h2 className="font-bold ">DISPLAY</h2>
                  <table className="w-full mt-4">
                    <tbody>
                      {Object.entries(item.Specification[0].display).map(
                        ([key, value]) => (
                          <tr
                            className={`${styles.borderbottom} h-[32px]`}
                            key={key}
                          >
                            <td className="w-1/2">{key}</td>
                            <td className="w-1/2">{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="mt-10">
                  <h2 className="font-bold">HARDWARE</h2>
                  <table className="w-full mt-4">
                    <tbody>
                      {Object.entries(item.Specification[0].hardware).map(
                        ([key, value]) => (
                          <tr
                            className={`${styles.borderbottom} h-[32px]`}
                            key={key}
                          >
                            <td className="w-1/2">{key}</td>
                            <td className="w-1/2">{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="mt-10">
                  <h2 className="font-bold">CAMERA</h2>
                  <table className="w-full mt-4">
                    <tbody>
                      {Object.entries(item.Specification[0].camera).map(
                        ([key, value]) => (
                          <tr
                            className={`${styles.borderbottom} h-[32px]`}
                            key={key}
                          >
                            <td className="w-1/2">{key}</td>
                            <td className="w-1/2">{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="mt-10">
                  <h2 className="font-bold">SOFTWARE</h2>
                  <table className="w-full mt-4">
                    <tbody>
                      {Object.entries(item.Specification[0].software).map(
                        ([key, value]) => (
                          <tr
                            className={`${styles.borderbottom} h-[32px]`}
                            key={key}
                          >
                            <td className="w-1/2">{key}</td>
                            <td className="w-1/2">{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </>
        )}
        {currentPage === "vendor" && (
          <>
            <div>
              <h2 className="font-semibold text-[18px]">amazon</h2>
              <p className="text-[16px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="text-[blue] mt-4 ">
                More Products from amazon
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SatisfactionAll;
