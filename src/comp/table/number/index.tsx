import React from "react";
import {fnStrings} from "nextjs-tools";

interface Props {
	children?: string | number;
	className?: string;
}

export default function ({children = "", className = "text-right"}: Readonly<Props>) {
	return <div className={className}>{fnStrings.numberThousandSeparator(children)}</div>;
}
