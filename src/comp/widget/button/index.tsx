"use client";
import React, {MouseEventHandler} from "react";
import {ChildNode, fnCss} from "nextjs-tools";
import {ColorStyle} from "@app/index";

interface Props {
	children?: ChildNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	style?: "solid" | "outline";
	color?: ColorStyle;
	className?: string;
}

export default function ({children, onClick, style = "solid", className = "", color = "primary"}: Readonly<Props>) {
	return (
		<button
			className={fnCss.sum(style, className, color, "button")}
			onClick={onClick}>
			{children}
		</button>
	);
}
