"use client";
import React, {ReactNode, useId} from "react";
import {FnBase} from "nextjs-tools";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
	value: string;
	onChange: FnBase<string>;
	label?: ReactNode;
}

export default function ({value, onChange, label, className, ...attr}: Readonly<Props>) {
	const id = useId();

	return (
		<div className={className}>
			{label && (
				<label
					className="no-drag"
					htmlFor={id}>
					{label}
				</label>
			)}

			<input
				className="green"
				id={id}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				{...attr}
			/>
		</div>
	);
}
