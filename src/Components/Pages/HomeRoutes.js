import React from "react";
import { Route, Switch } from "react-router";
import Homepage from "./Homepage";

const HomeRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Homepage section="Breaking News" />
        </Route>
        <Route path="/business">
          <Homepage section="Business News" />
        </Route>
        <Route path="/sports">
          <Homepage section="Sports News" />
        </Route>
        <Route path="/entertainment">
          <Homepage section="Entertainment News" />
        </Route>
        <Route path="/health">
          <Homepage section="Health News" />
        </Route>
        <Route path="/science">
          <Homepage section="Science News" />
        </Route>
        <Route path="/technology">
          <Homepage section="Technology News" />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default HomeRouter;
