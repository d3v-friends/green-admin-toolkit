"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {Button, ModalToggler} from "@app/index";
import {fnCss, Nullable} from "nextjs-tools";

interface Props {
	value: Nullable<AlertModalValue>;
	className?: string;
}

export type AlertModalValue = {
	time: number;
	content: ReactNode;
};

export default function ({value, className = ""}: Readonly<Props>) {
	const [time, setTime] = useState(0);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!value) return;
		if (time === value.time) return;
		setOpen(true);
		setTime(value.time);
	}, [value]);

	if (!open) return null;
	if (!value) return null;
	if (!value.content) return null;

	return (
		<ModalToggler
			backdropClassName=" "
			open={open}
			onChange={setOpen}>
			<div
				className={fnCss.sum(
					"w-[20rem] lg:w-[30rem] bg-(--bg-panel) p-2 lg:p-4 rounded-md shadow-2xl shadow-[rgba(0,0,0,0.07)]",
					className
				)}>
				{value.content}

				<div className="pt-2 lg:pt-4 text-right">
					<Button
						className="w-20"
						style="outlined"
						onClick={() => setOpen(false)}>
						확인
					</Button>
				</div>
			</div>
		</ModalToggler>
	);
}
