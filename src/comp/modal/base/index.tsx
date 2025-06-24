"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLDivElement>;
	className?: string;
	backdropClassName?: string;
}

Component.__isStatic = true;

export default function Component({
	children,
	onClick,
	className = "flex items-center justify-center",
	backdropClassName = "bg-[rgba(0,0,0,0.3)] backdrop-grayscale-40",
}: Readonly<Props>) {
	if (!children) return null;
	return (
		<div
			onClick={onClick}
			className={fnCss.concat(
				"fixed w-screen h-screen z-10 left-0 top-0",
				"backdrop-blur-xs",
				backdropClassName,
				className
			)}>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}>
				{children}
			</div>
		</div>
	);
}
