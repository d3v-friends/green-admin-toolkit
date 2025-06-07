"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {ActionState, FnBase} from "nextjs-tools";
import {ModalToggler} from "@app/index";

interface Props {
	children: ResponseModalChildren;
	state: ActionState<unknown, unknown>;
}

export type ResponseModalChildren = (onToggle: FnBase<boolean>) => ReactNode;

export default function ({state, children}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (!state) return;
		if (time === state.time) return;

		setOpen(true);
		setTime(state.time);
	}, [state]);

	if (state.err) return null;
	if (!children) return null;

	return (
		<ModalToggler
			open={open}
			onChange={setOpen}>
			{children(setOpen)}
		</ModalToggler>
	);
}
