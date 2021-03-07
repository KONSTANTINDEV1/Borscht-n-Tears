import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
function CardItem({ path, label, src, text }) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img className="cards__item__img" alt="Travel" src={src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

CardItem.propType = {
  path: propTypes.string,
  label: propTypes.string,
  src: propTypes.string,
  text: propTypes.string,
};
export default CardItem;
