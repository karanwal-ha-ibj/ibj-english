import React, { useEffect, useState } from "react";
import img1 from "../Images/top1.png";
import img2 from "../Images/top2.png";
import img3 from "../Images/top3.png";
import img4 from "../Images/top4.webp";
import "./css/home.css"
import SimpleImageSlider from "react-simple-image-slider";

function Home () {
  const images = [
  { url: img4 },
  { url: img1 },
  { url: img2 },
  { url: img3 },
];

  const [text, setText] = useState("");

  useEffect(() => {
    const targetText = "IBJ's thought"; // Replace with your desired text
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
  return (
    <>
      <div>
        <SimpleImageSlider
          width={"100vw"}
          height={"89vh"}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={2}
        />
        <div className="home-wrapper">
          <span className="title gradient-text typing-text" style={{padding:"2px 0px"}}>{text}</span>
          <p>By providing total support that goes beyond just matching, we hope to contribute to solving Japan's serious problem of population decline by connecting people who want to get married.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
