import React from "react";
import Button2 from "../../button/Button2";
import pastry from "../../../images/instagram1/pastry.jpg";
import './History.css'
const History = () => {
  return (
    <section className="section__container main-center">
      {/* RESTAURANT ABOUT START */}
      <div className="col1">
        {/* ROW START */}
        <div className="row2">
          <aside className="about__text">
            <h3>The Borscht feel</h3>
            <h2>A family business</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit modi quos ex doloribus, labore possimus, nihil placeat doloremque ea vitae nobis repellendus? Odit aliquid ullam atque ab suscipit dolores quisquam.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit, sequi fuga officia optio dolor saepe corrupti eius modi debitis natus odio.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit,
            </p>
            <div className="about-btns">
              <Button2 link={"/about"} className="btn2" text={"Discover our story"}></Button2>
            </div>
          </aside>
        </div>
        {/* ROW END */}
      </div>
      <div className="col2">
        {/* ROW START */}
        <div className="row2">
          <div className="about__image-container">
            <img className="about__image-mobile" src={pastry} alt="pastry" />
          </div>
        </div>
        {/* ROW END */}
      </div>
      {/* RESTAURANT ABOUT END */}
    </section>
  );
};

export default History;
