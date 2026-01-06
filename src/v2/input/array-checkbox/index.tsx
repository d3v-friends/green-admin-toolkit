"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {concat, FnBase, fnCss, fnCsv, fnVoid} from "nextjs-tools";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";

interface Props {
	list: InputArrayCheckboxItem[];
	value?: string;
	onChange?: FnBase<string>;
	name?: string;
	children?: InputArrayCheckboxChildren;
	label?: ReactNode;
	className?: string;
}

export type InputArrayCheckboxItem = {
	value: string;
	label: ReactNode;
};

export type InputArrayCheckboxChildren = (items: ReactNode[]) => ReactNode;

export default function ({
	list,
	value: defaultValue = "",
	onChange = fnVoid,
	name,
	children = () => "",
	label,
	className,
}: Readonly<Props>) {
	const onToggle = (item: string) => {
		const next = fnCsv.has(value, item) ? fnCsv.pop(value, item) : fnCsv.push(value, item);
		setValue(next);
		onChange(next);
	};

	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	return (
		<div className={className}>
			<input
				hidden
				value={value}
				onChange={fnVoid}
				name={name}
			/>

			{label && <p className="mb-[-5px]">{label}</p>}

			{children(
				list.map((item, key) => (
					<Checkbox
						data={item}
						key={key}
						onToggle={onToggle}
						isActivate={fnCsv.split(value).includes(item.value)}
					/>
				))
			)}
		</div>
	);
}

function Checkbox({
	data,
	onToggle,
	isActivate,
}: Readonly<{
	data: InputArrayCheckboxItem;
	onToggle: FnBase<string>;
	isActivate: boolean;
}>) {
	return (
		<button
			type="button"
			className={concat("inline-flex items-center cursor-default no-drag")}
			onClick={() => onToggle(data.value)}>
			<div
				className={concat(
					"border-(--border) border-[2px] w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center",
					isActivate ? "border-(--primary) bg-(--primary)" : ""
				)}>
				<Image
					className={concat("w-[0.7rem] filter-(--primary-alt-filter)")}
					src={ImgCheck}
					alt="check"
					width={20}
					height={20}
				/>
			</div>
			<div className={fnCss.sum("pl-2", isActivate ? "text-(--text-3)" : "text-(--text-1)")}>{data.label}</div>
		</button>
	);
}
