"use client";
import React from "react";
import dynamic from "next/dynamic";
import {ApexOptions} from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

interface Props {
	type?:
		| "line"
		| "area"
		| "bar"
		| "pie"
		| "donut"
		| "radialBar"
		| "scatter"
		| "bubble"
		| "heatmap"
		| "candlestick"
		| "boxPlot"
		| "radar"
		| "polarArea"
		| "rangeBar"
		| "rangeArea"
		| "treemap";
	series?: ApexOptions["series"];
	width?: string | number;
	height?: string | number;
	options?: ApexOptions;
	className?: string;
}

export default function ({className, type, series, width, height, options}: Readonly<Props>) {
	return (
		<div className={className}>
			<Chart {...{type, series, width, height, options}} />
		</div>
	);
}
