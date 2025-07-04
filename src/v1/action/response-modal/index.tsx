"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {ActionState, FnBase} from "nextjs-tools";
import ModalToggler from "../../modal/toggler";

interface Props<INPUT, RESPONSE> {
	children: ResponseModalChildren<RESPONSE>;
	state: ActionState<INPUT, RESPONSE>;
}

export type ResponseModalChildren<RESPONSE> = (onToggle: FnBase<boolean>, state: RESPONSE) => ReactNode;

export default function <INPUT, RESPONSE>({state, children}: Readonly<Props<INPUT, RESPONSE>>) {
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
	if (!state.response) return null;

	return (
		<ModalToggler
			open={open}
			onChange={setOpen}>
			{children(setOpen, state.response)}
		</ModalToggler>
	);
}
