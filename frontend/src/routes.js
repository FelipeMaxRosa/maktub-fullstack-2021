import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Character";
import OtherPage from "./pages/Page 2";

function Routes() {
  return (
      <Switch>
        <Route path="/character" component={Home} />
        <Route path="/other" component={OtherPage} />
      </Switch>
  );
}

export default Routes;