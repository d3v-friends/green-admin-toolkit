"use client";
import React, {ReactNode} from "react";
import {FnBase, fnCss, ImgSrc} from "nextjs-tools";
import Image from "next/image";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
import {InputParser} from "@fn/input";

interface Props {
	imgSrc?: ImgSrc;
	className?: string;
	label?: ReactNode;
	value: InputBetweenValue;
	onChange: FnBase<InputBetweenValue>;
	name?: Partial<InputBetweenValue>;
	inputParser?: InputParser;
}

export type InputBetweenValue = Partial<{
	before: string;
	after: string;
}>;

export default function ({label, className, imgSrc, value, onChange, name = {}, inputParser}: Readonly<Props>) {
	return (
		<div className={className}>
			{label && <p className="mb-[-5px]">{label}</p>}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
				<Input
					name={name?.before}
					imgSrc={imgSrc}
					value={value.before}
					onChange={(before) => onChange({...value, before})}
					inputParser={inputParser}
				/>

				<Input
					name={name?.after}
					value={value.after}
					onChange={(after) => onChange({...value, after})}
					inputParser={inputParser}
				/>
			</div>
		</div>
	);
}

function Input({
	value,
	onChange,
	imgSrc,
	name,
	inputParser = (e) => e.target.value,
}: Readonly<{
	value?: string;
	onChange: FnBase<string>;
	imgSrc?: ImgSrc;
	name?: string;
	inputParser?: InputParser;
}>) {
	return (
		<div className={fnCss.sum("relative flex items-center border-all rounded-md h-[2.5rem] overflow-hidden")}>
			{imgSrc && (
				<div className={fnCss.sum("border-right h-full flex pl-2 pr-2 bg-(--primary)")}>
					<Image
						className={fnCss.sum("no-drag filter-(--primary-alt-filter)")}
						src={imgSrc}
						alt="icon"
						width={25}
						height={25}
					/>
				</div>
			)}
			<input
				name={name}
				className="grow pl-2 pr-2 outline-none"
				value={value || ""}
				onChange={(e) => onChange(inputParser(e))}
			/>

			{value && (
				<button onClick={() => onChange("")}>
					<Image
						src={ImgCross}
						alt="clear"
						width={20}
						height={20}
						className="absolute right-0 top-0 h-[2.5rem] no-drag mr-2 filter-(--text-2-filter) hover:filter-(--primary-filter)"
					/>
				</button>
			)}
		</div>
	);
}
