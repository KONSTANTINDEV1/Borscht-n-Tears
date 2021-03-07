import React from "react";
import "./CarouselMobile.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import art1 from "../../images/female-faces/Female/Female-05.svg";
import art2 from "../../images/female-faces/Female/Female-07.svg";
import art3 from "../../images/female-faces/Female/Female-16.svg";
import Button2 from "../button/Button2";
import handleClick from "../navbar/Navbar";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel-mobile">
      {/* CAROUSEL START*/}

      <Slider {...settings}>
        <a href="/">
          <div className="carousel__item">
            <img className="carousel-image" src={art1} alt="" />
            <h2 className="card__title">Food & Drink</h2>
          </div>
        </a>
        <a href="/">
          <div className="carousel__item">
            <img className="carousel-image" src={art2} alt="" />
            <h2 className="card__title">Fresh Shisha</h2>
          </div>
        </a>
        <a href="/">
          <div className="carousel__item">
            <img className="carousel-image" src={art3} alt="" />
            <h2 className="card__title">Covid Survival</h2>
          </div>
        </a>
      </Slider>
      <div className="button-container">
        <Button2 text="view menu" onClick={handleClick} />
      </div>
      {/* CAROUSEL END*/}
    </div>
  );
};

export default Carousel;
