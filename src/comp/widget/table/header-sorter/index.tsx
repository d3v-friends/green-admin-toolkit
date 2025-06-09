"use client";
import React, {ReactNode, useState} from "react";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
import Image from "next/image";
import {FnBase, fnCss} from "nextjs-tools";

interface Props {
	children?: ReactNode;
	asc?: string;
	desc?: string;
	initValue?: string;
	onChange?: FnBase<string>;
}

export default function ({
	children,
	asc = "ASC",
	desc = "DESC",
	initValue = "ASC",
	onChange = () => {},
}: Readonly<Props>) {
	const [value, setValue] = useState(initValue);
	return (
		<div
			className="inline-flex items-center justify-center cursor-pointer"
			onClick={() => {
				setValue(value === asc ? desc : asc);
				onChange(value === asc ? desc : asc);
			}}>
			<Image
				src={value === asc ? ImgAsc : ImgDesc}
				alt="direction"
				width={16}
				height={16}
				className={fnCss.sum(
					"no-drag mr-1 w-[1rem]",
					value === asc ? "filter-(--danger-filter)" : "filter-(--success-filter)"
				)}
			/>
			<div className={fnCss.sum(value === asc ? "text-(--text-2)" : "text-(--text-5)")}>{children}</div>
		</div>
	);
}
