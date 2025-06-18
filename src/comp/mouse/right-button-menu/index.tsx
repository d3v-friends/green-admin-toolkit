"use client";
import React, {MouseEventHandler, ReactNode, useEffect, useRef, useState} from "react";
import {fnCss} from "nextjs-tools";
import {TouchRightClick} from "@app/index";

interface Props {
	children?: ReactNode;
	className?: string;
	menu: RightButtonMenuItem[];
}

export type RightButtonMenuItem = {
	label: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
	borderTop?: boolean;
};

// 목표
// 추후 2단 메뉴 추가하기
export default function ({className, children, menu}: Readonly<Props>) {
	const [open, setOpen] = useState(true);
	const [coordinate, setCoordinate] = useState<{top: number; left: number}>({
		top: 0,
		left: 0,
	});
	const refSetOpen = useRef(setOpen);

	useEffect(() => {
		const onMouseUp = (e: MouseEvent) => {
			if (e.button !== 0) return;
			refSetOpen.current(false);
		};

		const onScroll = () => {
			refSetOpen.current(false);
		};

		window.addEventListener("mouseup", onMouseUp);
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<>
			<TouchRightClick
				onRightClick={() => setOpen(true)}
				onCancel={() => setOpen(false)}>
				<div
					className={className}
					onContextMenu={(e) => {
						e.preventDefault();
						setCoordinate({
							top: e.clientY,
							left: e.clientX,
						});
						setOpen(true);
					}}>
					{children}
				</div>
			</TouchRightClick>

			{open && (
				<div
					className="fixed z-5 bg-(--bg-panel) shadow-2xl rounded-md p-1 shadow-(--color-shadow) min-w-[8rem]"
					style={coordinate}>
					{menu.map(({label, onClick, borderTop}, i) => (
						<button
							key={i}
							className={fnCss.sum(
								"p-2 block hover:bg-(--primary) hover:text-(--primary-alt) w-full",
								"text-left",
								borderTop ? "border-top" : ""
							)}
							onMouseUp={(e) => {
								onClick(e);
							}}>
							{label}
						</button>
					))}
				</div>
			)}
		</>
	);
}
