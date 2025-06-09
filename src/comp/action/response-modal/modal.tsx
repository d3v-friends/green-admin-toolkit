import React, {ReactNode} from "react";
import {ModalElement} from "@app/index";
import {ResponseModalChildren} from "@comp/action/response-modal/index";

interface Props {
	ok?: ReactNode;
	title?: ReactNode;
	content?: ReactNode;
}

const {Body, Header, Content, Ok} = ModalElement;

export default function <RESPONSE>({ok, title, content}: Readonly<Props>): ResponseModalChildren<RESPONSE> {
	return (onToggle, state) => (
		<Body className="min-w-[20rem]">
			{title && <Header disableCloseButton>{title}</Header>}
			<Content>{content}</Content>
			<Ok onClick={() => onToggle(false)}>{ok}</Ok>
		</Body>
	);
}
