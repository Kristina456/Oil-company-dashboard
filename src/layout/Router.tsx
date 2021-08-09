import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Fuel from "../pages/Fuel";
import GasStations from "../pages/GasStations";
import Users from "../pages/Users";

export default function Router() {

    return <div>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/gas-stations" component={GasStations} />
            <Route path="/fuel-type" component={Fuel} />
            <Route path="/users" component={Users} />
        </Switch>
    </div>
}