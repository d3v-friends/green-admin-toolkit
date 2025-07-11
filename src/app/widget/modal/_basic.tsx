"use client";
import React, {useState} from "react";
import {Button, ModalBasic} from "@app/index";

interface Props {}

export default function ({}: Readonly<Props>) {
	const [basic, setBasic] = useState(false);
	return (
		<>
			<h4>Modal basic</h4>
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
