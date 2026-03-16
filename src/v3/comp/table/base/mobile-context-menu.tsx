"use client";
import React, {ReactNode} from "react";
import {FnVoid} from "nextjs-tools";
import {createRoot} from "react-dom/client";

interface Props<T> {
	children: (row: T, onClose: FnVoid) => ReactNode;
	row: T;
}

export default function <T>({children, row}: Readonly<Props<T>>) {
	document.body.style.overflow = "hidden";

	const container = document.createElement("div");
	container.className = "absolute top-0 left-0 w-screen h-screen bg-(--color-shadow) backdrop-blur-xs";
	document.body.appendChild(container);

	const root = createRoot(container);

	const onClose = () => {
		document.body.style.overflow = "unset";
		container.remove();
		root.unmount();
	};

	root.render(
		<div
			className="w-full h-full"
			onContextMenu={(e) => e.preventDefault()}
			onPointerDown={(e) => {
				if (e.pointerType !== "touch") return;
				onClose();
			}}>
			<div
				className="absolute bottom-0 pl-5 pr-5 pt-2 pb-10 bg-(--bg-modal) rounded-tr-xl rounded-tl-xl w-full"
				onPointerDown={(e) => e.stopPropagation()}
				onContextMenu={(e) => e.preventDefault()}>
				<div className="flex justify-center mb-1">
					<div className="h-1 w-25 rounded-full bg-(--color-shadow)" />
				</div>
				{children(row, onClose)}
			</div>
		</div>
	);
}
