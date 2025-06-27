"use client";
import React, {ReactNode, TouchEventHandler, useEffect, useState} from "react";
import {FnVoid} from "nextjs-tools";

interface Props {
	children?: ReactNode;
	onRightClick: TouchEventHandler<HTMLDivElement>;
	onCancel?: FnVoid;
}

export default function ({children, onRightClick, onCancel = () => {}}: Readonly<Props>) {
	const [start, setStart] = useState(0);

	useEffect(() => {
		const onTouchmove = () => {
			onCancel();
		};
		window.addEventListener("touchmove", onTouchmove);
		return () => {
			window.removeEventListener("touchmove", onTouchmove);
		};
	}, []);

	return (
		<div
			onTouchStart={(e) => {
				setStart(Date.now());
			}}
			onTouchEnd={(e) => {
				const duration = Date.now() - start;
				if (!(2000 < duration && duration < 5000)) return;
				onRightClick(e);
			}}
			onTouchMove={(e) => {
				setStart(0);
				onCancel();
			}}
			style={{
				userSelect: "none",
				WebkitUserSelect: "none",
				WebkitTouchCallout: "none",
			}}>
			{children}
		</div>
	);
}
