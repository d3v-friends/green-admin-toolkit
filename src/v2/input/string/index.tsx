"use client";
import React, {HTMLInputTypeAttribute, ReactNode, useEffect, useState} from "react";
import {FnBase, HTMLInputModeAttribute} from "nextjs-tools";
import {StaticImageData} from "next/image";
import Theme from "../theme";

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

const {Label, Outline, Icon, InvalidMessage} = Theme;

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
