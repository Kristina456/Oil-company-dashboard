import React from "react";
import "./Activity.css";
import Path1 from "../../images/Path1.png";

export type CardActivity = {
    time: string;
    name: string;
    activity: string;
}

export default function Activity({ data }: { data: CardActivity[] }) {
    return (
        <div className="activity__item">
            <div className="activity__title title" >
                <div className="title__main">Activity</div>
                <div className="title__subtitle">this month</div>
            </div >
            <table className="activity__table table">
                {
                    data.map((data) => {
                        return (
                            <tr className="table__item">
                                <td className="table__time">
                                    {data.time}</td>
                                <td >
                                    <div className="table__img">
                                        <img src={Path1} alt="img" />
                                    </div>
                                </td>
                                <td>
                                    <div className="table__updated-list">
                                        Updated List
                                    </div>
                                    <div className="table__name">
                                        {data.name}
                                    </div>
                                </td>
                                <td className="table__data-activity">
                                    {data.activity}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>

        </div >
    )
}