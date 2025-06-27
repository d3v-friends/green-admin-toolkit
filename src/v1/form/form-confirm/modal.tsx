import React, {ReactNode} from "react";
import {FormConfirmModalComponent} from "@app/v1/form/form-confirm";
import {ModalElement} from "@app/index";

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
			<Content>{content}</Content>
			<OkCancel
				ok={ok}
				cancel={cancel}
				onClickOk={onSubmit}
				onClickCancel={onCancel}
			/>
		</Body>
	);
}
