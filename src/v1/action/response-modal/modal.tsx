import React, {MouseEventHandler, ReactNode} from "react";
import ModalElement from "../../modal/element";
import {ResponseModalChildren} from "../../action/response-modal";

interface Props {
	ok?: ReactNode;
	title?: ReactNode;
	content?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const {Body, Header, Content, Ok} = ModalElement;

export default function <RESPONSE>({
	ok,
	title,
	content,
	onClick = () => {},
}: Readonly<Props>): ResponseModalChildren<RESPONSE> {
	return (onToggle, state) => (
		<Body className="min-w-[20rem]">
			{title && <Header disableCloseButton>{title}</Header>}
			<Content>{content}</Content>
			<Ok
				onClick={(e) => {
					onClick(e);
					onToggle(false);
				}}>
				{ok}
			</Ok>
		</Body>
	);
}
