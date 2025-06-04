"use client";
import React from "react";
import {ChildNode, fnCss, ImgSrc} from "nextjs-tools";
import {ColorStyle} from "@app/index";
import Image from "next/image";
import Link from "next/link";
import "@asset/style/button.scss";

interface Props {
	children?: ChildNode;
	style?: "solid" | "outlined" | "text";
	color?: ColorStyle;
	className?: string;
	imgSrc?: ImgSrc;
	href?: string;
}

export default function ({
	children,
	style = "solid",
	className = "",
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
				"flex items-center justify-center w-full min-h-[3rem] rounded-md",
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
