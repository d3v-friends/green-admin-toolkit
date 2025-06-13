"use client";
import {fnCss} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode} from "react";
import Image from "next/image";
import ImgLeft from "web-asset/svg/regular/fi-rr-angle-left.svg";
import ImgRight from "web-asset/svg/regular/fi-rr-angle-right.svg";
import ImgDot from "web-asset/svg/regular/fi-rr-menu-dots.svg";

interface Props {
	buttons?: number;
	page: number;
	size: number;
	total: number;
	onClick: OnPageMouseEvent;
	className?: string;
}

export type OnPageMouseEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;

export default function ({buttons = 3, page, size, total, onClick, className = "lg:pt-4 lg:pb-4 pt-2 pb-2"}: Props) {
	if (total === 0) return null;
	if (size === 0) return null;

	const last = Math.floor(total / size) + (0 < total % size ? 1 : 0) - 1;
	const left: number[] = [];
	const right: number[] = [];

	for (let i = 1; i <= buttons; i++) {
		if (0 <= page - i) {
			left.push(page - i);
		}

		if (page + i <= last) {
			right.push(page + i);
		}
	}

	const items = [...left, page, ...right].sort((a, b) => a - b);
	const hasPrev = items.findIndex((v) => v === 0) === -1;
	const hasNext = items.findIndex((v) => v === last) === -1;

	return (
		<div className={fnCss.sum("flex justify-center items-center", className)}>
			<Item
				hover
				activate={false}
				disabled={page === 0}
				onMouseUp={(e) => {
					if (page === 0) return;
					onClick(e, page - 1);
				}}>
				<Image
					className="w-[0.7rem] filter-(--text-3-filter)"
					src={ImgLeft}
					alt="prev"
					width={20}
					height={20}
				/>
			</Item>

			{hasPrev && (
				<>
					<Item
						hover
						activate={false}
						onMouseUp={(e) => {
							onClick(e, 0);
						}}>
						1
					</Item>
					<Dot />
				</>
			)}

			{items.map((i, key) => (
				<Item
					key={key}
					hover
					activate={page === i}
					onMouseUp={(e) => {
						if (page === i) return;
						onClick(e, i);
					}}>
					{i + 1}
				</Item>
			))}

			{hasNext && (
				<>
					<Dot />
					<Item
						hover
						activate={false}
						onMouseUp={(e) => {
							onClick(e, last);
						}}>
						{last + 1}
					</Item>
				</>
			)}

			<Item
				hover
				activate={false}
				disabled={page === 0}
				onMouseUp={(e) => {
					if (page === last) return;
					onClick(e, page + 1);
				}}>
				<Image
					className="w-[0.7rem] filter-(--text-3-filter)"
					src={ImgRight}
					alt="next"
					width={20}
					height={20}
				/>
			</Item>
		</div>
	);
}

function Item({
	children,
	className = "",
	activate = false,
	hover = false,
	disabled = false,
	onMouseUp,
}: Readonly<{
	children?: ReactNode;
	className?: string;
	activate?: boolean;
	hover?: boolean;
	disabled?: boolean;
	onMouseUp?: MouseEventHandler<HTMLButtonElement>;
}>) {
	return (
		<button
			disabled={disabled}
			className={fnCss.sum(
				"w-[2rem] h-[2rem] flex items-center justify-center rounded-md border-[1px] border-[transparent] text-md",
				"mr-1 ml-1",
				className,
				activate ? "text-(--primary) font-bold" : "text-(--text-2)",
				hover ? "hover:border-(--primary) hover:text-(--primary-alt) hover:filter-(--primary-filter)" : "",
				disabled ? "cursor-not-allowed" : ""
			)}
			onMouseUp={onMouseUp}>
			{children}
		</button>
	);
}

function Dot() {
	return (
		<Image
			className="w-[0.7rem] filter-(--text-3-filter) ml-1 mr-1"
			src={ImgDot}
			alt="dot"
			width={20}
			height={20}
		/>
	);
}
