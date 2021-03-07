import React from "react";
import "./Bookings.css";

const Bookings = () => {

  return (
    <section className="bookings">
      <section className="bookings__container section__container main-center">
        <div className="col1">
          <div className="row2">
            <aside className="about__text">
              <h3>Book in advance</h3>
              <h2>Make a reservation</h2>
              <p>
                Borscht N Tears prides itself as being the oldest Russian
                restaurant in the United Kingdom, and one of the oldest in the
                world, originally opening our doors in 1965. We are a small
                local business, that strives to supply high quality pan Russian
                cuisine using only the freshest seasonal ingredients.
              </p>
            </aside>
          </div>
        </div>
        <div className="col2">
          <div className="row2">
            <div className="bookings__widget-container">
              <embed
                className="bookings__widget"
                src="https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoibWRtOWVSOFlrQXJKQmJIQ0MiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9"
                type=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Bookings;
