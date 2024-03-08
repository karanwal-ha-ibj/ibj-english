import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
// import "./css/homeanime.scss";
// import "./animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../Images/top1.png";
import img2 from "../Images/top2.png";
import img3 from "../Images/top3.png";
import img4 from "../Images/top4.webp";
import service_image from "../Images/SERVICES.svg";
import fire from "../Images/icons/Fire.svg";
import arrow from "../Images/icons/arrow.svg";
import thinarrow from "../Images/icons/arrow-right-thin-svgrepo-com.svg";
import quote from "../Images/icons/quote.png";
import pdf from "../Images/icons/pdf.svg";

import ibj from "../Images/services/logo-IBJ.svg";
import members from "../Images/services/logo-members.svg";
import party from "../Images/services/logo-partyparty.svg";
import bridalnet from "../Images/services/logo-bridalnet.svg";
import gohan from "../Images/services/logo-gohandate.svg";
import navi from "../Images/services/logo-navi.svg";
import ibjlife from "../Images/services/logo-ibjlife.svg";
import ibjf from "../Images/services/logo-ibjf.svg";
import sunmari from "../Images/services/logo-sunmarie.svg";
import youbride from "../Images/services/logo-youbride.png";
import zwei from "../Images/services/logo-zwei.svg";
import kvillage from "../Images/services/logo-kvillage.svg";

import "./css/home.css";
import SimpleImageSlider from "react-simple-image-slider";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const targetText = "IBJ's thought.";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(targetText.substring(0, currentIndex + 1));
      currentIndex += 1;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { x: -100 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom", // Trigger animation when the top of the div reaches the center of the viewport
          end: "top center", // End animation when the bottom of the div reaches the center of the viewport
          scrub: true, // Smoothly animates the movement
        },
      },
    );
  }, []);

  const ref2 = useRef();

  useEffect(() => {
    const el2 = ref2.current;

    gsap.fromTo(
      el2,
      { x: 100 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el2,
          start: "top bottom", // Trigger animation when the top of the div reaches the center of the viewport
          end: "center bottom", // End animation when the bottom of the div reaches the center of the viewport
          scrub: true, // Smoothly animates the movement
        },
      },
    );
  }, []);

  return (
    <div>
      <div>
        <div className="main-bg">
          <div className="home-wrapper2">
            <div className="item1">
              <p>Welcome</p>
              <img style={{ width: "15px" }} src={fire} alt=""></img>
            </div>
            <div className="counting">
              <p className="counter">11,921+</p>
              <p className="counter-text">Yearly Marriages</p>
            </div>
            <div className="item2">
              <img
                style={{ width: "20px", marginTop: "17px" }}
                src={arrow}
                alt=""
              ></img>
              <p>
                No.1: Japan Marketing Research <br />
                Organization (Number of <br />
                marriages: 2022 results, targeting <br />
                major marriage agencies and <br />
                federations)
              </p>
            </div>
            {/* <div className="counter-wrapper">
              <div>
                <div className="counter" id="counter"></div>
                <p className="counter-text">Yeary marriages</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="newsletter-main">
          <div>
            <p>Subscribe to our Newsletter</p>
          </div>
          <div className="newsletter-wrapper">
            <input className="newsletter-input" placeholder="E-mail"></input>
            <button type="submit" className="newsletter-button">
              <img src={thinarrow} style={{ width: "30px" }} alt=""></img>
            </button>
          </div>
        </div>

        <div className="ceo-div">
          <div style={{ width: "100%" }}>
            <h1 className="ceo-heading">Message from the CEO</h1>
            <div className="ceo-line" />
            <div className="ceo-subdiv">
              <img className="ceo-icon" src={quote} alt="" />
              <div className="ceo-subsubdiv">
                <p className="ceo-text1">
                  Innovation and tireless effort towards growing
                  <br /> the marriage-hunting market
                </p>
                <p className="ceo-text2">
                  President & CEO
                  <br />
                  <span style={{ color: "#00478c", fontWeight: "700" }}>
                    Shigeru Ishizaka
                  </span>
                </p>
              </div>
              <div className="ceo-image-div">
                <img
                  className="ceo-image"
                  src="https://www.ibjapan.jp/information/wp-content/uploads/2023/06/message.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="common-heading">
          <h1 className="ceo-heading">Topics</h1>
          <div style={{ height: "0.5px", backgroundColor: "#7a9ec2", marginTop: "-10px" }} />
        </div> */}

        <div className="common-heading">
          <h1 className="ceo-heading">Services</h1>
          <div
            style={{
              height: "0.5px",
              backgroundColor: "#7a9ec2",
              marginTop: "-10px",
            }}
          />
        </div>

        <div className="service-div">
          <div
            ref={ref}
            style={{
              display: "inline",
              position: "relative",
              left: "0px",
              transition: "left 1s ease",
            }}
          >
            <img className="text-image" src={service_image} alt=""></img>
          </div>
          <div
            ref={ref2}
            style={{
              display: "inline",
              position: "relative",
              left: "0px",
              transition: "left 1s ease",
            }}
          >
            <div className="services-wrapper">
              <h1 className="service-heading">IBJ</h1>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    height: "1px",
                    width: "100px",
                    backgroundColor: "#00509e",
                    marginTop: "-15px",
                    marginBottom: "30px",
                    opacity: "20%",
                  }}
                />
                <div
                  style={{
                    height: "1px",
                    width: "50px",
                    backgroundColor: "red",
                    marginTop: "-15px",
                    marginBottom: "30px",
                    opacity: "20%",
                  }}
                />
              </div>
              <div>
                <a href="/">
                  <img className="service-logo" src={ibj} alt="Service Logo" />
                </a>
                <a href="https://www.loungemembers.com/">
                  <img
                    className="service-logo"
                    src={members}
                    alt="Service Logo"
                  />
                </a>
                <a href="https://www.partyparty.jp/">
                  <img
                    className="service-logo"
                    src={party}
                    alt="Service Logo"
                  />
                </a>
                <a href="https://www.bridalnet.co.jp/">
                  <img
                    className="service-logo"
                    src={bridalnet}
                    alt="Service Logo"
                  />
                </a>
                <a href="https://www.rush01.com/">
                  <img
                    className="service-logo"
                    src={gohan}
                    alt="Service Logo"
                  />
                </a>
                <a href="https://w-navi.jp/">
                  <img
                    className="service-logo"
                    style={{ height: "60px" }}
                    src={navi}
                    alt="Service Logo"
                  />
                </a>
                <a href="https://www.ibj-life.jp/">
                  <img
                    className="service-logo"
                    src={ibjlife}
                    alt="Service Logo"
                  />
                </a>
                <p style={{ color: "#01abd0", fontWeight: "700" }}>
                  (in Japanese)
                </p>
              </div>
              <h1 className="service-heading" style={{ marginTop: "50px" }}>
                Group Services
              </h1>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    height: "1px",
                    width: "250px",
                    backgroundColor: "#00509e",
                    marginTop: "-15px",
                    marginBottom: "30px",
                    opacity: "20%",
                  }}
                />
                <div
                  style={{
                    height: "1px",
                    width: "100px",
                    backgroundColor: "red",
                    marginTop: "-15px",
                    marginBottom: "30px",
                    opacity: "20%",
                  }}
                />
              </div>
              <div>
                <a href="https://www.zwei.com/">
                  <img className="service-logo" src={zwei} alt="Service Logo" />
                </a>
                <a href="https://www.sunmarie.co.jp/">
                  <img
                    className="service-logo"
                    src={sunmari}
                    alt="Service Logo"
                  />
                </a>
                <a href="https://youbride.jp/">
                  <img
                    className="service-logo"
                    src={youbride}
                    alt="Service Logo"
                  />
                </a>
                <a href="https://ibf.ibjapan.jp/">
                  <img className="service-logo" src={ibjf} alt="Service Logo" />
                </a>
                <a href="https://kvillage.co.jp/">
                  <img
                    className="service-logo"
                    src={kvillage}
                    alt="Service Logo"
                  />
                </a>
                <p style={{ color: "#01abd0", fontWeight: "700" }}>
                  (in Japanese)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common-heading" style={{ marginTop: "150px" }}>
        <h1 className="ceo-heading">News Release</h1>
        <div
          style={{
            height: "0.5px",
            backgroundColor: "#7a9ec2",
            marginTop: "-10px",
          }}
        />
      </div>
      <div className="news">
        <p className="news-heading">March 1st, 2024</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/uploads/2024/03/%E8%8B%B1%E8%A8%B3%E7%89%88%E6%8B%9B%E9%9B%86%E9%80%9A%E7%9F%A5_240228.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✱ Notice of Convocation of the 18th Annual General Meeting of
            Shareholders
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />

        <p className="news-heading">February 9th, 2024</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/themes/ibj-gl-wp/img/ir/ir_pdf/Medium-Term_ManagementPlan/mtmp_2023-2027.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ✱ MediumTerm-ManagementPlan
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />

        <p className="news-heading">February 9st, 2024</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/themes/ibj-gl-wp/img/ir/ir_pdf/FinancialResultsBriefingData/2024/Full-year_for_the_Fiscal_Year_Ended_December-31-2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ✱ 2023 4Q Financial Results
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />

        <p className="news-heading">November 10th, 2023</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/themes/ibj-gl-wp/img/ir/ir_pdf/FinancialResultsBriefingData/2023/fr_2023-Q3.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ✱ 2023 3Q Financial Results
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />

        <p className="news-heading">November 10th, 2023</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/themes/ibj-gl-wp/img/ir/ir_pdf/Flash-Reports/2023/fl_2023-Q3.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ✱ 2023 3Q Financial Statements
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />

        <p className="news-heading">August 10th, 2023</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/themes/ibj-gl-wp/img/ir/ir_pdf/FinancialResultsBriefingData/2023/fr_2023-Q2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ✱ 2023 2Q Financial Results
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />

        <p className="news-heading">August 10th, 2023</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/themes/ibj-gl-wp/img/ir/ir_pdf/Flash-Reports/2023/fl_2023-Q2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ✱ 2023 2Q Financial Statements
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />

        <p className="news-heading">March 9th, 2023</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "10px",
            marginTop: "-30px",
          }}
        >
          <a
            className="news-subheadng"
            href="https://www.ibj-gl.com/wp-content/themes/ibj-gl-wp/img/ir/ir_pdf/OrdinaryGeneralMeeting-of-Shareholders/Notice_of_Convocation_of_the_17th_Annual_General_Meeting_of_Shareholders.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ✱ Ordinary General-MeetingShareholders
          </a>
          <img src={pdf} alt="" style={{ width: "20px" }} />
        </div>
        <div className="news-line" />
      </div>
      {/* <SimpleImageSlider
          width={"100vw"}
          height={"60vh"}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        autoPlayDelay={2}
        style={{marginTop:"200px"}}
        /> */}
    </div>
  );
}

// const images = [
//   { url: img1 },
//   { url: img4 },
//   { url: img2 },
//   { url: img3 },
// ];

// function animateValue(obj, start, end, duration) {
//   let startTimestamp = null;
//   const step = (timestamp) => {
//     if (!startTimestamp) startTimestamp = timestamp;
//     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//     obj.innerHTML = Math.floor(progress * (end - start) + start);
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     }
//   };
//   window.requestAnimationFrame(step);
// }
// const obj = document.getElementById("counter");
// animateValue(obj, 0, 11902, 100);

export default Home;
