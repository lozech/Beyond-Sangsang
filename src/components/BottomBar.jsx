import React from "react";
import { Link } from "react-router-dom";
import * as images from "../assets/images";

function BottomBar({ variant }){
    return(
        <section className={`bottomBar ${variant}`}>
            <div className="bar-wrap">
                <a href="mailto:BSS@beyondsangsang.com" className="email">BSS@beyondsangsang.com</a>
                <Link to="/contact">CONTACT</Link>
                <p className="copyRight">BEYONDSANGSANG, ALL RIGHTS RESERVED</p>
                <div className="sns">
                    <a href="https://www.youtube.com/@beyondsangsang" target="_blank">
                        <img src={
                            variant === "orangeLight"
                            ? images.contactYoutu
                            : images.fyoutube
                        } alt="youtube" 
                        />
                    </a>
                    <a href="https://www.instagram.com/bss__production?igshid=ZjE2NGZiNDQ%3D" target="_blank">
                        <img src={
                            variant === "orangeLight"
                            ? images.contactInsta
                            : images.finsta
                        } alt="insta" 
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default BottomBar;