import React from "react";
import logo from "../../images/logo.png";
import "./logo.scss";


export default function Logo() {
    return (
        <div className="header__logo">
            <img src={logo} />
        </div>
    )
}