import React from "react";
import "./Footer.css";
import Wave from "./wave.png";
import { FacebookRounded, GitHub, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>harshanputhanpurakkal@gmail.com</span>
        <div className="f-icons">
          <Instagram sx={{ fontSize: 60 }} />
          <FacebookRounded sx={{ fontSize: 60 }} />
          <GitHub sx={{ fontSize: 60 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
