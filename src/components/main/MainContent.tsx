import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Page from "../pages/Page";

export default function MainContent() {

    return <div>
        <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/page" component={Page} />
        </Switch>
    </div>
}