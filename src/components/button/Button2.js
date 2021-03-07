import React from "react";
import { Link } from "react-router-dom";
import './Button2.css'

const Button2 = ({text,link}) => {
  return (
    <Link to={link}>
      <button className="btn2">{text}</button>
    </Link>
  );
};

export default Button2;
