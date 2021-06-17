import React, { useContext } from "react";
import { withRouter } from "react-router";
import "./Main.css";
import QuizContext from "../Helper/QuizContext";

const Main = () => {
  // const { gameState, setGameState } = useContext(QuizContext);

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
                  <li className="card-text">The time limit is 3 minutes.</li>
                  <li className="card-text">
                    Each correct answer will carry +1 marks.
                  </li>
                  <li className="card-text">
                    There will be no negative marking for wrong answer.
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary btn_main"
                  // onClick={() => {
                  //   setGameState("quiz");
                  // }}
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Main);
