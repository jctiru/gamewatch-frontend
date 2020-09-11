import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import "./App.css";

const HomePage = lazy(() => import("./pages/home/home-page.component"));
const GamePage = lazy(() => import("./pages/game/game-page.component"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games">
            <Redirect to="/" />
          </Route>
          <Route exact path="/games/:gameSlug" component={GamePage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
