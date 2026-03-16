"use client";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import {FnVoid} from "nextjs-tools";
import {createRoot} from "react-dom/client";

interface Props<T> {
	children: (row: T, onClose: FnVoid) => ReactNode;
	row: T;
}

export default function <T>({children, row}: Readonly<Props<T>>) {
	document.body.style.overflow = "hidden";

	const container = document.createElement("div");
	container.className = "table-mobile-context-menu-container";
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
			<Menu>{children(row, onClose)}</Menu>
		</div>
	);
}

interface MenuProps {
	children: ReactNode;
}

const MenuStyle: Record<string, string> = {
	open: "table-mobile-context-menu translate-y-0",
	close: "table-mobile-context-menu translate-y-full",
};

function Menu({children}: Readonly<MenuProps>) {
	const contRef = useRef<HTMLDivElement>(null);
	const [isOpen, onChangeOpen] = useState(false);
	useEffect(() => {
		onChangeOpen(true);
	}, []);

	return (
		<div
			ref={contRef}
			autoFocus
			className={MenuStyle[isOpen ? "open" : "close"]}
			onPointerDown={(e) => e.stopPropagation()}
			onContextMenu={(e) => e.preventDefault()}>
			<div className="flex justify-center mb-1">
				<div className="table-mobile-context-menu-bar" />
			</div>
			{children}
		</div>
	);
}
