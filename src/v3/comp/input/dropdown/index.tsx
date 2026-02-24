"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {FnBase, fnCss, ImgSrc, Nullable, Position} from "nextjs-tools";
import Image from "next/image";
import ImgUp from "web-asset/svg/regular/fi-rr-angle-up.svg";
import ImgDown from "web-asset/svg/regular/fi-rr-angle-down.svg";

interface Props<T> {
	items: GInputDropdownItem<T>[];
	value: T;
	onChange: FnBase<T>;
	imgSrc?: ImgSrc;
	className?: string;
	textAlign?: "text-center" | "text-left" | "text-right";
	label?: ReactNode;
}

export interface GInputDropdownItem<T> {
	value: T;
	label: ReactNode;
	imgSrc?: ImgSrc;
}

export default function <T>({
	items,
	imgSrc,
	value,
	onChange,
	className,
	textAlign = "text-center",
	label,
}: Readonly<Props<T>>) {
	if (items.length === 0) return "items is empty";
	const [idx, onChangeIdx] = useState(items.findIndex((i) => i.value === value));
	const [open, setOpen] = useState(false);
	const [button, setButton] = useState<Nullable<HTMLButtonElement>>();
	const [pos, setPos] = useState<Position>({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
	});

	if (idx === -1) return "invalid value";

	useEffect(() => {
		// todo resize 될때 사이즈
		if (!button) return;
		setPos({
			left: button.offsetLeft,
			top: button.offsetTop,
			width: button.offsetWidth,
			height: button.offsetHeight,
		});
	}, [button]);

	return (
		<div className={className}>
			{label && <label className="mb-[-5px]">{label}</label>}
			<div className="relative">
				<div className={fnCss.sum("group")}>
					<button
						type="button"
						ref={setButton}
						onClick={() => setOpen(!open)}
						className={fnCss.sum(
							"border-all h-[2.5rem] w-full",
							"rounded-md overflow-hidden",
							"flex items-center",
							"text-(--primary)",
							"group-hover:border-(--primary)",
							"outline-none",
							open ? "border-(--primary)" : "border-(--border)"
						)}>
						{imgSrc && (
							<div
								className={fnCss.sum(
									"border-right h-full flex items-center pl-2 pr-2 bg-(--primary)",
									open ? "border-(--primary)" : ""
								)}>
								<Image
									className={fnCss.sum("no-drag filter-(--primary-alt-filter)")}
									src={imgSrc}
									alt="icon"
									width={25}
									height={25}
								/>
							</div>
						)}
						<div
							className={fnCss.sum(
								"grow pl-2 pr-2 overflow-hidden",
								"group-hover:underline group-hover:font-bold",
								textAlign
							)}>
							{items[idx].label}
						</div>

						<Image
							src={open ? ImgUp : ImgDown}
							alt="arrow"
							height={16}
							width={16}
							className={fnCss.sum("filter-(--primary-filter) mr-2")}
						/>
					</button>
				</div>

				<div
					style={{minWidth: pos.width, top: pos.top + pos.height}}
					className={fnCss.sum(
						open ? "block" : "hidden",
						"z-5",
						"mt-2 p-2 bg-(--bg-modal) rounded-md shadow-2xl",
						"absolute",
						"border-all"
					)}>
					{items.map((value, i) => (
						<button
							type="button"
							className="block w-full"
							key={i}
							onClick={() => {
								onChangeIdx(i);
								onChange(value.value);
								setOpen(false);
							}}>
							<Label>{value}</Label>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

function Label<T>({children}: Readonly<{children: GInputDropdownItem<T>}>) {
	const {value, label, imgSrc} = children;
	return (
		<div className="group">
			<div className="rounded-sm flex p-2 group-hover:bg-(--primary) group-hover:text-(--primary-alt)">
				{imgSrc && (
					<Image
						src={imgSrc}
						alt="icon"
						width={20}
						height={20}
						className="mr-2 filter-(--text-2-filter) group-hover:filter-(--primary-alt-filter)"
					/>
				)}
				<div className={fnCss.sum("grow text-left group-hover:underline")}>{label}</div>
			</div>
		</div>
	);
}
