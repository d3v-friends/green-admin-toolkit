import React, {ReactNode} from "react";
import {FormConfirmModalComponent} from "@comp/form/form-confirm";
import {InputString, ModalElement} from "@app/index";
import ImgOTP from "web-asset/svg/regular/fi-rr-otp.svg";

interface Props {
	ok?: ReactNode;
	cancel?: ReactNode;
	title?: ReactNode;
	content?: ReactNode;
}

const {Body, Header, Content, OkCancel} = ModalElement;

export default function ({ok, cancel, title, content}: Readonly<Props>): FormConfirmModalComponent {
	return (onSubmit, onCancel) => (
		<Body className="min-w-[20rem]">
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
