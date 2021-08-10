import React, { useState } from "react";
import CardAvgGraph from "../components/card-avg-graph/CardAvgGraph";
import CardAvg, { CardAvgData } from "../components/card-avg/CardAvg";
import PriceStatistic from "../components/price-statistics/PriceStatistic";
import { getDashboardMotorGasolinePrice } from '../service/dashboard-service'
import "./Dashboard.scss";


export default function dashboard() {

    const cardsData = getDashboardMotorGasolinePrice();

    return (<div className="dashboard">
        <div>
            <div className="dashboard__left">
                <CardAvgGraph />
                <div className="dashboard__left__cardAvg">
                    {
                        cardsData.map((data: CardAvgData) => {
                            return <CardAvg title={data.title} price={data.price} averagePrice={data.averagePrice} />
                        })
                    }
                </div>
            </div>
            <div><PriceStatistic /></div>
        </div>
        <div>
            right
        </div>

    </div>

    )
}