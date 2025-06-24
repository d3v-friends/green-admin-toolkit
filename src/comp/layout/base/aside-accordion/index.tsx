"use client";
import React, {ReactNode, useState} from "react";
import {fnCss, ImgSrc} from "nextjs-tools";
import Image from "next/image";
import ImgUp from "web-asset/svg/solid/fi-sr-angle-up.svg";
import ImgDown from "web-asset/svg/solid/fi-sr-angle-down.svg";

interface Props {
	title?: ReactNode;
	group?: ReactNode;
	imgSrc?: ImgSrc;
	children?: ReactNode;
	isCollapsed?: boolean;
}

export default function ({title, group, imgSrc, children, isCollapsed = false}: Readonly<Props>) {
	const [open, setOpen] = useState(isCollapsed);

	return (
		<>
			{title && <div className="text-xs pl-[1rem] text-(--text-2) mb-2">{title}</div>}
			<button
				onClick={() => setOpen(!open)}
				className={fnCss.sum(
					"w-full flex items-center pl-[1rem] h-[3rem]",
					"aside-title no-drag",
					open ? "activate" : ""
				)}>
				{imgSrc && (
					<Image
						className="w-[1rem] mr-2"
						src={imgSrc}
						alt="icon"
						width={20}
						height={20}
					/>
				)}
				<div className="grow text-left pt-[1pt]">{group}</div>
				<div className="pr-[1rem]">
					<Image
						className="w-[0.8rem]"
						src={open ? ImgDown : ImgUp}
						alt="collapse"
						width={16}
						height={16}
					/>
				</div>
			</button>
			{open && children}
		</>
	);
}
