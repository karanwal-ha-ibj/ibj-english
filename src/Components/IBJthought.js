import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gradient from "../Images/gradient line.svg";
import "../Pages/css/more.scss";
import dress from "../Images/3d-casual-life-couple-walks-with-baby.png";

import "../Pages/css/home.css";
import "../Components/css/ibjthought.css";

gsap.registerPlugin(ScrollTrigger);

function IBJthought () {
    const redirectToIBJapan = () => {
        window.location.href = 'https://www.ibjapan.jp/features/';
      };

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
    const targetText = "IBJ's Thought."; // Replace with your desired text
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
        <div className="home-wrapper">
          <div className="title-container">
            <span className="main-title gradient-text typing-text">{text}</span>
            <p className="title" style={{color:"#303030"}}>Make everyone with a connection happy!</p>
          </div>
          <div className="para">
          <p style={{color:"#303030"}}>By providing total support that goes beyond just matching, we hope to contribute to solving Japan's serious problem of population decline by connecting people who want to get married.</p>
          <div className="gradient-line">
            <img src={gradient} alt=""></img>
          </div>
          </div>
          <div class="buttons">
            <button onClick={redirectToIBJapan} class="blob-btn">
                Explore More
                <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                </span>
                </span>
            </button>
            <br/>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
            </defs>
            </svg>
            </div>

        </div>
        <img src={dress} className="dress-image" alt=""></img>
      </div>
    </>
  );
}

export default IBJthought;
