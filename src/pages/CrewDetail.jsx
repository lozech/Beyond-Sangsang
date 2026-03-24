import React from "react";
import { useParams, Link } from "react-router-dom";
import { crews } from "../data/crews";

import * as images from "../assets/images";

import "./CrewDetail.css";

function CrewDetail(){
    const { id } = useParams();
    const currentId = Number(id);

    const crew = crews.find((c) => c.id === currentId);

    const prevId = currentId - 1;
    const nextId = currentId + 1;

    const isPrevDisabled = prevId < 1;
    const isNextDisabled = nextId > crews.length;

    return(
        <section className="crew-detail">
            <img src={crew.detailImage} alt="detailimg" className="detail-img" />
            <div className="right-sec">
                <p className="name">{crew.name}</p>
                <p className="staff">{crew.staff}</p>
                <div className="desc">
                    {crew.description.map((text, idx) => (
                        <p className="desc-cont" key={idx}>
                        {text}
                        </p>
                    ))}
                </div>
                <div className="navigator">
                    {isPrevDisabled ? (
                        <p className="disabled">
                            <img src={images.prevBtn} alt="arrow disabled" />PRE
                            </p>
                    ) : (
                        <Link to={`/crew/${prevId}`} className="btn">
                            <p className="btn">
                                <img src={images.prevBtn} className="arrow" alt="nextbtn" />
                                PRE
                            </p>
                        </Link>
                    )}
                    <Link
                    to={"/crew"}
                    className="goCrew"
                    >LIST</Link>
                    {isNextDisabled ? (
                        <p className="disabled">
                            NEXT
                            <img src={images.nextBtn} alt="arrow disabled" />
                        </p>
                    ) : (
                        <Link to={`/crew/${nextId}`} className="btn">
                            <p className="btn">NEXT
                            <img src={images.nextBtn} className="arrow" alt="nextbtn" /></p>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CrewDetail;