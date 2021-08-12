import React from "react";
import "./OilGasProvider.scss";
import Shape2 from "../../images/Shape2.png";

export type CardOilGasProviders = {
    name: string;
    location: string;
}

const colors = ["rgba(0, 82, 180, 1)", "rgba(255, 81, 81, 1)", "rgba(232, 111, 27, 1)", "rgba(255, 181, 71, 1)", "rgba(69, 150, 209, 1)", "rgba(0, 82, 180, 1)"];
const backgroundColors = ["rgba(0, 82, 180, 0.5)", "rgba(255, 81, 81, 0.5)", "rgba(232, 111, 27, 0.5)", "rgba(255, 181, 71, 0.5)", "rgba(69, 150, 209, 0.5)", "rgba(0, 82, 180, 0.5)"];

export default function OilGasProviders({ data }: { data: CardOilGasProviders[] }) {



    return (
        <div className="oil-gas-providers">
            <div className="title">Oil & Gas Providers </div>
            <table>
                {
                    data.map((info, i) => {
                        return (
                            <tr>
                                <td >
                                    <div className="first-chart" style={{ backgroundColor: backgroundColors[i], color: colors[i] }}>
                                        {info.name.charAt(0)}
                                    </div>
                                </td>
                                <td className="factory-name">{info.name}</td>
                                <td className="location"><img src={Shape2} alt="location" /> {info.location}</td>
                                <td>link</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}