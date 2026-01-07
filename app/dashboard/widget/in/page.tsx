"use client";
import React, {useState} from "react";
import {Panel, PanelHeader} from "@app";
import {InNumber, InString} from "../../../../src";

export default function () {
	const [args, setArgs] = useState<{
		str: string;
		num: string;
	}>({
		str: "",
		num: "",
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
			</Panel>
		</div>
	);
}
