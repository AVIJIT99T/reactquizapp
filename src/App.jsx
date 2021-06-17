import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Quiz from "./Quiz";
import EndQuiz from "./EndQuiz";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Components/AppContext";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/end" component={EndQuiz} />
        </Switch>
      </BrowserRouter>

      {/* <MainPage /> */}
    </>
  );
};

export default App;
