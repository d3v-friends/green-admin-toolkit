"use client";
import {useServerAction} from "nextjs-tools";
import Action from "./_action";
import Form from "./_form";

interface Props {}

export default function ({}: Readonly<Props>) {
	const [state, action, pending] = useServerAction(Action, Form);
	return null;
}
