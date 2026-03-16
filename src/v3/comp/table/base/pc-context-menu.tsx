"use client";
import React, {ReactNode, useEffect} from "react";
import {createRoot} from "react-dom/client";
import {FnVoid} from "nextjs-tools";

interface Props<T> {
	scrollY: number;
	clientX: number;
	clientY: number;
	children: (row: T, onClose: FnVoid) => ReactNode;
	row: T;
}

export default function <T>({clientX, clientY, children, scrollY, row}: Readonly<Props<T>>) {
	const container = document.createElement("div");
	document.body.appendChild(container);

	const root = createRoot(container);

	const onClose = () => {
		container.remove();
		root.unmount();
	};

	root.render(
		<Menu
			top={scrollY + clientY}
			left={clientX}
			onClose={onClose}>
			{children(row, onClose)}
		</Menu>
	);
}

interface MenuProps {
	children: ReactNode;
	top: number;
	left: number;
	onClose: FnVoid;
}

function Menu({children, top, left, onClose}: Readonly<MenuProps>) {
	useEffect(() => {
		window.addEventListener("click", onClose);
		return () => window.removeEventListener("click", onClose);
	}, []);

	return (
		<div
			className="absolute p-2 bg-(--bg-modal) rounded-md shadow-2xl"
			style={{top, left}}
			onClick={(e) => e.stopPropagation()}
			onContextMenu={(e) => e.preventDefault()}>
			{children}
		</div>
	);
}
