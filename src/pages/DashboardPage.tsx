import React, { useState } from "react";
import CardAvgGraph from "../components/card-avg-graph/CardAvgGraph";
import CardAvg, { CardAvgData } from "../components/card-avg/CardAvg";
import PriceStatistic from "../components/price-statistics/PriceStatistic";
import { getDashboardMotorGasolinePrice, getSalesReportInformations as getSalesReportInformations } from '../service/dashboard-service'
import "./DashboardPage.scss";
import SalesReport from '../components/sales-report/SalesReport';



export default function DashboardPage() {

    const cardsData = getDashboardMotorGasolinePrice();
    const salesReport = getSalesReportInformations()


    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__left__cardAvg">
                    <div>
                        <CardAvgGraph />
                    </div>
                    <div >
                        <CardAvg data={cardsData} />
                    </div>
                </div>
                <div><PriceStatistic /></div>
            </div >
            <div className="dashboard__right">
                <SalesReport data={salesReport} />
            </div>
        </div>

    )
}