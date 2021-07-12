import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import ListMovies from "./page/ListAllMovies/listAllMovies";
import DetailsMovies from "./page/DetailsMovies/detailsMovies";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ListMovies} />
      <Route path="/detalhes/:id" exact component={DetailsMovies} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
