"use client";
import React, {ReactNode, useState} from "react";
import {ActionForm, FnBase, fnServerAction, Nullable} from "nextjs-tools";
import {ActionLoadingBackdrop, InputString, ModalElement, ModalToggler} from "@root";
import {ModalBasicProps} from "@v1/modal/basic";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";

interface Props<INPUT> extends Pick<ModalBasicProps, "disableEscapeKey" | "disableCloseButton" | "header"> {
	children: FormOtpChildren;
	beforeSubmit?: (payload: FormData) => boolean;
	action: (payload: FormData) => void;
	pending: boolean;
	otpContent?: ReactNode;
	form: ActionForm<INPUT>;
	modalClassName?: string;
}

export type FormOtpChildren = (onToggle: FnBase<boolean>) => ReactNode;
const {Body, Header, Content, OkCancel} = ModalElement;

export default function <INPUT>({
	children,
	action,
	pending,
	beforeSubmit,
	disableCloseButton,
	disableEscapeKey,
	header = "OTP를 입력하여 주십시오",
	otpContent,
	form,
	modalClassName = "w-[20rem]",
}: Readonly<Props<INPUT>>) {
	const [open, setOpen] = useState(false);
	const [formElement, setFormElement] = useState<Nullable<HTMLFormElement>>();

	const onSubmit = () => {
		if (pending) return;
		if (!formElement) return;
		if (beforeSubmit && !beforeSubmit(new FormData(formElement))) return;
		const {err} = fnServerAction.forms.value(new FormData(formElement), form);
		if (err) return;
		formElement.requestSubmit();
		setOpen(false);
	};

	const onCancel = () => {
		setOpen(false);
	};

	const onToggle = (v: boolean) => {
		if (!formElement) return;
		if (!formElement.reportValidity()) return;
		setOpen(v);
	};

	return (
		<>
			<form
				action={action}
				ref={setFormElement}>
				{children(onToggle)}
				{open && (
					<ModalToggler
						open={open}
						onChange={setOpen}
						{...{disableEscapeKey, disableCloseButton, header}}>
						<Body className={modalClassName}>
							<Header disableCloseButton>{header}</Header>
							<Content>
								<div className="mb-4">{otpContent}</div>
								<InputString
									imgSrc={ImgOTP}
									name="otp"
									regexp="^[0-9]{6}$"
									invalidMessage="OTP 를 확인하여 주십시오"
									onKeyEnter={onSubmit}
								/>
							</Content>
							<OkCancel
								ok="확인"
								cancel="취소"
								onClickOk={onSubmit}
								onClickCancel={onCancel}
							/>
						</Body>
					</ModalToggler>
				)}
			</form>

			<ActionLoadingBackdrop pending={pending} />
		</>
	);
}
