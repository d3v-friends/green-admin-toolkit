"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import Image, {StaticImageData} from "next/image";
import {FnBase, fnCss} from "nextjs-tools";
import {Sorter} from "@app/index";

interface Props {
	children?: ReactNode;
	onChange?: FnBase<Sorter>;
	columnKey?: string;
	value?: Sorter;
}

export default function ({children, onChange = () => {}, value = "NONE"}: Readonly<Props>) {
	let color = "filter-(--text-3-filter)";
	let img: StaticImageData = ImgDash;
	switch (value) {
		case "ASC":
			color = "filter-(--danger-filter)";
			img = ImgAsc;
			break;
		case "DESC":
			color = "filter-(--success-filter)";
			img = ImgDesc;
			break;
	}

	const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		onChange(toggle(value));
	};

	return (
		<button
			className="inline-flex items-baseline justify-center cursor-pointer"
			onClick={onClick}>
			<Image
				src={img}
				alt="direction"
				width={16}
				height={16}
				className={fnCss.sum("no-drag mr-1 w-[0.7rem]", color)}
			/>
			<div className={fnCss.sum(value === "NONE" ? "text-(--text-2)" : "text-(--text-5)")}>{children}</div>
		</button>
	);
}

function toggle(sorter: Sorter): Sorter {
	const list: Sorter[] = ["ASC", "DESC", "NONE"];
	const idx = list.findIndex((v) => v === sorter);
	return list[(idx + 1) % list.length];
}
