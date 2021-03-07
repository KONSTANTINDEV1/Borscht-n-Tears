import React from "react";
import "../cards/Cards.css";

import CardItem2 from "../cartItem/CardItem2";
import art1 from "../../images/female-faces/Female/Female-05.svg";
import art2 from "../../images/female-faces/Female/Female-07.svg";
import art3 from "../../images/female-faces/Female/Female-16.svg";

import CarouselMobile from "../carousel/CarouselMobile";

function Cards() {
  return (
    <section id="cards" className="cards">
      <div className="cards-text">
        <h3>Authentic Russian Cuisine</h3>
        <h2>Our restaurants collections</h2>
      </div>
      <CarouselMobile/>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="feed">
            <CardItem2
              image={art1}
              title={"Food & Drink"}
              subheading={"yesplease"}
              path="/services"
            />
            <CardItem2
              image={art2}
              title={"Fresh Shishas"}
              subheading={"yesplease"}
              path="/services"
            />
            <CardItem2
              image={art3}
              title={"Covid Survival"}
              subheading={"yesplease"}
              path="/services"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cards;
