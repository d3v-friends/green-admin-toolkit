"use client";
import React, {ReactNode, useState} from "react";
import {ActionForm, FnBase, fnServerAction, FnVoid, Nullable} from "nextjs-tools";
import {ActionLoadingBackdrop} from "@app/index";

interface Props<INPUT> {
	children: FormConfirmChildren;
	beforeSubmit?: (payload: FormData) => boolean;
	action: (payload: FormData) => void;
	pending: boolean;
	form: ActionForm<INPUT>;
	onError?: FnBase<Error>;
}

export type FormConfirmChildren = (onSubmit: FnVoid) => ReactNode;

export default function <INPUT>({
	children,
	action,
	pending,
	beforeSubmit,
	form,
	onError = () => {},
}: Readonly<Props<INPUT>>) {
	const [formElement, setFormElement] = useState<Nullable<HTMLFormElement>>();

	const onSubmit = () => {
		if (pending) return;
		if (!formElement) return;

		const {err} = fnServerAction.forms.value(new FormData(formElement), form);
		if (err) {
			onError(new Error(err));
			return;
		}
		if (beforeSubmit && !beforeSubmit(new FormData(formElement))) {
			onError(new Error("beforeSubmit return false"));
			return;
		}
		formElement.requestSubmit();
	};

	return (
		<>
			<form
				action={action}
				ref={setFormElement}>
				{children(onSubmit)}
			</form>

			<ActionLoadingBackdrop pending={pending} />
		</>
	);
}
