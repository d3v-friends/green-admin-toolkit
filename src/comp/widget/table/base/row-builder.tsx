import React from "react";
import {TableCol} from "@app/index";
import {fnCss} from "nextjs-tools";

interface Props<T> {
	cols: TableCol<T>[];
	index: number;
	value: T;
}

export default function <T>({cols, value, index}: Readonly<Props<T>>) {
	return cols.map((v, key) => (
		<td
			key={key}
			className={fnCss.sum("border-top", v.cellClassName || "text-center pt-2 pb-2")}>
			{v.parser(value, index)}
		</td>
	));
}
