"use client";
import React, {useState} from "react";
import {Button, ModalBasic} from "@app";

interface Props {}

export default function ({}: Readonly<Props>) {
	const [basic, setBasic] = useState(false);
	return (
		<>
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
		</>
	);
}
