import React from "react";

const FooterCatogary = ({ title, links }) => {
  return (
    <div className="w-full lg:w-1/4  py-20 lg:mb-0 bg-[#f7f8f9]">
      <div className="flex flex-col items-center justify-center widget">
        <h4 className="widget-title  mb-4 font-bold text-[14px]">{title}</h4>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index} className="text-[#818ea0] text-[14px]">
              <a href={link.url} className="hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterCatogary;
