"use client";
import React, {MouseEventHandler, ReactNode, useState} from "react";
import {FnBase, fnCss} from "nextjs-tools";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";

interface Props {
	children?: ReactNode;
	defaultValue?: boolean;
	onChange?: FnBase<boolean>;
	className?: string;
}

export default function ({children, defaultValue = false, onChange = () => {}, className = ""}: Readonly<Props>) {
	const [value, setValue] = useState(defaultValue);

	const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
		setValue(!value);
		onChange(!value);
	};

	return (
		<>
			<input
				hidden
				value={value ? "true" : "false"}
				onChange={() => {}}
			/>

			<div
				className={fnCss.sum("inline-flex items-center cursor-default no-drag", className)}
				onClick={onClick}>
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
			</div>
		</>
	);
}
