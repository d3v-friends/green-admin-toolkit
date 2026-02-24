"use client";
import React, {useState} from "react";
import {GInputBase, GInputDropbox, GInputDropdownItem, GInputNumber} from "@src";
import {Nullable} from "nextjs-tools";

export default function () {
	const [name, onChangeName] = useState("");
	const [age, onChangeAge] = useState<Nullable<number>>();
	const [dropdown, onChangeDropdown] = useState("01");
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

				<GInputDropbox
					value={dropdown}
					onChange={onChangeDropdown}
					items={DropdownItems}
					label="dropdown"
				/>
			</section>
		</div>
	);
}

const DropdownItems: GInputDropdownItem<string>[] = [
	{label: "Item_01", value: "01"},
	{label: "Item_02", value: "02"},
	{label: "Item_03", value: "03"},
];
