import { time } from 'console';
import { CardActivity } from '../components/activity/Activity';
import { CardAvgData } from '../components/card-avg/CardAvg';
import { CardMessage } from '../components/messages/Messages';
import { CardOilGasProviders } from '../components/oil-and-gas-providers/OilGasProviders';
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

export function getCardOilGasProviders(): CardOilGasProviders[] {
	return [
		{
			name: 'INA d.d',
			location: 'Zagreb, Croatia'
		},
		{
			name: 'Shell',
			location: 'The Hague, Netherlands'
		},
		{
			name: 'Repsol',
			location: 'Madrid, Spain'
		},
		{
			name: 'Total',
			location: 'Courbevoie, France'
		},
		{
			name: 'Chevron	',
			location: 'San Ramon, United States'
		},
		{
			name: 'INA d.d.',
			location: 'Zageb, Croatia '
		}
	];
}

export function getActivity(): CardActivity[] {
	return [
		{
			time: '16:38',
			name: 'John Doe',
			activity: 'Price change'
		},
		{
			time: '16:38',
			name: 'John Doe',
			activity: 'Price change'
		},
		{
			time: '16:38',
			name: 'John Doe',
			activity: 'Price change'
		},
		{
			time: '16:38',
			name: 'John Doe',
			activity: 'Price change'
		},
		{
			time: '16:38',
			name: 'John Doe',
			activity: 'Price change'
		}
	];
}

export function getMessages(): CardMessage[] {
	return [
		{
			name: 'Jessica Smith',
			message: 'Good Morning!',
			time: '32MIN'
		},
		{
			name: 'Jessica Smith',
			message: 'Good Morning!',
			time: '32MIN'
		},
		{
			name: 'Jessica Smith',
			message: 'Good Morning!',
			time: '32MIN'
		},
		{
			name: 'Jessica Smith',
			message: 'Good Morning!',
			time: '32MIN'
		},
		{
			name: 'Jessica Smith',
			message:
				'Good Morning!gfhfgh gh fghfg hf ghfg hfg hfhg fghfgh  gfhfghfgh fgh  dfgd fg dfg dfg df gdf gdfg dfg dfg df jdshfkjsdhfjks kjsdhf kjsdhf kjsdhf kjsdhf jsdkf jsdhjkfhsd jfhsdjk fshdj fhsj hj hjk shfsdj h dfgd fgdf gdfgdfgd fgdf gdf gdf ',
			time: '32MIN'
		}
	];
}
