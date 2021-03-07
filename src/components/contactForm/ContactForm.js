import React from "react";
import "./ContactForm.css";

const ContactForm = () => {

  return (
    <section className="contact-form">
      <div className="contact-form__container">
        <form action="https://formspree.io/f/xknpljlk" method="POST" className="contact-form__form" >
          <h1 className="contact-form__title">Contact us</h1>

          <label htmlFor="Subject">Subject</label>
          <select name="Subject">
            <option value="Restaurant Bookings">Restaurant Bookings</option>
            <option value="Karaoke Bookings">Karaoke Bookings</option>
            <option value="Sales">Sales</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="email Address">Email Address</label>
          <input
            placeholder="Your@email.com"
            id="Email"
            type="email"
            name="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="How can we help?"
            id="Message"
            name="message"
          ></textarea>
          <button
            className="btn2"
            text={"Submit"}
            type="submit"

          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
