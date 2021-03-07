import React from "react";
import Environment from "../about/environment/Environment";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import FrontRestaurant from "../../images/front-of-restaurant-croped.jpg";
import russia from "../../images/russia.jpg";
import salad from "../../images/instagram1/russiansallad.jpg";
import face from "../../images/female-faces/Face/face-05.svg";
import inside from "../../images/restaurant-inside.jpg";
import crembrule from "../../images/instagram1/crembrule.jpg";

import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <Breadcrumb
        image={FrontRestaurant}
        title={"Our restaurants history"}
        subtitle={"We live for the experience"}
      />
      <Environment
        title1={"A family business"}
        subtitle1={"The Borscht feel"}
        desc1={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, minus ad? Dicta voluptatem nemo adipisci tempora officiis sint beatae ea praesentium commodi Voluptates saepe autem in quis sed. Aspernatur, doloribus. Doloremque maxime totam excepturi explicabo provident fugit architecto numquam rerum neque quia. Minus incidunt blanditiis ipsa cum quos explicabo vel, quidem omnis perspiciatis autem enim distinctio suscipit corporis. Magni, culpa! Neque unde quae ipsa cum saepe eligendi fugiat sint, nesciunt assumenda officiis quos amet in porro ab. Aliquam magnam quod eius officiis, numquam aliquid porro inventore nostrum nobis dolor provident? Labore quibusdam vel iste similique itaque aliquid nemo cum id iusto. Asperiores quasi hic magni totam aut voluptas ducimus quis porro sint quisquam suscipit, ut soluta dignissimos magnam sunt eligendi.   "
        }
        image1={inside}
        squareImage={russia}
        title2={"A serene evolution"}
        desc2={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit modi quos ex doloribus, labore possimus, nihil placeat doloremque ea vitae nobis repellendus? Odit aliquid ullam atque ab suscipit dolores quisquam.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit, sequi fuga officia optio dolor saepe corrupti eius modi debitis natus odio.Ullam quo ipsa nulla dignissimos inventore sapiente dicta itaque, atque explicabo. Suscipit, sequi fuga officia optio dolor saepe corrupti eius modi debitis natus odio."
        }
        image2={crembrule}
        lineArt={face}
        image3={salad}
        desc3={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, minus ad? Dicta voluptatem nemo adipisci tempora officiis sint beatae ea praesentium commodi Voluptates saepe autem in quis sed. Aspernatur, doloribus. Doloremque maxime totam excepturi explicabo provident fugit architecto numquam rerum neque quia. Minus incidunt blanditiis ipsa cum quos explicabo vel, quidem omnis perspiciatis autem enim distinctio suscipit corporis. Magni, culpa! Neque unde quae ipsa cum saepe eligendi fugiat sint, nesciunt assumenda officiis quos amet in porro ab. Aliquam magnam quod eius officiis, numquam aliquid porro inventore nostrum nobis dolor provident? Labore quibusdam vel iste similique itaque aliquid nemo cum id iusto. Asperiores quasi hic magni totam aut voluptas ducimus quis porro sint quisquam suscipit, ut soluta dignissimos magnam sunt eligendi. "
        }
      />
    </div>
  );
};

export default About;
