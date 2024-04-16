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
          <a href="/">
            <img className="logo" src={ibjlogo} alt="IBJlogo" />
          </a>
        </div>

        <div className="menu-wrapper">
          <div class="dropdown">
            <p className="dropbtn menuword menu-item"><p>About Us</p></p>
              <div class="dropdown-list">
                <a class="dropdown-content dropdown-item" href="/aboutus">About IBJ</a>
                <div class="dropdown-line"/>
                <a class="dropdown-content dropdown-item" href="/">Message from CEO</a>
                <div class="dropdown-line"/>
                <a class="dropdown-content dropdown-item" href="/">Management Philosophy & Code of Conduct</a>
                <div class="dropdown-line"/>
                <a class="dropdown-content dropdown-item" href="/">Company Profile</a>
                <div class="dropdown-line"/>
                <a class="dropdown-content dropdown-item" href="/">Board Member and Executive Officers</a>
                <div class="dropdown-line"/>
                <a class="dropdown-content dropdown-item" href="/">IBJ's History</a>
                <div class="dropdown-line"/>
                <a class="dropdown-content dropdown-item" href="/">Group Companies</a>
            </div>
          </div>
          <div class="dropdown">
            <p className="dropbtn menuword menu-item"><p>Services</p></p>
              <div class="dropdown-list">
                <a class="dropdown-content" href="/">Marrage Hunting Service</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Life Design Service</a>
            </div>
          </div>
          <div class="dropdown">
            <p className="dropbtn menuword menu-item"><p>Investor Relations</p></p>
              <div class="dropdown-list">
                <a class="dropdown-content" href="/">Investor Relations</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Market Overview</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Business Model</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Business Strategies</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Competitive Advantages</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">IR Library</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Analyst Report</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Business Performance and Financial Highlights</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Stock information</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Corporate Governance</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Disclosure Policy</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Glossaly of IBJ</a>
            </div>
          </div>
          <div class="dropdown">
            <p className="dropbtn menuword menu-item"><p>CSR</p></p>
              <div class="dropdown-list">
                <a class="dropdown-content" href="/">Top Commitment</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Environmental Initiatives</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Social Initiatives</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Governance Initiatives</a>
                <div className="dropdown-line"/>
                <a class="dropdown-content" href="/">Staff Interview</a>
            </div>
          </div>
          <a href="https://www.ibjapan.jp/" className="language-wrapper">
              {/* <LanguageIcon style={{ color: "#00509e", width: "21px" }} /> */}
              <img src="https://www.ibjapan.jp/img/common/icon-lang.svg" alt=""></img>
              <p style={{ color: "#00509e", fontWeight: "bold" }}>日本度</p>
          </a>
        </div>

        <div className="mobmenu-wrapper">

            <div style={{display:"flex", alignItems:"center", gap: "20px"}}>
                <MenuIcon style={{ color: "#00509e", width: "21px" }} onClick={toggleDropdown}></MenuIcon>
                <div className="moblanguage-wrapper">
                  <a href="https://www.ibjapan.jp/">
                    <LanguageIcon style={{ color: "#00509e", width: "21px" }} />
                  </a>
                </div>
            </div>

            {isDropdownOpen && (
            <div className="dropdown-menu">
                <p>About Us</p>
                <p>Services</p>
                <p>Investor Relations</p>
                <p>CSR</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Appbar;
