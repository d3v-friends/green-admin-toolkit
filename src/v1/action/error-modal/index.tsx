"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {ActionState, FnBase} from "nextjs-tools";
import ModalToggler from "../../modal/toggler";

interface Props {
	children: ErrorModalComponent;
	state: ActionState<unknown, unknown>;
}

export type ErrorModalComponent = (onToggle: FnBase<boolean>, err: string) => ReactNode;

export default function ({state, children}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (!state) return;
		if (time === state.time) return;
		if (!state.err) return;

		setOpen(true);
		setTime(state.time);
	}, [state]);

	if (!state.err) return null;
	if (!children) return null;

	return (
		<ModalToggler
			open={open}
			onChange={setOpen}>
			{children(setOpen, state.err!)}
		</ModalToggler>
	);
}
