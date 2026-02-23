"use client";
import React, {ReactNode} from "react";

interface Props {
	children: ReactNode;
}

export default function ({children}: Readonly<Partial<Props>>) {
	return (
		<div
			className="bg-(--bg-modal) shadow-2xl rounded-md"
			onClick={(e) => {
				e.stopPropagation();
			}}>
			{children}
		</div>
	);
}
