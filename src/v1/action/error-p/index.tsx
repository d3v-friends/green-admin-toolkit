import React from "react";
import {ActionState, fnCss} from "nextjs-tools";
import {ColorStyle} from "@app/index";

interface Props {
	state: ActionState<unknown, unknown>;
	printer?: Record<string, string>;
	className?: string;
	color?: ColorStyle;
}

export default function ({className = "", color = "danger", state, printer = {}}: Readonly<Props>) {
	if (!state.err) return null;

	let msg = state.err;
	for (const key in printer) {
		if (msg.includes(key)) {
			msg = printer[key];
		}
	}

	return <p className={fnCss.concat("text-center", `text-(--${color})`, className)}>{msg}</p>;
}
