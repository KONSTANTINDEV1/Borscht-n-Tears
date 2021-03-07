import React from "react";
import Environment from "./environment/Environment";
import History from "./history/History";
import russia from "../../images/russia.jpg";
import face from "../../images/female-faces/Face/face-05.svg";
import inside from "../../images/restaurant-inside.jpg";
import crembrule from "../../images/instagram1/crembrule.jpg";

const About = () => {
  return (
    <main className="about">
      <History />
      <Environment
        title1={"Bringing Russia to you"}
        subtitle1={"Authenticity at it's finest"}
        desc1={
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit modi quos ex doloribus, labore possimus, nihil placeat doloremque ea vitae nobis repellendus? Odit aliquid ullam atque ab suscipit dolores quisquam.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit, sequi fuga officia optio dolor saepe corrupti eius modi debitis natus odio.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit,"
        }
        image1={inside}
        lineArt={face}
        title2={"A unique experience every time"}

        squareImage={russia}
        desc2={
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit modi quos ex doloribus, labore possimus, nihil placeat doloremque ea vitae nobis repellendus? Odit aliquid ullam atque ab suscipit dolores quisquam.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit, sequi fuga officia optio dolor saepe corrupti eius modi debitis natus odio.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit,"
        }
        image2={crembrule}
      />
    </main>
  );
};

export default About;
