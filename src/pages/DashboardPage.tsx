import React, { useState } from "react";
import CardAvgGraph from "../components/card-avg-graph/CardAvgGraph";
import CardAvg, { CardAvgData } from "../components/card-avg/CardAvg";
import PriceStatistic from "../components/price-statistics/PriceStatistic";
import { getCardOilGasProviders, getDashboardMotorGasolinePrice, getSalesReportInformations as getSalesReportInformations } from '../service/dashboard-service'
import "./DashboardPage.scss";
import SalesReport from '../components/sales-report/SalesReport';
import OilGasProviders from "../components/oil-and-gas-providers/OilGasProviders";



export default function DashboardPage() {

    const cardsData = getDashboardMotorGasolinePrice();
    const salesReport = getSalesReportInformations();
    const oilReport = getCardOilGasProviders();


    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__left__cardAvg">
                    <CardAvgGraph />
                    <CardAvg data={cardsData} />
                </div>
                <div><PriceStatistic /></div>
                <div>
                    <OilGasProviders data={oilReport} />
                    <div></div>

                </div>
            </div >
            <div className="dashboard__right">
                <SalesReport data={salesReport} />
            </div>
        </div>

    )
}