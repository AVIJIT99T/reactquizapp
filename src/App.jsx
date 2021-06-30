import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Quiz from "./Quiz";
import EndQuiz from "./EndQuiz";
import { BrowserRouter } from "react-router-dom";
import Main2 from "./Components/Main2";
import Quiz2 from "./Components/Quiz2";
import End from "./Components/End";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="app">
        
          <Switch>
            {/* <Route exact path="/" component={MainPage} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/end" component={EndQuiz} /> */}
            <Route exact path="/" component={Main2} />
            <Route path="/quiz2" component={Quiz2} />
            <Route path="/end2" component={End} />
          </Switch>
        
      </div>

      {/* <MainPage /> */}
    </>
  );
};

export default App;
