import React from "react";
import Sidebar from "../sidebar/Sidebar";
import MainContent from "./MainContent";
import './Main.scss';
import { BrowserRouter } from "react-router-dom";

export default function MainWrapper() {

    return <div className="main">
        <BrowserRouter>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-content">
                <MainContent />
            </div>
        </BrowserRouter>
    </div>
}