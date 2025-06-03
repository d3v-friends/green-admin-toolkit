import React from "react";
import {ChildNode, fnCss} from "nextjs-tools";

interface Props {
	className?: string;
	children?: ChildNode;
}

export default function ({children, className = ""}: Readonly<Props>) {
	return <div className={fnCss.sum("w-screen h-screen flex items-center justify-center", className)}>{children}</div>;
}
