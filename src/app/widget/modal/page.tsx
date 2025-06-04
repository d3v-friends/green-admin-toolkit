"use client";
import React, {useState} from "react";
import {NextPageProps} from "nextjs-tools";
import {Button, ModalBasic, Panel} from "@app/index";

export default function ({}: NextPageProps) {
	const [basic, setBasic] = useState(false);

	return (
		<>
			<Panel>
				<h4>Modal</h4>
				<Button
					className="w-20"
					onClick={() => setBasic(true)}>
					Basic
				</Button>

				<ModalBasic
					open={basic}
					onChange={setBasic}
					header="Baisc modal">
					<div>Hello world</div>
				</ModalBasic>
			</Panel>
		</>
	);
}
