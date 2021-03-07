import React from "react";
import "../../App.css";
import Cards from "../cards/Cards";
import HeroSection from "../heroSection/HeroSection";
import BannerImage from "../bannerImage/BannerImage";
import About from "../about/About";
import Bookings from "../bookings/Bookings";
import Instagram from "../instagram/Instagram";
import Moscow from "../../images/banners/moscow_new_001.png";


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <About />
      <Bookings />
      <Instagram/>
      <BannerImage image={Moscow}/>
    </>
  );
}

export default Home;
