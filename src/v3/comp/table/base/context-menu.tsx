"use client";
import React, {ReactNode} from "react";
import {FnVoid} from "nextjs-tools";

interface Props {
	items: ContextMenuItem[];
}

export type ContextMenuItem = {
	label: ReactNode;
	onClick: FnVoid;
};

export default function ({items}: Readonly<Props>) {
	return (
		<div className="min-w-30">
			{items.map((item, key) => (
				<button
					className="w-full hover:bg-(--color-table-hover) p-2"
					key={key}
					onClick={item.onClick}>
					{item.label}
				</button>
			))}
		</div>
	);
}
