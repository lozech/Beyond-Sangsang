import React from "react";
import { Link } from "react-router-dom";
import { crews } from "../data/crews";

import "./Crewcard.css";

function Crewcard({ crew }){
    return(
        <li className="crew-cards">
            <Link
                to={`/crew/${crew.id}`}
                className="crew-card"
            >
                <img src={crew.mainImage} alt="cardimg" className="card-img" />
                <div className="name-tag">
                    <p className="name">{crew.name}<span className="godetail"> →</span></p>
                    
                    <p className="staff">{crew.staff}</p>
                </div>
            </Link>
        </li>
    );
}

export default Crewcard;
