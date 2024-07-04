import React, { useState, useEffect } from "react";

import Appbar from "../Components/Appbar";
import Footer from "../Components/Footer";

import panel_img_company from "../Images/AboutBJ/panel-img-company.jpg";
import panel_img_group from "../Images/AboutBJ/panel-img-group.jpg";
import panel_img_history from "../Images/AboutBJ/panel-img-history.jpg";
import panel_img_member from "../Images/AboutBJ/panel-img-member.jpg";
import panel_img_message from "../Images/AboutBJ/panel-img-message.jpg";
import panel_img_philosophy from "../Images/AboutBJ/panel-img-philosophy.jpg";
import right_arrow_semi from "../Images/icons/right-arrow-semi.png";

import "./css/aboutus.css";

function Aboutus() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <div>
        <div>
            <Appbar />
                
            <div className="parallax-container">
                <div className="parallax-bg" style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}></div>
                <div className="content">
                    <h1 className="heading">About IBJ</h1>
                </div>
            </div>
            <div className="location">
                <p className="location_text">Home　{'>'}　<span className="location_text_dest">About IBJ</span></p>
            </div>
            
            <div className="common-heading" style={{marginTop:"100px"}}>
                <h1 className="ceo-heading">The Marriage & Life Design Support Company</h1>
                <div className="ceo-line"/>
            </div>
                
            <div className="main">                    
                <div className="galary">
                    <a href="aboutus/companyprofile" style={{textDecoration:"none"}}>
                        <div className="panel">
                            <img className="panel_img_company_image" src={panel_img_company} alt="" />
                            <p className="panel_img_company_text">Company Profile</p>
                            <img className="arrow" alt="" src={right_arrow_semi} />
                        </div>
                    </a>
                    <a href="aboutus/companyhistory" style={{textDecoration:"none"}}>
                        <div className="panel">
                            <img className="panel_img_company_image" src={panel_img_history} alt="" />
                            <p className="panel_img_company_text">Company History</p>
                            <img className="arrow" alt="" src={right_arrow_semi}/>
                        </div>
                    </a>
                    <div className="panel">
                        <img className="panel_img_company_image" src={panel_img_message} alt="" />
                        <p className="panel_img_company_text">Message from CEO</p>
                        <img className="arrow" alt="" src={right_arrow_semi}/>
                    </div>
                </div>
                <div className="galary"  style={{marginTop:"100px"}}>
                    <div className="panel">
                        <img className="panel_img_company_image" src={panel_img_member} alt="" />
                        <p className="panel_img_company_text">Board Member and Executive Officers</p>
                        <img className="arrow" alt="" style={{marginTop:"-5px"}} src={right_arrow_semi}/>
                    </div>
                    <div className="panel">
                        <img className="panel_img_company_image" src={panel_img_group} alt="" />
                        <p className="panel_img_company_text">Group Companies</p>
                        <img className="arrow" alt="" style={{marginTop:"14px"}} src={right_arrow_semi}/>
                    </div>
                    <div className="panel">
                        <img className="panel_img_company_image" src={panel_img_philosophy} alt="" />
                        <p className="panel_img_company_text">Management Philosophy & Code of Conduct</p>
                        <img className="arrow" alt="" src={right_arrow_semi}/>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </div>
  );
}

export default Aboutus;
