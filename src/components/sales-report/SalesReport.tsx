import React from "react";
import { salesReportInformations } from "../../service/dashboard-service";
import "./SalesReport.scss";
import SalesReportInfo, { CardSalesReport } from "./SalesReportInfo";



export default function SalesReport() {
    const salesReport = salesReportInformations();

    return (
        <div>
            <div>Sales Report</div>
            <div>
                <div><span>#</span> <span>PROVIDER</span><span>STATS</span></div>
                <div>
                    <div >
                        {
                            salesReport.map((data: CardSalesReport) => {
                                return <SalesReportInfo ordinalNumber={data.ordinalNumber} provider={data.provider} stats={data.stats} percentage={data.percentage} />
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}