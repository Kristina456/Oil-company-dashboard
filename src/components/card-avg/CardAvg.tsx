import React from "react";
import './CardAvg.scss';

export type CardAvgData = {
    title: string;
    /**
     * Price expressed in dollars
     */
    price: number;
    /**
     * Average price in decimal percentage
     * eg. -0.06 
     */
    averagePrice: number;
}

export default function CardAvg({ data }: { data: CardAvgData[] }) {
    return (
        <div className="cardAvg" >
            {
                data.map((avgData) => {
                    return (
                        <div className="card">
                            <div className="card__item">
                                <div className="cardAvg__title" >{avgData.title}</div>
                                <div className="cardAvg__dolar-price">${avgData.price}</div>
                                <div className="cardAvg__avg-price">AVG PRICE</div>
                                <div className="cardAvg__price-percentage__item">
                                    <span>{avgData.averagePrice > 0 ?
                                        <div style={{ color: "rgba(221, 69, 69, 1)" }}>
                                            <span>&#8595;</span>
                                            <span>{avgData.averagePrice * 100}%</span>
                                        </div> :
                                        <div style={{ color: "rgba(51, 208, 103, 1)" }}>
                                            <span>&#8593;</span>
                                            <span>{avgData.averagePrice * 100}%</span>
                                        </div>}
                                    </span>
                                </div>

                            </div>

                        </div>
                    )
                })
            }
        </div>
    )

}

