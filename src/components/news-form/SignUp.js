// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import Button2 from "../button/Button2";
import "./SignUp.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form-wrapper">
        <div className="form-title">
          <h2>JOIN US</h2>
        </div>
        <div className="form-container">
          <p>
            Be the first one to hear about foodie news, supper clubs and
            cultural evenings.
          </p>
          <form
            className="form"
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xvovjkjl"
            method="POST"
          >
            <input type="email" name="email" placeholder="Email Address" />
            <Button2 text={"Sign up"} type="submit" />
          </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
