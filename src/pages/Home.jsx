import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mainVideos } from "../data/mainVideos";
import CardWrap from "../components/CardWrap";
import * as images from "../assets/images";

function Home(){
    const [current, setCurrent] = useState(0);

    const durations = [7, 6, 5, 4, 5];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % mainVideos.length);
        }, durations[current] * 1000 - 300);

        return () => clearTimeout(timer);
        }, [current]);

    return(
        <>
        <section className="main-page">
            <div className="main-banner">
                <ul
                    className="mainVideo-wrap"
                    style={{
                    transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {mainVideos.map((v, i) => (
                    <li key={i} className={current === i ? "active" : ""}>
                        <video
                            key={current}
                            src={v}
                            autoPlay
                            muted
                            playsInline
                            loop
                        />
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    {mainVideos.map((_, i) => (
                    <span
                        key={i}
                        className={`bullet ${current === i ? "active" : ""}`}
                        onClick={() => setCurrent(i)}
                        style={{ "--duration": `${durations[i]}s` }}
                    >
                        <span className="number">{i + 1}</span>

                        <svg width="72" height="72">
                        <circle className="bg" cx="36" cy="36" r="34" />
                        <circle
                            key={current} 
                            className="progress"
                            cx="36"
                            cy="36"
                            r="34"
                        />
                        </svg>
                    </span>
                    ))}
                </div>
                <div className="main-daemun">
                    <img src={images.daemun} alt="daemun-txt" />
                </div>
            </div>
        </section>
        <section className="page-animation">
            <img src={images.mainRecipe} alt="page animation" />
            <div className="round">
                <span className="rounding-ball"></span>
            </div>
            <div className="think-box">
                <div className="bold-txt">
                    <p>THINKING</p>
                    <p>IN THE BOX?</p>
                </div>
                <p className="kor-box">상자 안에서 생각해요?</p>
            </div>
            <div className="about-box">
                <Link to="/about-us">
                    <img src={images.goRecipe} alt="about" />
                    <p className="box-tit">ABOUT</p>
                </Link>
                <div className="box-cont">
                    <p>HOW ABOUT</p>
                    <p className="orange-txt">BEYOUND</p>
                    <p>YOUR</p>
                    <p>IMAGINATION</p>
                </div>
            </div>
            <div className="recipe-box">
                <Link to="/recipe">
                    <img src={images.goRecipe} alt="goRecipe" />
                    <p>RECIPE 보러가기</p>
                </Link>
            </div>
        </section>
        <CardWrap/>
    </>
    );
}

export default Home;