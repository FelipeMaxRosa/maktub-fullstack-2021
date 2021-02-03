import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { OtherPage } from "./pages/Page 2";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/other" component={OtherPage} />
    </BrowserRouter>
  );
}

export default Routes;