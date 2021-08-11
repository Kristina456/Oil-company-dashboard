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


export default function OilInfo({ data }: { data: PriceStatisticsData[] }) {
    return (
        <div className="oil-info">
            {
                data.map((data) => {
                    return (
                        <div className="oil-card">
                            <div className="oil-card__chart">{data.name.charAt(0)}</div>
                            <div className="oil-card__info">
                                <div className="name">
                                    <div className="name__title">{data.name}</div>
                                    <div>{data.averagePrice > 0 ?
                                        <div style={{ color: "rgba(221, 69, 69, 1)" }}>
                                            <span>&#8595;</span>
                                            <span>{data.averagePrice * 100}%</span>
                                        </div> :
                                        <div style={{ color: "rgba(51, 208, 103, 1)" }}>
                                            <span>&#8593;</span>
                                            <span>{data.averagePrice * 100}%</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="price">${data.price}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}