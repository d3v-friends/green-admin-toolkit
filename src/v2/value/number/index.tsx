import React, {ReactNode} from "react";
import {fnStrings} from "nextjs-tools";

interface Props {
	children?: string | number;
	className?: string;
	symbol?: ReactNode;
}

export default function ({children = "", className = "text-right", symbol}: Readonly<Props>) {
	return (
		<div className={className}>
			{fnStrings.numberThousandSeparator(children)}
			{symbol && <span className="ml-1 text-(--text-2) text-xs">{symbol}</span>}
		</div>
	);
}
