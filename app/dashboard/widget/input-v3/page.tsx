"use client";
import React, {useState} from "react";
import {GInputBase, GInputNumber} from "@src";
import {Nullable} from "nextjs-tools";

export default function () {
	const [name, onChangeName] = useState("");
	const [age, onChangeAge] = useState<Nullable<number>>();
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section className="green">
				<h4>Base</h4>
				<GInputBase
					value={name}
					onChange={onChangeName}
					label="name"
				/>

				<GInputNumber
					value={age}
					onChange={onChangeAge}
					label="age"
				/>
			</section>
		</div>
	);
}
