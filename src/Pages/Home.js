import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
// import "./css/homeanime.scss";
// import "./animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../Images/top1.png";
import img2 from "../Images/top2.png";
import img3 from "../Images/top3.png";
import img4 from "../Images/top4.webp";
import gradient from "../Images/gradient line.svg";
import ibjcount from "../Images/Group 1.svg";
import "./css/home.css"
import SimpleImageSlider from "react-simple-image-slider";
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
      <div className="home">
        {/* <SimpleImageSlider
          width={"100vw"}
          height={"50vh"}
          images={images}
          showBullets={true}
          showNavs={true}
          // autoPlay={true}
          autoPlayDelay={2}
        /> */}
        <div className="home-wrapper">
          <div className="title-container">
            <span className="main-title gradient-text typing-text">{text}</span>
            <p className="title" style={{color:"#303030"}}>Make everyone with a connection happy!</p>
          </div>
          <div className="para">
          <p style={{color:"#303030"}}>By providing total support that goes beyond just matching, we hope to contribute to solving Japan's serious problem of population decline by connecting people who want to get married.</p>
          {/* <div style={{background: "linear-gradient(to right, #f00080, #00509e", borderRadius:"50px", height:"5px", marginLeft:"500px", marginRight:"-50px", marginTop:"35px"}}></div> */}
          <div className="gradient-line">
            <img src={gradient}></img>
          </div>
          </div>
          {/* <div>
            <div style={{ height: '0vh' }}></div>
            <img ref={ref}
                src={ibjcount}
                alt="IBJcount" />
          </div> */}
        </div>
        <div className="home-wrapper2">
          <div className="counter-wrapper">
            <div class="centered-container">
              <div className="counter" id="counter">0</div>
              <p className="counter-text">Yeary marriages</p>
            </div>
          </div>
        </div>
          {/* <div class="container">
            <div class="image">
              <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
              <div class="elfsight-app-40385314-a20f-4fb6-bbb4-a01b44cc0c1b" data-elfsight-app-lazy></div>
            </div>
            <div class="text">
              <h1>This is a beautiful picture.</h1>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default Home;
