import React from "react";
import {ChildNode} from "nextjs-tools";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface Props {
	imgSrc?: string | StaticImageData;
	children?: ChildNode;
	href?: string;
}

export default function ({imgSrc, children, href = "/"}: Readonly<Props>) {
	return (
		<Link
			href={href}
			className="h-[3.5rem] overflow-hidden flex items-center font-bold text-xl">
			{imgSrc && (
				<Image
					className="m-3"
					src={imgSrc}
					alt="logo"
					width={40}
					height={40}
				/>
			)}
			{children}
		</Link>
	);
}
