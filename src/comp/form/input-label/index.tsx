"use client";
import React, {ReactNode} from "react";
import {fnCss, ImgSrc} from "nextjs-tools";
import Image from "next/image";

interface Props {
	imgSrc?: ImgSrc;
	className?: string;
	children?: ReactNode;
	label?: ReactNode;
}

export default function ({imgSrc, className = "", children, label}: Readonly<Props>) {
	return (
		<>
			{label && <p className="mb-[-5px]">{label}</p>}
			<div className={fnCss.sum("flex items-center border-all rounded-md h-[2.5rem] overflow-hidden", className)}>
				{imgSrc && (
					<div className={fnCss.sum("border-right h-full flex pl-2 pr-2 bg-(--primary)")}>
						<Image
							className={fnCss.sum("no-drag filter-(--primary-alt-filter)")}
							src={imgSrc}
							alt="icon"
							width={25}
							height={25}
						/>
					</div>
				)}
				<div className="grow pl-2 pr-2">{children}</div>
			</div>
			<div className="min-h-[1.5rem]"></div>
		</>
	);
}
