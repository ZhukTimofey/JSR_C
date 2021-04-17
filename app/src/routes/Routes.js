import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./routesNames";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import CounterOfCounterContainer from "../pages/CounterOfCounter/containers/CounterOfCounterContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.COUNTER_PAGE}
        component={CounterPageContainer}
      />
      <Route
        exact={ROUTES.COUNTER_OF_COUNTER_PAGE}
        component={CounterOfCounterContainer}
      />
    </Switch>
  );
};

export default Routes;
