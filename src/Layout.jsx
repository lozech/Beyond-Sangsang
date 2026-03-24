import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import BottomBar from "./components/BottomBar";


function Layout() {
    const { pathname } = useLocation();
    
    const getHeaderVariant = () => {
        if (pathname === "/") return "home";  
        if (pathname === "/works") return "home";  
        return "darktxt";                              
    };

    const isLight =
    ["/contact"].includes(pathname) ||
    pathname.startsWith("/works/") ||
    pathname.startsWith("/crew/");

    return (
        <div>     
        <Header variant={getHeaderVariant()} />	 {/* 공통 헤더 */}
        
        <main>		{/* 페이지 내용이 들어오는 영역 */}        
            <Outlet />	{/* Router 페이지가 여기 렌더링됨 */}
        </main>
        
        <Footer variant={isLight ? "orangeLight" : "default"} />	{/* 공통 Footer */}
        <BottomBar variant={isLight ? "orangeLight" : "default"} />	
        </div>
    );
}

export default Layout;