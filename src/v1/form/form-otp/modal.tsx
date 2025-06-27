import React, {ReactNode} from "react";
import {FormConfirmModalComponent} from "@app/v1/form/form-confirm";
import {InputString, ModalElement} from "@app/index";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";

interface Props {
	ok?: ReactNode;
	cancel?: ReactNode;
	title?: ReactNode;
	content?: ReactNode;
	className?: string;
}

const {Body, Header, Content, OkCancel} = ModalElement;

export default function ({
	ok,
	cancel,
	title,
	content,
	className = "w-4/5 lg:w-[20rem]",
}: Readonly<Props>): FormConfirmModalComponent {
	return (onSubmit, onCancel) => (
		<Body className={className}>
			{title && <Header disableCloseButton>{title}</Header>}
			<Content>
				{content && <div>{content}</div>}
				<InputString
					imgSrc={ImgOTP}
					name="otp"
					regexp="^[0-9]{6}$"
					invalidMessage="OTP 를 확인하여 주십시오"
				/>
			</Content>
			<OkCancel
				ok={ok}
				cancel={cancel}
				onClickOk={onSubmit}
				onClickCancel={onCancel}
			/>
		</Body>
	);
}
