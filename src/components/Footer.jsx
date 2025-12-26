import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import "../css_files/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="social_icons">
        <FaInstagramSquare />
        <FaFacebookSquare />
        <IoMdMailUnread />
      </div>
      <p>© 2025 All rights reserved</p>
    </footer>
  );
};

export default Footer;
