"use client";
import React from "react";
import {gAlert, gOkCancel} from "@src";

export default function () {
	const onClickGAlert = () => {
		gAlert("alert");
	};

	const onOkCancel = () => {
		gOkCancel("ok cancel")
			.ok(() => {
				gAlert("ok");
			})
			.error({
				MODAL_CANCEL: "cancel",
			});
	};

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section className="green">
				<h5>gModal</h5>
				<button
					className="filled"
					onClick={onClickGAlert}>
					gAlert
				</button>

				<button
					className="filled"
					onClick={onOkCancel}>
					okCancel
				</button>
			</section>
		</div>
	);
}
