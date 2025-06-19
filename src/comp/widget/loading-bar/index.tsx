"use client";
import React from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	max: number;
	value: number;
	position?: "top-0" | "bottom-0";
}

export default function ({max, value, position = "top-0"}: Readonly<Props>) {
	if (!value) return null;
	const width = `${(value / max) * 100}%`;
	return (
		<div className={fnCss.sum("fixed left-0 w-screen h-[0.3rem] z-5 no-drag", position)}>
			<div
				className="h-full bg-(--primary) transition-all duration-300"
				style={{width}}></div>
		</div>
	);
}
