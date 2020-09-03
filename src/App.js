import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";

import "./App.css";

const HomePage = lazy(() => import("./pages/home/home-page.component"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <div>Dummy</div>
      </Suspense>
    </>
  );
};

export default App;
