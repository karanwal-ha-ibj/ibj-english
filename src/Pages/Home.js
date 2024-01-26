import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
// import "./css/homeanime.scss";
// import "./animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../Images/top1.png";
import img2 from "../Images/top2.png";
import img3 from "../Images/top3.png";
import img4 from "../Images/top4.webp";
import services from "../Images/SERVICES.svg";
import fire from "../Images/icons/Fire.svg";
import arrow from "../Images/icons/arrow.svg";
import thinarrow from "../Images/icons/arrow-right-thin-svgrepo-com.svg";

import ibj from "../Images/services/logo-IBJ.svg";
import "./css/home.css";
import SimpleImageSlider from "react-simple-image-slider";

// import '@splinetool/viewer/build/spline-viewer.js'; 
// import '@splinetool/viewer/build/spline-viewer.css';
// import { SplineViewer } from '@splinetool/viewer/dist/index.js';

gsap.registerPlugin(ScrollTrigger);

function Home () {
  const images = [
  { url: img1 },
  { url: img4 },
  { url: img2 },
  { url: img3 },
];

  const [text, setText] = useState("");
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj = document.getElementById("counter");
  animateValue(obj, 0, 11902, 100);



  useEffect(() => {
    const targetText = "IBJ's thought."; // Replace with your desired text
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(targetText.substring(0, currentIndex + 1));
      currentIndex += 1;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration (milliseconds) for the typing speed

    return () => clearInterval(intervalId);
  }, []);

  const ref = useRef();
  useEffect(() => {
      const el = ref.current;
      gsap.fromTo(el, { scale: 0 }, {
          scale: 0.8, duration: 1, scrollTrigger: {
              trigger: el
          }
      })
  }, [])

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

        <div className="newsletter-main">
          <div>
            <p>Subscribe to our Newsletter</p>
          </div>
          <div className="newsletter-wrapper">
            <input className="newsletter-input" placeholder="E-mail"></input>
            <button type="submit" className="newsletter-button"><img src={thinarrow} style={{width:"30px"}}></img></button>
          </div>
        </div>
        {/* <SplineViewer url="https://prod.spline.design/NYG7Ha9MrPM5svTF/scene.splinecode"></SplineViewer> */}
          {/* <div className="service-div">
            <div>
              <img className="text-image" src={services} alt=""></img>
            </div>
            <div>
              <h1 className="service-heading">IBJ</h1>


              <section>
                <div class="container">
                  <a href="/" class="btn btn-5">
                    <img className="service-logo" src={ibj} />
                  </a> 
                </div>
              </section>
              <h1 className="service-heading">Group Services</h1>
            </div>
          </div> */}
          
      </div>
    </>
  );
}

export default Home;
