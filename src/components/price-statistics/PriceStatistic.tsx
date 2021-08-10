import React from "react";
import PriceStatisticLink from "./link/PriceStatisticLink";
import "./PriceStatistic.scss";
import Frame34 from "../../images/Frame34.png"
import OilInfo, { PriceStatisticsData } from "./OilInfo/OilInfo";
import { getOilInfo } from "../../service/dashboard-service";


export default function PriceStatistic() {

    const oilCardsData = getOilInfo();

    return (
        <div className="price-statistic">
            <div className="price-statistic__title">Price Statistics</div>
            <div className="price-statistic__informations">
                <div>
                    <div><img src={Frame34} /></div>
                    <div className="price-statistic__data">
                        {
                            oilCardsData.map((data: PriceStatisticsData) => {
                                return <OilInfo name={data.name} price={data.price} averagePrice={data.averagePrice} />
                            })
                        }
                    </div>
                </div>
                <div>
                    <div><PriceStatisticLink /></div>
                </div>
            </div >
        </div>
    )
}