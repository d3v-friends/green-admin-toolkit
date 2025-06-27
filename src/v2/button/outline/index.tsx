"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {FnBase, fnCss, ImgSrc} from "nextjs-tools";
import {
	ColorBorder,
	ColorFilter,
	ColorGroupHoverFilterAlt,
	ColorHoverBg,
	ColorHoverTextAlt,
	ColorStyle,
	ColorText,
} from "@app/index";
import Image from "next/image";

export interface ButtonOutlineProps {
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
}: Readonly<ButtonOutlineProps>) {
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
			className={fnCss.sum(
				className,
				ColorText[color],
				ColorBorder[color],
				ColorHoverBg[color],
				ColorHoverTextAlt[color],
				"min-h-[2.5rem] pl-2 pr-2",
				"rounded-md border-[1px] outline-none overflow-hidden",
				"transition-all duration-100 group"
			)}
			onMouseUp={onMouseUp}>
			<div className="flex items-center justify-center">
				{imgSrc && (
					<Image
						className={fnCss.sum(ColorFilter[color], ColorGroupHoverFilterAlt[color], "mr-2 w-[0.8rem]")}
						src={imgSrc}
						alt="icon"
						width={20}
						height={20}
					/>
				)}
				<span className={fnCss.sum(imgSrc ? "pr-4" : "")}>{children}</span>
			</div>
		</button>
	);
}

function Solid({}: Readonly<{children?: ReactNode}>) {
	return <>{}</>;
}
