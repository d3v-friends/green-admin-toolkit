"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {Sorter, TableCol} from "../../..";
import {FnBase, fnCss} from "nextjs-tools";
import Image, {StaticImageData} from "next/image";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import ImgAsc from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDesc from "web-asset/svg/regular/fi-rr-caret-down.svg";

interface Props<T> {
	cols: TableCol<T>[];
	value?: TableSorterValue;
	onChange?: OnChangeTheadSorter;
}

export type OnChangeTheadSorter = (columnKey: string, sorter: Sorter) => void;

export type TableSorterValue = {
	columnKey: string;
	sorter: Sorter;
};

export default function <T>({
	cols,
	onChange = () => {},
	value = {
		columnKey: "",
		sorter: "NONE",
	},
}: Readonly<Props<T>>) {
	return (
		<thead>
			<tr className="border-top">
				{cols.map((v, key) => (
					<th
						className={fnCss.sum(v.headerClassName || "", "pt-2 pb-2")}
						key={key}>
						{v.columnKey ? (
							<HeaderButton
								columnKey={v.columnKey}
								onChange={(sorter) => {
									onChange(v.columnKey!, sorter);
								}}
								value={v.columnKey === value?.columnKey ? value.sorter : "NONE"}>
								{v.name}
							</HeaderButton>
						) : (
							<span className="text-(--text-2)">{v.name}</span>
						)}
					</th>
				))}
			</tr>
		</thead>
	);
}

function HeaderButton({
	children,
	onChange = () => {},
	value = "NONE",
}: Readonly<{
	children?: ReactNode;
	onChange?: FnBase<Sorter>;
	columnKey?: string;
	value?: Sorter;
}>) {
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

	const onClick: MouseEventHandler<HTMLButtonElement> = (_) => {
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
	const list: Sorter[] = ["ASC", "DESC"];
	const idx = list.findIndex((v) => v === sorter);
	return list[(idx + 1) % list.length];
}
