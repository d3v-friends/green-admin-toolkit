"use client";
import {useRouter} from "next/navigation";
import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	children: ReactNode;
	href: string;
	className?: string;
}

export default function ({children, href, className = ""}: Readonly<Props>) {
	const router = useRouter();
	const onClick: React.MouseEventHandler<HTMLTableRowElement> = (e) => {
		e.stopPropagation();
		e.preventDefault();
		switch (e.button) {
			case 0:
				// e.button = 0 : left click
				router.push(href);
				return;
			case 1:
				// e.button = 1 : center click
				window.open(href, "_blank");
				return;
		}
	};
	return (
		<tr
			className={fnCss.sum("h-14", className)}
			onClick={onClick}
			onMouseDown={onClick}>
			{children}
		</tr>
	);
}
