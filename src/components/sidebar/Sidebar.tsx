import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

export default function Sidebar() {

    return <div>
        <NavLink to="/home">home </NavLink>
        <NavLink to="/page">page </NavLink>
    </div>
}