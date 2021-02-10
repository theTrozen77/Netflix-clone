import { Switch, Route } from "react-router-dom";
import React from "react";

import MovieDetail from "../Scenes/MovieDetail";
import Dashboard from "./Dashboard";
import TvShows from "./TvShows";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Login from "./Authentication/Login";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/movie/:movieId" component={MovieDetail} />
        <Route path="/tvshows" component={TvShows} />
      </Switch>
      <Footer />
    </>
  );
};

export default MainRoutes;
