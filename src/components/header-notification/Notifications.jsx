import React from "react";
import bell from "../../images/bell.png";
import "./Notifications.scss";

export default function Notifications() {
    return <div className="notifications">
            <div className="notificatios__img">
                <img src={bell} />
            </div>
            <div className="notificatios__number">1</div>
    </div>
}