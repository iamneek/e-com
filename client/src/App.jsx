import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SaleBanner from "./SaleBanner";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SaleBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
