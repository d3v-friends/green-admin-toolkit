"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {concat, FnBase, ImgSrc} from "nextjs-tools";
import {ColorBg, ColorBorder, ColorFilterAlt, ColorStyle, ColorTextAlt} from "../../..";
import Image from "next/image";

export interface ButtonSolidProps {
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	onMiddleClick?: MouseEventHandler<HTMLButtonElement>;
	color?: ColorStyle;
	className?: string;
	imgSrc?: ImgSrc;
	ref?: FnBase<HTMLButtonElement>;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
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
	disabled = false,
}: Readonly<ButtonSolidProps>) {
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
			disabled={disabled}
			type={type}
			ref={ref}
			className={concat(
				className,
				ColorBg[color],
				ColorTextAlt[color],
				ColorBorder[color],
				"min-h-[2.5rem] pl-2 pr-2",
				"rounded-md border-[1px] outline-none overflow-hidden",
				"transition-all duration-100 hover:brightness-130",
				disabled ? "cursor-not-allowed" : "cursor-pointer"
			)}
			onMouseUp={onMouseUp}>
			<div className="flex items-center justify-center">
				{imgSrc && (
					<Image
						className={concat(ColorFilterAlt[color], "mr-2 w-[0.8rem]")}
						src={imgSrc}
						alt="icon"
						width={20}
						height={20}
					/>
				)}
				<span className={concat(imgSrc ? "pr-4" : "")}>{children}</span>
			</div>
		</button>
	);
}
