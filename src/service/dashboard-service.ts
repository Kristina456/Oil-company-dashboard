import { CardAvgData } from "../components/card-avg/CardAvg";
import { PriceStatisticsData } from "../components/price-statistics/OilInfo/OilInfo";


export function getDashboardMotorGasolinePrice(): CardAvgData[] {
    return [{
        title: "Motor Gasoline",
        price: 1.58,
        averagePrice: -0.06
    },
    {
        title: "Autogas",
        price: 0.98,
        averagePrice: 0.02
    },
    {
        title: "Fuel Oil",
        price: 0.74,
        averagePrice: 0.02
    }]
}

export function getOilInfo(): PriceStatisticsData[] {
    return [{
        name:"CHEVRON",
        price:1.80,
        averagePrice:-0.06,
    },
    {
        name:"SHELL",
        price:1.92,
        averagePrice:0.11,
    },
    {
        name:"TOTAL",
        price:1.88,
        averagePrice:0.06,
    }
]
}