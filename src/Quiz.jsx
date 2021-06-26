import React, { useState } from "react";
import Questions from "./Questions";
import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router";
import "./Quiz.css";

const Quiz = () => {
  const [currQues, setCurrQues] = useState(0);
  const [optionChose, setOptionChose] = useState("");
  const [score, setScore] = useState(0);
  const history = useHistory();

  const prevQuestion = () => {
    setScore(score - 1);
    setCurrQues(currQues - 1);
  };

  const nextQuestion = () => {
    if (Questions[currQues].answer == optionChose) {
      setScore(score + 1);
    }
    console.log("Next", score);
    setCurrQues(currQues + 1);
    setOptionChose("");
  };

  // const skipQuestion = () => {
  //   setScore(score);

  //   console.log("Skip", score);
  //   setCurrQues(currQues + 1);
  // };

  const endQuiz = () => {
    if (Questions[currQues].answer == optionChose) {
      setScore(score + 1);
      console.log("If", score);
      history.push("/end", { finalScore: score + 1 });
    } else {
      console.log("Else", score);
      history.push("/end", { finalScore: score });
    }
  };

  return (
    <>
      {/* <h1>{Questions[currQues].question}</h1> */}
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
            <div className="card pt-2 p-3 m-auto mt-5 mb-4 shadow card_quiz">
              <div className="card-body">
                <h5 className="card-title">Question : {currQues + 1} </h5>
                <h6 className="card-subtitle mb-2">
                  {Questions[currQues].question}
                </h6>

                <ul className="ul_quiz">
                  <li className="card-text">
                    <button
                      type="button"
                      className="btn mt-1 mb-1 btn-light btn_quiz"
                      onClick={() => setOptionChose("A")}
                    >
                      {Questions[currQues].optionA}
                    </button>
                  </li>
                  <li className="card-text">
                    <button
                      type="button"
                      className="btn mt-1 mb-1 btn-light btn_quiz"
                      onClick={() => setOptionChose("B")}
                    >
                      {Questions[currQues].optionB}
                    </button>
                  </li>
                  <li className="card-text">
                    <button
                      type="button"
                      className="btn mt-1 mb-1 btn-light btn_quiz"
                      onClick={() => setOptionChose("C")}
                    >
                      {Questions[currQues].optionC}
                    </button>
                  </li>
                  <li className="card-text">
                    <button
                      type="button"
                      className="btn mt-1 mb-1 btn-light btn_quiz"
                      onClick={() => setOptionChose("D")}
                    >
                      {Questions[currQues].optionD}
                    </button>
                  </li>
                </ul>

                {currQues > 0 && (
                  <a
                    className="btn btn-primary btn_left"
                    onClick={prevQuestion}
                  >
                    Prev
                  </a>
                )}

                {currQues != Questions.length - 1 ? (
                  <>
                    <a
                      className="btn btn-primary btn_right"
                      onClick={nextQuestion}
                    >
                      Next
                    </a>
                  </>
                ) : (
                  <a
                    className="btn btn-primary btn_right"
                    onClick={() => {
                      endQuiz();
                    }}
                  >
                    Submit
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
{
  {
    /* <NavLink
                    className="btn btn-primary btn_right"
                    onClick={endQuiz}
                    to="/end"
                  >
                    Submit
                  </NavLink>

                  <a
                      className="btn btn-primary btn_right"
                      onClick={skipQuestion}
                    >
                      Skip
                    </a>
    
    
    <a
                    className="btn btn-primary btn_right"
                    onClick={() => {
                      props.history.push({
                        pathname: "/end",
                        state: {
                          finalScore: setScore,
                        },
                      });
                    }}
                  >
                    Submit
                  </a>


   <NavLink className="btn btn-primary btn_right" to="/end">
                    Submit
                  </NavLink>
                  
                  <a
                      className="btn btn-primary btn_right_first"
                      onClick={skipQuestion}
                    >
                      Skip
                    </a>
                  
                  */
  }
}

{
}
