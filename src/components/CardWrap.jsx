import React from "react";
import WorkCard from "./WorkCard";
import { Link } from "react-router-dom";
import { works, mainWorksOrder } from "../data/works";

import "./CardWrap.css";

function CardWrap(){
    const mainList = mainWorksOrder.map(id =>
        works.find(item => item.id === id))
        .filter(Boolean);
    return(
        <section className="works-wrap">
            <h1 className="works-tit">WORKS</h1>
            <div className="works-list">
                {mainList.map(work => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
            <Link to="/works" className="workBtn">
                <p>view all works →</p>
            </Link>
        </section>
    );
}

export default CardWrap;