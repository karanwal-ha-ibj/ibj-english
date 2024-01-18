import React, { useState } from "react";
import ibjlogo from "../Images/logo-IBJ.png";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import "../Components/components/appbar.css";

const Appbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="appbar">
        <div>
          <img style={{ width: "110px", marginLeft: "20px" }} src={ibjlogo} alt="IBJlogo" />
        </div>

        <div className="menu-wrapper">
            <a href="/" className="menuword menu-item"><p>会社情報</p></a>
            <a href="/" className="menuword menu-item"><p>ニュース</p></a>
            <a href="/" className="menuword menu-item"><p>サービス</p></a>
            <a href="/" className="menuword menu-item"><p>投資家情報</p></a>
            <a href="/" className="menuword menu-item"><p>サステナビリティ</p></a>
            <a href="/" className="menuword menu-item"><p>採用情報</p></a>
            <a href="https://www.ibjapan.jp/" className="language-wrapper">
                {/* <LanguageIcon style={{ color: "#00509e", width: "21px" }} /> */}
                <img src="https://www.ibjapan.jp/img/common/icon-lang.svg"></img>
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
                <p>会社情報</p>
                <p>ニュース</p>
                <p>サービス</p>
                <p>投資家情報</p>
                <p>サステナビリティ</p>
                <p>採用情報</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Appbar;
