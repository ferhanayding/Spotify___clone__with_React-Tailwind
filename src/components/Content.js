import Collection from "pages/Collection";
import Home from "pages/Home";
import Search from "pages/Search";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <main className="flex-auto">
      <Navbar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/search"}>
          <Search />
        </Route>
        <Route path={"/collection"}>
          <Collection />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
