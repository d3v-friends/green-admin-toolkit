"use client";
import React, {useState} from "react";
import {InString, Panel, PanelHeader, InNumber} from "@app";
import {InArrayCheckbox} from "@app";
import ImgAdd from "web-asset/svg/regular/fi-rr-add.svg";

export default function () {
	const [arrayCheckbox, setArrayCheckbox] = useState("apple");
	const [strValue, setStrValue] = useState("string");
	const [numValue, setNumValue] = useState("");

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelHeader>Input V2</PanelHeader>

				<InArrayCheckbox
					label="Array checkbox"
					list={[
						{value: "apple", label: "apple"},
						{value: "banana", label: "banana"},
						{value: "citron", label: "citron"},
					]}
					value={arrayCheckbox}
					onChange={setArrayCheckbox}>
					{(items) => <div className="grid grid-cols-3 gap-2 lg:gap-4">{items}</div>}
				</InArrayCheckbox>

				<InString
					value={strValue}
					onChange={setStrValue}
					label="string"
					icon={ImgAdd}
					regexp="^[0-9]+$"
					invalidMessage="숫자가 아닙니다."
				/>

				<InNumber
					label="number"
					value={numValue}
					onChange={setNumValue}
					numberType="decimal"
				/>
			</Panel>
		</div>
	);
}
