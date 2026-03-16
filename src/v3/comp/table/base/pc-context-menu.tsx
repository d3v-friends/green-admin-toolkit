"use client";
import React, {ReactNode} from "react";
import {createRoot} from "react-dom/client";
import {FnVoid} from "nextjs-tools";

interface Props<T> {
	clientX: number;
	clientY: number;
	children: (row: T, onClose: FnVoid) => ReactNode;
	row: T;
}

export default function <T>({clientX, clientY, children, row}: Readonly<Props<T>>) {
	const container = document.createElement("div");
	container.className = "absolute top-0 left-0 w-full h-full";
	document.body.appendChild(container);

	const root = createRoot(container);

	const onClose = () => {
		container.remove();
		root.unmount();
	};

	root.render(
		<div
			className="w-full h-full"
			onContextMenu={(e) => e.preventDefault()}
			onClick={onClose}>
			<div
				className="absolute p-2 bg-(--bg-modal) rounded-md shadow-2xl"
				style={{top: clientY, left: clientX}}
				onClick={(e) => e.stopPropagation()}
				onContextMenu={(e) => e.preventDefault()}>
				{children(row, onClose)}
			</div>
		</div>
	);
}
