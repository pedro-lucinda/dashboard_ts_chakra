import dynamic from "next/dynamic";
//lazy
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { theme } from "@chakra-ui/react";

const options = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: "datatime",
		axisBorder: {
			color: theme.colors.gray[700],
		},
		axisTicks: {
			color: theme.colors.gray[700],
		},
		categories: ["", "19 mar", "20 mar", "21 mar", "22 mar"],
	},
	fill: {
		opacity: 0.3,
		type: "gradient",
		gradient: {
			shade: "dark",
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
};
const series = [{ name: "series1", data: [50, 500, 100, 600, 5] }];

export const Graphic = () => {
	return <Chart options={options} series={series} type="area" height={160} />;
};
