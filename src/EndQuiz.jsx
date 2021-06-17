import React from "react";
import { NavLink } from "react-router-dom";

const EndQuiz = (props) => {
  console.log(props.finalScore);

  return (
    <>
      <h1>You have successfully</h1>
      <NavLink className="btn btn-primary" to="/">
        Home
      </NavLink>
    </>
  );
};

export default EndQuiz;
