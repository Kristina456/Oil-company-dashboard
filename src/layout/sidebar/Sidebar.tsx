import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./_sidebar.scss";

export default function Sidebar() {

    return <div className="sidebar-item">
        <NavLink to="/home">home </NavLink>
        <NavLink to="/gas-stations">gas </NavLink>
        <NavLink to="/fuel-type">fuel</NavLink>
        <NavLink to="/users">users </NavLink>
    </div>
}