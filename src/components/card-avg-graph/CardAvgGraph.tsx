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

    return <div className="avg-graph" >
        <div>
            <div>Diesel Fuel</div>
            <div>$1.96</div>
            <div>AVG PRICE</div>
        </div>
        <Line data={data}
            options={{
                title: {
                    display: false,
                    text: 'Average Rainfall per month',
                    fontSize: 20
                },

                plugins: {
                    legend: {
                        display: false,
                        position: 'right'
                    },
                },


            }} />
    </div>
}

