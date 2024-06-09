import { FaArrowRightLong } from "react-icons/fa6";

const detail = [
  {
    name: "Smartphones & Accessories",
    loaction: "View all",
    arrow: <FaArrowRightLong />,
  },
];

const SmartPhoneNavbar = () => {
  return (
    <div className="mt-[3rem]">
      {detail.map((item, index) => (
        <div key={index} className="flex justify-between">
          <h2 className="font-semibold text-[20px]">{item.name}</h2>
          <a href="#" className="text-[blue] flex items-center mr-[10px]">
            {item.loaction}
            <span className="ml-2">{item.arrow}</span>
          </a>
        </div>
      ))}
      <div className="mt-[1rem]">
        <hr />
      </div>
    </div>
  );
};

export default SmartPhoneNavbar;
