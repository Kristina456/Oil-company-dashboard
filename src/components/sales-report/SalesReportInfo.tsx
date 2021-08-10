import React from "react";
import "./SalesReport.scss";

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


export default function SalesReportInfo({ ordinalNumber, provider, stats, percentage }: CardSalesReport) {

    return (
        <div>
            <span>{ordinalNumber}</span>
            <span>{provider}</span>
            <span>
                <span>{stats}</span>
                <span>{percentage}</span>
            </span>
        </div>
    )
}