"use client";
import React, {ReactNode} from "react";
import {usePathname} from "next/navigation";
import {fnCss} from "nextjs-tools";
import Link from "next/link";

interface Props {
	items: PanelPagerData[];
}

export type PanelPagerData = {
	label: ReactNode;
	href: string;
};

export default function ({items}: Readonly<Props>) {
	const pathname = usePathname();
	let idx = items.findIndex((item) => pathname.startsWith(item.href));
	if (idx === -1) idx = 0;

	return (
		<div className="flex">
			{items.map((item, i) => (
				<Link
					href={item.href}
					key={i}
					className={fnCss.sum(
						"rounded-tr-md rounded-tl-md bg-(--bg-panel) p-3 lg:pl-4 lg:pr-4",
						"border-right border-bottom",
						"hover:underline",
						idx === i
							? "font-bold bg-(--primary) text-(--primary-alt) hover:brightness-120"
							: "hover:font-bold"
					)}>
					{item.label}
				</Link>
			))}
		</div>
	);
}
