"use client";
import React, {useEffect, useState} from "react";
import {ActionState} from "nextjs-tools";
import {useRouter} from "next/navigation";

interface Props {
	state: ActionState<unknown, unknown>;
	href: string;
}

export default function ({state, href}: Readonly<Props>) {
	const [time, setTime] = useState(0);
	const router = useRouter();

	useEffect(() => {
		if (!state) return;
		if (time === state.time) return;
		setTime(state.time);
		router.push(href);
	}, [state]);

	if (state.err) return null;
	if (!state.response) return null;
	return <></>;
}
