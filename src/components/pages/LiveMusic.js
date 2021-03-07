import React from "react";
import "../../App.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Environment from "../about/environment/Environment";
import liveMusic from "../../images/old-photos/Photos/live-music.jpeg";
import inside from "../../images/restaurant-inside.jpg";
import dancing from "../../images/old-photos/new-years-photos/dancing.jpg";
export default function Products() {
  return (
    <div className="live-music">
      <Breadcrumb
        image={inside}
        subtitle={"Experience it for yourself"}
        title={"Live music from the roots"}
      />
      <Environment
        title1={"A family business"}
        subtitle1={"The Borscht feel"}
        desc1={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, minus ad? Dicta voluptatem nemo adipisci tempora officiis sint beatae ea praesentium commodi Voluptates saepe autem in quis sed. Aspernatur, doloribus. Doloremque maxime totam excepturi explicabo provident fugit architecto numquam rerum neque quia. Minus incidunt blanditiis ipsa cum quos explicabo vel, quidem omnis perspiciatis autem enim distinctio suscipit corporis. Magni, culpa! Neque unde quae ipsa cum saepe eligendi fugiat sint, nesciunt assumenda officiis quos amet in porro ab. Aliquam magnam quod eius officiis, numquam aliquid porro inventore nostrum nobis dolor provident? Labore quibusdam vel iste similique itaque aliquid nemo cum id iusto. Asperiores quasi hic magni totam aut voluptas ducimus quis porro sint quisquam suscipit, ut soluta dignissimos ."
        }
        image1={liveMusic}
        // squareImage={"russia"}
        title2={"A serene environment"}
        desc2={
          "saepe eligendi fugiat sint, nesciunt assumenda officiis quos amet in porro ab. Aliquam magnam quod eius officiis, numquam aliquid porro inventore nostrum nobis dolor provident? Labore quibusdam vel iste similique itaque aliquid nemo cum id iusto. Asperiores quasi hic magni totam aut voluptas ducimus quis porro sint quisquam suscipit, ut soluta dignissimos magnam sunt eligendi.saepe eligendi fugiat sint,nesciunt assumenda officiis quos amet in porro ab. Aliquam magnam quod eius officiis, numquam aliquid porro inventore nostrum nobis dolor provident? Labore quibusdam vel iste similique itaque aliquid nemo cum id iusto. Asperiores quasi hic magni totam aut voluptas ducimus quis porro sint quisquam suscipit, ut soluta dignissimos magnam sunt eligendi."
        }
        image2={dancing}

        // desc3={
        //   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, minus ad? Dicta voluptatem nemo adipisci tempora officiis sint beatae ea praesentium commodi Voluptates saepe autem in quis sed. Aspernatur, doloribus. Doloremque maxime totam excepturi explicabo provident fugit architecto numquam rerum neque quia. Minus incidunt blanditiis ipsa cum quos explicabo vel, quidem omnis perspiciatis autem enim distinctio suscipit corporis. Magni, culpa! Neque unde quae ipsa cum saepe eligendi fugiat sint, nesciunt assumenda officiis quos amet in porro ab. Aliquam magnam quod eius officiis, numquam aliquid porro inventore nostrum nobis dolor provident? Labore quibusdam vel iste similique itaque aliquid nemo cum id iusto. Asperiores quasi hic magni totam aut voluptas ducimus quis porro sint quisquam suscipit, ut soluta dignissimos magnam sunt eligendi. Asperiores quasi hic magni totam aut voluptas ducimus quis porro sint quisquam suscipit, ut soluta dignissimos magnam sunt eligendi."
        // }
      />
    </div>
  );
}
