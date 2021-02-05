import React from "react";
import { Route, Switch } from "react-router-dom";

import NewCharacterPage from "./pages/Character";
import CharacterList from "./pages/CharactersList";
import CharacterDetails from "./pages/CharacterDetails";
import HomePage from "./pages/Home";

function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/character" component={NewCharacterPage} />
        <Route path="/characters" exact component={CharacterList} />
        <Route path="/characters/:id" component={CharacterDetails} />
      </Switch>
  );
}

export default Routes;