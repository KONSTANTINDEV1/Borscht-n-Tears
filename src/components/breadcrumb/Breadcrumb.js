import React from "react";
import "./Breadcrumb.css";
const Breadcrumb = ({ image, title, subtitle, imageName }) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition:"center top"}}
      className="breadcrumb__container"
    >
      <figure className="breadcrumb__titles">
        <h3 className="breadcrumb__subtitle">{subtitle}</h3>
        <h2 className="breadcrumb__title">{title}</h2>
      </figure>
    </section>
  );
};

export default Breadcrumb;
