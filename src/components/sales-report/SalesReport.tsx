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
            <div className="sales-report__title">Sales Report</div>
            <table className="sales-report__table">
                <tr className="sales-report__header">
                    <th className="sales-report__cell">#</th>
                    <th className="sales-report__cell">PROVIDER</th>
                    <th className="sales-report__cell">STATS</th>
                </tr>
                {
                    data.map((report) => {
                        return (
                            <tr className="sales-report__informations informations">
                                <td className="informations__number ">{report.ordinalNumber} </td>
                                <td className="informations__provider informations__row">{report.provider}</td>
                                {report.percentage > 0 ?

                                    <td className=" informations__row" style={{
                                        color: " rgba(91, 176, 156, 1)"
                                    }}>${report.stats}(+{report.percentage * 100}%)</td> :
                                    <td className=" informations__row" style={{
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