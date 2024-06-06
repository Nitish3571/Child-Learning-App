import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import ContactUs from '../pages/contactUs/ContactUs';
import Service from '../pages/service/Service';
import Topbar from '../pages/layout/header/Topbar';
import Footer from '../pages/layout/footer/Footer';
import '.././App.css'

const PublicRoute = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PublicRoute;
