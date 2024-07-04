import React, { useState, useEffect } from "react";

import Appbar from "../../Components/Appbar";
import Footer from "../../Components/Footer";

import styled from 'styled-components';

import ibjs from "../../Images/Service/ibjs_web.png";
import weddings from "../../Images/Service/marriedc_web.png";
import x from "../../Images/Service/X.svg";

import ibj from "../../Images/services/logo-IBJ.svg";
import members from "../../Images/services/logo-members.svg";
import party from "../../Images/services/logo-partyparty.svg";
import bridalnet from "../../Images/services/logo-bridalnet.svg";
import gohan from "../../Images/services/logo-gohandate.svg";
import navi from "../../Images/services/logo-navi.svg";
import ibjlife from "../../Images/services/logo-ibjlife.svg";
import ibjf from "../../Images/services/logo-ibjf.svg";
import sunmari from "../../Images/services/logo-sunmarie.svg";
import youbride from "../../Images/services/logo-youbride.png";
import zwei from "../../Images/services/logo-zwei.svg";
import kvillage from "../../Images/services/logo-kvillage.svg";

import ibjlineup from "../../Images/Service/lineup_images/ibj-lineup.jpg";
import memberslineup from "../../Images/Service/lineup_images/memberslineup.jpg";
import partylineup from "../../Images/Service/lineup_images/partylineup.jpg";
import bridalnetlineup from "../../Images/Service/lineup_images/bridalnetlineup.jpg";
import gohanlineup from "../../Images/Service/lineup_images/gohanlineup.jpg";

import "../css/aboutus.css";
import "./css/marriagehunting.css";

function Marriagehunting() {
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
                    <h1 className="heading">Marriage Hunting Services</h1>
                </div>
            </div>
            <div className="location">
                <p className="location_text">Home　{'>'}　<span className="location_text_dest">About IBJ</span></p>
            </div>
            
            <div className="common-heading" style={{marginTop:"100px"}}>
                <h1 className="ceo-heading" style={{marginLeft:"100px"}}>IBJ’s Strength</h1>
                <div className="ceo-line"/>
            </div>
                
            <div className="main">
                <Container>
                    <Section>
                        <Title>System</Title>
                        <Heading>High technological capabilities and unique system</Heading>
                        <Text>
                        Providing a marriage hunting platform by making full use of our in-house developed system and operational technology
                        </Text>
                        <MemberDatabase>Member Database<br /><span>About 86,000</span></MemberDatabase>
                        <Image src={ibjs} alt="IBJ team" />
                    </Section>
                    <Separator><Image src={x} alt="IBJ team" /></Separator>
                    <Section>
                        <Title>Human</Title>
                        <Heading>Nurturing people and know-how of creating connections</Heading>
                        <Text>
                        Appropriate marriage support by people who have developed thorough marriage principles into know-how
                        </Text>
                        <MarriedCouples>
                        <Heart>❤️</Heart> IBJ Married Couples (2023)<br /><span>12,527</span>
                        </MarriedCouples>
                        <Image src={weddings} alt="IBJ team" />
                    </Section>
                    </Container>
                </div>
                <div className="common-heading" style={{marginTop:"100px"}}>
                    <h1 className="ceo-heading" style={{marginLeft:"100px"}}>Service Lineup</h1>
                <div className="ceo-line"/>
                
                <div className="lineup-main">
                    <div className="lineup-tag">
                        <img className="lineup-logo" src={ibj} alt="" />
                        <img className="lineup-img" src={ibjlineup} alt="" />
                        <div className="lineup-text">
                            <h1 className="lineup-text1">Japan’s largest<br/>marriage agency network</h1>
                            <p className="lineup-text2">The number of members is about 86,000, the number of monthly matchmaking is about 60,000, and the number of affiliates is about 4,100,the largest in Japan. We provide a platform that connects affiliates and members nationwide via a network. It has spread the marriage method and has produced married couples.</p>
                        </div>
                    </div>
                    <div className="lineup-tag">
                        <img className="lineup-logo" src={members} alt="" />
                        <img className="lineup-img" src={memberslineup} alt="" />
                        <div className="lineup-text">
                            <h1 className="lineup-text1">Japan’s largest<br/>marriage agency network</h1>
                            <p className="lineup-text2">The number of members is about 86,000, the number of monthly matchmaking is about 60,000, and the number of affiliates is about 4,100,the largest in Japan. We provide a platform that connects affiliates and members nationwide via a network. It has spread the marriage method and has produced married couples.</p>
                        </div>
                    </div>
                    <div className="lineup-tag">
                        <img className="lineup-logo" src={party} alt="" />
                        <img className="lineup-img" src={partylineup} alt="" />
                        <div className="lineup-text">
                            <h1 className="lineup-text1">Japan’s largest<br/>marriage agency network</h1>
                            <p className="lineup-text2">The number of members is about 86,000, the number of monthly matchmaking is about 60,000, and the number of affiliates is about 4,100,the largest in Japan. We provide a platform that connects affiliates and members nationwide via a network. It has spread the marriage method and has produced married couples.</p>
                        </div>
                    </div>
                </div>
                
                <div className="lineup-main">
                    <div className="lineup-tag">
                        <img className="lineup-logo" src={bridalnet} alt="" />
                        <img className="lineup-img" src={bridalnetlineup} alt="" />
                        <div className="lineup-text">
                            <h1 className="lineup-text1">Japan’s largest<br/>marriage agency network</h1>
                            <p className="lineup-text2">The number of members is about 86,000, the number of monthly matchmaking is about 60,000, and the number of affiliates is about 4,100,the largest in Japan. We provide a platform that connects affiliates and members nationwide via a network. It has spread the marriage method and has produced married couples.</p>
                        </div>
                    </div>
                    <div className="lineup-tag">
                        <img className="lineup-logo" src={gohan} alt="" />
                        <img className="lineup-img" src={gohanlineup} alt="" />
                        <div className="lineup-text">
                            <h1 className="lineup-text1">Japan’s largest<br/>marriage agency network</h1>
                            <p className="lineup-text2">The number of members is about 86,000, the number of monthly matchmaking is about 60,000, and the number of affiliates is about 4,100,the largest in Japan. We provide a platform that connects affiliates and members nationwide via a network. It has spread the marriage method and has produced married couples.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: system-ui;
  margin-top: -50px
`;

const Section = styled.div`
  flex: 1;
  padding: 10px 50px;
  background: white;
  margin: 0px 50px;
  border: 0.5px solid #d5d5d5;
  border-radius: 10px;
`;

const Separator = styled.div`
  width: 30px;
  height: 100%;
`;

const Title = styled.h2`
  color: #999;
  font-size: 18px;
  text-align: center;
`;

const Heading = styled.h3`
  color: #002b75;
  font-size: 24px;
  text-align: center;
`;

const Text = styled.p`
  color: #333;
  font-size: 16px;
  text-align: center;
`;

const MemberDatabase = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  span {
    font-size: 24px;
    color: #002b75;
  }
`;

const MarriedCouples = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  span {
    font-size: 24px;
    color: #002b75;
  }
`;

const Heart = styled.span`
  color: red;
  font-size: 24px;
`;

const Image = styled.img`
  display: block;
  margin: 20px auto 0;
  max-width: 100%;
  height: auto;
`;

export default Marriagehunting;
