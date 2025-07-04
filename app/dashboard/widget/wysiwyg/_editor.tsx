"use client";
import React, {useState} from "react";
import {EditorTiptap, fnInput} from "@root";

interface Props {}

export default function ({}: Readonly<Props>) {
	const [value, setValue] = useState("<p>Hello world</p>");

	const onGetImage = () => {
		fnInput
			.getImage()
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	return (
		<>
			<EditorTiptap
				className="h-200"
				value={value}
				onChange={setValue}
			/>
		</>
	);
}
