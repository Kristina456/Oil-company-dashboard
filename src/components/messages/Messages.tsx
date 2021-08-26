import React from "react";
import "./Messages.css";
import avatar2 from "../../images/avatar2.png";

export type CardMessage = {
    name: string;
    message: string;
    time: string;
}


export default function Messages({ data }: { data: CardMessage[] }) {
    return (
        <div className="messages">
            <div className="messages__title">Messages</div>
            <table className="messages__table">
                {data.map((data) => {
                    return (
                        <tr className="message">
                            <td className="message__avatar-img">
                                <img src={avatar2} />
                                <div className="message__avatar-dot"></div>
                            </td>
                            <td className="message__item">
                                <div className="message__name">{data.name}</div>
                                <div className="message__message">{data.message}</div>
                            </td>
                            <td>
                                <div className="message__time">{data.time}</div>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div >
    )
}