import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
// import "./css/homeanime.scss";
// import "./animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import img1 from "../Images/top1.png";
// import img2 from "../Images/top2.png";
// import img3 from "../Images/top3.png";
// import img4 from "../Images/top4.webp";
import service_image from "../Images/SERVICES.svg";
import fire from "../Images/icons/Fire.svg";
import arrow from "../Images/icons/arrow.svg";
import thinarrow from "../Images/icons/arrow-right-thin-svgrepo-com.svg";

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

import { Application } from '@splinetool/runtime';

import "./css/home.css";
import SimpleImageSlider from "react-simple-image-slider";

gsap.registerPlugin(ScrollTrigger);

function Home () {

  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('Loading...');

    return () => {
      // Cleanup code if needed
    };
  }, []);

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

    gsap.fromTo(el, { x: -100}, {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // Trigger animation when the top of the div reaches the center of the viewport
        end: "top center", // End animation when the bottom of the div reaches the center of the viewport
        scrub: true, // Smoothly animates the movement
      }
    });
  }, []);

  const ref2 = useRef();

  useEffect(() => {
    const el2 = ref2.current;

    gsap.fromTo(el2, { x: 100}, {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el2,
        start: "top bottom", // Trigger animation when the top of the div reaches the center of the viewport
        end: "center bottom", // End animation when the bottom of the div reaches the center of the viewport
        scrub: true, // Smoothly animates the movement
      }
    });
  }, []);


  return (
    <>
      <div>
        {/* <SimpleImageSlider
          width={"100vw"}
          height={"50vh"}
          images={images}
          showBullets={true}
          showNavs={true}
          // autoPlay={true}
          autoPlayDelay={2}
        /> */}
        <div className="test">
          <div className="home-wrapper2">
            <div className="item1">
              <p>Welcome</p>
              <img style={{width:"15px"}} src={fire}></img>
            </div>
            <div className="counting">
              <p className="counter">11,921+</p>
              <p className="counter-text">Yearly Marriages</p>
            </div>
            <div className="item2">
              <img style={{width:"20px", marginTop:"17px"}} src={arrow}></img>
              <p>No.1: Japan Marketing Research <br/>Organization (Number of <br/>marriages: 2022 results, targeting <br/>major marriage agencies and <br/>federations)</p>
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
            <button type="submit" className="newsletter-button"><img src={thinarrow} style={{width:"30px"}}></img></button>
          </div>
        </div>
            <div className="service-div">
              <div
                ref={ref}
                style={{
                  display:"inline",
                  position: 'relative',
                  left: '0px', 
                  transition: 'left 1s ease',
                }}
              >
                <img className="text-image" src={service_image} alt=""></img>
              </div>
              <div
                ref={ref2}
                style={{
                  display:"inline",
                  position: 'relative',
                  left: '0px', 
                  transition: 'left 1s ease',
                }}
              >
              <div className="services-wrapper">
                <h1 className="service-heading">IBJ</h1>
                <div style={{display:"flex"}}>
                  <div style={{height:"1px", width:"100px", backgroundColor:"#00509e", marginTop:"-15px", marginBottom:"30px", opacity:"20%"}}/>
                  <div style={{height:"1px", width:"50px", backgroundColor:"red", marginTop:"-15px", marginBottom:"30px", opacity:"20%"}}/>
                </div>
                  <div>
                    <a href="/">
                      <img className="service-logo" src={ibj} alt="Service Logo"/>
                    </a>
                    <a href="https://www.loungemembers.com/">
                      <img className="service-logo" src={members} alt="Service Logo"/>
                    </a>
                    <a href="https://www.partyparty.jp/">
                      <img className="service-logo" src={party} alt="Service Logo"/>
                    </a>
                    <a href="https://www.bridalnet.co.jp/">
                      <img className="service-logo" src={bridalnet} alt="Service Logo"/>
                    </a>
                    <a href="https://www.rush01.com/">
                      <img className="service-logo" src={gohan} alt="Service Logo"/>
                    </a>
                    <a href="https://w-navi.jp/">
                      <img className="service-logo" style={{height:"60px"}} src={navi} alt="Service Logo"/>
                    </a>
                    <a href="https://www.ibj-life.jp/">
                      <img className="service-logo" src={ibjlife} alt="Service Logo"/>
                    </a> 
                  </div>
                <h1 className="service-heading" style={{marginTop:"50px"}}>Group Services</h1>
                <div style={{display:"flex"}}>
                  <div style={{height:"1px", width:"250px", backgroundColor:"#00509e", marginTop:"-15px", marginBottom:"30px", opacity:"20%"}}/>
                  <div style={{height:"1px", width:"100px", backgroundColor:"red", marginTop:"-15px", marginBottom:"30px", opacity:"20%"}}/>
                </div>
              <div>
                <a href="https://www.zwei.com/">
                  <img className="service-logo" src={zwei} alt="Service Logo" />
                </a>
                <a href="https://www.sunmarie.co.jp/">
                  <img className="service-logo" src={sunmari} alt="Service Logo" />
                </a>
                <a href="https://youbride.jp/">
                  <img className="service-logo" src={youbride} alt="Service Logo" />
                </a>
                <a href="https://ibf.ibjapan.jp/">
                  <img className="service-logo" src={ibjf} alt="Service Logo" />
                </a>
                <a href="https://kvillage.co.jp/">
                  <img className="service-logo" src={kvillage} alt="Service Logo" />
                </a>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div>
            <canvas id="canvas3d" />
          </div>
          <div style={{marginTop:"500px"}}>
          <p>Hello</p>
          </div>
    </>
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
