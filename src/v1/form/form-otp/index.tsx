"use client";
import React, {ReactNode, useRef, useState} from "react";
import {ActionForm, FnBase, fnServerAction} from "nextjs-tools";
import {ActionLoadingBackdrop, InputString, ModalElement, ModalToggler} from "../..";
import {ModalBasicProps} from "../../modal/basic";
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
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit = () => {
		if (pending) return;
		if (!formRef.current) return;
		if (beforeSubmit && !beforeSubmit(new FormData(formRef.current))) return;
		const {err} = fnServerAction.forms.value(new FormData(formRef.current), form);
		if (err) return;
		formRef.current.requestSubmit();
		setOpen(false);
	};

	const onCancel = () => {
		setOpen(false);
	};

	const onToggle = (v: boolean) => {
		if (!formRef.current) return;
		if (!formRef.current.reportValidity()) return;
		setOpen(v);
	};

	return (
		<>
			<form
				action={action}
				ref={formRef}>
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
