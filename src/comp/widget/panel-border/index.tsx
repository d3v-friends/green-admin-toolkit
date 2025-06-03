import React from "react";
import {ChildNode, fnCss} from "nextjs-tools";

interface Props {
	title?: ChildNode;
	children?: ChildNode;
	className?: string;
	classNameTitle?: string;
	classNameContent?: string;
}

export default function ({
	title,
	children,
	classNameTitle = "",
	classNameContent = "",
	className = "",
}: Readonly<Props>) {
	const padding = "p-2 lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2";
	return (
		<div className={fnCss.sum("border-all rounded-md", className)}>
			{title && (
				<div className={fnCss.sum("border-bottom text-(--text-3) font-semibold", padding, classNameTitle)}>
					{title}
				</div>
			)}
			<div className={fnCss.sum("text-(--text-2)", padding, classNameContent)}>{children}</div>
		</div>
	);
}
