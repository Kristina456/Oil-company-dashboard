import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./_sidebar.scss";
import sidebarFirst from "../../images/sidebarFirst.png";
import sidebarSecond from "../../images/sidebarSecond.png";
import sidebarThird from "../../images/sidebarThird.png";
import sidebarFourth from "../../images/sidebarFourth.png";

export default function Sidebar() {

    return <div className="sidebar-item">
        <NavLink to="/dashboard"><img src={sidebarFirst} /></NavLink>
        <NavLink to="/gas-stations"><img src={sidebarSecond} /> </NavLink>
        <NavLink to="/fuel-type"><img src={sidebarThird} /></NavLink>
        <NavLink to="/users"><img src={sidebarFourth} /> </NavLink>
    </div>
}