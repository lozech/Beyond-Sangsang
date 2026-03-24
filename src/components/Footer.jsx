import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as images from "../assets/images";

function Footer({ variant }){
    return(
        <footer className={`footer ${variant}`}>
            <div className="footer-wrap">
                <Link to="/">
                    <img
                        src={
                        variant === "orangeLight"
                            ? images.contactFlogo
                            : images.flogo
                        }
                        className="flogo"
                        alt="logo"
                    />
                </Link>
                <div className="phone">
                    <p>PHONE</p>
                    <p>031-546-0317</p>
                </div>
                <div className="address">
                    <p>ADRESS</p>
                    <p>4, Changnyong-daero 41beon-gil, Paldal-gu,</p>
                    <p>Suwon-si, Gyeonggi-do, Republic of Korea</p>
                </div>
                <img src={
                    variant === "orangeLight" ? 
                    images.contactTop 
                    : images.ftop
                }
                className="topBtn"
                alt="topBtn"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }} />
            </div>
        
        </footer>
    );
}

export default Footer;