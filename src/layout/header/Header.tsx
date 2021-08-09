import React from "react";
import Avatar from "../../components/header-avatar/Avatar";
import Logo from "../../components/header-logo/Logo";
import Notifications from "../../components/header-notification/Notifications";
import SearchInput from "../../components/header-search-input/SearchInput";

import './Header.scss'
export default function Header() {

    return <div className="header">
        <div className="header__item">
            <div className="header__logo" >
                <Logo />
            </div>
            <div className="header__right">
                <div className="header__right__search">
                    <SearchInput />
                </div>
                <div className="header__right__notifications">
                    <Notifications />
                    <Avatar />
                </div>
            </div>
        </div>
    </div>
}