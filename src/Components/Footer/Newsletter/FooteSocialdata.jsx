import React from "react";

// Social media links data
const socialLinks = [
  { href: "https://www.facebook.com/", icon: "klbth-icon-facebook" },
  { href: "https://twitter.com/home", icon: "klbth-icon-twitter" },
  { href: "https://www.linkedin.com/", icon: "klbth-icon-linkedin" },
  { href: "https://pinterest.com/", icon: "klbth-icon-pinterest" },
  { href: "https://www.instagram.com/", icon: "klbth-icon-instagram" },
  { href: "https://www.youtube.com/", icon: "klbth-icon-youtube" },
];

const SiteDetails = () => {
  return (
    <div className="site-details flex flex-col items-center">
      <div className="site-brand mb-6">
        <a
          href="https://klbtheme.com/machic/multivendor/"
          title="Multi Vendor eCommerce Theme"
        >
          <img
            src="https://klbtheme.com/machic/multivendor/wp-content/uploads/sites/2/2021/08/logo-dark.png"
            alt="Multi Vendor eCommerce Theme"
            className="h-12"
          />
        </a>
      </div>
      <div className="site-social">
        <ul className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SiteDetails;
