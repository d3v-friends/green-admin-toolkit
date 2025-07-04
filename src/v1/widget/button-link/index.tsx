"use client";
import React, {ReactNode} from "react";
import {fnCss, ImgSrc} from "nextjs-tools";
import {ColorStyle} from "@root";
import Image from "next/image";
import Link from "next/link";
import "@asset/style/button.scss";

interface Props {
	children?: ReactNode;
	style?: "solid" | "outlined" | "text";
	color?: ColorStyle;
	className?: string;
	imgSrc?: ImgSrc;
	href?: string;
}

export default function ({
	children,
	style = "solid",
	className = "w-full",
	color = "primary",
	imgSrc,
	href = "/",
}: Readonly<Props>) {
	return (
		<Link
			className={fnCss.sum(
				style,
				className,
				color,
				"button",
				"flex items-center justify-center min-h-[2.5rem] pl-2 pr-2 rounded-md",
				"outline-none"
			)}
			href={href}>
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
		</Link>
	);
}
