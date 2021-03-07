import React from "react";
import "./BannerImage.css";
const BannerImage = ({image}) => {
  return (
    <section className="banner-image">
      <figure className="banner-image__container">
        <img className="banner-image__image" src={image} alt="moscow" />
      </figure>
    </section>
  );
};

export default BannerImage;
