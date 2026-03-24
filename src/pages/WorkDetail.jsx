import React from "react";
import { Link, useParams } from "react-router-dom";
import { works } from "../data/works";

import "./WorkDetail.css";

function WorkDetail(){
    const { id } = useParams();

    const work = works.find(item => item.id === Number(id));
    const hasVideo = !!work.video;

    return(
        <section className={`work-detail ${hasVideo ? "has-video" : "no-video"}`}>
            <div className="work-video">
                <div className="video-box">
                    {hasVideo ? (
                    <iframe
                        src={work.video}
                        title="video"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe> ) : (
                    <div className="no-video-txt">
                        <p className="no-video-text">죄송합니다</p>
                        <p className="no-video-text2">이 동영상은 존재하지 않습니다.</p>
                    </div>
                )}
                </div>
            </div>
            <ul className="video-photos">
                <li className="photo">
                    <img src={work.photos[0]} alt="photo1" />
                </li>
                <li className="photo">
                    <img src={work.photos[1]} alt="photo2" />
                </li>
                <li className="photo">
                    <img src={work.photos[2]} alt="photo3" />
                </li>
                <li className="photo">
                    <img src={work.photos[3]} alt="photo4" />
                </li>
            </ul>
            <Link to="/works" className="workBtn">
                <p>← Works list</p>
            </Link>
        </section>
    );
}

export default WorkDetail;