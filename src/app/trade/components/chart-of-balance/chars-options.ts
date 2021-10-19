import { ChartOptions, ChartType } from "chart.js";
import { Color } from "ng2-charts";

export const CHART_COLORS: Color[] = [
    {
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
    },
];

export const CHART_LEGEND: boolean = true;

export const CHART_TYPE: ChartType = 'line';

export const CHART_OPTIONS: ChartOptions = {
    responsive: true,
};