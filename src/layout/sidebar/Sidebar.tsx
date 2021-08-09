import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./_sidebar.scss";
import sidebarFirst from "../../images/sidebarFirst.png";
import sidebarSecond from "../../images/sidebarSecond.png";
import sidebarThird from "../../images/sidebarThird.png";
import sidebarFourth from "../../images/sidebarFourth.png";

export default function Sidebar() {

    return <div >
        <div className="sidebar__item">
            <div>
                <NavLink to="/dashboard" activeClassName="active"><img src={sidebarFirst} /></NavLink>
            </div>
            <div>
                <NavLink to="/gas-stations" activeClassName="active"><img src={sidebarSecond} /> </NavLink>
            </div>
            <div>
                <NavLink to="/fuel-type" activeClassName="active"><img src={sidebarThird} /></NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName="active"><img src={sidebarFourth} /> </NavLink>
            </div>
        </div>

    </div >
}