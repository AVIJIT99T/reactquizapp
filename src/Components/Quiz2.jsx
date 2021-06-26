import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quiz2.css";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Quiz2 = () => {
  const [ques, setQues] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [optionChose, setOptionChose] = useState("");
  const [score, setScore] = useState(0);
  const history = useHistory();

  const getQues = async () => {
    try {
      const res = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
      );
      console.log(res.data.results);
      setQues(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQues();
  }, []);

  const prevQuestion = () => {
    // setScore(score - 1);
    setCurrQues(currQues - 1);
  };

  const nextQuestion = () => {
    if (ques[currQues].correct_answer == optionChose) {
      setScore(score + 1);
    }
    console.log("Next", score);
    setCurrQues(currQues + 1);
    setOptionChose("");
  };

  const endQuiz = () => {
    if (ques[currQues].correct_answer == optionChose) {
      setScore(score + 1);
      console.log("If", score);
      history.push("/end2", { finalScore: score + 1 });
    } else {
      console.log("Else", score);
      history.push("/end2", { finalScore: score });
    }
  };

  return (
    <>
      {/* <>
          <h1>Avijit</h1>
          <h2>{ques[currQues].question}</h2>
          {currQues != ques.length - 1 && (
            <a className="btn btn-primary btn_right" onClick={nextQuestion}>
              Next
            </a>
          )}
        </> */}
      {ques != null && (
        <>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-4">
                <div className="card pt-2 p-3 m-auto mt-5 mb-4 shadow card_quiz">
                  <div className="card-body">
                    <h5 className="card-title">Question : {currQues + 1} </h5>
                    <h6 className="card-subtitle mb-2">
                      {ques[currQues].question}
                    </h6>

                    <ul className="ul_quiz">
                      <li className="card-text">
                        <button
                          type="button"
                          className="btn mt-1 mb-1 btn-light btn_quiz"
                          onClick={() =>
                            setOptionChose([ques[currQues].correct_answer])
                          }
                        >
                          {ques[currQues].correct_answer}
                        </button>
                      </li>
                      <li className="card-text">
                        <button
                          type="button"
                          className="btn mt-1 mb-1 btn-light btn_quiz"
                          onClick={() =>
                            setOptionChose([
                              ques[currQues].incorrect_answers[0],
                            ])
                          }
                        >
                          {ques[currQues].incorrect_answers[0]}
                        </button>
                      </li>
                      <li className="card-text">
                        <button
                          type="button"
                          className="btn mt-1 mb-1 btn-light btn_quiz"
                          onClick={() =>
                            setOptionChose([
                              ques[currQues].incorrect_answers[1],
                            ])
                          }
                        >
                          {ques[currQues].incorrect_answers[1]}
                        </button>
                      </li>
                      <li className="card-text">
                        <button
                          type="button"
                          className="btn mt-1 mb-1 btn-light btn_quiz"
                          onClick={() =>
                            setOptionChose([
                              ques[currQues].incorrect_answers[2],
                            ])
                          }
                        >
                          {ques[currQues].incorrect_answers[2]}
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

                    {currQues != ques.length - 1 ? (
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
      )}
    </>
  );
};

export default Quiz2;

/*
 {ques != null && (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <div className="card pt-2 p-3 m-auto mt-5 mb-4 shadow card_quiz2">
                <div className="card-body">
                  {ques.map((curr, index) => {
                    return (
                      <>
                        <h5 className="card-title">Question : {index + 1} </h5>
                        <h6 className="card-subtitle mb-2">{curr.question}</h6>

                        <ul className="ul_quiz2">
                          <li className="card-text">
                            <button
                              type="button"
                              className="btn mt-1 mb-1 btn-light btn_quiz2"
                            >
                              {curr.correct_answer}
                            </button>
                          </li>
                          <li className="card-text">
                            <button
                              type="button"
                              className="btn mt-1 mb-1 btn-light btn_quiz2"
                            >
                              {curr.incorrect_answers[0]}
                            </button>
                          </li>
                          <li className="card-text">
                            <button
                              type="button"
                              className="btn mt-1 mb-1 btn-light btn_quiz2"
                            >
                              {curr.incorrect_answers[1]}
                            </button>
                          </li>
                          <li className="card-text">
                            <button
                              type="button"
                              className="btn mt-1 mb-1 btn-light btn_quiz2"
                            >
                              {curr.incorrect_answers[2]}
                            </button>
                          </li>
                        </ul>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )} 
*/
