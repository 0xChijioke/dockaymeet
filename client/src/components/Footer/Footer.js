import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <HeartTwoTone twoToneColor="#eb2f96" />{" "} */}
      <a
        className="footer__link"
        href=""
        target="_blank"
        style={{ color: "#fdfdfd" }}
        rel="noreferrer"
      >
      </a>
    </footer>
  );
};

export default Footer;
