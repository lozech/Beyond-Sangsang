import React from "react";
import { Link } from "react-router-dom";
import { works } from "../data/works";

import "./WorkCard.css";

function WorkCard({ work }){
    return(
        <section className="work-wrap">
            <Link
                to={`/works/${work.id}`}
                className={`work-card ${!work.video ? "no-video" : ""}`}
            >
                <div className="img-box">
                    <img src={work.thumbnail} className="base" />
                    <img src={work.hoverThumbnail} className="hover" />
                </div>
                <div className="video-tit">
                    <p className="tit-name">{work.title}</p>
                    <p className="company-name">{work.company}</p>
                </div>
            </Link>
        </section>
    );
}

export default WorkCard;