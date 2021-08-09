import { CardAvgData } from "../components/card-avg/CardAvg";

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