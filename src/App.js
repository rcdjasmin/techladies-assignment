import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Nav from "./components/nav";
import WeatherApp from "./components/weatherApp";


function AppRouter() {
  return (
    <HashRouter basename='/'>
      <div>
        <Nav />

        <Route path="/" exact component={AboutMe} />
        <Route path="/contact/" component={Contact} />
        <Route path="/weather-app/" component={WeatherApp} />
      </div>
    </HashRouter>
  );
}

export default AppRouter;
