import NewsLetter from "./Newsletter/NewsLetter";
import FooterWidgets from "./Newsletter/Footer-widgets";
import FooterDetails from "./Newsletter/Footer-details";
import FooterPayment from "./Newsletter/Footer-Pament";
const Footer = () => {
  return (
    <div className="footer">
      <NewsLetter />
      <FooterWidgets />
      <FooterDetails />
      <FooterPayment />
    </div>
  );
};
export default Footer;
