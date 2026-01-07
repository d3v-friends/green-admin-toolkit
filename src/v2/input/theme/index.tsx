"use client";
import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";
import Image, {StaticImageData} from "next/image";

function Label({children}: Readonly<{children?: ReactNode}>) {
	if (!children) return null;
	return <p className="mb-[-5px]">{children}</p>;
}

function Outline({
	isFocus,
	isInvalid,
	children,
}: Readonly<{isFocus: boolean; isInvalid: boolean; children?: ReactNode}>) {
	let border = isFocus ? "border-(--primary)" : "";
	if (isInvalid) border = "border-(--danger)";

	return (
		<div className={fnCss.sum("flex items-center border-all rounded-md h-[2.5rem] overflow-hidden", border)}>
			{children}
		</div>
	);
}

function Icon({
	children,
	isDisabled,
	isFocus,
}: Readonly<{children?: StaticImageData; isDisabled: boolean; isFocus: boolean}>) {
	if (!children) return null;
	return (
		<div
			className={fnCss.sum(
				"border-right h-full flex pl-2 pr-2",
				isDisabled ? "bg-(--dark)" : "bg-(--primary)",
				isFocus ? "border-(--primary)" : ""
			)}>
			<Image
				className={fnCss.sum(
					"no-drag",
					isDisabled ? "filter-(--dark-alt-filter)" : "filter-(--primary-alt-filter)"
				)}
				src={children}
				alt="icon"
				width={25}
				height={25}
			/>
		</div>
	);
}

function InvalidMessage({children, isInvalid}: Readonly<{children?: ReactNode; isInvalid: boolean}>) {
	if (!children) return null;
	if (!isInvalid) return null;

	return <div className="min-h-[1.5rem] text-(--danger)">{children}</div>;
}

export default {
	Label,
	Outline,
	Icon,
	InvalidMessage,
};
