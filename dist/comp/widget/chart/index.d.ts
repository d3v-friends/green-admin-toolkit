import { ApexOptions } from "apexcharts";
interface Props {
    type?: "line" | "area" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap";
    series?: ApexOptions["series"];
    width?: string | number;
    height?: string | number;
    options?: ApexOptions;
    className?: string;
}
export default function ({ className, type, series, width, height, options }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
