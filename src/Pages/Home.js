import React from 'react';
import img1 from "../Images/top1.png";
import img2 from "../Images/top2.png";
import img3 from "../Images/top3.png";
import SimpleImageSlider from "react-simple-image-slider";


function Home () {
  const images = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
];
  return (
    <div>
      <SimpleImageSlider
        width={"100vw"}
        height={"100vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
  );
}

export default Home;
