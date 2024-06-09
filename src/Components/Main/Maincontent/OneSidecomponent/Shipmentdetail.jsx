import { RiSecurePaymentLine } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { FcShipped } from "react-icons/fc";
import styles from "./Shimentdetail.module.css";
const ShipmentDetail = [
  {
    name: "International Shipment",
    detail: "Your orders are shipped seamlessly between countries",
    icon: <FcShipped />,
  },
  {
    name: "Extended 45 day returns",
    detail: "You have the right to return your orders within 45 days.",
    icon: <IoTimerOutline />,
  },
  {
    name: "Secure Payment",
    detail: "Your payments are secure with our private security network.",
    icon: <RiSecurePaymentLine />,
  },
];

const Shipment = () => {
  return (
    <div className="w-full">
      <ul className={`${styles.shimpmetdetail}`}>
        {ShipmentDetail.map((item, index) => (
          <li key={index} className={`flex p-6 ${styles.shipmentlist}`}>
            <div className={`${styles.shipmentIcon} flex items-center`}>
              {item.icon}
            </div>
            <div className="ml-15px ">
              <h2 className="text-[15px] mb-[5px] font-semi">{item.name}</h2>
              <p className="text-[13px] text-[#818ea0] ml-12px">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shipment;
