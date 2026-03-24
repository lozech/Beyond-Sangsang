import React from "react";
import Crewcard from "../components/CrewCard";
import { crews } from "../data/crews";

import "./Crew.css";

function Crew(){
    return(
        <section className="crew-wrap">
            <h1>CREW</h1>
            <ul className="card-wrap">
                {crews.map((crew) => (
                    <li key={crew.id}>
                        <Crewcard crew={crew} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Crew;