import { MdPhoneAndroid } from "react-icons/md";
import { Link } from "react-router-dom";
const CellPhone = () => {
  return (
    <div className="flex items-center mr-10 CellPhone">
      <Link to="/Cell-phones " className="flex align-center">
        {" "}
        <MdPhoneAndroid className="my-auto" /> Cell Phone
      </Link>
    </div>
  );
};
export default CellPhone;
