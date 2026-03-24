import React from "react";
import WorkCard from "../components/WorkCard";
import { works, worksOrder } from "../data/works";

import "./Workspage.css";

function Workspage({ work }){
    const mainList = worksOrder.map(id =>
            works.find(item => item.id === id))
            .filter(Boolean);
    return(
        <section className="workspage">
            <h1 className="works-tit">WORKS</h1>
            <div className="works-list">
                {mainList.map(work => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
        </section>
    );
}

export default Workspage;