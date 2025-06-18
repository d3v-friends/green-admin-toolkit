import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props<T> {
	value: T;
	menu: ContextMenu<T>[];
	top: number;
	left: number;
}

export type ContextMenu<T> = {
	label: ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, row: T) => void;
	borderTop?: boolean;
};

export default function <T>({menu, top, left, value}: Readonly<Props<T>>) {
	return (
		<div
			className="fixed z-5 bg-(--bg-panel) shadow-2xl rounded-md p-2 shadow-(--color-shadow) min-w-[8rem] border-all"
			style={{top, left}}>
			{menu.map(({label, onClick, borderTop}, i) => (
				<button
					key={i}
					type="button"
					className={fnCss.sum(
						"p-2 block hover:bg-(--primary) hover:text-(--primary-alt) w-full",
						"text-left",
						borderTop ? "border-top" : ""
					)}
					onMouseUp={(e) => {
						onClick(e, value);
					}}>
					{label}
				</button>
			))}
		</div>
	);
}
