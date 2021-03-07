import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

function CardItem2({ image, title, subheading, path, externalLink }) {
  return (
    <div className="card2__container">
      <Link to={path}>
        <div
          className="card2"
          style={{
            backgroundSize: `cover`,
            backgroundImage: `url(${image})`,
          }}
        >
          <a href="/">
            <h2 className="card__title">{title}</h2>
          </a>
        </div>
      </Link>
    </div>
  );
}

CardItem2.propType = {
  path: propTypes.string,
  label: propTypes.string,
  src: propTypes.string,
  text: propTypes.string,
};

export default CardItem2;
