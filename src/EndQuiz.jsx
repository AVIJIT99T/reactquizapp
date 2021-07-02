import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./EndQuiz.css";
import { withRouter } from "react-router";

const EndQuiz = () => {
  const location = useLocation();
  console.log("Avijit", location);

  // let showScore = location.state.finalScore;

  // if (showScore > 0) {
  //   showScore = showScore + 1;
  // }
  // console.log("Karati", showScore);

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
            <div className="card pt-2 p-3 m-auto mt-5 mb-4 shadow card_end">
              <div className="card-body">
                <h5 className="card-title">Congratulations!!!</h5>
                <h6 className="card-subtitle mb-2">
                  You have scored showScore / 5 marks.
                </h6>

                <NavLink className="btn btn-primary btn_end" to="/">
                  Play Again
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndQuiz;
