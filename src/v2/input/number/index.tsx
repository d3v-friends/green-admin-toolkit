"use client";
import React, {HTMLInputTypeAttribute, ReactNode} from "react";
import Input from "../string";
import {FnBase, HTMLInputModeAttribute} from "nextjs-tools";
import {StaticImageData} from "next/image";

export type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

interface InputProps {
	value: string;
	onChange: FnBase<string>;
	icon?: StaticImageData;
	label?: ReactNode;
	onKeyEnter?: FnBase<string>;
	className?: string;
}

interface InputConvenience {
	numberType: NumberType;
}

interface InputAttribute {
	name: string;
	disabled: boolean;
	required: boolean;
	placeholder: string;
	inputMode: HTMLInputModeAttribute;
	type: HTMLInputTypeAttribute;
}

export type NumberType = "integer" | "decimal";

export default function (props: Readonly<Props>) {
	const {numberType = "integer"} = props;

	let interceptor = Integer;
	switch (numberType) {
		case "decimal":
			interceptor = Decimal;
			break;
		case "integer":
			interceptor = Integer;
			break;
	}

	return (
		<Input
			{...props}
			interceptor={interceptor}
			onBlurInterceptor={(e) => `${Number(e.target.value)}`}
		/>
	);
}

function Integer(e: React.ChangeEvent<HTMLInputElement>): string {
	const val = e.target.value;
	// 숫자와 맨 앞의 마이너스(-)만 허용
	return val.replace(/(?!^-)[^0-9]/g, "");
}

function Decimal(e: React.ChangeEvent<HTMLInputElement>): string {
	let val = e.target.value;

	// 1. 숫자, 마이너스(-), 점(.) 이외의 모든 문자 제거
	val = val.replace(/[^0-9.-]/g, "");

	// 2. 마이너스(-) 처리: 맨 앞에 있는 것만 유지하고 나머지는 제거
	if (val.startsWith("-")) {
		val = "-" + val.slice(1).replace(/-/g, "");
	} else {
		val = val.replace(/-/g, "");
	}

	// 3. 점(.) 처리: 첫 번째 점만 유지하고 나머지는 제거
	const parts = val.split(".");
	if (parts.length > 2) {
		val = parts[0] + "." + parts.slice(1).join("");
	}

	return val;
}
