import React from "react";
import Appbar from "../../Components/Appbar";
import Footer from "../../Components/Footer";

import "./css/companyprofile.css";
function Companyprofile() {

    return (
        <div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <Appbar />
                <div className="location">
                    <p className="location_text">Home　{'>'}　<span className="location_text_dest">About IBJ</span></p>
                </div>
                <div className="first-container">
                    <p className="one">About Us</p>
                    <h1 className="two">Company Profile</h1>
                </div>
                <div className="hr" />
                <table className="table">
                    <tr>
                        <th>Company Name</th>
                        <td>IBJ, Inc.</td>
                    </tr>
                    <tr>
                        <th>Established</th>
                        <td>February 2006</td>
                    </tr>
                    <tr>
                        <th>Business Activities</th>
                        <td>
                            Community-related business (marriage-hunting websites)<br/>
                            Event-related business (parties, matchmaking get-togethers, community gatherings)<br/>
                            Directly-managed marriage-hunting lounge business<br/>
                            Marriage Consulting Federation business<br/>
                            Franchise business<br/>
                            Life design business<br/>
                        </td>
                    </tr>
                    <tr>
                        <th>Paid-in Capital</th>
                        <td>699,585,000 yen (Dec, 2023)</td>
                    </tr>
                    <tr>
                        <th>Stock Exchange</th>
                        <td>Tokyo Stock Exchange, Prime Section (Code: 6071)</td>
                    </tr>
                    <tr>
                        <th>Directors</th>
                        <td>
                            <span style={{fontWeight:"bold"}}>・Director</span><br/>
                            　Shigeru Ishizaka, CEO<br/>
                            　Kenjiro Tsuchiya, Managing Director<br/>
                            　Yasuyuki Yokogawa, Director<br/>
                            　Kohzoh Umezu, Director<br/>
                            　Megumu Murakami, Director<br/>
                            　Mai Satou, Director<br/>
                            　Yuki Futatsuya, Company Auditor<br/>
                            　Nobuyuki Teramura, Company Auditor<br/>
                            　Shuhei Takahashi, Company Auditor
                            <br/><br/><span style={{fontWeight:"bold"}}>・Executive officer</span><br/>
                            　Daisuke Nakano, executive officer<br/>
                            　Masahiro Ono, executive officer<br/>
                            　Yusuke Sawamura, executive office<br/>
                            　Takehiko Ogasawara, executive officer<br/>
                            　Ken Odagiri, executive officer<br/>
                            　Tetsuaki Tsunemi, executive officer<br/>
                            　Akira Ishida, executive officer<br/>
                        </td>
                    </tr>
                    <tr>
                        <th>Staff (consolidated)</th>
                        <td>1,230 (Dec, 2023)</td>
                    </tr>
                    <tr>
                        <th>Audit Corporation</th>
                        <td>ARIA Audit Corporation</td>
                    </tr>
                    <tr>
                        <th>Banks</th>
                        <td>
                            Mizuho Bank, Ltd.<br/>
                            Bank of Mitsubishi UFJ, Ltd.<br/>
                            Sumitomo Mitsui Banking Corporation<br/>
                            Resona Bank, Ltd.<br/>
                            Sumitomo Mitsui Trust Bank, Ltd.
                        </td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>
                            <span style={{fontWeight:"bold"}}>・Headquarter</span><br/>
                            　Shinjuku First West 12F & 17F, 1-23-7 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-0023<br/>
                            　global-ir@ibjapan.jp<br/>
                            　Check the map "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://maps.app.goo.gl/eSg9cHRTMaM5vXi98">click here</a>"<br/><br/>
                            <span style={{fontWeight:"bold"}}>・Kansai Office</span><br/>
                            　Sakurabashi Miyuki Bldg.4F<br/>
                            　Nomura Real Estate Nishiumeda Bldg. 4F ,2-1-3 Umeda, Kita-ku, Osaka-shi, Osaka 530-0001<br/>
                            　Check the map "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://maps.app.goo.gl/zzN2QdzEPmUpgZGZ9">click here</a>"<br/><br/>
                            <span style={{fontWeight:"bold"}}>・Tokai Office</span><br/>
                            　Meikei Daiya Meitetsu Building. 4F ,1-1-17 Nishiku, Nagoya-shi, Aichi 451-0045<br/>
                            　Check the map "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://maps.app.goo.gl/YWpqfQQgTzTAuJHr5">click here</a>"
                        </td>
                    </tr>
                    <tr>
                        <th>Lounges</th>
                        <td>
                            *Directly-managed lounges: 16<br/>
                            Shinjuku (2 lounges), Ginza, Yurakucho, Tokyo, Ebisu , Yokohama, Omiya, Chiba,<br/>
                            Osaka, Namba, Kyoto, Kobe, Nagoya (2 lounges), Hakata
                        </td>
                    </tr>
                    <tr>
                        <th>Marriage-hunting service</th>
                        <td>
                            <ul style={{lineHeight:"0.8"}} className="bullet-list">
                                <li>IBJ official member lounge "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://www.ibjapan.com/">IBJ</a>"</li><br/>
                                <li>Directly-managed marriage-hunting lounge "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://www.loungemembers.com/">IBJ Members Marriage-Hunting Lounge</a>"</li><br/>
                                <li>Long-established marriage consulting agency with 39 years of history "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://www.sunmarie.co.jp/">Sunmarie</a>"</li><br/>
                                <li>Large company which has Network over 50 Marriage Consulting Agencies Nationwide "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://www.zwei.com/">ZWEI</a>"</li><br/>
                                <li>Marriage-hunting party "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://partyparty.jp/">PARTY PARTY</a>"</li><br/>
                                <li>Marriage hunting website "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://www.bridalnet.co.jp/">Bridal Net</a>"</li><br/>
                                <li>Marriage hunting app service "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://youbride.jp/">youbride</a>"</li><br/>
                                <li>Matchmaking get-together and community gathering service "<a style={{textDecoration:"none", color:"#027bb3", fontWeight:"bold"}} href="https://www.rush01.com/">IBJ gohan-date</a>"</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Life Design service</th>
                        <td>
                            <ul style={{lineHeight:"0.8"}}>
                                <li>The wedding business "Wedding Navi"</li> <br/>
                                <li>The Hobby and Community Business "K Village Tokyo"</li> <br/>
                                <li>The Real Estate and Housing Loan Business "IBJ Financial Advisory "</li> <br/>
                                <li>The Insurance Business "IBJ Life Design Support "</li> 
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        <Footer/>
        </div>
  );
}

export default Companyprofile;
