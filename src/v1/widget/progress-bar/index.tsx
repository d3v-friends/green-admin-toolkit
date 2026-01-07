"use client";
import React, {ReactNode} from "react";
import {ColorStyle} from "../../..";
import {fnCss} from "nextjs-tools";
import Decimal from "decimal.js";

interface Props {
	children?: ReactNode;
	color?: ColorStyle;
	className?: string;
	label?: ReactNode;
	size?: ProgressBarSize;
	style?: "outlined" | "solid";
	max: number;
	value: number;
	hiddenRate?: boolean;
	rateParser?: (value: number, max: number) => string;
}

export type ProgressBarSize = "h-5" | "h-10" | "h-15" | string;

export default function ({
	color = "primary",
	className = "",
	label,
	size = "h-5",
	style = "outlined",
	max,
	value,
	hiddenRate,
	rateParser = (value, max) => `${new Decimal(value).mul(100).divToInt(max).toNumber()}%`,
}: Readonly<Props>) {
	const bgColor = `bg-(--${color})`;
	const textColor = `text-(--${color}-alt)`;

	let width = new Decimal(value).mul(100).divToInt(max);
	if (width.gt(100)) width = new Decimal(100);

	return (
		<div className={className}>
			{label && <p className="mb-[-5px]">{label}</p>}
			<div
				className={fnCss.sum(
					size,
					"relative rounded-sm overflow-hidden",
					style === "outlined" ? "border-all" : ""
				)}>
				<div
					style={{width: `${width}%`}}
					className={fnCss.sum(
						"flex justify-center items-center",
						"transition-all duration-300 overflow-hidden text-center text-xs",
						bgColor,
						"h-full"
					)}>
					{!hiddenRate && <div className={fnCss.sum(textColor)}>{rateParser(value, max)}</div>}
				</div>
			</div>
		</div>
	);
}
