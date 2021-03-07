import React from "react";
import Button  from "../button/Button2";
import "./HeroSection.css";
import hero from "../../images/front-of-restaurant-croped.jpg";


function HeroSection() {
  return (
    <section className="hero-container">
      <div className="flex-container">
        <div className="col-1">
          <div className="row box1">
            <div className="hero__text">
              <p>LONDON'S OLDEST RUSSIAN RESTAURANT.</p>
              <h1>Borshtch n Tears</h1>
              <div className="hero-btns">
                <Button link={"/about"} className="btn2" text={"LEARN MORE"}></Button>
              </div>
            </div>
          </div>
          <div className="row box2">
            <div className="hero__text">
              <p>
                We are now collaborating with The Russian Deli to bring you all
                of your favourite dishes staright to your doorstep .
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="hero__image-container">
            <div className="hero__image-inner-container">
              <img src={hero} alt="" className="hero__image-mobile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
