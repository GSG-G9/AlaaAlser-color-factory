import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

const Color = (props) => {
  const { color } = props;
  return (
    <div className="Color" style={{backgroundColor: color.hex}}>
      <p>this is {color.name}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Color

