import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Workspage from "./pages/Workspage";
import Recipe from "./pages/Recipe";
import Crew from "./pages/Crew";
import CrewDetail from "./pages/CrewDetail";
import Contact from "./pages/Contact";

import WorkDetail from "./pages/WorkDetail";

import "./style.css";

function App() {
  function ScrollToTop(){
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/works" element={<Workspage />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew/:id" element={<CrewDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
