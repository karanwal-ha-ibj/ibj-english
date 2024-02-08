import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../Components/gsaptest.css";

import intro1 from "../Images/intro/ibj1.jpeg";
import intro2 from "../Images/intro/ibj2.jpeg";
import intro3 from "../Images/intro/ibj3.jpeg";
import intro4 from "../Images/intro/ibj4.png";
import intro5 from "../Images/intro/ibj6.png";
import intro6 from "../Images/intro/ibj5.webp";

gsap.registerPlugin(ScrollTrigger);

const Gsaptest = () => {
  useEffect(() => {
    let container = document.querySelector('.slides'),
      slides = gsap.utils.toArray('.slide'),
      getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    slides.forEach((slide, i) => {
      let bg = slide.querySelector('.background'),
        content = slide.querySelector('.content'),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: () => (i ? 'top bottom' : 'top top'),
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

      tl.fromTo(
        bg,
        {
          y: () => (i ? -window.innerHeight * getRatio(slide) : 0),
        },
        {
          y: () => window.innerHeight * (1 - getRatio(slide)),
          ease: 'none',
        }
      );
      tl.fromTo(
        content,
        {
          y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0),
        },
        {
          y: () => window.innerHeight * getRatio(slide) * 2,
          ease: 'none',
        },
        0
      );
    });
  }, []);

  return (
      <main>
      <section className="slides">
        <ul className="list">
          <li className="slide">
            <div className="background" style={{ backgroundImage: `url(${intro1})` }}></div>
            <div className="content">
              {/* <p style={{color:"black"}}>IBJ</p> */}
            </div>
          </li>
          <li className="slide">
            <div className="background" style={{ backgroundImage: `url(${intro2})` }}></div>
            <div className="content">
              {/* <p style={{color:"black"}}>IS THE</p> */}
            </div>
          </li>
          <li className="slide">
            <div className="background" style={{ backgroundImage: `url(${intro3})` }}></div>
            <div className="content">
              {/* <p style={{color:"black"}}>BEST</p> */}
            </div>
          </li>
          <li className="slide">
            <div className="background" style={{ backgroundImage: `url(${intro4})` }}></div>
            <div className="content">
              {/* <p style={{color:"black"}}>MATRIMONY</p> */}
            </div>
          </li>
          <li className="slide">
            <div className="background" style={{ backgroundImage: `url(${intro5})` }}></div>
            <div className="content">
              {/* <p style={{color:"black"}}>COMPANY</p> */}
            </div>
          </li>
          <li className="slide">
            <div className="background" style={{ backgroundImage: `url(${intro6})` }}></div>
            <div className="content">
                {/* <p style={{color:"black"}}>IN JAPAN</p> */}
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Gsaptest;