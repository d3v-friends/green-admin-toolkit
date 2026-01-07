"use client";
import React, {MouseEvent, ReactNode} from "react";
import {FnBase, fnCss} from "nextjs-tools";
import Image, {StaticImageData} from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";

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

export type OnClickCheckboxInterceptor = (e: MouseEvent<HTMLButtonElement>, value: boolean) => boolean;

const DefaultOnClickCheckboxInterceptor: OnClickCheckboxInterceptor = (e, value) => {
	e.stopPropagation();
	return value;
};

function Checkbox({
	value,
	children,
	onClickInterceptor = DefaultOnClickCheckboxInterceptor,
	onChange,
}: Readonly<{
	value: boolean;
	children: ReactNode;
	onChange: FnBase<boolean>;
	onClickInterceptor?: OnClickCheckboxInterceptor;
}>) {
	return (
		<button
			type="button"
			className="inline-flex items-center"
			onClick={(e) => onChange(onClickInterceptor(e, !value))}>
			<div
				className={fnCss.sum(
					"border-(--border) border-[2px] w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center",
					value ? "border-(--primary) bg-(--primary)" : ""
				)}>
				<Image
					className={fnCss.sum("w-[0.7rem] filter-(--primary-alt-filter)")}
					src={ImgCheck}
					alt="check"
					width={20}
					height={20}
				/>
			</div>
			<div className={fnCss.sum("pl-2", value ? "text-(--text-3)" : "text-(--text-1)")}>{children}</div>
		</button>
	);
}

export default {
	Label,
	Outline,
	Icon,
	InvalidMessage,
	Checkbox,
};
