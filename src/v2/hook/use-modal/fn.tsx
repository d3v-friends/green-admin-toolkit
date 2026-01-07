"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {ModalBase, ModalElement} from "../../../v1";

type OkProps = {
	title?: ReactNode;
	content?: ReactNode;
	ok?: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

function ok({title, content, ok, onClick}: OkProps): ReactNode {
	return (
		<ModalBase>
			<ModalElement.Body>
				{title && <ModalElement.Header disableCloseButton>{title}</ModalElement.Header>}
				<ModalElement.Content>{content}</ModalElement.Content>
				<ModalElement.Ok onClick={onClick}>{ok}</ModalElement.Ok>
			</ModalElement.Body>
		</ModalBase>
	);
}

type OkCancelProps = {
	title?: ReactNode;
	content?: ReactNode;
	disableCloseButton?: boolean;
	ok?: ReactNode;
	cancel?: ReactNode;
	onClickOk: MouseEventHandler<HTMLButtonElement>;
	onClickCancel: MouseEventHandler<HTMLButtonElement>;
};

function okCancel({title, content, ok, cancel, onClickOk, onClickCancel}: OkCancelProps): ReactNode {
	return (
		<ModalBase>
			<ModalElement.Body>
				{title && <ModalElement.Header disableCloseButton>{title}</ModalElement.Header>}
				<ModalElement.Content>{content}</ModalElement.Content>
				<ModalElement.OkCancel
					ok={ok}
					cancel={cancel}
					onClickOk={onClickOk}
					onClickCancel={onClickCancel}
				/>
			</ModalElement.Body>
		</ModalBase>
	);
}

export default {ok, okCancel};
