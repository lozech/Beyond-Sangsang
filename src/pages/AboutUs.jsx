import { useEffect, useState, useRef } from "react";
import Clients from "../components/Clients";

import "./AboutUs.css";
import * as images from "../assets/images";

function AboutUs(){
    const [isChanged, setIsChanged] = useState(false);
    const darkRef = useRef(null);
    
    return(
        <>
        <section className="about-light">
            <div className="aboutBg-wrap">
                <p className="about-tit">About Us</p>
                <div className={`bg1 ${isChanged ? "hideWrap" : ""}`}>
                    <img src={images.aboutBg1}
                    className="about-bg1" alt="about-bg" />
                    <div className="think-box">
                        <div className="bold-txt">
                            <p>THINKING</p>
                            <p>IN THE BOX?</p>
                        </div>
                        <p className="kor-box">"상자 안에서 생각해요?"</p>
                    </div>
                    <div className="last-line">
                        <p className="chageBtn click"
                        onClick={() => setIsChanged(true)}>click →</p>
                        <p className="about-edge">Beyond Sangsang</p>
                    </div>
                </div>
                <div className={`bg2 ${isChanged ? "showWrap" : ""}`}>
                    <img src={images.aboutBg2}
                    className="about-bg2" alt="about-bg" />
                    <div className="think-box">
                        <div className="bold-txt">
                            <p>HOW ABOUT</p>
                            <p>BEYOND</p>
                            <p>YOUR IMAGINATION</p>
                        </div>
                        <p className="kor-box">"상상을 뛰어넘는 건 어때요!"</p>
                    </div>
                    <div className="last-line">
                        <p className="chageBtn scroll"
                        onClick={() => {
                            const y = darkRef.current.getBoundingClientRect().top + window.scrollY - 100;

                            window.scrollTo({
                                top: y,
                                behavior: "smooth"
                            });
                        }}>scroll ↓</p>
                        <p className="about-edge">Beyond Sangsang</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-dark" ref={darkRef}>
            <div className="overview">
                <div className="left-cont">
                    <h1 className="sec-tit">Overview</h1>
                    
                    <div className="cont">
                        <p>비욘드상상 프로덕션은 브랜드가 추구하는 광고를 제작합니다.</p>
                        <p>프로듀서&디렉터뿐만 아니라,</p>
                        <p>프로덕션 디자이너와 작가로 이루어져 있습니다.</p>
                    </div>

                    <div className="cont2">
                        <p>우리의 목적은</p>
                        <p>‘매력적인 이야기’를 구상하고</p>
                        <p>‘시선을 끄는 그림’을 만드는 것입니다.</p>
                    </div>
                </div>
                <div className="right-cont">
                    <div className="first-txt">
                        <p>‘세상의 모든 물이 말라버리면 어떻게 될까?’</p>
                        <p>‘지구에 외계인이 침략한다면?’</p>
                    </div>
                    
                    <div className="second-txt">
                        <p>여기, 어린 시절부터 혼자만의 공상을 좋아하는 사람들이 모였습니다.</p>
                        <p>철학적인 생각이 강하여 자신들이 또래와 비교적 다르다는 강박을 가지곤 했습니다.</p>
                        <p>하지만 이러한 생각들이 영상 제작에 있어서는 큰 장점으로 적용된다는 걸 깨닫고</p>
                        <p>지금의 비욘드상상을 탄생시키는 동시에, 구성원들의 핵심 원동력으로 자리 잡았습니다.</p>
                    </div>

                    <div className="third-txt">
                        <p>우리는 이러한 사람들을 괴짜라고 부르곤 하지만,</p>
                        <p>평범한 사람들은 괴짜들이 만든 프레임 속에서 새로운 공상의 세계를 탐험합니다.</p>
                    </div>

                    <div className="forth-txt">
                        <p>비욘드상상은 1) 광고, 2) 영화/드라마, 3) 콘텐츠, 4) 모션그래픽 제작에 아이덴티티를</p>
                        <p>두고 있으며 공중파&케이블 및 플랫폼 미디어 시장 등, 종합영상 제작에 관여하고 있습니다.</p>
                    </div>
                </div>
            </div>

            <div className="clients">
                <h1 className="sec-tit">Clients</h1>
                <Clients />
            </div>
        </section>
        </>
    );
}

export default AboutUs;