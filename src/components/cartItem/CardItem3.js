import React from "react";

const CardItem3 = ({ image, link, title }) => {
  return (
    <div className="card2__container">
      <a href={link}>
        <div
          className="card2"
          style={{
            backgroundSize: `cover`,
            backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,.1) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${image})`,
          }}
        >
          <p className="card__title">{title}</p>
          {/* <p className="card__subheading">{subheading}</p> */}
        </div>
      </a>
    </div>
  );
};

export default CardItem3;
