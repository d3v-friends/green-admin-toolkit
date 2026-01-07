"use client";
import React from "react";
import {Panel} from "@app";
import useModal from "../../../../src/v2/hook/use-modal";
import {Button, fnModal} from "../../../../src";

export default function () {
	const [modal, setModal] = useModal();

	const onOk = () => {
		setModal(
			fnModal.ok({
				title: "확인",
				content: <div className="w-80">Alert</div>,
				onClick: () => setModal(null),
			})
		);
	};

	const onOkCancel = () => {
		setModal(
			fnModal.okCancel({
				title: "확인취소",
				content: <div className="w-80">확인취소</div>,
				onClickOk: () => setModal(null),
				onClickCancel: () => setModal(null),
			})
		);
	};

	return (
		<>
			{modal}
			<div className="grid grid-cols-1 gap-2 lg:gap-4">
				<Panel>
					<h5>useModal</h5>
					<div>
						<Button
							className="w-20"
							onClick={onOk}>
							확인
						</Button>
					</div>

					<Button
						className="w-20"
						onClick={onOkCancel}>
						확인취소
					</Button>
				</Panel>
			</div>
		</>
	);
}
