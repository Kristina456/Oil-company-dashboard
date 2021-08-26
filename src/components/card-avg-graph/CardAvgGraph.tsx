import React from "react";
import { Line, } from "react-chartjs-2";
import "./CardAvgGraph.scss";

export default function CardAvgGraph() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

        datasets: [
            {
                label: "First dataset",
                data: [30, 50, 20, 30, 50, 30],
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "white",
            }],
    };

    const options = {
        plugins: {
            legend: {
                display: false,

            },
        },
    };

    return (
        <div className="avg-graph" >
            <div className="avg-graph__info info">
                <div className="info__name" >Diesel Fuel</div>
                <div className="info__price">$1.96</div>
                <div className="info__avg">AVG PRICE</div>
            </div>
            <div className="avg-graph-container">
                <Line data={data} options={options} />
            </div>
        </div>

    )
}

