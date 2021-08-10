import React, { useState } from "react";
import CardAvg, { CardAvgData } from "../components/card-avg/CardAvg";
import { getDashboardMotorGasolinePrice } from '../service/dashboard-service'
import "./Dashboard.scss";


export default function dashboard() {

    const cardsData = getDashboardMotorGasolinePrice();

    return (<div className="cardAvg__item">
        {
            cardsData.map((data: CardAvgData) => {
                return <CardAvg title={data.title} price={data.price} averagePrice={data.averagePrice} />
            })
        }
    </div>)
}