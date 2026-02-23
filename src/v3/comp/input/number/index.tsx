"use client";
import React, {FocusEventHandler, ReactNode, useEffect, useState} from "react";
import {FnBase, fnVoid, Nullable} from "nextjs-tools";
import Base from "../base";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
	value: Nullable<number>;
	onChange: FnBase<Nullable<number>>;
	label?: ReactNode;
}

export default function ({value, onChange, onBlur = fnVoid, ...attr}: Readonly<Props>) {
	const [strValue, onChangeStrValue] = useState(value ? value.toString : "");

	const onBlurEvent: FocusEventHandler<HTMLInputElement> = (e) => {
		onBlur(e);
		const next = toNumber(e.target.value);
		onChange(next);
		onChangeStrValue(next ? next.toString() : "");
	};

	useEffect(() => {
		onChangeStrValue(value ? value.toString() : "");
	}, [value]);

	return (
		<Base
			{...attr}
			value={strValue}
			onChange={onChangeStrValue}
			onBlur={onBlurEvent}
			type="number"
		/>
	);
}

function toNumber(value: string): number | null {
	if (!value || value.trim() === "") return null;
	const converted = Number(value);
	return isNaN(converted) || !isFinite(converted) ? null : converted;
}
