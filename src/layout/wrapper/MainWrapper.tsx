import React from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import Router from "../../layout/Router";
import "./MainWrapper.scss";
import { BrowserRouter } from "react-router-dom";

export default function MainWrapper() {

    return <div className="main">
        <BrowserRouter>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-content">
                <Router />
            </div>
        </BrowserRouter>
    </div>
}