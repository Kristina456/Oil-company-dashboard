import React, { useState } from "react";
import CardAvgGraph from "../components/card-avg-graph/CardAvgGraph";
import CardAvg, { CardAvgData } from "../components/card-avg/CardAvg";
import PriceStatistic from "../components/price-statistics/PriceStatistic";
import { getActivity, getCardOilGasProviders, getDashboardMotorGasolinePrice, getMessages, getSalesReportInformations as getSalesReportInformations } from '../service/dashboard-service'
import "./DashboardPage.scss";
import SalesReport from '../components/sales-report/SalesReport';
import OilGasProviders from "../components/oil-and-gas-providers/OilGasProviders";
import Activity from "../components/activity/Activity";
import Messages from "../components/messages/Messages";



export default function DashboardPage() {

    const cardsData = getDashboardMotorGasolinePrice();
    const salesReport = getSalesReportInformations();
    const oilReport = getCardOilGasProviders();
    const activityReport = getActivity();
    const messages = getMessages();

    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="dashboard__left__cardAvg">
                    <CardAvgGraph />
                    <CardAvg data={cardsData} />
                </div>
                <div><PriceStatistic /></div>
                <div className="dashboard__left__tables">
                    <div className="oil-gas-provider">
                        <OilGasProviders data={oilReport} />
                    </div>
                    <div className="activity">
                        <Activity data={activityReport} />
                    </div>
                </div>
            </div >
            <div className="dashboard__right">
                <SalesReport data={salesReport} />
                <Messages data={messages} />
            </div>
        </div>

    )
}