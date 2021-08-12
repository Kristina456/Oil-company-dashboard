import React from "react";
import classes from "./Activity.module.scss";
import Path1 from "../../images/Path1.png";

export type CardActivity = {
    time: string;
    name: string;
    activity: string;
}

export default function Activity({ data }: { data: CardActivity[] }) {
    return (
        <div className={classes.activity}>
            <div className={classes.activity__title} >
                <div className={classes.activity__title__main}>Activity</div>
                <div className={classes.activity__title__subtitle}>this month</div>
            </div >
            <table>
                {
                    data.map((data) => {
                        return (
                            <tr className={classes.tableData}>
                                <td className={classes.dataTime}>
                                    {data.time}</td>
                                <td >
                                    <div className={classes.img}>
                                        <img src={Path1} alt="img" />
                                    </div>
                                </td>
                                <td>
                                    <div className={classes.updatedList}>
                                        Updated List
                                    </div>
                                    <div className={classes.name}>
                                        {data.name}
                                    </div>
                                </td>
                                <td className={classes.dataActivity}>
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