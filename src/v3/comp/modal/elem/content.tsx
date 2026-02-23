import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	className?: string;
	children: ReactNode;
}

export default function ({children, className = ""}: Readonly<Partial<Props>>) {
	return <div className={fnCss.sum(className, "p-2 lg:pl-4 lg:pr-4", "min-w-80")}>{children}</div>;
}
