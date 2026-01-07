"use client";
import React, {ReactNode, useState} from "react";
import {FnBase, fnCsv} from "nextjs-tools";
import Theme from "../theme";

type Props = InputProps & Partial<InputAttribute>;

export interface SelectCheckboxItem {
	label: ReactNode;
	value: string;
}

interface InputProps {
	value: string[];
	onChange: FnBase<string[]>;
	items: SelectCheckboxItem[];

	label?: ReactNode;
	className?: string;
	gridClassName?: string;
}

interface InputAttribute {
	name: string;
}

const {Label, Checkbox} = Theme;

export default function ({
	value,
	items,
	label,
	onChange,
	className,
	gridClassName = "grid grid-cols-5 gap-2 lg:gap-4",

	// attribute
	name,
}: Readonly<Props>) {
	return (
		<div className={className}>
			<Label>{label}</Label>
			<div className={gridClassName}>
				{items.map((v, i) => (
					<CheckboxButton
						key={i}
						inputValue={value}
						onChange={onChange}
						{...v}
					/>
				))}
			</div>

			<input
				hidden
				{...{name}}
				value={value.join(",")}
				onChange={(e) => onChange(e.target.value.split(","))}
			/>
		</div>
	);
}

function CheckboxButton({
	label,
	value,
	inputValue,
	onChange,
}: Readonly<SelectCheckboxItem & {inputValue: string[]; onChange: FnBase<string[]>}>) {
	const [isChecked, setIsChecked] = useState(fnCsv.has(inputValue.join(","), value));
	const onChangeHandler = (v: boolean) => {
		const nextValue = v ? fnCsv.push(inputValue.join(","), value) : fnCsv.pop(inputValue.join(","), value);
		onChange(nextValue === "" ? [] : nextValue.split(","));
		setIsChecked(v);
	};

	return (
		<Checkbox
			value={isChecked}
			onChange={onChangeHandler}>
			{label}
		</Checkbox>
	);
}
