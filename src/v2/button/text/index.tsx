"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {concat, FnBase, ImgSrc} from "nextjs-tools";
import {ColorFilter, ColorHoverBorder, ColorStyle, ColorText} from "@root";
import Image from "next/image";

export interface ButtonTextProps {
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	onMiddleClick?: MouseEventHandler<HTMLButtonElement>;
	color?: ColorStyle;
	className?: string;
	imgSrc?: ImgSrc;
	ref?: FnBase<HTMLButtonElement>;
	type?: "button" | "submit" | "reset";
}

export default function ({
	children,
	onClick = () => {},
	onMiddleClick = () => {},
	className = "w-full",
	color = "primary",
	imgSrc,
	ref,
	type = "button",
}: Readonly<ButtonTextProps>) {
	const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
		switch (e.button) {
			case 0:
				onClick(e);
				return;
			case 1:
				onMiddleClick(e);
				return;
		}
	};
	return (
		<button
			type={type}
			ref={ref}
			className={concat(
				className,
				ColorText[color],
				ColorHoverBorder[color],
				"border-transparent",
				"min-h-[2.5rem] pl-2 pr-2",
				"rounded-md border-[1px] outline-none overflow-hidden",
				"transition-all duration-100 group"
			)}
			onMouseUp={onMouseUp}>
			<div className="flex items-center justify-center">
				{imgSrc && (
					<Image
						className={concat(ColorFilter[color], "mr-2 w-[0.8rem]")}
						src={imgSrc}
						alt="icon"
						width={20}
						height={20}
					/>
				)}
				<span className={concat(imgSrc ? "pr-4" : "group-hover:underline")}>{children}</span>
			</div>
		</button>
	);
}

function Solid({}: Readonly<{children?: ReactNode}>) {
	return <>{}</>;
}
