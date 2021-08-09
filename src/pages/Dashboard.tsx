import React, { useState } from "react";
import CardAvg, { CardAvgData } from "../components/card-avg/CardAvg";
import { getDashboardMotorGasolinePrice } from '../service/dashboard-service'


export default function Home() {

    const cardsData = getDashboardMotorGasolinePrice();

    return (<div>
        {
            cardsData.map((data: CardAvgData) => {
                return <CardAvg title={data.title} price={data.price} averagePrice={data.averagePrice} />
            })
        }
    </div>)
}