import React from "react";
import "./OilInfo.scss";

export type PriceStatisticsData = {

    name: string;
    /** 
     * Price expressed in dolars
     * 
     * */
    price: number;
    /**
    * Average price in decimal percentage
    * eg. -0.06 
    */
    averagePrice: number
}


export default function OilInfo({ name, price, averagePrice }: PriceStatisticsData) {
    return (
        <div className="oil-info">
            <div className="oil-info__chart">{name.charAt(0)}</div>
            <div className="oil-info__info">
                <div>
                    <div className="oil-info__info__name">{name}</div>
                    <div>{averagePrice > 0 ?
                        <div style={{ color: "rgba(221, 69, 69, 1)" }}>
                            <span>&#8595;</span>
                            <span>{averagePrice * 100}%</span>
                        </div> :
                        <div style={{ color: "rgba(51, 208, 103, 1)" }}>
                            <span>&#8593;</span>
                            <span>{averagePrice * 100}%</span>
                        </div>}
                    </div>
                </div>
                <div>${price}</div>
            </div>
        </div>
    )
}