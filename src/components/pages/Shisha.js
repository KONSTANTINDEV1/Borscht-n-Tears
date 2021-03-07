import React from "react";
import "../../App.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Environment from "../about/environment/Environment";
import shisha from "../../images/categories/shisha.jpg";
import garden from "../../images/old-photos/garden-photos/garden-with-gate.jpg";
import garden2 from "../../images/old-photos/garden-photos/garden2-table.jpg";

import "./shisha.css";

export default function Products() {
  return (
    <div className="shisha">
      <Breadcrumb
        image={garden}
        subtitle={"Come and join us for"}
        title={"Fresh fruit shisha"}
      />
      <Environment
        title1={"Discover our shishas"}
        subtitle1={"Like nowhere else"}
        desc1={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque qui deserunt sit facilis, in hic facere officiis similique dolor voluptatem repudiandae beatae molestias? Fugit adipisci molestias sit amet in.Distinctio possimus suscipit sequi error. Officiis consequuntur hic, sequi amet tempora ipsa repellendus vero iure nisi a optio, magni voluptatem placeat nihil sit deserunt minus quos distinctio quas doloremque at? Laudantium molestiae eligendi ratione necessitatibus placeat! Facilis sequi quaerat non laboriosam, id vitae minima eos consectetur excepturi deserunt porro ipsam autem, repellat quae ratione nesciunt. Architecto neque dicta laborum nulla? Ut quaerat libero eum provident inventore ipsam officiis error doloribus dolores molestias dolorum, ex nisi? Quia a eos, blanditiis error iure, at hic dolorum illo repellendus voluptatibus deleniti. Nobis, harum. Voluptas laudantium id sequi, at enim ad, consectetur quibusdam quos ab neque repellat distinctio asperiores, facere?"
        }
        image1={shisha}
        // squareImage={"russia"}
        title2={"The Secret Garden"}
        desc2={
          "ipsam autem, repellat quae ratione nesciunt. Architecto neque dicta laborum nulla? Ut quaerat libero eum provident inventore ipsam officiis error doloribus dolores molestias dolorum, ex nisi? Quia a eos, blanditiis error iure, at hic dolorum illo repellendus voluptatibus deleniti. Nobis, harum. Voluptas laudantium id sequi, at enim ad, consectetur. psam autem, repellat quae ratione nesciunt. Architecto neque dicta laborum nulla? Ut quaerat libero eum provident inventore ipsam officiis error doloribus dolores molestias dolorum, ex nisi? Quia a eos, blanditiis error iure, at hic dolorum illo repellendus voluptatibus deleniti. Nobis, harum. Voluptas laudantium id sequi, at enim ad, consectetur"
        }
        image2={garden2}
      />
    </div>
  );
}
