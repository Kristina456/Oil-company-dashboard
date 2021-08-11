import React from "react";
import "./OilGasProvider.scss";
import Shape2 from "../../images/Shape2.png";

export type CardOilGasProviders = {
    name: string;
    location: string;
}

export default function OilGasProviders({ data }: { data: CardOilGasProviders[] }) {

    return (
        <div>
            <div>Oil & Gas Providers </div>
            <table>
                {
                    data.map((info) => {
                        return (
                            <tr>
                                <td>{info.name.charAt(0)}</td>
                                <td>{info.name}</td>
                                <td><img src={Shape2} alt="location" /> {info.location}</td>
                                <td>link</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}