"use client";
import React, {useState} from "react";
import {InCheckbox, InDate, InNumber, InSelectCheckbox, InString, Panel, PanelHeader} from "@app";
import {Nullable} from "nextjs-tools";

export default function () {
	const [args, setArgs] = useState<{
		str: string;
		num: string;
		date: Nullable<Date>;
		check: boolean;
		checkList: string[];
	}>({
		str: "",
		num: "",
		date: new Date(),
		check: false,
		checkList: ["1", "2"],
	});
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelHeader>Input v2</PanelHeader>
				<InString
					label="string"
					value={args.str}
					onChange={(str) => setArgs({...args, str})}
				/>

				<InNumber
					label="number"
					value={args.num}
					onChange={(num) => setArgs({...args, num})}
					numberType="decimal"
				/>

				<InDate
					label="date"
					value={args.date}
					onChange={(date) => setArgs({...args, date})}
				/>

				<InDate
					label="date (disabled)"
					value={args.date}
					onChange={(date) => setArgs({...args, date})}
					disabled
				/>

				<InCheckbox
					value={args.check}
					onChange={(check) => setArgs({...args, check})}
					label="checkbox"
				/>

				<InSelectCheckbox
					value={args.checkList}
					onChange={(checkList) => setArgs({...args, checkList})}
					items={[
						{label: "item1", value: "1"},
						{label: "item2", value: "2"},
						{label: "item3", value: "3"},
						{label: "item4", value: "4"},
						{label: "item5", value: "5"},
					]}
					label="select checkbox"
				/>
			</Panel>
		</div>
	);
}
