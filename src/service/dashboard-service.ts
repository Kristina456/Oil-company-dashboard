import { CardAvgData } from '../components/card-avg/CardAvg';
import { PriceStatisticsData } from '../components/price-statistics/OilInfo/OilInfo';
import { CardSalesReport } from '../components/sales-report/SalesReport';

export function getDashboardMotorGasolinePrice(): CardAvgData[] {
	return [
		{
			title: 'Motor Gasoline',
			price: 1.58,
			averagePrice: -0.06
		},
		{
			title: 'Autogas',
			price: 0.98,
			averagePrice: +0.02
		},
		{
			title: 'Fuel Oil',
			price: 0.74,
			averagePrice: +0.02
		}
	];
}

export function getOilInfo(): PriceStatisticsData[] {
	return [
		{
			name: 'CHEVRON',
			price: 1.8,
			averagePrice: -0.06
		},
		{
			name: 'SHELL',
			price: 1.92,
			averagePrice: +0.11
		},
		{
			name: 'TOTAL',
			price: 1.88,
			averagePrice: +0.06
		}
	];
}

export function getSalesReportInformations(): CardSalesReport[] {
	return [
		{
			ordinalNumber: '01',
			provider: 'CHEVRON',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '02',
			provider: 'SHELL',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '03',
			provider: 'TOTAL',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '04',
			provider: 'REPSOL',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '05',
			provider: 'INA',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '06',
			provider: 'SHELL',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '07',
			provider: 'TOTAL',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '08',
			provider: 'CHEVRON',
			stats: 1.58,
			percentage: +0.21
		},
		{
			ordinalNumber: '09',
			provider: 'INA',
			stats: 1.58,
			percentage: +0.21
		}
	];
}
