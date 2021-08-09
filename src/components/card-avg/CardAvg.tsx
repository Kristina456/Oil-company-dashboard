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

export default function CardAvg({ title, price, averagePrice }: CardAvgData) {
    return <div className="card">
        <div>
            <div>{title}</div>
            <div>${price}</div>
            <div>AVG PRICE</div>
            <div>
                <div>{averagePrice > 0 ? "up" : "down"}</div>
                <div>{averagePrice * 100}%</div>
            </div>
        </div>
    </div>
}