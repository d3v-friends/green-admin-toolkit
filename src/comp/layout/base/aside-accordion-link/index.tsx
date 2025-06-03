"use client";
import React from "react";
import {ChildNode, fnCss, ImgSrc} from "nextjs-tools";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import ImgDot from "web-asset/svg/regular/fi-rr-bullet.svg";

interface Props {
	href: string;
	prefix?: string;
	children?: ChildNode;
	imgSrc?: ImgSrc;
	alert?: number;
}

export default function ({href, prefix = "#", imgSrc = ImgDot, children, alert}: Readonly<Props>) {
	const pathname = usePathname();
	let active = pathname.includes(prefix);

	return (
		<Link
			className={fnCss.sum("flex items-center h-[2.5rem] pl-[2rem]", "aside-item", active ? "activate" : "")}
			href={href}>
			{imgSrc && (
				<Image
					className="mr-1"
					src={imgSrc}
					alt="icon"
					width={20}
					height={20}
				/>
			)}
			<div className="relative">
				{children}
				{alert && (
					<div
						className={fnCss.sum(
							"absolute right-[-1rem] top-[-0.5rem] w-[1rem] h-[1rem] rounded-full",
							"bg-(--danger) text-[0.6rem] text-(--danger-text) font-bold flex items-center justify-center"
						)}>
						{alert}
					</div>
				)}
			</div>
		</Link>
	);
}
