import React from "react";
import SignUp from "../news-form/SignUp";
import image1 from "../../images/instagram1/crembrule.jpg";
import image2 from "../../images/instagram1/pasta.jpg";
import image3 from "../../images/instagram1/russiansalad2.jpg";
import image4 from "../../images/instagram1/russiansallad.jpg";
import "./Instagram.css";
const Instagram = () => {
  return (
    <section className="instagram-section">
      <div className="row2">
        <div className="instagram-container">
          <div className="col-1">
              <SignUp />
          </div>
          <div className="col-2">
            <div className="instagram__title">
              <h2>INSTAGRAM</h2>
            </div>
            <div className="image-container">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
