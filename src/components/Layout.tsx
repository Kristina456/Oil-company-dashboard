import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function Layout() {

    return <div>
        <div><Header /></div>
        <div><Sidebar /></div>
        <div><Main /></div>
    </div>
}
