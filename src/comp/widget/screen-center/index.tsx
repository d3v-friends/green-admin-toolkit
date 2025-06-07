import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	className?: string;
	children?: ReactNode;
}

export default function ({children, className = ""}: Readonly<Props>) {
	return <div className={fnCss.sum("w-screen h-screen flex items-center justify-center", className)}>{children}</div>;
}
