import React from "react";
import Header from "./header/Header";
import MainWrapper from "./wrapper/MainWrapper";
import "./Layout.scss";

export default function Layout() {

    return <div className="wrapper">
        <div className="header">
            <Header />
        </div>
        <div className="wrapper">
            <MainWrapper />
        </div>
    </div>
}
