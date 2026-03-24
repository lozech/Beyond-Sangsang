import { useEffect, useState } from "react";
import { useLocation , Link } from "react-router-dom";


function Header({ variant }){
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);

    const isHome = pathname === "/";
    const isWorks = pathname.startsWith("/works");
    const isAbout = pathname === "/about-us";

    useEffect(() => {
        const handleScroll = () => {

            if (pathname === "/") {
                const el = document.querySelector(".main-page");
                const trigger = el ? el.offsetHeight : window.innerHeight;

                setScrolled(window.scrollY > trigger);
            }

            if (pathname === "/about-us") {
                const triggerEl = document.querySelector(".about-dark");
                const trigger = triggerEl ? triggerEl.offsetTop : 300;

                setScrolled(window.scrollY > trigger);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll(); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const headerClass = isHome
    ? scrolled
        ? "darktxt"
        : "home"
    : isWorks
        ? "home"
    : isAbout
        ? scrolled
            ? "home"     // 검정배경 → 흰글자
            : "darktxt"  
    : "darktxt";
    

    return(
        <header className={`header ${headerClass}`}>
            <div className="header-wrap">
                <h1 className="head-logo">
                    <Link to="/" aria-label="home">
                        <span className="logo"></span>
                    </Link>
                </h1>
                <nav>
                    <Link to="/about-us">ABOUT US</Link>
                    <Link to="/works">WORKS</Link>
                    <Link to="/recipe">RECIPE</Link>
                    <Link to="/crew">CREW</Link>
                    <Link to="/contact">CONTACT</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;