"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import Image, {StaticImageData} from "next/image";
import {concat} from "nextjs-tools";

interface Props {
	align?: Align;
	children?: ReactNode;
	image?: string | StaticImageData;
	copyable?: boolean;
	ellipsis?: boolean;
	className?: string;
	monospace?: boolean;
}

export type Align = "left" | "center" | "right";

const alignCss: Record<Align, string> = {
	left: "justify-start",
	center: "justify-center",
	right: "justify-end",
};

export default function ({
	align = "center",
	children,
	image,
	copyable,
	ellipsis,
	className = "",
	monospace,
}: Readonly<Props>) {
	const onCopy: MouseEventHandler<HTMLDivElement> = (e) => {
		if (!copyable) return;
		e.stopPropagation();
		e.preventDefault();
		switch (typeof children) {
			case "string":
				window.navigator.clipboard.writeText(children).catch((err) => console.error(err));
				break;
			default:
		}
	};

	let value = children;
	if (ellipsis && typeof children === "string") {
		value = children.slice(0, 10) + "...";
	}

	return (
		<div
			className={concat(
				"flex items-center",
				alignCss[align],
				copyable ? "hover:underline hover:cursor-pointer" : ""
			)}
			onClick={onCopy}>
			{image && (
				<Image
					className="mr-2 filter-(--primary-filter)"
					src={image}
					alt="icon"
					width={20}
					height={20}
				/>
			)}
			<div
				suppressHydrationWarning
				className={concat(className, monospace ? "font-d2" : "")}>
				{value}
			</div>
		</div>
	);
}
