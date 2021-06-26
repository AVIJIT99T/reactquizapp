import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import "./MainPage.css";
import Quiz from "./Quiz";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
            <div className="card pt-2 p-3 m-auto mt-5 mb-4 shadow card_main">
              <div className="card-body">
                <h5 className="card-title">Welcome to weekly</h5>
                <h6 className="card-subtitle mb-2">Quiz Contest</h6>

                <ul className="main">
                  <li className="card-text">
                    This section contains 5 questions.
                  </li>
                  {/* <li className="card-text">The time limit is 3 minutes.</li> */}
                  <li className="card-text">
                    Each correct answer will carry +1 marks.
                  </li>
                  <li className="card-text">
                    There will be no negative marking for wrong answer.
                  </li>
                </ul>
                <NavLink class="btn btn-primary btn_main" to="/quiz">
                  Start Quiz
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
