"use client";
import React from "react";
import {gAlert, gModal, ModalContainer, ModalContent, ModalHeader} from "@src";

export default function () {
	const onClick = () => {
		gModal((onClose) => (
			<>
				<ModalContainer>
					<ModalHeader>Hello</ModalHeader>
					<ModalContent>
						World
						<div className="text-right pt-2">
							<button
								className="filled"
								onClick={onClose}>
								Close
							</button>
						</div>
					</ModalContent>
				</ModalContainer>
			</>
		));
	};

	const onClickGAlert = () => {
		gAlert("Hello world", {header: "알림"});
	};

	const onClickOkCancel = () => {};
	return (
		<div className="grid grid-cols-5 gap-2 lg:gap-4">
			<button
				className="filled"
				onClick={onClick}>
				Modal
			</button>
			<button
				className="filled"
				onClick={onClickGAlert}>
				Alert
			</button>
			<button
				className="filled"
				onClick={onClickOkCancel}>
				OkCancel
			</button>
		</div>
	);
}
