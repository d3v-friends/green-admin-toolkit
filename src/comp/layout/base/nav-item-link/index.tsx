import React, {ReactNode} from "react";
import Link from "next/link";
import {fnCss, ImgSrc} from "nextjs-tools";

import Image from "next/image";

interface Props {
	href: string;
	children?: ReactNode;
	imgSrc?: ImgSrc;
	style?: "normal" | "alt";
	alert?: number;
	className?: string;
}

export default function ({href, children, imgSrc, style = "normal", alert, className = ""}: Readonly<Props>) {
	return (
		<Link
			className={fnCss.sum(
				"relative nav-item break-keep p-2 rounded-sm font-bold flex items-center",
				className,
				style
			)}
			href={href}>
			{imgSrc && (
				<Image
					className="mr-1 w-[0.9rem]"
					src={imgSrc}
					alt="icon"
					width={20}
					height={20}
				/>
			)}
			{children}
			{alert && (
				<div
					className={fnCss.sum(
						"absolute right-[-0.3rem] top-[-0.3rem] bg-(--danger) rounded-full ",
						"flex items-center justify-center",
						"text-[0.6rem] text-(--danger-text)",
						"w-[1rem] h-[1rem]"
					)}>
					{alert}
				</div>
			)}
		</Link>
	);
}
