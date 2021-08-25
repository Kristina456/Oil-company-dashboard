import React from "react";
import "./SalesReport.css";

export type CardSalesReport = {
    ordinalNumber: string;
    provider: string;
    stats: number;
    /**
     * in decimal percentage
     * eg. 0.06 
     */
    percentage: number;
}

export default function SalesReport({ data }: { data: CardSalesReport[] }) {


    return (
        <div className="sales-report">
            <div className="title">Sales Report</div>
            <table>
                <tr className="subtitles">
                    <th>#</th>
                    <th>PROVIDER</th>
                    <th>STATS</th>
                </tr>
                {
                    data.map((report) => {
                        return (
                            <tr className="informations">
                                <td className="informations__number">{report.ordinalNumber} </td>
                                <td className="informations__provider">{report.provider}</td>
                                {report.percentage > 0 ?
                                    <td style={{
                                        color: " rgba(91, 176, 156, 1)"
                                    }}>${report.stats}(+{report.percentage * 100}%)</td> :
                                    <td style={{
                                        color: "rgba(221, 69, 69, 1)"
                                    }
                                    } >${report.stats}({report.percentage * 100} %)</td>}
                            </tr>
                        )
                    })
                }
            </table>
        </div >
    )
}