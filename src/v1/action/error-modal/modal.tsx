import React, {MouseEventHandler, ReactNode} from "react";
import ModalElement from "../../modal/element";
import {ErrorModalComponent} from ".";

interface Props {
	ok?: ReactNode;
	title?: ReactNode;
	content: (err: string) => ReactNode;
	onClickOk?: MouseEventHandler<HTMLButtonElement>;
}

const {Body, Header, Content, Ok} = ModalElement;

export default function ({ok, title, content, onClickOk = () => {}}: Readonly<Props>): ErrorModalComponent {
	return (onToggle, err) => (
		<Body className="min-w-[20rem]">
			{title && <Header disableCloseButton>{title}</Header>}
			<Content>{content(err)}</Content>
			<Ok
				onClick={(e) => {
					onClickOk(e);
					onToggle(false);
				}}>
				{ok}
			</Ok>
		</Body>
	);
}
