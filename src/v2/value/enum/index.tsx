import React, {ReactNode} from "react";
import {concat} from "nextjs-tools";

interface Props<T extends string> {
	children: T;
	data: Record<string, {label: ReactNode; colorClassName?: string}>;
	className?: string;
}

export default function <T extends string>({children, data, className = ""}: Readonly<Props<T>>) {
	if (!data.hasOwnProperty(children)) return <>not_found_enum</>;
	const item = data[children];

	return (
		<div
			className={concat(
				"pl-2 pr-2 inline-flex rounded-md",
				item.colorClassName || "bg-(--primary) text-(--primary-alt)",
				className
			)}>
			{item.label}
		</div>
	);
}
