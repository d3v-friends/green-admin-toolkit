"use client";
import React, {ReactNode} from "react";
import {ColorStyle} from "@app/index";
import {fnCss} from "nextjs-tools";

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

// todo 	`${}` 	방식으로 클래스네임을 정했더니 tailwind 에서 클래스를 적용하지 못하는 버그 생김
// -> 공식문서대로 하기: 이렇게 사용하지 말라고 했음
export default function ({
	color = "primary",
	className = "",
	label,
	size = "h-5",
	style = "outlined",
	max,
	value,
	hiddenRate,
	rateParser = (value, max) => `${((value / max) * 100).toFixed(0)}%`,
}: Readonly<Props>) {
	const bgColor = `bg-(--${color})`;
	const textColor = `text-(--${color}-alt)`;
	const rate = ((value / max) * 100).toFixed(0);
	const width = `${rate}%`;

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
					style={{width}}
					className={fnCss.sum(
						"flex justify-center items-center",
						"transition-all duration-300 overflow-hidden text-center text-xs",
						bgColor,
						width,
						"h-full"
					)}>
					{!hiddenRate && <div className={textColor}>{rateParser(value, max)}</div>}
				</div>
			</div>
		</div>
	);
}
