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
            <table className="activity__table">
                {
                    data.map((data) => {
                        return (
                            <tr className="tableData">
                                <td className="dataTime">
                                    {data.time}</td>
                                <td >
                                    <div className="img">
                                        <img src={Path1} alt="img" />
                                    </div>
                                </td>
                                <td>
                                    <div className="updatedList">
                                        Updated List
                                    </div>
                                    <div className="name">
                                        {data.name}
                                    </div>
                                </td>
                                <td className="dataActivity">
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