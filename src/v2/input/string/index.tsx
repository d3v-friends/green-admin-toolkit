
"use client";
import React, {HTMLInputTypeAttribute, ReactNode, useEffect, useState} from "react";
import {FnBase, fnCss, HTMLInputModeAttribute} from "nextjs-tools";
import Image, {StaticImageData} from "next/image";

type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

interface InputProps {
	value: string;
	onChange: FnBase<string>;
	icon?: StaticImageData;
	label?: ReactNode;
	onKeyEnter?: FnBase<string>;
	className?: string;
}

export type InputInterceptor = (e: React.ChangeEvent<HTMLInputElement>) => string;

const DefaultInterceptor: InputInterceptor = (e) => e.target.value;

interface InputConvenience {
	invalidMessage: ReactNode;
	regexp: string;
	interceptor: InputInterceptor;
	onBlurInterceptor?: InputInterceptor;
}

interface InputAttribute {
	name: string;
	disabled: boolean;
	required: boolean;
	placeholder: string;
	inputMode: HTMLInputModeAttribute;
	type: HTMLInputTypeAttribute;
}

export default function ({
	value,
	onChange,
	className,
	label,
	icon,

	// convenience
	invalidMessage,
	regexp,
	interceptor = DefaultInterceptor,
	onBlurInterceptor = DefaultInterceptor,

	// attributes
	name,
	disabled = false,
	required,
	placeholder,
	inputMode,
	type,
}: Readonly<Props>) {
	const [isFocus, setIsFocus] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);

	useEffect(() => {
		if (!regexp) return;
		if (value === "") {
			setIsInvalid(false);
			return;
		}

		setIsInvalid(!new RegExp(regexp).test(value));
	}, [value]);

	return (
		<div className={className}>
			<Label>{label}</Label>

			<Outline
				isFocus={isFocus}
				isInvalid={isInvalid}>
				<Icon
					isFocus={isFocus}
					isDisabled={disabled}>
					{icon}
				</Icon>

				<input
					{...{name, disabled, required, placeholder, inputMode, type}}
					className="outline-none grow pl-2 pr-2"
					value={value}
					onChange={(e) => onChange(interceptor(e))}
					onFocus={() => setIsFocus(true)}
					onBlur={(e) => {
						setIsFocus(false);
						onChange(onBlurInterceptor(e));
					}}
				/>
			</Outline>

			<InvalidMessage isInvalid={isInvalid}>{invalidMessage}</InvalidMessage>
		</div>
	);
}

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
