import { useState, useRef, useEffect } from "react";
import { recipes } from "../data/recipes";

import "./Recipe.css";

function Recipe(){
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            contentRefs.current.forEach((el, index) => {
            if (!el) return;

            const rect = el.getBoundingClientRect();

            // 화면 중간쯤 들어오면 열기
            if (rect.top < window.innerHeight * 0.6 &&
                rect.bottom > window.innerHeight * 0.2) {
                setActiveIndex(index);
            }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return(
        <section className="recipe-page">
            <div className="desc-wrap">
                <h1>BeyondSangSang Recipe</h1>
                <div className="recipe-desc">
                    <div className="first-desc">
                        <p>비욘드 상상은 클라이언트가 기대하는 방향성을 고찰하고</p>
                        <p>이에 대한 영상의 목적을 도출하여</p>
                        <p>브랜드 가치를 보다 효과적으로 전달할 수 있도록</p>
                        <p>새로운 플롯의 영상을 제안합니다.</p>
                    </div>
                    <div className="second-desc">
                        <p className="orange-txt">Services</p>
                        <div className="acodian-menu">
                            <p onClick={() => setActiveIndex(0)}>Pre-Production</p>
                            <p onClick={() => setActiveIndex(1)}>Production</p>
                            <p onClick={() => setActiveIndex(2)}>Post-Production</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accodian-wrap">
                {recipes.map((recipe, index) => {
                    
                    // 1번 (Pre)
                    if (index === 0) {
                    return (
                        <div
                        className="accod"
                        key={recipe.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        style={{
                            maxHeight:
                            activeIndex === index
                                ? contentRefs.current[index]?.scrollHeight + "px"
                                : "95px"
                        }}
                        >
                            <div ref={(el) => (contentRefs.current[index] = el)}>
                                <div className="accod-head">
                                    <p className="numbering">{recipe.columnN}</p>
                                    <p className="tit">{recipe.title}</p>
                                </div>

                                <div className="accod1-first">
                                    <img src={recipe.img1} className="img1-1" alt="img1" />

                                    <div className="jd-wrap">
                                    {recipe.description.map((desc, idx) => (
                                        <div className={`jd${idx + 1}`} key={idx}>
                                        <p className="bold-tit">{desc.jn}</p>
                                        {desc.jd.map((text, i) => (
                                            <p className="jd-txt" key={i}>{text}</p>
                                        ))}
                                        </div>
                                    ))}
                                    </div>
                                </div>

                                <img src={recipe.img2} className="img1-2" alt="img" />
                            </div>
                        </div>
                    );
                    }

                    // 2번 (Production)
                    if (index === 1) {
                    return (
                        <div
                        className="accod"
                        key={recipe.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        style={{
                            maxHeight:
                            activeIndex === index
                                ? contentRefs.current[index]?.scrollHeight + "px"
                                : "95px"
                        }}
                        >
                            <div ref={(el) => (contentRefs.current[index] = el)}>
                                <div className="accod-head">
                                    <p className="numbering">{recipe.columnN}</p>
                                    <p className="tit">{recipe.title}</p>
                                </div>

                                <div className="accod2-first">
                                    <div className="jd-wrap">
                                        {recipe.description.map((desc, idx) => (
                                            <div className={`jd${idx + 1}`} key={idx}>
                                                <p className="bold-tit">{desc.jn}</p>
                                                {desc.jd.map((text, i) => (
                                                    <p className="jd-txt" key={i}>{text}</p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                    <img src={recipe.img1} className="img2-1" alt="img1" />
                                </div>

                                <img src={recipe.img2} className="img2-2" alt="img" />
                            </div>
                        </div>
                    );
                    }

                    // 3번 (Post)
                    if (index === 2) {
                    return (
                        <div
                        className="accod"
                        key={recipe.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        style={{
                            maxHeight:
                            activeIndex === index
                                ? contentRefs.current[index]?.scrollHeight + "px"
                                : "95px"
                        }}
                        >
                            <div ref={(el) => (contentRefs.current[index] = el)}>
                                <div className="accod-head">
                                    <p className="numbering">{recipe.columnN}</p>
                                    <p className="tit">{recipe.title}</p>
                                </div>

                                <div className="accod3-first">
                                    <div className="jd-wrap">
                                    {recipe.description.map((desc, idx) => (
                                        <div className={`jd${idx + 1}`} key={idx}>
                                        <p className="bold-tit">{desc.jn}</p>
                                        {desc.jd.map((text, i) => (
                                            <p className="jd-txt" key={i}>{text}</p>
                                        ))}
                                        </div>
                                    ))}
                                    </div>

                                    <img src={recipe.img1} className="img3-1" alt="img1" />
                                </div>

                                <img src={recipe.img2} className="img3-2" alt="img" />
                            </div>
                        </div>
                    );
                    }
                })}
                </div>
        </section>
    );
}

export default Recipe;