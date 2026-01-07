"use client";
import React, {useState} from "react";
import {InDate, InNumber, InString, Panel, PanelHeader} from "@app";
import {Nullable} from "nextjs-tools";

export default function () {
	const [args, setArgs] = useState<{
		str: string;
		num: string;
		date: Nullable<Date>;
	}>({
		str: "",
		num: "",
		date: new Date(),
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
			</Panel>
		</div>
	);
}
