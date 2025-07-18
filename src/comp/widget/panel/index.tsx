import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	className?: string;
	children?: ReactNode;
}

export default function ({children, className = ""}: Readonly<Props>) {
	return (
		<div
			className={fnCss.sum(
				"rounded-md bg-(--bg-panel) p-2 lg:p-4 shadow-2xl shadow-[rgba(0,0,0,0.02)] mb-2 lg:mb-4",
				className
			)}>
			{children}
		</div>
	);
}
