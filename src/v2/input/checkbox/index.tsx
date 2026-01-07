"use client";
import React, {ReactNode} from "react";
import {FnBase} from "nextjs-tools";
import Theme, {OnClickCheckboxInterceptor} from "../theme";

type Props = InputProps & Partial<InputAttribute>;

const {Checkbox} = Theme;

interface InputProps {
	value: boolean;
	onChange: FnBase<boolean>;
	label: ReactNode;
	onClickInterceptor?: OnClickCheckboxInterceptor;
}

interface InputAttribute {
	name: string;
}

export default function ({
	value,
	onChange,
	label,
	onClickInterceptor,

	// attribute
	name,
}: Readonly<Props>) {
	return (
		<>
			<input
				hidden
				type="checkbox"
				value={value ? "true" : "false"}
				onChange={(e) => onChange(e.target.value === "true")}
				{...{name}}
			/>

			<Checkbox
				value={value}
				onClickInterceptor={onClickInterceptor}
				onChange={onChange}>
				{label}
			</Checkbox>
		</>
	);
}
