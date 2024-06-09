import { FaHeadphones } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HeadPhone = () => {
  return (
    <div className="flex items-center mr-10 CellPhone">
      <Link to="/Headphone" className="flex align-center">
        {" "}
        <FaHeadphones className="my-auto" /> HeadPhone
      </Link>
    </div>
  );
};
export default HeadPhone;
