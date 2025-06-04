"use client";
import React, {MouseEventHandler} from "react";
import {ChildNode, fnCss, ImgSrc} from "nextjs-tools";
import {ColorStyle} from "@app/index";
import Image from "next/image";
import "@asset/style/button.scss";

interface Props {
	children?: ChildNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	style?: "solid" | "outlined" | "text";
	color?: ColorStyle;
	className?: string;
	imgSrc?: ImgSrc;
}

export default function ({
	children,
	onClick,
	style = "solid",
	className = "w-full",
	color = "primary",
	imgSrc,
}: Readonly<Props>) {
	return (
		<button
			className={fnCss.sum(
				style,
				className,
				color,
				"button",
				"flex items-center justify-center rounded-md min-h-[3rem]",
				"outline-none"
			)}
			onClick={onClick}>
			{imgSrc && (
				<Image
					className="mr-2 w-[0.8rem]"
					src={imgSrc}
					alt="icon"
					width={20}
					height={20}
				/>
			)}
			<span className={fnCss.sum(imgSrc ? "pr-4" : "")}>{children}</span>
		</button>
	);
}
