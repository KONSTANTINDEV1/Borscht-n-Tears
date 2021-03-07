import React from "react";
import "./Footer.css";
import Button2 from "../button/Button2";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-subscription">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            <h2>BORSCHT N TEARS.</h2>
          </Link>
        </div>
        <p className="footer-subscription-heading">
          We live for the unforgetable experiences
        </p>
        {/* <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p> */}
        {/* <div className="input-areas">
          <form action="/" method="post">
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your@email.com"
            />
            <Button2
              text={"Sign up"}
              type="submit"
              buttonStyle="btn--outline"
            ></Button2>
          </form>
        </div> */}
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/food-and-drink">Food & Drink</Link>
            <Link to="/shisha">Shisha</Link>
            <Link to="/live-music">Live Music</Link>
            <Link to="/delivery">Delivery</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="social-icon fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="social-icon fab fa-instagram" />
            </Link>
          </div>

          <Button2 link={"/contact"} text={"Contact us"}/>
          <span className="website-rights">
            Copyright Borscht n Tears London. Design By KonstantinDev
          </span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
