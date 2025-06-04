"use client";
import React, {useState} from "react";
import {ChildNode, fnCss, ImgSrc} from "nextjs-tools";
import ImgUp from "web-asset/svg/solid/fi-sr-angle-up.svg";
import ImgDown from "web-asset/svg/solid/fi-sr-angle-down.svg";
import Image from "next/image";

interface Props {
	title?: ChildNode;
	children?: ChildNode;
	className?: string;
	classNameTitle?: string;
	classNameContent?: string;
	collapsed?: boolean;
	imgSrc?: ImgSrc;
}

export default function ({
	title,
	children,
	classNameTitle = "p-2 lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2",
	classNameContent = "p-2 lg:p-4",
	className = "",
	collapsed = true,
	imgSrc,
}: Readonly<Props>) {
	const [open, setOpen] = useState(collapsed);

	return (
		<div className={fnCss.sum("border-all rounded-md", className)}>
			<button
				className={fnCss.sum(
					"border-bottom text-(--text-3) font-semibold",
					classNameTitle,
					"flex items-center w-full",
					open ? "" : "bg-(--text-1)"
				)}
				onClick={() => setOpen(!open)}>
				{imgSrc && (
					<Image
						className="filter-(--text-1-filter) w-[0.8rem] mr-1"
						src={imgSrc}
						alt="icon"
						width={20}
						height={20}
					/>
				)}
				{title}
				<div className="grow flex justify-end no-drag">
					<Image
						className="filter-(--text-3-filter)"
						src={open ? ImgDown : ImgUp}
						alt="open"
						width={16}
						height={16}
					/>
				</div>
			</button>
			{open && <div className={fnCss.sum("text-(--text-2)", classNameContent)}>{children}</div>}
		</div>
	);
}
