import React, { useState } from "react";
import ibjlogo from "../Images/logo-IBJ.svg";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import "../Components/css/appbar.css";

const Appbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="appbar">
        <div>
          <img className="logo" src={ibjlogo} alt="IBJlogo" />
        </div>

        <div className="menu-wrapper">
            <a href="/" className="menuword menu-item"><p>About Us</p></a>
            <a href="/" className="menuword menu-item"><p>News</p></a>
            <a href="/" className="menuword menu-item"><p>Services</p></a>
            <a href="/" className="menuword menu-item"><p>Investor Information</p></a>
            <a href="/" className="menuword menu-item"><p>Sustainability</p></a>
            <a href="/" className="menuword menu-item"><p>Career at IBJ</p></a>
            <a href="https://www.ibjapan.jp/" className="language-wrapper">
                {/* <LanguageIcon style={{ color: "#00509e", width: "21px" }} /> */}
                <img src="https://www.ibjapan.jp/img/common/icon-lang.svg" alt=""></img>
                <p style={{ color: "#00509e", fontWeight: "bold" }}>日本度</p>
            </a>
        </div>

        <div className="mobmenu-wrapper" onClick={toggleDropdown}>

            <div style={{display:"flex", alignItems:"center", gap: "20px"}}>
                <MenuIcon style={{ color: "#00509e", width: "21px" }}></MenuIcon>
                <div className="moblanguage-wrapper">
                    <LanguageIcon style={{ color: "#00509e", width: "21px" }} />
                </div>
            </div>

            {isDropdownOpen && (
            <div className="dropdown-menu">
                <p>About Us</p>
                <p>News</p>
                <p>Services</p>
                <p>Investor Information</p>
                <p>Sustainability</p>
                <p>Career at IBJ</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Appbar;
