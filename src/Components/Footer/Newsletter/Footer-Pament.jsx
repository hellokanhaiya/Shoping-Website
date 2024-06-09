import React from "react";

const FooterPayment = () => {
  return (
    <div className="my-10 footer-row footer-copyright bordered">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="flex flex-wrap justify-between footer-bottom">
              <div className="site-copyright">
                <p className="text-[14px]">
                  Copyright 2024 © Machic WordPress Theme. All rights reserved.
                  Powered by <strong>KLBTheme</strong>.
                </p>
              </div>
              <div className="site-payment-logos m-[1rem]">
                <a className="" href="https://klbtheme.com/machic/shop/">
                  <img
                    src="https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/10/payment.png"
                    alt="payment"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
