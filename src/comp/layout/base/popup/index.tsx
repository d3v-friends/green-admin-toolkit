"use client";
import React, {ReactNode, useState} from "react";
import ImgBurger from "web-asset/svg/solid/fi-sr-menu-burger.svg";
import Image from "next/image";
import {FnBase, fnCss} from "nextjs-tools";

interface Props {
	children?: AsideChildrenComponent;
}

export type AsideChildrenComponent = (onToggle: FnBase<boolean>) => ReactNode;

export default function ({children = () => ""}: Readonly<Props>) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(!open)}
				className="lg:hidden border-all rounded-md filter-(--text-2-filter) p-2">
				<Image
					className="no-drag"
					src={ImgBurger}
					alt="menu"
					width={28}
					height={28}
				/>
			</button>

			{open && (
				<div
					className={fnCss.sum(
						"fixed w-full h-full z-10 left-0 top-0",
						"backdrop-blur-xs backdrop-grayscale-40",
						"bg-[rgba(0,0,0,0.3)]"
					)}
					onClick={() => setOpen(false)}>
					<div
						onClick={(e) => e.stopPropagation()}
						className={fnCss.sum("fixed left-0 top-0", "w-4/5 h-full bg-(--bg-aside)", "shadow-xl")}>
						{children(setOpen)}
					</div>
				</div>
			)}
		</>
	);
}
