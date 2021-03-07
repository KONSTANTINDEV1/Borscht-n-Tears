import React from "react";
import "./Environment.css";
const Environment = ({
  title1,
  subtitle1,
  squareImage,
  image1,
  lineArt,
  desc1,
  title2,
  desc2,
  image2,
  desc3,
  image3,
}) => {
  return (
    <section className="environment">
      {/* RESTAURANT ENVIRONMENT START */}
      <div className="section__container row-reverse main-center">
        <div className="col1">
          {/* ROW START */}
          <div className="row2">
            <aside className="environment__text ">
              <h3>{subtitle1}</h3>
              <h2>{title1}</h2>
              <p className="padding-5">{desc1}</p>
            </aside>
          </div>
          {/* ROW END */}
        </div>
        <div className="col2">
          {/* ROW START */}
          <div className="row2">
            <div className="environment__container">
              <div
                className="cropped-image"
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="environment__square-image">
                  <img src={squareImage} />
                </div>
              </div>
            </div>
          </div>
          {/* ROW END */}
        </div>
      </div>
      <div className="section__container  main-center remove-padding-top ">
        <div className="col1">
          {/* ROW START */}
          <div className="row2">
            <aside className="environment__text ">
              <h2>{title2}</h2>
              <p>{desc2}</p>
            </aside>
          </div>
          {/* ROW END */}
        </div>
        <div className="col2">
          {/* ROW START */}
          <div className="row2">
            <div className="environment__container m-top-2r ">
              <div
                style={{ backgroundImage: `url(${image2})` }}
                className="environment__image-container"
              >
                <img className="about__image-mobile" src={image2} alt={"/"} />
              </div>

              <img className="face1" src={lineArt} />
            </div>
          </div>
          {/* ROW END */}
        </div>
      </div>
      <div className="section__container row-reverse main-center history-section">
        <div className="col1">
          {/* ROW START */}
          <div className="row2">
            <aside className="environment__text desc3">
              <p>{desc3}</p>
            </aside>
          </div>
          {/* ROW END */}
        </div>
        <div className="col2">
          {/* ROW START */}
          <div className="row2">
            <div className="environment__container m-top-2r ">
              <div
                style={{ backgroundImage: `url(${image3})` }}
                className="environment__image-container"
              ></div>
            </div>
          </div>
          {/* ROW END */}
        </div>
      </div>
      {/* RESTAURANT ENVIRONMENT END */}
    </section>
  );
};

export default Environment;
