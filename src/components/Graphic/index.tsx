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
	stroke: {
		curve: "smooth",
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

	markers: {
		size: 0,
	},
};
const series = [
	{
		name: "Income",
		type: "line",
		data: [10, 100, 2000, 400, 1000, 500],
	},
	{
		name: "users",
		type: "line",
		data: [500, 1000, 400, 2000, 10],
	},
];

export const Graphic = () => {
	return <Chart options={options} series={series} type="line" height={160} />;
};
