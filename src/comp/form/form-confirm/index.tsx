"use client";
import React, {ReactNode, useState} from "react";
import {ActionForm, FnBase, fnServerAction, FnVoid, Nullable} from "nextjs-tools";
import {ActionLoadingBackdrop, ModalToggler} from "@app/index";
import {ModalBasicProps} from "@comp/modal/basic";

interface Props<INPUT> extends Pick<ModalBasicProps, "disableEscapeKey" | "disableCloseButton" | "header"> {
	children: FormConfirmChildren;
	confirmModal: FormConfirmModalComponent;
	beforeSubmit?: (payload: FormData) => boolean;
	action: (payload: FormData) => void;
	pending: boolean;
	form: ActionForm<INPUT>;
	checkBeforeOpen?: boolean;
}

export type FormConfirmChildren = (onToggle: FnBase<boolean>) => ReactNode;
export type FormConfirmModalComponent = (onSubmit: FnVoid, onCancel: FnVoid) => ReactNode;

export default function <INPUT>({
	children,
	confirmModal,
	action,
	pending,
	beforeSubmit,
	disableCloseButton,
	disableEscapeKey,
	header,
	form,
	checkBeforeOpen = false,
}: Readonly<Props<INPUT>>) {
	const [open, setOpen] = useState(false);
	const [formElement, setFormElement] = useState<Nullable<HTMLFormElement>>();

	const onSubmit = () => {
		if (pending) return;
		if (!formElement) return;
		if (beforeSubmit && !beforeSubmit(new FormData(formElement))) {
			console.error("beforeSubmit return false");
			return;
		}
		const {err} = fnServerAction.forms.value(new FormData(formElement), form);
		if (err) {
			console.error(err);
			return;
		}

		formElement.requestSubmit();
		setOpen(false);
	};

	const onCancel = () => {
		setOpen(false);
	};

	const onToggle = (v: boolean) => {
		if (!formElement) return;
		if (!formElement.reportValidity()) return;
		if (checkBeforeOpen) {
			const {err} = fnServerAction.forms.value(new FormData(formElement), form);
			if (err) return;
		}
		setOpen(v);
	};

	return (
		<>
			<form
				action={action}
				ref={setFormElement}>
				{children(onToggle)}
			</form>

			{open && (
				<ModalToggler
					open={open}
					onChange={setOpen}
					{...{disableEscapeKey, disableCloseButton, header}}>
					{confirmModal(onSubmit, onCancel)}
				</ModalToggler>
			)}

			<ActionLoadingBackdrop pending={pending} />
		</>
	);
}
