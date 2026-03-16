"use client";
import React, {ReactNode, useEffect, useState} from "react";
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

	root.render(<Menu onClose={onClose}>{children(row, onClose)}</Menu>);
}

interface MenuProps {
	children: ReactNode;
	onClose: FnVoid;
}

const MenuStyle: Record<string, string> = {
	open: "table-mobile-context-menu translate-y-0",
	close: "table-mobile-context-menu translate-y-full",
};

const MenuContainerStyle: Record<string, string> = {
	open: "w-full h-full bg-(--color-shadow) backdrop-blur-xs transition-all duration-300",
	close: "w-full h-full bg-transparent backdrop-blur-none transition-all duration-300",
};

function Menu({children, onClose}: Readonly<MenuProps>) {
	const [isOpen, onChangeOpen] = useState(false);
	const getStyle = (v: boolean) => (v ? "open" : "close");

	useEffect(() => {
		onChangeOpen(true);
	}, []);

	const onCloseAnimation = () => {
		onChangeOpen(false);
		setTimeout(() => {
			onClose();
		}, 300);
	};

	return (
		<div
			className={MenuContainerStyle[getStyle(isOpen)]}
			onContextMenu={(e) => e.preventDefault()}
			onPointerDown={(e) => {
				if (e.pointerType !== "touch") return;
				onCloseAnimation();
			}}>
			<div
				autoFocus
				className={MenuStyle[isOpen ? "open" : "close"]}
				onPointerDown={(e) => e.stopPropagation()}
				onContextMenu={(e) => e.preventDefault()}>
				<div className="flex justify-center mb-1">
					<div className="table-mobile-context-menu-bar" />
				</div>
				{children}
			</div>
		</div>
	);
}
