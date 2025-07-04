"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {FnBase, fnCss, ImgSrc} from "nextjs-tools";
import {ColorStyle} from "@root";
import Image from "next/image";
import "@asset/style/button.scss";

export interface Props {
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	style?: "solid" | "outlined" | "text";
	color?: ColorStyle;
	className?: string;
	imgSrc?: ImgSrc;
	onRef?: FnBase<HTMLButtonElement>;
	type?: "button" | "submit" | "reset";
}

export default function ({
	children,
	onClick,
	style = "solid",
	className = "w-full",
	color = "primary",
	imgSrc,
	onRef,
	type = "button",
}: Readonly<Props>) {
	return (
		<button
			type={type}
			ref={onRef}
			className={fnCss.sum(
				style,
				className,
				color,
				"button",
				"inline-flex items-center justify-center rounded-md min-h-[2.5rem] pl-2 pr-2",
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
